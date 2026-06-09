import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import AwardsMedia from "../components/AwardsMedia";
import IntroductionHeader from "../components/IntroductionHeader";
import Spacer from "../components/Spacer";

export default function AwardsMediaPage() {
  const mediaItems = Array.from({ length: 5 }, (_, index) => ({
    mediaProps: {
      media: 'image',
      imageUrl: `https://placehold.co/160x160?text=Logo+${index + 1}`,
      title: `Logo ${index + 1}`,
      aspect: 'square',
    },
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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Awards Media</h1>
            <p className="text-body-default text-grey-600 mb-24">Media grid for awards and certifications</p>
          </div>
        </div>
      </div>

      <section className="py-40 bg-grey-50">
        <IntroductionHeader
          title="Media Grid"
          description="Up to 5 columns on desktop and tablet, centered wrap on mobile."
        />
        <Spacer mode="number" height={80} />
        <AwardsMedia items={mediaItems} />
      </section>
    </div>
  );
}
