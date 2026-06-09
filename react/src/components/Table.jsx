import { Children, cloneElement, isValidElement, useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TabbedLozengesMolecule from './molecules/TabbedLozengesMolecule';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

function useBreakpoint(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
}

function normalizeTableData(columns, data) {
  const colCount = columns?.length || 0;
  const maxLen = Math.max(colCount, ...(data || []).map((row) => (row || []).length), 0);
  const pad = (arr, len) => {
    const a = [...(arr || [])];
    while (a.length < len) a.push('');
    return a;
  };
  const normCols = pad(columns || [], maxLen);
  const normData = (data || []).map((row) => pad(row, maxLen));
  return { columns: normCols, data: normData, columnCount: maxLen };
}

export default function Table({
  columns = [],
  data = [],
  tabImages = [],
  variant = 'normal', // 'normal' | 'pricing' | 'comparison'
  className = '',
  id = '',
  fullWidth = true,
  attributes = [],
}) {
  const isMdUp = useBreakpoint('(min-width: 768px)');

  const { columns: cols, data: tableData, columnCount } = normalizeTableData(columns, data);

  if (!cols.length || !tableData.length) {
    return null;
  }

  const tableWrapperClass = `overflow-x-auto ${className}`.trim();
  const tableBaseClass = `border-collapse overflow-hidden w-full min-w-0 md:min-w-[300px] lg:min-w-[620px] ${fullWidth ? 'w-full' : ''}`;
  const thBaseClass = 'p-10 text-left border-r border-b border-grey-500 min-w-0 md:min-w-[180px] lg:min-w-[200px]';
  const tdBaseClass = 'p-10 border-r border-b border-grey-500 min-w-0';

  // ---- Normal variant: plain table; on mobile, min-width so table scrolls with ~2 columns visible ----
  const normalTableMinWidth = columnCount * 140; // ~140px per column → 2 columns in view on mobile
  const normalThClass = 'p-10 text-left border-r border-b border-grey-500 min-w-[140px] md:min-w-[180px] lg:min-w-[200px]';
  const normalTdClass = 'p-10 border-r border-b border-grey-500 min-w-[140px]';

  const NormalTable = () => (
    <div className={tableWrapperClass} id={id}>
      <style>{`@media (max-width:767px){.normal-table-mobile-scroll{min-width:var(--normal-table-mw);}}`}</style>
      <table
        className={`${tableBaseClass} normal-table-mobile-scroll`}
        style={{ '--normal-table-mw': `${normalTableMinWidth}px` }}
      >
        <thead>
          <tr>
            {cols.map((header, colIndex) => (
              <th
                key={colIndex}
                className={`${normalThClass} ${colIndex === columnCount - 1 ? 'border-r-0' : ''} font-semibold text-headings-h4`}
              >
                {header ?? ''}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex} {...(attributes[rowIndex] || {})}>
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  className={`${normalTdClass} ${colIndex === columnCount - 1 ? 'border-r-0' : ''}`}
                >
                  {cell ?? ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // ---- Pricing variant: big headers (display-s), mobile = 2 columns + tabs ----
  const pricingHeaderClass = 'font-normal text-display-s text-center!';
  const pricingDataClass = (colIndex) => (colIndex > 0 ? 'text-center!' : '');

  const PricingTableDesktop = () => (
    <div className={tableWrapperClass} id={id}>
      <table className={tableBaseClass}>
        <thead>
          <tr>
            {cols.map((header, colIndex) => (
              <th
                key={colIndex}
                className={`${thBaseClass} ${colIndex === columnCount - 1 ? 'border-r-0' : ''} ${colIndex > 0 ? pricingHeaderClass : 'font-semibold text-headings-h4'}`}
              >
                {header ?? ''}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex} {...(attributes[rowIndex] || {})}>
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  className={`${tdBaseClass} ${colIndex === columnCount - 1 ? 'border-r-0' : ''} ${pricingDataClass(colIndex)}`}
                >
                  {cell ?? ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const PricingTableMobile = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const tabColumns = cols.slice(1);
    if (!tabColumns.length) return null;
    const selectedColIndex = activeTabIndex + 1;
    const mobileCols = [cols[0], cols[selectedColIndex]];
    const mobileData = tableData.map((row) => [row[0], row[selectedColIndex]]);

    return (
      <div className={`max-md:block md:hidden ${className}`.trim()} id={id}>
        <div className="flex flex-wrap justify-center gap-x-tabbed-lozs--spacing-x gap-y-tabbed-lozs--spacing-y my-section-spacing-y py-24">
          {tabColumns.map((header, index) => (
            <TabbedLozengesMolecule
              key={index}
              tab={{ text: header, image: tabImages[index] }}
              isActive={activeTabIndex === index}
              onClick={() => setActiveTabIndex(index)}
              index={index}
              largeImage
            />
          ))}
        </div>
        <div className={tableWrapperClass}>
          <table className={tableBaseClass}>
            <thead>
              <tr>
                {mobileCols.map((header, colIndex) => (
                  <th
                    key={colIndex}
                    className={`${thBaseClass} border-r-0 ${colIndex > 0 ? pricingHeaderClass : 'font-semibold text-headings-h4'}`}
                  >
                    {header ?? ''}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mobileData.map((row, rowIndex) => (
                <tr key={rowIndex} {...(attributes[rowIndex] || {})}>
                  {row.map((cell, colIndex) => (
                    <td
                      key={colIndex}
                      className={`${tdBaseClass} border-r-0 ${pricingDataClass(colIndex)}`}
                    >
                      {cell ?? ''}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  // ---- Comparison variant: h4 headers, check/dash cells; mobile = carousel (label above icon) ----
  const comparisonHeaderClass = 'text-center! font-semibold text-headings-h4';
  const renderComparisonCell = (value, colIndex) => {
    if (colIndex === 0) return value ?? '';
    if (value === true) return <CheckCircleIcon className="w-24 h-24 mx-auto text-current" />;
    return '-';
  };

  const ComparisonTableDesktop = () => (
    <div className={tableWrapperClass} id={id}>
      <table className={tableBaseClass}>
        <thead>
          <tr>
            {cols.map((header, colIndex) => (
              <th
                key={colIndex}
                className={`${thBaseClass} ${colIndex === columnCount - 1 ? 'border-r-0' : ''} ${colIndex > 0 ? comparisonHeaderClass : 'font-semibold text-headings-h4'}`}
              >
                {header ?? ''}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex} {...(attributes[rowIndex] || {})}>
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  className={`${tdBaseClass} ${colIndex === columnCount - 1 ? 'border-r-0' : ''} ${colIndex > 0 ? 'text-center!' : ''}`}
                >
                  {renderComparisonCell(cell, colIndex)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const dotItemClass = 'relative inline-block w-auto h-auto m-0 p-0 cursor-pointer';
  const dotButtonClass = 'text-[0] leading-[0] block w-[12px] h-[12px] p-0 cursor-pointer text-transparent border-0 outline-none bg-grey-700 rounded-full transition-opacity duration-300 ease-[ease]';

  const carouselSettings = {
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
  };

  const ComparisonCarouselMobile = () => {
    const dataColumns = cols.slice(1);
    return (
      <div className={`max-md:block md:hidden relative ${className}`.trim()} id={id}>
        <Slider {...carouselSettings} className="w-full table-slider" style={{ width: '100%' }}>
          {dataColumns.map((header, colIndex) => {
            const actualColIndex = colIndex + 1;
            return (
              <div key={colIndex} className="outline-none px-0">
                <div className="border-collapse overflow-hidden">
                  <div className="p-10 text-center border-b border-grey-500">
                    <div className={comparisonHeaderClass}>{header ?? ''}</div>
                  </div>
                  <div className="flex flex-col">
                    {tableData.map((row, rowIndex) => {
                      const label = row[0];
                      const value = row[actualColIndex];
                      const cellContent = renderComparisonCell(value, actualColIndex);
                      return (
                        <div key={rowIndex} className="flex flex-col border-b border-grey-500">
                          <div className="p-10 font-normal border-b border-grey-500 text-center">
                            {label ?? ''}
                          </div>
                          <div className="p-10 text-center">
                            {cellContent}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  };

  // ---- Choose content and wrap in container ----
  let content;
  if (variant === 'normal') {
    content = <NormalTable />;
  } else if (variant === 'pricing') {
    content = isMdUp ? <PricingTableDesktop /> : <PricingTableMobile />;
  } else if (variant === 'comparison') {
    content = isMdUp ? <ComparisonTableDesktop /> : <ComparisonCarouselMobile />;
  } else {
    content = <NormalTable />;
  }

  return <div className="container">{content}</div>;
}
