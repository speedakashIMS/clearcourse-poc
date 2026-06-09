import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import TileMolecule from "../components/molecules/TileMolecule";

export default function TileMoleculePage() {

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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Tile Molecule</h1>
          </div>
        </div>
      </div>

      <div className="bg-grey-50 py-40">
        <div className="container">
          <div className="space-y-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
            {/* Variant 1: Default Tile */}
            <section>
              <TileMolecule
                title="Card Title"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                buttonText="Button"
                buttonVariant="dark"
                backgroundImage="https://picsum.photos/1200/600"
              />
            </section>

            {/* Variant 2: Light Button */}
            <section>
              <TileMolecule
                title="Card Title"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                buttonText="Button"
                buttonVariant="light"
                backgroundImage="https://picsum.photos/1200/600?grayscale"
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

