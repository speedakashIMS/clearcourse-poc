import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Logos = ({
  logos = [], // Array of { src, alt, href }
  carousel = false,
  autoplay = false,
  autoplaySpeed = 3000,
  carouselLabel = 'Logo carousel',
  className = '',
  ...props
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlideCount, setVisibleSlideCount] = useState(1);
  const carouselRef = useRef(null);
  // autoplay only makes sense as a carousel, so it implies carousel mode
  const showCarousel = carousel || autoplay;
  const gridClasses = 'w-full flex flex-wrap justify-center gap-logos-spacing-x';
  const itemClasses = 'flex items-center justify-center basis-[160px] md:basis-[210px] xl:basis-[135px]';
  const carouselItemClasses = 'flex items-center justify-center px-[calc(var(--spacing-logos-spacing-x)/2)]';

  useEffect(() => {
    if (!showCarousel) return undefined;

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
  }, [showCarousel, currentSlide, logos.length]);

  const carouselSettings = {
    infinite: true,
    arrows: false,
    dots: !autoplay,
    slidesToShow: 6,
    slidesToScroll: 3,
    centerPadding: '0',
    autoplay,
    autoplaySpeed: Number(autoplaySpeed) || 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
    afterChange: setCurrentSlide,
    customPaging: (i) => (
      <button
        type="button"
        aria-label={`Go to carousel page ${i + 1}`}
      />
    ),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          centerPadding: '80px',
          centerMode: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: '80px',
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      ref={showCarousel ? carouselRef : null}
      className={`py-logos-padding-y ${className}`}
      {...(showCarousel ? {
        role: 'region',
        'aria-roledescription': 'carousel',
        'aria-label': carouselLabel,
      } : {})}
      {...props}
    >
      {showCarousel ? (
        <>
          <div aria-live="polite" aria-atomic="true" className="sr-only">
            Showing logos {currentSlide + 1} to {Math.min(currentSlide + visibleSlideCount, logos.length)} of {logos.length}
          </div>
          <Slider {...carouselSettings} className="logos-carousel text-center">
            {logos.map((logo, index) => {
              const image = (
                <img
                  src={logo.src}
                  alt={logo.alt || 'Logo'}
                  className="w-full"
                />
              );

              return logo.href ? (
                <a
                  key={index}
                  href={logo.href}
                  className={carouselItemClasses}
                  {...(logo.attributes ?? {})}
                >
                  {image}
                </a>
              ) : (
                <div
                  key={index}
                  className={carouselItemClasses}
                  {...(logo.attributes ?? {})}
                >
                  {image}
                </div>
              );
            })}
          </Slider>
        </>
      ) : (
        <div className={gridClasses}>
          {logos.map((logo, index) => {
            const image = (
              <img
                src={logo.src}
                alt={logo.alt || 'Logo'}
                className="w-full"
              />
            );

            return logo.href ? (
              <a
                key={index}
                href={logo.href}
                className={itemClasses}
                {...(logo.attributes ?? {})}
              >
                {image}
              </a>
            ) : (
              <div
                key={index}
                className={itemClasses}
                {...(logo.attributes ?? {})}
              >
                {image}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Logos;
