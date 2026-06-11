import Stars from '../partials/Stars';

export default function TestimonialMolecule({
  testimonial,
  name,
  role,
  rating = null, // number | null (1-5)
  imageUrl,
  logoUrl,
  mediaPosition = 'top', // 'top' | 'bottom' | 'with-name'
  align = 'left', // 'left' | 'center'
  withPadding = false, // boolean
  className = '',
  ...props 
}) {
  const validRating = rating !== null && rating >= 1 && rating <= 5 ? Math.floor(rating) : null;
  const isCenter = align === 'center';
  const containerClasses = `w-full ${withPadding ? 'p-testimonial-padding' : ''} ${className}`.trim();
  const textAlignClasses = isCenter ? 'text-center items-center' : 'text-left items-start';
  const mediaNodes = [
    logoUrl
      ? (
        <img
          key="logo"
          src={logoUrl}
          alt={name || 'Logo'}
          className="h-40 w-auto"
        />
      )
      : null,
    imageUrl
      ? (
        <img
          key="image"
          src={imageUrl}
          alt={name || 'Profile'}
          className="h-48 w-48 rounded-full object-cover"
        />
      )
      : null,
  ].filter(Boolean);

  const hasMedia = mediaNodes.length > 0;
  const showMediaTop = hasMedia && mediaPosition === 'top';
  const showMediaBottom = hasMedia && mediaPosition === 'bottom';
  const showMediaWithName = hasMedia && mediaPosition === 'with-name';

  return (
    <figure className={containerClasses} {...props} {...props.attributes || {}}>
      <div className={`flex flex-col gap-testimonial-spacing-y ${textAlignClasses}`}>
        {showMediaTop && (
          <div className={`flex items-center gap-10 ${isCenter ? 'justify-center' : 'justify-start'}`}>
            {mediaNodes}
          </div>
        )}
        {validRating && <Stars rating={validRating} textAlign={isCenter ? 'center' : 'left'} />}
        {testimonial && (
          <blockquote className="m-0">
            <p className="text-body-default" dangerouslySetInnerHTML={{ __html: testimonial }} />
          </blockquote>
        )}
        {(name || role || showMediaWithName) && (
          <figcaption
            className={`flex flex-col gap-6 ${isCenter ? 'items-center' : 'items-start'}`}
          >
            {showMediaWithName && (
              <div className={`flex items-center gap-10 ${isCenter ? 'justify-center' : 'justify-start'}`}>
                {mediaNodes}
                <div className={`flex flex-col ${isCenter ? 'items-center' : 'items-start'}`}>
                  {name && <cite className="text-ui-label-small not-italic">{name}</cite>}
                  {role && <p className="text-ui-label-small">{role}</p>}
                </div>
              </div>
            )}
            {!showMediaWithName && (
              <>
                {name && <cite className="text-ui-label-small not-italic">{name}</cite>}
                {role && <p className="text-ui-label-small">{role}</p>}
              </>
            )}
          </figcaption>
        )}
        {showMediaBottom && (
          <div className={`flex items-center gap-10 ${isCenter ? 'justify-center' : 'justify-start'}`}>
            {mediaNodes}
          </div>
        )}
      </div>
    </figure>
  );
}
