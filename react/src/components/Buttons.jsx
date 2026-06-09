import Button from './partials/Button';

const Buttons = ({
  buttons = [], // Array of button objects: [{ text, variant, size, href, onClick }]
  size = 'btn-md',
  className = 'flex flex-col items-stretch sm:items-center sm:flex-row sm:flex-wrap justify-center items-center gap-10',
  ...props
}) => {
  if (!buttons || buttons.length === 0) return null;

  return (
    <div className={`container ${className}`} {...props}>
      {buttons.map((button, index) => (
        <Button
          key={index}
          text={button.text}
          variant={button.variant}
          size={button.size || size}
          href={button.href}
          onClick={button.onClick}
          attributes={button.attributes}
        />
      ))}
    </div>
  );
};

export default Buttons;
