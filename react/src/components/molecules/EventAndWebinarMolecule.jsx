import { useId } from 'react';
import Link from '../partials/Link';

export default function EventAndWebinarMolecule({
  image,
  title,
  description,
  date,
  location,
  linkUrl,
  linkLabel = 'Learn More',
  logoPosition = 'left', // 'left' | 'top'
  textAlign = 'left', // 'left' | 'center' (only for logoPosition="top")
  attributes,
}) {
  const titleId = useId();
  const isTop = logoPosition === 'top';
  const resolvedTextAlign = isTop && textAlign === 'center' ? 'center' : 'left';
  const textAlignClass = resolvedTextAlign === 'center' ? 'text-center' : 'text-left';
  const alignItemsClass = resolvedTextAlign === 'center' ? 'items-center' : 'items-start';
  const isMachineReadableDate = typeof date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(date);

  const logoSizeClass = isTop && resolvedTextAlign === 'center'
    ? 'w-[113px] h-[113px] rounded-20'
    : 'w-[71px] h-[71px] rounded-10';

  const containerClass = isTop
    ? `flex flex-col gap-events-spacing-y ${alignItemsClass} ${textAlignClass}`
    : 'flex flex-col xl:flex-row gap-events-spacing-x items-start';

  const contentClass = isTop
    ? `flex flex-col gap-events-spacing-y ${alignItemsClass}`
    : 'flex-1 flex flex-col gap-events-spacing-y min-w-0';

  return (
    <article
      className={containerClass}
      {...(title ? { 'aria-labelledby': titleId } : { 'aria-label': 'Event or webinar' })}
      {...attributes || {}}
    >
      {image && (
        <div className={isTop ? 'flex justify-center' : 'shrink-0 w-full md:w-auto'}>
          <img
            src={image}
            alt={title || 'Event image'}
            className={`${logoSizeClass} object-cover`}
          />
        </div>
      )}

      <div className={contentClass}>
        {title && (
          <h3 id={titleId} className={`text-headings-h3 font-bold max-w-[600px] ${isTop ? textAlignClass : ''}`}>
            {title}
          </h3>
        )}
        {description && (
          <p className={`text-body-default max-w-[600px] ${isTop ? textAlignClass : ''}`}>
            {description}
          </p>
        )}
        {(date || location) && (
          <div className={`flex items-start gap-24 ${isTop ? textAlignClass : ''} ${resolvedTextAlign === 'center' ? 'justify-center' : 'justify-start'}`}>
            {date && (
              isMachineReadableDate ? (
                <time className="text-body-small" dateTime={date}>
                  {date}
                </time>
              ) : (
                <p className="text-body-small">{date}</p>
              )
            )}
            {location && <p className="text-body-small">{location}</p>}
          </div>
        )}
        {linkUrl && (
          <div className={`${isTop ? '' : ''} mt-events-link--spacing-y`}>
            <Link
              text={linkLabel}
              href={linkUrl}
              variant="dark"
              className={isTop ? textAlignClass : ''}
            />
          </div>
        )}
      </div>
    </article>
  );
}
