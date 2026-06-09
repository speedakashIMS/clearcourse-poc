import EventAndWebinarMolecule from './molecules/EventAndWebinarMolecule';

export default function EventAndWebinar({
  /**
   * Array of event/webinar objects
   * Each object should include:
   * - image: string (image URL)
   * - title: string
   * - description: string
   * - date: string
   * - location: string
   * - linkUrl: string
   */
  events = [],
  
  /**
   * Number of columns in the grid (1, 2, 3, etc.)
   * Determines the width of each column:
   * - 1 column = 100% width
   * - 2 columns = 50% width each
   * - 3 columns = 33.33% width each
   * - etc.
   */
  columns = 1, // 1 | 2 | 3 | 4 | 5
  
  /**
   * Logo position for all molecules: 'left' | 'top'
   * - 'left': Logo on the left, content on the right
   * - 'top': Logo above content
   */
  logoPosition = 'left', // 'left' | 'top'
  
  /**
   * Text alignment when logoPosition is 'top': 'left' | 'center'
   * Only applies when logoPosition is 'top'
   */
  textAlign = 'left', // 'left' | 'center'
  
  /**
   * Link label text for all events
   * Can be overridden by individual event objects
   */
  linkLabel = 'Learn More', // string
  
  id = '',
  className = '',
}) {
  // Helper: Get valid value or default
  const getValid = (value, validValues, defaultValue) => 
    validValues.includes(value) ? value : defaultValue;

  const validColumns = Math.max(1, Math.floor(columns) || 1);
  const validLogoPosition = getValid(logoPosition, ['left', 'top'], 'left');
  const validTextAlign = getValid(textAlign, ['left', 'center'], 'left');

  if (!events || events.length === 0) {
    return null;
  }

  // Grid classes based on columns
  const getGridClasses = () => {
    const baseClasses = 'grid gap-section-spacing-x';
    
    // Map column count to Tailwind grid classes
    const gridColsMap = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
      5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5',
    };
    
    return `${baseClasses} ${gridColsMap[validColumns] || gridColsMap[1]}`;
  };

  // Get unified molecule props
  const getMoleculeProps = (eventData) => {
    return {
      ...eventData,
      logoPosition: validLogoPosition,
      textAlign: eventData.textAlign || validTextAlign,
      linkLabel: eventData.linkLabel || linkLabel,
      attributes: eventData.attributes || {}
    };
  };

  return (
    <div className={`${getGridClasses()} container ${className}`} id={id}>
      {events.map((event, index) => (
        <div 
          key={index} 
          className="bg-white text-grey-950 p-events-padding"
        >
          <EventAndWebinarMolecule {...getMoleculeProps(event)} />
        </div>
      ))}
    </div>
  );
}
