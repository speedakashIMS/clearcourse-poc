import Slider from 'react-slick';
import Media from './molecules/Media';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Trust({
  items = [], // array of media objects or { media: { ... } }
  media = null, // single media object
  id = '',
  className = '',
  infinite = false
}) {
  const normalizedItems = items.map((item) => item.media || item);

  const renderMedia = (mediaData, titleFallback = '') => {
    if (!mediaData) return null;
    return (
      <div className="relative w-full h-full min-h-[220px] overflow-hidden">
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

  const carouselSettings = {
    className: "w-full trust-slider",
    dots: true,
    infinite,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
  };

  if (normalizedItems && normalizedItems.length > 0) {
    return (
      <div className={`container ${className}`} id={id}>
        <Slider {...carouselSettings}>
          {normalizedItems.map((item, index) => (
            <div key={index} {...item.attributes || {}}>
              {renderMedia(item)}
            </div>
          ))}
        </Slider>
      </div>
    );
  }

  if (!media) return null;

  return (
    <div className={`container ${className}`} id={id}>
      {renderMedia(media)}
    </div>
  );
}
