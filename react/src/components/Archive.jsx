import { useMemo, useState, useEffect } from 'react';
import TabbedLozengesMolecule from './molecules/TabbedLozengesMolecule';
import TabbedRowMolecule from './molecules/TabbedRowMolecule';
import CardsImage from './CardsImage';
import CardsIcon from './CardsIcon';
import PaginationMolecule from './molecules/PaginationMolecule';

const Archive = ({
  tabs = [], // [{ text, key, cardType, columns, itemsPerPage, cards }]
  tabType = 'tab-top', // 'tab-top' | 'tab-aside' 
  defaultActiveIndex = 0,
  className = '',
  ...props
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [pageByTab, setPageByTab] = useState(() => tabs.map(() => 1));
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    setPageByTab(tabs.map(() => 1));
    setActiveIndex(defaultActiveIndex);
  }, [tabs, defaultActiveIndex]);

  if (!tabs || tabs.length === 0) return null;

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  const updatePage = (tabIndex, page) => {
    setPageByTab((prev) => {
      const next = [...prev];
      next[tabIndex] = page;
      return next;
    });
  };

  const buildPaginationItems = (current, total, onPageChange) => {
    if (total <= 1) return [];

    const items = [];
    const addPage = (page) => {
      items.push({
        label: String(page),
        isActive: page === current,
        onClick: () => onPageChange(page),
      });
    };

    addPage(1);

    if (total <= 7) {
      for (let page = 2; page <= total; page += 1) addPage(page);
      return items;
    }

    const start = Math.max(2, current - 1);
    const end = Math.min(total - 1, current + 1);

    if (start > 2) items.push({ isEllipsis: true, label: '...' });
    for (let page = start; page <= end; page += 1) addPage(page);
    if (end < total - 1) items.push({ isEllipsis: true, label: '...' });

    addPage(total);
    return items;
  };

  const renderTabContent = (tab, index) => {
    const cards = tab.cards || [];
    const itemsPerPage = tab.itemsPerPage || 6;
    const totalPages = Math.ceil(cards.length / itemsPerPage) || 1;
    const currentPage = pageByTab[index] || 1;
    const start = (currentPage - 1) * itemsPerPage;
    const pagedCards = cards.slice(start, start + itemsPerPage);

    const paginationItems = buildPaginationItems(currentPage, totalPages, (page) => updatePage(index, page));

    return (
      <div className="space-y-24">
        {(() => {
          const CardsComponent =
            tab.cardType === 'icon' ? CardsIcon : CardsImage;

          return (
            <CardsComponent
              columns={tab.columns || 3}
              data={pagedCards}
              linkVariant="light"
              buttonType="link"
            />
          );
        })()}
        {paginationItems.length > 0 && (
          <PaginationMolecule items={paginationItems} />
        )}
      </div>
    );
  };

  if (tabType === 'tab-aside') {
    return (
      <div className={`container ${className}`} {...props}>
        <div className="hidden md:flex md:flex-row gap-20">
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
          <div className="flex-1 relative min-h-[200px]">
            {tabs.map((tab, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={tab.key || index}
                  className={`transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
                  }`}
                >
                  {renderTabContent(tab, index)}
                </div>
              );
            })}
          </div>
        </div>

        <div className="md:hidden relative">
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="w-full h-11 flex items-center justify-between px-3 rounded-lg border border-grey-900 bg-white"
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
            <div className="absolute top-[44px] left-0 right-0 mt-1 rounded-lg border border-grey-900 bg-white z-10 shadow-lg">
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
          <div className="mt-20 relative min-h-[200px]">
            {tabs.map((tab, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={tab.key || index}
                  className={`transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
                  }`}
                >
                  {renderTabContent(tab, index)}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`container ${className}`} {...props}>
      <div className="flex flex-wrap justify-center gap-10">
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
      <div className="mt-20 relative min-h-100">
        {tabs.map((tab, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={tab.key || index}
              className={`transition-opacity duration-300 ${
                isActive ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
              }`}
            >
              {renderTabContent(tab, index)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Archive;

