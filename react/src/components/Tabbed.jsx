import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TabbedLozengesMolecule from './molecules/TabbedLozengesMolecule';
import TabbedBlocksMolecule from './molecules/TabbedBlocksMolecule';
import TabbedRowMolecule from './molecules/TabbedRowMolecule';

export default function Tabbed({
  tabs = [], // @reference `TabBlocksMolecule` | `TabbedLozengesMolecule` | `TabbedRowMolecule`
  type = 'lozenges', // 'lozenges' | 'blocks' | 'aside'
  defaultActiveIndex = 0,
  className = '',
}) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [isMobile, setIsMobile] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!tabs || tabs.length === 0) {
    return null;
  }

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  const renderContent = () => (
    <div className="mt-20 relative min-h-100">
      {tabs.map((tab, index) => {
        const isActive = activeIndex === index;
        return (
          <div
            key={tab.key || index}
            className={`transition-opacity duration-300 wysiwyg ${
              isActive ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
            }`}
          >
            {typeof tab.content === 'string' ? (
              <div dangerouslySetInnerHTML={{ __html: tab.content }} />
            ) : (
              <div>{tab.content}</div>
            )}
          </div>
        );
      })}
    </div>
  );

  if (type === 'lozenges') {
    return (
      <div className={`${className}`}>
        <div className="flex flex-wrap justify-center gap-x-tabbed-lozs--spacing-x gap-y-tabbed-lozs--spacing-y">
          {tabs.map((tab, index) => (
            <TabbedLozengesMolecule
              key={tab.key || index}
              tab={tab}
              isActive={activeIndex === index}
              onClick={() => handleTabClick(index)}
              index={index}
            />
          ))}
        </div>
        {renderContent()}
      </div>
    );
  }

  if (type === 'blocks') {
    const total = tabs.length;
    const isLess5 = total < 5;
    const isMore5 = total > 5;
    const is5 = total === 5;

    const isId = (i, n) => i === n;
    const isNeId = (i, n) => i !== n;
  
    const sliderSettings = {
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 500,
      arrows: false,
      dots: false,
      centerMode: !isMobile && isMore5, // center active when we have more than 5 on desktop
      centerPadding: '0px',
      slidesToShow: isMobile ? Math.min(2, tabs.length) : Math.min(5, tabs.length),
      slidesToScroll: 1,
      beforeChange: (_, next) => {
        setActiveIndex(next);
      },
      className: `border-grey-400
        ${(isLess5 || is5) && !isMobile ? 'border-x' : 'border-r'}
      `,
    };

    return (
      <div className={className}>
        {/* Always show left/right borders; center slider only on desktop when fewer than 5 tabs */}
        <div className={`border-grey-400 
          ${isLess5 ? 'md:flex md:justify-center' : ''}
        `}>
          <Slider ref={sliderRef} {...sliderSettings}>
            {tabs.map((tab, x) => (
              <div key={tab.key || x} className={`
                border-grey-400  transition-all duration-200
                ${isNeId(x, 0) || ((isMore5 || isMobile) && isId(x, 0)) ? ' border-l' : ''}
                ${activeIndex !== x ? 'border-b' : ''}
              `}>
                <TabbedBlocksMolecule
                  tab={tab}
                  isActive={activeIndex === x}
                  onClick={() => {
                    if (sliderRef.current) {
                      sliderRef.current.slickGoTo(x);
                    }
                  }}
                  index={x}
                  hasBorder={false}
                />
              </div>
            ))}
          </Slider>
        </div>
        {renderContent()}
      </div>
    );
  }

  if (type === 'aside') {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
      <div className={className}>
        {/* Desktop/Tablet View */}
        <div className="hidden md:flex md:flex-row gap-64">
          {/* Tabs on the left */}
          <div className="flex flex-col min-w-[267px]">
            {tabs.map((tab, index) => (
              <TabbedRowMolecule
                key={tab.key || index}
                tab={tab}
                isActive={activeIndex === index}
                onClick={() => handleTabClick(index)}
                index={index}
              />
            ))}
          </div>

          {/* Content on the right */}
          <div className="flex-1 relative min-h-[200px] wysiwyg">
            {tabs.map((tab, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={tab.key || index}
                  className={`transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
                  }`}
                >
                  {typeof tab.content === 'string' ? (
                    <div dangerouslySetInnerHTML={{ __html: tab.content }} />
                  ) : (
                    <div>{tab.content}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Dropdown View */}
        <div className="md:hidden relative">
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="w-full h-11 flex items-center justify-between px-3 rounded-lg border border-gray-900 bg-white"
          >
            <span className="text-body-default">
              {tabs[activeIndex]?.text || 'Select tab'}
            </span>
            <svg
              className={`w-5 h-5 transition-transform ${isMobileOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isMobileOpen && (
            <div className="absolute top-[44px] left-0 right-0 mt-1 rounded-lg border border-gray-900 bg-white z-10 shadow-lg">
              {tabs.map((tab, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={tab.key || index}
                    onClick={() => {
                      handleTabClick(index);
                      setIsMobileOpen(false);
                    }}
                    className={`w-full text-left px-12 py-10 border-b border-grey-200 last:border-b-0 transition-colors ${
                      isActive ? 'bg-grey-100' : 'hover:bg-grey-50 focus-visible:bg-grey-50'
                    }`}
                  >
                    <span className="text-body-default">{tab.text}</span>
                  </button>
                );
              })}
            </div>
          )}
          {/* Mobile Content */}
          <div className="mt-20 relative min-h-[200px] wysiwyg">
            {tabs.map((tab, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={tab.key || index}
                  className={`transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
                  }`}
                >
                  {typeof tab.content === 'string' ? (
                    <div dangerouslySetInnerHTML={{ __html: tab.content }} />
                  ) : (
                    <div>{tab.content}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return null;
}
