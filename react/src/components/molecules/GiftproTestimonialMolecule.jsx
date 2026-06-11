const QUOTE_COLOR_CLASSES = {
  secondary: 'text-secondary',
  primary: 'text-primary',
  tertiary: 'text-brand-tertiary',
};

function OpeningQuote({ className = '' }) {
  return (
    <svg
      className={className}
      width="25"
      height="16"
      viewBox="0 0 25 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20.8959 16H13.1974L19.7961 0H25L20.8959 16ZM7.6985 16H0L6.59871 0H11.8294L7.6985 16Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ClosingQuote({ className = '' }) {
  return (
    <svg
      className={className}
      width="25"
      height="16"
      viewBox="0 0 25 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4.10408 0H11.8026L5.20386 16H0L4.10408 0ZM17.3015 0H25L18.4013 16H13.1706L17.3015 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function GiftproTestimonialMolecule({
  testimonial,
  name,
  role,
  imageUrl,
  logoUrl,
  quoteColor = 'secondary', // 'secondary' | 'primary' | 'tertiary'
  className = '',
  ...props
}) {
  // strip surrounding quotes from authored copy so we can render our own quote marks
  const cleanTestimonial = (testimonial || '').replace(/^["“”]+|["“”]+$/g, '');
  const colorClass = QUOTE_COLOR_CLASSES[quoteColor] || QUOTE_COLOR_CLASSES.secondary;

  return (
    <figure className={`flex flex-col items-center text-center ${className}`.trim()} {...props} {...props.attributes || {}}>
      <blockquote className="relative m-0 max-w-[720px] flex flex-row items-start text-center gap-20">
        <OpeningQuote className={`w-[30px] h-auto ${colorClass}`} />
        <p className="text-headings-h4 font-bold text-grey-950">
          {cleanTestimonial}
        </p>
        <ClosingQuote className={`w-[30px] h-auto ${colorClass}`} />
      </blockquote>

      {(logoUrl || imageUrl || name || role) && (
        <figcaption className="mt-32 flex items-center justify-center gap-20">
          {logoUrl && (
            <img
              src={logoUrl}
              alt={name ? `${name} logo` : 'Logo'}
              className="h-56 w-auto object-contain"
            />
          )}
          {imageUrl && (
            <img
              src={imageUrl}
              alt={name || 'Profile'}
              className="h-56 w-56 rounded-full object-cover"
            />
          )}
          {(name || role) && (
            <div className="flex flex-col items-start text-left">
              {name && <cite className="text-body-default not-italic font-bold text-grey-950">{name}</cite>}
              {role && <p className="text-body-default text-grey-600">{role}</p>}
            </div>
          )}
        </figcaption>
      )}
    </figure>
  );
}
