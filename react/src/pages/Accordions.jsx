import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Accordion from "../components/Accordion";
import IntroductionHeader from "../components/IntroductionHeader";
import Spacer from "../components/Spacer";
import lottieExampleData from "../assets/lottie-example.json";

export default function AccordionsPage() {
  const list = [
    {
      title: 'Accordion Item 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <a href="#" style="color: var(--color-grey-600);">Link</a>',
    },
    {
      title: 'Accordion Item 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Accordion Item 3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Accordion Item 4',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Accordion Item 5',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Accordion Item 6',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Accordion Item 7',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

  const accordion1 = {
    list: list,
    hasIcon: true,
    iconPosition: 'left',
  }

  const accordion2 = {
    list: list,
    hasIcon: true,
    iconPosition: 'right',
  }

  const accordion3 = {
    list: list,
    hasIcon: false,
  }

  const accordion4 = {
    list: list,
    hasIcon: true,
    iconPosition: 'left',
    width: 'constrained',
  }

  // Media examples
  const accordionWithImage = {
    list: list,
    hasIcon: true,
    iconPosition: 'left',
    columns: 2,
    media: {
      type: 'image',
      imageUrl: 'https://fastly.picsum.photos/id/861/800/600.jpg?hmac=hTo9DANbOhV7Co2H3fIhxr08zoy-dN-xALqibUh9wr4',
      title: 'Sample Image',
    },
    mediaPosition: 'right',
  }

  const accordionWithVideo = {
    list: list,
    hasIcon: true,
    iconPosition: 'left',
    columns: 2,
    media: {
      type: 'video',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'Sample Video',
    },
    mediaPosition: 'right',
  }

  const accordionWithLottie = {
    list: list,
    hasIcon: true,
    iconPosition: 'left',
    columns: 2,
    media: {
      type: 'lottie',
      lottieData: lottieExampleData,
      title: 'Sample Lottie Animation',
    },
    mediaPosition: 'right',
  }

  const accordionWithIframe = {
    list: list,
    hasIcon: true,
    iconPosition: 'left',
    columns: 2,
    media: {
      type: 'iframe',
      iframeUrl: 'https://example.com',
      title: 'Sample Iframe',
    },
    mediaPosition: 'right',
  }

  const accordion30_70 = {
    list: list,
    hasIcon: true,
    iconPosition: 'left',
    columns: 2,
    media: {
      type: 'image',
      imageUrl: 'https://fastly.picsum.photos/id/861/800/600.jpg?hmac=hTo9DANbOhV7Co2H3fIhxr08zoy-dN-xALqibUh9wr4',
      title: 'Sample Image',
    },
    mediaPosition: 'right',
  }

  const accordion70_30 = {
    list: list,
    hasIcon: true,
    iconPosition: 'left',
    columns: 2,
    media: {
      type: 'image',
      imageUrl: 'https://fastly.picsum.photos/id/861/800/600.jpg?hmac=hTo9DANbOhV7Co2H3fIhxr08zoy-dN-xALqibUh9wr4',
      title: 'Sample Image',
    },
    mediaPosition: 'right',
  }

  const accordionMediaLeft = {
    list: list,
    hasIcon: true,
    iconPosition: 'left',
    columns: 2,
    media: {
      type: 'image',
      imageUrl: 'https://fastly.picsum.photos/id/861/800/600.jpg?hmac=hTo9DANbOhV7Co2H3fIhxr08zoy-dN-xALqibUh9wr4',
      title: 'Sample Image',
    },
    mediaPosition: 'left',
  }

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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Accordion Component</h1>
            <p className="text-body-default text-grey-600 mb-24">
              Collapsible accordion component with flexible layouts. Supports content sections,
              images, buttons, and customizable width options.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-40">
        <div className="space-y-60">
          <section>
            <IntroductionHeader
              title="Icon Left"
              description="Default layout with icon positioned on the left side of accordion items."
            />
            <Spacer height={40} />
            <Accordion {...accordion1} />
            <Spacer height={40} />
          </section>

          <section>
            <IntroductionHeader
              title="Icon Right"
              description="Icon positioned on the right side of accordion items for alternative layouts."
            />
            <Spacer height={40} />
            <Accordion {...accordion2} />
            <Spacer height={40} />
          </section>

          <section>
            <IntroductionHeader
              title="No Icon"
              description="Accordion without icons for minimalist design and cleaner appearance."
            />
            <Spacer height={40} />
            <Accordion {...accordion3} />
            <Spacer height={40} />
          </section>

          <section>
            <IntroductionHeader
              title="Constrained Width"
              description="Constrained width for centered layout with maximum width constraint."
            />
            <Spacer height={40} />
            <Accordion {...accordion4} />
            <Spacer height={40} />
          </section>

          <section>
            <IntroductionHeader
              title="With Image Media (50-50)"
              description="Accordion with image media in a 50-50 column layout, media on the right."
            />
            <Spacer height={40} />
            <Accordion {...accordionWithImage} />
            <Spacer height={40} />
          </section>

          <section>
            <IntroductionHeader
              title="With Video Media (50-50)"
              description="Accordion with YouTube video media in a 50-50 column layout."
            />
            <Spacer height={40} />
            <Accordion {...accordionWithVideo} />
            <Spacer height={40} />
          </section>

          <section>
            <IntroductionHeader
              title="With Lottie Media (50-50)"
              description="Accordion with Lottie animation media in a 50-50 column layout."
            />
            <Spacer height={40} />
            <Accordion {...accordionWithLottie} />
            <Spacer height={40} />
          </section>

          <section>
            <IntroductionHeader
              title="With Iframe Media (50-50)"
              description="Accordion with iframe media in a 50-50 column layout."
            />
            <Spacer height={40} />
            <Accordion {...accordionWithIframe} />
            <Spacer height={40} />
          </section>

          <section>
            <IntroductionHeader
              title="30-70 Column Width"
              description="Accordion with image media in a 30-70 column layout (30% accordion, 70% media)."
            />
            <Spacer height={40} />
            <Accordion {...accordion30_70} />
            <Spacer height={40} />
          </section>

          <section>
            <IntroductionHeader
              title="70-30 Column Width"
              description="Accordion with image media in a 70-30 column layout (70% accordion, 30% media)."
            />
            <Spacer height={40} />
            <Accordion {...accordion70_30} />
            <Spacer height={40} />
          </section>

          <section>
            <IntroductionHeader
              title="Media Position Left"
              description="Accordion with media positioned on the left side in a 50-50 layout."
            />
            <Spacer height={40} />
            <Accordion {...accordionMediaLeft} />
            <Spacer height={40} />
          </section>
        </div>
      </div>
    </div>
  );
}
