import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Button from '../components/partials/Button';

function ButtonVariants() {
  const variants = [
    'light',
    'dark',
    'light-outlined',
    'dark-outlined',
    'light-no-outline',
    'dark-no-outline',
  ];

  const sizes = ['btn-sm', 'btn-md'];

  return (

    <div>

        <div className="bg-grey-200 py-32">
            <div className="container">
                {/* Header */}
                <div className="">
                <Link
                    to="/"
                    className="inline-flex items-center gap-10 text-grey-600 hover:text-grey-950 mb-20 transition-colors"
                >
                    <ArrowLeftIcon className="h-20 w-20" />
                    Back to Home
                </Link>
                <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Button Variants</h1>
                <p className="text-body-default text-grey-600 mb-24">All button styles and sizes</p>
                </div>
            </div>
        </div>

        <div className="bg-grey-300 py-20">
            <div className="container">
                {/* Button Grid */}
                <div className="grid grid-cols-6 gap-16">
                {variants.map((variant) => (
                    <div key={variant} className="flex flex-col gap-6">
                    <h3 className="text-sm font-semibold text-gray-900 capitalize">
                        {variant.replace(/-/g, ' ')}
                    </h3>
                    {sizes.map((size) => (
                        <div key={size} className="flex flex-col gap-2">
                        <span className="text-xs text-gray-500 uppercase">
                            {size.replace('btn-', '')}
                        </span>
                        <Button text="Button" variant={variant} size={size} />
                        </div>
                    ))}
                    <span className="text-xs text-gray-500 uppercase">Disabled</span>
                    <Button text="Button" variant={variant} size="btn-md" disabled />
                    </div>
                ))}
                </div>
            </div>
        </div>
    </div>
  

  );
}

export default ButtonVariants;

