import DownloadListMolecule from './molecules/DownloadListMolecule';

/**
 * Downloads
 *
 * Renders a list of DownloadListMolecule items.
 * - variant 'vertical': cards in a grid; use columns for grid count (max 4 columns).
 * - variant 'horizontal': each item is media-left, content-right; single column list (columns prop ignored).
 *
 * PROPS:
 * - variant: 'vertical' | 'horizontal' (default: 'vertical')
 * - columns: number – total columns when variant is 'vertical' only, max 4 (default: 1, ignored when variant is 'horizontal')
 * - items: array of DownloadListMolecule props { media, title, description, buttons, accordions }
 * - className: string
 */
export default function Downloads({
  id,
  variant = 'vertical',
  columns = 1,
  items = [],
  className = '',
}) {
  const validVariant = ['vertical', 'horizontal'].includes(variant) ? variant : 'vertical';
  const isVertical = validVariant === 'vertical';
  const isHorizontal = validVariant === 'horizontal';

  if (!items || items.length === 0) {
    return null;
  }

  // Only process columns prop when variant is 'vertical'
  // When variant is 'horizontal', columns is ignored and layout is always single column
  const validColumns = isVertical 
    ? Math.max(1, Math.min(4, Number(columns) || 1))
    : 1; // Ignored for horizontal variant, but set to 1 for consistency

  // Vertical: mobile (md and below) = 1 col; tablet (md to xl) = 2 cols if items > 1; xl and above = columns prop (max 4)
  const xlGridColsClass = isVertical ? {
    1: 'xl:grid-cols-1',
    2: 'xl:grid-cols-2',
    3: 'xl:grid-cols-3',
    4: 'xl:grid-cols-4',
  }[validColumns] || 'xl:grid-cols-1' : '';

  // Horizontal variant: always single column (grid-cols-1), no responsive columns
  // Vertical variant: responsive grid with columns prop (max 4)
  const listClass = [
    'container grid grid-cols-1 gap-section-spacing-x items-stretch',
    isVertical && items.length > 1 ? 'md:grid-cols-2' : '',
    isVertical ? xlGridColsClass : '',
    className,
  ].filter(Boolean).join(' ');

  // On tablet (md to xl), 2 cols: if odd number of items, last item spans full width to fill the bottom row
  const isLastAndOddOnTablet =
    isVertical && items.length > 1 && items.length % 2 === 1;

  return (
    <div {...(id && { id })} className={listClass}>
      {items.map((item, index) => {
        const isLastItem = index === items.length - 1;
        const spanBottom =
          isLastAndOddOnTablet && isLastItem
            ? 'md:col-span-2 xl:col-span-1'
            : '';

        return (
          <div key={item.key ?? index} className={`h-full ${spanBottom}`.trim()}>
            <DownloadListMolecule
              variant={validVariant}
              media={item.media}
              title={item.title}
              description={item.description}
              buttons={item.buttons}
              accordions={item.accordions}
              className="h-full"
              {...item}
            />
          </div>
        );
      })}
    </div>
  );
}
