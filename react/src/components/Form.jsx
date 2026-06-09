import { useEffect } from 'react';
import Button from './partials/Button';
import FormElement from './partials/FormElement';
import FormComponent from './FormComponent';

/**
 * Form Component
 *
 * A generic, configurable form that renders fields from a `fields` prop,
 * delegates submission to an `onSubmit` prop, and wraps everything in
 * FormComponent for layout support (variants, media, text, accordions).
 *
 * FIELD SCHEMA (each item in the `fields` array):
 * {
 *   type: string       // FormElement type: text, email, tel, password, select, textarea, checkbox, radio, file
 *   name: string       // input name attribute
 *   label: string      // field label
 *   required: boolean  // marks field required (optional)
 *   options: array     // options for select fields (optional)
 *   row: string        // group key — fields sharing the same row key are rendered in a grid row
 *   ...                // any other FormElement props (validation, errorMessage, validationRegex, etc.)
 * }
 *
 * PROPS:
 * - fields: array            — field definitions (see schema above)
 * - onSubmit: function       — called with the native submit Event
 * - submitLabel: string      — submit button text (default: "Submit")
 * - submitVariant: string    — Button variant (default: "dark")
 * - submitSize: string       — Button size (default: "btn-md")
 * - fieldKey: string|number  — unique prefix for generated field IDs (default: 1)
 * - formClassName: string    — extra classes on the inner <form> element
 * - htmlContent: string      — authored HTML for the form body; rendered instead of `fields`
 * - htmlClassName: string    — extra classes for the HTML content wrapper
 * - scripts: array           — array of script configs: { src?: string, code?: string }
 *
 * FORMCOMPONENT LAYOUT PROPS (passed through):
 * - variant: 'form-only' | 'form-media' | 'form-text' | 'form-accordion' (default: 'form-only')
 * - formAlignment: 'left' | 'right' (default: 'left')
 * - media: object            — media props for 'form-media' variant
 * - textContent: object      — { title, description, checkItems } for 'form-text' variant
 * - accordions: array        — accordion data for 'form-accordion' variant
 */
const Form = ({
  id,
  fields = [],
  onSubmit,
  submitLabel = 'Submit',
  submitVariant = 'dark',
  submitSize = 'btn-md',
  fieldKey = 1,
  formClassName = '',
  htmlContent = '',
  htmlClassName = '',
  scripts = [],
  // FormComponent layout props
  variant = 'form-only',
  formAlignment = 'left',
  media,
  textContent,
  accordions
}) => {
  useEffect(() => {
    if (!scripts?.length) return;

    const loadedScripts = [];

    async function loadScripts() {
      for (const script of scripts) {
        if (script.src) {
          // Load external script and wait for it
          await new Promise((resolve) => {
            const scriptEl = document.createElement('script');
            scriptEl.src = script.src;
            scriptEl.async = true;
            if (script.id) scriptEl.id = script.id;
            scriptEl.onload = resolve;
            scriptEl.onerror = resolve; // resolve on error too to continue
            document.body.appendChild(scriptEl);
            loadedScripts.push(scriptEl);
          });
        } else if (script.code) {
          // Execute inline script
          const scriptEl = document.createElement('script');
          scriptEl.textContent = script.code;
          document.body.appendChild(scriptEl);
          loadedScripts.push(scriptEl);
        }
      }
    }

    loadScripts();

    return () => {
      // Cleanup: remove loaded scripts
      loadedScripts.forEach((scriptEl) => {
        try {
          scriptEl.remove();
        } catch (e) {
          // ignore
        }
      });
    };
  }, [scripts]);
  const rows = [];
  const rowMap = {};

  fields.forEach((field) => {
    if (field.row) {
      if (!rowMap[field.row]) {
        const group = { rowKey: field.row, items: [] };
        rowMap[field.row] = group;
        rows.push(group);
      }
      rowMap[field.row].items.push(field);
    } else {
      rows.push({ rowKey: null, items: [field] });
    }
  });

  const renderField = (field) => {
    const { row, name, label, type, id: fieldId, ...rest } = field;
    const id = fieldId ?? `form-${fieldKey}-${name}`;

    return (
      <FormElement
        key={id}
        id={id}
        type={type}
        name={name}
        label={label}
        {...rest}
      />
    );
  };

  const hasHtmlContent = Boolean(htmlContent?.trim());

  const formNode = (
    <form className={`flex flex-col gap-y-form-spacing-y ${formClassName}`} onSubmit={onSubmit}>
      {hasHtmlContent ? (
        <div
          className={`wysiwyg ${htmlClassName}`.trim()}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      ) : (
        rows.map((group, i) => {
          if (group.items.length === 1) {
            return renderField(group.items[0]);
          }

          return (
            <div
              key={group.rowKey ?? i}
              className="grid grid-cols-1 xl:grid-cols-2 gap-y-form-spacing-y xl:gap-section-spacing-x"
            >
              {group.items.map(renderField)}
            </div>
          );
        })
      )}

      {submitLabel && (
        <div className="text-right">
          <Button
            text={submitLabel}
            variant={submitVariant}
            size={submitSize}
            className="mx-auto! w-fit"
            attributes={{ type: 'submit' }}
          />
        </div>
      )}
    </form>
  );

  return (
    <div {...(id ? { id } : {})}>
      <FormComponent
        variant={variant}
        formAlignment={formAlignment}
        media={media}
        textContent={textContent}
        accordions={accordions}
        form={formNode}
      />
    </div>
  );
};

export default Form;