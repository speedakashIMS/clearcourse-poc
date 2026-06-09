import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Trust from "../components/Trust";
import IntroductionHeader from "../components/IntroductionHeader";
import Spacer from "../components/Spacer";

export default function TrustPage() {
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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Trust Component</h1>
            <p className="text-body-default text-grey-600 mb-24">Trust strip with optional carousel</p>
          </div>
        </div>
      </div>

      <div className="bg-grey-50 py-40">
        <div className="space-y-60">
          {/* Trust - iframe */}
          <section>
            <IntroductionHeader
              title="Trust - Iframe"
              description="Full-width trust strip using iframe media."
            />
            <Spacer height={40} />
            <Trust
              media={{
                type: 'iframe',
                iframeUrl: 'https://www.example.com/trust-badge-1',
                title: 'Trust Badge 1'
              }}
            />
            <Spacer height={40} />
          </section>

          {/* Trust - iframe carousel */}
          <section>
            <IntroductionHeader
              title="Trust - Carousel (Iframe)"
              description="Full-width trust strip carousel using iframe media."
            />
            <Spacer height={40} />
            <Trust
              items={[
                {
                  type: 'iframe',
                  iframeUrl: 'https://www.example.com/trust-badge-1',
                  title: 'Trust Badge 1'
                },
                {
                  type: 'iframe',
                  iframeUrl: 'https://www.example.com/trust-badge-2',
                  title: 'Trust Badge 2'
                },
                {
                  type: 'iframe',
                  iframeUrl: 'https://www.example.com/trust-badge-3',
                  title: 'Trust Badge 3'
                },
              ]}
            />
            <Spacer height={40} />
          </section>
        </div>
      </div>
    </div>
  );
}
