import Link from '../partials/Link';
import Button from '../partials/Button';
import ValueMolecule from './ValueMolecule';

const TileMolecule = ({
  title,
  description,
  richText,
  valueList = null, // { items: [{ text, number?, attributes? }], stacked, size, useIcon }
  buttonText,
  buttonHref,
  buttonOnClick,
  buttonType = 'link', // 'link' | 'button'
  backgroundImage,
  backgroundColor = 'primary', // 'primary' | 'secondary' | 'tertiary' | 'white'
  className = '',
  attributes = {},
}) => {
  const normalizedBackgroundColor = (backgroundColor || 'primary').toLowerCase();
  const backgroundColorMap = {
    primary: 'bg-primary text-white border-white',
    secondary: 'bg-secondary text-white border-white',
    tertiary: 'bg-tertiary text-secondary border-secondary-300',
    white: 'bg-white text-secondary border-secondary-300',
  };
  const tileThemeClasses = backgroundColorMap[normalizedBackgroundColor] || backgroundColorMap.primary;

  const tileClasses = `
    relative
    overflow-hidden
    border-2
    px-textmedia-text--padding-x py-textmedia-text--padding-y
    ${tileThemeClasses}
    ${className}
  `
    .trim()
    .replace(/\s+/g, ' ');

  const backgroundStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }
    : undefined;

  const hasLinkHref = typeof buttonHref === 'string' ? buttonHref.trim().length > 0 : Boolean(buttonHref);
  const hasNonEmptyString = (s) => typeof s === 'string' && s.trim().length > 0;
  const hasValueList = valueList && Array.isArray(valueList.items) && valueList.items.length > 0;
  const hasContent =
    hasNonEmptyString(title) ||
    hasNonEmptyString(description) ||
    hasNonEmptyString(richText) ||
    hasValueList;
  const hasLink = buttonType === 'link' && hasNonEmptyString(buttonText) && hasLinkHref;
  const hasButtonCta = buttonType === 'button' && hasNonEmptyString(buttonText) && hasLinkHref;
  // Image tiles only: gradient when there is something to read (copy or CTA).
  const showGradientOverlay =
    Boolean(backgroundImage) && (hasContent || hasLink || hasButtonCta);

  return (
    <div
      className={tileClasses}
      style={backgroundStyle}
      {...(attributes ?? {})}
    >
      {showGradientOverlay && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 75%)',
          }}
          aria-hidden
        />
      )}
      <div className="relative z-10 max-w-[520px] min-h-[280px] flex flex-col items-start justify-end">
        <div className="space-y-textmedia-text--spacing-y">
          {title && <h3 className="text-headings-h3 font-semibold">{title}</h3>}
          {description && <p className="text-body-default">{description}</p>}
          {richText && (
            <div
              dangerouslySetInnerHTML={{ __html: richText }}
              className="wysiwyg"
            />
          )}
          {hasValueList && (
            valueList.useIcon !== false ? (
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
            ) : (
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
            )
          )}
        </div>
        {(hasLink || hasButtonCta) && (
          buttonType === 'button' ? (
            <Button
              text={buttonText}
              href={buttonHref}
              variant="light"
              onClick={buttonOnClick}
              className="mt-10"
            />
          ) : (
            <Link
              text={buttonText}
              href={buttonHref}
              variant="dark"
              onClick={buttonOnClick}
            />
          )
        )}
      </div>
    </div>
  );
};

export default TileMolecule;
