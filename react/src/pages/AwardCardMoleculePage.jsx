import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import AwardCardMolecule from "../components/molecules/AwardCardMolecule";

export default function AwardCardMoleculePage() {
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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Award Card Molecule</h1>
            <p className="text-body-default text-grey-600 mb-24">Award card with media, title, subtitle, and link</p>
          </div>
        </div>
      </div>

      <div className="bg-grey-50 py-40">
        <div className="container space-y-40">
          <section className="max-w-[360px]">
            <AwardCardMolecule
              subtitle="Award Body"
              title="Award Grade"
              linkText="Link"
              linkHref="#"
              mediaProps={{
                media: 'image',
                imageUrl: 'https://placehold.co/231x191?text=Image',
                title: 'Award image',
                aspect: 'rectangle',
              }}
            />
          </section>
        </div>

        
      </div>

      <div className="bg-grey-50 py-40">
        <div className="container space-y-40">
          <section className="max-w-[360px]">
            <AwardCardMolecule
              subtitle="Award Body"
              title="Award Grade"
              mediaProps={{
                media: 'image',
                imageUrl: 'https://placehold.co/231x191?text=Image',
                title: 'Award image',
                aspect: 'rectangle',
              }}
            />
          </section>
        </div>

        
      </div>
    </div>
  );
}
