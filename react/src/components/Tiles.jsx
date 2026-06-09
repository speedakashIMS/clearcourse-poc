import TileMolecule from './molecules/TileMolecule';

const Tiles = ({
  columns = 3, // 1 | 2 | 3 | 4 | 5 | 6 - number of columns in the grid
  gridVariant = 'contained', // 'contained' | 'full'
  data = [], // Array of tile data objects
  className = '',
  ...props
}) => {
  // Grid classes based on columns prop
  const getGridClasses = () => {
    const gapClass = gridVariant === 'full' ? 'gap-0' : 'gap-24';
    const useLgSpanGrid = [3, 5, 6].includes(columns);
    const lgColsClass = useLgSpanGrid ? 'lg:grid-cols-6' : `lg:grid-cols-${columns}`;
    switch (columns) {
      case 1:
        return `grid grid-cols-1 ${gapClass}`;
      case 2:
        return `grid grid-cols-1 md:grid-cols-2 ${gapClass}`;
      case 3:
        return `grid grid-cols-1 md:grid-cols-2 ${lgColsClass} ${gapClass}`;
      case 4:
        return `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ${gapClass}`;
      case 5:
        return `grid grid-cols-1 md:grid-cols-2 ${lgColsClass} xl:grid-cols-5 ${gapClass}`;
      case 6:
        return `grid grid-cols-1 md:grid-cols-2 ${lgColsClass} xl:grid-cols-6 ${gapClass}`;
      default:
        return `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${gapClass}`;
    }
  };

  const getTileSpanClasses = (index, total) => {
    const classes = [];
    const isLast = index === total - 1;
    const isSecondLast = index === total - 2;

    if (columns >= 2 && total % 2 === 1 && isLast) {
      classes.push('md:col-span-2');
    }

    if ([3, 5, 6].includes(columns)) {
      const remainder = total % 3;
      if (remainder === 1 && isLast) {
        classes.push('lg:col-span-6');
      } else if (remainder === 2 && (isSecondLast || isLast)) {
        classes.push('lg:col-span-3');
      } else {
        classes.push('lg:col-span-2');
      }
    }

    if (columns >= 5) {
      classes.push('xl:col-span-1');
    }

    return classes.join(' ');
  };

  const gridWrapperClasses = gridVariant === 'contained' ? 'container' : '';

  return (
    <div className={className} {...props}>
      <div className={gridWrapperClasses}>
        <div className={getGridClasses()}>
          {data.map((tile, index) => (
            <TileMolecule
              key={index}
              title={tile.title}
              description={tile.description}
              buttonText={tile.buttonText}
              buttonHref={tile.buttonHref}
              buttonType={tile.buttonType || 'link'}
              buttonOnClick={tile.buttonOnClick}
              backgroundImage={tile.backgroundImage}
              backgroundColor={tile.backgroundColor || 'primary'}
              richText={tile.richText}
              valueList={tile.valueList}
              className={`${gridVariant === 'contained' ? 'rounded-[var(--spacing-tiles-br)]' : 'rounded-none'} ${getTileSpanClasses(index, data.length)} ${tile.className || ''}`.trim()}
              attributes={tile.attributes}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tiles;

