import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import CardWithMediaMolecule from "../components/molecules/CardWithMediaMolecule";
import lottieExampleData from "../assets/lottie-example.json";

export default function CardWithMediaMoleculePage() {

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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Card With Media Molecule</h1>
          </div>
        </div>
      </div>

      <div className="bg-grey-50 py-40">
        <div className="container">
          <div className="space-y-40">
            {/* Stacked Variant - Flushed */}
            <section>
              <h2 className="text-headings-h2 font-bold text-grey-950 mb-24">Stacked Layout - Flushed (Media Types)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-32">
                <CardWithMediaMolecule
                  stacked={true}
                  variant="flushed"
                  media="image"
                  imageUrl="https://picsum.photos/441/269"
                  title="Image Card"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  buttonText="Button"
                  buttonVariant="light"
                />
                <CardWithMediaMolecule
                  stacked={true}
                  variant="flushed"
                  media="video"
                  videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  title="Video Card"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  buttonText="Button"
                  buttonVariant="light"
                />
                <CardWithMediaMolecule
                  stacked={true}
                  variant="flushed"
                  media="lottie"
                  lottieData={lottieExampleData}
                  title="Lottie Card"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  buttonText="Button"
                  buttonVariant="light"
                />
                <CardWithMediaMolecule
                  stacked={true}
                  variant="flushed"
                  media="iframe"
                  iframeUrl="https://example.com"
                  title="Iframe Card"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  buttonText="Button"
                  buttonVariant="light"
                />
              </div>
            </section>

            {/* Stacked Variant - Framed */}
            <section>
              <h2 className="text-headings-h2 font-bold text-grey-950 mb-24">Stacked Layout - Framed (Media Types)</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-32">
                <CardWithMediaMolecule
                  stacked={true}
                  variant="framed"
                  media="image"
                  imageUrl="https://picsum.photos/441/269"
                  title="Image Card"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  buttonText="Button"
                  buttonVariant="light"
                />
                <CardWithMediaMolecule
                  stacked={true}
                  variant="framed"
                  media="video"
                  videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  title="Video Card"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  buttonText="Button"
                  buttonVariant="light"
                />
                <CardWithMediaMolecule
                  stacked={true}
                  variant="framed"
                  media="lottie"
                  lottieData={lottieExampleData}
                  title="Lottie Card"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  buttonText="Button"
                  buttonVariant="light"
                />
                <CardWithMediaMolecule
                  stacked={true}
                  variant="framed"
                  media="iframe"
                  iframeUrl="https://example.com"
                  title="Iframe Card"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  buttonText="Button"
                  buttonVariant="light"
                />
              </div>
            </section>

            {/* Side-by-side with image on left - Flushed */}
            <section>
              <h2 className="text-headings-h2 font-bold text-grey-950 mb-24">Side-by-side Layout - Image Left (Flushed)</h2>
              <div className="max-w-4xl">
                <CardWithMediaMolecule
                  stacked={false}
                  variant="flushed"
                  imagePosition="left"
                  media="image"
                  imageUrl="https://picsum.photos/441/269"
                  title="Card Title"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  buttonText="Button"
                  buttonVariant="light"
                />
              </div>
            </section>

            {/* Side-by-side with image on left - Framed */}
            <section>
              <h2 className="text-headings-h2 font-bold text-grey-950 mb-24">Side-by-side Layout - Image Left (Framed)</h2>
              <div className="max-w-4xl">
                <CardWithMediaMolecule
                  stacked={false}
                  variant="framed"
                  imagePosition="left"
                  media="image"
                  imageUrl="https://picsum.photos/441/269"
                  title="Card Title"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  buttonText="Button"
                  buttonVariant="light"
                />
              </div>
            </section>

            {/* Side-by-side with image on right - Flushed */}
            <section>
              <h2 className="text-headings-h2 font-bold text-grey-950 mb-24">Side-by-side Layout - Image Right (Flushed)</h2>
              <div className="max-w-4xl">
                <CardWithMediaMolecule
                  stacked={false}
                  variant="flushed"
                  imagePosition="right"
                  media="image"
                  imageUrl="https://picsum.photos/441/269"
                  title="Card Title"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  buttonText="Button"
                  buttonVariant="light"
                />
              </div>
            </section>

            {/* Side-by-side with image on right - Framed */}
            <section>
              <h2 className="text-headings-h2 font-bold text-grey-950 mb-24">Side-by-side Layout - Image Right (Framed)</h2>
              <div className="max-w-4xl">
                <CardWithMediaMolecule
                  stacked={false}
                  variant="framed"
                  imagePosition="right"
                  media="image"
                  imageUrl="https://picsum.photos/441/269"
                  title="Card Title"
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
