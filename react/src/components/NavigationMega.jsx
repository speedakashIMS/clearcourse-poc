import { useId, useState } from 'react';
import { Bars3Icon, XMarkIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Buttons from './Buttons';

export default function NavigationMega({
  fullWidth = false,
  logo,
  navItems = [], // [{ label, href, mega: { variant: 'tabs' | 'columns', tabs?, columns? } }]
  buttons = [], // [{ text, variant, size, href, onClick }]
  alignNavRight = false,
  variant = 'dark', // 'dark' | 'light'
  skipLinkText = 'Skip navigation',
  className = '',
  ...props
}) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeTabByNav, setActiveTabByNav] = useState({});
  const [activeMegaIndex, setActiveMegaIndex] = useState(null);
  const skipTargetId = useId();
  const wrapperClasses = fullWidth ? 'w-full max-w-[1600px] mx-auto bg-grey-700' : 'container';
  const navAlignmentClasses = alignNavRight
    ? 'ml-auto'
    : 'flex-1 justify-center';
  const linkClasses = variant === 'light'
    ? 'text-white hover:text-white/80 focus-visible:text-white/80'
    : 'text-grey-600 hover:text-grey-950 focus-visible:text-grey-950';

  const getColumnsGridClass = (count) => {
    switch (count) {
      case 1:
        return 'grid grid-cols-1 gap-24';
      case 2:
        return 'grid grid-cols-1 md:grid-cols-2 gap-24';
      case 3:
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24';
      case 4:
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24';
      default:
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-24';
    }
  };

  const renderColumns = (columns = [], { stacked = false } = {}) => {
    if (!columns.length) return null;
    const columnCount = Math.min(columns.length, 5);
    const containerClass = stacked
      ? 'space-y-24'
      : getColumnsGridClass(columnCount);

    return (
      <div className={containerClass}>
        {columns.slice(0, 5).map((column, columnIndex) => (
          <div key={`column-${columnIndex}`} className="space-y-12">
            {column.title && (
              <p className="text-ui-label-small text-grey-300">
                {column.title}
              </p>
            )}
            <ul className="space-y-10">
              {(column.links || []).map((link, linkIndex) => (
                <li key={`column-${columnIndex}-link-${linkIndex}`}>
                  <a
                    href={link.href || '#'}
                    className="text-body-default text-white hover:text-white/80 focus-visible:text-white/80 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  const renderMegaContent = (item, index, { stacked = false } = {}) => {
    const mega = item.mega;
    if (!mega) return null;

    if (mega.variant === 'tabs') {
      const tabs = mega.tabs || [];
      if (!tabs.length) return null;
      const activeIndex = stacked ? activeTabByNav[index] : (activeTabByNav[index] ?? 0);
      const activeTab = activeIndex !== undefined && activeIndex !== null
        ? tabs[Math.min(activeIndex, tabs.length - 1)]
        : null;

      return (
        <div className={stacked ? 'space-y-24' : 'grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-32'}>
          {(!stacked || !activeTab) && (
            <div className={`flex flex-col gap-10 items-start ${stacked ? 'flex flex-wrap gap-12' : ''}`.trim()}>
              {tabs.map((tab, tabIndex) => (
                  <button
                  key={`tab-${index}-${tabIndex}`}
                  type="button"
                  onClick={() => setActiveTabByNav((prev) => ({ ...prev, [index]: tabIndex }))}
                    className={`text-body-default text-white transition-colors inline-flex items-center gap-8 ${
                    tabIndex === activeIndex ? 'opacity-100' : 'opacity-70 hover:opacity-100 focus-visible:opacity-100'
                  }`.trim()}
                >
                  {tab.label}
                    <ChevronRightIcon className="w-16 h-16" />
                </button>
              ))}
            </div>
          )}
          <div className={stacked ? 'space-y-16' : 'space-y-20'}>
            {stacked && activeTab && (
              <button
                type="button"
                onClick={() => setActiveTabByNav((prev) => ({ ...prev, [index]: null }))}
                className="text-body-default text-white/70 hover:text-white focus-visible:text-white transition-colors text-left"
              >
                Back to tabs
              </button>
            )}
            {/* {activeTab?.label && (
              <p className="text-body-default font-semibold text-white">
                {activeTab.label}
              </p>
            )} */}
            {activeTab ? renderColumns(activeTab.columns || [], { stacked }) : null}
          </div>
        </div>
      );
    }

    return renderColumns(mega.columns || [], { stacked });
  };

  return (
    <nav className={`${wrapperClasses} relative ${className}`.trim()} {...props}>
      <a
        href={`#${skipTargetId}`}
        className="sr-only focus:not-sr-only focus:absolute focus:left-20 focus:top-20 focus:z-20 focus:inline-flex focus:rounded-8 focus:bg-white focus:px-16 focus:py-10 focus:text-body-default focus:text-grey-950"
      >
        {skipLinkText}
      </a>
      <div className="flex items-center gap-nav-spacing-x bg-grey-700 pt-nav-padding-t pb-nav-padding-b pl-nav-padding-l pr-nav-padding-r relative">
        <div className="flex items-center">
          {logo && (typeof logo === 'string' ? (
            <img src={logo} alt="Logo" className="h-auto max-h-32" />
          ) : (
            logo
          ))}
        </div>

        <div className={`hidden lg:flex items-center gap-24 ${navAlignmentClasses}`.trim()}>
          {navItems.map((item, index) => (
            <div key={`${item.label}-${index}`} className="group static">
              {item.mega ? (
                <button
                  type="button"
                  onClick={() => setActiveMegaIndex((prev) => (prev === index ? null : index))}
                  className={`text-body-default transition-colors ${linkClasses}`.trim()}
                  aria-expanded={activeMegaIndex === index}
                >
                  {item.label}
                </button>
              ) : (
                <a
                  href={item.href || '#'}
                  className={`text-body-default transition-colors ${linkClasses}`.trim()}
                >
                  {item.label}
                </a>
              )}
              {item.mega && (
                <div className={`absolute left-0 top-full w-full bg-grey-700 z-10 pt-24 ${activeMegaIndex === index ? 'block' : 'hidden'}`.trim()}>
                  <div className="px-20 pb-24">
                    {renderMegaContent(item, index)}
                  </div>
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
          className="lg:hidden inline-flex items-center justify-center w-40 h-40 ms-auto rounded-8 border borderwhite text-white hover:text-grey-950 hover:border-grey-600 focus-visible:text-grey-950 focus-visible:border-grey-600 transition-colors"
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
        className={`lg:hidden ${isMobileOpen ? 'block' : 'hidden'} absolute top-full min-h-screen bg-grey-700 px-20 py-20 z-10 ${
          fullWidth
            ? 'left-0 w-full'
            : 'left-[var(--container-padding)] right-[var(--container-padding)]'
        }`.trim()}
      >
        <div className="space-y-24">
          {navItems.map((item, index) => (
            <div key={`${item.label}-mobile-${index}`} className="space-y-16">
              {item.mega ? (
                <button
                  type="button"
                  onClick={() => setActiveMegaIndex((prev) => (prev === index ? null : index))}
                  className="text-body-default text-white hover:text-white/80 focus-visible:text-white/80 transition-colors text-left"
                  aria-expanded={activeMegaIndex === index}
                >
                  {item.label}
                </button>
              ) : (
                <a
                  href={item.href || '#'}
                  className="text-body-default text-white hover:text-white/80 focus-visible:text-white/80 transition-colors"
                >
                  {item.label}
                </a>
              )}
              {item.mega && activeMegaIndex === index && (
                <div className="space-y-16">
                  {renderMegaContent(item, index, { stacked: true })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div id={skipTargetId} tabIndex={-1} aria-label="End of navigation" />
    </nav>
  );
}

