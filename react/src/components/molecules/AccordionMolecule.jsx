import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { useState, useRef, useEffect } from 'react';

export default function AccordionMolecule({
  title = '',
  content = '',
  /**
   * !!! IGNORE IN COMPONENT. REMOVE THESE FROM REPEATER ITEM SETTINGS.
   * Below are (optional) props when used in an `Accordion` component. 
   * 
   * The main component handles these to make sure items uniform.
   * But if you use this molecule as standalone, you can use the props below.
   */
  colorVariant = 'dark', // 'dark' | 'light'
  className = '',
  iconPosition = 'left', // 'left' | 'right'
  hasIcon = true,
  index = 0,
  attributes = {},
  // Ignore anything in the props, it should not be part of the integration
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);
  const innerContentRef = useRef(null);
  const rotate = props.rotateIcon ?? true;
  const icon = props.icon ?? null;

  const colorVariantClass = {
    text: colorVariant === 'dark' ? 'grey-950' : 'white',
    border: colorVariant === 'dark' ? 'grey-300' : 'grey-200',
  };

  const toggleItem = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (innerContentRef.current) {
      if (isOpen) {
        // Measure content height when opening
        const scrollHeight = innerContentRef.current.scrollHeight;
        setHeight(scrollHeight);
      } else {
        // Collapse when closing
        setHeight(0);
      }
    }
  }, [isOpen]);

  return (
    <div
      className={`accordion-item ${className} text-${colorVariantClass.text}`}
      {...(attributes ?? {})}
    >
      <button
        id={`accordion-trigger-${index}`}
        className={`flex w-full p-accordion-header--padding justify-between items-center rounded-none cursor-pointer text-left focus:outline-none text-body-large`}
        onClick={toggleItem}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${index}`}
      >
        {iconPosition === 'left' && hasIcon && (
          <div className="mr-10 shrink-0">
            {icon ? icon : <ChevronDownIcon
                className={`w-5 h-5 transition-transform duration-200 ${isOpen && rotate ? 'rotate-180' : ''}`}
              />}
          </div>
        )}

        <div className="flex items-center gap-10 flex-1 min-w-0">
          <span className="flex-1">{title}</span>
        </div>

        {iconPosition === 'right' && hasIcon && (
          <div className="ml-10 shrink-0">
            {icon ? icon : <ChevronDownIcon
                className={`w-5 h-5 transition-transform duration-200 ${isOpen && rotate ? 'rotate-180' : ''}`}
              />}
          </div>
        )}
      </button>
      <div
        ref={contentRef}
        id={`accordion-content-${index}`}
        role="region"
        aria-labelledby={`accordion-trigger-${index}`}
        aria-hidden={!isOpen}
        className={`text-body-default overflow-hidden transition-[height] duration-300 ease-in-out border-b border-${colorVariantClass.border}`}
        style={{
          height: `${height}px`,
        }}
      >
        <div
          ref={innerContentRef}
          className="accordion-content-inner wysiwyg p-10"
        >
          {typeof content === 'string' ? (
            <div dangerouslySetInnerHTML={{ __html: content }} />
          ) : (
            <div>{content}</div>
          )}
        </div>
      </div>
    </div>
  );
}
