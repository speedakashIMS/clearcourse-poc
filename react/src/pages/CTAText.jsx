import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import CTAText from '../components/molecules/CTAText';
import IntroductionHeader from '../components/IntroductionHeader';
import Spacer from '../components/Spacer';

export default function CTATextPage() {
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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">CTA Text Molecule</h1>
            <p className="text-body-default text-grey-600 mb-24">Text variant for CTA columns</p>
          </div>
        </div>
      </div>

      <section className="py-40">
        <IntroductionHeader
          title="Centered Text"
          description="Centered heading, paragraph, image, list, and button."
        />
        <Spacer mode="number" height={80} />
        <div className="container">
          <CTAText
            heading="CTA Text Heading"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            imageUrl="https://picsum.photos/130/101"
            imageAlt="CTA image"
            list={['List item one', 'List item two', 'List item three']}
            textAlign="center"
            buttonText="Button"
            buttonVariant="dark"
            buttonHref="#"
          />
        </div>
      </section>
    </div>
  );
}

