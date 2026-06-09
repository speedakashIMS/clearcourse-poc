/**
 * FormElement Component
 *
 * A reusable form field component with floating labels and validation states.
 * Designed for AEM compatibility (no React hooks, vanilla JS only).
 *
 * USAGE:
 * <FormElement
 *   type="text"                    // input type: text, password, tel, email, select, textarea, checkbox, file
 *   label="Field Label"            // floating label text
 *   validation="valid"             // validation state: 'valid', 'invalid', or null
 *   errorMessage="Error message"   // error message for invalid state
 *   options={[]}                   // options for select fields [{value, label}] or [string]
 *   value="pre-filled value"       // controlled value (optional)
 *   onChange={handleChange}        // controlled onChange handler (optional)
 * />
 *
 * FIELD TYPES:
 * - 'text', 'password', 'tel', 'email': Standard text inputs
 * - 'select': Custom dropdown with options
 * - 'textarea': Multi-line text input
 * - 'checkbox': Custom styled checkbox (20px, CSS variables)
 * - 'radio': Custom styled radio button (20px, CSS variables)
 * - 'file': File upload with button
 *
 * VALIDATION STATES:
 * - 'valid': Shows valid styling (no error message)
 * - 'invalid': Shows error border and error message
 * - null: No validation styling
 *
 * LABEL BEHAVIOR:
 * - Labels start at normal position with background
 * - Labels move to elevated position (top-[6px]) when focused
 * - Labels stay elevated when field has content (even after blur)
 * - Uses placeholder text to detect field content
 *
 * SELECT FIELD BEHAVIOR:
 * - Uses hidden native select element for form functionality
 * - Custom visual dropdown with vanilla JavaScript
 * - Native select value updates when custom dropdown option is selected
 * - Maintains accessibility and form submission compatibility
 *
 * EXAMPLES:
 *
 * // Basic text input
 * <FormElement label="Email" type="email" />
 *
 * // Password field with error
 * <FormElement
 *   type="password"
 *   label="Password"
 *   validation="invalid"
 *   errorMessage="Password must be at least 8 characters"
 * />
 *
 * // Select dropdown with options
 * <FormElement
 *   type="select"
 *   label="Country"
 *   options={[
 *     { value: "uk", label: "United Kingdom" },
 *     { value: "us", label: "United States" }
 *   ]}
 * />
 *
 * // Textarea
 * <FormElement
 *   type="textarea"
 *   label="Message"
 *   validation="invalid"
 *   errorMessage="Message is required"
 * />
 *
 * // Checkbox field
 * <FormElement
 *   type="checkbox"
 *   label="I agree to the terms and conditions"
 *   validation="invalid"
 *   errorMessage="You must accept the terms"
 * />
 *
 * // Radio field
 * <FormElement
 *   type="radio"
 *   label="Select option"
 *   name="radio-group"
 * />
 *
 * // File upload field
 * <FormElement
 *   type="file"
 *   label="Upload any supporting files here"
 * />
 *
 * PROPS:
 * - type: string - Input type (text, password, tel, email, select, textarea, checkbox, radio, file)
 * - label: string - Floating label text (also used as placeholder)
 * - validation: string - Validation state ('valid', 'invalid', null)
 * - errorMessage: string - Error message for invalid state
 * - options: array - Options for select fields [{value, label}] or [string]
 * - value: string - Controlled value (optional)
 * - onChange: function - Controlled onChange handler (optional)
 * - validationRegex: string - Validation regex type (email, phoneNo, postcode, etc.)
 * - onBlur: function - onBlur handler (optional)
 * - disabled: boolean - Disabled state
 * - additionalClasses: string - Extra CSS classes
 * - ...props - Any other HTML input attributes
 *
 * TECHNICAL NOTES:
 * - AEM-compatible: No React hooks, uses vanilla JavaScript
 * - Select fields: Hidden native select + custom visual dropdown
 * - Label association: Uses htmlFor attribute for accessibility
 * - ID generation: Sanitizes labels for valid CSS selectors
 * - File upload: Validates file size (max 5MB)
 * - Checkbox: Hidden native checkbox + custom visual styling
 */

import { CheckIcon } from "@heroicons/react/24/solid";

