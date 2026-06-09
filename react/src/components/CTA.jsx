import Media from './molecules/Media';
import CTAText from './molecules/CTAText';

const CTA = ({
  columns = 2, // 1 | 2
  gridType = '50-50', // '50-50' | '75-25' | '25-75'
  items = [], // [{ type: 'text'|'media', ctaText molecule fields, mediaProps }]
  className = '',
  attributes,
  ...props
}) => {
  const getGridClasses = () => {
    if (columns === 1) {
      return 'grid grid-cols-1';
    }

    switch (gridType) {
      case '75-25':
        return 'grid grid-cols-1 lg:grid-cols-[3fr_1fr]';
      case '25-75':
        return 'grid grid-cols-1 lg:grid-cols-[1fr_3fr]';
      case '50-50':
      default:
        return 'grid grid-cols-1 lg:grid-cols-2';
    }
  };

  const gridClasses = getGridClasses();

  return (
    <div className={`container ${className}`} {...props} {...attributes}>
      <div className={`items-center ${gridClasses}`}>
        {items.map((item, index) => {
          if (item.type === 'media') {
            return (
              <div key={index} className="w-full overflow-hidden rounded-[var(--spacing-textmedia-image--br)]" {...item.attributes || {}}>
                <Media {...(item.mediaProps || {})} />
              </div>
            );
          }

          return (
            <CTAText
              key={index}
              heading={item.heading}
              paragraph={item.paragraph}
              imageUrl={item.imageUrl}
              imageAlt={item.imageAlt}
              list={item.list}
              textAlign={item.textAlign}
              buttonText={item.buttonText}
              buttonHref={item.buttonHref}
              buttonVariant={item.buttonVariant}
              buttonOnClick={item.buttonOnClick}
              {...item.attributes || {}}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CTA;

