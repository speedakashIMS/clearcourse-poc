import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import AwardMediaMolecule from "../components/molecules/AwardMediaMolecule";

export default function AwardMediaMoleculePage() {
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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Award Media Molecule</h1>
            <p className="text-body-default text-grey-600 mb-24">Media-only award block</p>
          </div>
        </div>
      </div>

      <div className="bg-grey-50 py-40">
        <div className="container space-y-40">
          <section className="max-w-[360px]">
            <AwardMediaMolecule
              mediaProps={{
                media: 'image',
                imageUrl: 'https://placehold.co/360x240?text=Media',
                title: 'Award media',
                aspect: 'rectangle',
              }}
            />
          </section>
        </div>
      </div>
    </div>
  );
}
