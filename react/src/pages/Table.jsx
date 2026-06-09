import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Table from '../components/Table';
import IntroductionHeader from '../components/IntroductionHeader';
import Spacer from '../components/Spacer';

export default function TablePage() {
  const normalColumns = ['Feature', 'Basic', 'Pro', 'Enterprise'];
  const normalData = [
    ['Support', 'Email', 'Email', '24/7'],
    ['Storage', '5 GB', '25 GB', '100 GB'],
    ['Users', '1', '5', 'Unlimited'],
  ];

  const pricingColumns = ['Plan', 'Starter', 'Growth', 'Scale'];
  const pricingData = [
    ['Price', '$9/mo', '$29/mo', '$99/mo'],
    ['Features', 'Up to 10', 'Up to 50', 'Unlimited'],
    ['Support', 'Email', 'Priority', 'Dedicated'],
  ];

  const comparisonColumns = ['', 'Header', 'Header', 'Header', 'Header'];
  const comparisonData = [
    ['Lorem', true, true, false, true],
    ['Ipsum', false, true, true, true],
    ['Dolor', true, false, true, true],
    ['Sit amet', true, true, true, false],
    ['Consectetur', true, true, true, true],
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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Table Component</h1>
            <p className="text-body-default text-grey-600 mb-24">
              Table with three variants: normal, pricing (large headers, tabbed on mobile), and comparison (checkmarks, carousel on mobile).
            </p>
          </div>
        </div>
      </div>

      <div className="bg-grey-50 py-40">
        <div className="space-y-60">
          <section>
            <IntroductionHeader
              title="Normal table"
              description="Plain table layout. Same on all screen sizes."
            />
            <Spacer height={40} />
            <Table
              variant="normal"
              columns={normalColumns}
              data={normalData}
              fullWidth
            />
          </section>

          <section>
            <IntroductionHeader
              title="Pricing table"
              description="Large display headers. On mobile: two columns in view with Tabbed Lozenges to switch between plan columns."
            />
            <Spacer height={40} />
            <Table
              variant="pricing"
              columns={pricingColumns}
              data={pricingData}
              tabImages={[]}
              fullWidth
            />
          </section>

          <section>
            <IntroductionHeader
              title="Comparison table"
              description="H4 headings, checkmark or dash per cell. On mobile: each comparison column is a carousel slide with row label above the icon."
            />
            <Spacer height={40} />
            <Table
              variant="comparison"
              columns={comparisonColumns}
              data={comparisonData}
              fullWidth
            />
          </section>
        </div>
      </div>
    </div>
  );
}
