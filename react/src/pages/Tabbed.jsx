import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Tabbed from '../components/Tabbed';
import IntroductionHeader from '../components/IntroductionHeader';
import Buttons from '../components/Buttons';
import Spacer from '../components/Spacer';

export default function TabbedPage() {
  const tabs = Array.from({ length: 9 }, (_, i) => ({
    text: 'Tab Item',
    image: 'https://placehold.co/48x48',
    imageAlt: 'Tab Item',
  }));

  const buttons = [
    {
      text: 'Button',
      variant: 'dark',
      size: 'md',
    },
    {
      text: 'Button',
      variant: 'dark',
      size: 'md',
    },
  ];

  const tabsLozenges = tabs;

  const tabsBlocks = tabs.slice(0, 5).map(tab => ({ ...tab, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', content: null }));

  const tabsRow = tabs.map(tab => ({ ...tab, content: (
    <>
      <h2>Lorem ipsum dolor sit amet</h2>
      <h3>Lorem ipsum dolor sit amet</h3>
      <h4>Lorem ipsum dolor sit amet</h4>
      <h5>Lorem ipsum dolor sit amet</h5>
      <h6>Lorem ipsum dolor sit amet</h6>
      <p className="text-body-large">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p className="text-body-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </>
  ) }));

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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Tabbed Component</h1>
            <p className="text-body-default text-grey-600 mb-24">
              Tabbed component with flexible layouts and content switching. Supports three variants:
              lozenges (rounded buttons), blocks (square cards), and row (rectangular tabs).
            </p>
            <div className="flex flex-wrap gap-10">
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">Lozenges</span>
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">Blocks</span>
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">Row</span>
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">Fade Effect</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-grey-50 py-40">
        <div className="space-y-60">
          <section>
            <SectionHeader
              title="Tabbed Lozenges"
              description="Rounded button style tabs with image and text. Responsive sizing adapts to screen size."
              badge="Lozenges"
              badgeColor="blue"
            />
            <div className="container max-w-[1140px]">
              <SamplePageContent />
              <div className="container px-0">
                <Tabbed tabs={tabsLozenges} type="lozenges" />
              </div>
            </div>
            <Spacer height={40} />
          </section>

          <section>
            <SectionHeader
              title="Tabbed Blocks"
              description="Square block style tabs with image and text below. Active tab displays top border."
              badge="Blocks"
              badgeColor="purple"
            />
            <div className="container max-w-[1140px]">
              <SamplePageContent />
              <div className="container px-0">
                <Tabbed tabs={tabsBlocks} type="blocks" />
              </div>
            </div>
            <Spacer height={40} />
          </section>

          <section>
            <SectionHeader
              title="Tabbed Aside"
              description="Rectangular aside tabs with tabs on the left and content on the right. Mobile view uses dropdown menu."
              badge="Aside"
              badgeColor="indigo"
            />
            <div className="container max-w-[1140px]">
              <SamplePageContent />
              <div className="container px-0">
                <Tabbed tabs={tabsRow} type="aside" />
              </div>
            </div>
            <Spacer height={40} />
          </section>
        </div>
      </div>
    </div>
  );
}

// Reusable content component for sample pages
const SamplePageContent = () => (
  <>
    <IntroductionHeader
      title="Section Header"
      titleHeaderType="h2"
      className="px-0!"
    />
    <IntroductionHeader
      title="Section Header"
      titleHeaderType="h3"
      description={(
        <>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </>
      )}
      className="mb-36 px-0!"
    />
  </>
);

const SectionHeader = ({ title, description, badge, badgeColor = 'green' }) => {
  const badgeColorClasses = {
    green: 'bg-green-100 text-green-700',
    blue: 'bg-blue-100 text-blue-700',
    purple: 'bg-purple-100 text-purple-700',
    red: 'bg-red-100 text-red-700',
    yellow: 'bg-yellow-100 text-yellow-700',
    indigo: 'bg-indigo-100 text-indigo-700',
    orange: 'bg-orange-100 text-orange-700',
    teal: 'bg-teal-100 text-teal-700',
  };

  return (
    <div className="container py-24">
      <div className="rounded-20 border border-grey-200 bg-white p-20 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-10">
          <div>
            <h2 className="text-headings-h2 font-bold text-grey-950">{title}</h2>
            <p className="text-body-small text-grey-600">{description}</p>
          </div>
          {badge && (
            <span className={`rounded-full px-12 py-6 text-[12px] font-medium ${badgeColorClasses[badgeColor] || badgeColorClasses.green}`}>
              {badge}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
