import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import DownloadListMolecule from "../components/molecules/DownloadListMolecule";
import Spacer from "../components/Spacer";

const sampleItem = {
  media: {
    imageUrl: 'https://placehold.co/800x400?text=Media',
    title: 'Sample image',
  },
  logoUrl: 'https://placehold.co/151x48?text=Logo',
  title: 'Download list card title',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  buttons: [
    { text: 'Button', href: '#', variant: 'light' },
    { text: 'Button', href: '#', variant: 'light' },
    { text: 'Button', href: '#', variant: 'light' },
  ],
  accordions: [
    { title: 'Section one', content: '<p>First accordion content. Lorem ipsum dolor sit amet.</p>' },
    { title: 'Section two', content: '<p>Second accordion content. Consectetur adipiscing elit.</p>' },
    { title: 'Section three', content: '<p>Third accordion content. Consectetur adipiscing elit.</p>' },
    { title: 'Section four', content: '<p>Fourth accordion content. Consectetur adipiscing elit.</p>' },
    { title: 'Section five', content: '<p>Fifth accordion content. Consectetur adipiscing elit.</p>' },
    { title: 'Section six', content: '<p>Sixth accordion content. Consectetur adipiscing elit.</p>' },
  ],
};

const sampleYouTubeItem = {
  ...sampleItem,
  media: {
    media: 'video',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    title: 'YouTube video',
  },
  logoUrl: 'https://placehold.co/151x48?text=Logo',
  title: 'Download list with YouTube',
  description: 'Same layout with a YouTube video as the media. The Media molecule embeds the video.',
};

export default function DownloadListMoleculePage() {
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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Download List Molecule</h1>
            <p className="text-body-default text-grey-600 mb-24">
              A download card with content in order: title, description, buttons, accordion.
              Use vertical or horizontal (media left, content right) layout.
            </p>
            <div className="flex flex-wrap gap-10">
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">Vertical</span>
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">Horizontal</span>
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">YouTube</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-grey-50 py-40">
        <div className="space-y-60">
          <section>
            <SectionHeader
              title="Vertical"
              description="Media on top, content below: title, description, buttons, accordion."
              badge="Vertical"
              badgeColor="green"
            />
            <div className="container py-24">
              <div className="max-w-[400px]">
                <DownloadListMolecule
                  variant="vertical"
                  media={sampleItem.media}
                  title={sampleItem.title}
                  description={sampleItem.description}
                  logoUrl={sampleItem.logoUrl}
                  buttons={sampleItem.buttons}
                  accordions={sampleItem.accordions}
                />
              </div>
            </div>
            <Spacer height={30} />
          </section>

          <section>
            <SectionHeader
              title="Horizontal (media left, content right)"
              description="Horizontal layout with media on the left and content on the right."
              badge="Horizontal"
              badgeColor="blue"
            />
            <div className="container py-24">
              <div className="max-w-full">
                <DownloadListMolecule
                  variant="horizontal"
                  media={sampleItem.media}
                  title={sampleItem.title}
                  description={sampleItem.description}
                  logoUrl={sampleItem.logoUrl}
                  buttons={sampleItem.buttons}
                  accordions={sampleItem.accordions}
                />
              </div>
            </div>
            <Spacer height={30} />
          </section>

          <section>
            <SectionHeader
              title="YouTube (video)"
              description="Download list with a YouTube video as the media. Uses the same title, description, buttons, and accordion layout."
              badge="YouTube"
              badgeColor="red"
            />
            <div className="container py-24">
              <div className="max-w-[400px]">
                <DownloadListMolecule
                  variant="vertical"
                  media={sampleYouTubeItem.media}
                  title={sampleYouTubeItem.title}
                  description={sampleYouTubeItem.description}
                  logoUrl={sampleYouTubeItem.logoUrl}
                  buttons={sampleYouTubeItem.buttons}
                  accordions={sampleYouTubeItem.accordions}
                />
              </div>
            </div>
            <Spacer height={30} />
          </section>

          <section>
            <SectionHeader
              title="Horizontal (YouTube video)"
              description="Horizontal layout with a YouTube video as the media. Uses the same title, description, buttons, and accordion layout."
              badge="YouTube"
              badgeColor="red"
            />
            <div className="container py-24">
              <div className="max-w-full">
                <DownloadListMolecule
                  variant="horizontal"
                  media={sampleYouTubeItem.media}
                  title={sampleYouTubeItem.title}
                  description={sampleYouTubeItem.description}
                  logoUrl={sampleYouTubeItem.logoUrl}
                  buttons={sampleYouTubeItem.buttons}
                  accordions={sampleYouTubeItem.accordions}
                />
              </div>
            </div>
            <Spacer height={30} />
          </section>
        </div>
      </div>
    </div>
  );
}

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
      <div className="rounded-20 border border-grey-200 bg-white p-20 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-10">
          <div>
            <h2 className="text-headings-h2 font-bold text-grey-950">{title}</h2>
            <p className="text-body-small text-grey-600">{description}</p>
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
