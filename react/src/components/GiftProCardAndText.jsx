import Slider from 'react-slick';
import GiftProCardAndTextMolecule from './molecules/GiftProCardAndTextMolecule';
import Media from './molecules/Media';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function GiftProCardAndText({
  giftProCardAndTexts = [],
  media = null,
  align = 'left',
  id = '',
  className = '',
  infinite = false
}) {
  const mapGiftProCardAndTextProps = (item) => ({
    cardTitle: item.cardTitle,
    bodyLarge: item.bodyLarge,
    bodyDefault: item.bodyDefault,
    bodySmall: item.bodySmall,
    imageUrl: item.imageUrl,
    iconUrl: item.iconUrl,
    align: item.align ?? align,
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
    className: "w-full testimonial-slider",
    dots: true,
    infinite,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
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
