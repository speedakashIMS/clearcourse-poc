export default function TabbedRowMolecule({
  tab = {},
  isActive = false,
  onClick = () => {},
  index = 0,
  className = '',
}) {
  if (!tab) {
    return null;
  }

  return (
    <button
      onClick={onClick}
      className={`h-44px flex flex-row justify-start items-center gap-10 self-stretch border-b border-x transition-all duration-300  p-tabbed-row--padding cursor-pointer hover:bg-grey-300 focus-visible:bg-grey-300 ${
        isActive
          ? 'border-grey-400 bg-grey-300'
          : 'border-grey-400 bg-white'
      }
      ${index === 0 ? 'border-t' : ''}
      ${className}`}
    >
      {tab.text && (
        <span className="text-body-default">{tab.text}</span>
      )}
    </button>
  );
}
