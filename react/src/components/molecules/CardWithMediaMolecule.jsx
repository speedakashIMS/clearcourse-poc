import { useId } from 'react';
import Button from '../partials/Button';
import Link from '../partials/Link';
import Media from './Media';

const CardWithMediaMolecule = ({
  stacked = true, // true = vertical stack, false = horizontal side-by-side
  imagePosition = 'left', // 'left' or 'right' (only applies when stacked = false)
  variant = 'flushed', // 'flushed' | 'framed' | 'circle' - flushed = full width, framed = square aspect ratio, circle = 100px x 100px circular
  media = 'image', // 'image' | 'video' | 'lottie' | 'iframe' - selector for media type
  imageUrl, // URL for image
  videoUrl, // URL for video (YouTube embed URL or direct video URL)
  lottieUrl, // URL to Lottie animation JSON file
  lottieData, // Lottie animation JSON data object (alternative to lottieUrl)
  iframeUrl, // URL for iframe
  mediaAltTitle, // Accessible text for media (image alt, video/lottie/iframe title); falls back to title if not set
  title,
  description,
  descriptionRichText, // optional HTML from CMS; when set, rendered with .wysiwyg instead of plain `description`
  buttonText,
  buttonHref,
  buttonVariant = 'light',
  buttonType = 'button', // button | link
  linkVariant,
  buttonOnClick,
  backgroundVariant = 'default', // default | primary | secondary | tertiary
  className = '',
  attributes = {},
}) => {
  const hasDescriptionRichText =
    typeof descriptionRichText === 'string' && descriptionRichText.trim().length > 0;

  const backgroundClassesByVariant = {
    default: 'bg-grey-500 text-grey-950',
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-grey-950',
    tertiary: 'bg-tertiary text-grey-950',
  };
  const resolvedBackgroundClass =
    backgroundClassesByVariant[backgroundVariant] || backgroundClassesByVariant.default;
  const titleId = useId();
  const cardClasses = `
    flex
    w-full
    ${resolvedBackgroundClass}
    flex-col
    ${stacked ? '' : 'md:flex-row'}
    rounded-[var(--spacing-cards-br)]
    overflow-hidden
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ');

  // Outer wrapper for framed variant (no background, has padding/margin)
  const mediaWrapperClasses = `
    w-full
    ${stacked ? '' : variant === 'framed' ? 'md:w-1/2 lg:min-w-[calc(200px+var(--spacing-cards-image--padding-y))]' : variant === 'circle' ? 'md:w-auto' : 'md:w-1/2'}
    ${variant === 'circle' ? '' : 'p-cards-image--padding-y'}
    flex
    items-center
    justify-center
    overflow-hidden
    ${variant === 'framed' && stacked ? 'rounded-t-[var(--spacing-cards-br)]' : ''}
    ${variant === 'framed' && !stacked && imagePosition === 'left' ? 'md:rounded-l-[var(--spacing-cards-br)]' : ''}
    ${variant === 'framed' && !stacked && imagePosition === 'right' ? 'md:rounded-r-[var(--spacing-cards-br)]' : ''}
  `
    .trim()
    .replace(/\s+/g, ' ');

  // Inner media container (has background, full width of wrapper)
  const mediaContainerClasses = `
    ${variant === 'circle' ? 'w-[100px] h-[100px]' : variant === 'framed' ? 'w-full aspect-square' : 'w-full'}
    bg-grey-200
    flex
    items-center
    justify-center
    overflow-hidden
    ${variant === 'circle' ? 'rounded-full' : variant === 'framed' ? 'rounded-[var(--spacing-cards-image--br)]' : stacked ? 'rounded-t-[var(--spacing-cards-image--br)]' : imagePosition === 'left' ? 'rounded-l-[var(--spacing-cards-image--br)]' : 'rounded-r-[var(--spacing-cards-image--br)]'}
  `
    .trim()
    .replace(/\s+/g, ' ');

  // Media container for flushed variant (no wrapper)
  const flushedMediaContainerClasses = `
    w-full
    ${stacked ? 'aspect-[441/269]' : 'md:w-1/2'}
    bg-grey-200
    flex
    items-center
    justify-center
    overflow-hidden
    ${stacked ? 'rounded-t-[var(--spacing-cards-image--br)]' : imagePosition === 'left' ? 'md:rounded-l-[var(--spacing-cards-image--br)]' : 'md:rounded-r-[var(--spacing-cards-image--br)]'}
  `
    .trim()
    .replace(/\s+/g, ' ');

  const contentContainerClasses = `
    w-full
    ${stacked ? '' : variant === 'framed' ? 'md:w-3/4' : variant === 'circle' ? 'md:flex-1' : 'md:w-1/2'}
    py-textmedia-text--padding-y
    px-textmedia-text--padding-x
    flex-grow-1
    flex
    flex-col
    gap-textmedia-btn-text--spacing-y
    ${stacked ? 'rounded-b-[var(--spacing-cards-image--br)]' : imagePosition === 'left' ? 'md:rounded-r-[var(--spacing-cards-image--br)]' : 'md:rounded-l-[var(--spacing-cards-image--br)]'}
  `
    .trim()
    .replace(/\s+/g, ' ');

  const mediaContentClasses = '';

  const mediaContent = (
    <Media
      media={media}
      aspect="default"
      imageUrl={imageUrl}
      videoUrl={videoUrl}
      lottieUrl={lottieUrl}
      lottieData={lottieData}
      iframeUrl={iframeUrl}
      title={mediaAltTitle ?? title}
      className={mediaContentClasses}
    />
  );

  // Determine order: when stacked, media is always first (top)
  // When not stacked, order depends on imagePosition
  const showMediaFirst = stacked || imagePosition === 'left';

  const renderMedia = () => {
    if (variant === 'framed' || variant === 'circle') {
      return (
        <div className={mediaWrapperClasses}>
          <div className={mediaContainerClasses}>{mediaContent}</div>
        </div>
      );
    }

    return <div className={flushedMediaContainerClasses}>{mediaContent}</div>;
  };

  return (
    <article
      className={cardClasses}
      {...(title ? { 'aria-labelledby': titleId } : { 'aria-label': 'Card' })}
      {...(attributes ?? {})}
    >
      {showMediaFirst && renderMedia()}

      <div className={contentContainerClasses}>
        <div className="space-y-textmedia-text--spacing-y flex-grow-1">
          {title && (
            <h3 id={titleId} className="text-headings-h3 font-semibold text-white">
              {title}
            </h3>
          )}
          {hasDescriptionRichText ? (
            <div
              className="wysiwyg text-body-default text-white"
              dangerouslySetInnerHTML={{ __html: descriptionRichText }}
            />
          ) : description && (
            <p className="text-body-default text-white">{description}</p>
          )}
        </div>
        {buttonText && (
          <div className="mt-auto">
            {buttonType === 'link' ? (
              <Link
                text={buttonText}
                href={buttonHref}
                variant={
                  linkVariant || (buttonVariant.includes('light') ? 'light' : 'dark')
                }
                onClick={buttonOnClick}
              />
            ) : (
              <Button
                text={buttonText}
                href={buttonHref}
                variant={buttonVariant}
                onClick={buttonOnClick}
              />
            )}
          </div>
        )}
      </div>

      {!showMediaFirst && renderMedia()}
    </article>
  );
};

export default CardWithMediaMolecule;
