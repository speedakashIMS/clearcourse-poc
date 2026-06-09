import StatsMolecule from './molecules/StatsMolecule';
import Media from './molecules/Media';

export default function StatsWithMedia({
  stats = [],
  statTextAlign = 'center', // 'left' | 'center' | 'right'
  statFontSize = 'sm', // 'sm' | 'md' | 'lg' | 'xl'
  order = 'stat-first', // 'stat-first' | 'media-first'
  id = '',
  className = '',
}) {
  const getValid = (value, validValues, defaultValue) =>
    validValues.includes(value) ? value : defaultValue;

  const getStatAlign = (statData) => {
    const { statAlign = 'left' } = statData;
    return getValid(statAlign, ['left', 'right'], 'left');
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

  const renderStatMolecule = (statData, widthClass) => (
    <div className={`flex h-full flex-col justify-center p-stats-padding min-h-[220px] ${widthClass}`}>
      <StatsMolecule {...getMoleculeProps(statData)} />
    </div>
  );

  const renderMedia = (mediaData, titleFallback = '') => {
    if (!mediaData) return null;
    return (
      <div className="relative w-full h-full min-h-[220px] overflow-hidden bg-[#C8D4FE]">
        <div className="absolute inset-0 w-full h-full">
          <Media
            media={mediaData.type || mediaData.media || 'image'}
            aspect="default"
            imageUrl={mediaData.imageUrl}
            videoUrl={mediaData.videoUrl}
            lottieUrl={mediaData.lottieUrl}
            lottieData={mediaData.lottieData}
            iframeUrl={mediaData.iframeUrl}
            title={mediaData.title || titleFallback}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
  };

  if (!stats || stats.length === 0) {
    return null;
  }

  return (
    <div className={`container ${className}`} id={id}>
      {stats.map((statData, index) => {
        const mediaBlock = statData.media;
        const hasMediaBlock = Boolean(mediaBlock);
        const widthClass = `${hasMediaBlock ? 'xl:w-1/2' : 'w-full'}`;
        const isLeftStat = getStatAlign(statData) === 'left';
        const isMediaFirst = order === 'media-first';

        return (
          <div key={index} {...(statData.attributes ?? {})}>
            <div className="flex flex-col xl:flex-row items-stretch">
              {isMediaFirst && hasMediaBlock && (
                <div className="w-full xl:w-1/2">
                  {renderMedia(mediaBlock, statData.description || '')}
                </div>
              )}
              {isLeftStat && renderStatMolecule(statData, widthClass)}
              {!isMediaFirst && hasMediaBlock && (
                <div className="w-full xl:w-1/2">
                  {renderMedia(mediaBlock, statData.description || '')}
                </div>
              )}
              {!isLeftStat && renderStatMolecule(statData, widthClass)}
            </div>
          </div>
        );
      })}
    </div>
  );
}
