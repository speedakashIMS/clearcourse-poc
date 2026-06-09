import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import StatsWithMedia from "../components/StatsWithMedia";
import IntroductionHeader from "../components/IntroductionHeader";
import Spacer from "../components/Spacer";
import lottieExampleData from "../assets/lottie-example.json";

export default function StatsWithMediaPage() {
  const baseStat = {
    statMedia: {
      media: 'image',
      imageUrl: 'https://placehold.co/192x192?text=1&font=roboto',
      aspect: 'square',
    },
    stat: '1234',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  };

  const statsWithMediaImage = [
    {
      ...baseStat,
      media: {
        type: 'image',
        imageUrl: 'https://placehold.co/558x219',
        title: 'Stats image',
      },
    }
  ];

  const statsWithMediaVideo = [
    {
      ...baseStat,
      media: {
        type: 'video',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        title: 'Stats video',
      },
    }
  ];

  const statsWithMediaLottie = [
    {
      ...baseStat,
      media: {
        type: 'lottie',
        lottieData: lottieExampleData,
        title: 'Stats animation',
      },
    }
  ];

  const statsWithMediaIframe = [
    {
      ...baseStat,
      media: {
        type: 'iframe',
        iframeUrl: 'https://www.example.com',
        title: 'Stats iframe',
      },
    }
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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Stats With Media</h1>
            <p className="text-body-default text-grey-600 mb-24">Stats paired with a media block.</p>
          </div>
        </div>
      </div>

      <div className="bg-grey-50 py-40">
        <div className="space-y-60">
          <section className="section py-40 bg-tertiary">
            <IntroductionHeader
              title="Stats with Media (Image)"
              description="Stats paired with images using the media prop."
            />
            <Spacer height={40} />
            <StatsWithMedia stats={statsWithMediaImage} statTextAlign="left" />
          </section>

          <section className="section py-40 bg-tertiary">
            <IntroductionHeader
              title="Stats with Media (Media First)"
              description="Media column shown before the stats."
            />
            <Spacer height={40} />
            <StatsWithMedia stats={statsWithMediaImage} statTextAlign="left" order="media-first" />
          </section>

          <section className="section py-40 bg-primary">
            <IntroductionHeader
              title="Stats with Media (YouTube)"
              description="Stats paired with YouTube videos."
            />
            <Spacer height={40} />
            <StatsWithMedia stats={statsWithMediaVideo} statTextAlign="left" />
          </section>

          <section className="section py-40 bg-tertiary">
            <IntroductionHeader
              title="Stats with Media (Lottie)"
              description="Stats paired with Lottie animations."
            />
            <Spacer height={40} />
            <StatsWithMedia stats={statsWithMediaLottie} statTextAlign="left" />
          </section>

          <section className="section py-40 bg-tertiary">
            <IntroductionHeader
              title="Stats with Media (Iframe)"
              description="Stats paired with iframe content."
            />
            <Spacer height={40} />
            <StatsWithMedia stats={statsWithMediaIframe} statTextAlign="left" />
          </section>
        </div>
      </div>
    </div>
  );
}
