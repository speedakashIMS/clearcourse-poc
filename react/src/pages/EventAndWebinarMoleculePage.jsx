import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import EventAndWebinarMolecule from "../components/molecules/EventAndWebinarMolecule";
import IntroductionHeader from "../components/IntroductionHeader";
import Spacer from "../components/Spacer";

export default function EventAndWebinarMoleculePage() {
  const sampleEvent = {
    image: 'https://picsum.photos/71/71?random=1',
    title: 'Annual Tech Conference 2024',
    description: 'Join us for the biggest technology conference of the year featuring industry leaders and innovative solutions.',
    date: '12.12.26',
    location: 'Location',
    linkUrl: '#',
    linkLabel: 'Register Now',
  };

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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Event and Webinar Molecule</h1>
            <p className="text-body-default text-grey-600 mb-24">
              Event/webinar molecule with logo position and alignment options.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-grey-50 py-40">
        <div className="space-y-60">
          <section>
            <IntroductionHeader
              title="Logo Left"
              description="Logo on the left, content on the right."
            />
            <Spacer height={40} />
            <div className="container">
              <div className="grid">
                <div className="bg-white p-events-padding">
                  <EventAndWebinarMolecule
                    {...sampleEvent}
                    logoPosition="left"
                  />
                </div>
              </div>
            </div>
          </section>

          <section>
            <IntroductionHeader
              title="Logo Top (Centered)"
              description="Logo on top with centered text."
            />
            <Spacer height={40} />
            <div className="container">
              <div className="grid md:grid-cols-2">
                <div className="bg-white p-events-padding">
                  <EventAndWebinarMolecule
                    {...sampleEvent}
                    logoPosition="top"
                    textAlign="center"
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

