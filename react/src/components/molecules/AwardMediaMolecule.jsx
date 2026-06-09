import Media from './Media';

const AwardMediaMolecule = ({
  mediaProps = {}, // props for Media molecule
  className = '',
  attributes = {},
  ...props
}) => {
  return (
    <div className={`${className} w-full`} {...props} {...(attributes ?? {})}>
      <Media {...mediaProps} />
    </div>
  );
};

export default AwardMediaMolecule;
