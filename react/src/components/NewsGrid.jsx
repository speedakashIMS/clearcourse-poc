import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import NewsMolecule from './molecules/NewsMolecule';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewsGrid = ({
  variant = 'stacked', // 'stacked' | 'row'
  columns = 3, // stacked: 2 | 3 | 4, row: 1 | 2
  carousel = false,
  items = [], // Array of { imageUrl, imageAlt, title, description, linkText, linkHref, linkVariant }
  carouselLabel = 'News carousel',
  className = '',
  infinite = true,
  ...props
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlideCount, setVisibleSlideCount] = useState(1);
  const carouselRef = useRef(null);
  const isRow = variant === 'row';
  const resolvedColumns = isRow ? (columns === 2 ? 2 : 1) : ([2, 3, 4].includes(columns) ? columns : 3);

  const getGridClasses = () => {
    if (isRow) {
      return resolvedColumns === 2 ? 'grid grid-cols-1 md:grid-cols-2 gap-24' : 'grid grid-cols-1 gap-24';
    }

    switch (resolvedColumns) {
      case 2:
        return 'grid grid-cols-1 md:grid-cols-2 gap-24';
      case 4:
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24';
      case 3:
      default:
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24';
    }
  };

  const carouselItemClasses = 'px-12';
  const carouselWrapperClasses = '-mx-12';
  const slidesToShow = resolvedColumns;

  useEffect(() => {
    if (!carousel) return undefined;

    const syncCarouselState = () => {
      const carouselEl = carouselRef.current;
      if (!carouselEl) return;

      carouselEl.querySelectorAll('.slick-slide').forEach((slideEl) => {
        if (slideEl.getAttribute('aria-hidden') === 'true') {
          slideEl.setAttribute('inert', '');
        } else {
          slideEl.removeAttribute('inert');
        }
      });

      const visibleSlides = carouselEl.querySelectorAll('.slick-slide[aria-hidden="false"]:not(.slick-cloned)');
      setVisibleSlideCount(Math.max(visibleSlides.length, 1));
    };

    const frameId = window.requestAnimationFrame(syncCarouselState);
    return () => window.cancelAnimationFrame(frameId);
  }, [carousel, currentSlide, items.length]);

  const carouselSettings = {
    infinite: infinite,
    arrows: false,
    dots: true,
    slidesToShow,
    slidesToScroll: slidesToShow,
    centerPadding: '0',
    afterChange: setCurrentSlide,
    customPaging: (i) => (
      <button
        type="button"
        aria-label={`Go to carousel page ${i + 1}`}
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(slidesToShow, 2),
          slidesToScroll: 1,
          centerPadding: '0',
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '0',
        },
      },
    ],
  };

  const renderItem = (item, index) => (
    <NewsMolecule
      key={index}
      stacked={!isRow}
      imageUrl={item.imageUrl}
      imageAlt={item.imageAlt}
      title={item.title}
      description={item.description}
      linkText={item.linkText}
      linkHref={item.linkHref}
      {...item.attributes || {}}
    />
  );

  return (
    <div
      ref={carousel ? carouselRef : null}
      className={`container ${className}`}
      {...(carousel ? {
        role: 'region',
        'aria-roledescription': 'carousel',
        'aria-label': carouselLabel,
      } : {})}
      {...props}
    >
      {carousel ? (
        <>
          <div aria-live="polite" aria-atomic="true" className="sr-only">
            Showing news items {currentSlide + 1} to {Math.min(currentSlide + visibleSlideCount, items.length)} of {items.length}
          </div>
          <Slider {...carouselSettings} className={`news-carousel ${carouselWrapperClasses}`.trim()}>
            {items.map((item, index) => (
              <div key={index} className={carouselItemClasses}>
                {renderItem(item, index)}
              </div>
            ))}
          </Slider>
        </>
      ) : (
        <div className={getGridClasses()}>
          {items.map((item, index) => renderItem(item, index))}
        </div>
      )}
    </div>
  );
};

export default NewsGrid;

