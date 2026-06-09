import { useEffect, useRef, useState } from 'react';
import Button from './partials/Button';

let Slider;

const ACCENT_COLOR_CLASSES = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-tertiary',
  white: 'text-white',
};

/**
 * Hero with background image covering each slide. Text alignment per slide.
 *
 * Props:
 *   slides        – Array of slides. Each slide:
 *     titleAccent – string (optional), accent line above title; uses font-accent
 *     titleAccentColor – 'primary' | 'secondary' | 'tertiary' | 'white' (optional)
 *     titleColor  – 'primary' | 'secondary' | 'tertiary' | 'white' (optional, default 'white'); main headline colour
 *     title       – string (optional)
 *     titleSize   – 'normal' | 'big' (optional, default 'normal')
 *     description – string (optional)
 *     backgroundImage – image URL; fills slide as background
 *     buttons     – [{ text, href?, variant? }] (optional); variant per button; size from buttonSize prop
 *     logos       – [{ src, alt? }] (optional)
 *     trustpilotWidget – string HTML, copy-paste; optional
 *     textAlignment – 'left' | 'center' | 'right' (optional, default 'left')
 *   size          – 'default' | 'bigger' (optional, default 'default'); 'bigger' = taller hero, narrower text container
 *   height        – 'normal' | 'small' (optional, default 'normal'); 'small' = min 240px, grows with content
 *   buttonSize    – 'btn-sm' | 'btn-md' (optional, default 'btn-md')
 *   className, id – passed through
 */
