const Button = ({
  text = 'Button',
  href = undefined,
  variant = 'light', // light, dark, light-outlined, dark-outlined, light-no-outline, dark-no-outline, secondary
  size = 'btn-md', // btn-sm , btn-md
  className = '',
  disabled = false,
  onClick = undefined,
  attributes = {},
  ...props
}) => {

  const baseClasses = 'btn';

  const variantClasses = (variant) => {
    switch (variant) {
      case 'light':
        return 'btn-light';
      case 'dark':
        return 'btn-dark';
      case 'light-outlined':
        return 'btn-light-outlined';
      case 'dark-outlined':
        return 'btn-dark-outlined';
      case 'light-no-outline':
        return 'btn-light-no-outline';
      case 'dark-no-outline':
        return 'btn-dark-no-outline';
      case 'secondary':
        return 'btn-primary';
      default:
        return 'btn-light';
    }
  };

  const sizeClasses = (size) => {
    switch (size) {
      case 'btn-sm':
        return 'btn-sm';
      case 'btn-md':
        return 'btn-md';
      default:
        return 'btn-md';
    }
  };

  const buttonClasses = `${baseClasses} ${variantClasses(variant)} ${sizeClasses(size)} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        onClick={onClick}
        {...props}
        {...(attributes ?? {})}
      >
        {text}
      </a>
    );
  }

  return (
    <button
      type={props.type || 'button'}
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
      {...(attributes ?? {})}
    >
      {text}
    </button>
  );
};

export default Button;

