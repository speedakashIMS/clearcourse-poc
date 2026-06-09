import { useState } from 'react';
import { PhoneIcon } from '@heroicons/react/24/solid';
import { AtSymbolIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import SocialIcon from './partials/SocialIcon'; 


const SecondaryInfo = ({
  variant = 'secondary-info', // 'secondary-info' | 'sub-navigation'
  // Secondary info content
  text,
  phone,
  email,
  socialMedia = [], // Ex. [ { type: 'facebook', url: 'https://facebook.com' } ]
  // Sub navigation content
  logo,
  navigation = [], // Ex. [ { label: 'Home', href: '/' } ]
  // Styling
  colorVariant = 'light', // 'light' | 'dark'
  className = '',
  ...props
}) => {
  const [isSubNavOpen, setIsSubNavOpen] = useState(false);
  const validColorVariants = ['light', 'dark'];
  const validColorVariant = validColorVariants.includes(colorVariant) ? colorVariant : 'light';
  const textColor = validColorVariant === 'light' ? 'text-white' : 'text-grey-800';

  // Small presentational pieces
  const LogoBlock = ({ logo }) => {
    if (!logo) return null;

    return (
      <div className="flex items-center">
        {typeof logo === 'string' ? (
          <img src={logo} alt="Logo" className="h-auto max-h-32" />
        ) : (
          logo
        )}
      </div>
    );
  };

  const ContactBlock = ({ text, phone, email, textColor }) => {
    if (!text && !phone && !email) return null;

    return (
      <div className="flex flex-row items-center gap-24 flex-wrap min-w-0">
        {text && (
          <div className={`text-body-small font-normal ${textColor}`}>
            {text}
          </div>
        )}

        {(phone || email) && (
          <div className="flex flex-row items-center gap-24">
            {phone && (
              <a
                href={`tel:${phone}`}
                className={`flex items-center gap-8 ${textColor} hover:opacity-80 focus-visible:opacity-80 transition-opacity`}
              >
                <PhoneIcon className={`w-16 h-16 ${textColor}`} aria-hidden="true" />
                <span className="text-body-small sr-only md:not-sr-only md:inline">{phone}</span>
              </a>
            )}

            {email && (
              <a
                href={`mailto:${email}`}
                className={`flex items-center gap-8 ${textColor} hover:opacity-80 focus-visible:opacity-80 transition-opacity`}
              >
                <AtSymbolIcon className={`w-16 h-16 ${textColor}`} aria-hidden="true" />
                <span className="text-body-small sr-only md:not-sr-only md:inline">{email}</span>
              </a>
            )}
          </div>
        )}
      </div>
    );
  };

  const NavBlock = ({ navigation, textColor, className = '' }) => {
    if (!navigation) return null;

    if (!Array.isArray(navigation)) {
      return <div className={className}>{navigation}</div>;
    }

    return (
      <nav className={`flex flex-col md:flex-row w-full md:w-auto md:items-center gap-info-sub-menu--spacing-x flex-wrap ${className}`.trim()}>
        {navigation.map((item, index) => {
          const label = typeof item === 'string' ? item : item.label;
          const href = typeof item === 'string' ? '#' : item.href;

          return (
            <a
              key={index}
              href={href}
              className={`${textColor} hover:opacity-80 focus-visible:opacity-80 transition-opacity p-10`}
            >
              {label}
            </a>
          );
        })}
      </nav>
    );
  };

  const SocialBlock = ({ socialMedia = [], textColor }) => {
    if (!socialMedia || socialMedia.length === 0) return null;

    return (
      <div className="flex items-center gap-8 flex-wrap shrink-0">
        {socialMedia.map((social, index) => {
          const [type, url] = Array.isArray(social) ? social : [social.type, social.url];

          return (
            <a
              key={index}
              href={url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className={`${textColor} hover:opacity-80 focus-visible:opacity-80 transition-opacity`}
              aria-label={type}
            >
              <SocialIcon type={type} className="w-16 h-16" />
            </a>
          );
        })}
      </div>
    );
  };

  const isSecondaryInfo = variant === 'secondary-info';
  const isSubNavigation = variant === 'sub-navigation';

  return (
    <div className={`w-full relative ${className}`.trim()} {...props}>
      <div
        className={`${
          isSecondaryInfo
            ? 'pt-info-info--padding-t px-info-info--padding-l pb-info-info--padding-b'
            : 'pt-info-sub--padding-t px-info-sub--padding-l pb-info-sub--padding-b'
        }`.trim()}
      >
        <div className="flex flex-row items-center justify-between md:gap-24 flex-wrap">
          {isSecondaryInfo && (
            <ContactBlock
              text={text}
              phone={phone}
              email={email}
              textColor={textColor}
            />
          )}
          {isSubNavigation && <LogoBlock logo={logo} />}

          {isSecondaryInfo && (
            <SocialBlock socialMedia={socialMedia} textColor={textColor} />
          )}
          {isSubNavigation && (
            <>
              <button
                type="button"
                onClick={() => setIsSubNavOpen((prev) => !prev)}
                className={`md:hidden flex items-center justify-center py-8 border border-transparent ${textColor} hover:opacity-80 focus-visible:opacity-80 transition-colors`}
                aria-label="Toggle navigation"
                aria-expanded={isSubNavOpen}
              >
                <ChevronDownIcon
                  className={`w-20 h-20 ${textColor} transition-transform duration-200 ${
                    isSubNavOpen ? 'rotate-180' : ''
                  }`.trim()}
                />
              </button>
              <NavBlock
                navigation={navigation}
                textColor={textColor}
                className={`${isSubNavOpen ? 'flex' : 'hidden'} md:flex`}
              />
            </>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default SecondaryInfo;
