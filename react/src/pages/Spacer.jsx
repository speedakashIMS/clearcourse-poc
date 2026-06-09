import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Spacer from '../components/Spacer';

export default function SpacerPage() {
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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Spacer Component</h1>
            <p className="text-body-default text-grey-600 mb-24">Use height utilities to add vertical spacing.</p>
          </div>
        </div>
      </div>

      <section className="py-40">
        <div className="container">

          <div className="py-32 wysiwyg">
            <h3 className="">Preset sizes:</h3>
            <div className="grid grid-cols-5 gap-10">
              <div className="">xs: 10px</div>
              <div className="">sm: 20px</div>
              <div className="">md: 32px</div>
              <div className="">lg: 48px</div>
              <div className="">xl: 60px</div>
            </div>
          </div>

          <div className="bg-grey-100 p-24 rounded-12 space-y-24">
            <div>
              <p className="text-body-small text-grey-600 mb-8">Preset: mobile xs, desktop sm</p>
              <div className="bg-grey-300 rounded-8">
              <Spacer presetMobile="xs" presetDesktop="sm" />
              </div>
            </div>

            <div>
              <p className="text-body-small text-grey-600 mb-8">Preset: mobile sm, desktop md</p>
              <div className="bg-grey-300 rounded-8">
              <Spacer presetMobile="sm" presetDesktop="md" />
              </div>
            </div>

            <div>
              <p className="text-body-small text-grey-600 mb-8">Preset: mobile md, desktop lg</p>
              <div className="bg-grey-300 rounded-8">
              <Spacer presetMobile="md" presetDesktop="lg" />
              </div>
            </div>

            <div>
              <p className="text-body-small text-grey-600 mb-8">Preset: mobile lg, desktop xl</p>
              <div className="bg-grey-300 rounded-8">
              <Spacer presetMobile="lg" presetDesktop="xl" />
              </div>
            </div>

            <div>
              <p className="text-body-small text-grey-600 mb-8">Number: 85px</p>
              <div className="bg-grey-300 rounded-8">
              <Spacer mode="number" height={85} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

