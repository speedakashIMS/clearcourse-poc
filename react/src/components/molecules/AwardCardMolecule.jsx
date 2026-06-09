import Media from './Media';
import Link from '../partials/Link';

const AwardCardMolecule = ({
  title,
  subtitle,
  linkText,
  linkHref,
  linkVariant = 'light',
  mediaProps = {}, // props for Media molecule
  className = '',
  attributes = {},
  ...props
}) => {
  return (
    <div
      className={`w-full bg-grey-500 p-awards-padding flex flex-col items-center text-center space-y-36 h-full ${className}`.trim()}
      {...props}
      {...(attributes ?? {})}
    >
      <div className="space-y-awards-spacing-y w-full">
        <div className="w-full max-w-[230px] mx-auto">
          <Media {...mediaProps} />
        </div>
        <div className="space-y-awards-text--spacing-y">
          {subtitle && (
            <div className="text-body-default text-white">{subtitle}</div>
          )}
          {title && (
            <h3 className="text-headings-h3 font-semibold text-white">
              {title}
            </h3>
          )}
        </div>
      </div>
      {linkText && linkHref && (
        <div className="mt-auto">
          <Link text={linkText} href={linkHref} variant={linkVariant} />
        </div>
      )}
    </div>
  );
};

export default AwardCardMolecule;
