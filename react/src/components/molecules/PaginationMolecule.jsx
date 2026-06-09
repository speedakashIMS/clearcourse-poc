const PaginationMolecule = ({
  items = [], // [{ label, href, onClick, isActive, isEllipsis }]
  className = '',
  ...props
}) => {
  return (
    <nav className={className} aria-label="Pagination" {...props}>
      <ul className="flex items-center justify-center gap-archive-spacing-x">
        {items.map((item, index) => {
          if (item.isEllipsis) {
            return (
              <li key={`ellipsis-${index}`} className="p-tabbed-loz--padding">
                {item.label || '...'}
              </li>
            );
          }

          const baseClasses = 'inline-flex items-center justify-center p-10 rounded-full border transition-colors';
          const activeClasses = item.isActive
            ? 'bg-grey-600 text-white border-grey-600'
            : 'bg-grey-100 border-grey-400 hover:border-grey-600 hover:bg-grey-600 hover:text-white focus-visible:border-grey-600 focus-visible:bg-grey-600 focus-visible:text-white';

          const content = (
            <span className={`${baseClasses} ${activeClasses}`}>
              {item.label}
            </span>
          );

          return (
            <li key={`${item.label}-${index}`}>
              {item.href ? (
                <a
                  href={item.href}
                  aria-current={item.isActive ? 'page' : undefined}
                >
                  {content}
                </a>
              ) : (
                <button
                  type="button"
                  onClick={item.onClick}
                  aria-current={item.isActive ? 'page' : undefined}
                >
                  {content}
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default PaginationMolecule;

