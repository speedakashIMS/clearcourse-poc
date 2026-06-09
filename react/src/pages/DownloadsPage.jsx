import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Downloads from "../components/Downloads";
import IntroductionHeader from "../components/IntroductionHeader";
import Spacer from "../components/Spacer";

const baseItem = (n) => ({
  key: `item-${n}`,
  media: {
    imageUrl: `https://picsum.photos/id/50${n}/400/800`,
    title: `Card ${n} image`,
  },
  title: `Card ${n} title`,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  logoUrl: 'https://placehold.co/151x48?text=Logo',
  buttons: [
    { text: 'Button', href: '#' },
    { text: 'Button', href: '#' },
    { text: 'Button', href: '#' },
  ],
  accordions: [
    { title: 'Section 1', content: '<p>Accordion content for card ' + n + '.</p>' },
    { title: 'Section 2', content: '<p>More content here.</p>' },
    // { title: 'Section 3', content: '<p>More accordion content for card ' + n + '.</p>' },
    // { title: 'Section 4', content: '<p>Even more content here.</p>' },
    // { title: 'Section 5', content: '<p>More and more content for card ' + n + '.</p>' },
    // { title: 'Section 6', content: '<p>Last accordion content for card ' + n + '.</p>' },
  ],
});

export default function DownloadsPage() {
  const items2 = [baseItem(1), baseItem(2)];
  const items3 = [
    baseItem(1),
    {
      ...baseItem(2),
      accordions: baseItem(2).accordions.slice(0, 2),
    },
    baseItem(3),
  ];
  const items4 = [baseItem(1), baseItem(2), baseItem(3), baseItem(4), baseItem(5)];
  const itemsRow = [baseItem(1), baseItem(2)];

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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Downloads Component</h1>
            <p className="text-body-default text-grey-600 mb-24">
              Lists of download cards with title, description, buttons, and accordion.
              Choose vertical (grid) or horizontal layout; set columns when vertical.
            </p>
            <div className="flex flex-wrap gap-10">
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">Vertical</span>
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">Horizontal</span>
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">Columns</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-grey-50 py-40">
        <div className="space-y-60">
          <section>
            <IntroductionHeader
              title="2 columns vertical"
              description="Vertical cards in a 2-column grid."
            />
            <Spacer height={40} />
            <Downloads
              variant="vertical"
              columns={2}
              items={items2}
            />
            <Spacer height={40} />
          </section>

          <section>
            <IntroductionHeader
              title="3 columns vertical"
              description="Vertical cards in a 3-column grid."
            />
            <Spacer height={40} />
            <Downloads
              variant="vertical"
              columns={3}
              items={items3}
            />
            <Spacer height={40} />
          </section>

          <section>
            <IntroductionHeader
              title="4 columns vertical"
              description="Vertical cards in a 4-column grid."
            />
            <Spacer height={40} />
            <Downloads
              variant="vertical"
              columns={4}
              items={items4}
            />
            <Spacer height={40} />
          </section>

          <section>
            <IntroductionHeader
              title="Horizontal (media left, content right)"
              description="Single column list; each item is horizontal with media on the left and content on the right."
            />
            <Spacer height={40} />
            <Downloads
              variant="horizontal"
              items={itemsRow}
            />
            <Spacer height={40} />
          </section>
        </div>
      </div>
    </div>
  );
}

