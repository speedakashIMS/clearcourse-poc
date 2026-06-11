import StatsMolecule from './molecules/StatsMolecule';
import TestimonialMolecule from './molecules/TestimonialMolecule';

export default function StatsWithTestimonials({
  stats = [],
  statTextAlign = 'center', // 'left' | 'center' | 'right'
  statFontSize = 'sm', // 'sm' | 'md' | 'lg' | 'xl'
  order = 'stat-first', // 'testimonial-first' | 'stat-first'
  id = '',
  className = '',
}) {
  const getMoleculeProps = (statData) => {
    const { media, statMedia, ...restData } = statData;

    return {
      ...restData,
      media: statMedia,
      textAlign: statData.textAlign || statTextAlign,
      fontSize: statData.fontSize || statFontSize,
    };
  };

  const renederStartBackgroundColor = (statData) => {
    let statBackgroundColor = statData.statBackgroundColor;
    statBackgroundColor = statBackgroundColor === 'secondary' ? 'bg-secondary text-white' : statBackgroundColor === 'primary' ? 'bg-primary text-white' : statBackgroundColor === 'tertiary' ? 'bg-tertiary text-white' : statBackgroundColor === 'dark' ? 'bg-grey-950 text-white' : statBackgroundColor === 'white' ? 'bg-white text-black' : 'bg-transparent text-black';
    return statBackgroundColor;
  };

  const renderStatMolecule = (statData, widthClass) => (
    <div className={`flex h-full flex-col justify-center p-stats-padding min-h-[220px] ${widthClass} ${renederStartBackgroundColor(statData)}`}>
      <StatsMolecule {...getMoleculeProps(statData)} />
    </div>
  );

  if (!stats || stats.length === 0) {
    return null;
  }

  return (
    <div className={`container ${className}`} id={id}>
      {stats.map((statData, index) => {
        const {
          testimonial,
          rating,
          mediaPosition,
          align,
          withPadding,
          logoUrl,
        } = statData;
        const name = statData.name ?? statData.author;
        const role = statData.role ?? statData.authorTitle;
        const imageUrl = statData.imageUrl ?? statData.authorImage;
        const hasTestimonial = Boolean(testimonial);
        const widthClass = `min-h-auto! ${hasTestimonial ? 'xl:w-1/2' : 'w-full'}`;
        const isTestimonialFirst = order === 'testimonial-first';

        return (
          <div key={index} {...(statData.attributes ?? {})}>
            <div className="flex flex-col items-stretch xl:flex-row">
              {!isTestimonialFirst && renderStatMolecule(statData, widthClass)}
              {hasTestimonial && (
                <div className={`flex items-center bg-grey-100 text-grey-950 justify-center ${widthClass}`}>
                  <TestimonialMolecule
                    testimonial={testimonial}
                    name={name}
                    role={role}
                    imageUrl={imageUrl}
                    logoUrl={logoUrl}
                    rating={rating}
                    mediaPosition={mediaPosition}
                    align={align}
                    withPadding={withPadding}
                  />
                </div>
              )}
              {isTestimonialFirst && renderStatMolecule(statData, widthClass)}
            </div>
          </div>
        );
      })}
    </div>
  );
}
