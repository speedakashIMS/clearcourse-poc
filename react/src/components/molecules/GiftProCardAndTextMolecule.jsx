export default function GiftProCardAndTextMolecule({
  cardTitle,
  bodyLarge,
  bodyDefault,
  bodySmall,
  iconUrl,
  className = '',
  ...props
}) {
  const containerClasses = `w-full  ${className}`.trim();

  return (
    <div className={containerClasses} {...props} {...props.attributes || {}}>
      <div className="flex flex-col gap-textmedia-btn-text--spacing-y text-left items-start">
        {iconUrl && (
          <div className="flex items-center justify-start">
            <img
              src={iconUrl}
              alt={bodyDefault || 'Icon'}
              className="h-100 w-[129px]"
            />
          </div>
        )}

        <div className="flex flex-col gap-testimonial-spacing-y">
        {cardTitle && (
          <p className="text-headings-h3 font-semibold">{cardTitle}</p>
        )}
        {(bodyLarge || bodyDefault || bodySmall) && (
          <div className="flex flex-col gap-testimonial-spacing-y items-start">
            {bodyLarge && <p className="text-body-large">{bodyLarge}</p>}
            {bodyDefault && <p className="text-body-default">{bodyDefault}</p>}
            {bodySmall && <p className="text-body-small">{bodySmall}</p>}
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
