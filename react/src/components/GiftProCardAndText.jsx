import Slider from 'react-slick';
import GiftProCardAndTextMolecule from './molecules/GiftProCardAndTextMolecule';
import Media from './molecules/Media';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ArrowIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 1000 1000" className={className} fill="currentColor" aria-hidden="true">
      <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z" />
    </svg>
  );
}

const ARROW_VARIANTS = {
  light: 'btn-light',
  dark: 'btn-dark',
  'light-outlined': 'btn-light-outlined',
  'dark-outlined': 'btn-dark-outlined',
  'light-no-outline': 'btn-light-no-outline',
  'dark-no-outline': 'btn-dark-no-outline',
};

function SlideArrow({ className, onClick, direction, variant = 'dark-outlined' }) {
  const isNext = direction === 'next';
  const variantClass = ARROW_VARIANTS[variant] || ARROW_VARIANTS['dark-outlined'];
  const cleanedClassName = (className || '')
    .split(' ')
    .filter((c) => !['slick-arrow', 'slick-next', 'slick-prev'].includes(c))
    .join(' ');
  return (
    <button
      type="button"
      aria-label={isNext ? 'Next slide' : 'Previous slide'}
      onClick={onClick}
      className={[
        cleanedClassName,
        'giftpro-slide-arrow btn', variantClass,
        '!flex items-center justify-center',
        '!h-48 !w-48 min-w-[48px] !p-0 !rounded-full z-10 hover:opacity-80',
        isNext ? '!right-10' : '!left-10',
      ].join(' ')}
    >
      <ArrowIcon className={`h-16 w-16 ${isNext ? '' : 'rotate-180'}`} />
    </button>
  );
}

export default function GiftProCardAndText({
  giftProCardAndTexts = [],
  media = null,
  align = 'left',
  id = '',
  className = '',
  infinite = false,
  textColor = 'text-primary',
  arrowVariant = 'dark-outlined'
}) {
  const mapGiftProCardAndTextProps = (item) => ({
    cardTitle: item.cardTitle,
    bodyLarge: item.bodyLarge,
    bodyDefault: item.bodyDefault,
    bodySmall: item.bodySmall,
    imageUrl: item.imageUrl,
    iconUrl: item.iconUrl,
    align: item.align ?? align,
    textColor: item.textColor ?? textColor,
    author: item.author,
    authorTitle: item.authorTitle,
    attributes: item.attributes || {},
  });

  const renderMedia = (mediaData, titleFallback = '') => {
    if (!mediaData) return null;
    return (
      <div className="relative w-full h-full min-h-0 size-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Media
            media={mediaData.type || 'image'}
            aspect="default"
            imageUrl={mediaData.imageUrl}
            videoUrl={mediaData.videoUrl}
            lottieUrl={mediaData.lottieUrl}
            lottieData={mediaData.lottieData}
            iframeUrl={mediaData.iframeUrl}
            title={mediaData.title || titleFallback}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
  };

  // Media always on the left
  const renderMediaSlide = (item, index) => {
    const itemMedia = item.media || media;
    const hasMedia = Boolean(itemMedia);
    const widthClass = hasMedia ? 'flex-1 min-w-0' : 'w-full';

    return (
      <div key={index} className="flex flex-col md:flex-row items-stretch text-gray-950">
        {hasMedia && (
          <div className="sm:p-48 md:px-0">
            <div className="w-full md:w-[300px] h-[340px] shrink-0 overflow-hidden rounded-[var(--spacing-cards-image--br)]">
              {renderMedia(itemMedia, item.bodyDefault || '')}
            </div>
          </div>
        )}

        <div className={`flex items-center justify-center pt-40 sm:p-48 ${widthClass}`}>
          <GiftProCardAndTextMolecule {...mapGiftProCardAndTextProps(item)} />
        </div>
      </div>
    );
  };

  const carouselSettings = {
    className: "w-full giftpro-cardandtext-slider flex items-center gap-60",
    dots: false,
    infinite,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    hideOnSinglePage: true,
    hideArrowsIfSinglePage: true,
    hideDotsIfSinglePage: true,
    hideArrowsOnMobile: true,
    hideDotsOnMobile: true,
    prevArrow: <SlideArrow direction="prev" variant={arrowVariant} />,
    nextArrow: <SlideArrow direction="next" variant={arrowVariant} />,
  };

  if (!giftProCardAndTexts || giftProCardAndTexts.length === 0) return null;

  const useCarousel = giftProCardAndTexts.length > 1;

  return (
    <div className={`container ${className}`} id={id}>
      {useCarousel ? (
        <Slider {...carouselSettings}>
          {giftProCardAndTexts.map((item, index) => (
            <div key={index}>{renderMediaSlide(item, index)}</div>
          ))}
        </Slider>
      ) : (
        renderMediaSlide(giftProCardAndTexts[0], 0)
      )}
    </div>
  );
}
