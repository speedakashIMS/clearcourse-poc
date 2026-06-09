import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Logos from "../components/LogosFramed";
import IntroductionHeader from "../components/IntroductionHeader";
import Buttons from "../components/Buttons";
import Spacer from "../components/Spacer";

export default function LogosPage() {
  const logos = [
    { src: "https://placehold.co/135x20?text=Logo+1", alt: "Logo 1" },
    { src: "https://placehold.co/135x20?text=Logo+2", alt: "Logo 2" },
    { src: "https://placehold.co/135x20?text=Logo+3", alt: "Logo 3" },
    { src: "https://placehold.co/135x20?text=Logo+4", alt: "Logo 4" },
    { src: "https://placehold.co/135x20?text=Logo+5", alt: "Logo 5" },
    { src: "https://placehold.co/135x20?text=Logo+6", alt: "Logo 6" },
    { src: "https://placehold.co/135x20?text=Logo+7", alt: "Logo 7" },
    { src: "https://placehold.co/135x20?text=Logo+8", alt: "Logo 8" },
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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Logos Framed Component</h1>
            <p className="text-body-default text-grey-600 mb-24">Framed logo grid with header copy and buttons</p>
          </div>
        </div>
      </div>

      <div className="bg-grey-50 py-40">
        <div className="space-y-60">
          <section>
            <IntroductionHeader
              title="Default (5 logos)"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Spacer height={40} />

            <div className="container">
            <Logos logos={logos.slice(0, 5)} />
            </div>

            <Spacer height={40} />
            <Buttons
              buttons={[
                { text: "Button", variant: "dark", href: "#" },
                { text: "Button", variant: "dark", href: "#" },
                { text: "Button", variant: "dark", href: "#" },
              ]}
            />
          </section>

          <section>
            <IntroductionHeader
              title="Compact (4 logos, smaller text)"
              titleHeaderType="h3"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              descriptionSize="small"
            />
            <Spacer height={40} />
            <div className="container"> <Logos logos={logos.slice(0, 4)} /></div>
            <Spacer height={40} />
            <Buttons
              buttons={[
                { text: "Button", variant: "dark", href: "#" },
              ]}
            />
          </section>

          <section>
            <IntroductionHeader
              title="Extended (9 logos)"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Spacer height={40} />
            <div className="container"> <Logos logos={logos} /></div>
            <Spacer height={40} />
            <Buttons
              buttons={[
                { text: "Button", variant: "dark", href: "#" },
              ]}
            />
          </section>

        </div>
      </div>
    </div>
  );
}

