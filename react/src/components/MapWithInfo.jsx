import Button from './partials/Button';
import ValueMolecule from './molecules/ValueMolecule';

const MapWithInfo = ({
  richText = '',
  valueList = null, // { items: [text, number?][], stacked, size: 'small'|'medium'|'large', useIcon }
  buttonText,
  buttonHref,
  buttonVariant = 'dark',
  buttonOnClick,
  mapImageUrl,
  mapImageAlt = 'Map',
  mapIframeUrl,
  className = '',
  ...props
}) => {
  return (
    <div className={`space-y-section-spacing-y ${className}`} {...props}>
      <div className="relative w-full xl:aspect-[1512/522] xl:flex xl:items-center xl:justify-center">
        {mapIframeUrl ? (
          <iframe
            src={mapIframeUrl}
            title="Map"
            className="xl:absolute xl:inset-0 w-full h-full aspect-[4/3] xl:aspect-auto"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          mapImageUrl && (
            <img
              src={mapImageUrl}
              alt={mapImageAlt}
              className="xl:absolute xl:inset-0 w-full h-full xl:object-cover xl:z-10 aspect-[4/3] xl:aspect-auto"
            />
          )
        )}

        <div className="xl:container xl:px-0">
          <div className="w-full xl:max-w-[364px] ms-auto relative z-10 bg-white p-textmedia-text--padding-x p-textmedia-text--padding-y space-y-24">
            <div className="space-y-textmedia-btn-text--spacing-y">
              <div className="space-y-20">
                {richText && (
                  <div dangerouslySetInnerHTML={{ __html: richText }} className="wysiwyg space-y-textmedia-text--spacing-y pb-textmedia-text--spacing-y" />
                )}
                {valueList && Array.isArray(valueList.items) && valueList.items.length > 0 && (
                  (() => {
                    const isIconList = valueList.useIcon !== false;
                    if (isIconList) {
                      return (
                        <ul className="space-y-12">
                          {valueList.items.map((item, index) => (
                            <ValueMolecule
                              key={index}
                              text={item.text}
                              useIcon={true}
                              number={item.number}
                              stacked={valueList.stacked}
                              size={valueList.size}
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
                          />
                        ))}
                      </div>
                    );
                  })()
                )}
              </div>
              {buttonText && (
                  <Button
                    text={buttonText}
                    href={buttonHref}
                    variant={buttonVariant}
                    onClick={buttonOnClick}
                  />
              )}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MapWithInfo;

