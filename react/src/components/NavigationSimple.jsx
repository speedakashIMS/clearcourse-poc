import { useId, useState } from 'react';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import Buttons from './Buttons';

const variantStyles = {
  dark: {
    bar: 'bg-secondary',
    link:
      'text-white hover:text-white/80 focus-visible:text-white/80 lg:text-white lg:hover:text-white/80 lg:focus-visible:text-white/80',
    dropdown: 'bg-secondary-800 lg:bg-white lg:shadow-lg',
    dropdownLink:
      'text-white hover:text-white/80 focus-visible:text-white/80 lg:text-secondary lg:hover:text-secondary-600 lg:focus-visible:text-secondary-600',
    mobileMenu: 'bg-secondary',
    hamburger:
      'border-white text-white hover:text-white/80 hover:border-white/80 focus-visible:text-white/80 focus-visible:border-white/80',
  },
  light: {
    bar: 'bg-white',
    link:
      'text-white hover:text-white/80 focus-visible:text-white/80 lg:text-secondary lg:hover:text-secondary-600 lg:focus-visible:text-secondary-600',
    dropdown: 'bg-secondary-800 lg:bg-white lg:shadow-lg',
    dropdownLink:
      'text-white hover:text-white/80 focus-visible:text-white/80 lg:text-secondary lg:hover:text-secondary-600 lg:focus-visible:text-secondary-600',
    mobileMenu: 'bg-secondary lg:bg-white',
    hamburger:
      'border-secondary text-secondary hover:text-secondary-600 hover:border-secondary-400 focus-visible:text-secondary-600 focus-visible:border-secondary-400',
  },
  gradient: {
    bar: 'bg-gradient-header',
    link:
      'text-white hover:text-white/80 focus-visible:text-white/80 lg:text-white lg:hover:text-white/80 lg:focus-visible:text-white/80',
    dropdown: 'bg-secondary-800 lg:bg-white lg:shadow-lg',
    dropdownLink:
      'text-white hover:text-white/80 focus-visible:text-white/80 lg:text-secondary lg:hover:text-secondary-600 lg:focus-visible:text-secondary-600',
    mobileMenu:
      'bg-secondary lg:bg-gradient-to-b lg:from-secondary lg:to-transparent',
    hamburger:
      'border-white text-white hover:text-white/80 hover:border-white/80 focus-visible:text-white/80 focus-visible:border-white/80',
  },
};

export default function NavigationSimple({
  fullWidth = false,
  logo,
  navItems = [], // [{ label, submenu: [{ title, subtitle, icon, href }] }]
  buttons = [],
  alignNavRight = true,
  variant = 'gradient',
  skipLinkText = 'Skip navigation',
  className = '',
  ...props
}) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const skipTargetId = useId();
  const styles = variantStyles[variant] ?? variantStyles.dark;

  const outerNavClasses = `w-full ${styles.bar} relative`;

  const innerRowClasses = [
    'flex items-center gap-nav-spacing-x pt-nav-padding-t pb-nav-padding-b pl-nav-padding-l pr-nav-padding-r',
    fullWidth ? 'w-full max-w-[1600px] mx-auto' : 'container',
  ]
    .filter(Boolean)
    .join(' ');

  const navAlignmentClasses = alignNavRight
    ? 'ml-auto'
    : 'flex-1 justify-center';

  return (
    <nav
      className={`${outerNavClasses} ${className}`.trim()}
      {...props}
    >
      <a
        href={`#${skipTargetId}`}
        className="sr-only focus:not-sr-only focus:absolute focus:left-20 focus:top-20 focus:z-20 focus:inline-flex focus:rounded-8 focus:bg-white focus:px-16 focus:py-10 focus:text-body-default focus:text-grey-950"
      >
        {skipLinkText}
      </a>

      <div className={innerRowClasses}>
        <div className="flex items-center">
          {logo && (
            <a
              href="/"
              className="inline-flex shrink-0 items-center"
              aria-label="Home"
            >
              {typeof logo === 'string' ? (
                <img
                  src={logo}
                  alt=""
                  className="h-auto min-h-32 max-h-32"
                />
              ) : (
                logo
              )}
            </a>
          )}
        </div>

        <div
          className={`hidden lg:flex items-center gap-24 ${navAlignmentClasses}`.trim()}
        >
          {navItems.map((item, index) => (
            <div
              key={`${item.label}-${index}`}
              className="relative group"
            >
              <a
                href={item.href || '#'}
                className={`inline-flex items-center gap-10 text-body-default transition-colors ${styles.link}`.trim()}
              >
                {item.label}
                {item.submenu?.length > 0 && (
                  <ChevronDownIcon className="w-16 h-16 shrink-0" aria-hidden />
                )}
              </a>

              {item.submenu?.length > 0 && (
                <div className="hidden lg:absolute lg:left-0 lg:top-full lg:pt-12 lg:group-hover:block lg:z-50">
                  <ul
                    className={`min-w-[320px] lg:rounded-8 p-nav-dd--padding ${styles.dropdown}`}
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <li
                        key={`${item.label}-submenu-${subIndex}`}
                      >
                        <a
                          href={subItem.href || '#'}
                          className={`flex items-start gap-12 p-12 transition-colors ${styles.dropdownLink}`}
                        >
                          {subItem.icon && (
                            <img
                              src={subItem.icon}
                              alt=""
                              className="w-24 h-24 shrink-0 mt-2"
                            />
                          )}

                          <div className="flex flex-col">
                            <span className="font-medium">
                              {subItem.title}
                            </span>

                            {subItem.subtitle && (
                              <span className="text-sm opacity-75">
                                {subItem.subtitle}
                              </span>
                            )}
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex nav-buttons">
          <Buttons
            buttons={buttons}
            className="flex items-center gap-10"
          />
        </div>

        <button
          type="button"
          className={`lg:hidden inline-flex items-center justify-center w-40 h-40 ms-auto rounded-8 border transition-colors ${styles.hamburger}`}
          aria-label="Open menu"
          aria-expanded={isMobileOpen}
          onClick={() => setIsMobileOpen((prev) => !prev)}
        >
          {isMobileOpen ? (
            <XMarkIcon className="w-20 h-20" />
          ) : (
            <Bars3Icon className="w-20 h-20" />
          )}
        </button>
      </div>

      <div
        id={skipTargetId}
        tabIndex={-1}
        className="sr-only outline-none"
      >
        End of navigation
      </div>
    </nav>
  );
}
