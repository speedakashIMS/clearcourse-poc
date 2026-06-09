import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Video from "../components/Video";
import sampleVideo from "../assets/sample-video.mp4";

export default function VideoPage() {
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
            <h1 className="text-headings-h1 font-bold text-grey-950 mb-20">Video Component</h1>
            <p className="text-body-default text-grey-600 mb-24">Video embed examples</p>
          </div>
        </div>
      </div>

      <div className="bg-grey-50 py-40">
        <div className="container">
          <div className="space-y-40">
            <section>
              <h2 className="text-headings-h2 font-bold text-grey-950 mb-24">Default (16:9)</h2>
              <Video videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
            </section>

            <section>
              <h2 className="text-headings-h2 font-bold text-grey-950 mb-24">Uploaded Video (MP4)</h2>
              <Video videoUrl={sampleVideo} />
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
