import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Table from "../components/Table";
import IntroductionHeader from "../components/IntroductionHeader";
import Buttons from "../components/Buttons";
import Spacer from "../components/Spacer";

export default function TablePricingPage() {
  const pricingColumns = ['', '££', '££1', '££2', '££3', '££4'];
  const pricingTabImages = [
    'https://placehold.co/48x48',
    'https://placehold.co/48x48',
    'https://placehold.co/48x48',
    'https://placehold.co/48x48',
    'https://placehold.co/48x48',
    'https://placehold.co/48x48',
  ];

  const pricingData = [
    ['Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem'],
    ['Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem'],
    ['Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem'],
    ['Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem'],
    ['Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem'],
    ['Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem'],
    ['Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem'],
    ['Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem'],
  ];

  const pricingButtons = [
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
    {
      text: 'Button',
      variant: 'dark',
      size: 'md',
    },
  ];

  return (
    <div className="bg-grey-50 pb-[200px]">
      <div className="bg-grey-200">
        <div className="container py-40">
          <a
            href="/"
            className="inline-flex items-center gap-10 text-grey-600 hover:text-grey-950 mb-20 transition-colors"
          >
            <ArrowLeftIcon className="h-20 w-20" />
            Back to Home
          </a>
          <div className="max-w-[760px]">
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-16">Pricing Table Component</h1>
            <p className="text-body-default text-grey-600 mb-24">
              Pricing table component for displaying pricing information in a clean table format.
            </p>
            <div className="flex flex-wrap gap-10">
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">Pricing</span>
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">Table</span>
            </div>
          </div>
        </div>
      </div>

      <SectionHeader
        title="Pricing Table"
        description="Display pricing information in a clean table format"
        badge="Pricing"
        badgeColor="green"
      />
      <div className="container py-24">
        <SamplePageContent />
        <Table
          variant="pricing"
          columns={pricingColumns}
          data={pricingData}
          tabImages={pricingTabImages}
          fullWidth={true}
        />
      </div>
      <Spacer height={40} />
      <Buttons
        buttons={pricingButtons.map(button => ({
          text: button.text,
          variant: button.variant ?? 'dark',
          href: '#',
        }))}
      />
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
