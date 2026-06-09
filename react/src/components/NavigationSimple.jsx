import { useId, useState } from 'react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Buttons from './Buttons';

const variantStyles = {
  dark: {
    bar: 'bg-secondary',
    link: 'text-white hover:text-white/80 focus-visible:text-white/80 lg:text-white lg:hover:text-white/80 lg:focus-visible:text-white/80',
    dropdown: 'bg-secondary-800 lg:bg-white lg:shadow-lg',
    dropdownLink: 'text-white hover:text-white/80 focus-visible:text-white/80 lg:text-secondary lg:hover:text-secondary-600 lg:focus-visible:text-secondary-600',
    mobileMenu: 'bg-secondary',
    hamburger: 'border-white text-white hover:text-white/80 hover:border-white/80 focus-visible:text-white/80 focus-visible:border-white/80',
  },
  light: {
    bar: 'bg-white',
    link: 'text-white hover:text-white/80 focus-visible:text-white/80 lg:text-secondary lg:hover:text-secondary-600 lg:focus-visible:text-secondary-600',
    dropdown: 'bg-secondary-800 lg:bg-white lg:shadow-lg',
    dropdownLink: 'text-white hover:text-white/80 focus-visible:text-white/80 lg:text-secondary lg:hover:text-secondary-600 lg:focus-visible:text-secondary-600',
    mobileMenu: 'bg-secondary lg:bg-white',
    hamburger: 'border-secondary text-secondary hover:text-secondary-600 hover:border-secondary-400 focus-visible:text-secondary-600 focus-visible:border-secondary-400',
  },
  gradient: {
    bar: 'bg-gradient-to-b from-secondary to-transparent',
    link: 'text-white hover:text-white/80 focus-visible:text-white/80 lg:text-white lg:hover:text-white/80 lg:focus-visible:text-white/80',
    dropdown: 'bg-secondary-800 lg:bg-white lg:shadow-lg',
    dropdownLink: 'text-white hover:text-white/80 focus-visible:text-white/80 lg:text-secondary lg:hover:text-secondary-600 lg:focus-visible:text-secondary-600',
    mobileMenu: 'bg-secondary lg:bg-gradient-to-b lg:from-secondary lg:to-transparent',
    hamburger: 'border-white text-white hover:text-white/80 hover:border-white/80 focus-visible:text-white/80 focus-visible:border-white/80',
  },
};

export default function NavigationSimple({
  fullWidth = false,
  logo,
  navItems = [], // [{ label, href, submenu: [{ label, href }] }]
  buttons = [], // [{ text, variant, size, href, onClick }]
  alignNavRight = true,
  variant = 'dark', // 'dark' | 'light' | 'gradient'
  skipLinkText = 'Skip navigation',
  className = '',
  ...props
}) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const skipTargetId = useId();
  const styles = variantStyles[variant] ?? variantStyles.dark;
  const outerNavClasses = `w-full ${styles.bar} relative`.trim();
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
    <nav className={`${outerNavClasses} ${className}`.trim()} {...props}>
      <a
        href={`#${skipTargetId}`}
        className="sr-only focus:not-sr-only focus:absolute focus:left-20 focus:top-20 focus:z-20 focus:inline-flex focus:rounded-8 focus:bg-white focus:px-16 focus:py-10 focus:text-body-default focus:text-grey-950"
      >
        {skipLinkText}
      </a>
      <div className={innerRowClasses}>
        <div className="flex items-center">
          {logo && (
            <a href="/" className="inline-flex shrink-0 items-center" aria-label="Home">
              {typeof logo === 'string' ? (
                <img src={logo} alt="" className="h-auto min-h-32 max-h-32" />
              ) : (
                logo
              )}
            </a>
          )}
        </div>

        <div className={`hidden lg:flex items-center gap-24 ${isMobileOpen ? `!block absolute top-[100%] left-0 w-full ${styles.mobileMenu} z-10 px-20 space-y-12 lg:space-y-0 py-10` : 'hidden'} ${navAlignmentClasses}`.trim()}>
          {navItems.map((item, index) => (
            <div key={`${item.label}-${index}`} className="relative group">
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
                <div className="block lg:absolute lg:left-0 lg:top-full lg:pt-12 lg:hidden lg:group-hover:block lg:z-50">
                  <ul className={`min-w-[180px] lg:rounded-8 p-nav-dd--padding ${styles.dropdown}`}>
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={`${item.label}-submenu-${subIndex}`}>
                        <a
                          href={subItem.href || '#'}
                          className={`block p-10 text-body-default transition-colors ${styles.dropdownLink}`}
                        >
                          {subItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex">
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
      <div id={skipTargetId} tabIndex={-1} className="sr-only outline-none">
        End of navigation
      </div>
    </nav>
  );
}

