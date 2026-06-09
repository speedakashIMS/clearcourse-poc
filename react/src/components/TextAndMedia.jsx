import Button from './partials/Button';
import Media from './molecules/Media';
import ValueMolecule from './molecules/ValueMolecule';

const TextAndMedia = ({
  media = 'image', // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  imageUrl,
  videoUrl,
  lottieUrl,
  lottieData,
  iframeUrl,
  /** When true, media sits in a fixed aspect frame and uses object-contain so it fits without cropping. */
  mediaFramed = false,
  flipbookUrl,
  mediaPosition = 'right', // 'left' | 'right'
  richText = '',
  richTextAlign = 'left', // 'left' | 'center' | 'right'
  valueList = null, // { items: [text, number?][], stacked, size: 'small'|'medium'|'large', useIcon }
  buttonText,
  buttonHref,
  buttonVariant = 'dark',
  buttonOnClick,
  className = '',
  ...props
}) => {
  const wrapperClasses = `
    container
    flex
    flex-col
    gap-[var(--spacing-section-spacing-x)]
    flex-col-reverse
    xl:flex-row
    xl:items-center
    ${mediaPosition === 'left' ? 'xl:flex-row-reverse' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const richTextAlignClass =
    richTextAlign === 'center'
      ? 'text-center'
      : richTextAlign === 'right'
        ? 'text-right'
        : 'text-left';

  return (
    <div className={wrapperClasses} {...props}>
      <div className="w-full xl:w-1/2 flex items-center">
        <div className="px-textmedia-text--padding-x py-textmedia-text--padding-y space-y-textmedia-btn-text--spacing-y">
          <div>
            <div className="">
              {richText && (
                <div
                  dangerouslySetInnerHTML={{ __html: richText }}
                  className={`wysiwyg pb-textmedia-text--spacing-y ${richTextAlignClass}`.trim()}
                />
              )}
            </div>
            {valueList && Array.isArray(valueList.items) && valueList.items.length > 0 && (
              (() => {
                const isIconList = valueList.useIcon !== false;
                if (isIconList) {
                  return (
                    <ul className="mt-24 space-y-12">
                      {valueList.items.map((item, index) => (
                        <ValueMolecule
                          key={index}
                          text={item.text}
                          useIcon={true}
                          number={item.number}
                          stacked={valueList.stacked}
                          size={valueList.size}
                          attributes={item.attributes}
                        />
                      ))}
                    </ul>
                  );
                }

                return (
                  <div className="mt-24 space-y-12">
                    {valueList.items.map((item, index) => (
                      <ValueMolecule
                        key={index}
                        text={item.text}
                        useIcon={false}
                        number={item.number}
                        stacked={valueList.stacked}
                        size={valueList.size}
                        attributes={item.attributes}
                      />
                    ))}
                  </div>
                );
              })()
            )}
          </div>
          {buttonText && (
            <div className="mt-24">
              <Button
                text={buttonText}
                href={buttonHref}
                variant={buttonVariant}
                onClick={buttonOnClick}
              />
            </div>
          )}
        </div>
      </div>

      <div
        className={
          mediaFramed
            ? 'w-full xl:w-1/2 flex items-center justify-center'
            : 'w-full xl:w-1/2 flex items-center'
        }
      >
        {mediaFramed ? (
          <div className="w-full max-w-full max-h-[min(70vh,560px)] xl:max-h-[520px] overflow-hidden rounded-[var(--spacing-textmedia-image--br)]">
            <Media
              media={media}
              aspect="rectangle"
              objectFit="contain"
              imageUrl={imageUrl}
              videoUrl={videoUrl}
              lottieUrl={lottieUrl}
              lottieData={lottieData}
              iframeUrl={iframeUrl}
              flipbookUrl={flipbookUrl}
            />
          </div>
        ) : (
          <Media
            media={media}
            imageUrl={imageUrl}
            videoUrl={videoUrl}
            lottieUrl={lottieUrl}
            lottieData={lottieData}
            iframeUrl={iframeUrl}
            flipbookUrl={flipbookUrl}
          />
        )}
      </div>
    </div>
  );
};

export default TextAndMedia;

