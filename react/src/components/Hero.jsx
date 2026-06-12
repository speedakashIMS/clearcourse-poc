import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import Button from './partials/Button';
import Media from './molecules/Media';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ACCENT_COLOR_CLASSES = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  tertiary: 'text-tertiary',
  white: 'text-white',
};

const OVERLAY_FROM_CLASSES = {
  primary: 'from-primary',
  secondary: 'from-secondary',
  tertiary: 'from-tertiary',
  white: 'from-white',
};

const CONTENT_BG_WHEN_OVERLAY = {
  none: 'bg-transparent',
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  tertiary: 'bg-tertiary',
  white: 'bg-white',
};

const OVERLAY_GRADIENT_CLASSES = {
  horizontalContentFirst: {
    primary: 'bg-gradient-to-r from-primary to-transparent',
    secondary: 'bg-gradient-to-r from-secondary to-transparent',
    tertiary: 'bg-gradient-to-r from-tertiary to-transparent',
    white: 'bg-gradient-to-r from-white to-transparent',
  },
  horizontalMediaFirst: {
    primary: 'bg-gradient-to-l from-primary to-transparent',
    secondary: 'bg-gradient-to-l from-secondary to-transparent',
    tertiary: 'bg-gradient-to-l from-tertiary to-transparent',
    white: 'bg-gradient-to-l from-white to-transparent',
  },
  verticalContentFirst: {
    primary: 'bg-gradient-to-b from-primary to-transparent',
    secondary: 'bg-gradient-to-b from-secondary to-transparent',
    tertiary: 'bg-gradient-to-b from-tertiary to-transparent',
    white: 'bg-gradient-to-b from-white to-transparent',
  },
  verticalMediaFirst: {
    primary: 'bg-gradient-to-t from-primary to-transparent',
    secondary: 'bg-gradient-to-t from-secondary to-transparent',
    tertiary: 'bg-gradient-to-t from-tertiary to-transparent',
    white: 'bg-gradient-to-t from-white to-transparent',
  },
};

/**
 *
 * Props:
 *   slides       – Array of slides. Each slide:
 *     titleAccent – string (optional), accent line above title; uses font-accent
 *     titleAccentColor – 'primary' | 'secondary' | 'tertiary' | 'white' (optional)
 *     title      – string (optional)
 *     description – string (optional)
 *     buttons    – [{ text, href?, variant? }] (optional), uses Button partial; size from buttonSize prop
 *     logos      – [{ src, alt? }] (optional)
 *     widget     – string HTML, copy-paste (e.g. TrustPilot); optional
 *     media      – optional. Omit for placeholder. Else { type: 'image'|'video'|'lottie'|'iframe', imageUrl?, videoUrl?, lottieData?, iframeUrl?, title? }
 *   order        – 'content-first' | 'media-first' (column order)
 *   mediaStyle   – 'flush' | 'framed' (framed = padding via p-hero-image--padding)
 *   mobileOverlay – boolean (optional, default false); when true, gradient overlay on mobile only between image and content (transparent → solid on content side)
 *   overlayColor  – 'primary' | 'secondary' | 'tertiary' | 'white' (optional, default 'secondary'); overlay colour
 *   buttonSize   – 'btn-sm' | 'btn-md' (optional, default 'btn-md')
 */