export default function HeroBackgroundImage({
  slides = [],
  size = 'default', // 'default' | 'bigger'
  height = 'normal', // 'normal' | 'small'
  buttonSize = 'btn-md',
  carouselLabel = 'Hero content',
  className = '',
  id = '',
  ...rest
}) {
  if (!slides?.length) return null;

  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const isBigger = size === 'bigger';
  const isSmallHeight = height === 'small';
  const isAuthor =
    typeof window !== 'undefined' &&
    window.location.origin.indexOf('author') > -1;
  const getAlignment = (a) => (['center', 'right', 'left'].includes(a) ? a : 'left');
  const activeSlide = slides[currentSlide] ?? slides[0];
  const activeSlideLabel = activeSlide?.title || activeSlide?.description || '';

  // Lazy-load slick only when there are multiple slides
  useEffect(() => {
    if (slides.length > 1 && !Slider) {
      Promise.all([
        import('react-slick').then(m => { Slider = m.default; }),
        import('slick-carousel/slick/slick.css'),
        import('slick-carousel/slick/slick-theme.css'),
      ]).catch(err => console.error('Failed to load slick:', err));
    }
  }, [slides.length]);

  useEffect(() => {
    const syncInactiveSlides = () => {
      const carouselEl = carouselRef.current;
      if (!carouselEl) return;

      carouselEl.querySelectorAll('.slick-slide').forEach((slideEl) => {
        if (slideEl.getAttribute('aria-hidden') === 'true') {
          slideEl.setAttribute('inert', '');
        } else {
          slideEl.removeAttribute('inert');
        }
      });
    };

    if (slides.length > 1) {
      const frameId = window.requestAnimationFrame(syncInactiveSlides);
      return () => window.cancelAnimationFrame(frameId);
    }
  }, [currentSlide, slides.length]);

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !isAuthor,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: true,
    pauseOnFocus: true,
    cssEase: 'linear',
    afterChange: setCurrentSlide,
    customPaging: (i) => (
      <button
        type="button"
        aria-label={currentSlide === i
          ? `Current slide, slide ${i + 1} of ${slides.length}`
          : `Go to slide ${i + 1} of ${slides.length}`}
        aria-current={currentSlide === i ? 'true' : undefined}
      />
    ),
  };

  const wrapperClass = [
    'hero-background-img relative w-full overflow-hidden',
    isSmallHeight && 'hero-background-img--height-small',
    isSmallHeight
      ? 'min-h-[240px]'
      : isBigger
        ? 'min-h-[900px] max-sm:min-h-[100vh]'
        : 'min-h-[700px] max-sm:min-h-[100vh]',
    className,
  ].filter(Boolean).join(' ');
  const containerClass = [
    'relative flex w-full z-20',
    isSmallHeight
      ? 'min-h-[240px] items-center'
      : isBigger
        ? 'min-h-[900px] items-start'
        : 'min-h-[700px] items-center',
  ].filter(Boolean).join(' ');

  function SlideContent({ slide, slideIndex }) {
    const alignment = getAlignment(slide.textAlignment);
    const titleSize = slide.titleSize === 'big' ? 'big' : 'normal';
    const TitleTag = slides.length > 1 && slideIndex > 0 ? 'div' : 'h1';
    const contentAlignClass =
      alignment === 'center'
        ? 'items-center text-center mx-auto'
        : alignment === 'right'
          ? 'items-start text-left lg:ml-auto'
          : 'items-start text-left';

    const pbClass = isSmallHeight
      ? 'pb-hero-padding-y'
      : slides.length > 1
        ? 'pb-[calc(var(--spacing-hero-padding-y)+var(--spacing-80))] lg:pb-hero-padding-y'
        : 'pb-hero-padding-y';
    const accentColorClass = ACCENT_COLOR_CLASSES[slide.titleAccentColor] || '';
    const mainTitleColorClass =
      ACCENT_COLOR_CLASSES[slide.titleColor] || ACCENT_COLOR_CLASSES.white;
    const titleSizeClass = isSmallHeight
      ? 'text-display-s'
      : isBigger
        ? 'text-display-m leading-display-m'
        : 'text-display-xl leading-display-xl';
    const titleAccentClass = ['font-accent font-normal m-0', titleSizeClass, accentColorClass].filter(Boolean).join(' ');
    const titleMarginBottom = isSmallHeight ? 'mb-4' : 'mb-10';
    const mainTitleClass = isSmallHeight
      ? `${mainTitleColorClass} font-bold m-0 ${titleMarginBottom} text-display-m leading-display-m`
      : titleSize === 'big'
        ? `${mainTitleColorClass} font-bold m-0 ${titleMarginBottom} text-display-l leading-display-l`
        : isBigger
          ? `${mainTitleColorClass} font-normal m-0 ${titleMarginBottom} text-display-m leading-display-m`
          : `${mainTitleColorClass} font-normal m-0 ${titleMarginBottom} text-display-xl leading-display-xl max-lg:text-display-l max-lg:leading-display-l max-md:text-display-m max-md:leading-display-m`;
    const contentWidthClass = isBigger ? 'w-full lg:max-w-[530px]' : 'w-full lg:max-w-1/2';
    const contentPaddingClass = isSmallHeight
      ? `pt-hero-padding-y ${pbClass}`
      : isBigger
        ? `pt-80 ${pbClass}`
        : `pt-hero-padding-y ${pbClass}`;
    return (
      <div className={`${contentWidthClass} flex flex-col ${isSmallHeight ? 'gap-8' : 'gap-hero-spacing'} px-hero-padding-x ${contentPaddingClass} text-white ${contentAlignClass}`}>
        <div className={isSmallHeight ? 'space-y-4' : 'spacing-y-hero-text--spacing-y'}>
          {slide.titleAccent && (
            <p className={titleAccentClass}>{slide.titleAccent}</p>
          )}
          {slide.title && (
            <TitleTag className={mainTitleClass}>
              {slide.title}
            </TitleTag>
          )}
          {slide.description && (
            <p className={`m-0 ${isSmallHeight ? 'text-body-default' : 'text-body-large leading-body-large'}`}>
              {slide.description}
            </p>
          )}
        </div>
        {slide.buttons?.length > 0 && (
          <div className="flex flex-wrap gap-10 max-sm:flex-col max-sm:gap-12 max-sm:w-full">
            {slide.buttons.map((btn, i) => (
              <Button
                key={i}
                text={btn.text}
                href={btn.href}
                variant={btn.variant ?? 'light'}
                size={btn.size ?? buttonSize}
                onClick={btn.onClick}
                className="flex-shrink-0 max-sm:w-full"
              />
            ))}
          </div>
        )}
        {slide.logos?.length > 0 && (
          <div className="flex items-center gap-8 max-sm:w-full">
            {slide.logos.map((logo, i) => (
              <div key={i} className="flex items-center justify-center max-w-120 h-auto">
                <img src={logo.src} alt={logo.alt ?? ''} className="w-full h-auto object-contain rounded-10 max-w-full" />
              </div>
            ))}
          </div>
        )}
        {slide.trustpilotWidget && (
          <div className="mt-8 flex flex-row w-full sm:max-w-[219px]">
            {typeof slide.trustpilotWidget === 'string' ? (
              <div className="w-full" dangerouslySetInnerHTML={{ __html: slide.trustpilotWidget }} />
            ) : (
              slide.trustpilotWidget
            )}
          </div>
        )}
      </div>
    );
  }

  const renderSlide = (slide, index) => (
    <div
      key={slide.key ?? index}
      className={`relative w-full outline-none${isSmallHeight ? ' min-h-[240px]' : ''}`.trim()}
      {...(slide.attributes || {})}
    >
      {/* Background image covering the slide */}
      {slide.backgroundImage && (
        typeof slide.backgroundImage === 'string' && slide.backgroundImage.includes('<') ? (
          <div
            className="absolute inset-0 z-0 [&_picture]:w-full [&_picture]:h-full [&_img]:w-full [&_img]:h-full [&_img]:object-cover [&_img]:object-center [&_img]:block"
            dangerouslySetInnerHTML={{ __html: slide.backgroundImage }}
          />
        ) : (
          <img
            src={slide.backgroundImage}
            alt=""
            className="absolute inset-0 z-0 w-full h-full object-cover object-center"
            fetchPriority="high"
          />
        )
      )}
      <div className="absolute inset-0 z-10 bg-grey-950/30" aria-hidden />
      <div className={containerClass}>
        <SlideContent slide={slide} slideIndex={index} />
      </div>
    </div>
  );

  const isSingleSlide = slides.length === 1;

  return (
    <div
      ref={carouselRef}
      className={wrapperClass}
      id={id}
      role="region"
      aria-roledescription={isSingleSlide ? undefined : "carousel"}
      aria-label={isSingleSlide ? undefined : carouselLabel}
      {...rest}
    >
      {!isSingleSlide && (
        <div aria-live="polite" aria-atomic="true" className="sr-only">
          Slide {currentSlide + 1} of {slides.length}{activeSlideLabel ? `: ${activeSlideLabel}` : ''}
        </div>
      )}
      {isSingleSlide || !Slider ? (
        <div className="w-full">
          {slides.map((slide, index) => renderSlide(slide, index))}
        </div>
      ) : (
        <Slider {...slickSettings} className="w-full hero-background-img-slick">
          {slides.map((slide, index) => renderSlide(slide, index))}
        </Slider>
      )}
    </div>
  );
}
