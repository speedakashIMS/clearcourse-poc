import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import CTA from '../components/CTA';
import IntroductionHeader from '../components/IntroductionHeader';
import Spacer from '../components/Spacer';

export default function CTAPage() {
  return (
    <div>
      <div className="bg-grey-200 py-32">
        <div className="container">
          <div>
            <a
              href="/"
              className="inline-flex items-center gap-10 text-grey-600 hover:text-grey-950 mb-20 transition-colors"
            >
              <ArrowLeftIcon className="h-20 w-20" />
              Back to Home
            </a>
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">CTA Component</h1>
            <p className="text-body-default text-grey-600 mb-24">Text and media call-to-action layout</p>
          </div>
        </div>
      </div>

      <section className="py-40">
        <IntroductionHeader
          title="1 Column - Centered Text"
          description="Single column CTA with centered text."
        />
        <Spacer mode="number" height={80} />
        <CTA
          columns={1}
          items={[
            {
              type: 'text',
              heading: 'Centered CTA',
              paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              textAlign: 'center',
              buttonText: 'Button',
              buttonVariant: 'dark',
              buttonHref: '#',
            },
          ]}
        />
      </section>

      <section className="py-40">
        <IntroductionHeader
          title="1 Column - Text With List"
          description="Single column CTA with a list of points."
        />
        <Spacer mode="number" height={80} />
        <CTA
          columns={1}
          items={[
            {
              type: 'text',
              heading: 'CTA With List',
              paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              list: [
                'Lorem ipsum dolor sit amet',
                'Consectetur adipiscing elit',
                'Sed do eiusmod tempor incididunt',
                'Ut labore et dolore magna aliqua',
              ],
              textAlign: 'center',
              buttonText: 'Button',
              buttonVariant: 'dark',
              buttonHref: '#',
            },
          ]}
        />
      </section>

      <section className="py-40">
        <IntroductionHeader
          title="2 Columns - Both Centered Text"
          description="Two text columns with centered alignment."
        />
        <Spacer mode="number" height={80} />
        <CTA
          columns={2}
          items={[
            {
              type: 'text',
              heading: 'Left Column',
              paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              textAlign: 'center',
              buttonText: 'Button',
              buttonVariant: 'dark',
              buttonHref: '#',
            },
            {
              type: 'text',
              heading: 'Right Column',
              paragraph: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              textAlign: 'center',
              buttonText: 'Button',
              buttonVariant: 'dark',
              buttonHref: '#',
            },
          ]}
        />
      </section>

      <section className="py-40">
        <IntroductionHeader
          title="1 Column - Text With Image"
          description="Single column text block with image."
        />
        <Spacer mode="number" height={80} />
        <CTA
          columns={1}
          items={[
            {
              type: 'text',
              heading: 'Text + Image',
              paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
              imageUrl: 'https://picsum.photos/130/101',
              imageAlt: 'CTA image',
              textAlign: 'center',
              buttonText: 'Button',
              buttonVariant: 'dark',
              buttonHref: '#',
            },
          ]}
        />
      </section>

      <section className="py-40">
        <IntroductionHeader
          title="2 Columns - Centered Text + Media"
          description="Text on the left, media on the right."
        />
        <Spacer mode="number" height={80} />
        <CTA
          columns={2}
          gridType="50-50"
          items={[
            {
              type: 'text',
              heading: 'Centered CTA',
              paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              textAlign: 'center',
              buttonText: 'Button',
              buttonVariant: 'dark',
              buttonHref: '#',
            },
            {
              type: 'media',
              mediaProps: {
                media: 'image',
                imageUrl: 'https://picsum.photos/720/480',
                title: 'CTA media',
                aspect: 'rectangle',
              },
            },
          ]}
        />
      </section>

      <section className="py-40">
        <IntroductionHeader
          title="2 Columns - Media + Centered Text"
          description="Media on the left, text on the right."
        />
        <Spacer mode="number" height={80} />
        <CTA
          columns={2}
          gridType="50-50"
          items={[
            {
              type: 'media',
              mediaProps: {
                media: 'image',
                imageUrl: 'https://picsum.photos/720/480?2',
                title: 'CTA media',
                aspect: 'rectangle',
              },
            },
            {
              type: 'text',
              heading: 'Centered CTA',
              paragraph: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              textAlign: 'center',
              buttonText: 'Button',
              buttonVariant: 'dark',
              buttonHref: '#',
            },
          ]}
        />
      </section>

      <section className="py-40">
        <IntroductionHeader
          title="2 Columns - Left Text + Media"
          description="Left aligned text on the left, media on the right."
        />
        <Spacer mode="number" height={80} />
        <CTA
          columns={2}
          gridType="50-50"
          items={[
            {
              type: 'text',
              heading: 'Left Aligned CTA',
              paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              textAlign: 'left',
              buttonText: 'Button',
              buttonVariant: 'dark',
              buttonHref: '#',
            },
            {
              type: 'media',
              mediaProps: {
                media: 'image',
                imageUrl: 'https://picsum.photos/720/480?3',
                title: 'CTA media',
                aspect: 'rectangle',
              },
            },
          ]}
        />
      </section>

      <section className="py-40">
        <IntroductionHeader
          title="2 Columns - Media + Left Text"
          description="Media on the left, left aligned text on the right."
        />
        <Spacer mode="number" height={80} />
        <CTA
          columns={2}
          gridType="50-50"
          items={[
            {
              type: 'media',
              mediaProps: {
                media: 'image',
                imageUrl: 'https://picsum.photos/720/480?4',
                title: 'CTA media',
                aspect: 'rectangle',
              },
            },
            {
              type: 'text',
              heading: 'Left Aligned CTA',
              paragraph: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              textAlign: 'left',
              buttonText: 'Button',
              buttonVariant: 'dark',
              buttonHref: '#',
            },
          ]}
        />
      </section>

      <section className="py-40">
        <IntroductionHeader
          title="2 Columns - 75/25"
          description="Wider text column and smaller media column."
        />
        <Spacer mode="number" height={80} />
        <CTA
          columns={2}
          gridType="75-25"
          items={[
            {
              type: 'text',
              heading: 'Wide Text Column',
              paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
              textAlign: 'left',
              buttonText: 'Button',
              buttonVariant: 'dark',
              buttonHref: '#',
            },
            {
              type: 'media',
              mediaProps: {
                media: 'image',
                imageUrl: 'https://picsum.photos/600/480?5',
                title: 'CTA media',
                aspect: 'rectangle',
              },
            },
          ]}
        />
      </section>

      <section className="py-40">
        <IntroductionHeader
          title="2 Columns - 25/75"
          description="Smaller text column and wider media column."
        />
        <Spacer mode="number" height={80} />
        <CTA
          columns={2}
          gridType="25-75"
          items={[
            {
              type: 'media',
              mediaProps: {
                media: 'image',
                imageUrl: 'https://picsum.photos/900/480?6',
                title: 'CTA media',
                aspect: 'rectangle',
              },
            },
            {
              type: 'text',
              heading: 'Narrow Text Column',
              paragraph: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              textAlign: 'left',
              buttonText: 'Button',
              buttonVariant: 'dark',
              buttonHref: '#',
            },
          ]}
        />
      </section>

      <section className="py-40">
        <IntroductionHeader
          title="2 Columns - 25/75 (Image Left, List Right)"
          description="Image on the left, left-aligned list on the right."
        />
        <Spacer mode="number" height={80} />
        <CTA
          columns={2}
          gridType="25-75"
          items={[
            {
              type: 'media',
              mediaProps: {
                media: 'image',
                imageUrl: 'https://picsum.photos/520/480?7',
                title: 'CTA media',
                aspect: 'rectangle',
              },
            },
            {
              type: 'text',
              heading: 'List Column',
              list: [
                'Lorem ipsum dolor sit amet',
                'Sed do eiusmod tempor incididunt',
              ],
              textAlign: 'left',
              buttonText: 'Button',
              buttonVariant: 'dark',
              buttonHref: '#',
            },
          ]}
        />
      </section>
    </div>
  );
}

