import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import LinkComponent from '../components/partials/Link';

function Links() {
  const variants = [
    'dark',
    'light',
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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Link Variants</h1>
            <p className="text-body-default text-grey-600 mb-24">All link styles and variants</p>
          </div>
        </div>
      </div>

      <div className="bg-grey-300 py-20">
        <div className="container">
          {/* Links Grid */}
          <div className="grid grid-cols-3 gap-16">
            {variants.map((variant) => (
              <div key={variant} className="flex flex-col gap-6">
                <h3 className="text-sm font-semibold text-gray-900 capitalize">
                  {variant}
                </h3>
                <div className="py-24">
                  <LinkComponent text="Link text" variant={variant} />
                </div>
              </div>
            ))}
            {/* Custom Icon Example */}
            <div className="flex flex-col gap-6">
              <h3 className="text-sm font-semibold text-gray-900 capitalize">
                Custom Icon
              </h3>
              <div className="py-24">
                <LinkComponent text="Link text" variant="dark" icon={ArrowPathIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Links;

