import Button from '../partials/Button';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const CTAText = ({
  heading,
  paragraph,
  imageUrl,
  imageAlt = 'CTA image',
  list = [],
  textAlign = 'left', // 'left' | 'center' | 'right'
  buttonText,
  buttonHref,
  buttonVariant = 'dark',
  buttonOnClick,
  className = '',
  attributes,
  ...props
}) => {
  const textAlignClass = textAlign === 'center'
    ? 'text-center'
    : textAlign === 'right'
      ? 'text-right'
      : 'text-left';

  return (
    <div className={`w-full space-y-textmedia-btn-text--spacing-y py-textmedia-text--padding-y px-textmedia-text--padding-x ${textAlignClass} ${className}`.trim()} {...props} {...attributes}>
      {imageUrl && (
        <div className="inline-block overflow-hidden rounded-[var(--spacing-textmedia-image--br)] aspect-[4/3]">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="space-y-textmedia-text--spacing-y">
        {heading && (
          <h2 className="text-headings-h3 font-bold">
            {heading}
          </h2>
        )}
        {paragraph && (
          <p className="text-body-default">
            {paragraph}
          </p>
        )}
      </div>
      {Array.isArray(list) && list.length > 0 && (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-16 text-body-default">
          {list.map((listItem, index) => (
            <li key={index} className={`flex ${textAlign === 'center' ? 'justify-center' : textAlign === 'right' ? 'justify-end' : 'justify-start'} gap-textmedia-value--spacing-y`}><CheckCircleIcon className="h-16 w-16 shrink-0 mt-1" />{listItem}</li>
          ))}
        </ul>
      )}
      {buttonText && (
        <div className="pt-8">
          <Button
            text={buttonText}
            href={buttonHref}
            variant={buttonVariant}
            onClick={buttonOnClick}
          />
        </div>
      )}
    </div>
  );
};

export default CTAText;

