import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import HeroBackgroundImage from '../components/HeroBackgroundImage';
import IntroductionHeader from '../components/IntroductionHeader';
import Spacer from '../components/Spacer';

const baseSlide = {
  title: 'Hero Title',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  backgroundImage: 'https://picsum.photos/id/1043/1920/1080',
  buttons: [
    { text: 'Button', href: '#', variant: 'light' },
    { text: 'Button', href: '#', variant: 'dark' },
    { text: 'Button', href: '#', variant: 'light-outlined' },
  ],
  logos: [
    { src: 'https://placehold.co/300x300', alt: 'Logo' },
    // { src: 'https://placehold.co/119x46', alt: 'Logo' },
    // { src: 'https://placehold.co/119x46', alt: 'Logo' },
  ],
  trustpilotWidget: `
    <div class="rounded-10 bg-grey-500 flex h-[74px] p-10 justify-center items-center gap-10 text-white">
      Trustpilot Widget
    </div>
  `,
};

const slideLeft = [{ ...baseSlide, textAlignment: 'left' }];
const slideCenter = [{ ...baseSlide, textAlignment: 'center' }];
const slideRight = [{ ...baseSlide, textAlignment: 'right' }];
const alignments = ['left', 'center', 'right'];
const carouselMixed = [...Array(4)].map((_, i) => ({
  ...baseSlide,
  textAlignment: alignments[i],
  title: `${baseSlide.title} ${i + 1}`,
}));

const carouselVaried = [
  {
    ...baseSlide,
    textAlignment: 'left',
    title: 'Short',
    description: 'Brief copy.',
    backgroundImage: 'https://picsum.photos/id/1015/1920/1080',
  },
  {
    ...baseSlide,
    textAlignment: 'center',
    title: 'Medium length headline here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    backgroundImage: 'https://picsum.photos/id/1018/1920/1080',
  },
  {
    ...baseSlide,
    textAlignment: 'right',
    title: 'A much longer hero title that wraps across multiple lines',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    backgroundImage: 'https://picsum.photos/id/1025/1920/1080',
  },
  {
    ...baseSlide,
    textAlignment: 'left',
    title: 'Another slide',
    description: 'One line only.',
    backgroundImage: 'https://picsum.photos/id/1035/1920/1080',
  },
];

export default function HeroBackgroundImagePage() {
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
          <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Hero Background Image Component</h1>
          <p className="text-body-default text-grey-600 mb-24">
            Full-width hero with background image covering the slide. Text alignment (left, center, right) per slide.
          </p>
        </div>
      </div>

      <div className="bg-grey-50 py-40">
        <div className="space-y-60">
          <section>
            <IntroductionHeader
              title="Left aligned text"
              description="Single slide, content aligned left. Background image covers the slide."
            />
            <Spacer height={40} />
            <HeroBackgroundImage slides={slideLeft} />
            <Spacer height={40} />
          </section>

          <section>
            <IntroductionHeader
              title="Center text"
              description="Single slide, content aligned center."
            />
            <Spacer height={40} />
            <HeroBackgroundImage slides={slideCenter} />
            <Spacer height={40} />
          </section>

          <section>
            <IntroductionHeader
              title="Right aligned text"
              description="Single slide, content aligned right."
            />
            <Spacer height={40} />
            <HeroBackgroundImage slides={slideRight} />
            <Spacer height={40} />
          </section>

          <section>
            <IntroductionHeader
              title="Carousel with left aligned text"
              description="Multiple slides, each with different text alignment (left, center, right). Dots for navigation."
            />
            <Spacer height={40} />
            <HeroBackgroundImage slides={carouselMixed} />
            <Spacer height={40} />
          </section>

          <section>
            <IntroductionHeader
              title="Carousel with varied content"
              description="Each slide has a different image and different content length (short, medium, long)."
            />
            <Spacer height={40} />
            <HeroBackgroundImage slides={carouselVaried} />
            <Spacer height={40} />
          </section>
        </div>
      </div>
    </div>
  );
}
