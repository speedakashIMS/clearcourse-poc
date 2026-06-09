import Media from './Media';
import Button from '../partials/Button';
import AccordionMolecule from './AccordionMolecule';

/**
 * DownloadListMolecule
 *
 * A media card with content in order: title, description, buttons, accordion.
 * Variants: vertical | horizontal (media left, content right).
 */
export default function DownloadListMolecule({
  variant = 'vertical', // 'vertical' | 'horizontal'
  media = null, // Media props: { media, imageUrl, videoUrl, aspect, title, ... }
  logoUrl = null, // Logo URL
  title = '',
  description = '',
  buttons = [], // [{ text, href, variant, size, onClick }]
  accordions = [], // [{ title, content }]
  className = '',
  ...props
}) {
  const isVertical = variant === 'vertical';
  const isHorizontal = variant === 'horizontal';

  // Horizontal variant: stacked (1 column) below xl; side-by-side from xl up
  const wrapperClass = [
    'flex bg-white overflow-hidden rounded-16 text-white h-full',
    isVertical ? 'flex-col' : 'flex-col xl:flex-row',
    className,
  ].filter(Boolean).join(' ');

  // Vertical: fixed 269px media height. Horizontal below xl (stacked): same 269px; from xl up: half width, auto height
  const mediaWrapperClass = [
    'w-full flex-shrink-0 aspect-[16/9]',
    isVertical ? 'h-[269px]' : 'h-[269px] xl:w-1/2 xl:min-h-0 xl:h-auto',
  ].filter(Boolean).join(' ');

  const contentWrapperClass = [
    'w-full flex flex-col flex-1 gap-downloads-spacing-y p-downloads-padding-x p-downloads-padding-y bg-grey-600',
    isHorizontal ? 'xl:w-1/2' : '',
  ].filter(Boolean).join(' ');

  const content = (
    <>
      <div>
        {title && (
          <h3 className="text-headings-h3 font-semibold m-0">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-body-default m-0 mt-10">
            {description}
          </p>
        )}
      </div>
      {buttons && buttons.length > 0 && (
        <div className="flex flex-wrap gap-8">
          {buttons.map((btn, i) => (
            <Button
              key={i}
              text={btn.text}
              href={btn.href}
              variant={btn.variant || 'light'}
              size={btn.size || 'btn-md'}
              onClick={btn.onClick}
            />
          ))}
        </div>
      )}
      {accordions && accordions.length > 0 && (
        <div className="flex flex-col gap-0">
          {accordions.map((acc, i) => (
            <AccordionMolecule
              key={i}
              title={acc.title}
              content={acc.content}
              iconPosition="left"
              index={i}
              colorVariant="light"
            />
          ))}
        </div>
      )}
    </>
  );

  const mediaBlock = media && (
    <div className={`${mediaWrapperClass} relative`}>
      <Media
        media={media.media || 'image'}
        aspect={media.aspect || 'default'}
        imageUrl={media.imageUrl}
        videoUrl={media.videoUrl}
        lottieUrl={media.lottieUrl}
        lottieData={media.lottieData}
        iframeUrl={media.iframeUrl}
        title={media.title || title}
        className="w-full h-full object-cover"
      />
      {logoUrl && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2  p-downloads-logo--padding ">
          <img
            src={logoUrl}
            alt={`${title} logo`}
            className="object-contain h-[48px] border-2 border-grey-600 rounded-10"
          />
        </div>
      )}
    </div>
  );

  return (
    <div className={wrapperClass} {...props} {...props.attributes || {}}>
      {mediaBlock}
      <div className={contentWrapperClass}>
        {content}
      </div>
    </div>
  );
}
