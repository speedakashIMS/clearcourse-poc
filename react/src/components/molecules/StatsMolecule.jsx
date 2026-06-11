import Media from './Media';

export default function StatsMolecule({
  media, // Media props object: { media, imageUrl, videoUrl, lottieUrl, lottieData, iframeUrl, aspect, title }
  stat,
  description,
  /**
   * !!! IGNORE IN COMPONENT. REMOVE THESE FROM REPEATER ITEM SETTINGS.
   * Below are (optional) props when used in a `Stats` component. 
   * 
   * The main component handles these to make sure items uniform.
   * But if you use this molecule as standalone, you can use the props below.
   */
  textAlign = 'center', // 'center' | 'left' | 'right'
  fontSize = 'sm', // 'sm' | 'md' | 'lg' | 'xl'
}) {
  // Constants
  const fontSizeMap = {
    sm: 'text-display-s',
    md: 'text-display-m',
    lg: 'text-display-l',
    xl: 'text-display-xl',
  };

  const justifyMap = {
    left: 'start',
    right: 'end',
    center: 'center',
  };

  const imageClassMap = {
    left: 'mr-auto',
    right: 'ml-auto',
    center: 'mx-auto',
  };

  // Validation and computed values
  const validTextAlign = ['center', 'left', 'right'].includes(textAlign) ? textAlign : 'center';
  const validFontSize = ['sm', 'md', 'lg', 'xl'].includes(fontSize) ? fontSize : 'sm';
  
  const fontSizeClass = fontSizeMap[validFontSize];
  const justifyAlign = justifyMap[validTextAlign];
  const imageClass = imageClassMap[validTextAlign];

  // Prepare Media component props
  const mediaProps = media
    ? {
        media: media.media || 'image',
        aspect: media.aspect || 'square',
        imageUrl: media.imageUrl,
        videoUrl: media.videoUrl,
        lottieUrl: media.lottieUrl,
        lottieData: media.lottieData,
        iframeUrl: media.iframeUrl,
        title: media.title || description || '',
        className: 'w-full h-full object-cover',
      }
    : null;

  return (
    <div 
      className={`flex flex-col items-${justifyAlign} justify-center gap-stats-spacing-y`}
      style={{ textAlign: validTextAlign }}
    >
      {media && mediaProps && (
        <div className={`flex flex-col items-${justifyAlign} justify-${justifyAlign}`}>
          <div className={`w-48 h-48 max-w-full max-h-full rounded-full overflow-hidden ${imageClass}`}>
            <Media {...mediaProps} />
          </div>
        </div>
      )}
      {stat && <div className={`${fontSizeClass} font-normal`}>{stat}</div>}
      {description && <div dangerouslySetInnerHTML={{ __html: description }} />}
    </div>
  );
}