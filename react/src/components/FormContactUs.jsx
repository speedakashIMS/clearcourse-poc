import Button from './partials/Button';
import FormElement from './partials/FormElement';

/**
 * FormContactUs Component
 *
 * A contact form with the following fields:
 * - Label (text field)
 * - Two column: Label, Label (both text fields)
 * - 5 checkboxes with same label "Checkbox"
 * - Textarea with label "Label"
 */
const FormContactUs = ({ fieldKey = 1 }) => {
  return (
    <form className="flex flex-col gap-y-form-spacing-y">
      {/* Single text field */}
      <FormElement
        type="text"
        label="Label"
        name="singleLabel"
        id={`form-contact-us-${fieldKey}-single-label`}
      />

      {/* Two column text fields */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-form-spacing-y xl:gap-section-spacing-x">
        <FormElement
          type="text"
          label="Label"
          name="label1"
          id={`form-contact-us-${fieldKey}-label1`}
        />
        <FormElement
          type="text"
          label="Label"
          name="label2"
          id={`form-contact-us-${fieldKey}-label2`}
        />
      </div>

      {/* 5 Checkboxes */}
      <div className="space-y-10">
        {[1, 2, 3, 4, 5].map((index) => (
          <FormElement
            key={index}
            type="checkbox"
            label="Checkbox"
            name={`checkbox-${index}`}
            id={`form-contact-us-${fieldKey}-checkbox-${index}`}
          />
        ))}
      </div>

      {/* Textarea */}
      <FormElement
        type="textarea"
        label="Label"
        name="textarea"
        id={`form-contact-us-${fieldKey}-textarea`}
        rows={4}
      />

      <div className="text-right">
        <Button text="Submit" variant="dark" size="btn-md" className="mx-auto! w-fit" />
      </div>
    </form>
  );
};

export default FormContactUs;
