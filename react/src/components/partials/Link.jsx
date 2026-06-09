import { ArrowRightIcon } from '@heroicons/react/24/outline';

const Link = ({
  text = 'Link',
  href = '#',
  variant = 'dark', // dark, light
  icon,
  className = '',
  ...props
}) => {
  const baseClasses = 'text-link';
  
  const variantClasses = (variant) => {
    switch (variant) {
      case 'light':
        return 'link-light';
      case 'dark':
        return 'link-dark';
      default:
        return 'link-dark';
    }
  };

  const IconComponent = icon || ArrowRightIcon;
 
  const linkClasses = `${baseClasses} ${variantClasses(variant)} ${className}`.trim();
  
  return (
    <a
      href={href}
      className={linkClasses}
      {...props}
    >
      <span>{text}</span>
      <IconComponent className="text-link-icon" />
    </a>
  );
};

export default Link;

