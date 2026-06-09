import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Footer from "../components/Footer";
import IntroductionHeader from "../components/IntroductionHeader";
import Spacer from "../components/Spacer";

export default function FooterPage() {
  const longLinks = [
    { label: 'Link', href: '#' },
    { label: 'Link', href: '#' },
    { label: 'Link', href: '#' },
    { label: 'Link', href: '#' },
    { label: 'Link', href: '#' },
    { label: 'Link', href: '#' },
  ];

  const columns = [
    {
      header: 'Column 1',
      links: longLinks,
    },
    {
      header: 'Column 2',
      links: longLinks,
    },
    {
      header: 'Column 3',
      links: longLinks,
    },
    {
      header: 'Column 4',
      links: longLinks,
    },
    {
      header: 'Column 5',
      links: longLinks,
    },
  ];

  const socialMedia = [
    ['facebook', '#'],
    ['google', '#'],
    ['x', '#'],
    ['instagram', '#'],
    ['linkedin', '#'],
  ];

  return (
    <div>
      <div className="bg-grey-200 py-32">
        <div className="container">
          <div className="">
            <a
              href="/"
              className="inline-flex items-center gap-10 text-grey-600 hover:text-grey-950 mb-20 transition-colors"
            >
              <ArrowLeftIcon className="h-20 w-20" />
              Back to Home
            </a>
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Footer Component</h1>
            <p className="text-body-default text-grey-600 mb-24">Logo, text, socials, link columns, and bottom bar</p>
          </div>
        </div>
      </div>

      <section className="py-40 bg-grey-50">
        <IntroductionHeader title="2 Columns" />
        <Spacer mode="number" height={80} />
        <Footer
          logo="https://placehold.co/120x40?text=Logo"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          socialMedia={socialMedia}
          columns={columns}
          columnsCount={2}
          bottomLeft="Lorem ipsum dolor sit amet, consectetur adipiscing"
          bottomRight="Lorem ipsum dolor sit amet, consectetur adipiscing"
        />
      </section>

      <section className="py-40">
        <IntroductionHeader title="3 Columns" />
        <Spacer mode="number" height={80} />
        <Footer
          logo="https://placehold.co/120x40?text=Logo"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          socialMedia={socialMedia}
          columns={columns}
          columnsCount={3}
          bottomLeft="Lorem ipsum dolor sit amet, consectetur adipiscing"
          bottomRight="Lorem ipsum dolor sit amet, consectetur adipiscing"
        />
      </section>

      <section className="py-40 bg-grey-50">
        <IntroductionHeader title="4 Columns" />
        <Spacer mode="number" height={80} />
        <Footer
          logo="https://placehold.co/120x40?text=Logo"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          socialMedia={socialMedia}
          columns={columns}
          columnsCount={4}
          bottomLeft="Lorem ipsum dolor sit amet, consectetur adipiscing"
          bottomRight="Lorem ipsum dolor sit amet, consectetur adipiscing"
        />
      </section>

      <section className="py-40">
        <IntroductionHeader title="5 Columns" />
        <Spacer mode="number" height={80} />
        <Footer
          logo="https://placehold.co/120x40?text=Logo"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          socialMedia={socialMedia}
          columns={columns}
          columnsCount={5}
          bottomLeft="Lorem ipsum dolor sit amet, consectetur adipiscing"
          bottomRight="Lorem ipsum dolor sit amet, consectetur adipiscing"
        />
      </section>
    </div>
  );
}

