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
  //constants
  const backGroundColorMap = {
    secondary: 'bg-secondary text-white',
    primary: 'bg-primary text-white',
    tertiary: 'bg-tertiary text-white',
    dark: 'bg-grey-950 text-white',
    white: 'bg-white text-black',
  };
  const getMoleculeProps = (statData) => {
    const { media, statMedia, ...restData } = statData;

    return {
      ...restData,
      media: statMedia,
      textAlign: statData.textAlign || statTextAlign,
      fontSize: statData.fontSize || statFontSize,
    };
  };

  const renderStatMolecule = (statData, widthClass) => {
    console.log('Rendering StatMolecule with data:', statData);
    let statBackgroundColor = statData.statBackgroundColor;
    statBackgroundColor = backGroundColorMap[statBackgroundColor] || 'bg-transparent text-black';
    
    return (
      <div className={`flex flex-col justify-center p-stats-padding-lg min-h-[220px] ${widthClass} ${statBackgroundColor}`}>
        <StatsMolecule {...getMoleculeProps(statData)} />
      </div>
    );
  };

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
            <div className="flex flex-col items-stretch xl:flex-row shadow-testimonial-with-stats gap-0 xl:gap-4">
              {!isTestimonialFirst && renderStatMolecule(statData, widthClass)}
              {hasTestimonial && (
                <div className={`flex items-center bg-transparent p-stats-padding-lg text-grey-950 justify-center ${widthClass}`}>
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
