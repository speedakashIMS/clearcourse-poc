import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Media from "../components/molecules/Media";
import lottieExampleData from "../assets/lottie-example.json";

export default function MediaMoleculePage() {
  return (
    <div>
      <div className="bg-grey-200 py-32">
        <div className="container">
          {/* Header */}
          <div className="">
            <a
              href="/"
              className="inline-flex items-center gap-10 text-grey-600 hover:text-grey-950 mb-20 transition-colors"
            >
              <ArrowLeftIcon className="h-20 w-20" />
              Back to Home
            </a>
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Media Molecule</h1>
            <p className="text-body-default text-grey-600 mb-24">Image, Lottie, and iframe examples</p>
          </div>
        </div>
      </div>

      <div className="bg-grey-50 py-40">
        <div className="container">
          <div className="space-y-40">
            {/* Default media types */}
            <section>
              <h2 className="text-headings-h2 font-bold text-grey-950 mb-24">Default Media Types</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
                <div className="bg-white overflow-hidden">
                  <Media
                    media="image"
                    aspect="rectangle"
                    imageUrl="https://picsum.photos/600/450"
                    title="Image"
                  />
                </div>
                <div className="bg-white overflow-hidden">
                  <Media
                    media="lottie"
                    aspect="rectangle"
                    lottieData={lottieExampleData}
                    title="Lottie"
                  />
                </div>
                <div className="bg-white overflow-hidden">
                  <Media
                    media="iframe"
                    aspect="rectangle"
                    iframeUrl="https://example.com"
                    title="Iframe"
                  />
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-headings-h2 font-bold text-grey-950 mb-24">Square Media</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
                <div className="bg-white overflow-hidden">
                  <Media
                    media="image"
                    aspect="square"
                    imageUrl="https://picsum.photos/500/500"
                    title="Square Image"
                  />
                </div>
                <div className="bg-white overflow-hidden">
                  <Media
                    media="lottie"
                    aspect="square"
                    lottieData={lottieExampleData}
                    title="Square Lottie"
                  />
                </div>
                <div className="bg-white overflow-hidden">
                  <Media
                    media="iframe"
                    aspect="square"
                    iframeUrl="https://example.com"
                    title="Square Iframe"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

