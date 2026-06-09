import { lazy, Suspense, useCallback, useEffect, useId, useRef, useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Button from './partials/Button';
const Media = lazy(() => import('./molecules/Media'));

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

export default function PopUpModal({
  isOpen = false, // ignored when trigger === 'exit-popup' (open/close driven by exit intent + internal dismiss)
  onClose,
  trigger = 'manual', // 'manual' | 'exit-popup' — exit-popup: pointer leaves page toward browser chrome (top edge)
  exitIntentEdgePx = 48, // max clientY (distance from top of viewport) still counted as “toward tabs / URL bar”
  placement = 'center', // 'center' | 'bottom-right' — bottom-right: no backdrop overlay, panel docked to corner
  backgroundImage,
  title = '',
  subtitle = '',
  media,
  buttons = [],
  closeLabel = 'Close dialog',
  closeOnBackdrop = true,
  className = '',
  children,
}) {
  const titleId = useId();
  const subtitleId = useId();
  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);
  const [hasExitTriggered, setHasExitTriggered] = useState(false);
  const [hasExitDismissed, setHasExitDismissed] = useState(false);

  const isCentered = placement === 'center';
  const isExitPopup = trigger === 'exit-popup';
  const isModalOpen = isExitPopup
    ? hasExitTriggered && !hasExitDismissed
    : isOpen;

  const handleClose = useCallback(() => {
    if (isExitPopup) {
      setHasExitDismissed(true);
    }
    onClose?.();
  }, [isExitPopup, onClose]);

  useEffect(() => {
    if (!isExitPopup || hasExitTriggered || hasExitDismissed || typeof document === 'undefined') {
      return undefined;
    }

    const handleMouseOut = (event) => {
      // Leaving the document toward the browser UI (tabs, address bar): no element entered.
      if (event.relatedTarget != null) return;
      if (typeof event.clientY !== 'number') return;
      if (event.clientY > exitIntentEdgePx) return;
      setHasExitTriggered(true);
    };

    document.documentElement.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.documentElement.removeEventListener('mouseout', handleMouseOut);
    };
  }, [isExitPopup, hasExitTriggered, hasExitDismissed, exitIntentEdgePx]);

  useEffect(() => {
    if (!isModalOpen) {
      return undefined;
    }

    let previousOverflow = '';
    if (isCentered) {
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        handleClose();
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) {
        return;
      }

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll(FOCUSABLE_SELECTOR),
      );

      if (!focusableElements.length) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement;

      if (event.shiftKey) {
        if (activeElement === firstElement || !dialogRef.current.contains(activeElement)) {
          event.preventDefault();
          lastElement.focus();
        }
        return;
      }

      if (activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      if (isCentered) {
        document.body.style.overflow = previousOverflow;
      }
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, isCentered, handleClose]);

  if (!isModalOpen) {
    return null;
  }

  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }
    : undefined;

  const mediaProps = media
    ? {
        media: media.media ?? 'image',
        aspect: media.aspect ?? 'rectangle',
        imageUrl: media.imageUrl,
        videoUrl: media.videoUrl,
        lottieUrl: media.lottieUrl,
        lottieData: media.lottieData,
        iframeUrl: media.iframeUrl,
        title: media.title ?? title,
      }
    : null;

  const rootClassName = isCentered
    ? 'fixed inset-0 z-50 flex items-center justify-center p-16 sm:p-24'
    : 'fixed bottom-16 right-16 z-50 w-[min(600px,calc(100vw-32px))] sm:bottom-24 sm:right-24';

  return (
    <div className={rootClassName}>
      {isCentered && (
        <button
          type="button"
          className="absolute inset-0 bg-secondary/60 backdrop-blur-[2px]"
          aria-label={closeLabel}
          onClick={closeOnBackdrop ? handleClose : undefined}
        />
      )}

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={subtitle ? subtitleId : undefined}
        className={`relative z-10 w-full max-h-[90vh] overflow-hidden rounded-[32px] bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] ${isCentered ? 'max-w-[600px] ' : 'border-2 border-tertiary '}${className}`.trim()}
        style={backgroundStyle}
      >

        <div className="relative z-10 overflow-y-auto max-h-[90vh] px-20 pb-32 pt-20 sm:px-40 sm:pb-40 sm:pt-24">
          <div className="flex justify-end">
            <button
              ref={closeButtonRef}
              type="button"
              aria-label={closeLabel}
              onClick={handleClose}
              className="inline-flex h-[33px] w-[33px] items-center justify-center rounded-full bg-secondary-100 text-secondary transition-colors hover:bg-secondary-200 cursor-pointer"
            >
              <XMarkIcon className="h-20 w-20" />
            </button>
          </div>

          <div className="mx-auto space-y-[var(--spacing-section-spacing-y)] text-center">
            {(title || subtitle) && (
              <div className="space-y-10">
                {title && (
                  <h2 id={titleId} className="text-headings-h1 text-secondary">
                    {title}
                  </h2>
                )}
                {subtitle && (
                  <p id={subtitleId} className="text-secondary-700">
                    {subtitle}
                  </p>
                )}
              </div>
            )}

            {children}

            {mediaProps && (
              <div className="w-full overflow-hidden rounded-[20px]">
                <Suspense fallback={<div className="bg-grey-100 h-48" />}>
                  <Media
                    {...mediaProps}
                    className="h-full w-full object-cover"
                  />
                </Suspense>
              </div>
            )}

            {buttons.length > 0 && (
              <div className="flex w-full flex-col items-center justify-center gap-10 sm:w-auto sm:flex-row sm:flex-wrap">
                {buttons.map((button, index) => {
                  const { closeOnClick = false, onClick, ...buttonProps } = button;

                  return (
                    <Button
                      key={button.key ?? `${button.text ?? 'button'}-${index}`}
                      {...buttonProps}
                      onClick={(event) => {
                        onClick?.(event);

                        if (!event.defaultPrevented && closeOnClick) {
                          handleClose();
                        }
                      }}
                      className={`max-sm:w-full ${button.className ?? ''}`.trim()}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
