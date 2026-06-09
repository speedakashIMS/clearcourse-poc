import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import NavigationSimple from '../components/NavigationSimple';

function NavigationPage() {
  return (
    <div>
      <div className="bg-grey-200 py-32">
        <div className="container">
          {/* Header */}
          <div className="">
            <a
              href="/"
              className="inline-flex items-center gap-10 text-grey-600 hover:text-grey-950 mb-20 transition-colors"
            >
              <ArrowLeftIcon className="h-20 w-20" />
              Back to Home
            </a>
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Navigation Component</h1>
            <p className="text-body-default text-grey-600 mb-24">Navigation component examples and variants</p>
          </div>
        </div>
      </div>




      <div className="py-20">
        <div className="container space-y-40">
          <div className="text-grey-600">
            <h2 className="text-headings-h2 font-bold text-grey-950 mb-12">Contained</h2>
            <p className="text-body-default">Navigation with links aligned next to buttons.</p>
          </div>
        </div>

        <div className="">
          <NavigationSimple
            variant="light"
            logo="https://placehold.co/120x40?text=Logo"
            navItems={[
              { label: 'Text', href: '#' },
              {
                label: 'Text',
                href: '#',
                submenu: [
                  { label: 'Submenu item', href: '#' },
                  { label: 'Submenu item', href: '#' },
                  { label: 'Submenu item', href: '#' },
                  { label: 'Submenu item', href: '#' },
                  { label: 'Submenu item', href: '#' },
                  { label: 'Submenu item', href: '#' },
                ],
              },
              { label: 'Text', href: '#' },
              { label: 'Text', href: '#' },
              {
                label: 'Text',
                href: '#',
                submenu: [
                  { label: 'Submenu item', href: '#' },
                  { label: 'Submenu item', href: '#' },
                  { label: 'Submenu item', href: '#' },
                  { label: 'Submenu item', href: '#' },
                  { label: 'Submenu item', href: '#' },
                  { label: 'Submenu item', href: '#' },
                ],
              },
              { label: 'Text', href: '#' },
              { label: 'Text', href: '#' },
            ]}
            buttons={[
              { text: 'Button', variant: 'dark', href: '#' },
              { text: 'Button', variant: 'dark', href: '#' },
            ]}
          />
        </div>
      </div>
      
      <div className="container">
        <div className="text-grey-600">
          <h2 className="text-headings-h2 font-bold text-grey-950 mb-12">Full Width + Right Aligned Nav</h2>
          <p className="text-body-default">Full-width navigation with links aligned next to buttons.</p>
        </div>
      </div>

      <div className="">
        <NavigationSimple
          fullWidth
          alignNavRight
          variant="light"
          logo="https://placehold.co/120x40?text=Logo"
          navItems={[
            {
              label: 'Text',
              href: '#',
              submenu: [
                { label: 'Submenu item', href: '#' },
                { label: 'Submenu item', href: '#' },
                { label: 'Submenu item', href: '#' },
                { label: 'Submenu item', href: '#' },
                { label: 'Submenu item', href: '#' },
                { label: 'Submenu item', href: '#' },
              ],
            },
            { label: 'Text', href: '#' },
            {
              label: 'Text',
              href: '#',
              submenu: [
                { label: 'Submenu item', href: '#' },
                { label: 'Submenu item', href: '#' },
                { label: 'Submenu item', href: '#' },
              ],
            },
            { label: 'Text', href: '#' },
            { label: 'Text', href: '#' },
            { label: 'Text', href: '#' },
            { label: 'Text', href: '#' },
            { label: 'Text', href: '#' },
            { label: 'Text', href: '#' },
          ]}
          buttons={[
            { text: 'Button', variant: 'dark', href: '#' },
            { text: 'Button', variant: 'dark', href: '#' },
          ]}
        />
      </div>

    </div>
  );
}

export default NavigationPage;

