import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import FormComponent from '../components/FormComponent';
import Form from '../components/Form';
import IntroductionHeader from '../components/IntroductionHeader';
import FormContactUs from "../components/FormContactUs";

/**
 * FormComponentPage - Sample pages for FormComponent with different variants
 */
export default function FormComponentPage () {
  // Sample media data
  const sampleMedia = {
    media: 'image',
    imageUrl: 'https://picsum.photos/600/400?random=1',
    title: 'Sample Image',
  };

  // Sample video data
  const sampleVideo = {
    media: 'video',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    title: 'Sample YouTube Video',
  };

  // Sample text content
  const sampleTextContent = {
    title: 'Contact Us',
    description:
      'Get in touch with us. Fill out the form below and we will get back to you as soon as possible. We are here to help you with any questions or concerns you may have.',
    checkItems: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    ],
  };

  const sampleRichFormTextContent = {
    titleItems: [
      { text: 'Request a ', fontStyle: 'normal', color: 'primary' },
      { text: 'FREE', fontStyle: 'accent', color: 'secondary' },
      { text: ' Demo.', fontStyle: 'normal', color: 'primary' },
    ],
    text: 'Tell us about your needs and we will schedule a personalized walkthrough. Complete the form and our team will respond within one business day.',
    contactItems: [
      { icon: 'address', text: '10 Finsbury Square, London EC2A 1AF, United Kingdom' },
      { icon: 'phone', text: '+44 20 7123 4567', href: 'tel:+442071234567' },
      { icon: 'email', text: 'demos@example.com', href: 'mailto:demos@example.com' },
    ],
    button: {
      text: 'View product overview',
      href: '#',
      variant: 'dark-outlined',
      size: 'btn-md',
    },
  };

  const demoFormFields = [
    { type: 'text', name: 'fullName', label: 'Full name', required: true, id: 'demo-rich-fullname' },
    { type: 'email', name: 'email', label: 'Work email', required: true, validationRegex: 'email', id: 'demo-rich-email' },
    { type: 'tel', name: 'phone', label: 'Phone', id: 'demo-rich-phone' },
    { type: 'textarea', name: 'message', label: 'How can we help?', id: 'demo-rich-message' },
  ];

  const authoredFormHtml = `
<div class="flex flex-col gap-y-form-spacing-y">
  <p class="text-body-small text-grey-600">Fields below are static HTML for CMS-authored markup instead of the <code class="text-grey-950">fields</code> array.</p>
  <div>
    <label class="block mb-2 text-sm text-grey-950 font-medium" for="auth-company">Company</label>
    <input class="w-full rounded-10 bg-grey-200 border border-grey-200 p-atom-text-inputs-padding-y text-grey-950" id="auth-company" name="company" type="text" placeholder="Company" />
  </div>
  <div>
    <label class="block mb-2 text-sm text-grey-950 font-medium" for="auth-notes">Notes</label>
    <textarea class="w-full min-h-[100px] rounded-10 bg-grey-200 border border-grey-200 p-atom-text-inputs-padding-y text-grey-950 resize-none" id="auth-notes" name="notes" rows="3" placeholder="Notes"></textarea>
  </div>
</div>`.trim();

  const noopSubmit = (e) => {
    e.preventDefault();
  };

  // Sample accordion data
  const sampleAccordions = [
    {
      title: 'Frequently Asked Question 1',
      content: 'This is the answer to the first frequently asked question. It provides detailed information about the topic.',
      media: {
        media: 'image',
        imageUrl: 'https://picsum.photos/138/62?random=10',
        title: 'FAQ 1 Image',
      },
    },
    {
      title: 'Frequently Asked Question 2',
      content: 'This is the answer to the second frequently asked question. It provides detailed information about another topic.',
      media: {
        media: 'image',
        imageUrl: 'https://picsum.photos/138/62?random=11',
        title: 'FAQ 2 Image',
      },
    },
    {
      title: 'Frequently Asked Question 3',
      content: 'This is the answer to the third frequently asked question. It provides detailed information about yet another topic.',
      media: {
        media: 'image',
        imageUrl: 'https://picsum.photos/138/62?random=12',
        title: 'FAQ 3 Image',
      },
    },
  ];

  return (
    <div>
      <div className="bg-grey-200">
        <div className="container py-32">
          <a
            href="/"
            className="inline-flex items-center gap-10 text-grey-600 hover:text-grey-950 mb-20 transition-colors"
          >
            <ArrowLeftIcon className="h-20 w-20" />
            Back to Home
          </a>
          <div className="max-w-[760px]">
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-16">Form Component</h1>
            <p className="text-body-default text-grey-600 mb-24">
              Display forms with flexible layouts combining form elements with media, text content, or accordions. 
              Choose from single column centered forms or two-column side-by-side layouts.
            </p>
            <div className="flex flex-wrap gap-10">
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">Component</span>
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">Forms</span>
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">Media</span>
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">Layouts</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-40">
        <div className="space-y-60">
          {/* Example 1: 1 Column Form */}
          <section>
            <SectionHeader
              title="1 Column Form"
              description="Single column form layout - 50% width centered on large screens, full width below"
              badge="1 Column"
              badgeColor="blue"
            />
            <div className="container">
              <SamplePageContent />
              <FormComponent
                variant="form-only"
                form={<FormContactUs fieldKey={1} />}
              />
            </div>
          </section>

          {/* Example 2: Two Column Form and Media */}
          <section>
            <SectionHeader
              title="Two Column Form and Media"
              description="Form on left, media on right - 50%-50% split"
              badge="Media"
              badgeColor="green"
            />
            <div className="container">
              <SamplePageContent />
            </div>
            <FormComponent
              variant="form-media"
              formAlignment="left"
              media={sampleMedia}
              form={<FormContactUs fieldKey={2} />}
            />
          </section>

          {/* Example 2: Two Column Form and Media */}
          <section>
            <SectionHeader
              title="Two Column Form and Media - Right Aligned"
              description="Form on right, media on left - 50%-50% split"
              badge="Media"
              badgeColor="green"
            />
            <div className="container">
              <SamplePageContent />
            </div>
            <FormComponent
              variant="form-media"
              formAlignment="right"
              media={sampleMedia}
              form={<FormContactUs fieldKey={2} />}
            />
          </section>

          {/* Example 2.1: Two Column Form and Video */}
          <section>
            <SectionHeader
              title="Two Column Form and Video (YouTube)"
              description="Form on left, YouTube video on right - 50%-50% split with auto height"
              badge="Video"
              badgeColor="red"
            />
            <div className="container">
              <SamplePageContent />
            </div>
            <FormComponent
              variant="form-media"
              formAlignment="left"
              media={sampleVideo}
              form={<FormContactUs fieldKey={3} />}
            />
          </section>

          {/* Example 3: Two Column Form and Text */}
          <section>
            <SectionHeader
              title="Two Column Form and Text"
              description="Form on left, text content on right - 50%-50% split"
              badge="Text"
              badgeColor="purple"
            />
            <div className="container">
              <SamplePageContent />
            </div>
            <FormComponent
              variant="form-text"
              formAlignment="left"
              textContent={sampleTextContent}
              form={<FormContactUs fieldKey={4} />}
            />
          </section>

          {/* Example 4: Two Column Form and Accordion */}
          <section>
            <SectionHeader
              title="Two Column Form and Accordion"
              description="Form on left, accordions on right - 50%-50% split"
              badge="Accordion"
              badgeColor="indigo"
            />
            <div className="container">
              <SamplePageContent />
            </div>
            <FormComponent
              variant="form-accordion"
              formAlignment="left"
              accordions={sampleAccordions}
              form={<FormContactUs fieldKey={5} />}
            />
          </section>

          {/* Example: two-column form + rich text (title items, copy, contact rows, CTA) */}
          <section>
            <SectionHeader
              title="Two Column Form with Rich Text Sidebar"
              description="Form-driven fields on one side; title fragments, intro copy, address or contact rows, and a CTA button on the other."
              badge="Rich text"
              badgeColor="purple"
            />
            <div className="container">
              <SamplePageContent />
            </div>
            <Form
              variant="form-text"
              formAlignment="left"
              fieldKey="rich-demo"
              fields={demoFormFields}
              textContent={sampleRichFormTextContent}
              onSubmit={noopSubmit}
              submitLabel="Request demo"
            />
          </section>

          {/* Example: authored HTML form body */}
          <section>
            <SectionHeader
              title="Form with authored HTML body"
              description="When htmlContent is a non-empty string, the form body renders that markup instead of mapping the fields array. Submit behavior is unchanged."
              badge="HTML"
              badgeColor="teal"
            />
            <div className="container">
              <SamplePageContent />
            </div>
            <Form
              variant="form-only"
              fields={[]}
              htmlContent={authoredFormHtml}
              htmlClassName="authored-form-html"
              onSubmit={noopSubmit}
              submitLabel="Submit"
            />
          </section>
        </div>
      </div>
    </div>
  );
}

