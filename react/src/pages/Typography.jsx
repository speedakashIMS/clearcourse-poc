import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

function Typography() {
  const displayStyles = [
    { class: 'text-display-xl', name: 'Display XL', size: '64px' },
    { class: 'text-display-l', name: 'Display L', size: '56px' },
    { class: 'text-display-m', name: 'Display M', size: '48px' },
    { class: 'text-display-s', name: 'Display S', size: '40px' },
  ];

  const headingStyles = [
    { class: 'text-headings-h1', name: 'Heading 1', size: '32px' },
    { class: 'text-headings-h2', name: 'Heading 2', size: '28px' },
    { class: 'text-headings-h3', name: 'Heading 3', size: '24px' },
    { class: 'text-headings-h4', name: 'Heading 4', size: '20px' },
    { class: 'text-headings-h5', name: 'Heading 5', size: '18px' },
    { class: 'text-headings-h6', name: 'Heading 6', size: '16px' },
  ];

  const bodyStyles = [
    { class: 'text-body-large', name: 'Body Large', size: '18px' },
    { class: 'text-body-default', name: 'Body Default', size: '16px' },
    { class: 'text-body-small', name: 'Body Small', size: '14px' },
  ];

  return (
    <div>
      <div className="bg-grey-200 py-32">
        <div className="container">
          {/* Header */}
          <div className="">
            <Link
              to="/"
              className="inline-flex items-center gap-10 text-grey-600 hover:text-grey-950 mb-20 transition-colors"
            >
              <ArrowLeftIcon className="h-20 w-20" />
              Back to Home
            </Link>
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Typography</h1>
            <p className="text-body-default text-grey-600 mb-24">All typography styles and sizes</p>
          </div>
        </div>
      </div>

      <div className="py-20">
        <div className="container">
          {/* Display Styles */}
          <div className="mb-48">
            <h2 className="text-headings-h2 font-bold text-grey-950 mb-24">Display</h2>
            <div className="space-y-16">
              {displayStyles.map((style) => (
                <div key={style.class} className="flex items-center gap-24">
                  <div className="w-1/6 flex-shrink-0">
                    <span className="text-sm font-semibold text-gray-900 uppercase">{style.name}</span>
                    <span className="text-xs text-gray-500 block">{style.size}</span>
                  </div>
                  <div className={`${style.class} font-bold text-grey-950 flex-1`}>
                    The quick brown fox
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Heading Styles */}
          <div className="mb-48">
            <h2 className="text-headings-h2 font-bold text-grey-950 mb-24">Headings</h2>
            <div className="space-y-16">
              {headingStyles.map((style) => (
                <div key={style.class} className="flex items-center gap-24">
                  <div className="w-1/6 flex-shrink-0">
                    <span className="text-sm font-semibold text-gray-900 uppercase">{style.name}</span>
                    <span className="text-xs text-gray-500 block">{style.size}</span>
                  </div>
                  <div className={`${style.class} font-bold text-grey-950 flex-1`}>
                    The quick brown fox
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Body Styles */}
          <div>
            <h2 className="text-headings-h2 font-bold text-grey-950 mb-24">Body</h2>
            <div className="space-y-16">
              {bodyStyles.map((style) => (
                <div key={style.class} className="flex items-center gap-24">
                  <div className="w-1/6 flex-shrink-0">
                    <span className="text-sm font-semibold text-gray-900 uppercase">{style.name}</span>
                    <span className="text-xs text-gray-500 block">{style.size}</span>
                  </div>
                  <div className={`${style.class} text-grey-950 flex-1`}>
                    The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Typography;

