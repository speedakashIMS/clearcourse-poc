import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Buttons from '../components/Buttons';

export default function ButtonsPage() {
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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Buttons Component</h1>
            <p className="text-body-default text-grey-600 mb-24">Grouped buttons component</p>
          </div>
        </div>
      </div>

      <section className="py-40">
        <div className="container">
          <Buttons
            buttons={[
              { text: 'Button Text', variant: 'dark', href: '#' },
              { text: 'Button Text', variant: 'dark', href: '#' },
              { text: 'Button Text', variant: 'dark', href: '#' },
            ]}
          />
        </div>
      </section>

      <section className="py-40">
        <div className="container">
          <Buttons
            buttons={[
              { text: 'Button Text', variant: 'dark', href: '#' },
              { text: 'Button Text', variant: 'dark', href: '#' },
              { text: 'Button Text', variant: 'dark', href: '#' },
              { text: 'Button Text', variant: 'dark', href: '#' },
              { text: 'Button Text', variant: 'dark', href: '#' },
              { text: 'Button Text', variant: 'dark', href: '#' },
              { text: 'Button Text', variant: 'dark', href: '#' },
              { text: 'Button Text', variant: 'dark', href: '#' },
            ]}
          />
        </div>
      </section>
    </div>
  );
}

