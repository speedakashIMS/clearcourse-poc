export default function TabbedLozengesMolecule({
  tab = {}, // { text: string, image: string, imageAlt: string }
  isActive = false,
  onClick = () => {},
  index = 0,
  className = '',
  largeImage = false, // if true, set image size to 48x48 even to mobile
  attributes = {}, // aue instrumentation, applied to root so item is editable in Universal Editor
}) {
  if (!tab) {
    return null;
  }

  return (
    <div className={className} key={index} {...attributes}>
      <button
        onClick={onClick}
        className={`inline-flex justify-center items-center gap-4 xl:gap-10 rounded-full border transition-all duration-300 p-tabbed-loz--padding cursor-pointer hover:bg-grey-600 hover:text-white focus-visible:bg-grey-600 focus-visible:text-white min-w-[110px] ${
          isActive
            ? 'border-grey-600 bg-grey-600 text-white'
            : 'border-grey-600 bg-grey-100 text-grey-950'
        }`}
      >
        {tab.image && (
          <img
            src={tab.image}
            alt={tab.imageAlt || ''}
            className={`rounded-full object-cover ${largeImage ? 'w-48 h-48' : 'w-24 h-24 xl:w-48 xl:h-48'}`}
          />
        )}
        {tab.text && (
          <span className="text-body-default">{tab.text}</span>
        )}
      </button>
    </div>
  );
}
