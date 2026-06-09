import Media from './molecules/Media';

const Video = ({
  videoUrl,
  title,
  className = '',
  ...props
}) => {
  const wrapperClasses = 'relative w-full h-full aspect-video';
  const contentClasses = 'absolute inset-0 w-full h-full';

  return (
    <div className={`container ${className}`.trim()} {...props}>
      <div className="w-full flex justify-center">
        <div className={wrapperClasses}>
          {videoUrl ? (
            <Media
              media="video"
              videoUrl={videoUrl}
              title={title || 'Video player'}
              className={contentClasses} 
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-grey-900 text-body-default text-center p-40">
              Video placeholder
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Video;

