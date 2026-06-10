export default function GiftproTestimonialMolecule({
  testimonial,
  name,
  role,
  imageUrl,
  logoUrl,
  className = '',
  ...props
}) {
  // strip surrounding quotes from authored copy so we can render our own quote marks
  const cleanTestimonial = (testimonial || '').replace(/^["“”]+|["“”]+$/g, '');

  return (
    <figure className={`flex flex-col items-center text-center ${className}`.trim()} {...props} {...props.attributes || {}}>
      <blockquote className="relative m-0 max-w-[720px] px-30">
        <span
          aria-hidden="true"
          className="absolute -left-6 -top-10 font-serif italic font-bold leading-none text-secondary text-[48px]"
        >
          &ldquo;
        </span>
        <p className="text-headings-h4 font-bold text-grey-950">
          {cleanTestimonial}
          <span
            aria-hidden="true"
            className="ml-4 inline-block translate-y-12 font-serif italic font-bold leading-none text-secondary text-[48px]"
          >
            &rdquo;
          </span>
        </p>
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
