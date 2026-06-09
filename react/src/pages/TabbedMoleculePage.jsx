import { useState } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import TabbedLozengesMolecule from '../components/molecules/TabbedLozengesMolecule';
import TabbedBlocksMolecule from '../components/molecules/TabbedBlocksMolecule';
import TabbedRowMolecule from '../components/molecules/TabbedRowMolecule';
import Spacer from '../components/Spacer';

export default function TabbedMoleculePage() {
  const [activeIndexLozenges, setActiveIndexLozenges] = useState(0);
  const [activeIndexLozengesNoImage, setActiveIndexLozengesNoImage] = useState(0);
  const [activeIndexBlocks, setActiveIndexBlocks] = useState(0);
  const [activeIndexBlocksNoText, setActiveIndexBlocksNoText] = useState(0);
  const [activeIndexRow, setActiveIndexRow] = useState(0);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const tabsLozenges = [
    {
      text: 'Tab Item 1',
      image: 'https://placehold.co/48x48',
      imageAlt: 'Tab Item 1',
      content: '<p>Content for Tab Item 1</p>',
    },
    {
      text: 'Tab Item 2',
      image: 'https://placehold.co/48x48',
      imageAlt: 'Tab Item 2',
      content: '<p>Content for Tab Item 2</p>',
    },
    {
      text: 'Tab Item 3',
      image: 'https://placehold.co/48x48',
      imageAlt: 'Tab Item 3',
      content: '<p>Content for Tab Item 3</p>',
    },
  ];
  const tabsBlocks = [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: 'https://placehold.co/48x48',
      imageAlt: 'Tab Item 1',
      content: '<p>Content for Tab Item 1</p>',
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: 'https://placehold.co/48x48',
      imageAlt: 'Tab Item 2',
      content: '<p>Content for Tab Item 2</p>',
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: 'https://placehold.co/48x48',
      imageAlt: 'Tab Item 3',
      content: '<p>Content for Tab Item 3</p>',
    },
  ];

  const tabsWithoutImage = [
    {
      text: 'Tab Item 1',
      content: '<p>Content for Tab Item 1 without image</p>',
    },
    {
      text: 'Tab Item 2',
      content: '<p>Content for Tab Item 2 without image</p>',
    },
    {
      text: 'Tab Item 3',
      content: '<p>Content for Tab Item 3 without image</p>',
    },
  ];

  const tabsWithoutText = [
    {
      image: 'https://placehold.co/48x48',
      imageAlt: 'Tab Item 1',
      content: '<p>Content for Tab Item 1 without text</p>',
    },
    {
      image: 'https://placehold.co/48x48',
      imageAlt: 'Tab Item 2',
      content: '<p>Content for Tab Item 2 without text</p>',
    },
    {
      image: 'https://placehold.co/48x48',
      imageAlt: 'Tab Item 3',
      content: '<p>Content for Tab Item 3 without text</p>',
    },
  ];

  const renderContent = (tabs, activeIndex) => (
    <div className="mt-20 relative min-h-100">
      {tabs.map((tab, index) => {
        const isActive = activeIndex === index;
        return (
          <div
            key={tab.key || index}
            className={`transition-opacity duration-300 wysiwyg ${
              isActive ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
            }`}
          >
            {typeof tab.content === 'string' ? (
              <div dangerouslySetInnerHTML={{ __html: tab.content }} />
            ) : (
              <div>{tab.content}</div>
            )}
          </div>
        );
      })}
    </div>
  );

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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Tabbed Molecule Components</h1>
            <p className="text-body-default text-grey-600 mb-24">
              Individual tabbed molecule components with flexible layouts and content switching.
              Use these building blocks to create custom tab interfaces.
            </p>
            <div className="flex flex-wrap gap-10">
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">Lozenges</span>
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">Blocks</span>
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">Row</span>
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">Fade Effect</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-grey-50 py-40">
        <div className="space-y-60">
          <section>
            <SectionHeader
              title="Tabbed Lozenges"
              description="Rounded button style tabs with image and text. Responsive sizing: small on mobile, large on desktop."
              badge="Lozenges"
              badgeColor="blue"
            />
            <div className="container py-24">
              <div className="flex flex-wrap gap-10">
                {tabsLozenges.map((tab, index) => (
                  <TabbedLozengesMolecule
                    key={tab.key || index}
                    tab={tab}
                    isActive={activeIndexLozenges === index}
                    onClick={() => setActiveIndexLozenges(index)}
                    index={index}
                  />
                ))}
              </div>
              {renderContent(tabsLozenges, activeIndexLozenges)}
            </div>
            <Spacer height={30} />
          </section>

          <section>
            <SectionHeader
              title="Tabbed Lozenges (No Image)"
              description="Lozenges without images for text-only tab interfaces."
              badge="Text Only"
              badgeColor="green"
            />
            <div className="container py-24">
              <div className="flex flex-wrap gap-10">
                {tabsWithoutImage.map((tab, index) => (
                  <TabbedLozengesMolecule
                    key={tab.key || index}
                    tab={tab}
                    isActive={activeIndexLozengesNoImage === index}
                    onClick={() => setActiveIndexLozengesNoImage(index)}
                    index={index}
                  />
                ))}
              </div>
              {renderContent(tabsWithoutImage, activeIndexLozengesNoImage)}
            </div>
            <Spacer height={30} />
          </section>

          <section>
            <SectionHeader
              title="Tabbed Blocks"
              description="Square block style tabs with image and text below. Active tab shows top border."
              badge="Blocks"
              badgeColor="purple"
            />
            <div className="container py-24">
              <div className="flex flex-wrap">
                {tabsBlocks.map((tab, index) => (
                  <TabbedBlocksMolecule
                    key={tab.key || index}
                    tab={tab}
                    isActive={activeIndexBlocks === index}
                    onClick={() => setActiveIndexBlocks(index)}
                    index={index}
                    hasBorder
                    className={`
                      max-w-[267px]!  
                    `}
                  />
                ))}
              </div>
              {renderContent(tabsBlocks, activeIndexBlocks)}
            </div>
            <Spacer height={30} />
          </section>

          <section>
            <SectionHeader
              title="Tabbed Blocks (No Text)"
              description="Blocks with images only for icon-based navigation."
              badge="Icon Only"
              badgeColor="orange"
            />
            <div className="container py-24">
              <div className="flex flex-wrap">
                {tabsWithoutText.map((tab, index) => (
                  <TabbedBlocksMolecule
                    key={tab.key || index}
                    tab={tab}
                    isActive={activeIndexBlocksNoText === index}
                    onClick={() => setActiveIndexBlocksNoText(index)}
                    index={index}
                    hasBorder
                    className={`
                      max-w-[267px]!  
                    `}
                  />
                ))}
              </div>
              {renderContent(tabsWithoutText, activeIndexBlocksNoText)}
            </div>
            <Spacer height={30} />
          </section>

          <section>
            <SectionHeader
              title="Tabbed Row"
              description="Rectangular row tabs with tabs on the left and content on the right. Mobile view uses dropdown."
              badge="Row"
              badgeColor="indigo"
            />
            <div className="container py-24">
              {/* Desktop/Tablet View */}
              <div className="hidden md:flex md:flex-row gap-20">
                <div className="flex flex-col min-w-[267px]">
                  {tabsWithoutImage.map((tab, index) => (
                    <TabbedRowMolecule
                      key={tab.key || index}
                      tab={tab}
                      isActive={activeIndexRow === index}
                      onClick={() => setActiveIndexRow(index)}
                      index={index}
                    />
                  ))}
                </div>
                <div className="flex-1 relative min-h-[200px] wysiwyg">
                  {tabsWithoutImage.map((tab, index) => {
                    const isActive = activeIndexRow === index;
                    return (
                      <div
                        key={tab.key || index}
                        className={`transition-opacity duration-300 ${
                          isActive ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
                        }`}
                      >
                        {typeof tab.content === 'string' ? (
                          <div dangerouslySetInnerHTML={{ __html: tab.content }} />
                        ) : (
                          <div>{tab.content}</div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Dropdown View */}
              <div className="md:hidden relative">
                <button
                  onClick={() => setIsMobileOpen(!isMobileOpen)}
                  className="w-full h-11 flex items-center justify-between px-3 rounded-lg border border-gray-900 bg-white"
                >
                  <span className="text-body-default">
                    {tabsWithoutImage[activeIndexRow]?.text || 'Select tab'}
                  </span>
                  <svg
                    className={`w-5 h-5 transition-transform ${isMobileOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isMobileOpen && (
                  <div className="absolute top-11 left-0 right-0 mt-1 rounded-lg border border-gray-900 bg-white z-10 shadow-lg">
                    {tabsWithoutImage.map((tab, index) => {
                      const isActive = activeIndexRow === index;
                      return (
                        <button
                          key={tab.key || index}
                          onClick={() => {
                            setActiveIndexRow(index);
                            setIsMobileOpen(false);
                          }}
                          className={`w-full text-left px-12 py-10 border-b border-grey-200 last:border-b-0 transition-colors ${
                            isActive ? 'bg-grey-100' : 'hover:bg-grey-50'
                          }`}
                        >
                          <span className="text-body-default">{tab.text}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
                {/* Mobile Content */}
                <div className="mt-20 relative min-h-[200px] wysiwyg">
                  {tabsWithoutImage.map((tab, index) => {
                    const isActive = activeIndexRow === index;
                    return (
                      <div
                        key={tab.key || index}
                        className={`transition-opacity duration-300 ${
                          isActive ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
                        }`}
                      >
                        {typeof tab.content === 'string' ? (
                          <div dangerouslySetInnerHTML={{ __html: tab.content }} />
                        ) : (
                          <div>{tab.content}</div>
                        )}
                      </div>
                    );
                  })}
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