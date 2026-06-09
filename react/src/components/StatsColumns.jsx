import StatsMolecule from './molecules/StatsMolecule';

export default function StatsColumns({
  stats = [],
  statTextAlign = 'center', // 'left' | 'center' | 'right'
  statFontSize = 'sm', // 'sm' | 'md' | 'lg' | 'xl'
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

  if (!stats || stats.length === 0) {
    return null;
  }

  const cappedStats = stats.slice(0, 4);
  const columns = Math.min(cappedStats.length, 4);
  // Flex + justify-center so a single item in the last row is centred (no grid class does this)
  const itemWidthClass = {
    1: 'w-full',
    2: 'w-full md:w-[calc((100%-var(--spacing-section-spacing-x))/2)]',
    3: 'w-full md:w-[calc((100%-var(--spacing-section-spacing-x))/2)] lg:w-[calc((100%-2*var(--spacing-section-spacing-x))/3)]',
    4: 'w-full md:w-[calc((100%-var(--spacing-section-spacing-x))/2)] lg:w-[calc((100%-3*var(--spacing-section-spacing-x))/4)]',
  }[columns];

  return (
    <div className="container" id={id}>
      <div
        className={`flex flex-wrap justify-center gap-section-spacing-x ${className}`.trim()}
      >
        {cappedStats.map((statData, index) => (
          <div
            key={index}
            className={`p-stats-padding ${itemWidthClass}`}
            {...(statData.attributes ?? {})}
          >
            <StatsMolecule {...getMoleculeProps(statData)} />
          </div>
        ))}
      </div>
    </div>
  );
}
