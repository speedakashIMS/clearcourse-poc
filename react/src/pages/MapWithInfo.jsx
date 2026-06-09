import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import MapWithInfo from "../components/MapWithInfo";
import IntroductionHeader from "../components/IntroductionHeader";
import Buttons from "../components/Buttons";
import Spacer from "../components/Spacer";

export default function MapWithInfoPage() {
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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Map With Info Component</h1>
            <p className="text-body-default text-grey-600 mb-24">Map with heading, text, and buttons</p>
          </div>
        </div>
      </div>

      <section className="py-40 bg-grey-50">
        <IntroductionHeader
          title="Section Header"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Spacer height={40} />
        <MapWithInfo
          richText="<h3>Card Title</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
          valueList={{
            useIcon: true,
            size: 'medium',
            stacked: false,
            items: [
              {text: 'Lorem ipsum dolor sit amet, cons ellore magna aliqua.', number: 1},
              {text:'Lorem ipsum dolor sit amet, con, e et dolore magna aliqua.', number: 1},
            ],
          }}
          buttonText="Button"
          buttonHref="#"
          buttonVariant="dark"
          mapIframeUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.00425560038!2d-74.25196116091908!3d40.69767006536973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250b4033d2f3f%3A0x97c0b1b0b1b0b1b0!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
        />
        <Spacer height={40} />
        <Buttons
          buttons={[
            { text: 'Button', variant: 'dark', href: '#' },
            { text: 'Button', variant: 'dark', href: '#' },
          ]}
        />
      </section>
    </div>
  );
}

