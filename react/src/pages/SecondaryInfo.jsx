import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import SecondaryInfo from '../components/SecondaryInfo';
import Spacer from '../components/Spacer'; 

export default function SecondaryInfoPage() {
  const socialMedia = [
    ['facebook', 'https://facebook.com'],
    ['google', 'https://google.com'],
    ['x', 'https://x.com'],
    ['instagram', 'https://instagram.com'],
    ['linkedin', 'https://linkedin.com'],
  ];

  const navigationItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Secondary Info</h1>
            <p className="text-body-default text-grey-600 mb-24">Secondary info and sub-navigation variants</p>
          </div>
        </div>
      </div>

      <section className="py-40">
        <div className="container">
          <h2 className="text-headings-h2 font-bold text-grey-950 mb-12">Secondary Info (Dark)</h2>
        </div>
        <div className="bg-grey-200">
          <SecondaryInfo
            variant="secondary-info"
            text="Text"
            phone="+1 (555) 123-4567"
            email="info@example.com"
            socialMedia={socialMedia}
            colorVariant="dark"
          />
        </div>
      </section>

      <section className="py-40">
        <div className="container">
          <h2 className="text-headings-h2 font-bold text-grey-950 mb-12">Secondary Info (Light)</h2>
        </div>
        <div className="bg-grey-950">
          <SecondaryInfo
            variant="secondary-info"
            text="Text"
            phone="+1 (555) 123-4567"
            email="info@example.com"
            socialMedia={socialMedia}
            colorVariant="light"
          />
        </div>
      </section>

      <section className="py-40">
        <div className="container">
          <h2 className="text-headings-h2 font-bold text-grey-950 mb-12">Sub Navigation (Dark)</h2>
        </div>
        <div className="bg-grey-200">
          <SecondaryInfo
            variant="sub-navigation"
            logo="https://placehold.co/100x20?text=Logo"
            navigation={navigationItems}
            colorVariant="dark"
          />
        </div>
      </section>

      <section className="py-40">
        <div className="container">
          <h2 className="text-headings-h2 font-bold text-grey-950 mb-12">Sub Navigation (Light)</h2>
        </div>
        <div className="bg-grey-950">
          <SecondaryInfo
            variant="sub-navigation"
            logo="https://placehold.co/100x20?text=Logo"
            navigation={navigationItems}
            colorVariant="light"
          />
        </div>
      </section>
    </div>
  );
}