export default function Hero({
  slides = [],
  order = 'content-first',
  mediaStyle = 'flush',
  mobileOverlay = false,
  overlayColor = 'secondary',
  buttonSize = 'btn-md',
  carouselLabel = 'Hero content',
  className = '',
  id = '',
  infinite,
  ...rest
}) {
  if (!slides?.length) return null;

  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const isAuthor =
    typeof window !== 'undefined' &&
    window.location.origin.indexOf('author') > -1;
  const contentFirst = order === 'content-first';
  const framed = mediaStyle === 'framed';
  const activeSlide = slides[currentSlide] ?? slides[0];
  const activeSlideLabel = activeSlide?.title || activeSlide?.description || '';

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

    const frameId = window.requestAnimationFrame(syncInactiveSlides);
    return () => window.cancelAnimationFrame(frameId);
  }, [currentSlide, slides.length]);

  const slickSettings = {
    dots: true,
    infinite: infinite ?? slides.length > 1,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !isAuthor,
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

  function ContentCol({ slide, slideIndex }) {
    const { titleAccent, titleAccentColor, title, description, buttons, logos, widget } = slide;
    const TitleTag = slides.length > 1 && slideIndex > 0 ? 'h2' : 'h1';
    const accentColorClass = ACCENT_COLOR_CLASSES[titleAccentColor] || 'text-white';
    const titleAccentClass = ['font-accent font-normal m-0 text-display-xl leading-display-xl', accentColorClass].filter(Boolean).join(' ');
    const contentBgClass = mobileOverlay ? (CONTENT_BG_WHEN_OVERLAY[overlayColor] || 'bg-secondary') : 'bg-transparent';
    return (
      <div className={`${contentBgClass} flex flex-col justify-center gap-hero-spacing px-hero-padding-x py-hero-padding-y text-left`}>
        <div className="spacing-y-hero-text--spacing-y">
          {titleAccent && (
            <p className={titleAccentClass}>{titleAccent}</p>
          )}
          {title && (
            <TitleTag className="text-white font-normal m-0 text-display-xl">
              {title}
            </TitleTag>
          )}
          {description && <p className="m-0 text-body-large leading-body-large text-white">{description}</p>}
        </div>
        {buttons?.length > 0 && (
          <div className="flex flex-wrap gap-10">
            {buttons.map((b, i) => (
              <Button key={i} text={b.text} href={b.href} variant={b.variant ?? 'light'} size={b.size ?? buttonSize} onClick={b.onClick} className="flex-shrink-0 max-sm:w-full" />
            ))}
          </div>
        )}
        {logos?.length > 0 && (
          <div className="flex items-center flex-wrap gap-8 max-sm:w-full">
            {logos.map((l, i) => (
              <div key={i} className="flex items-center justify-center max-w-[119px] h-[46px]">
                <img src={l.src} alt={l.alt ?? ''} className="w-full h-full object-contain rounded-10 max-w-full" />
              </div>
            ))}
          </div>
        )}
        {widget && (
          <div className="w-full">
            <div className="w-full" dangerouslySetInnerHTML={{ __html: widget }} />
          </div>
        )}
      </div>
    );
  }

  function MediaCol({ slide }) {
    const media = slide.media;
    if (media) {
      const color = OVERLAY_FROM_CLASSES[overlayColor] ? overlayColor : 'secondary';
      const overlayMobile = contentFirst
        ? OVERLAY_GRADIENT_CLASSES.verticalContentFirst[color]
        : OVERLAY_GRADIENT_CLASSES.verticalMediaFirst[color];
      return (
        <div className={`relative flex items-center justify-center w-full ${framed ? 'p-hero-image--padding' : ''}`}>
          <div className={`relative w-full aspect-[393/310] md:aspect-[834/500] lg:aspect-[756/598] overflow-hidden ${framed ? 'rounded-[var(--spacing-hero-image--br)]' : ''}`}>
            <Media
              media={media.type ?? 'image'}
              aspect="default"
              imageUrl={media.imageUrl}
              videoUrl={media.videoUrl}
              lottieUrl={media.lottieUrl}
              lottieData={media.lottieData}
              iframeUrl={media.iframeUrl}
              title={media.title ?? ''}
              className="w-full h-full object-cover"
            />
            {mobileOverlay && (
              <div aria-hidden className={`absolute inset-0 pointer-events-none ${overlayMobile} lg:hidden`} />
            )}
          </div>
        </div>
      );
    }
    else return null;
  }

  const isFlushCarousel = slides.length > 1 && !framed;
  const wrapperClass = [
    'hero-slider relative w-full overflow-hidden',
    isFlushCarousel && 'hero-slider--dots-absolute',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div
      ref={carouselRef}
      className={wrapperClass}
      id={id}
      role="region"
      aria-roledescription="carousel"
      aria-label={carouselLabel}
      {...rest}
    >
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        Slide {currentSlide + 1} of {slides.length}{activeSlideLabel ? `: ${activeSlideLabel}` : ''}
      </div>
      <Slider {...slickSettings} className="w-full hero-slider-slick">
        {slides.map((slide, i) => (
          <div key={slide.key ?? i} className="outline-none" {...slide.attributes || {}}>
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] lg:min-h-[500px]">
              {contentFirst ? (
                <>
                  <ContentCol slide={slide} slideIndex={i} />
                  <MediaCol slide={slide} />
                </>
              ) : (
                <>
                  <MediaCol slide={slide} />
                  <ContentCol slide={slide} slideIndex={i} />
                </>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