// ============================================================================
// CONSTANTS & BASE CLASSES
// ============================================================================

// Base field classes with CSS variables
const FORM_FIELD_CLASSES =
  'w-full flex items-center gap-10 text-base focus:outline-none focus:ring-1 focus:ring-grey-500 rounded-10 bg-grey-200 border border-grey-200 p-atom-text-inputs-padding-y text-grey-500';

// Label classes for text fields (relative at top)
const FORM_LABEL_CLASSES_TOP =
  'block mb-2 text-sm text-grey-950 font-medium';

// Label classes for inline (checkbox/radio)
const FORM_LABEL_CLASSES_INLINE =
  'relative top-[2px] text-body-small text-grey-950';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

// ============================================================================
// COMPONENT
// ============================================================================

const FormElement = ({
  type = 'text',
  label,
  additionalClasses = '',
  validation = null,
  errorMessage = '',
  value: externalValue,
  onChange: externalOnChange,
  onClick,
  options = [],
  validationRegex,
  onBlur,
  disabled = false,
  id = '',
  ...props
}) => {
  // ============================================================================
  // HELPER FUNCTIONS - ID Generation
  // ============================================================================

  /**
   * Sanitizes a string to be used as a valid CSS ID
   */
  const sanitizeId = (str) => {
    return str?.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '') || 'field';
  };

  /**
   * Generates a unique ID for form elements
   * If id prop is provided, use it directly for the input element
   * Otherwise, generate a unique ID
   */
  const generateUniqueId = (baseId, props) => {
    // If id is provided, return it directly
    if (id) {
      return id;
    }
    
    // Otherwise generate unique ID
    const uniqueSuffix =
      props.name ||
      `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    return `${baseId}-${sanitizeId(uniqueSuffix)}`;
  };

  const formGroupId = id ? `form-group-${id}` : generateUniqueId(`form-group-${sanitizeId(label)}`, props);
  const value = externalValue !== undefined ? externalValue : '';

  // ============================================================================
  // HELPER FUNCTIONS - Validation Regex Patterns
  // ============================================================================

  /**
   * Returns regex pattern and title for validation types
   */
  const getValidationRegex = (validationType) => {
    const patterns = {
      email: {
        pattern: '^(?!\\s*$)(?!.*<[^>]+>)[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}$',
        title: 'Please enter a valid email address.',
      },
      phoneNo: {
        pattern: /^(?:(?:\+44[\s.\-]?)?(?:\(\+44\)[\s.\-]?)?(?:\+44[\s.\-]?\(0\)[\s.\-]?)?)?(?:\(0[1-37]\d{0,4}\)[\s.\-]?|0[1-37][\s.\-]?|[1-37])?(?:\d[\s.\-]?){4,10}\d$/,
        title: 'Please enter a valid UK phone number.',
      },
      postcode: {
        pattern: /^(?!\s*$)(?!.*<[^>]+>)(GIR ?0AA|[A-Z]{1,2}[0-9][0-9A-Z]? ?[0-9][A-Z]{2})$/i,
        title: 'Please enter a valid UK postcode.',
      },
      alphabetic: {
        pattern: '^(?!\\s*$)(?!.*<[^>]+>)[A-Za-z\\s\\p{P}\\p{S}]{2,}$',
        title: 'Letters, spaces, and symbols are allowed — numbers are not allowed.',
      },
      alphanumeric: {
        pattern: /^(?!\s*$)(?=.*[A-Za-z0-9]).{2,}$/s,
        title: 'Must be at least 2 characters and include at least one letter or number; symbols and spaces are allowed.',
      },
      alphanumeric_atleast1char: {
        pattern: /^(?!\s*$)(?=.*[A-Za-z0-9]).{1,}$/s,
        title: 'Must be at least 1 character and include at least one letter or number; symbols and spaces are allowed.',
      },
      number: {
        pattern: '^(?!\\s*$)(?!.*<[^>]+>)[0-9 ]+$',
        title: 'Numbers and spaces only — no letters or symbols.',
      },
      decimal: {
        pattern: '^(?!\\s*$)(?!.*<[^>]+>)[0-9]+(\\.[0-9]{1,2})?$',
        title: 'Numbers with up to 2 decimal places — no letters, spaces, or symbols.',
      },
    };

    return patterns[validationType] || {
      pattern: '^(?!\\s*$)(?!.*<[^>]+>).+$',
      title: 'Invalid validation type.',
    };
  };

  // ============================================================================
  // HELPER FUNCTIONS - Class Generators
  // ============================================================================

  /**
   * Generates field classes based on validation and disabled states
   * Uses CSS variables for styling
   */
  const getFieldClasses = () => {
    let classes = FORM_FIELD_CLASSES;

    if (validation === 'invalid') {
      classes = `${classes} ring-1 ring-red-500 focus:ring-red-500`;
    }

    if (disabled) {
      classes = `${classes} cursor-not-allowed opacity-50`;
    }

    return `${classes} ${additionalClasses}`;
  };

  /**
   * Generates label classes for top-positioned labels (text, textarea, select)
   */
  const getFieldLabelClassesTop = () => {
    let classes = FORM_LABEL_CLASSES_TOP;
    if (disabled) {
      classes = `${classes} opacity-50 cursor-not-allowed`;
    }
    return classes;
  };

  /**
   * Generates label classes for inline labels (checkbox, radio)
   */
  const getFieldLabelClassesInline = () => {
    let classes = FORM_LABEL_CLASSES_INLINE;
    if (disabled) {
      classes = `${classes} opacity-50 cursor-not-allowed`;
    }
    return classes;
  };

  // ============================================================================
  // HELPER FUNCTIONS - Validation State Management
  // ============================================================================

  /**
   * Updates field validation state visually
   */
  const updateFieldValidationState = (element, isValid) => {
    const errEl = document.querySelector(`#${formGroupId} .validation-invalid-message`);

    console.log(isValid)

    if (isValid) {
      errEl && (errEl.style.display = 'none');
      element.classList?.remove('ring-1');
      element.classList?.remove('ring-red-500');
      element.classList?.remove('focus:ring-red-500');
    } else {
      errEl && (errEl.style.display = 'block');
      element.classList?.add('ring-1');
      element.classList?.add('ring-red-500');
      element.classList?.add('focus:ring-red-500');
    }
  };

  /**
   * Validates field value against regex pattern
   */
  const validateField = (element) => {
    const { pattern, title } = getValidationRegex(validationRegex);
    const regex = new RegExp(pattern);
    const inputValue = element.value.trim();
    const missingRequiredValue = element.required && inputValue === '';
    const invalidValuePerRegex = inputValue !== '' && !regex.test(inputValue);

    if (missingRequiredValue || invalidValuePerRegex) {
      updateFieldValidationState(element, false);
      return false;
    } else if (regex.test(inputValue)) {
      updateFieldValidationState(element, true);
      return true;
    } else if (!element.required && !element.value) {
      updateFieldValidationState(element, true);
      return true;
    } else {
      updateFieldValidationState(element, false);
      return false;
    }
  };

  // ============================================================================
  // EVENT HANDLERS
  // ============================================================================

  /**
   * Handles input/select change events
   */
  const handleInputChange = (e) => {
    externalOnChange && externalOnChange(e);
    if (validationRegex && e.target) {
      validateField(e.target);
    }
  };

  /**
   * Handles input blur events
   */
  const handleInputBlur = (e) => {
    const inputValue = e.target.value.trim();
    const missingRequiredValue = e.target.required && inputValue === '';

    e.target.setAttribute('inputLabel', e.target.placeholder);

    if (missingRequiredValue) {
      e.target.setCustomValidity(errorMessage);
      updateFieldValidationState(e.target, false);
    } else if (e.target.required && !missingRequiredValue && !validationRegex) {
      e.target.setCustomValidity(''); 
      updateFieldValidationState(e.target, true);
    } else if (validationRegex) {
      const { pattern, title } = getValidationRegex(validationRegex);
      const regex = new RegExp(pattern);

      if (inputValue !== '' && !regex.test(inputValue)) {
        e.target.setCustomValidity(title);
      } else {
        e.target.setCustomValidity('');
      }
    }

    onBlur?.(e);
  };

  /**
   * Handles file upload change
   */
  const handleFileChange = (e, fileTextId) => {
    const fileTextElement = document.querySelector(`span#${fileTextId}`);
    const file = e.target.files[0];

    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        alert('File size must not exceed 5MB.');
        e.target.value = '';
        fileTextElement.textContent = '';
      } else {
        fileTextElement.textContent = file.name;
      }
    } else {
      fileTextElement.textContent = '';
    }
  };

  /**
   * Handles checkbox/radio change
   */
  const handleCheckboxChange = (e) => {
    const isRadio = e.target.type === 'radio';
    const customCheckbox = e.target.parentElement.querySelector('div');
    const checkIcon = customCheckbox?.querySelector('svg');

    if (isRadio) {
      const radioDot = customCheckbox?.querySelector('.radio-dot');
      if (e.target.checked) {
        radioDot && radioDot.classList.add('opacity-100');

        // Reset every other radio in the same group
        document
          .querySelectorAll(`input[type="radio"][name="${e.target.name}"]`)
          .forEach((sibling) => {
            if (sibling === e.target) return;
            const siblingCustom = sibling.parentElement.querySelector('div');
            siblingCustom?.classList.remove('bg-grey-500', 'border-grey-500');
            siblingCustom?.classList.add('bg-grey-200', 'border-grey-200');
            siblingCustom?.querySelector('.radio-dot')?.classList.remove('opacity-100');
          });
      } else {
        radioDot && radioDot.classList.remove('opacity-100');
      }
    }
    
    if (e.target.checked) {
      // Update background when checked
      customCheckbox.classList.add('bg-grey-500', 'border-grey-500');
      customCheckbox.classList.remove('bg-grey-200', 'border-grey-200');
      checkIcon && checkIcon.classList.add('opacity-100');
    } else {
      // Reset to default background when unchecked
      customCheckbox.classList.remove('bg-grey-500', 'border-grey-500');
      customCheckbox.classList.add('bg-grey-200', 'border-grey-200');
      checkIcon && checkIcon.classList.remove('opacity-100');
    }

    externalOnChange && externalOnChange(e);
    onClick && onClick(e);
  };

  // ============================================================================
  // RENDER FUNCTIONS - Select Field
  // ============================================================================

  /**
   * Renders select dropdown field
   */
  const renderSelectField = () => {
    const selectId = id || generateUniqueId('select', props);
    const dropdownId = id ? `dropdown-${id}` : generateUniqueId('dropdown', props);

    const getSelectedDisplayText = () => {
      if (externalValue) {
        const option = options.find((opt) => (opt.value || opt) === externalValue);
        return option?.label || '';
      }
      return 'Please select';
    };

    const toggleDropdown = (target, selectedValue) => {
      const currentDropdown = document.getElementById(dropdownId);
      const currentDropdownArrow = document.querySelector(`.${dropdownId}-arrow`);
      const allDropdowns = document.querySelectorAll('[id^="dropdown-"]');

      // Close all other dropdowns
      allDropdowns.forEach((d) => {
        if (d.id !== dropdownId) d.style.display = 'none';
      });

      // Toggle current dropdown
      if (currentDropdown.style.display === 'block') {
        currentDropdown.style.display = 'none';
        currentDropdownArrow?.classList.remove('rotate-180');
      } else {
        currentDropdown.style.display = 'block';
        currentDropdownArrow?.classList.add('rotate-180');
      }
    };

    const handleOptionSelect = (optionValue, optionLabel) => {
      const nativeSelect = document.getElementById(selectId);

      // Update native select and dispatch change + blur so form tracking picks them up
      if (nativeSelect) {
        nativeSelect.value = optionValue;
        nativeSelect.dispatchEvent(new Event('change', { bubbles: true }));
        nativeSelect.dispatchEvent(new Event('blur', { bubbles: true }));
      }

      // Update display text
      const displaySpan = document.querySelector(`#${selectId}`)?.parentElement?.querySelector('span');
      if (displaySpan) {
        displaySpan.textContent = optionLabel;
        displaySpan.className = 'text-grey-700';
      }

      // Synthetic event shared by onChange / onBlur / onClick callbacks
      const syntheticEvent = {
        target: {
          value: optionValue,
          name: props.name,
          tagName: 'SELECT',
        },
      };

      handleInputChange(syntheticEvent);
      onBlur?.(syntheticEvent);
      onClick?.(syntheticEvent);

      toggleDropdown(document.querySelector(`#input-${dropdownId}`), optionValue);
    };

    const hasSelectedValue = getSelectedDisplayText() !== 'Please select';

    return (
      <div className="relative" id={formGroupId}>
        {/* Hidden native select for form functionality */}
        <select
          id={selectId}
          className="sr-only"
          defaultValue={externalValue || ''}
          name={label}
          onChange={handleInputChange}
          {...props}
        >
          <option value=""></option>
          {options.map((option, index) => {
            const optionValue = typeof option === 'string' ? option : (option.value ?? option);
            const optionLabel = typeof option === 'string' ? option : (option.label || optionValue);
            
            return (
              <option
                key={index}
                value={optionValue}
                {...(typeof option === 'object' ? (option.attributes ?? {}) : {})}
              >
                {optionLabel}
              </option>
            );
          })}
        </select>

        {/* Label at top */}
        <label htmlFor={selectId} className={getFieldLabelClassesTop()}>
          {label}
        </label>

        {/* Custom visual interface */}
        <div className="relative">
          <div
            id={`input-${dropdownId}`}
            className={`
              ${getFieldClasses()}  flex items-center justify-between
              ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
            `}
            onClick={(e) => !disabled && toggleDropdown(e.target)}
          >
            <span
              id={`${selectId}-value`}
              className={`${
                !hasSelectedValue
                  ? 'text-grey-500'
                  : 'text-grey-700'
              }`}
            >
              {hasSelectedValue ? getSelectedDisplayText() : 'Please select'}
            </span>

            <div>
              <svg
                className={`${dropdownId}-arrow w-[18px] h-[18px] text-grey-500 transition-transform`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Custom Dropdown Options */}
        <div
          id={dropdownId}
          className="absolute z-20 w-full mt-1 bg-grey-50 border border-grey-500 rounded-[8px] shadow-lg max-h-200 overflow-auto"
          style={{ display: 'none' }}
        >
          {options.map((option, index) => {
            const optionValue = typeof option === 'string' ? option : (option.value ?? option);
            const optionLabel = typeof option === 'string' ? option : (option.label || optionValue);

            return (
              <div
                key={index}
                className="px-10 py-[7px] text-grey-950 cursor-pointer hover:bg-grey-950/5 hover:text-grey-700 transition-colors first:rounded-t-[8px] last:rounded-b-[8px]"
                onClick={() => handleOptionSelect(optionValue, optionLabel)}
              >
                {optionLabel}
              </div>
            );
          })}
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div
            className={`mt-1 text-red-500 text-sm validation-invalid-message ${
              validation === 'invalid' ? 'block' : 'hidden'
            }`}
          >
            {errorMessage}
          </div>
        )}
      </div>
    );
  };

  // ============================================================================
  // RENDER FUNCTIONS - File Upload Field
  // ============================================================================

  /**
   * Renders file upload field
   * Label is positioned relative at the top
   */
  const renderFileField = () => {
    const fileInputId = id || generateUniqueId('file', props);
    const fileTextId = `${fileInputId}-text`;

    return (
      <div id={formGroupId}>
        <label htmlFor={fileInputId} className={getFieldLabelClassesTop()}>
          {label}
        </label>
        <div className="flex-col md:flex-row flex md:items-center space-y-2 md:space-y-0 md:space-x-4">
          <label className={`btn  px-16 py-8 
            ${validation === 'invalid' ? 'bg-red-600' : 'bg-grey-500'}
            ${disabled ? 'cursor-not-allowed bg-grey-200! text-white!' : 'btn-dark'}
          `}>
            <input
              id={fileInputId}
              type="file"
              className="hidden"
              onChange={(e) => handleFileChange(e, fileTextId)}
              {...(disabled ? { disabled: true } : {})}
            />
            UPLOAD FILE
          </label>
          <span
            id={fileTextId}
            className={`truncate max-w-[150px] ${disabled ? 'text-grey-950/20' : 'text-grey-950'}`}
          >
            No file chosen
          </span>
        </div>

        {/* Error Message */}
        {validation === 'invalid' && errorMessage && (
          <div className="mt-1 text-red-500 text-sm validation-invalid-message">{errorMessage}</div>
        )}
      </div>
    );
  };

  // ============================================================================
  // RENDER FUNCTIONS - Checkbox/Radio Field
  // ============================================================================

  /**
   * Renders checkbox or radio field
   */
  const renderCheckboxField = () => {
    const isRadio = type === 'radio';
    const fieldId = id || generateUniqueId(isRadio ? 'radio' : 'checkbox', props);

    return (
      <div {...(props.containerId ? { id: props.containerId } : {})}>
        <div className="flex items-start space-x-3">
          <div className="relative">
            <input
              type={isRadio ? 'radio' : 'checkbox'}
              id={fieldId}
              className="sr-only"
              placeholder={label}
              defaultChecked={externalValue}
              onChange={handleCheckboxChange}
              {...(disabled ? { disabled: true } : {})}
              {...props}
            />
            {/* Custom checkbox/radio styling */}
            <div
              className={`mt-1 w-5 h-5 flex items-center justify-center transition-all focus:ring-1 focus:ring-grey-950 rounded-4 border border-grey-200 bg-grey-200 
              ${isRadio ? 'rounded-full' : 'rounded-4'}
              ${
                disabled ? 'cursor-not-allowed opacity-40' : 'cursor-pointer opacity-100'
              } ${additionalClasses}`}
              onClick={() => {
                if (disabled) return;
                const labelElement = document.querySelector(`label[for="${fieldId}"]`);
                labelElement?.click();
              }}
            >
              {/* Check icon - only show for checkbox, not radio */}
              {!isRadio && (
                <CheckIcon name="check" className={`w-[15px] h-[15px] text-white transition-opacity ${externalValue ? 'opacity-100' : 'opacity-0'}`} />
              )}
              {/* Radio dot - only show for radio when checked */}
              {isRadio && (
                <div
                  className="w-2.5 h-2.5 rounded-full bg-white opacity-0 radio-dot"
                />
              )}
            </div>
          </div>
          <label
            htmlFor={fieldId}
            className={getFieldLabelClassesInline()}
            dangerouslySetInnerHTML={{ __html: label }}
          />
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div
            id="error"
            className={`mt-1 text-grey-700 text-sm ml-8 ${validation === 'invalid' ? 'block' : 'hidden'}`}
          >
            {errorMessage}
          </div>
        )}
      </div>
    );
  };

  // ============================================================================
  // RENDER FUNCTIONS - Default Field (Text, Textarea, Password, etc.)
  // ============================================================================

  /**
   * Renders default text/textarea input field
   * Label is positioned relative at the top
   */
  const renderDefaultField = () => {
    const fieldId = id || generateUniqueId(type === 'textarea' ? 'textarea' : 'input', props);

    const isTextarea = type === 'textarea';
    const fieldClasses = getFieldClasses();

    // Adjust classes for textarea
    const textareaClasses = isTextarea
      ? `${fieldClasses} resize-none items-start`
      : fieldClasses;

    return (
      <div id={formGroupId}>
        <label htmlFor={fieldId} className={getFieldLabelClassesTop()}>
          {label}
        </label>
        {isTextarea ? (
          <textarea
            id={fieldId}
            rows={3}
            className={textareaClasses}
            style={{ minHeight: '100px' }}
            placeholder={label}
            defaultValue={value}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            {...(disabled ? { disabled: true } : {})}
            {...props}
          />
        ) : (
          <input
            id={fieldId}
            type={type}
            className={fieldClasses}
            placeholder={label}
            defaultValue={value}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            {...(disabled ? { disabled: true } : {})}
            {...props}
          />
        )}

        {/* Error Message */}
        {errorMessage && (
          <div
            className={`mt-1 text-red-500 text-sm validation-invalid-message ${
              validation === 'invalid' ? 'block' : 'hidden'
            }`}
          >
            {errorMessage}
          </div>
        )}
      </div>
    );
  };

  // ============================================================================
  // MAIN RENDER LOGIC
  // ============================================================================

  // Render based on field type
  if (type === 'select') return renderSelectField();
  if (type === 'file') return renderFileField();
  if (type === 'checkbox' || type === 'radio') return renderCheckboxField();
  return renderDefaultField();
};

export default FormElement;
