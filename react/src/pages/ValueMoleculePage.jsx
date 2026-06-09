import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import ValueMolecule from "../components/molecules/ValueMolecule";

export default function ValueMoleculePage() {
  const iconRowOptions = [
    { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", useIcon: true, stacked: false, size: "small" },
    { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", useIcon: true, stacked: false, size: "medium" },
    { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", useIcon: true, stacked: false, size: "large" },
  ];

  const iconStackedOptions = [
    { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", useIcon: true, stacked: true, size: "small" },
    { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", useIcon: true, stacked: true, size: "medium" },
    { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", useIcon: true, stacked: true, size: "large" },
  ];

  const numberRowOptions = [
    { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", useIcon: false, number: 1, stacked: false, size: "small" },
    { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", useIcon: false, number: 2, stacked: false, size: "medium" },
    { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", useIcon: false, number: 3, stacked: false, size: "large" },
  ];

  const numberStackedOptions = [
    { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", useIcon: false, number: 1, stacked: true, size: "small" },
    { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", useIcon: false, number: 2, stacked: true, size: "medium" },
    { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", useIcon: false, number: 3, stacked: true, size: "large" },
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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Value Molecule</h1>
            <p className="text-body-default text-grey-600 mb-24">Icon/number list items with size and layout options</p>
          </div>
        </div>
      </div>

      <div className="bg-grey-50 py-40">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-40">
            <section>
              <h2 className="text-headings-h2 font-bold text-grey-950 mb-24">Icon - Row</h2>
              <ul className="space-y-12 text-grey-950">
                {iconRowOptions.map((item, index) => (
                  <ValueMolecule key={index} {...item} />
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-headings-h2 font-bold text-grey-950 mb-24">Icon - Stacked</h2>
              <ul className="space-y-12 text-grey-950">
                {iconStackedOptions.map((item, index) => (
                  <ValueMolecule key={index} {...item} />
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-headings-h2 font-bold text-grey-950 mb-24">Number - Row</h2>
              <div className="space-y-12">
                {numberRowOptions.map((item, index) => (
                  <ValueMolecule key={index} {...item} />
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-headings-h2 font-bold text-grey-950 mb-24">Number - Stacked</h2>
              <div className="space-y-12">
                {numberStackedOptions.map((item, index) => (
                  <ValueMolecule key={index} {...item} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

