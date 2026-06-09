import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import NewsGrid from "../components/NewsGrid";
import IntroductionHeader from "../components/IntroductionHeader";
import Spacer from "../components/Spacer";

export default function NewsGridPage() {
  const items = [
    {
      imageUrl: 'https://picsum.photos/640/360?random=1',
      imageAlt: 'News image',
      title: 'Short',
      description: 'Brief.',
      linkText: 'Read more',
      linkHref: '#',
    },
    {
      imageUrl: 'https://picsum.photos/640/360?random=2',
      imageAlt: 'News image',
      title: 'A Medium-Length Headline Here',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      linkText: 'Read more',
      linkHref: '#',
    },
    {
      imageUrl: 'https://picsum.photos/640/360?random=3',
      imageAlt: 'News image',
      title: 'This Is a Much Longer News Title That Might Wrap Onto Two or Three Lines',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      linkText: 'Read more',
      linkHref: '#',
    },
    {
      imageUrl: 'https://picsum.photos/640/360?random=4',
      imageAlt: 'News image',
      title: 'Two lines',
      description: 'Short text.',
      linkText: 'Read more',
      linkHref: '#',
    },
    {
      imageUrl: 'https://picsum.photos/640/360?random=5',
      imageAlt: 'News image',
      title: 'Average Title',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.',
      linkText: 'Read more',
      linkHref: '#',
    },
    {
      imageUrl: 'https://picsum.photos/640/360?random=6',
      imageAlt: 'News image',
      title: 'An Extremely Long Headline That Demonstrates How the Card Layout Behaves When Title Text Spans Multiple Lines in the Grid',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      linkText: 'Read more',
      linkHref: '#',
    },
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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">News Grid Component</h1>
            <p className="text-body-default text-grey-600 mb-24">News grid using news molecule</p>
          </div>
        </div>
      </div>

      <section className="py-40 bg-grey-50">
        <IntroductionHeader
          title="Stacked - 2 Columns"
          description="Stacked news cards in 2 columns."
        />
        <Spacer mode="number" height={80} />
        <NewsGrid variant="stacked" columns={2} items={items.slice(0, 2)} />
      </section>

      <section className="py-40">
        <IntroductionHeader
          title="Stacked - 3 Columns"
          description="Stacked news cards in 3 columns."
        />
        <Spacer mode="number" height={80} />
        <NewsGrid variant="stacked" columns={3} items={items.slice(0, 3)} />
      </section>

      <section className="py-40 bg-grey-50">
        <IntroductionHeader
          title="Stacked - 4 Columns"
          description="Stacked news cards in 4 columns."
        />
        <Spacer mode="number" height={80} />
        <NewsGrid variant="stacked" columns={4} items={items.slice(0, 4)} />
      </section>

      <section className="py-40">
        <IntroductionHeader
          title="Row - 1 Column"
          description="Row layout with single column."
        />
        <Spacer mode="number" height={80} />
        <NewsGrid variant="row" columns={1} items={items.slice(0, 1)} />
      </section>

      <section className="py-40 bg-grey-50">
        <IntroductionHeader
          title="Row - 2 Columns"
          description="Row layout with two columns."
        />
        <Spacer mode="number" height={80} />
        <NewsGrid variant="row" columns={2} items={items.slice(0, 2)} />
      </section>

      <section className="py-40">
        <IntroductionHeader
          title="Carousel - Stacked (3 Columns)"
          description="Carousel showing stacked cards per column setting."
        />
        <Spacer mode="number" height={80} />
        <NewsGrid variant="stacked" columns={3} carousel items={items} />
      </section>

      <section className="py-40 bg-grey-50">
        <IntroductionHeader
          title="Carousel - Stacked (2 Columns)"
          description="Carousel showing stacked cards per column setting."
        />
        <Spacer mode="number" height={80} />
        <NewsGrid variant="stacked" columns={2} carousel items={items} />
      </section>

      <section className="py-40">
        <IntroductionHeader
          title="Carousel - Row (2 Columns)"
          description="Carousel showing row cards per column setting."
        />
        <Spacer mode="number" height={80} />
        <NewsGrid variant="row" columns={2} carousel items={items} />
      </section>

      <section className="py-40 bg-grey-50">
        <IntroductionHeader
          title="Carousel - Row (1 Column)"
          description="Carousel showing row cards per column setting."
        />
        <Spacer mode="number" height={80} />
        <NewsGrid variant="row" columns={1} carousel items={items} />
      </section>
    </div>
  );
}

