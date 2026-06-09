import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Breadcrumbs from '../components/Breadcrumbs';

export default function BreadcrumbsPage() {
  const items = [
    { text: 'Text', href: '#' },
    { text: 'Text', href: '#' },
    { text: 'Text' },
  ];

  return (
    <div>
      <div className="bg-grey-200 py-32">
        <div className="container">
          <div>
            <a
              href="/"
              className="inline-flex items-center gap-10 text-grey-600 hover:text-grey-950 mb-20 transition-colors"
            >
              <ArrowLeftIcon className="h-20 w-20" />
              Back to Home
            </a>
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Breadcrumbs Component</h1>
            <p className="text-body-default text-grey-600 mb-24">Breadcrumb navigation with alignment options</p>
          </div>
        </div>
      </div>

      <div className="py-40">
        <div className="container space-y-40">
          <section className="bg-grey-500 p-20">
            <Breadcrumbs items={items} align="left" variant="light" />
          </section>
          <section className="bg-grey-500 p-20">
            <Breadcrumbs items={items} align="center" variant="light" />
          </section>
          <section className="bg-grey-500 p-20">
            <Breadcrumbs items={items} align="right" variant="light" />
          </section>
        </div>
      </div>
    </div>
  );
}

