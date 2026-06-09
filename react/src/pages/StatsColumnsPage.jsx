import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import StatsColumns from "../components/StatsColumns";
import IntroductionHeader from "../components/IntroductionHeader";
import Spacer from "../components/Spacer";

const StatsColumnsPage = () => {
  const stats = Array.from({ length: 4 }, (_, index) => ({
    statMedia: {
      media: 'image',
      imageUrl: 'https://placehold.co/192x192?text=1&font=roboto',
      aspect: 'square',
    },
    stat: '1234',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  }));

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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Stats Columns</h1>
            <p className="text-body-default text-grey-600 mb-24">Grid layout with up to 4 stat columns.</p>
          </div>
        </div>
      </div>

      <div className="bg-grey-50 py-40">
        <div className="space-y-60">
          <section className="section py-40 bg-tertiary">
            <IntroductionHeader
              title="Columns - 1"
              description="Single stat in a column layout."
            />
            <Spacer height={40} />
            <StatsColumns stats={stats.slice(0, 1)} />
          </section>

          <section className="section py-40 bg-tertiary">
            <IntroductionHeader
              title="Columns - 2"
              description="Two stats displayed side by side."
            />
            <Spacer height={40} />
            <StatsColumns stats={stats.slice(0, 2)} />
          </section>

          <section className="section py-40 bg-primary">
            <IntroductionHeader
              title="Columns - 3"
              description="Three stats displayed in columns."
            />
            <Spacer height={40} />
            <StatsColumns stats={stats.slice(0, 3)} />
          </section>

          <section className="section py-40 bg-tertiary">
            <IntroductionHeader
              title="Columns - 4"
              description="Four stats displayed in columns."
            />
            <Spacer height={40} />
            <StatsColumns stats={stats} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default StatsColumnsPage;