const SamplePageContent = () => (
  <>
    <IntroductionHeader
      title="Section Header"
      titleHeaderType="h2"
      className="px-0!"
    />
    <IntroductionHeader
      title="Section Header"
      titleHeaderType="h3"
      description={(
        <>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </>
      )}
      className="mb-36 px-0!"
    />
  </>
);

const SectionHeader = ({ title, description, badge, badgeColor = 'green' }) => {
  const badgeColorClasses = {
    green: 'bg-green-100 text-green-700',
    blue: 'bg-blue-100 text-blue-700',
    purple: 'bg-purple-100 text-purple-700',
    red: 'bg-red-100 text-red-700',
    yellow: 'bg-yellow-100 text-yellow-700',
    indigo: 'bg-indigo-100 text-indigo-700',
    orange: 'bg-orange-100 text-orange-700',
    teal: 'bg-teal-100 text-teal-700',
  };

  return (
    <div className="container pb-24">
      <div className="rounded-20 border border-grey-200 bg-grey-50 p-20 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-10">
          <div>
            <h2 className="text-headings-h2 font-bold text-grey-950">{title}</h2>
            {description && <p className="text-body-small text-grey-600">{description}</p>}
          </div>
          {badge && (
            <span className={`rounded-full px-12 py-6 text-[12px] font-medium ${badgeColorClasses[badgeColor] || badgeColorClasses.green}`}>
              {badge}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};