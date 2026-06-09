import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import TestimonialMolecule from "../components/molecules/TestimonialMolecule";

export default function TestimonialMoleculePage() {
  const sampleTestimonials = [
    {
      testimonial: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”',
      name: 'John Doe',
      role: 'CEO, Company Name',
      imageUrl: 'https://placehold.co/120x120?text=JD',
    },
    {
      testimonial: '“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”',
      name: 'Jane Smith',
      role: 'CTO, Tech Corp',
      imageUrl: 'https://placehold.co/120x120?text=JS',
    },
    {
      testimonial: '“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.”',
      name: 'Bob Johnson',
      role: 'Director, Marketing',
      imageUrl: 'https://placehold.co/120x120?text=BJ',
    },
  ];

  return (
    <div className="bg-grey-50 pb-[200px]">
      <div className="bg-grey-200">
        <div className="container py-32">
          <a
            href="/"
            className="inline-flex items-center gap-10 text-grey-600 hover:text-grey-950 mb-20 transition-colors"
          >
            <ArrowLeftIcon className="h-20 w-20" />
            Back to Home
          </a>
          <div className="max-w-[760px]">
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-16">Testimonial Molecule</h1>
            <p className="text-body-default text-grey-600 mb-24">
              Simplified testimonial molecule with alignment, padding, rating, and media options.
            </p>
          </div> 
        </div>
      </div>

      <div className="py-40">
        <div className="space-y-60">
          <section>
            <div className="container pb-24">
              <h2 className="text-headings-h2 font-bold text-grey-950">Alignment</h2>
              <p className="text-body-small text-grey-600">Left and center alignment.</p>
            </div>
            <div className="container">
              <div className="grid md:grid-cols-2 gap-24">
                <div className="bg-grey-100">
                  <TestimonialMolecule {...sampleTestimonials[0]} align="left" withPadding />
                </div>
                <div className="bg-grey-100">
                  <TestimonialMolecule {...sampleTestimonials[1]} align="center" withPadding />
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container pb-24">
              <h2 className="text-headings-h2 font-bold text-grey-950">Padding</h2>
              <p className="text-body-small text-grey-600">Without padding, then with padding.</p>
            </div>
            <div className="container space-y-24">
              <div className="grid md:grid-cols-2 gap-24">
                <div className="bg-grey-100">
                  <TestimonialMolecule {...sampleTestimonials[0]} />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-24">
                <div className="bg-grey-100">
                  <TestimonialMolecule {...sampleTestimonials[0]} withPadding />
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container pb-24">
              <h2 className="text-headings-h2 font-bold text-grey-950">Rating</h2>
              <p className="text-body-small text-grey-600">Stars shown when rating is provided.</p>
            </div>
            <div className="container">
              <div className="grid md:grid-cols-2 gap-24">
                <div className="bg-grey-100">
                  <TestimonialMolecule {...sampleTestimonials[0]} rating={5} withPadding />
                </div>
                <div className="bg-grey-100">
                  <TestimonialMolecule {...sampleTestimonials[1]} rating={4} withPadding />
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container pb-24">
              <h2 className="text-headings-h2 font-bold text-grey-950">Media Type</h2>
              <p className="text-body-small text-grey-600">Profile image or logo.</p>
            </div>
            <div className="container">
              <div className="grid md:grid-cols-2 gap-24">
                <div className="bg-grey-100">
                  <TestimonialMolecule {...sampleTestimonials[2]} imageUrl="https://placehold.co/120x120?text=Img" withPadding />
                </div>
                <div className="bg-grey-100">
                  <TestimonialMolecule
                    {...sampleTestimonials[2]}
                    imageUrl={null}
                    logoUrl="https://placehold.co/120x48?text=Logo"
                    withPadding
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-24 mt-24">
                <div className="bg-grey-100">
                  <TestimonialMolecule
                    {...sampleTestimonials[2]}
                    imageUrl="https://placehold.co/120x120?text=Img"
                    logoUrl="https://placehold.co/120x48?text=Logo"
                    withPadding
                  />
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container pb-24">
              <h2 className="text-headings-h2 font-bold text-grey-950">Media Position</h2>
              <p className="text-body-small text-grey-600">Top, bottom, or with name and role (left and center).</p>
            </div>
            <div className="container space-y-24">
              <div className="grid md:grid-cols-2 gap-24">
                <div className="bg-grey-100">
                  <TestimonialMolecule
                    {...sampleTestimonials[0]}
                    mediaPosition="top"
                    withPadding
                  />
                </div>
                <div className="bg-grey-100">
                  <TestimonialMolecule
                    {...sampleTestimonials[1]}
                    mediaPosition="bottom"
                    withPadding
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-24">
                <div className="bg-grey-100">
                  <TestimonialMolecule
                    {...sampleTestimonials[2]}
                    mediaPosition="with-name"
                    withPadding
                  />
                </div>
                <div className="bg-grey-100">
                  <TestimonialMolecule
                    {...sampleTestimonials[2]}
                    logoUrl="https://placehold.co/120x48?text=Logo"
                    mediaPosition="with-name"
                    withPadding
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-24">
                <div className="bg-grey-100">
                  <TestimonialMolecule
                    {...sampleTestimonials[0]}
                    align="center"
                    mediaPosition="top"
                    withPadding
                  />
                </div>
                <div className="bg-grey-100">
                  <TestimonialMolecule
                    {...sampleTestimonials[1]}
                    align="center"
                    mediaPosition="bottom"
                    withPadding
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-24">
                <div className="bg-grey-100">
                  <TestimonialMolecule
                    {...sampleTestimonials[2]}
                    align="center"
                    mediaPosition="with-name"
                    withPadding
                  />
                </div>
                <div className="bg-grey-100">
                  <TestimonialMolecule
                    {...sampleTestimonials[2]}
                    align="center"
                    logoUrl="https://placehold.co/120x48?text=Logo"
                    mediaPosition="with-name"
                    withPadding
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
