const RichText = ({
  content = '',
  size = 'normal', // small | normal | large
  className = '',
  ...props
}) => {
  if (!content) return null;

  const sizeClass = () => {
    switch (size) {
      case 'small':
        return 'text-body-small';
      case 'large':
        return 'text-body-large';
      case 'normal':
      default:
        return 'text-body-default';
    }
  };

  return (
    <div className="container">
      <div
        className={`wysiwyg ${sizeClass()} ${className}`.trim()}
        dangerouslySetInnerHTML={{ __html: content }}
        {...props}
      />
    </div>
  );
};

export default RichText;

