import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import StatsMolecule from "../components/molecules/StatsMolecule";

export default function StatsMoleculePage() {
  const fontSizes = ['sm', 'md', 'lg', 'xl'];
  const stats = Array.from({ length: 4 }, (_, index) => ({
    media: {
      media: 'image',
      imageUrl: `https://placehold.co/192x192?text=${index + 1}&font=roboto`,
      aspect: 'square',
    },
    stat: `1234`,
    fontSize: fontSizes[index],
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  }));

  const statsAlignments = stats
    .filter((stat, index) => index < 3)
    .map((stat, index) => ({
      ...stat,
      textAlign: ['left', 'center', 'right'][index],
    }));

  return (
    <div className="bg-grey-50 pb-[200px]">
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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-16">Stats Molecule</h1>
            <p className="text-body-default text-grey-600 mb-24">
              Individual stat molecule with flexible sizing, alignment, and layout options.
              Use these building blocks to create custom stat displays.
            </p>
            <div className="flex flex-wrap gap-10">
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">Standalone</span>
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">Font Sizes</span>
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">Alignments</span>
            </div>
          </div>
        </div>
      </div>

      <div className="py-40">
        <div className="space-y-60">
          <section>
            <SectionHeader
              title="Standalone Stats"
              description="Basic stat molecules with image, value, and description"
              badge="Default"
              badgeColor="green"
            />
            <div className="container py-24">
              <div className="grid md:grid-cols-2 gap-16">
                {stats.map((stat, index) => (
                  <div key={index} className="col-span-1 flex flex-col gap-10">
                    <div className="p-stats-padding">
                      <StatsMolecule {...{...stat, fontSize: 'sm'}} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <SectionHeader
              title="Font Sizes"
              description={`Available font sizes: ${fontSizes.join(', ')}`}
              badge="Sizes"
              badgeColor="orange"
            />
            <div className="container py-24">
              <div className="grid md:grid-cols-2 gap-16">
                {stats.map((stat, index) => (
                  <div key={index} className="col-span-1 flex flex-col gap-10">
                    <div className="p-stats-padding">
                      <StatsMolecule {...stat} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <SectionHeader
              title="Text Alignments"
              description="Left, center, and right text alignment options"
              badge="Alignment"
              badgeColor="teal"
            />
            <div className="container py-24">
              <div className="grid gap-16 max-w-[600px]">
                {statsAlignments.map((stat, index) => (
                  <div key={index} className="col-span-1 flex flex-col gap-10">
                    <div className="p-stats-padding">
                      <StatsMolecule {...stat} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
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