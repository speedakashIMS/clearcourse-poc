import { useMemo, useState } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Button from '../components/partials/Button';
import PopUpModal from '../components/PopUpModal';

export default function PopUpModalPage() {
  const [isCenterModalOpen, setIsCenterModalOpen] = useState(false);
  const [isCornerModalOpen, setIsCornerModalOpen] = useState(false);

  const modalButtons = useMemo(
    () => [
      {
        text: 'See button variants',
        href: '/buttons-variants',
        variant: 'dark',
        size: 'btn-md',
      },
      {
        text: 'Close modal',
        variant: 'light',
        size: 'btn-md',
        closeOnClick: true,
      },
    ],
    [],
  );

  return (
    <div>
      <div className="bg-secondary-200 py-32">
        <div className="container">
          <div>
            <a
              href="/"
              className="inline-flex items-center gap-10 text-secondary-600 hover:text-secondary mb-20 transition-colors"
            >
              <ArrowLeftIcon className="h-20 w-20" />
              Back to Home
            </a>
            <h1 className="text-headings-h1 font-bold text-secondary mb-20">Pop Up Modal Component</h1>
            <p className="text-body-default text-secondary-600 mb-24">
              Reusable modal with optional background image, shared media support, and button repeater. Use{' '}
              <code className="text-body-small">placement=&quot;center&quot;</code> for a dimmed overlay (default), or{' '}
              <code className="text-body-small">placement=&quot;bottom-right&quot;</code> for a corner panel without a backdrop.{' '}
              <code className="text-body-small">trigger=&quot;exit-popup&quot;</code> listens inside the modal: mount it once and it opens when the pointer moves toward the top of the window (browser chrome); desktop pointer only. <code className="text-body-small">isOpen</code> is not used for that mode.
            </p>
          </div>
        </div>
      </div>

      <section className="bg-tertiary py-56">
        <div className="container flex flex-col items-center justify-center gap-16 sm:flex-row sm:gap-24">
          <Button
            text="Open centered modal (overlay)"
            variant="dark"
            size="btn-md"
            onClick={() => setIsCenterModalOpen(true)}
          />
          <Button
            text="Open bottom-right modal (no overlay)"
            variant="dark"
            size="btn-md"
            onClick={() => setIsCornerModalOpen(true)}
          />
        </div>
      </section>

      <section className="bg-secondary-100 py-32">
        <div className="container">
          <p className="text-body-default text-secondary">
            Exit popup: the component below is always mounted with{' '}
            <code className="text-body-small">trigger=&quot;exit-popup&quot;</code>. Move the mouse straight up toward the tab bar /
            address bar (as if leaving the page). After you dismiss it, reload the page to try again. Touch devices do
            not fire this signal reliably.
          </p>
        </div>
      </section>

      <PopUpModal
        isOpen={isCenterModalOpen}
        onClose={() => setIsCenterModalOpen(false)}
        placement="center"
        backgroundImage="https://picsum.photos/id/100/1600/1200"
        title="Section Header"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        media={{
          media: 'image',
          aspect: 'rectangle',
          imageUrl: 'https://picsum.photos/id/1060/1400/900',
          title: 'Shop staff helping a customer',
        }}
        buttons={modalButtons}
      />

      <PopUpModal
        isOpen={isCornerModalOpen}
        onClose={() => setIsCornerModalOpen(false)}
        placement="bottom-right"
        title="Corner panel"
        subtitle="No backdrop — page stays visible. Close with the X, Escape, or the button below."
        buttons={[
          {
            text: 'Close',
            variant: 'dark',
            size: 'btn-md',
            closeOnClick: true,
          },
        ]}
      />

      <PopUpModal
        trigger="exit-popup"
        exitIntentEdgePx={56}
        placement="bottom-right"
        title="Before you leave..."
        subtitle="This exit popup appears when the pointer moves toward the browser chrome (top of the window). It stays dismissed for this page load after you close it."
        buttons={[
          {
            text: 'Got it',
            variant: 'dark',
            size: 'btn-md',
            closeOnClick: true,
          },
        ]}
      />
    </div>
  );
}
