import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import TextAndMedia from "../components/TextAndMedia";
import lottieExampleData from "../assets/lottie-example.json";

export default function TextAndMediaPage() {
  const richText = `
    <h3>Card Title</h3>
    <p>Lorem ipsum dolor sit amet, ,<strong>strong text</strong> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <i>italic text</i> consectetur aod tempor <u>underlined text</u> labore et dolore magna aliqua.</p>
  `;
  const valueList = {
    useIcon: true,
    size: 'small',
    stacked: false,
    items: [
      {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
      {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
    ],
  };
  const valueList2 = {
    useIcon: false,
    size: 'medium',
    stacked: true,
    items: [
      {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labo ipsum dolor sit amet, consectetur adipiscing elina aliqua.', number: 1},
      {text: 'Lorem ipsum dolor sit amet, re magna aliqua. Lorem ipsum aliqua.', number: 2},
    ],
  };
  return (
    <div>
      <div className="bg-grey-200 py-32">
        <div className="container">
          {/* Header */}
          <div className="">
            <a
              href="/"
              className="inline-flex items-center gap-10 text-grey-600 hover:text-grey-950 mb-20 transition-colors"
            >
              <ArrowLeftIcon className="h-20 w-20" />
              Back to Home
            </a>
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Text and Media</h1>
          </div>
        </div>
      </div>

      <div className="bg-grey-50 py-40">
        <div className="container space-y-60">
          {/* Rich Text Align - Left */}
          <section>
            <h2 className="text-headings-h2 font-bold text-grey-950 mb-24">Rich Text Align - Left</h2>
            <TextAndMedia
              media="image"
              imageUrl="https://picsum.photos/1000/750"
              mediaPosition="right"
              richText={richText}
              richTextAlign="left"
              buttonText="Button"
              buttonVariant="dark"
              valueList={valueList}
            />
          </section>

          {/* Rich Text Align - Center */}
          <section>
            <h2 className="text-headings-h2 font-bold text-grey-950 mb-24">Rich Text Align - Center</h2>
            <TextAndMedia
              media="image"
              imageUrl="https://picsum.photos/1000/750"
              mediaPosition="right"
              richText={richText}
              richTextAlign="center"
              buttonText="Button"
              buttonVariant="dark"
              valueList={valueList}
            />
          </section>

          {/* Media Right */}
          <section>
            <TextAndMedia
              media="image"
              imageUrl="https://picsum.photos/1000/750"
              mediaPosition="right"
              richText={richText}
              buttonText="Button"
              buttonVariant="dark"
              valueList={valueList}
            />
          </section>

          {/* Media Left */}
          <section>
            <TextAndMedia
              media="video"
              videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              mediaPosition="left"
              richText={richText}
              buttonText="Button"
              buttonVariant="dark"
              valueList={valueList2}
            />
          </section>
        </div>
      </div>
    </div>
  );
}

