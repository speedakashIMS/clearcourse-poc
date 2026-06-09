import { ChevronRightIcon } from '@heroicons/react/24/outline';

const Breadcrumbs = ({
  items = [], // [{ text, href }]
  align = 'left', // 'left' | 'center' | 'right'
  variant = 'dark', // 'dark' | 'light'
  className = '',
  ...props
}) => {
  if (!items || items.length === 0) return null;

  const alignClass = align === 'center'
    ? 'justify-center'
    : align === 'right'
      ? 'justify-end'
      : 'justify-start';

  const textClass = variant === 'light' ? 'text-white' : 'text-body-default text-grey-600';
  const linkClass = variant === 'light'
    ? 'text-white hover:text-white/80 focus-visible:text-white/80'
    : 'text-grey-600 hover:text-grey-950 focus-visible:text-grey-950';
  const iconClass = variant === 'light' ? 'text-white' : 'text-grey-400';

  return (
    <nav className={className} aria-label="Breadcrumbs" {...props}>
      <ol className={`w-full max-w-[1600px] mx-auto pl-nav-padding-l pr-nav-padding-r flex items-center gap-breadcrumb-menu--spacing-x text-body-small pt-breadcrumb-padding-t pb-breadcrumb-padding-b ${alignClass}`.trim()}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.text}-${index}`} className={`flex items-center gap-12 ${textClass}`.trim()}>
              {index > 0 && (
                <ChevronRightIcon className={`h-16 w-16 ${iconClass}`.trim()} />
              )}
              {isLast ? (
                <span>{item.text}</span>
              ) : (
                <a
                  href={item.href || '#'}
                  className={`${linkClass} transition-colors`.trim()}
                >
                  {item.text}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

