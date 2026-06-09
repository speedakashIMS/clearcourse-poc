import SocialIcon from './partials/SocialIcon';

const Footer = ({
  logo,
  paragraph,
  socialMedia = [], // Ex. [ ['facebook', 'https://facebook.com'] ]
  columns = [], // [{ header, links: [{ label, href }] }]
  columnsCount,
  bottomLeft,
  bottomRight,
  navigationLabel = 'Footer navigation',
  columnHeadingTag = 'h2',
  className = '',
  ...props
}) => {
  const ColumnHeadingTag = columnHeadingTag;
  const resolvedCount = Math.min(Math.max(columnsCount || columns.length || 2, 2), 5);
  const gridClassesMap = {
    2: 'grid grid-cols-1 xl:grid-cols-2 gap-24',
    3: 'grid grid-cols-1 xl:grid-cols-3 gap-24',
    4: 'grid grid-cols-1 xl:grid-cols-4 gap-24',
    5: 'grid grid-cols-1 xl:grid-cols-3 xl:grid-cols-5 gap-24',
  };

  const visibleColumns = columns.slice(0, resolvedCount);

  return (
    <footer className={`bg-grey-950 text-white ${className}`.trim()} {...props}>
      <div className="container py-40">
        <div className="flex flex-col xl:flex-row gap-20">
          <div className="w-full xl:max-w-[280px] flex flex-col gap-60">
            <div className="space-y-16">
              {logo && (
                <div>
                  {typeof logo === 'string' ? (
                    <img src={logo} alt="Logo" className="h-auto max-h-32" />
                  ) : (
                    logo
                  )}
                </div>
              )}
              {paragraph && (
                <p className="text-body-small text-white">
                  {paragraph}
                </p>
              )}
            </div>
            {socialMedia.length > 0 && (
              <div className="flex items-center gap-8 mt-auto">
                {socialMedia.map((social, index) => {
                  const [type, url] = Array.isArray(social) ? social : [social.type, social.url];
                  return (
                    <a
                      key={index}
                      href={url || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:opacity-80 focus-visible:opacity-80 transition-opacity"
                      aria-label={type}
                    >
                      <SocialIcon type={type} className="w-16 h-16" />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          <div className="flex-1">
            <nav aria-label={navigationLabel} className={gridClassesMap[resolvedCount]}>
              {visibleColumns.map((column, index) => (
                <div key={index} className="space-y-12">
                  {column.header && (
                    <ColumnHeadingTag className="text-body-default font-semibold text-white">
                      {column.header}
                    </ColumnHeadingTag>
                  )}
                  {Array.isArray(column.links) && (
                    <ul className="space-y-8">
                      {column.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            href={link.href || '#'}
                            className="text-body-small text-white hover:opacity-80 focus-visible:opacity-80 transition-opacity"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {(bottomLeft || bottomRight) && (
        <div className="bg-grey-950">
          <div className="p-16 flex flex-row items-center justify-between gap-12 text-body-small text-white">
            {bottomLeft && (
              <div {...(typeof bottomLeft === 'string' ? { dangerouslySetInnerHTML: { __html: bottomLeft } } : { children: bottomLeft })} />
            )}
            {bottomRight && (
              <div
                className="text-right"
                {...(typeof bottomRight === 'string' ? { dangerouslySetInnerHTML: { __html: bottomRight } } : { children: bottomRight })}
              />
            )}
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;

