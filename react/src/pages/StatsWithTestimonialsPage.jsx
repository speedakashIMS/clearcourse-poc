import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import StatsWithTestimonials from "../components/StatsWithTestimonials";
import IntroductionHeader from "../components/IntroductionHeader";
import Spacer from "../components/Spacer";

export default function StatsWithTestimonialsPage() {
  const stats = [
    {
      statMedia: {
        media: 'image',
        imageUrl: 'https://placehold.co/192x192?text=1&font=roboto',
        aspect: 'square',
      },
      stat: '1234',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      testimonial: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."',
      name: 'John Doe',
      role: 'CEO',
      imageUrl: 'https://placehold.co/48x48',
      rating: 5,
      statAlign: 'right',
      mediaPosition: 'with-name',
      withPadding: true,
      statBackgroundColor: 'secondary',
      textAlign: 'left'
    }
  ];
  const statsWithLogoAndImage = [
    {
      statMedia: {
        media: 'image',
        imageUrl: 'https://placehold.co/192x192?text=2&font=roboto',
        aspect: 'square',
      },
      stat: '5678',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      testimonial: '"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."',
      name: 'Jane Smith',
      role: 'COO',
      imageUrl: 'https://placehold.co/48x48',
      logoUrl: 'https://placehold.co/80x40?text=Logo',
      rating: 4,
      statAlign: 'right',
      mediaPosition: 'with-name',
      withPadding: true,
    }
  ];

  // Faithful reproduction of Figma node 5068-29328 (Stats Number Counters Section)
  const figmaStats = [
    {
      testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Name',
      role: 'Role',
      imageUrl: 'https://placehold.co/48x48',
      mediaPosition: 'with-name',
      align: 'left',
      stat: '85%',
      description: 'of our clients have seen a significant increase in sales',
      source: 'Giftpro Client Survey',
      statBackgroundColor: 'tertiary',
      textAlign: 'left',
      fontSize: 'lg',
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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Stats With Testimonials</h1>
            <p className="text-body-default text-grey-600 mb-24">Stats combined with testimonial content.</p>
          </div>
        </div>
      </div>

      <div className="bg-grey-50 py-40">
        <div className="space-y-60">
          <section className="section py-120 bg-white">
            <IntroductionHeader
              title="Make the world your oyster"
              description="Hospitality never sleeps, so whether you’re a single venue that sells locally or a global chain that sells worldwide, Giftpro has a solution that will help you sell 24/7 to almost any location, in almost any currency."
            />
            <Spacer height={36} />
            <StatsWithTestimonials stats={figmaStats} order="testimonial-first" />
          </section>

          <section className="section py-40 bg-tertiary">
            <IntroductionHeader
              title="Stats with Testimonial"
              description="Stats combined with customer testimonials for social proof."
            />
            <Spacer height={40} />
            <StatsWithTestimonials stats={stats} statTextAlign="center" />
          </section>

          <section className="section py-40 bg-tertiary">
            <IntroductionHeader
              title="Stats with Testimonial (Testimonial First)"
              description="Testimonial column displayed before the stats."
            />
            <Spacer height={40} />
            <StatsWithTestimonials stats={stats} statTextAlign="center" order="testimonial-first" />
          </section>

          <section className="section py-40 bg-primary">
            <IntroductionHeader
              title="Stats with Testimonial (Logo + Image)"
              description="Testimonial uses both a logo and profile image."
            />
            <Spacer height={40} />
            <StatsWithTestimonials stats={statsWithLogoAndImage} statTextAlign="center"/>
          </section>
        </div>
      </div>
    </div>
  );
}
