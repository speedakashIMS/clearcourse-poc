import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Archive from "../components/Archive";
import IntroductionHeader from "../components/IntroductionHeader";
import Spacer from "../components/Spacer";

export default function ArchivePage() {
  const makeImageCards = (count, seedStart = 1, stacked = true) => (
    Array.from({ length: count }, (_, index) => ({
      stacked,
      imagePosition: 'left',
      variant: 'flushed',
      media: 'image',
      imageUrl: `https://picsum.photos/441/269?random=${seedStart + index}`,
      title: `Card Title ${index + 1}`,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      buttonText: 'Read more',
      buttonVariant: 'light',
    }))
  );
  const buildTabs = ({ itemsPerPage, columns, stacked, seedStart }) => ([
    {
      key: 'news',
      text: 'News',
      cardType: 'image',
      columns,
      itemsPerPage,
      cards: makeImageCards(itemsPerPage * 3, seedStart, stacked),
    },
    {
      key: 'events',
      text: 'Events',
      cardType: 'image',
      columns,
      itemsPerPage,
      cards: makeImageCards(itemsPerPage * 2, seedStart + 50, stacked),
    },
  ]);

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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Archive Component</h1>
            <p className="text-body-default text-grey-600 mb-24">Tabbed archive with cards and pagination</p>
          </div>
        </div>
      </div>

      <section className="py-40 bg-grey-50">
        <IntroductionHeader
          title="Row Tabs - 3 Row Cards Per Page"
          description="Row tabs with non-stacked cards (one per row)."
        />
        <Spacer mode="number" height={80} />
        <Archive
          tabs={buildTabs({ itemsPerPage: 3, columns: 1, stacked: false, seedStart: 10 })}
          tabType="tab-aside"
        />
      </section>

      <section className="py-40">
        <IntroductionHeader
          title="Row Tabs - 9 Stacked Cards (2 in a Row)"
          description="Row tabs with stacked cards and 2 columns."
        />
        <Spacer mode="number" height={80} />
        <Archive
          tabs={buildTabs({ itemsPerPage: 6, columns: 2, stacked: true, seedStart: 70 })}
          tabType="tab-aside"
        />
      </section>

      <section className="py-40 bg-grey-50">
        <IntroductionHeader
          title="Row Tabs - 12 Stacked Cards (3 in a Row)"
          description="Row tabs with stacked cards and 3 columns."
        />
        <Spacer mode="number" height={80} />
        <Archive
          tabs={buildTabs({ itemsPerPage: 9, columns: 3, stacked: true, seedStart: 130 })}
          tabType="tab-aside"
        />
      </section>

      <section className="py-40">
        <IntroductionHeader
          title="Row Tabs - 16 Stacked Cards (4 in a Row)"
          description="Row tabs with stacked cards and 4 columns."
        />
        <Spacer mode="number" height={80} />
        <Archive
          tabs={buildTabs({ itemsPerPage: 12, columns: 4, stacked: true, seedStart: 170 })}
          tabType="tab-aside"
        />
      </section>

      <section className="py-40">
        <IntroductionHeader
          title="Lozenges Tabs - 3 Row Cards Per Page"
          description="Lozenges tabs with non-stacked cards (one per row)."
        />
        <Spacer mode="number" height={80} />
        <Archive
          tabs={buildTabs({ itemsPerPage: 3, columns: 1, stacked: false, seedStart: 190 })}
          tabType="tab-top"
        />
      </section>

      <section className="py-40 bg-grey-50">
        <IntroductionHeader
          title="Lozenges Tabs - 9 Stacked Cards (2 in a Row)"
          description="Lozenges tabs with stacked cards and 2 columns."
        />
        <Spacer mode="number" height={80} />
        <Archive
          tabs={buildTabs({ itemsPerPage: 6, columns: 2, stacked: true, seedStart: 250 })}
          tabType="tab-top"
        />
      </section>

      <section className="py-40">
        <IntroductionHeader
          title="Lozenges Tabs - 12 Stacked Cards (3 in a Row)"
          description="Lozenges tabs with stacked cards and 3 columns."
        />
        <Spacer mode="number" height={80} />
        <Archive
          tabs={buildTabs({ itemsPerPage: 9, columns: 3, stacked: true, seedStart: 310 })}
          tabType="tab-top"
        />
      </section>

      <section className="py-40 bg-grey-50">
        <IntroductionHeader
          title="Lozenges Tabs - 16 Stacked Cards (4 in a Row)"
          description="Lozenges tabs with stacked cards and 4 columns."
        />
        <Spacer mode="number" height={80} />
        <Archive
          tabs={buildTabs({ itemsPerPage: 12, columns: 4, stacked: true, seedStart: 370 })}
          tabType="tab-top"
        />
      </section>
    </div>
  );
}

