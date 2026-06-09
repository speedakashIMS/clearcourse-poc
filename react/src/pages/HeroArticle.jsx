import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import HeroArticle from '../components/HeroArticle';
import lottieExampleData from '../assets/lottie-example.json';

function HeroArticlePage() {
  const articleInfo = {
    title: 'Hero Article Title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: 'January 15, 2024',
    categories: ['Technology', 'Design', 'Innovation'],
    backgroundImage: 'https://placehold.co/1392x566',
    backgroundImageAlt: 'Hero Article Background Image',
  }

  return (
    <div className="bg-grey-50 pb-[200px]">
      <div className="bg-grey-200">
        <div className="container py-40">
          <a
            href="/"
            className="inline-flex items-center gap-10 text-grey-600 hover:text-grey-950 mb-20 transition-colors"
          >
            <ArrowLeftIcon className="h-20 w-20" />
            Back to Home
          </a>
          <div className="max-w-[760px]">
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-16">Hero Article Component</h1>
            <p className="text-body-default text-grey-600 mb-24">
              Article hero component with flexible image positioning. Perfect for blog posts,
              news articles, and content pages with title, description, date, and tags.
            </p>
            <div className="flex flex-wrap gap-10">
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">Article</span>
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">Blog</span>
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">Image Top</span>
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">Image Bottom</span>
              <span className="rounded-full bg-grey-200 px-12 py-6 text-[12px] font-medium text-grey-700">Media</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-24">
        <div className="rounded-20 border border-grey-200 bg-white p-20 shadow-soft">
          <div className="flex flex-wrap items-center justify-between gap-10">
            <div>
              <h2 className="text-headings-h2 font-bold text-grey-950">Hero Article</h2>
              <p className="text-body-small text-grey-600">Image positioned at the bottom (default)</p>
            </div>
            <span className="rounded-full bg-green-100 px-12 py-6 text-[12px] font-medium text-green-700">Default</span>
          </div>
        </div>
      </div>
      <div className="section bg-primary">
        <HeroArticle {...articleInfo} />
      </div>

      <div className="container py-24">
        <div className="rounded-20 border border-grey-200 bg-white p-20 shadow-soft">
          <div className="flex flex-wrap items-center justify-between gap-10">
            <div>
              <h2 className="text-headings-h2 font-bold text-grey-950">Hero Article</h2>
              <p className="text-body-small text-grey-600">Image positioned at the top</p>
            </div>
            <span className="rounded-full bg-blue-100 px-12 py-6 text-[12px] font-medium text-blue-700">Top</span>
          </div>
        </div>
      </div>
      <div className="section bg-primary">
        <HeroArticle {...articleInfo} imagePosition="top" />
      </div>

      <div className="container py-24">
        <div className="rounded-20 border border-grey-200 bg-white p-20 shadow-soft">
          <div className="flex flex-wrap items-center justify-between gap-10">
            <div>
              <h2 className="text-headings-h2 font-bold text-grey-950">Hero Article with YouTube Video</h2>
              <p className="text-body-small text-grey-600">Using media prop with YouTube video, top position</p>
            </div>
            <span className="rounded-full bg-red-100 px-12 py-6 text-[12px] font-medium text-red-700">Video</span>
          </div>
        </div>
      </div>
      <div className="section bg-primary">
      <HeroArticle
        {...articleInfo}
        title="Hero Article with YouTube Video"
        imagePosition="top"
        media={{
          type: 'video',
          videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          title: 'Sample YouTube Video'
        }}
      />
      </div>

      <div className="container py-24">
        <div className="rounded-20 border border-grey-200 bg-white p-20 shadow-soft">
          <div className="flex flex-wrap items-center justify-between gap-10">
            <div>
              <h2 className="text-headings-h2 font-bold text-grey-950">Hero Article with Lottie Animation</h2>
              <p className="text-body-small text-grey-600">Using media prop with Lottie animation, bottom position</p>
            </div>
            <span className="rounded-full bg-yellow-100 px-12 py-6 text-[12px] font-medium text-yellow-700">Lottie</span>
          </div>
        </div>
      </div>
      <div className="section bg-primary">
      <HeroArticle
        {...articleInfo}
        title="Hero Article with Lottie Animation"
        media={{
          type: 'lottie',
          lottieData: lottieExampleData,
          title: 'Lottie Animation'
        }}
      />
      </div>

      <div className="container py-24">
        <div className="rounded-20 border border-grey-200 bg-white p-20 shadow-soft">
          <div className="flex flex-wrap items-center justify-between gap-10">
            <div>
              <h2 className="text-headings-h2 font-bold text-grey-950">Hero Article with Iframe</h2>
              <p className="text-body-small text-grey-600">Using media prop with iframe content, top position</p>
            </div>
            <span className="rounded-full bg-indigo-100 px-12 py-6 text-[12px] font-medium text-indigo-700">Iframe</span>
          </div>
        </div>
      </div>
      <div className="section bg-primary">
      <HeroArticle
        {...articleInfo}
        title="Hero Article with Iframe"
        imagePosition="top"
        media={{
          type: 'iframe',
          iframeUrl: 'https://www.example.com',
          title: 'Iframe Content'
        }}
      />
      </div>
    </div>
  );
}

export default HeroArticlePage;



