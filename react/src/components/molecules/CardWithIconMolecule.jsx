import { useId } from 'react';
import Button from '../partials/Button';
import Link from '../partials/Link';
import Media from './Media';

const CardWithIconMolecule = ({
  stacked = true, // true = vertical stack, false = horizontal side-by-side
  iconPosition = 'left', // 'left' or 'right' (only applies when stacked = false)
  media = 'image', // 'image' | 'video' | 'lottie' | 'iframe' - selector for media type
  imageUrl, // URL for image
  videoUrl, // URL for video (YouTube embed URL or direct video URL)
  lottieUrl, // URL to Lottie animation JSON file
  lottieData, // Lottie animation JSON data object (alternative to lottieUrl)
  iframeUrl, // URL for iframe
  mediaAltTitle, // Accessible text for media (image alt, video/lottie/iframe title); falls back to title if not set
  title,
  description,
  buttonText,
  buttonHref,
  buttonVariant = 'light',
  buttonType = 'button', // button | link
  linkVariant,
  buttonOnClick,
  backgroundVariant = 'default', // default | primary | secondary | tertiary
  className = '',
  attributes = {},
  textAlign = 'left', // 'left' | 'center' (only applies when stacked = true)
}) => {
  console.log('CardWithIconMolecule props:', {
    stacked,
    iconPosition,
    textAlign,
  });
  const backgroundClassesByVariant = {
    default: 'bg-grey-500 text-grey-950',
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-grey-950',
    tertiary: 'bg-tertiary text-grey-950',
    light: 'bg-light text-grey-950',
  };
  const textColorByVariant = {
    default: 'text-white',
    primary: 'text-white',
    secondary: 'text-grey-950',
    tertiary: 'text-grey-950',
    light: 'text-grey-950',
  };
  const resolvedBackgroundClass =
    backgroundClassesByVariant[backgroundVariant] || backgroundClassesByVariant.default;
  const titleId = useId();
  const cardClasses = `
    flex
    w-full
    ${resolvedBackgroundClass}
    ${stacked ? 'flex-col' : 'flex-row items-start'}
    rounded-[var(--spacing-cards-br)]
    overflow-hidden
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ');

  // Media wrapper - always circle variant
  const mediaWrapperClasses = `
    ${stacked ? 'w-full' : 'w-auto'}
    flex
    items-center
    justify-center
    overflow-hidden
    py-cards-icon--padding-y
    px-cards-icon--padding-x
  `
    .trim()
    .replace(/\s+/g, ' ');

  // Media container - always 100px x 100px circle
  const mediaContainerClasses = `
    w-[94px]
    h-[100px]
    flex
    items-center
    justify-center
    aspect-square
    overflow-hidden
  `
    .trim()
    .replace(/\s+/g, ' ');

  const contentContainerClasses = `
    ${stacked ? 'w-full' : 'flex-1'}
    py-textmedia-text--padding-y
    px-textmedia-text--padding-x
    flex
    flex-col
    flex-grow-1
    gap-textmedia-btn-text--spacing-y
    ${textAlign === 'center' ? 'items-center text-center' : 'items-start text-left'}
    ${stacked ? 'rounded-b-cards-br' : iconPosition === 'left' ? 'rounded-r-cards-br' : 'rounded-l-cards-br'}
  `
    .trim()
    .replace(/\s+/g, ' ');

  const mediaContent = (
    <Media
      media={media}
      aspect="default"
      imageUrl={imageUrl}
      videoUrl={videoUrl}
      lottieUrl={lottieUrl}
      lottieData={lottieData}
      iframeUrl={iframeUrl}
      objectFit="contain"
      title={mediaAltTitle ?? title}
      className=""
    />
  );

  // Determine order: when stacked, media is always first (top)
  // When not stacked, order depends on iconPosition
  const showMediaFirst = stacked || iconPosition === 'left';

  const renderMedia = () => {
    return (
      <div className={mediaWrapperClasses}>
        <div className={mediaContainerClasses}>{mediaContent}</div>
      </div>
    );
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
            <h3 id={titleId} className={`text-headings-h3 font-semibold ${textColorByVariant[backgroundVariant]}`}>
              {title}
            </h3>
          )}
          {description && (
            <p className={`text-body-default ${textColorByVariant[backgroundVariant]}`}>{description}</p>
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

export default CardWithIconMolecule;
