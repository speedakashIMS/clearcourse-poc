import Media from './molecules/Media';

const innerContainerClasses = {
  large: 'w-full flex justify-center',
  medium:
    'w-full max-w-4xl mx-auto flex justify-center px-[var(--container-padding)]',
  small:
    'w-full max-w-xs mx-auto flex justify-center px-[var(--container-padding)]',
};

const MediaComponent = ({
  media = 'image', // 'image' | 'video' | 'lottie' | 'iframe' | 'flipbook'
  aspect = 'default', // 'default' | 'rectangle' | 'square'
  containerSize = 'large', // 'large' | 'medium' | 'small'
  imageUrl,
  videoUrl,
  lottieUrl,
  lottieData,
  iframeUrl,
  flipbookUrl,
  title,
  className = '',
  ...props
}) => {
  const innerClass =
    innerContainerClasses[containerSize] ?? innerContainerClasses.large;

  return (
    <div className={className.trim() || undefined} {...props}>
      <div className={innerClass}>
        <Media
          media={media}
          aspect={aspect}
          imageUrl={imageUrl}
          videoUrl={videoUrl}
          lottieUrl={lottieUrl}
          lottieData={lottieData}
          iframeUrl={iframeUrl}
          flipbookUrl={flipbookUrl}
          title={title}
        />
      </div>
    </div>
  );
};

export default MediaComponent;

