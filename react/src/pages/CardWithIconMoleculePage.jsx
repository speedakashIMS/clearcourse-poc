import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import CardWithIconMolecule from "../components/molecules/CardWithIconMolecule";
import lottieExampleData from "../assets/lottie-example.json";

export default function CardWithIconMoleculePage() {

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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Card With Icon Molecule</h1>
          </div>
        </div>
      </div>

      <div className="bg-grey-50 py-40">
        <div className="container">
          <div className="space-y-40">
            {/* Stacked Layout - Media Types */}
            <section>
              <h2 className="text-headings-h2 font-bold text-grey-950 mb-24">Stacked Layout (Media Types)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-32">
                <CardWithIconMolecule
                  stacked={true}
                  media="image"
                  imageUrl="https://picsum.photos/100/100"
                  title="Image Card"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  buttonText="Button"
                  buttonVariant="light"
                />
                <CardWithIconMolecule
                  stacked={true}
                  media="video"
                  videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  title="Video Card"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  buttonText="Button"
                  buttonVariant="light"
                />
                <CardWithIconMolecule
                  stacked={true}
                  media="lottie"
                  lottieData={lottieExampleData}
                  title="Lottie Card"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  buttonText="Button"
                  buttonVariant="light"
                />
                <CardWithIconMolecule
                  stacked={true}
                  media="iframe"
                  iframeUrl="https://example.com"
                  title="Iframe Card"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  buttonText="Button"
                  buttonVariant="light"
                />
              </div>
            </section>

            {/* Side-by-side Layout - Icon Left */}
            <section>
              <h2 className="text-headings-h2 font-bold text-grey-950 mb-24">Side-by-side Layout - Icon Left</h2>
              <div className="max-w-4xl">
                <CardWithIconMolecule
                  stacked={false}
                  iconPosition="left"
                  media="image"
                  imageUrl="https://picsum.photos/100/100"
                  title="Card Title"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  buttonText="Button"
                  buttonVariant="light"
                />
              </div>
            </section>

            {/* Side-by-side Layout - Icon Right */}
            <section>
              <h2 className="text-headings-h2 font-bold text-grey-950 mb-24">Side-by-side Layout - Icon Right</h2>
              <div className="max-w-4xl">
                <CardWithIconMolecule
                  stacked={false}
                  iconPosition="right"
                  media="image"
                  imageUrl="https://picsum.photos/100/100"
                  title="Card Title"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  buttonText="Button"
                  buttonVariant="light"
                />
              </div>
            </section>

            {/* Multiple Cards - Side-by-side Layout */}
            <section>
              <h2 className="text-headings-h2 font-bold text-grey-950 mb-24">Multiple Cards - Side-by-side Layout</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
                <CardWithIconMolecule
                  stacked={false}
                  iconPosition="left"
                  media="image"
                  imageUrl="https://picsum.photos/100/100"
                  title="Card Title 1"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  buttonText="Button"
                  buttonVariant="light"
                />
                <CardWithIconMolecule
                  stacked={false}
                  iconPosition="right"
                  media="image"
                  imageUrl="https://picsum.photos/100/100"
                  title="Card Title 2"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  buttonText="Button"
                  buttonVariant="light"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
