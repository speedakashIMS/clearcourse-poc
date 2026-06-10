import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import GiftProCardAndText from "../components/GiftProCardAndText";
import IntroductionHeader from "../components/IntroductionHeader";
import Spacer from "../components/Spacer";

export default function GiftProCardAndTextPage() {
  const sampleGiftProCardAndTexts = [
    {
      cardTitle: 'Card Title 1',
      bodyLarge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      bodyDefault: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      bodySmall: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: 'https://placehold.co/300x340?text=JD',
      iconUrl: 'https://placehold.co/129x101?text=JD',
      author: 'John Doe',
      authorTitle: 'CEO, Example Company'
    },
    {
      cardTitle: 'Card Title 2',
      bodyLarge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      bodyDefault: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      bodySmall: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: 'https://placehold.co/300x340?text=JS',
      iconUrl: 'https://placehold.co/129x101?text=JS',
      author: 'Jane Smith',
      authorTitle: 'Marketing Director, Sample Inc.'
    },
    {
      cardTitle: 'Card Title 3',
      bodyLarge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      bodyDefault: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      bodySmall: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: 'https://placehold.co/300x340?text=BJ',
      iconUrl: 'https://placehold.co/129x101?text=BJ',
      author: 'Bob Johnson',
      authorTitle: 'CTO, Tech Solutions'
    },
    {
      cardTitle: 'Card Title 4',
      bodyLarge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      bodyDefault: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      bodySmall: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: 'https://placehold.co/300x340?text=AW',
      iconUrl: 'https://placehold.co/129x101?text=AW',
      author: 'Alice White',
      authorTitle: 'Product Manager, Example Corp.'
    },
    {
      cardTitle: 'Card Title 5',
      bodyLarge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      bodyDefault: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      bodySmall: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: 'https://placehold.co/300x340?text=CB',
      iconUrl: 'https://placehold.co/129x101?text=CB',
      author: 'Charlie Brown',
      authorTitle: 'Designer, Creative Studio'
    },
    {
      cardTitle: 'Card Title 6',
      bodyLarge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      bodyDefault: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      bodySmall: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: 'https://placehold.co/300x340?text=DP',
      iconUrl: 'https://placehold.co/129x101?text=DP',
      author: 'David Parker',
      authorTitle: 'Engineer, Tech Innovations'
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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">GiftPro Card and Text Component</h1>
            <p className="text-body-default text-grey-600 mb-24">
              Display GiftPro card and text with carousel or single item.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-grey-50 py-40">
        <div className="space-y-60">
          {/* 1. GiftPro Card and Text - 1 item */}
          <section>
            <IntroductionHeader
              title="GiftPro Card and Text - 1 item"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Spacer height={40} />
              <GiftProCardAndText
                giftProCardAndTexts={[
                  {
                    ...sampleGiftProCardAndTexts[0],
                    media: {
                      type: 'image',
                      imageUrl: 'https://picsum.photos/800/600',
                      title: 'Customer Success Story'
                    }
                  }
                ]}
              />
            <Spacer height={40} />
          </section>

          {/* 2. GiftPro Card and Text - 3 items with Carousel */}
          <section>
            <IntroductionHeader
              title="GiftPro Card and Text - 3 items"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Spacer height={40} />
              <GiftProCardAndText
                giftProCardAndTexts={[
                  {
                    ...sampleGiftProCardAndTexts[0],
                    media: {
                      type: 'image',
                      imageUrl: 'https://picsum.photos/800/600?random=20',
                      title: 'Customer Success Image'
                    }
                  },
                  {
                    ...sampleGiftProCardAndTexts[1],
                    media: {
                      type: 'image',
                      imageUrl: 'https://picsum.photos/800/600?random=21',
                      title: 'Customer Success Image'
                    }
                  },
                  {
                    ...sampleGiftProCardAndTexts[2],
                    media: {
                      type: 'image',
                      imageUrl: 'https://picsum.photos/800/600?random=22',
                      title: 'Customer Success Image'
                    }
                  },
                ]}
              />
            <Spacer height={40} />
          </section>

        </div>
      </div>
    </div>
  );
}

