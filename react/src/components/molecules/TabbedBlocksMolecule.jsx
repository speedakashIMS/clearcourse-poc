export default function TabBlocksMolecule({
  /**
   * The tab object.
   * - text: string
   * - image: string
   * - imageAlt: string
   * - content: string
   */
  tab = {},

  /**
   * !!! IGNORE IN COMPONENT. REMOVE THESE FROM REPEATER ITEM SETTINGS.
   * Below are (optional) props when used in a `Tabbed` component. 
   * 
   * The main component handles these to make sure items uniform.
   * But if you use this molecule as standalone, you can use the props below.
   */
  isActive = false,
  onClick = () => {},
  index = 0,
  className = '',
  hasBorder = true,
  attributes = {}, // aue instrumentation, applied to root so item is editable in Universal Editor
}) {
  if (!tab) {
    return null;
  }

  return (
    <button
      key={index}
      onClick={onClick}
      {...attributes}
      className={`relative flex flex-col items-center justify-center gap-10 p-20 min-h-[219px] min-w-[110px] xl:min-w-[120px] w-full transition-all duration-300 rounded-0 bg-white hover:bg-grey-50 focus-visible:bg-grey-50 cursor-pointer ${className} border-t border-grey-400 
      ${hasBorder ? 'border' : ''}
      ${isActive ? 'border-t-[11px] border-b-0' : ''}
      `}
    >
      {tab.image && (
        <img
          src={tab.image}
          alt={tab.imageAlt || ''}
          className="w-48 h-48 object-cover rounded-full"
        />
      )}
      {tab.text && (
        <div className="max-w-[200px]">
          {typeof tab.text === 'string' ? (
            <div dangerouslySetInnerHTML={{ __html: tab.text }} />
          ) : (
            <div>{tab.text}</div>
          )}
        </div>
      )}
    </button>
  );
}
