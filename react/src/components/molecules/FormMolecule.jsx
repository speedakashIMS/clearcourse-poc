/**
 * FormMolecule Component
 *
 * A molecule that displays a form with optional content side-by-side.
 *
 * PROPS:
 * - variant: 'form-only' | 'form-media' | 'form-text' | 'form-accordion'
 * - form: ReactNode - The form element to display
 * - content: ReactNode - Optional content (media, text, accordion) to display alongside form
 * - formAlignment: 'left' | 'right' - Position of form when variant is not 'form'
 *
 * LAYOUT RULES:
 * - variant='form': 50% width centered on xl, full width below xl
 * - Other variants: 50%-50% split
 */
const FormMolecule = ({
  variant = 'form-only',
  form,
  content,
  formAlignment = 'left',
}) => {
  // Validate props
  const validVariant = ['form-only', 'form-media', 'form-text', 'form-accordion'].includes(variant)
    ? variant
    : 'form-only';
  const validFormAlignment = ['left', 'right'].includes(formAlignment) ? formAlignment : 'left';

  // Determine layout classes
  const getLayoutClasses = () => {
    if (validVariant === 'form-only') {
      // Form only: 50% centered on xl, full width below
      return 'w-full xl:w-1/2 xl:mx-auto';
    } else {
      // Other variants: 50%-50% split
      return 'w-full xl:w-1/2';
    }
  };

  // Determine container classes
  const getContainerClasses = () => {
    if (validVariant === 'form-only') {
      return 'w-full';
    } else {
      return `
        w-full flex flex-col gap-section-spacing-y xl:flex-row xl:container
        ${validVariant !== 'form-media' ? 'max-xl:container' : ''}
      `;
    }
  };

  // Determine form order (for formAlignment)
  const getFormClass = () => {
    if (validVariant === 'form-only') {
      return '';
    }
    return `
     max-xl:container 
     ${variant !== 'form-media' ? 'max-xl:px-0!' : ''}
      ${validFormAlignment === 'left' ? 'order-1' : 'order-2'}
    `;
  };

  // Determine other content order
  const getOtherOrder = () => {
    if (validVariant === 'form-only') {
      return '';
    }
    return validFormAlignment === 'left' ? 'order-2' : 'order-1';
  };

  const containerClasses = getContainerClasses();
  const formClasses = `${getLayoutClasses()} ${getFormClass()}`;
  const otherClasses = `${getLayoutClasses()} ${getOtherOrder()}`;

  return (
    <div className={containerClasses}>
      {/* Form Section */}
      <div className={formClasses}>
        {form}
      </div>

      {/* Other Content Section (media, text, accordion) */}
      {validVariant !== 'form-only' && content && (
        <div className={otherClasses}>
          {content}
        </div>
      )}
    </div>
  );
};

export default FormMolecule;
