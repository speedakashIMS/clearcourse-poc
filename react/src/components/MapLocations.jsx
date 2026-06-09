import MapLocationMolecule from './molecules/MapLocationMolecule';


const MapLocations = ({
  mapImageUrl,
  mapImageAlt = 'Map',
  mapIframeUrl,
  locations = [], // Array of { title, description, imageSrc, imageAlt, pins: [{ text, iconName?, type?: 'text'|'email'|'phone' }], pinIconName }
  className = '',
  ...props
}) => {
  return (
    <div className={`space-y-section-spacing-y ${className}`} {...props}>

      <div className="relative w-full lg:aspect-[1512/721]">
        {mapIframeUrl ? (
          <iframe
            src={mapIframeUrl}
            title="Map"
            className="lg:absolute lg:inset-0 w-full h-full aspect-[4/3] lg:aspect-auto"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          mapImageUrl && (
            <img
              src={mapImageUrl}
              alt={mapImageAlt}
              className="lg:absolute lg:inset-0 w-full h-full lg:object-cover lg:z-10 aspect-[4/3] lg:aspect-auto"
            />
          )
        )}


          {locations && locations.length > 0 && (
            <div className="lg:absolute lg:bottom-60 lg:left-0 lg:right-0 lg:z-20 lg:w-full">
              <div className="lg:container lg:mx-auto">
                <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-section-spacing-x">
                  {locations.map((location, index) => (
                    <MapLocationMolecule key={index} {...location} />
                  ))}
                </div>
              </div>
            </div>
          )}
      </div>

    </div>
  );
};

export default MapLocations;

