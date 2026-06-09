import {
  MapPinIcon,
  CheckCircleIcon,
  MapIcon,
  BuildingOffice2Icon,
  GlobeAltIcon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/solid';

const MapLocationMolecule = ({
  title,
  description,
  imageSrc,
  imageAlt = 'Location image',
  pins = [], // Array of { text, iconName?, type?: 'text' | 'email' | 'phone' }
  pinIconName, // 'check' | 'map' | 'building' | 'globe' | 'pin' | 'envelope' | 'phone'
  className = '',
  ...props
}) => {
  const wrapperClasses = `
    flex
    gap-map-spacing-x
    bg-grey-600
    text-white
    ${className}
  `.trim().replace(/\s+/g, ' ');
  const pinIconClassName = 'h-20 w-20 text-white';

  return (
    <div className={wrapperClasses} {...props}>
      {imageSrc && (
        <div className="flex-shrink-0 pt-map-image--padding-t pl-map-image--padding-l pb-map-image--padding-b pr-map-image--padding-r">
          <div className="h-100 w-100 rounded-full flex items-center justify-center overflow-hidden">
            <img src={imageSrc} alt={imageAlt} className="h-full w-full object-cover" />
          </div>
        </div>
      )}
      <div className="space-y-map-text--spacing-y py-map-text--padding-y px-map-text--padding-x">
        {title && (
          <h3 className="text-headings-h3 font-semibold">{title}</h3>
        )}
        {description && (
          <p className="text-body-default text-white/90">{description}</p>
        )}
        {pins && pins.length > 0 && (
          <ul className="space-y-10 pt-8">
            {pins.map((pin, index) => {
              const resolveIcon = (iconName) => {
                switch (iconName) {
                  case 'check':
                    return <CheckCircleIcon className={pinIconClassName} />;
                  case 'map':
                    return <MapIcon className={pinIconClassName} />;
                  case 'building':
                    return <BuildingOffice2Icon className={pinIconClassName} />;
                  case 'globe':
                    return <GlobeAltIcon className={pinIconClassName} />;
                  case 'envelope':
                    return <EnvelopeIcon className={pinIconClassName} />;
                  case 'phone':
                    return <PhoneIcon className={pinIconClassName} />;
                  case 'pin':
                  default:
                    return <MapPinIcon className={pinIconClassName} />;
                }
              };

              const icon = pin.iconName ? resolveIcon(pin.iconName) : (pinIconName ? resolveIcon(pinIconName) : null);
              const pinType = pin.type || 'text';
              const contentClass = 'text-body-large';
              const pinContent =
                pinType === 'email' ? (
                  <a href={`mailto:${pin.text}`} className={`${contentClass} text-white hover:opacity-80 focus-visible:opacity-80 transition-opacity`}>
                    {pin.text}
                  </a>
                ) : pinType === 'phone' ? (
                  <a href={`tel:${pin.text}`} className={`${contentClass} text-white hover:opacity-80 focus-visible:opacity-80 transition-opacity`}>
                    {pin.text}
                  </a>
                ) : (
                  <span className={contentClass}>{pin.text}</span>
                );

              return (
                <li key={index} className="flex items-start gap-10">
                  {icon && (
                    <span className="mt-2">
                      {icon}
                    </span>
                  )}
                  {pinContent}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MapLocationMolecule;

