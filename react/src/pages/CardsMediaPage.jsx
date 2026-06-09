import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import CardsImage from "../components/CardsImage";
import IntroductionHeader from "../components/IntroductionHeader";
import Spacer from "../components/Spacer";

export default function CardsMediaPage() {
  // Variant 1: Stacked cards in 2 columns
  const stackedCards2Cols = [
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Card Title 1',
      description: 'Short description for a quick overview.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Card Title 2',
      description: 'A longer description that gives extra context, explains the value, and adds a second sentence for visual variety in the card layout.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
  ];

  // Variant 2: Stacked cards in 4 columns
  const stackedCards4Cols = [
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Card Title 1',
      description: 'Concise copy that stays on one line.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Card Title 2',
      description: 'Expanded description with a bit more detail so the card height grows and the layout shows variation across the grid.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Card Title 3',
      description: 'Short and direct.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Card Title 4',
      description: 'Longer body text to test multi-line wrapping and visual balance in a three-column layout.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
  ];

  // Variant 3: Stacked cards in 3 columns
  const stackedCards3Cols = [
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Card Title 1',
      description: 'Brief summary.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      stacked: true,
      variant: 'flushed',
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Card Title 2',
      description: 'Detailed description that spans more than a single line for a fuller, richer card body.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      stacked: true,
      variant: 'flushed',
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Card Title 3',
      description: 'Short description to keep this card compact.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
  ];

  // Variant 4: Non-stacked card, image on the left (1 column)
  const nonStackedLeft1Col = [
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Card Title 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
  ];

  // Variant 5: Non-stacked cards in 2 columns, image on the left
  const nonStackedLeft2Cols = [
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Card Title 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Card Title 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
  ];

  // Variant 6: Non-stacked cards in 3 columns, image on the left
  const nonStackedLeft3Cols = [
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Card Title 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Card Title 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Card Title 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
  ];

  // Variant 7: Non-stacked card, image on the right (1 column)
  const nonStackedRight1Col = [
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Card Title 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
  ];

  // Variant 8: Non-stacked cards in 2 columns, image on the right
  const nonStackedRight2Cols = [
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Card Title 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Card Title 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
  ];

  // Variant 9: Non-stacked cards in 3 columns, image on the right
  const nonStackedRight3Cols = [
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Card Title 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Card Title 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Card Title 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
  ];

  // Framed variant: Stacked cards in 3 columns
  const framedCards3Cols = [
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Framed Card 1',
      description: 'Framed variant with a compact description.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Framed Card 2',
      description: 'Framed variant description that is a bit longer to demonstrate multi-line wrapping in framed cards.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Framed Card 3',
      description: 'This card uses the framed variant with square aspect ratio.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
  ];

  // Framed variant: Stacked cards in 2 columns
  const framedCards2Cols = [
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Framed Card 1',
      description: 'This card uses the framed variant with square aspect ratio.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Framed Card 2',
      description: 'This card uses the framed variant with square aspect ratio.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
  ];

  // Framed variant: Non-stacked cards in 2 columns
  const framedNonStacked2Cols = [
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Framed Card 1',
      description: 'Non-stacked framed card with image on the left.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Framed Card 2',
      description: 'Non-stacked framed card with a longer description for variety.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
  ];

  // Framed variant: Non-stacked cards in 4 columns
  const framedNonStacked4Cols = [
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Framed Card 1',
      description: 'Non-stacked framed card with image on the left.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Framed Card 2',
      description: 'Non-stacked framed card with a longer description for variety.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Framed Card 3',
      description: 'Non-stacked framed card with square media.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Framed Card 4',
      description: 'Non-stacked framed card with short copy.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
  ];

  // Framed variant: Stacked cards in 4 columns
  const framedCards4Cols = [
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Framed Card 1',
      description: 'This card uses the framed variant with square aspect ratio.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Framed Card 2',
      description: 'This card uses the framed variant with square aspect ratio.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      stacked: true,
      variant: 'framed',
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Framed Card 3',
      description: 'This card uses the framed variant with square aspect ratio.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      stacked: true,
      variant: 'framed',
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Framed Card 4',
      description: 'This card uses the framed variant with square aspect ratio.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
  ];

  // Circle variant: Stacked cards in 3 columns
  const circleCards3Cols = [
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Circle Card 1',
      description: 'Circle variant with a concise label.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Circle Card 2',
      description: 'This card uses the circle variant with 100px x 100px circular image.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Circle Card 3',
      description: 'This card uses the circle variant with 100px x 100px circular image.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
  ];

  // Circle variant: Non-stacked card, image on the left
  const circleNonStackedLeft = [
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Circle Card - Image Left',
      description: 'Non-stacked card with circular image on the left side.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
  ];

  // Circle variant: Non-stacked card, image on the right
  const circleNonStackedRight = [
    {
      media: 'image',
      imageUrl: 'https://picsum.photos/441/269',
      title: 'Circle Card - Image Right',
      description: 'Non-stacked card with circular image on the right side.',
      buttonText: 'Button',
      buttonVariant: 'light',
    },
  ];

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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Cards Media</h1>
            <p className="text-body-default text-grey-600 mb-24">Media card styles and variants</p>
          </div>
        </div>
      </div>

      <div className="bg-grey-50 py-40">
        <div className="space-y-80">
            {/* Variant 1: Stacked cards in 2 columns (h2 title, default description) */}
            <section>
              <IntroductionHeader
                title="Stacked Cards in 2 Columns"
                titleHeaderType="h2"
                description="Cards displayed in 2 columns with h2 title and default description size."
                descriptionSize="normal"
              />
              <Spacer height={40} />
              <CardsImage
                columns={2}
                stacked
                variant="flushed"
                data={stackedCards2Cols}
              />
            </section>

            {/* Variant 2: Stacked cards in 4 columns (h3 title, small description) */}
            <section>
              <IntroductionHeader
                title="Stacked Cards in 4 Columns"
                titleHeaderType="h3"
                description="Cards displayed in 4 columns with h3 title and small description size."
                descriptionSize="small"
              />
              <Spacer height={40} />
              <CardsImage
                columns={4}
                stacked
                variant="flushed"
                data={stackedCards4Cols}
              />
            </section>

            {/* Variant 3: Stacked cards in 3 columns (h2 title, large description) */}
            <section>
              <IntroductionHeader
                title="Stacked Cards in 3 Columns"
                titleHeaderType="h2"
                description="Cards displayed in 3 columns with h2 title and large description size."
                descriptionSize="large"
              />
              <Spacer height={40} />
              <CardsImage
                columns={3}
                stacked
                variant="flushed"
                data={stackedCards3Cols}
              />
            </section>

            {/* Variant 4: Non-stacked card, image on the left */}
            <section>
              <IntroductionHeader
                title="Non-Stacked Card - Image Left"
                titleHeaderType="h2"
                titleAccent
                description="Single card with image on the left side and accent title."
                descriptionSize="normal"
              />
              <Spacer height={40} />
              <CardsImage
                columns={1}
                stacked={false}
                imagePosition="left"
                variant="flushed"
                data={nonStackedLeft1Col}
              />
            </section>

            {/* Variant 5: Non-stacked cards in 2 columns, image on the left */}
            <section>
              <IntroductionHeader
                title="Non-Stacked Cards in 2 Columns - Image Left"
                titleHeaderType="h2"
                description="Cards displayed in 2 columns with image on the left side."
                descriptionSize="normal"
              />
              <Spacer height={40} />
              <CardsImage
                columns={2}
                stacked={false}
                imagePosition="left"
                variant="flushed"
                data={nonStackedLeft2Cols}
              />
            </section>

            {/* Variant 6: Non-stacked cards in 3 columns, image on the left */}
            <section>
              <IntroductionHeader
                title="Non-Stacked Cards in 3 Columns - Image Left"
                titleHeaderType="h2"
                description="Cards displayed in 3 columns with image on the left side."
                descriptionSize="normal"
              />
              <Spacer height={40} />
              <CardsImage
                columns={3}
                stacked={false}
                imagePosition="left"
                variant="flushed"
                data={nonStackedLeft3Cols}
              />
            </section>

            {/* Variant 7: Non-stacked card, image on the right */}
            <section>
              <IntroductionHeader
                title="Non-Stacked Card - Image Right"
                titleHeaderType="h2"
                description="Single card with image on the right side."
                descriptionSize="normal"
              />
              <Spacer height={40} />
              <CardsImage
                columns={1}
                stacked={false}
                imagePosition="right"
                variant="flushed"
                data={nonStackedRight1Col}
              />
            </section>

            {/* Variant 8: Non-stacked cards in 2 columns, image on the right */}
            <section>
              <IntroductionHeader
                title="Non-Stacked Cards in 2 Columns - Image Right"
                titleHeaderType="h2"
                description="Cards displayed in 2 columns with image on the right side."
                descriptionSize="normal"
              />
              <Spacer height={40} />
              <CardsImage
                columns={2}
                stacked={false}
                imagePosition="right"
                variant="flushed"
                data={nonStackedRight2Cols}
              />
            </section>

            {/* Variant 9: Non-stacked cards in 3 columns, image on the right */}
            <section>
              <IntroductionHeader
                title="Non-Stacked Cards in 3 Columns - Image Right"
                titleHeaderType="h2"
                description="Cards displayed in 3 columns with image on the right side."
                descriptionSize="normal"
              />
              <Spacer height={40} />
              <CardsImage
                columns={3}
                stacked={false}
                imagePosition="right"
                variant="flushed"
                data={nonStackedRight3Cols}
              />
            </section>

            {/* Variant 10: Framed cards in 3 columns */}
            <section>
              <IntroductionHeader
                title="Framed Cards in 3 Columns"
                titleHeaderType="h2"
                description="Cards using the framed variant with square aspect ratio."
                descriptionSize="normal"
              />
              <Spacer height={40} />
              <CardsImage
                columns={3}
                stacked
                variant="framed"
                data={framedCards3Cols}
              />
            </section>

            {/* Variant 11: Framed cards in 2 columns */}
            <section>
              <IntroductionHeader
                title="Framed Cards in 2 Columns"
                titleHeaderType="h2"
                description="Cards using the framed variant in 2 columns."
                descriptionSize="normal"
              />
              <Spacer height={40} />
              <CardsImage
                columns={2}
                stacked
                variant="framed"
                data={framedCards2Cols}
              />
            </section>

            {/* Variant 11b: Framed non-stacked cards in 2 columns */}
            <section>
              <IntroductionHeader
                title="Framed Cards in 2 Columns - Non-Stacked"
                titleHeaderType="h2"
                description="Non-stacked framed cards in a two-column layout."
                descriptionSize="normal"
              />
              <Spacer height={40} />
              <CardsImage
                columns={2}
                stacked={false}
                imagePosition="left"
                variant="framed"
                data={framedNonStacked2Cols}
              />
            </section>

            {/* Variant 11c: Framed non-stacked cards in 4 columns */}
            <section>
              <IntroductionHeader
                title="Framed Cards in 4 Columns - Non-Stacked"
                titleHeaderType="h2"
                description="Non-stacked framed cards in a four-column layout."
                descriptionSize="normal"
              />
              <Spacer height={40} />
              <CardsImage
                columns={4}
                stacked={false}
                imagePosition="left"
                variant="framed"
                data={framedNonStacked4Cols}
              />
            </section>
 
            {/* Variant 12: Framed cards in 4 columns */}
            <section>
              <IntroductionHeader
                title="Framed Cards in 4 Columns"
                titleHeaderType="h2"
                description="Cards using the framed variant in 4 columns."
                descriptionSize="normal"
              />
              <Spacer height={40} />
              <CardsImage
                columns={4}
                stacked
                variant="framed"
                data={framedCards4Cols}
              />
            </section>
        </div>
      </div>
    </div>
  );
}
