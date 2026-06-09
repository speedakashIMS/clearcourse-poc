import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { 
  Squares2X2Icon, 
  CubeIcon,
  PuzzlePieceIcon,
  PaintBrushIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';

function Home() {
  const [componentsSearch, setComponentsSearch] = useState('');
  const components = [
    {
      name: 'Accordion',
      path: '/accordions',
    },
      {
        name: 'Cards Media',
        path: '/cards-media',
      },
    {
      name: 'Cards Icon',
      path: '/cards-icon',
    },
    {
      name: 'GiftPro Card and Text',
      path: '/giftpro-card-and-text',
    },
    {
      name: 'Buttons',
      path: '/buttons',
    },
    {
      name: 'Text and Media',
      path: '/text-and-media',
    },
    {
      name: 'Introduction Header',
      path: '/introduction-header',
    },
    {
      name: 'Hero Article',
      path: '/hero-article',
    },
    {
      name: 'Hero Background Image',
      path: '/hero-background-image',
    },
    {
      name: 'Hero',
      path: '/hero',
    },
    {
      name: 'Media',
      path: '/media',
    },
    {
      name: 'Pop Up Modal',
      path: '/pop-up-modal',
    },
    {
      name: 'Video',
      path: '/video',
    },
    {
      name: 'Navigation Simple',
      path: '/navigation-simple',  
    },
    {
      name: 'Navigation Mega',
      path: '/navigation-mega',
    },
    {
      name: 'Downloads',
      path: '/downloads',
    },
    {
      name: 'Logos',
      path: '/logos',
    },
    {
      name: 'Logos Framed',
      path: '/logos-framed',
    },
    {
      name: 'Map Locations',
      path: '/map-locations',
    },
    {
      name: 'Map With Info',
      path: '/map-with-info',
    },
    {
      name: 'Spacer',
      path: '/spacer',
    },
    {
      name: 'Tiles',
      path: '/tiles',
    },
    {
      name: 'Stats Columns',
      path: '/stats-columns',
    },
    {
      name: 'Stats With Media',
      path: '/stats-with-media',
    },
    {
      name: 'Stats With Testimonials',
      path: '/stats-with-testimonials',
    },
    {
      name: 'Tabbed',
      path: '/tabbed',
    },
    {
      name: 'Table Comparison',
      path: '/comparison-table',
    },
    {
      name: 'Table Pricing',
      path: '/pricing-table',
    },
    {
      name: 'Tables',
      path: '/table',
    },
    {
      name: 'CTA',
      path: '/cta',
    },
    {
      name: 'Archive',
      path: '/archive',
    },
    {
      name: 'News Grid',
      path: '/news-grid',
    },
    {
      name: 'Secondary Info',
      path: '/secondary-info',
    },
    {
      name: 'Testimonial',
      path: '/testimonial',
    },
    {
      name: 'Trust',
      path: '/trust',
    },
    {
      name: 'Awards Cards',
      path: '/awards-cards',
    },
    {
      name: 'Awards Media',
      path: '/awards-media',
    },
    {
      name: 'Footer',
      path: '/footer',
    },
    {
      name: 'Rich Text',
      path: '/rich-text',
    },
    {
      name: 'Breadcrumbs',
      path: '/breadcrumbs',
    },
    {
      name: 'Event and Webinar',
      path: '/event-and-webinar',
    },
    {
      name: 'Form',
      path: '/form',
    },
    // Add more components here
  ];

  const partials = [
    {
      name: 'Accordion',
      path: '/molecules/accordion',
    },
    {
      name: 'Card With Media',
      path: '/molecules/card-with-media',
    },
    {
      name: 'Card With Icon',
      path: '/molecules/card-with-icon',
    },
    {
      name: 'Media',
      path: '/molecules/media',
    },
    {
      name: 'Downloads',
      path: '/molecules/download-list',
    },
    {
      name: 'Value',
      path: '/molecules/value',
    },
    {
      name: 'Map Location',
      path: '/molecules/map-location',
    },
    {
      name: 'Tile',
      path: '/molecules/tile',
    },
    {
      name: 'Stats',
      path: '/molecules/stats',
    },
    {
      name: 'Tabbed',
      path: '/molecules/tabbed',
    },
    {
      name: 'CTA Text',
      path: '/molecules/cta-text',
    },
    {
      name: 'News',
      path: '/molecules/news',
    },
    {
      name: 'Award Card',
      path: '/molecules/award-card',
    },
    {
      name: 'Award Media',
      path: '/molecules/award-media',
    },
    {
      name: 'Event and Webinar',
      path: '/molecules/event-and-webinar',
    },
    {
      name: 'Form',
      path: '/molecules/form',
    },
    {
      name: 'Pagination',
      path: '/molecules/pagination',
    },
    {
      name: 'Testimonial',
      path: '/molecules/testimonial',
    },
  ]

  const sortedPartials = useMemo(() => {
    return [...partials].sort((a, b) => a.name.localeCompare(b.name));
  }, [partials]);

  const sortedComponents = useMemo(() => {
    return [...components].sort((a, b) => a.name.localeCompare(b.name));
  }, [components]);

  const filteredComponents = useMemo(() => {
    if (!componentsSearch.trim()) {
      return sortedComponents;
    }

    const term = componentsSearch.toLowerCase();
    return sortedComponents.filter((component) =>
      component.name.toLowerCase().includes(term)
    );
  }, [componentsSearch, sortedComponents]);

  return (
    <div className="min-h-screen bg-grey-50">

      <div className="bg-grey-200 py-32">
        <div className="container">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-display-l font-bold text-grey-950">
              IMS Foundational Component Kit
            </h1>
            <p className="text-grey-600">
              React + Tailwind CSS + Vite + Heroicons
            </p>
          </div>
        </div>
      </div>

      <div className="container py-40">
        {/* Main Content - Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-24 items-stretch">
          {/* Left Column - Molecules and Partials */}
          <div className="w-full lg:w-1/3 space-y-24">
            {/* Molecules Section */}
            <section>
              <div className="flex items-center gap-10 mb-24">
                <PuzzlePieceIcon className="h-32 w-32 text-grey-950" />
                <h2 className="text-headings-h1 font-bold text-grey-950">Molecules</h2>
              </div>
              <div className="bg-white rounded-20 p-40 border border-grey-200">
                <ul className="">
                  {sortedPartials.map((component, index) => (
                    <li key={component.path} className="border-b border-grey-200">
                      <Link
                        to={component.path}
                        className="flex items-center justify-between py-16 px-20  hover:bg-grey-50 transition-colors group"
                      >
                        <span className="text-body-default text-grey-950 group-hover:text-grey-950 font-medium">
                          {component.name}
                        </span>
                        <svg className="w-16 h-16 text-grey-400 group-hover:text-grey-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Utilities Section */}
            <section>
              <div className="flex items-center gap-10 mb-24">
                <PaintBrushIcon className="h-32 w-32 text-grey-950" />
                <h2 className="text-headings-h1 font-bold text-grey-950">Utilities</h2>
              </div>
              <div className="space-y-24">
                {/* Icons Card */}
                <Link
                  to="/icons"
                  className="bg-white rounded-20 p-40 border border-grey-200 hover:border-grey-400 transition-colors group block"
                >
                  <div className="flex items-center gap-10 mb-20">
                    <Squares2X2Icon className="h-24 w-24 text-grey-950 group-hover:text-grey-600 transition-colors" />
                    <h3 className="text-headings-h3 font-bold text-grey-950">Icons</h3>
                  </div>
                  <p className="text-body-default text-grey-600 mb-20">
                    Browse all available Heroicons in outline, solid, and mini styles.
                  </p>
                  <div className="flex items-center gap-8 text-body-small text-grey-500 group-hover:text-grey-600 transition-colors">
                    View Icons
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>

                {/* Buttons Card */}
                <Link
                  to="/buttons-variants"
                  className="bg-white rounded-20 p-40 border border-grey-200 hover:border-grey-400 transition-colors group block"
                >
                  <div className="flex items-center gap-10 mb-20">
                    <div className="h-24 w-24 flex items-center justify-center">
                      <div className="w-16 h-16 bg-grey-950 rounded-4 group-hover:bg-grey-600 transition-colors"></div>
                    </div>
                    <h3 className="text-headings-h3 font-bold text-grey-950">Buttons</h3>
                  </div>
                  <p className="text-body-default text-grey-600 mb-20">
                    Explore all button variants, sizes, and states.
                  </p>
                  <div className="flex items-center gap-8 text-body-small text-grey-500 group-hover:text-grey-600 transition-colors">
                    View Buttons
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>

                {/* Typography Card */}
                <Link
                  to="/typography"
                  className="bg-white rounded-20 p-40 border border-grey-200 hover:border-grey-400 transition-colors group block"
                >
                  <div className="flex items-center gap-10 mb-20">
                    <div className="h-24 w-24 flex items-center justify-center">
                      <div className="text-headings-h3 font-bold text-grey-950 group-hover:text-grey-600 transition-colors">Aa</div>
                    </div>
                    <h3 className="text-headings-h3 font-bold text-grey-950">Typography</h3>
                  </div>
                  <p className="text-body-default text-grey-600 mb-20">
                    View all typography styles including display, headings, and body text.
                  </p>
                  <div className="flex items-center gap-8 text-body-small text-grey-500 group-hover:text-grey-600 transition-colors">
                    View Typography
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>

                {/* Links Card */}
                <Link
                  to="/links"
                  className="bg-white rounded-20 p-40 border border-grey-200 hover:border-grey-400 transition-colors group block"
                >
                  <div className="flex items-center gap-10 mb-20">
                    <div className="h-24 w-24 flex items-center justify-center">
                      <svg className="w-16 h-16 text-grey-950 group-hover:text-grey-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <h3 className="text-headings-h3 font-bold text-grey-950">Links</h3>
                  </div>
                  <p className="text-body-default text-grey-600 mb-20">
                    Explore all link variants with icon support.
                  </p>
                  <div className="flex items-center gap-8 text-body-small text-grey-500 group-hover:text-grey-600 transition-colors">
                    View Links
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </div>
            </section>
          </div>

          {/* Right Column - Components */}
          <div className="w-full lg:w-2/3 flex flex-col">
            <section className="flex flex-col flex-1">
              <div className="flex items-center gap-10 mb-24">
                <CubeIcon className="h-32 w-32 text-grey-950" />
                <h2 className="text-headings-h1 font-bold text-grey-950">Components</h2>
              </div>
              <div className="relative mb-24">
                <div className="absolute inset-y-0 left-0 flex items-center pl-16 pointer-events-none">
                  <MagnifyingGlassIcon className="h-20 w-20 text-grey-400" />
                </div>
                <input
                  type="text"
                  value={componentsSearch}
                  onChange={(e) => setComponentsSearch(e.target.value)}
                  placeholder="Search components..."
                  className="w-full pl-48 pr-16 py-12 text-body-default bg-white border border-grey-200 rounded-10 text-grey-800 placeholder-grey-400 focus:outline-none focus:ring-2 focus:ring-grey-400 focus:border-transparent"
                />
              </div>
              <div className="bg-white rounded-20 p-40 border border-grey-200 flex-1">
                <ul>
                  {filteredComponents.map((component) => (
                    <li key={component.path} className="border-b border-grey-200">
                      <Link
                        to={component.path}
                        className="flex items-center justify-between py-16 px-20  hover:bg-grey-50 transition-colors group"
                      >
                        <span className="text-body-default text-grey-950 group-hover:text-grey-950 font-medium">
                          {component.name}
                        </span>
                        <svg className="w-16 h-16 text-grey-400 group-hover:text-grey-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

