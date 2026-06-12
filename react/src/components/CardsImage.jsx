import CardWithMediaMolecule from './molecules/CardWithMediaMolecule';

const CardsImage = ({
  columns = 3, // 1 | 2 | 3 | 4 | 5 | 6 - number of columns in the grid
  data = [], // Array of card data objects
  buttonType = 'button',
  linkVariant,
  stacked = true,
  imagePosition = 'left',
  variant = 'flushed',
  itemBackgroundVariant = 'default',
  className = '',
  shadowCards = false,
  ...props
}) => {
  const getEffectiveColumns = () => {
    if (!stacked && variant === 'framed') {
      return Math.min(columns, 2);
    }
    return columns;
  };

  // Stacked: 1 col mobile, 2 cols tablet, then selected columns on desktop. Items centred.
  // Not stacked: 1 col mobile + tablet, max 3 cols on desktop. Items centred.
  const getGridClasses = () => {
    const gapX = 'gap-x-section-spacing-x';
    const gapY = 'gap-y-section-spacing-y';
    const base = `container grid grid-cols-1 ${gapX} ${gapY} justify-items-center`;

    if (stacked) {
      const desktopCols = {
        1: 'lg:grid-cols-1',
        2: 'lg:grid-cols-2',
        3: 'lg:grid-cols-3',
        4: 'lg:grid-cols-4',
        5: 'lg:grid-cols-5',
        6: 'lg:grid-cols-6',
      };
      const cols = getEffectiveColumns();
      const colClass = desktopCols[cols] ?? desktopCols[3];
      return `${base} md:grid-cols-2 ${colClass}`;
    }

    // Not stacked: 1 col until lg, then max 3 cols
    const nonStackedCols = {
      1: 'lg:grid-cols-1',
      2: 'lg:grid-cols-2',
      3: 'lg:grid-cols-3',
    };
    const dc = Math.min(getEffectiveColumns(), 3);
    return `${base} ${nonStackedCols[dc]}`;
  };

  const getCardWrapperClass = (index) => {
    const base = `min-w-0 w-full flex items-stretch${shadowCards ? ' box-shadow' : ''}`;
    const isThirdOfThree = stacked && data.length === 3 && index === 2;
    if (isThirdOfThree) {
      return `${base} md:col-span-full md:justify-self-center md:max-w-[calc((100%-var(--spacing-section-spacing-x))/2)] lg:col-span-1 lg:max-w-none`;
    }
    return base;
  };

  return (
    <div className={className} {...props}>
      <div className={getGridClasses()}>
        {data.map((card, index) => (
          <div key={index} className={getCardWrapperClass(index)}>
            <CardWithMediaMolecule
              stacked={stacked}
              imagePosition={imagePosition}
              variant={variant}
              media={card.media || 'image'}
              imageUrl={card.imageUrl}
              videoUrl={card.videoUrl}
              lottieUrl={card.lottieUrl}
              lottieData={card.lottieData}
              iframeUrl={card.iframeUrl}
              mediaAltTitle={card.mediaAltTitle}
              title={card.title}
              description={card.description}
              descriptionRichText={card.descriptionRichText}
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

export default CardsImage;
