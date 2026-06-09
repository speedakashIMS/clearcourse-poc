import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Hero from '../components/Hero';
import IntroductionHeader from '../components/IntroductionHeader';
import Spacer from '../components/Spacer';

const baseSlide = {
  title: 'Hero Title',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  buttons: [
    { text: 'Button', href: '#', variant: 'light' },
    { text: 'Button', href: '#', variant: 'dark' },
    { text: 'Button', href: '#', variant: 'light-outlined' },
  ],
  logos: [
    { src: 'https://placehold.co/119x46', alt: 'Logo' },
    { src: 'https://placehold.co/119x46', alt: 'Logo' },
    { src: 'https://placehold.co/119x46', alt: 'Logo' },
  ],
  widget: `<div class="trustpilot-widget" data-locale="en-US" data-template-id="54197383fd9dceac42a68694" data-businessunit-id="4be404d6000064000508c288" data-style-width="100%" data-style-size="XS" data-token="7681260a-b0e9-4a16-9e73-b0c231080edd" data-text-color="dark" data-border-type="shadow" data-headline="star" data-brand-color="#E3008C" data-contrast-color="#000000" data-background="light" data-external-elements-color="dark"><a href="https://www.trustpilot.com/review/www.esurv.co.uk" target="_blank" rel="noopener">Trustpilot</a></div>`,
};

const imageMedia = {
  type: 'image',
  imageUrl: 'https://fastly.picsum.photos/id/485/756/595.jpg?hmac=jRmfLMIhNqxCD4y4M27lbeN0PxaTsTdSFXwHVQIbJk0',
  title: 'Hero Image',
};

const slideWithMedia = { ...baseSlide, media: imageMedia };

const carouselSlides = [
  { ...slideWithMedia, title: 'Hero Title 1' },
  { ...slideWithMedia, title: 'Hero Title 2' },
  { ...slideWithMedia, title: 'Hero Title 3' },
];

export default function HeroPage() {
  return (
    <div>
      <div className="bg-grey-200 py-32">
        <div className="container">
          <a
            href="/"
            className="inline-flex items-center gap-10 text-grey-600 hover:text-grey-950 mb-20 transition-colors"
          >
            <ArrowLeftIcon className="h-20 w-20" />
            Back to Home
          </a>
          <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Hero Component</h1>
          <p className="text-body-default text-grey-600 mb-24">
            Two-column hero with content and media. Order and media style (flush or framed) are configurable.
          </p>
        </div>
      </div>

      <div className="bg-grey-50 py-40">
        <div className="space-y-60">
          <section>
            <IntroductionHeader
              title="Flush media on the left"
              description="Media column first (order: media-first), flush style."
            />
            <Spacer height={40} />
            <div className="section bg-primary">
              <Hero slides={[slideWithMedia]} order="media-first" mediaStyle="flush" />
            </div>
            <Spacer height={40} />
          </section>

          <section>
            <IntroductionHeader
              title="Flush media on the right"
              description="Content column first (order: content-first), flush style."
            />
            <Spacer height={40} />
            <div className="section bg-primary">
              <Hero slides={[slideWithMedia]} order="content-first" mediaStyle="flush" />
            </div>
            <Spacer height={40} />
          </section>

          <section>
            <IntroductionHeader
              title="Framed media on the left"
              description="Media column first, framed style (padding around media)."
            />
            <Spacer height={40} />
            <div className="section bg-primary">
              <Hero slides={[slideWithMedia]} order="media-first" mediaStyle="framed" />
            </div>
            <Spacer height={40} />
          </section>

          <section>
            <IntroductionHeader
              title="Framed media on the right"
              description="Content column first, framed style (padding around media)."
            />
            <Spacer height={40} />
            <div className="section bg-primary">
              <Hero slides={[slideWithMedia]} order="content-first" mediaStyle="framed" />
            </div>
            <Spacer height={40} />
          </section>

          <section>
            <IntroductionHeader
              title="Flush media in a carousel"
              description="Multiple slides, flush style. Dots for slide navigation."
            />
            <Spacer height={40} />
            <div className="section bg-primary">
              <Hero slides={carouselSlides} order="content-first" mediaStyle="flush" />
            </div>
            <Spacer height={40} />
          </section>

          <section>
            <IntroductionHeader
              title="Framed media in a carousel"
              description="Multiple slides, framed style. Dots for slide navigation."
            />
            <Spacer height={40} />
            <div className="section bg-primary">
              <Hero slides={carouselSlides} order="content-first" mediaStyle="framed" />
            </div>
            <Spacer height={40} />
          </section>
        </div>
      </div>
    </div>
  );
}
