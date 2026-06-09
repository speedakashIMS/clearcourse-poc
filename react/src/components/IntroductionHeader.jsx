const IntroductionHeader = ({
  title,
  titleHeaderType = 'h2', // 'h2' | 'h3'
  titleAccent = false,
  alignment = 'left', // 'left' | 'centre' | 'center' | 'right'
  description,
  descriptionSize = 'normal', // 'small' | 'normal' | 'large'
  className = '',
  ...props
}) => {
  if (!title && !description) return null;

  const titleClasses = `
    ${titleHeaderType === 'h2' ? 'text-headings-h2' : 'text-headings-h3'}
    font-bold
    ${titleAccent ? 'font-accent' : ''}
  `.trim().replace(/\s+/g, ' ');

  const getDescriptionClasses = () => {
    switch (descriptionSize) {
      case 'small':
        return 'text-body-small';
      case 'large':
        return 'text-body-large';
      case 'normal':
      default:
        return 'text-body-default';
    }
  };

  const descriptionClasses = getDescriptionClasses();
  const alignmentClass = alignment === 'right'
    ? 'text-right'
    : alignment === 'centre' || alignment === 'center'
      ? 'text-center'
      : 'text-left';

  return (
    <div className={`container mx-auto ${alignmentClass} ${className}`} {...props}>
      {title && (
        titleHeaderType === 'h2' ? (
          <h2 className={titleClasses}>{title}</h2>
        ) : (
          <h3 className={titleClasses}>{title}</h3>
        )
      )}
      {description && (
        <div className={`${descriptionClasses} mt-10`}>
          {description}
        </div>
      )}
    </div>
  );
};

export default IntroductionHeader;

