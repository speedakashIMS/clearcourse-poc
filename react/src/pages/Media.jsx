import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import MediaComponent from "../components/Media";
import lottieExampleData from "../assets/lottie-example.json";

export default function MediaPage() {
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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Media Component</h1>
            <p className="text-body-default text-grey-600 mb-24">Image, Lottie, and iframe examples</p>
          </div>
        </div>
      </div>

      <div className="bg-grey-50 py-40">
        <div className="container">
          <div className="space-y-40">
            <section>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-32">
                <div>
                  <h3 className="text-headings-h3 font-semibold text-grey-950 mb-12">Image - Default</h3>
                  <MediaComponent
                    media="image"
                    imageUrl="https://picsum.photos/1200/800"
                    aspect="default"
                  />
                </div>
                <div>
                  <h3 className="text-headings-h3 font-semibold text-grey-950 mb-12">Image - Rectangle</h3>
                  <MediaComponent
                    media="image"
                    imageUrl="https://picsum.photos/1200/800"
                    aspect="rectangle"
                  />
                </div>
                <div>
                  <h3 className="text-headings-h3 font-semibold text-grey-950 mb-12">Image - Square</h3>
                  <MediaComponent
                    media="image"
                    imageUrl="https://picsum.photos/1200/800"
                    aspect="square"
                  />
                </div>
              </div>
            </section>

            <section>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-32">
                <div>
                  <h3 className="text-headings-h3 font-semibold text-grey-950 mb-12">Lottie - Default</h3>
                  <MediaComponent
                    media="lottie"
                    lottieData={lottieExampleData}
                    aspect="default"
                  />
                </div>
                <div>
                  <h3 className="text-headings-h3 font-semibold text-grey-950 mb-12">Lottie - Rectangle</h3>
                  <MediaComponent
                    media="lottie"
                    lottieData={lottieExampleData}
                    aspect="rectangle"
                  />
                </div>
                <div>
                  <h3 className="text-headings-h3 font-semibold text-grey-950 mb-12">Lottie - Square</h3>
                  <MediaComponent
                    media="lottie"
                    lottieData={lottieExampleData}
                    aspect="square"
                  />
                </div>
              </div>
            </section>

            <section>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-32">
                <div>
                  <h3 className="text-headings-h3 font-semibold text-grey-950 mb-12">Iframe - Default</h3>
                  <MediaComponent
                    media="iframe"
                    iframeUrl="https://example.com"
                    aspect="default"
                  />
                </div>
                <div>
                  <h3 className="text-headings-h3 font-semibold text-grey-950 mb-12">Iframe - Rectangle</h3>
                  <MediaComponent
                    media="iframe"
                    iframeUrl="https://example.com"
                    aspect="rectangle"
                  />
                </div>
                <div>
                  <h3 className="text-headings-h3 font-semibold text-grey-950 mb-12">Iframe - Square</h3>
                  <MediaComponent
                    media="iframe"
                    iframeUrl="https://example.com"
                    aspect="square"
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

