import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import IntroductionHeader from '../components/IntroductionHeader';

export default function IntroductionHeaderPage() {
  return (
    <div>
      <div className="bg-grey-200 py-32">
        <div className="container">
          <div>
            <a
              href="/"
              className="inline-flex items-center gap-10 text-grey-600 hover:text-grey-950 mb-20 transition-colors"
            >
              <ArrowLeftIcon className="h-20 w-20" />
              Back to Home
            </a>
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Introduction Header</h1>
            <p className="text-body-default text-grey-600 mb-24">Title + description block</p>
          </div>
        </div>
      </div>

      <section className="py-40 space-y-40">
        <IntroductionHeader
          title="Section Header"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <IntroductionHeader
          title="Accent Header"
          titleAccent
          titleHeaderType="h3"
          description="Smaller header with accent font and short description."
          descriptionSize="small"
        />
      </section>
    </div>
  );
}

