import FormMolecule from './molecules/FormMolecule';
import Media from './molecules/Media';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';
import AccordionMediaMolecule from './molecules/AccordionMediaMolecule';
import Button from './partials/Button';

/**
 * FormComponent
 *
 * Combines form with optional content (media, text, accordions) based on variant.
 * Renders FormMolecule with appropriate content.
 *
 * PROPS:
 * - variant: 'form-only' | 'form-media' | 'form-text' | 'form-accordion'
 * - formAlignment: 'left' | 'right'
 * - media: object - Media props { media, imageUrl, videoUrl, etc. }
 * - accordions: array - Array of accordion data
 * - textContent: object - rich sidebar for form-text (see buildFormTextContent)
 * - form: React component - Form component to render (defaults to FormContactUs)
 */

const TITLE_COLOR_CLASSES = {
  primary: 'text-grey-950',
  secondary: 'text-grey-700',
  tertiary: 'text-grey-500',
};

const contactIconMap = {
  address: MapPinIcon,
  phone: PhoneIcon,
  email: EnvelopeIcon,
};

const getContactIcon = (icon) => {
  if (!icon) return null;
  if (typeof icon === 'string' && contactIconMap[icon]) {
    return contactIconMap[icon];
  }
  return null;
};

const buildFormTextContent = (textContent) => {
  if (!textContent) return null;

  const contactRows = textContent.contactItems ?? textContent.addressItems;

  const renderTitle = () => {
    if (textContent.titleItems?.length) {
      return (
        <h3 className="text-headings-h3 font-semibold leading-tight">
          {textContent.titleItems.map((item, index) => {
            const fontStyle = item.fontStyle === 'accent' ? 'font-accent' : '';
            const colorClass =
              TITLE_COLOR_CLASSES[item.color] ?? TITLE_COLOR_CLASSES.primary;
            return (
              <span key={index} className={`${fontStyle} ${colorClass}`.trim()}>
                {item.text}
              </span>
            );
          })}
        </h3>
      );
    }

    if (textContent.title) {
      return (
        <h3 className="text-headings-h3 font-semibold">
          {textContent.title}
        </h3>
      );
    }

    return null;
  };

  return (
    <div className="space-y-4 text-grey-950 xl:p-24">
      {renderTitle()}

      {textContent.text && (
        <div className="text-body-default mt-10">
          {textContent.text}
        </div>
      )}

      {textContent.description && (
        <p className="text-body-default mt-10">
          {textContent.description}
        </p>
      )}

      {textContent.html && (
        <div
          className="text-body-default mt-10 [&_a]:underline"
          dangerouslySetInnerHTML={{ __html: textContent.html }}
        />
      )}

      {textContent.checkItems && (
        <ul className="space-y-10 mt-20">
          {textContent.checkItems.map((item, index) => (
            <li key={index} className="flex items-start gap-10 text-body-large">
              <CheckCircleIcon className="w-5 h-5 text-grey-950 shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {contactRows?.length > 0 && (
        <ul className="space-y-10 mt-20">
          {contactRows.map((row, index) => {
            const Icon = getContactIcon(row.icon);
            let inner;
            if (row.html) {
              inner = row.href ? (
                <a
                  href={row.href}
                  className="text-body-large text-grey-950 underline hover:opacity-80"
                  dangerouslySetInnerHTML={{ __html: row.html }}
                />
              ) : (
                <span
                  className="text-body-large [&_a]:underline"
                  dangerouslySetInnerHTML={{ __html: row.html }}
                />
              );
            } else if (row.href) {
              inner = (
                <a
                  href={row.href}
                  className="text-body-large text-grey-950 underline hover:opacity-80"
                >
                  {row.text}
                </a>
              );
            } else {
              inner = <span className="text-body-large">{row.text}</span>;
            }

            return (
              <li key={index} className="flex items-start gap-10">
                {Icon && (
                  <Icon className="w-5 h-5 text-grey-950 shrink-0 mt-1" aria-hidden />
                )}
                <div>{inner}</div>
              </li>
            );
          })}
        </ul>
      )}

      {textContent.button?.text && (
        <div className="mt-20">
          <Button
            text={textContent.button.text}
            href={textContent.button.href}
            variant={textContent.button.variant ?? 'dark'}
            size={textContent.button.size ?? 'btn-md'}
            className={textContent.button.className ?? ''}
            onClick={textContent.button.onClick}
            attributes={textContent.button.attributes ?? {}}
          />
        </div>
      )}
    </div>
  );
};

const FormComponent = ({
  variant = 'form-only',
  formAlignment = 'left',
  media,
  accordions = [],
  textContent,
  form: FormToRender = null,
}) => {
  // Validate variant
  const validVariant = ['form-only', 'form-media', 'form-text', 'form-accordion'].includes(variant)
    ? variant
    : 'form-only';

  // Validate formAlignment
  const validFormAlignment = ['left', 'right'].includes(formAlignment) ? formAlignment : 'left';

  // Build content based on variant (form is passed separately to FormMolecule)
  const buildContent = () => {
    switch (validVariant) {
      case 'form-media':
        return media ? (
          <div className="h-auto">
            <Media
              media={media.media || 'image'}
              aspect={media.aspect || 'default'}
              imageUrl={media.imageUrl}
              videoUrl={media.videoUrl}
              lottieUrl={media.lottieUrl}
              lottieData={media.lottieData}
              iframeUrl={media.iframeUrl}
              title={media.title}
            />
          </div>
        ) : null;

      case 'form-text':
        return buildFormTextContent(textContent);

      case 'form-accordion':
        return accordions.length > 0 ? (
          <div>
            {accordions.map((accordion, index) => (
              <AccordionMediaMolecule
                key={index}
                title={accordion.title}
                content={accordion.content}
                index={index}
                iconPosition="right"
                {...accordion}
              />
            ))}
          </div>
        ) : null;

      case 'form-only':
      default:
        return null;
    }
  };

  return (
    <FormMolecule
      variant={validVariant}
      formAlignment={validFormAlignment}
      form={FormToRender}
      content={buildContent()}
    />
  );
};

export default FormComponent;
