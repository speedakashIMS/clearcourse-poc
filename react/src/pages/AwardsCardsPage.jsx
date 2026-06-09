import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import AwardsCards from "../components/AwardsCards";
import IntroductionHeader from "../components/IntroductionHeader";
import Spacer from "../components/Spacer";

export default function AwardsCardsPage() {
  const cardItems = [
    {
      subtitle: 'Award Body',
      title: 'Award Grade 1',
      linkText: 'Link',
      linkHref: '#',
      linkVariant: 'light',
      mediaProps: {
        media: 'image',
        imageUrl: 'https://placehold.co/231x191?text=Default',
        title: 'Award Default',
        aspect: 'default',
      },
    },
    {
      subtitle: 'Award Body',
      title: 'Award Grade 2',
      linkText: 'Link',
      linkHref: '#',
      linkVariant: 'light',
      mediaProps: {
        media: 'image',
        imageUrl: 'https://placehold.co/231x191?text=Rectangle',
        title: 'Award Rectangle',
        aspect: 'rectangle',
      },
    },
    {
      subtitle: 'Award Body',
      title: 'Award Grade 3',
      linkText: 'Link',
      linkHref: '#',
      linkVariant: 'light',
      mediaProps: {
        media: 'image',
        imageUrl: 'https://placehold.co/231x191?text=Square',
        title: 'Award Square',
        aspect: 'square',
      },
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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Awards Cards</h1>
            <p className="text-body-default text-grey-600 mb-24">Awards card grid with mobile carousel</p>
          </div>
        </div>
      </div>

      <section className="py-40 bg-grey-50">
        <IntroductionHeader
          title="Award Cards"
          description="Up to 3 columns on desktop/tablet, carousel on mobile."
        />
        <Spacer mode="number" height={80} />
        <AwardsCards items={cardItems} />
      </section>
    </div>
  );
}
