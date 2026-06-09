import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import FormElement from '../components/partials/FormElement';
import IntroductionHeader from '../components/IntroductionHeader';

/**
 * FormMoleculePage - Sample page showing all form field types
 * Organized by: text field, textarea, select, checkbox, radio, upload
 */
export default function FormMoleculePage () {
  return (
    <div>
      <div className="bg-grey-200">
        <div className="container py-32">
          <a
            href="/"
            className="inline-flex items-center gap-10 text-grey-600 hover:text-grey-950 mb-20 transition-colors"
          >
            <ArrowLeftIcon className="h-20 w-20" />
            Back to Home
          </a>
          <div className="max-w-[760px]">
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-16">Form Element Molecule</h1>
            <p className="text-body-default text-grey-600 mb-24">
              Comprehensive examples of all form field types: text inputs, textarea, select dropdowns, 
              checkboxes, radio buttons, and file uploads with validation states.
            </p>
            <div className="flex flex-wrap gap-10">
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">Molecule</span>
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">Forms</span>
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">Validation</span>
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">Field Types</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-40">
        <div className="space-y-60">

          {/* Text Fields Section */}
          <section>
            <SectionHeader
              title="Text Fields"
              description="Various text input types: text, email, password, tel"
              badge="Text"
              badgeColor="blue"
            />
            <div className="container py-24">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-4xl mx-auto">
                <FormElement type="text" label="Text Input" name="text1" required />
                <FormElement type="email" label="Email Input" name="email1" required />
                <FormElement type="password" label="Password Input" name="password1" required errorMessage="This field is required" />
                <FormElement type="tel" label="Phone Number" name="tel1" required validationRegex="phoneNo" />
                <FormElement
                  type="text"
                  label="Text Input (Disabled)"
                  name="text-disabled"
                  disabled={true}
                />
                <FormElement
                  type="text"
                  label="Text Input (Invalid)"
                  name="text-invalid"
                  validation="invalid"
                  errorMessage="This field is required"
                />
              </div>
            </div>
          </section>

          {/* Textarea Section */}
          <section>
            <SectionHeader
              title="Textarea"
              description="Multi-line text input fields"
              badge="Textarea"
              badgeColor="green"
            />
            <div className="container">
              <div className="max-w-2xl mx-auto space-y-6">
                <FormElement type="textarea" label="Message" name="textarea1" rows={4} />
                <FormElement
                  type="textarea"
                  label="Message (Disabled)"
                  name="textarea-disabled"
                  rows={4}
                  disabled={true}
                />
                <FormElement
                  type="textarea"
                  label="Message (Invalid)"
                  name="textarea-invalid"
                  rows={4}
                  validation="invalid"
                  errorMessage="Please enter a message"
                />
              </div>
            </div>
          </section>

          {/* Select Dropdown Section */}
          <section>
            <SectionHeader
              title="Select Dropdown"
              description="Custom styled dropdown select fields"
              badge="Select"
              badgeColor="purple"
            />
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-4xl mx-auto">
                <FormElement
                  type="select"
                  label="Country"
                  name="country"
                  options={[
                    { value: 'uk', label: 'United Kingdom' },
                    { value: 'us', label: 'United States' },
                    { value: 'ca', label: 'Canada' },
                    { value: 'au', label: 'Australia' },
                  ]}
                />
                <FormElement
                  type="select"
                  label="Select Option"
                  name="select2"
                  options={['Option 1', 'Option 2', 'Option 3', 'Option 4']}
                />
                <FormElement
                  type="select"
                  label="Select (Disabled)"
                  name="select-disabled"
                  options={['Option 1', 'Option 2']}
                  disabled={true}
                />
                <FormElement
                  type="select"
                  label="Select (Invalid)"
                  name="select-invalid"
                  options={['Option 1', 'Option 2']}
                  validation="invalid"
                  errorMessage="Please select an option"
                />
              </div>
            </div>
          </section>

          {/* Checkbox Section */}
          <section>
            <SectionHeader
              title="Checkbox"
              description="Custom styled checkbox fields"
              badge="Checkbox"
              badgeColor="indigo"
            />
            <div className="container">
              <div className="max-w-2xl mx-auto space-y-4">
                <FormElement type="checkbox" label="I agree to the terms and conditions" name="checkbox1" />
                <FormElement type="checkbox" label="Subscribe to newsletter" name="checkbox2" />
                <FormElement
                  type="checkbox"
                  label="Checkbox (Disabled)"
                  name="checkbox-disabled"
                  disabled={true}
                />
                <FormElement
                  type="checkbox"
                  label="Checkbox (Invalid)"
                  name="checkbox-invalid"
                  validation="invalid"
                  errorMessage="You must accept the terms"
                />
                <FormElement type="checkbox" label="Another checkbox option" name="checkbox3" />
              </div>
            </div>
          </section>

          {/* Radio Section */}
          <section>
            <SectionHeader
              title="Radio Buttons"
              description="Radio button groups"
              badge="Radio"
              badgeColor="orange"
            />
            <div className="container">
              <div className="max-w-2xl mx-auto space-y-4">
                <div className="space-y-2">
                  <p className="text-body-small text-grey-700 mb-4">Select an option:</p>
                  <FormElement type="radio" label="Option 1" name="radio-group" />
                  <FormElement type="radio" label="Option 2" name="radio-group" />
                  <FormElement type="radio" label="Option 3" name="radio-group" />
                </div>
              </div>
            </div>
          </section>

          {/* File Upload Section */}
          <section>
            <SectionHeader
              title="File Upload"
              description="File upload fields with validation"
              badge="Upload"
              badgeColor="teal"
            />
            <div className="container">
              <div className="max-w-2xl mx-auto space-y-12">
                <FormElement type="file" label="Upload Document" name="file1" />
                <FormElement
                  type="file"
                  label="Upload File (Disabled)"
                  name="file-disabled"
                  disabled={true}
                />
                <FormElement
                  type="file"
                  label="Upload File (Invalid)"
                  name="file-invalid"
                  validation="invalid"
                  errorMessage="Please upload a file"
                />
                </div>
              </div>
          </section>
        </div>
      </div>
    </div>
  );
}

const SectionHeader = ({ title, description, badge, badgeColor = 'green' }) => {
  const badgeColorClasses = {
    green: 'bg-green-100 text-green-700',
    blue: 'bg-blue-100 text-blue-700',
    purple: 'bg-purple-100 text-purple-700',
    red: 'bg-red-100 text-red-700',
    yellow: 'bg-yellow-100 text-yellow-700',
    indigo: 'bg-indigo-100 text-indigo-700',
    orange: 'bg-orange-100 text-orange-700',
    teal: 'bg-teal-100 text-teal-700',
  };

  return (
    <div className="container pb-24">
      <div className="rounded-20 border border-grey-200 bg-grey-50 p-20 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-10">
          <div>
            <h2 className="text-headings-h2 font-bold text-grey-950">{title}</h2>
            {description && <p className="text-body-small text-grey-600">{description}</p>}
          </div>
          {badge && (
            <span className={`rounded-full px-12 py-6 text-[12px] font-medium ${badgeColorClasses[badgeColor] || badgeColorClasses.green}`}>
              {badge}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};