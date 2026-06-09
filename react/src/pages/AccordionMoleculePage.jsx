import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import AccordionMolecule from "../components/molecules/AccordionMolecule";
import Spacer from "../components/Spacer";

export default function AccordionMoleculePage() {
  const list = [
    {
      title: 'Accordion Item 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <a href="#" style="color: var(--color-grey-600);">Link</a>',
    },
    {
      title: 'Accordion Item 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Accordion Molecule</h1>
            <p className="text-body-default text-grey-600 mb-24">
              Individual accordion molecule component with flexible icon positioning and toggle functionality.
              Use this building block to create custom accordion layouts.
            </p>
            <div className="flex flex-wrap gap-10">
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">Collapsible</span>
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">Icon Left</span>
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">Icon Right</span>
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">No Icon</span>
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">Dark Text</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-40">
        <div className="space-y-60">
          <section>
            <SectionHeader
              title="Icon Left (Default)"
              description="Default layout with icon positioned on the left side of accordion items."
              badge="Default"
              badgeColor="green"
            />
            <div className="container py-24">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="col-span-1">
                  {list.map((item, index) => (
                    <AccordionMolecule
                      key={index}
                      title={item.title}
                      content={item.content}
                      iconPosition="left"
                      index={index}
                    />
                  ))}
                </div>
                <div className="col-span-1">
                  {list.map((item, index) => (
                    <AccordionMolecule
                      key={`second-${index}`}
                      title={item.title}
                      content={item.content}
                      iconPosition="left"
                      index={index + 10}
                    />
                  ))}
                </div>
              </div>
            </div>
            <Spacer height={30} />
          </section>

          <section>
            <SectionHeader
              title="Icon Right"
              description="Icon positioned on the right side of accordion items for alternative layouts."
              badge="Right"
              badgeColor="blue"
            />
            <div className="container py-24">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="col-span-1">
                  {list.map((item, index) => (
                    <AccordionMolecule
                      key={index}
                      title={item.title}
                      content={item.content}
                      iconPosition="right"
                      index={index + 20}
                    />
                  ))}
                </div>
                <div className="col-span-1">
                  {list.map((item, index) => (
                    <AccordionMolecule
                      key={`second-right-${index}`}
                      title={item.title}
                      content={item.content}
                      iconPosition="right"
                      index={index + 30}
                    />
                  ))}
                </div>
              </div>
            </div>
            <Spacer height={30} />
          </section>

          <section>
            <SectionHeader
              title="No Icon"
              description="Accordion without icons for minimalist design and cleaner appearance."
              badge="Minimal"
              badgeColor="purple"
            />
            <div className="container py-24">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="col-span-1">
                  {list.map((item, index) => (
                    <AccordionMolecule
                      key={index}
                      title={item.title}
                      content={item.content}
                      hasIcon={false}
                      index={index + 40}
                    />
                  ))}
                </div>
                <div className="col-span-1">
                  {list.map((item, index) => (
                    <AccordionMolecule
                      key={`second-no-icon-${index}`}
                      title={item.title}
                      content={item.content}
                      hasIcon={false}
                      index={index + 50}
                    />
                  ))}
                </div>
              </div>
            </div>
            <Spacer height={30} />
          </section>

          <section>
            <SectionHeader
              title="Light text"
              description="Accordion with light text styling for strong contrast and emphasis."
              badge="Light"
              badgeColor="indigo"
            />
            <div className="container bg-grey-500 py-24">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-grey-950">
                <div className="col-span-1">
                  {list.map((item, index) => (
                    <AccordionMolecule
                      key={index}
                      title={item.title}
                      content={item.content}
                      iconPosition="right"
                      colorVariant="light"
                      index={index + 60}
                    />
                  ))}
                </div>
                <div className="col-span-1">
                  {list.map((item, index) => (
                    <AccordionMolecule
                      key={`second-dark-${index}`}
                      title={item.title}
                      content={item.content}
                      iconPosition="left"
                      colorVariant="light"
                      index={index + 70}
                    />
                  ))}
                </div>
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
    <div className="container pb-10">
      <div className="rounded-20 border border-grey-200 bg-grey-50 p-20 shadow-soft">
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
