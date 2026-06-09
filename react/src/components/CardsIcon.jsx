import CardWithIconMolecule from './molecules/CardWithIconMolecule';

const CardsIcon = ({
  columns = 3, // 1 | 2 | 3 | 4 | 5 | 6 - number of columns in the grid
  data = [], // Array of card data objects
  buttonType = 'button',
  linkVariant,
  stacked = true,
  iconPosition = 'left',
  itemBackgroundVariant = 'default',
  className = '',
  ...props
}) => {
  // Stacked: 1 col mobile, max 3 cols tablet, then selected columns on desktop. Items centred.
  // Not stacked: 1 col mobile + tablet, max 3 cols on desktop. Items centred.
  const getGridClasses = () => {
    const gapX = 'gap-x-section-spacing-x';
    const gapY = 'gap-y-section-spacing-y';
    const base = `container grid grid-cols-1 ${gapX} ${gapY} justify-items-center`;

    if (stacked) {
      const tabletCols = {
        1: 'md:grid-cols-1',
        2: 'md:grid-cols-2',
        3: 'md:grid-cols-3',
        4: 'md:grid-cols-3',
        5: 'md:grid-cols-3',
        6: 'md:grid-cols-3',
      };
      const desktopCols = {
        1: 'lg:grid-cols-1',
        2: 'lg:grid-cols-2',
        3: 'lg:grid-cols-3',
        4: 'lg:grid-cols-4',
        5: 'lg:grid-cols-5',
        6: 'lg:grid-cols-6',
      };
      const tabletClass = tabletCols[columns] ?? tabletCols[3];
      const colClass = desktopCols[columns] ?? desktopCols[3];
      return `${base} ${tabletClass} ${colClass}`;
    }

    // Not stacked: 1 col until lg, then max 3 cols
    const nonStackedCols = {
      1: 'lg:grid-cols-1',
      2: 'lg:grid-cols-2',
      3: 'lg:grid-cols-3',
    };
    const dc = Math.min(columns, 3);
    return `${base} ${nonStackedCols[dc]}`;
  };

  const getCardWrapperClass = (index) => {
    const base = 'min-w-0 w-full flex items-stretch';
    // Center 3rd item on tablet only when tablet has 2 cols (columns === 2)
    const isThirdOfThreeOnTwoColTablet = stacked && data.length === 3 && index === 2 && columns === 2;
    if (isThirdOfThreeOnTwoColTablet) {
      return `${base} md:col-span-full md:justify-self-center md:max-w-[calc((100%-var(--spacing-section-spacing-x))/2)] lg:col-span-1 lg:max-w-none`;
    }
    return base;
  };

  return (
    <div className={className} {...props}>
      <div className={getGridClasses()}>
        {data.map((card, index) => (
          <div key={index} className={getCardWrapperClass(index)}>
            <CardWithIconMolecule
              stacked={stacked}
              iconPosition={iconPosition}
              media={card.media || 'image'}
              imageUrl={card.imageUrl}
              videoUrl={card.videoUrl}
              lottieUrl={card.lottieUrl}
              lottieData={card.lottieData}
              iframeUrl={card.iframeUrl}
              mediaAltTitle={card.mediaAltTitle}
              title={card.title}
              description={card.description}
              buttonText={card.buttonText}
              buttonHref={card.buttonHref}
              buttonVariant={card.buttonVariant || 'light'}
              buttonType={card.buttonType || buttonType}
              linkVariant={card.linkVariant || linkVariant}
              buttonOnClick={card.buttonOnClick}
              backgroundVariant={itemBackgroundVariant}
              attributes={card.attributes}
              className="h-full w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsIcon;
