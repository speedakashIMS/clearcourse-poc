const LogosFramed = ({
  logos = [], // Array of { src, alt, href }
  className = '',
  ...props
}) => {
  const containerClasses = 'w-full flex flex-wrap justify-center gap-16';
  const itemClasses =
    'flex items-center justify-center shrink-0 w-[215px] h-[215px] p-[40px] bg-white border border-gray-200 overflow-hidden';

  return (
    <div className={`py-logos-padding-y ${className}`} {...props}>
      <div className={containerClasses}>
        {logos.map((logo, index) => {
          const image = (
            <img
              src={logo.src}
              alt={logo.alt || 'Logo'}
              className="w-full h-full object-contain p-2"
            />
          );

          return logo.href ? (
            <a
              key={index}
              href={logo.href}
              className={itemClasses}
              {...(logo.attributes ?? {})}
            >
              {image}
            </a>
          ) : (
            <div
              key={index}
              className={itemClasses}
              {...(logo.attributes ?? {})}
            >
              {image}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LogosFramed;
