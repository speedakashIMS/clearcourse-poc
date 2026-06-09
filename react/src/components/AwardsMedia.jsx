import AwardMediaMolecule from './molecules/AwardMediaMolecule';

const AwardsMedia = ({
  items = [], // [{ mediaProps }]
  className = '',
  ...props
}) => {
  return (
    <div className={`container ${className}`} {...props}>
      <div className="flex flex-wrap justify-center gap-section-spacing-x">
        {items.map((item, index) => (
          <div
            key={item.key ?? index}
            className="basis-[160px] lg:basis-[180px] xl:basis-[200px] flex items-center justify-center"
            {...item.attributes}
          >
            <AwardMediaMolecule mediaProps={item.mediaProps} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsMedia;
