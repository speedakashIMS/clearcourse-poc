import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import MapLocationMolecule from "../components/molecules/MapLocationMolecule";
import IntroductionHeader from "../components/IntroductionHeader";
import Spacer from "../components/Spacer";

export default function MapLocationMoleculePage() {
  const pinsWithIcons = [
    { text: "123 Main Street", iconName: "pin" },
    { text: "contact@example.com", iconName: "envelope", type: "email" },
    { text: "+1 234 567 890", iconName: "phone", type: "phone" },
  ];

  const pinsTextOnly = [
    { text: "Plain text line", type: "text" },
    { text: "Another text line" },
  ];

  const pinsEmail = [
    { text: "hello@example.com", iconName: "envelope", type: "email" },
  ];

  const pinsPhone = [
    { text: "+1 234 567 890", iconName: "phone", type: "phone" },
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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Map Location Molecule</h1>
            <p className="text-body-default text-grey-600 mb-24">Location card with icon and pin list. Pins support type: text (default), email (mailto), phone (tel).</p>
          </div>
        </div>
      </div>

      <div className="bg-grey-50 py-40">
        <div className="container space-y-60">
          <section className="max-w-3xl">
            <IntroductionHeader
              title="With image"
              description="Location card with image and mixed pin types (text, email link, phone link)."
            />
            <Spacer height={40} />
            <MapLocationMolecule
              title="Office Location"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              imageSrc="https://placehold.co/96x96?text=Image"
              imageAlt="Location"
              pins={pinsWithIcons}
            />
          </section>

          <section className="max-w-3xl">
            <IntroductionHeader
              title="Without image"
              description="Location card without image, pins only."
            />
            <Spacer height={40} />
            <MapLocationMolecule
              title="Contact"
              description="Get in touch."
              pins={pinsWithIcons}
            />
          </section>

          <section className="max-w-3xl">
            <IntroductionHeader
              title="Pin type: text (default)"
              description="Pins rendered as plain text. Omit type or set type: 'text'."
            />
            <Spacer height={40} />
            <MapLocationMolecule
              title="Address"
              description="Text-only pins."
              pins={pinsTextOnly}
            />
          </section>

          <section className="max-w-3xl">
            <IntroductionHeader
              title="Pin type: email"
              description="Pin rendered as a mailto: link. Click to open email client."
            />
            <Spacer height={40} />
            <MapLocationMolecule
              title="Email us"
              description="Send us an email."
              pins={pinsEmail}
            />
          </section>

          <section className="max-w-3xl">
            <IntroductionHeader
              title="Pin type: phone"
              description="Pin rendered as a tel: link. On mobile, tap to call."
            />
            <Spacer height={40} />
            <MapLocationMolecule
              title="Call us"
              description="Give us a call."
              pins={pinsPhone}
            />
          </section>
        </div>
      </div>
    </div>
  );
}

