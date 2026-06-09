import AccordionMolecule from './molecules/AccordionMolecule';
import Media from './molecules/Media';

export default function Accordion({
  list = [],
  columns = 1, // 1 | 2
  width = 'full', // 'full' | 'constrained' *only applies when columns is 1
  media = null, // enable if 2 columns - object with { type: 'image' | 'video' | 'lottie' | 'iframe', imageUrl?, videoUrl?, lottieUrl?, lottieData?, iframeUrl?, title? }
  mediaPosition = 'left', // 'left' | 'right'
  iconPosition = 'left',
  colorVariant = 'dark', // 'dark' | 'light'
  className = '',
  id = '',
  ...props
}) {
  if (!list || list.length === 0) {
    return null;
  }

  const hasMedia = Boolean(media) && columns === 2;
  const hasIcon = props.hasIcon ?? true;

  // Get width classes for single column mode
  const getSingleColumnWidthClass = () => {
    if (columns === 1 && width === 'constrained') {
      return 'max-w-[600px] mx-auto';
    }
    return '';
  };

  // Determine order based on mediaPosition (only when media exists)
  const accordionOrder =
    hasMedia && mediaPosition === 'right'
      ? 'lg:order-1'
      : hasMedia && mediaPosition === 'left'
        ? 'lg:order-2'
        : '';
  const mediaOrder =
    hasMedia && mediaPosition === 'right'
      ? 'lg:order-2'
      : hasMedia && mediaPosition === 'left'
        ? 'lg:order-1'
        : '';

  const AccordionContent = () => (
    <div
      className={`${columns === 2 ? 'w-full lg:w-1/2' : 'w-full'} ${getSingleColumnWidthClass()} ${accordionOrder}`}
    >
      {list.map((item, index) => (
        <AccordionMolecule
          key={index}
          title={item.title}
          content={item.content}
          hasIcon={hasIcon}
          iconPosition={iconPosition}
          attributes={item.attributes}
          colorVariant={colorVariant}
        />
      ))}
    </div>
  );

  const MediaContent = () => {
    if (!hasMedia) return null;

    return (
      <div
        className={`w-full lg:w-1/2 ${mediaOrder} min-h-[220px] self-start`}
      >
        <Media
          media={media.type || 'image'}
          imageUrl={media.imageUrl}
          videoUrl={media.videoUrl}
          lottieUrl={media.lottieUrl}
          lottieData={media.lottieData}
          iframeUrl={media.iframeUrl}
          title={media.title || ''}
          className="w-full"
        />
      </div>
    );
  };

  // If columns is 1, render accordion only
  if (columns === 1) {
    return (
      <div className={`container ${className}`}>
        <AccordionContent />
      </div>
    );
  }

  // Two-column layout: 50-50 split
  return (
    <div id={id} className={`container ${className} flex flex-col lg:flex-row lg:items-start gap-section-spacing-x`}>
      <AccordionContent />
      <MediaContent />
    </div>
  );
}
