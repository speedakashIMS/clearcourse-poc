import FormAnalytics from '../../scripts/tracking/formTracking.js';
import { blockToMap } from "../../scripts/utils/block.js";

const siteKey = '6Lfok2YsAAAAANgwFBU-7z04b-jAL-8Ua4HJDdIa';

const HEAR_ABOUT_US = {
  type: 'select',
  name: 'source',
  label: 'How did you hear about us?',
  required: true,
  options: ['Google Search', 'Referral', 'Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'Other'],
};

const GENERAL_FIELDS = [
  { type: 'text', name: 'first_name', label: 'First Name', required: true, row: 'name' },
  { type: 'text', name: 'last_name', label: 'Last Name', required: true, row: 'name' },
  { type: 'email', name: 'email', label: 'Email', required: true },
  { type: 'tel', name: 'phone', label: 'Phone', required: true, validationRegex: 'phoneNo' },
  { type: 'text', name: 'company', label: 'Company', required: true },
  {
    type: 'radio', name: 'customer_type', label: 'New Customer',
    id: 'customer-type-new', required: true, row: 'customer_type',
  },
  {
    type: 'radio', name: 'customer_type', label: 'Existing Customer',
    id: 'customer-type-existing', row: 'customer_type',
  },
];

const GENERAL_SUFFIX = [
  { type: 'textarea', name: 'message', label: 'Comment or Message' },
  {
    type: 'checkbox', name: 'terms',
    label: 'I agree to the <a href="/terms" target="_blank">Terms &amp; Conditions</a>',
    required: true,
  },
];

function buildFields(additionalFields = []) {
  return [...GENERAL_FIELDS, ...additionalFields, ...GENERAL_SUFFIX];
}

const FORM_CONFIGS = {
  demo: {
    submitLabel: 'Book A Demo',
    fields: buildFields([
      HEAR_ABOUT_US,
    ]),
  },
  contact: {
    submitLabel: 'Send Message',
    fields: buildFields([
      { type: 'text', name: 'sector', label: 'Sector', required: true },
      { type: 'text', name: 'website', label: 'Website Address', validationRegex: 'alphanumeric' },
      HEAR_ABOUT_US,
    ]),
  },
  domain: {
    submitLabel: 'Send Message',
    fields: buildFields(),
  },
  product: {
    submitLabel: 'Send Message',
    fields: buildFields(),
  },
  general: {
    submitLabel: 'Send Message',
    fields: buildFields(),
  },
};

function getFormConfig(type) {
  return { type: type, ...FORM_CONFIGS[type] };
}

function extractScriptsAndHtml(htmlContent) {
  const scripts = [];
  let cleanHtml = htmlContent;

  // Extract external scripts <script src="..."></script>
  const srcScriptRegex = /<script[^>]*src=["']([^"']+)["'][^>]*><\/script>/gi;
  cleanHtml = cleanHtml.replace(srcScriptRegex, (_, src) => {
    scripts.push({ src });
    return '';
  });

  // Extract inline scripts <script>...</script>
  const inlineScriptRegex = /<script[^>]*>([^<]*)<\/script>/gi;
  cleanHtml = cleanHtml.replace(inlineScriptRegex, (_, code) => {
    scripts.push({ code: code.trim() });
    return '';
  });

  return { scripts, html: cleanHtml.trim() };
}

export default async function decorate(block) {
  const blockData = blockToMap(block);

  if (blockData.variant === 'marketo') {
    block.innerHTML = '';

    const React = (await import('react')).default;
    const { createRoot } = await import('react-dom/client');
    const Form = (await import('../../scripts/components/Form.js')).default;

    const { scripts, html } = extractScriptsAndHtml(blockData.script.slice(1, -1));

    const root = createRoot(block);
    block._formRoot = root;
    root.render(React.createElement(Form, {
      htmlContent: html,
      scripts,
      submitLabel: null
    }));

    // Attach form tracking after scripts load
    setTimeout(() => {
      const formName = blockData.title || 'Marketo Form';
      FormAnalytics.attachMarketo(1024, formName);
      // Register form for field-level tracking
      const form = block.querySelector('form');
      if (form) {
        FormAnalytics.registerForm(form, { formName });
      }
    }, 1000);
  } else {
    const { type: formType, fields, submitLabel } = getFormConfig(blockData.variant);

    await loadRecaptcha();

    const handleSubmit = async (event) => {
      event.preventDefault();

      const form = event.target;
      const submitButton = form.querySelector('[type="submit"]');
      submitButton?.setAttribute('disabled', 'true');

      const email = form.querySelector('[name="email"]')?.value || '';

      try {
        const token = await grecaptcha.execute(siteKey, { action: 'submit' });

        if (!token) {
          const msg = 'reCAPTCHA verification failed. Please try again.';
          showMessage(msg, 'error');
          await FormAnalytics.trackSubmissionResult(form, { status: 'failure', message: msg, email, formName: blockData.title || 'unknown' });
          return;
        }

        const formData = new FormData(form);

        formData.append('form_type', formType);
        formData.append('brand', 'CSY');

        const params = new URLSearchParams(window.location.search);
        if (params.get('utm_source')) formData.append('utm_source', params.get('utm_source'));
        if (params.get('utm_medium')) formData.append('utm_medium', params.get('utm_medium'));
        if (params.get('utm_campaign')) formData.append('utm_campaign', params.get('utm_campaign'));

        formData.append('page_url', window.location.href);

        const pageTitle = document.querySelector('meta[name="og:title"]')?.content
          || document.querySelector('meta[property="og:title"]')?.content
          || document.title;
        if (pageTitle) formData.append('page_title', pageTitle);

        const response = await fetch(
          'https://publish-p153382-e1601836.adobeaemcloud.com/api/form-submit',
          {
            method: 'POST',
            headers: {
              'X-PSK': '~bRlLn8#[`e_FkO)uIe;3;zR',
              'X-Recaptcha-Token': token,
            },
            body: formData,
          },
        );

        const contentType = response.headers.get('content-type');
        const responseBody = contentType?.includes('application/json')
          ? await response.json()
          : await response.text();

        if (response.ok) {
          const successMsg = 'Form submitted successfully!';
          const submissionId = FormAnalytics.generateSubmissionId();

          console.log('Form successfully sent:', responseBody);
          showMessage(successMsg, 'success');
          await FormAnalytics.trackSubmissionResult(form, { status: 'success', message: successMsg, email, submissionId, formName: blockData.title || 'unknown' });

          form.reset();
        } else {
          const msg = getHttpErrorMessage(response.status, response);
          showMessage(msg, 'error');
          await FormAnalytics.trackSubmissionResult(form, { status: 'failure', message: msg, email, formName: blockData.title || 'unknown' });
          console.error('HTTP Error:', response.status, responseBody);
        }
      } catch (error) {
        const msg = 'Network or reCAPTCHA error. Please try again.';
        console.error('Error:', error);
        showMessage(msg, 'error');
        await FormAnalytics.trackSubmissionResult(form, { status: 'failure', message: msg, email, formName: blockData.title || 'unknown' });
      } finally {
        submitButton?.removeAttribute('disabled');
      }
    };

    if (block._formRoot) {
      block._formRoot.unmount();
      block._formRoot = null;
    }
    block.innerHTML = '';

    const React = (await import('react')).default;
    const { createRoot } = await import('react-dom/client');
    const Form = (await import('../../scripts/components/Form.js')).default;

    const root = createRoot(block);
    block._formRoot = root;
    root.render(React.createElement(Form, {
      fields,
      onSubmit: handleSubmit,
      submitLabel,
    }));

    // Register form for field-level tracking after render
    setTimeout(() => {
      const form = block.querySelector('form');
      if (form) {
        FormAnalytics.registerForm(form, { formName: blockData.title || formType });
      }
    }, 0);
  }
}

function loadRecaptcha() {
  return new Promise((resolve) => {
    if (window.grecaptcha) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    script.onload = resolve;
    document.head.appendChild(script);
  });
}

function getHttpErrorMessage(status, response) {
  switch (status) {
    case 400: return 'Invalid request. Please check your input.';
    case 401: return 'Unauthorized. Authentication failed.';
    case 403: return 'Forbidden. You do not have permission.';
    case 429: {
      const retryAfter = response.headers.get('Retry-After');
      return retryAfter
        ? `Too many requests. Try again in ${retryAfter} seconds.`
        : 'Too many requests. Please wait and try again.';
    }
    case 500: return 'Server error. Please try again later.';
    default: return `Unexpected error (${status}).`;
  }
}

function showMessage(message, type) {
  console.log(`[${type.toUpperCase()}] ${message}`);
}