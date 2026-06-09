import { CheckCircleIcon } from '@heroicons/react/24/solid';

const ValueMolecule = ({
  text,
  useIcon = true,
  number,
  stacked = false,
  size = 'medium', // 'small' | 'medium' | 'large'
  className = '',
  attributes = {}
}) => {
  const isStacked = Boolean(stacked);
  const sizeMap = { small: 16, medium: 24, large: 32 };
  const iconSize = sizeMap[size] || 24;
  const iconStyle = { width: `${iconSize}px`, height: `${iconSize}px` };
  const layoutClasses = isStacked ? 'flex-col items-start' : 'flex-row items-start';
  const gapClass = isStacked ? 'gap-8' : 'gap-12';
  const rowAlignClass = isStacked ? '' : 'mt-4';

  const iconNode = useIcon ? (
    <CheckCircleIcon className={`flex-shrink-0 ${rowAlignClass}`.trim()} style={iconStyle} />
  ) : (
    <span
      className={`font-semibold flex-shrink-0 leading-none ${rowAlignClass}`.trim()}
      style={{ fontSize: `${iconSize}px` }}
    >
      {number}
    </span>
  );

  const content = (
    <div className={`flex ${layoutClasses} ${gapClass} ${className}`.trim()}>
      {iconNode}
      <span className="text-body-large">{text}</span>
    </div>
  );

  if (useIcon) {
    return <li {...attributes || {}}>{content}</li>;
  }

  return <div {...attributes || {}}>{content}</div>;
};

export default ValueMolecule;

