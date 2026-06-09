import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import EventAndWebinar from "../components/EventAndWebinar";
import IntroductionHeader from "../components/IntroductionHeader";
import Spacer from "../components/Spacer";

export default function EventAndWebinarPage() {
  const sampleEvents = [
    {
      image: 'https://picsum.photos/71/71?random=1',
      title: 'Annual Tech Conference 2024',
      description: 'Join us for the biggest technology conference of the year featuring industry leaders and innovative solutions.',
      date: '12.12.26',
      location: 'Location',
      linkUrl: '#',
      linkLabel: 'Register Now',
    },
    {
      image: 'https://picsum.photos/71/71?random=2',
      title: 'Web Development Workshop',
      description: 'Learn modern web development techniques and best practices from experienced developers.',
      date: '12.12.26',
      location: 'Location',
      linkUrl: '#',
      linkLabel: 'Learn More',
    },
    {
      image: 'https://picsum.photos/71/71?random=3',
      title: 'Digital Marketing Summit',
      description: 'Discover the latest trends in digital marketing and network with industry professionals.',
      date: '12.12.26',
      location: 'Location',
      linkUrl: '#',
      linkLabel: 'View Details',
    },
    {
      image: 'https://picsum.photos/71/71?random=4',
      title: 'AI & Machine Learning Expo',
      description: 'Explore cutting-edge AI technologies and machine learning applications in various industries.',
      date: '12.12.26',
      location: 'Location',
      linkUrl: '#',
      linkLabel: 'Get Tickets',
    },
    {
      image: 'https://picsum.photos/71/71?random=5',
      title: 'Cloud Computing Forum',
      description: 'Deep dive into cloud infrastructure, security, and best practices for modern businesses.',
      date: '12.12.26',
      location: 'Location',
      linkUrl: '#',
      linkLabel: 'Register',
    },
    {
      image: 'https://picsum.photos/71/71?random=6',
      title: 'Cybersecurity Workshop',
      description: 'Learn essential cybersecurity skills and protect your organization from threats.',
      date: '12.12.26',
      location: 'Location',
      linkUrl: '#',
      linkLabel: 'Learn More',
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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Event and Webinar Component</h1>
            <p className="text-body-default text-grey-600 mb-24">
              Display events and webinars in flexible grid layouts. Choose column count, layout type, and alignment 
              to create uniform event listings.
            </p>
            <div className="flex flex-wrap gap-10">
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">Grid Layout</span>
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">Two-Column</span>
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">One-Column</span>
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">Multiple Columns</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-grey-50 py-40">
        <div className="space-y-60">
          {/* 1. 1 event of logo left */}
          <section>
            <IntroductionHeader
              title="1 Event - Logo Left"
              description="1 column grid with logo on the left and content on the right."
            />
            <Spacer height={40} />
            <EventAndWebinar
              events={sampleEvents.slice(0, 1)}
              columns={1}
              logoPosition="left"
            />
          </section>

          {/* 2. 2 events (2 column grid) of logo left */}
          <section>
            <IntroductionHeader
              title="2 Events - Logo Left"
              description="2 column grid with logo on the left and content on the right."
            />
            <Spacer height={40} />
            <EventAndWebinar
              events={sampleEvents.slice(0, 2)}
              columns={2}
              logoPosition="left"
            />
          </section>

          {/* 3. 3 events (3 column grid) of logo left */}
          <section>
            <IntroductionHeader
              title="3 Events - Logo Left"
              description="3 column grid with logo on the left and content on the right."
            />
            <Spacer height={40} />
            <EventAndWebinar
              events={sampleEvents.slice(0, 3)}
              columns={3}
              logoPosition="left"
            />
          </section>

          {/* 4. 1 event for logo top */}
          <section>
            <IntroductionHeader
              title="1 Event - Logo Top (Centered)"
              description="1 column grid with logo on top and centered content."
            />
            <Spacer height={40} />
            <EventAndWebinar
              events={sampleEvents.slice(0, 1)}
              columns={1}
              logoPosition="top"
              textAlign="center"
            />
          </section>

          {/* 5. 2 events for 2 column grid of logo top */}
          <section>
            <IntroductionHeader
              title="2 Events - Logo Top (Centered)"
              description="2 column grid with logo on top and centered content."
            />
            <Spacer height={40} />
            <EventAndWebinar
              events={sampleEvents.slice(0, 2)}
              columns={2}
              logoPosition="top"
              textAlign="center"
            />
          </section>

          {/* 6. 3 events for 3 column grid of logo top */}
          <section>
            <IntroductionHeader
              title="3 Events - Logo Top (Centered)"
              description="3 column grid with logo on top and centered content."
            />
            <Spacer height={40} />
            <EventAndWebinar
              events={sampleEvents.slice(0, 3)}
              columns={3}
              logoPosition="top"
              textAlign="center"
            />
          </section>

          {/* 7. 4 events for 4 column grid of logo top */}
          <section>
            <IntroductionHeader
              title="4 Events - Logo Top (Centered)"
              description="4 column grid with logo on top and centered content."
            />
            <Spacer height={40} />
            <EventAndWebinar
              events={sampleEvents.slice(0, 4)}
              columns={4}
              logoPosition="top"
              textAlign="center"
            />
          </section>
        </div>
      </div>
    </div>
  );
}
