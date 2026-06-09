import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import PaginationMolecule from "../components/molecules/PaginationMolecule";

export default function PaginationMoleculePage() {
  const items = [
    { label: '1', isActive: true, href: '#' },
    { label: '2', href: '#' },
    { label: '3', href: '#' },
    { label: '4', href: '#' },
    { label: '...', isEllipsis: true },
    { label: '9', href: '#' },
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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Pagination Molecule</h1>
            <p className="text-body-default text-grey-600 mb-24">Page number navigation with active state</p>
          </div>
        </div>
      </div>

      <div className="py-40">
        <div className="container">
          <PaginationMolecule items={items} />
        </div>
      </div>
    </div>
  );
}

