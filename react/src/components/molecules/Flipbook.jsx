import { forwardRef, useCallback, useEffect, useRef, useState } from 'react';
let HTMLFlipBook, Document, Page, pdfjs;

// Dynamically import flipbook libraries only when component mounts
const initPdfJs = async () => {
  if (!pdfjs) {
    const pdfModule = await import('react-pdf');
    pdfjs = pdfModule.pdfjs;
    Document = pdfModule.Document;
    Page = pdfModule.Page;
    // https://github.com/wojtekmaj/react-pdf#use-external-cdn
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
  }
};

const initPageFlip = async () => {
  if (!HTMLFlipBook) {
    HTMLFlipBook = (await import('react-pageflip')).default;
  }
};

const FlipPage = forwardRef(({ children }, ref) => (
  <div ref={ref} className="w-full h-full overflow-hidden">
    {children}
  </div>
));

const Flipbook = ({ pdfUrl, title, width = 280, height = 280, className = '' }) => {
  const [numPages, setNumPages] = useState(0);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [aspectRatio, setAspectRatio] = useState(height / width);
  const [containerWidth, setContainerWidth] = useState(0);
  const wrapperRef = useRef(null);

  useEffect(() => {
    Promise.all([initPdfJs(), initPageFlip()])
      .then(() => setIsLoading(false))
      .catch(() => {
        setError('Failed to load flipbook');
      });
  }, []);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const w = Math.floor(entry.contentRect.width);
      if (w > 0) setContainerWidth(w);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [isLoading]);

  // Each page is half the container width (two pages side by side)
  const pageWidth = containerWidth > 0 ? Math.floor(containerWidth / 2) : Math.floor(width / 2);
  const pageHeight = Math.round(pageWidth * aspectRatio);

  const handleDocumentLoadSuccess = useCallback(async (pdf) => {
    try {
      const firstPage = await pdf.getPage(1);
      const viewport = firstPage.getViewport({ scale: 1 });
      if (viewport?.width && viewport?.height) {
        setAspectRatio(viewport.height / viewport.width);
      }
    } catch (_error) {
      // Fall back to default aspect ratio if first-page size cannot be read.
    }
    setNumPages(pdf.numPages || 0);
  }, []);

  const handleDocumentLoadError = useCallback((err) => {
    setError(err?.message || 'Failed to load PDF');
  }, []);

  if (error) {
    return (
      <div className="flex items-center justify-center text-body-default text-center p-40">Failed to load flipbook</div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center text-body-default text-center p-40">Loading flipbook...</div>
    );
  }

  return (
    <div ref={wrapperRef} className={`w-full ${className}`.trim()}>
      <Document
        file={pdfUrl}
        onLoadSuccess={handleDocumentLoadSuccess}
        onLoadError={handleDocumentLoadError}
        loading={
          <div className="flex items-center justify-center text-body-default text-center p-40">Loading flipbook...</div>
        }
      >
        {numPages === 1 && (
          <div
            className={`w-full flex justify-center items-center ${className}`.trim()}
            style={{ minHeight: `${pageHeight}px` }}
          >
            <Page pageNumber={1} width={width} renderTextLayer={false} renderAnnotationLayer={false} />
          </div>
        )}
        {numPages > 1 && (
          <HTMLFlipBook
            key={`${pageWidth}-${pageHeight}`}
            width={pageWidth}
            height={pageHeight}
            size="stretch"
            showCover={true}
            mobileScrollSupport={false}
            aria-label={title || 'Flipbook'}
          >
            {Array.from({ length: numPages }, (_, i) => (
              <FlipPage key={i}>
                <Page pageNumber={i + 1} width={pageWidth} renderTextLayer={false} renderAnnotationLayer={false} />
              </FlipPage>
            ))}
          </HTMLFlipBook>
        )}
      </Document>
    </div>
  );
};

export default Flipbook;
