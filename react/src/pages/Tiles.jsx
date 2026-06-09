import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Tiles from "../components/Tiles";
import IntroductionHeader from "../components/IntroductionHeader";
import Buttons from "../components/Buttons";
import Spacer from "../components/Spacer";

export default function TilesPage() {
  const columnsList = [1, 2, 3, 4, 5, 6];

  const makeTiles = (count, seedStart = 1) => {
    return Array.from({ length: count }, (_, index) => ({
      title: `Card Title ${index + 1}`,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonText: 'Button',
      buttonVariant: 'dark',
      backgroundImage: `https://picsum.photos/900/600?random=${seedStart + index}`,
    }));
  };

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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Tiles Component</h1>
          </div>
        </div>
      </div>

      <div className="bg-grey-50 py-40">
        <div className="space-y-60">
          {columnsList.map((columns, index) => (
            <section key={`contained-${columns}`}>
              <IntroductionHeader
                title={`Contained Tiles in ${columns} Column${columns > 1 ? 's' : ''}`}
                titleHeaderType="h2"
                description={`Tiles displayed in a container with ${columns} column${columns > 1 ? 's' : ''}.`}
                descriptionSize="normal"
              />
              <Spacer mode="number" height={40} />
              <Tiles
                columns={columns}
                gridVariant="contained"
                data={makeTiles(columns, index * 10 + 1)}
              />
              <Spacer mode="number" height={40} />
              <Buttons
                buttons={[
                  { text: 'Button 1', variant: 'dark', href: '#' },
                  { text: 'Button 2', variant: 'dark', href: '#' },
                ]}
              />
            </section>
          ))}

          {columnsList.map((columns, index) => (
            <section key={`full-${columns}`}>
              <IntroductionHeader
                title={`Full Width Tiles in ${columns} Column${columns > 1 ? 's' : ''}`}
                titleHeaderType="h2"
                description={`Tiles displayed full width with ${columns} column${columns > 1 ? 's' : ''}.`}
                descriptionSize="normal"
              />
              <Spacer mode="number" height={40} />
              <Tiles
                columns={columns}
                gridVariant="full"
                data={makeTiles(columns, index * 10 + 100)}
              />
              <Spacer mode="number" height={40} />
              <Buttons
                buttons={[
                  { text: 'Button 1', variant: 'dark', href: '#' },
                  { text: 'Button 2', variant: 'dark', href: '#' },
                ]}
              />
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

