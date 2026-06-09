import { useId } from 'react';
import Link from '../partials/Link';

const NewsMolecule = ({
  stacked = true, // true = vertical stack, false = horizontal on md+
  imageUrl,
  imageAlt = 'News image',
  title,
  description,
  linkText = 'Read more',
  linkHref = '#',
  linkVariant = 'light',
  className = '',
  ...props
}) => {
  const titleId = useId();
  const cardClasses = `
    w-full
    flex
    bg-grey-500
    rounded-[var(--spacing-cards-br)]
    overflow-hidden
    flex-col
    text-left
    ${stacked ? '' : 'md:flex-row'}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const imageWrapperClasses = `
    w-full
    aspect-[441/269]
    bg-grey-200
    overflow-hidden
    ${stacked ? 'rounded-t-[var(--spacing-cards-br)]' : 'md:rounded-l-[var(--spacing-cards-br)]'}
    ${stacked ? '' : 'md:w-1/2'}
  `.trim().replace(/\s+/g, ' ');

  const contentClasses = `
    w-full
    ${stacked ? '' : 'md:w-1/2'}
    p-resource-padding
    flex
    flex-col
    gap-resource-link--spacing-y
    flex-grow
    ${stacked ? 'rounded-b-[var(--spacing-cards-br)]' : 'md:rounded-r-[var(--spacing-cards-br)]'}
  `.trim().replace(/\s+/g, ' ');

  return (
    <article
      className={cardClasses}
      {...(title ? { 'aria-labelledby': titleId } : { 'aria-label': 'News item' })}
      {...props}
    >
      <div className={imageWrapperClasses}>
        {imageUrl && (
          <img
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className={contentClasses}>
        <div className="space-y-10">
          {title && (
            <h3 id={titleId} className="text-headings-h3 font-semibold text-white">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-body-default text-white">
              {description}
            </p>
          )}
        </div>
        <div className="mt-auto">
          <Link text={linkText} href={linkHref} variant={linkVariant} />
        </div>
      </div>
    </article>
  );
};

export default NewsMolecule;

