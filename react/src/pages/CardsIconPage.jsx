import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import CardsIcon from "../components/CardsIcon";
import IntroductionHeader from "../components/IntroductionHeader";
import Buttons from "../components/Buttons";
import Spacer from "../components/Spacer";
import lottieExampleData from "../assets/lottie-example.json";

export default function CardsIconPage() {
  // Icon cards: Stacked cards in 2 columns
  const iconCards2Cols = [
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/100/100',
      title: 'Icon Card 1',
      description: 'Short description for compact cards.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/100/100',
      title: 'Icon Card 2',
      description: 'Longer description that adds extra context and creates a taller card for layout variation.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
  ];

  // Icon cards: Stacked cards in 3 columns
  const iconCards3Cols = [
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/100/100',
      title: 'Icon Card 1',
      description: 'Compact copy.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/100/100',
      title: 'Icon Card 2',
      description: 'A more detailed description that demonstrates how the icon cards handle longer text blocks.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/100/100',
      title: 'Icon Card 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
  ];

  // Icon cards: Stacked cards in 4 columns with different media types
  const iconCards4Cols = [
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/100/100',
      title: 'Image Icon Card',
      description: 'Card with image media in a circular container, kept short.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'video',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'Video Icon Card',
      description: 'Card with video media in a circular container, with a slightly longer explanation for visual contrast.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'lottie',
      lottieData: lottieExampleData,
      title: 'Lottie Icon Card',
      description: 'Card with Lottie animation in circular container.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'iframe',
      iframeUrl: 'https://example.com',
      title: 'Iframe Icon Card',
      description: 'Card with iframe media in circular container.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
  ];

  // Icon cards: Stacked cards in 5 columns
  const iconCards5Cols = [
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/100/100',
      title: 'Icon Card 1',
      description: 'Short label to keep the row tight.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/100/100',
      title: 'Icon Card 2',
      description: 'Longer copy to test text wrapping inside the icon card body.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/100/100',
      title: 'Icon Card 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/100/100',
      title: 'Icon Card 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/100/100',
      title: 'Icon Card 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
  ];

  // Icon cards: Stacked cards in 6 columns
  const iconCards6Cols = [
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/100/100',
      title: 'Icon Card 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/100/100',
      title: 'Icon Card 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/100/100',
      title: 'Icon Card 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/100/100',
      title: 'Icon Card 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/100/100',
      title: 'Icon Card 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/100/100',
      title: 'Icon Card 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
  ];

  // Icon cards: Non-stacked card, icon on the left
  const iconNonStackedLeft = [
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/100/100',
      title: 'Icon Card - Icon Left',
      description: 'Non-stacked card with icon on the left.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
  ];

  // Icon cards: Non-stacked card, icon on the right
  const iconNonStackedRight = [
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/100/100',
      title: 'Icon Card - Icon Right',
      description: 'Non-stacked card with icon on the right and a slightly longer description for height.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
  ];

  // Icon cards: Non-stacked cards in 2 columns, icon on the left
  const iconNonStackedLeft2Cols = [
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/100/100',
      title: 'Icon Card 1',
      description: 'Non-stacked card with circular icon on the left side.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/100/100',
      title: 'Icon Card 2',
      description: 'Non-stacked card with circular icon on the left side.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
  ];

  // Icon cards: Non-stacked cards in 3 columns, icon on the left
  const iconNonStackedLeft3Cols = [
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/100/100',
      title: 'Icon Card 1',
      description: 'Non-stacked card with circular icon on the left side.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/100/100',
      title: 'Icon Card 2',
      description: 'Non-stacked card with circular icon on the left side.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/100/100',
      title: 'Icon Card 3',
      description: 'Non-stacked card with circular icon on the left side.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
  ];

  // Icon cards: Non-stacked cards in 3 columns, icon on the right
  const iconNonStackedRight3Cols = [
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/100/100',
      title: 'Icon Card 1',
      description: 'Non-stacked card with circular icon on the right side.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/100/100',
      title: 'Icon Card 2',
      description: 'Non-stacked card with circular icon on the right side.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/100/100',
      title: 'Icon Card 3',
      description: 'Non-stacked card with circular icon on the right side.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
  ];

  // Icon cards: Non-stacked cards in 2 columns, icon on the right
  const iconNonStackedRight2Cols = [
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/100/100',
      title: 'Icon Card 1',
      description: 'Non-stacked card with circular icon on the right side.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/100/100',
      title: 'Icon Card 2',
      description: 'Non-stacked card with circular icon on the right side.',
      buttonText: 'Button',
      buttonVariant: 'light',
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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Cards Icon</h1>
            <p className="text-body-default text-grey-600 mb-24">Icon card styles and variants</p>
          </div>
        </div>
      </div>

      <div className="bg-grey-50 py-40">
        <div className="container">
          <div className="space-y-80">
            <section>
              <IntroductionHeader
                title="Icon Cards in 2 Columns"
                titleHeaderType="h2"
                description="Icon cards displayed in 2 columns with circular media containers."
                descriptionSize="normal"
              />
              <Spacer height={40} />
              <CardsIcon columns={2} stacked data={iconCards2Cols} />
              <Spacer height={40} />
              <Buttons
                buttons={[
                  { text: 'Button 1', variant: 'dark', href: '#' },
                  { text: 'Button 2', variant: 'dark', href: '#' },
                ]}
              />
            </section>

            <section>
              <IntroductionHeader
                title="Icon Cards in 3 Columns"
                titleHeaderType="h2"
                description="Icon cards displayed in 3 columns with circular media containers."
                descriptionSize="normal"
              />
              <Spacer height={40} />
              <CardsIcon columns={3} stacked textAlign="center" data={iconCards3Cols} />
              <Spacer height={40} />
              <Buttons
                buttons={[
                  { text: 'Button 1', variant: 'dark', href: '#' },
                  { text: 'Button 2', variant: 'dark', href: '#' },
                ]}
              />
            </section>

            <section>
              <IntroductionHeader
                title="Icon Cards in 4 Columns (Media Types)"
                titleHeaderType="h2"
                description="Icon cards with different media types (image, video, Lottie, iframe) in circular containers."
                descriptionSize="normal"
              />
              <Spacer height={40} />
              <CardsIcon columns={4} stacked data={iconCards4Cols} />
              <Spacer height={40} />
              <Buttons
                buttons={[
                  { text: 'Button 1', variant: 'dark', href: '#' },
                  { text: 'Button 2', variant: 'dark', href: '#' },
                ]}
              />
            </section>

            <section>
              <IntroductionHeader
                title="Icon Cards in 5 Columns"
                titleHeaderType="h2"
                description="Icon cards displayed in 5 columns with circular media containers."
                descriptionSize="normal"
              />
              <Spacer height={40} />
              <CardsIcon columns={5} stacked data={iconCards5Cols} />
              <Spacer height={40} />
              <Buttons
                buttons={[
                  { text: 'Button 1', variant: 'dark', href: '#' },
                  { text: 'Button 2', variant: 'dark', href: '#' },
                ]}
              />
            </section>

            <section>
              <IntroductionHeader
                title="Icon Cards in 6 Columns"
                titleHeaderType="h2"
                description="Icon cards displayed in 6 columns with circular media containers."
                descriptionSize="normal"
              />
              <Spacer height={40} />
              <CardsIcon columns={6} stacked data={iconCards6Cols} />
              <Spacer height={40} />
              <Buttons
                buttons={[
                  { text: 'Button 1', variant: 'dark', href: '#' },
                  { text: 'Button 2', variant: 'dark', href: '#' },
                ]}
              />
            </section>

            <section>
              <IntroductionHeader
                title="Icon Card - Icon Left"
                titleHeaderType="h2"
                description="Non-stacked card with circular icon on the left side."
                descriptionSize="normal"
              />
              <Spacer height={40} />
              <CardsIcon columns={1} stacked={false} iconPosition="left" data={iconNonStackedLeft} />
              <Spacer height={40} />
              <Buttons
                buttons={[
                  { text: 'Button 1', variant: 'dark', href: '#' },
                  { text: 'Button 2', variant: 'dark', href: '#' },
                ]}
              />
            </section>

            <section>
              <IntroductionHeader
                title="Icon Card - Icon Right"
                titleHeaderType="h2"
                description="Non-stacked card with circular icon on the right side."
                descriptionSize="normal"
              />
              <Spacer height={40} />
              <CardsIcon columns={1} stacked={false} iconPosition="right" data={iconNonStackedRight} />
              <Spacer height={40} />
              <Buttons
                buttons={[
                  { text: 'Button 1', variant: 'dark', href: '#' },
                  { text: 'Button 2', variant: 'dark', href: '#' },
                ]}
              />
            </section>

            <section>
              <IntroductionHeader
                title="Icon Cards in 2 Columns - Icon Left"
                titleHeaderType="h2"
                description="Non-stacked icon cards in 2 columns with circular icon on the left side."
                descriptionSize="normal"
              />
              <Spacer height={40} />
              <CardsIcon columns={2} stacked={false} iconPosition="left" data={iconNonStackedLeft2Cols} />
              <Spacer height={40} />
              <Buttons
                buttons={[
                  { text: 'Button 1', variant: 'dark', href: '#' },
                  { text: 'Button 2', variant: 'dark', href: '#' },
                ]}
              />
            </section>

            <section>
              <IntroductionHeader
                title="Icon Cards in 3 Columns - Icon Left"
                titleHeaderType="h2"
                description="Non-stacked icon cards in 3 columns with circular icon on the left side."
                descriptionSize="normal"
              />
              <Spacer height={40} />
              <CardsIcon columns={3} stacked={false} iconPosition="left" data={iconNonStackedLeft3Cols} />
              <Spacer height={40} />
              <Buttons
                buttons={[
                  { text: 'Button 1', variant: 'dark', href: '#' },
                  { text: 'Button 2', variant: 'dark', href: '#' },
                ]}
              />
            </section>

            <section>
              <IntroductionHeader
                title="Icon Cards in 2 Columns - Icon Right"
                titleHeaderType="h2"
                description="Non-stacked icon cards in 2 columns with circular icon on the right side."
                descriptionSize="normal"
              />
              <Spacer height={40} />
              <CardsIcon columns={2} stacked={false} iconPosition="right" data={iconNonStackedRight2Cols} />
              <Spacer height={40} />
              <Buttons
                buttons={[
                  { text: 'Button 1', variant: 'dark', href: '#' },
                  { text: 'Button 2', variant: 'dark', href: '#' },
                ]}
              />
            </section>

            <section>
              <IntroductionHeader
                title="Icon Cards in 3 Columns - Icon Right"
                titleHeaderType="h2"
                description="Non-stacked icon cards in 3 columns with circular icon on the right side."
                descriptionSize="normal"
              />
              <Spacer height={40} />
              <CardsIcon columns={3} stacked={false} iconPosition="right" data={iconNonStackedRight3Cols} />
              <Spacer height={40} />
              <Buttons
                buttons={[
                  { text: 'Button 1', variant: 'dark', href: '#' },
                  { text: 'Button 2', variant: 'dark', href: '#' },
                ]}
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
