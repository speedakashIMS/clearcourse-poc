import Slider from 'react-slick';
import TestimonialMolecule from './molecules/TestimonialMolecule';
import GiftproTestimonialMolecule from './molecules/GiftproTestimonialMolecule';
import Media from './molecules/Media';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial({
  /**
   * Variants: 'media' | 'columns' | 'stacked-media' | 'giftpro-media'
   * - 'media': 1 testimonial + 1 media per slide (carousel, 1 per page)
   * - 'columns': testimonial grid (1-3 columns). If columns > 3, use carousel with 3 per page
   * - 'stacked-media': 2-column layout with media + stacked testimonials (order can change)
   * - 'giftpro-media': centered quote with large quote marks, brand logo + author avatar (carousel if >1)
   */
  variant,
  testimonials = [],
  media = null, // media object for stacked-media and trust
  order = 'testimonial-first', // 'media-first' | 'testimonial-first'
  columns = 1, // 1 | 2 | 3
  carousel = false, // enable carousel for columns
  align = 'left', // 'left' | 'center'
  withPadding = false, // boolean
  mediaPosition = 'top', // 'top' | 'bottom' | 'with-name'
  id = '',
  className = '',
  infinite = false
}) {
  const resolvedVariant = variant || 'columns';
  const isMediaFirst = order === 'media-first';
  const normalizedColumns = [1, 2, 3].includes(columns) ? columns : 3;
  const shouldCarousel = resolvedVariant === 'columns' && carousel;

  const mapTestimonialProps = (item) => ({
    testimonial: item.testimonial,
    name: item.name ?? item.author,
    role: item.role ?? item.authorTitle,
    imageUrl: item.imageUrl ?? item.authorImage,
    logoUrl: item.logoUrl,
    rating: item.rating,
    align: item.align ?? align,
    withPadding: item.withPadding ?? withPadding,
    mediaPosition: item.mediaPosition ?? mediaPosition,
    attributes: item.attributes || {}
  });

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

  const renderMediaSlide = (item, index) => {
    const itemMedia = item.media || media;
    const hasMedia = Boolean(itemMedia);
    const widthClass = hasMedia ? 'xl:w-1/2' : 'w-full';

    return (
      <div key={index} className="flex flex-col xl:flex-row items-stretch text-gray-950">
        {isMediaFirst && hasMedia && (
          <div className="w-full xl:w-1/2">
            {renderMedia(itemMedia, item.testimonial || '')}
          </div>
        )}

        <div className={`flex items-center justify-center ${widthClass}`}>
          <TestimonialMolecule {...mapTestimonialProps(item)} />
        </div>

        {!isMediaFirst && hasMedia && (
          <div className="w-full xl:w-1/2">
            {renderMedia(itemMedia, item.testimonial || '')}
          </div>
        )}
      </div>
    );
  };

  const renderColumnsGrid = (items) => {
    const gridClass = (() => {
      switch (normalizedColumns) {
        case 1:
          return 'grid grid-cols-1 gap-section-spacing-x';
        case 2:
          return 'grid grid-cols-1 xl:grid-cols-2 gap-section-spacing-x';
        case 3:
        default:
          return 'grid grid-cols-1 xl:grid-cols-3 gap-section-spacing-x';
      }
    })();

    return (
      <div className={gridClass}>
        {items.map((item, index) => (
          <TestimonialMolecule key={index} {...mapTestimonialProps(item)} />
        ))}
      </div>
    );
  };

  const chunkTestimonials = (items, size) => {
    const chunks = [];
    for (let i = 0; i < items.length; i += size) {
      chunks.push(items.slice(i, i + size));
    }
    return chunks;
  };

  const carouselSettings = (totalPages) => ({
    className: "w-full testimonial-slider",
    dots: true,
    infinite: infinite,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
  });

  if (resolvedVariant === 'media') {
    if (!testimonials || testimonials.length === 0) return null;
    const settings = carouselSettings(testimonials.length);
    return (
      <div className={`container ${className}`} id={id}>
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index}>{renderMediaSlide(item, index)}</div>
          ))}
        </Slider>
      </div>
    );
  }

  if (resolvedVariant === 'stacked-media') {
    if (!testimonials || testimonials.length === 0) return null;
    const hasMedia = Boolean(media);
    return (
      <div className={`container ${className}`} id={id}>
        <div className="flex flex-col xl:flex-row items-stretch gap-24">
          {isMediaFirst && hasMedia && (
            <div className="w-full xl:w-1/2">
              {renderMedia(media)}
            </div>
          )}
          <div className={`flex flex-col gap-24 ${hasMedia ? 'w-full xl:w-1/2' : 'w-full'}`}>
            {testimonials.map((item, index) => (
              <TestimonialMolecule key={index} {...mapTestimonialProps(item)} />
            ))}
          </div>
          {!isMediaFirst && hasMedia && (
            <div className="w-full xl:w-1/2">
              {renderMedia(media)}
            </div>
          )}
        </div>
      </div>
    );
  }

  if (resolvedVariant === 'giftpro-media') {
    if (!testimonials || testimonials.length === 0) return null;

    if (testimonials.length === 1) {
      return (
        <div className={`container ${className}`} id={id}>
          <GiftproTestimonialMolecule {...mapTestimonialProps(testimonials[0])} />
        </div>
      );
    }

    const settings = carouselSettings(testimonials.length);
    return (
      <div className={`container ${className}`} id={id}>
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index}>
              <GiftproTestimonialMolecule {...mapTestimonialProps(item)} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }

  if (resolvedVariant === 'columns') {
    if (!testimonials || testimonials.length === 0) return null;

    if (!shouldCarousel) {
      return (
        <div className={`container ${className}`} id={id}>
          {renderColumnsGrid(testimonials)}
        </div>
      );
    }

    const pages = chunkTestimonials(testimonials, normalizedColumns);
    const settings = carouselSettings(pages.length);
    return (
      <div className={`container ${className}`} id={id}>
        <Slider {...settings}>
          {pages.map((page, pageIndex) => (
            <div key={pageIndex}>
              {renderColumnsGrid(page)}
            </div>
          ))}
        </Slider>
      </div>
    );
  }

  return null;
}
