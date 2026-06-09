import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import NewsMolecule from "../components/molecules/NewsMolecule";

export default function NewsMoleculePage() {
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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">News Molecule</h1>
            <p className="text-body-default text-grey-600 mb-24">Flushed news card with image, text, and link</p>
          </div>
        </div>
      </div>

      <div className="bg-grey-50 py-40">
        <div className="container space-y-40">
          <section className="max-w-3xl">
            <NewsMolecule
              stacked
              imageUrl="https://picsum.photos/640/360?random=1"
              title="News Title"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
              linkText="Read more"
              linkHref="#"
            />
          </section>

          <section className="max-w-4xl">
            <NewsMolecule
              stacked={false}
              imageUrl="https://picsum.photos/640/360?random=2"
              title="News Title"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
              linkText="Read more"
              linkHref="#"
            />
          </section>
        </div>
      </div>
    </div>
  );
}

