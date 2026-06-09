import { lazy, Suspense } from 'react';

const Media = lazy(() => import('./molecules/Media'));

export default function HeroArticle({
  className = '',
  imagePosition = 'bottom', // 'top' | 'bottom'
  title = '',
  description = '',
  date = '',
  categories = [],
  backgroundImage = '',
  media = null, // `Media` component object
  id = '',
  // Ignore anything in the props, it should not be part of the integration
  ...props
}) {

  const getImagePosition = () => {
    if (imagePosition && ['top', 'bottom'].includes(imagePosition)) {
      return imagePosition;
    }
    return 'bottom';
  }

  const isTop = () => getImagePosition() === 'top';
  const isBottom = () => getImagePosition() === 'bottom';

  const wrapperClass = [
    'hero-article relative w-full h-auto',
    className,
  ].filter(Boolean).join(' ');

  const containerClass = 'relative max-w-full z-2 gap-0';
  const contentClass = 'w-full max-w-[1000px] flex flex-col gap-hero-text--spacing-y px-hero-padding-x py-hero-padding-y relative z-2 max-[600px]:max-w-full';
  const titleClass = 'font-normal m-0 text-display-xl leading-display-xl';
  const descriptionClass = 'm-0 max-w-[600px] font-normal text-body-large leading-body-large';
  const categoriesClass = 'flex flex-wrap gap-10 font-normal text-sm list-none p-0 m-0';
  const isMachineReadableDate = typeof date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(date);

  // Add spacing below the media when it is positioned above the text
  const getMediaClass = () => [
    'relative w-full aspect-[1392/566] p-hero-image--padding max-[600px]:aspect-[313/310]',
    isTop() ? '' : '',
  ].filter(Boolean).join(' ');

  const MediaContent = () => (media || backgroundImage) && (
    <div className={getMediaClass()}>
      {media ? (
        <Suspense fallback={null}>
          <Media
            media={media.type || 'image'}
            aspect="default"
            imageUrl={media.imageUrl || backgroundImage}
            videoUrl={media.videoUrl}
            lottieUrl={media.lottieUrl}
            lottieData={media.lottieData}
            iframeUrl={media.iframeUrl}
            title={media.title || backgroundImage || ''}
            className="w-full h-full min-h-auto! object-cover object-center block rounded-20"
          />
        </Suspense>
      ) : (
        <img src={backgroundImage} alt={title || backgroundImage} className="w-full h-full object-cover object-center block rounded-20" />
      )}
    </div>
  )

  return (
    <article className={wrapperClass} id={id}>
      <div>
        <div
          className="absolute inset-0 z-0"
        />
        <div className={containerClass}>
          {isTop() && <MediaContent />}
          <div className={contentClass}>
            {title && (
              <h1 className={titleClass}>{title}</h1>
            )}

            {description && (
              <p className={descriptionClass}>{description}</p>
            )}
            {date && (
              isMachineReadableDate ? (
                <time className="font-normal text-sm" dateTime={date}>
                  {date}
                </time>
              ) : (
                <p className="font-normal text-sm">{date}</p>
              )
            )}
            {categories && categories.length > 0 && (
              <ul aria-label="Categories" className={categoriesClass}>
                {categories.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
            )}
          </div>
          {isBottom() && <MediaContent />}
        </div>
      </div>
    </article>
  );
}
