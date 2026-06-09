/***********************************************************
 * FORM ANALYTICS — Form Tracking Event Framework
 *
 * Tracks three event types via window.adobeDataLayer:
 *   form_initiation       — first focus on any form field (once per engagement)
 *   form_field_validation — on field blur (text/select/textarea) or click (checkbox/radio)
 *   form_submission       — when the submission result is displayed to the visitor
 *
 * Initialise by calling FormAnalytics.attach() once on page load.
 * For async submission outcomes call FormAnalytics.trackSubmissionResult(form, result).
 ***********************************************************/

(function (window) {
  window.adobeDataLayer = window.adobeDataLayer || [];

  /***********************
   * NORMALISATION
   ***********************/
  function normalize(value) {
    if (value == null) return undefined;
    const cleaned = String(value)
      .replace(/<[^>]*>/g, '')
      .toLowerCase()
      .trim()
      .slice(0, 100);
    return cleaned || undefined;
  }

  function cleanObject(obj) {
    const out = {};
    Object.keys(obj).forEach((key) => {
      if (obj[key] !== undefined && obj[key] !== null && obj[key] !== '') {
        out[key] = obj[key];
      }
    });
    return out;
  }

  /***********************
   * FORM REGISTRY
   * Store form properties for access during tracking
   ***********************/
  const formRegistry = new WeakMap();

  function registerForm(form, config = {}) {
    formRegistry.set(form, config);
  }

  function registerForms(formsOrSelector, config = {}) {
    let forms = formsOrSelector;
    if (typeof formsOrSelector === 'string') {
      forms = document.querySelectorAll(formsOrSelector);
    } else if (formsOrSelector instanceof HTMLElement) {
      forms = [formsOrSelector];
    }

    forms.forEach(form => registerForm(form, config));
  }

  function getFormConfig(form) {
    return formRegistry.get(form) || {};
  }

  /***********************
   * FORM NAME RESOLUTION
   ***********************/
  function getFormName(form, config = {}) {
    const registeredConfig = getFormConfig(form);
    const mergedConfig = { ...registeredConfig, ...config };
    return (
      mergedConfig.formName
      || form.getAttribute('data-analytics-form-name')
      || form.getAttribute('name')
      || form.id
      || 'unknown'
    );
  }

  /***********************
   * HASHING / ID UTILS
   ***********************/
  async function hashEmail(email) {
    const normalised = email.toLowerCase().trim();
    const buffer = await crypto.subtle.digest(
      'SHA-256',
      new TextEncoder().encode(normalised),
    );
    return Array.from(new Uint8Array(buffer))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
  }

  function generateSubmissionId() {
    return crypto.randomUUID?.()
      ?? `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
  }

  /***********************
   * CORE PUSH
   ***********************/
  function pushEvent(event, trigger, formData) {
    const payload = {
      event,
      data: {
        event_trigger: trigger,
        form: cleanObject(formData),
      },
    };
    console.log('Form Analytics Event:', payload);
    window.queueAdobeEvent(payload);
  }

  /***********************
   * INITIATION TRACKING
   ***********************/
  const initiatedForms = new WeakSet();

  function handleFocus(e) {
    const form = e.target.closest('form');
    if (!form || initiatedForms.has(form)) return;

    initiatedForms.add(form);
    pushEvent('form_initiation', 'focus', {
      name: normalize(getFormName(form)),
    });
  }

  /***********************
   * VALIDATION TRACKING
   ***********************/
  const validationDebounce = new Map(); // form -> field -> { status, time }

  function trackFieldValidation(field, form, status, message, trigger) {
    const name = field.name || field.id;
    if (!name) return;

    const formName = getFormName(form);
    const key = `${formName}|${name}|${status}`;
    const now = Date.now();

    // De-duplicate: don't track the same field+status within 500ms
    const last = validationDebounce.get(key);
    if (last && now - last < 500) return;

    validationDebounce.set(key, now);

    pushEvent('form_field_validation', trigger, {
      name: normalize(formName),
      field_name: normalize(name),
      field_validation_status: normalize(status),
      field_validation_message: normalize(message),
    });
  }

  // Text / select / textarea — fires on blur
  function handleBlur(e) {
    const field = e.target;
    const form = field.closest('form');
    if (!form) return;
    if (!['INPUT', 'TEXTAREA', 'SELECT'].includes(field.tagName)) return;
    if (['checkbox', 'radio'].includes(field.type)) return; // handled via change
    if (field.type === 'hidden') return;
    if (field.classList.contains('sr-only') && field.tagName !== 'SELECT') return;

    let status = 'no_validation';
    let message;

    if (field.checkValidity) {
      const valid = field.checkValidity();
      status = valid ? 'passed' : 'failed';
      if (!valid) message = field.validationMessage;
    }

    trackFieldValidation(field, form, status, message, 'blur');
  }

  // Required field failed native validation on submit attempt
  function handleInvalid(e) {
    const field = e.target;
    const form = field.closest('form');
    if (!form) return;

    trackFieldValidation(field, form, 'failed', field.validationMessage, 'submit');
  }

  // Checkbox / radio — fires on change, reports as click per spec
  function handleChange(e) {
    const field = e.target;
    const form = field.closest('form');
    if (!form) return;
    if (!['checkbox', 'radio'].includes(field.type)) return;

    const name = field.name || field.id;
    if (!name) return;

    let status;
    let message;

    if (field.type === 'checkbox') {
      const failed = field.required && !field.checked;
      status = failed ? 'failed' : (field.required ? 'passed' : 'no_validation');
      if (failed) message = field.validationMessage;
    } else {
      // Selecting any radio option counts as passed
      status = 'passed';
    }

    pushEvent('form_field_validation', 'click', {
      name: normalize(getFormName(form)),
      field_name: normalize(name),
      field_validation_status: normalize(status),
      field_validation_message: normalize(message),
    });
  }

  /***********************
   * SUBMISSION TRACKING
   ***********************/

  // Fires on the native submit event — use trackSubmissionResult for async outcomes
  function handleSubmit(e) {
    const form = e.target;
    if (!form) return;

    // Fire validation events first (spec requirement), then submission
    setTimeout(() => {
      const valid = form.checkValidity();
      pushEvent('form_submission', 'submit', {
        name: normalize(getFormName(form)),
        submission_status: normalize(valid ? 'success' : 'failure'),
      });
    }, 0);
  }

  /***********************
   * MANUAL SUBMISSION RESULT
   * Call this after the async fetch resolves so the event fires when the
   * result is actually displayed to the visitor (per spec).
   *
   * result: {
   *   status:       'success' | 'failure'
   *   message:      string (user-facing)
   *   email:        string (raw — will be hashed internally)
   *   submissionId: string (on success)
   *   formName:     string (override, optional)
   * }
   ***********************/
  async function trackSubmissionResult(form, result = {}) {
    const formData = {
      name: normalize(getFormName(form, result)),
      submission_status: normalize(result.status),
      submission_message: normalize(result.message),
    };

    if (result.email) {
      try {
        formData.metadata_hashed_email = await hashEmail(result.email);
      } catch {
        // crypto.subtle unavailable (non-secure context) — omit field
      }
    }

    if (result.submissionId) {
      formData.metadata_submission_id = result.submissionId;
    }

    pushEvent('form_submission', 'submit', formData);
  }

  /***********************
   * ATTACH LISTENERS
   * Uses document-level delegation so forms added dynamically (e.g. via
   * React) are covered without needing per-form setup.
   ***********************/
  function attach() {
    document.addEventListener('focusin', handleFocus);
    document.addEventListener('blur', handleBlur, true);
    document.addEventListener('change', handleChange);
    document.addEventListener('invalid', handleInvalid, true);
    //document.addEventListener('submit', handleSubmit);
  }

  /***********************
   * MARKETO FORM TRACKING
   ***********************/
  async function attachMarketo(formId, formName) {
    if (!window.MktoForms2) return Promise.reject('MktoForms2 not loaded');

    return new Promise((resolve) => {
      MktoForms2.whenReady(function (form) {
        if (form.getId() !== formId) return;

        const formElem = form.getFormElem()[0];
        let lastValidationStatus = null;

        // Track form validation attempt — isValid is a boolean
        form.onValidate(function (isValid) {
          // Only track if validation status changed to avoid duplicates
          if (lastValidationStatus === isValid) return;
          lastValidationStatus = isValid;

          pushEvent('form_field_validation', 'submit', {
            name: normalize(formName || `Marketo Form ${formId}`),
            field_validation_status: normalize(isValid ? 'passed' : 'failed'),
          });
        });

        // Track successful submission
        form.onSuccess(function (values) {
          trackSubmissionResult(formElem, {
            status: 'success',
            email: values.Email,
            submissionId: generateSubmissionId(),
            formName: formName || `Marketo Form ${formId}`,
          });
          return false; // prevent default Marketo redirect
        });

        resolve();
      });
    });
  }

  /***********************
   * PUBLIC API
   ***********************/
  window.FormAnalytics = {
    attach,
    attachMarketo,
    trackSubmissionResult,
    registerForm,
    registerForms,
    hashEmail,
    generateSubmissionId,
  };
})(window);

export default window.FormAnalytics;