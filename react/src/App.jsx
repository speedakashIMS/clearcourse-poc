import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Icons from './pages/Icons';
import ButtonsPage from './pages/Buttons';
import Typography from './pages/Typography';
import Links from './pages/Links';
import NavigationSimplePage from './pages/NavigationSimple';
import NavigationMegaPage from './pages/NavigationMega';
import AccordionMoleculePage from './pages/AccordionMoleculePage';
import AccordionsPage from './pages/Accordions';
import CardWithMediaMoleculePage from './pages/CardWithMediaMoleculePage';
import CardWithIconMoleculePage from './pages/CardWithIconMoleculePage';
import MediaMoleculePage from './pages/MediaMoleculePage';
import MediaPage from './pages/Media';
import VideoPage from './pages/Video';
import TileMoleculePage from './pages/TileMoleculePage';
import ValueMoleculePage from './pages/ValueMoleculePage';
import MapLocationMoleculePage from './pages/MapLocationMoleculePage';
import CardsMediaPage from './pages/CardsMediaPage';
import CardsIconPage from './pages/CardsIconPage';
import LogosPage from './pages/Logos';
import LogosFramedPage from './pages/LogosFramed';
import MapLocationsPage from './pages/MapLocations';
import MapWithInfoPage from './pages/MapWithInfo';
import TextAndMediaPage from './pages/TextAndMedia';
import TilesPage from './pages/Tiles';
import HeroBackgroundImagePage from './pages/HeroBackgroundImage';
import HeroPage from './pages/Hero';
import HeroArticlePage from './pages/HeroArticle';
import StatsMoleculePage from './pages/StatsMoleculePage';
import StatsColumnsPage from './pages/StatsColumnsPage';
import StatsWithMediaPage from './pages/StatsWithMediaPage';
import StatsWithTestimonialsPage from './pages/StatsWithTestimonialsPage';
import ButtonVariantsPage from './pages/ButtonVariants';
import IntroductionHeaderPage from './pages/IntroductionHeader';
import SpacerPage from './pages/Spacer';
import TabbedMoleculePage from './pages/TabbedMoleculePage';
import TabbedPage from './pages/Tabbed';
import TablePage from './pages/Table';
import TableComparisonPage from './pages/TableComparison';
import TablePricingPage from './pages/TablePricing';
import CTAPage from './pages/CTA';
import CTATextPage from './pages/CTAText';
import PaginationMoleculePage from './pages/PaginationMoleculePage';
import ArchivePage from './pages/Archive';
import NewsMoleculePage from './pages/NewsMoleculePage';
import NewsGridPage from './pages/NewsGrid';
import SecondaryInfoPage from './pages/SecondaryInfo';
import AwardCardMoleculePage from './pages/AwardCardMoleculePage';
import AwardMediaMoleculePage from './pages/AwardMediaMoleculePage';
import TestimonialMoleculePage from './pages/TestimonialMoleculePage';
import TestimonialPage from './pages/Testimonials';
import GiftProCardAndTextPage from './pages/GiftProCardAndText';
import TrustPage from './pages/Trust';
import AwardsCardsPage from './pages/AwardsCardsPage';
import AwardsMediaPage from './pages/AwardsMediaPage';
import FooterPage from './pages/Footer';
import RichTextPage from './pages/RichText';
import BreadcrumbsPage from './pages/Breadcrumbs';
import EventAndWebinarMoleculePage from './pages/EventAndWebinarMoleculePage';
import EventAndWebinarPage from './pages/EventAndWebinarPage';
import FormMoleculePage from './pages/FormMoleculePage';
import FormComponentPage from './pages/FormComponentPage';
import DownloadListMoleculePage from './pages/DownloadListMoleculePage';
import DownloadsPage from './pages/DownloadsPage';
import PopUpModalPage from './pages/PopUpModal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/icons" element={<Icons />} />
        <Route path="/buttons" element={<ButtonsPage />} />
        <Route path="/buttons-variants" element={<ButtonVariantsPage />} />
        <Route path="/typography" element={<Typography />} />
        <Route path="/links" element={<Links />} />
        <Route path="/molecules/accordion" element={<AccordionMoleculePage />} />
        <Route path="/molecules/card-with-media" element={<CardWithMediaMoleculePage />} />
        <Route path="/molecules/card-with-icon" element={<CardWithIconMoleculePage />} />
        <Route path="/molecules/media" element={<MediaMoleculePage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/molecules/tile" element={<TileMoleculePage />} />
        <Route path="/molecules/value" element={<ValueMoleculePage />} />
        <Route path="/molecules/map-location" element={<MapLocationMoleculePage />} />
        <Route path="/molecules/stats" element={<StatsMoleculePage />} />
        <Route path="/navigation-simple" element={<NavigationSimplePage />} />
        <Route path="/navigation-mega" element={<NavigationMegaPage />} />
        <Route path="/hero-background-image" element={<HeroBackgroundImagePage />} />
        <Route path="/hero" element={<HeroPage />} />
        <Route path="/hero-article" element={<HeroArticlePage />} />
        <Route path="/accordions" element={<AccordionsPage />} />
            <Route path="/cards" element={<CardsMediaPage />} />
            <Route path="/cards-media" element={<CardsMediaPage />} />
        <Route path="/cards-icon" element={<CardsIconPage />} />
        <Route path="/logos" element={<LogosPage />} />
        <Route path="/logos-framed" element={<LogosFramedPage />} />
        <Route path="/map-locations" element={<MapLocationsPage />} />
        <Route path="/map-with-info" element={<MapWithInfoPage />} />
        <Route path="/text-and-media" element={<TextAndMediaPage />} />
        <Route path="/tiles" element={<TilesPage />} />
        <Route path="/stats-columns" element={<StatsColumnsPage />} />
        <Route path="/stats-with-media" element={<StatsWithMediaPage />} />
        <Route path="/stats-with-testimonials" element={<StatsWithTestimonialsPage />} />
        <Route path="/introduction-header" element={<IntroductionHeaderPage />} />
        <Route path="/spacer" element={<SpacerPage />} />
        <Route path="/molecules/tabbed" element={<TabbedMoleculePage />} />
        <Route path="/tabbed" element={<TabbedPage />} />
        <Route path="/table" element={<TablePage />} />
        <Route path="/comparison-table" element={<TableComparisonPage />} />
        <Route path="/pricing-table" element={<TablePricingPage />} />
        <Route path="/cta" element={<CTAPage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/news-grid" element={<NewsGridPage />} />
        <Route path="/molecules/cta-text" element={<CTATextPage />} />
        <Route path="/molecules/pagination" element={<PaginationMoleculePage />} />
        <Route path="/molecules/news" element={<NewsMoleculePage />} />
        <Route path="/molecules/award-card" element={<AwardCardMoleculePage />} />
        <Route path="/molecules/award-media" element={<AwardMediaMoleculePage />} />
        <Route path="/secondary-info" element={<SecondaryInfoPage />} />
        <Route path="/molecules/testimonial" element={<TestimonialMoleculePage />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
        <Route path="/giftpro-card-and-text" element={<GiftProCardAndTextPage />} />
        <Route path="/trust" element={<TrustPage />} />
        <Route path="/awards-cards" element={<AwardsCardsPage />} />
        <Route path="/awards-media" element={<AwardsMediaPage />} />
        <Route path="/footer" element={<FooterPage />} />
        <Route path="/rich-text" element={<RichTextPage />} />
        <Route path="/breadcrumbs" element={<BreadcrumbsPage />} />
        <Route path="/molecules/event-and-webinar" element={<EventAndWebinarMoleculePage />} />
        <Route path="/event-and-webinar" element={<EventAndWebinarPage />} />
        <Route path="/molecules/form" element={<FormMoleculePage />} />
        <Route path="/form" element={<FormComponentPage />} />
        <Route path="/molecules/download-list" element={<DownloadListMoleculePage />} />
        <Route path="/downloads" element={<DownloadsPage />} />
        <Route path="/pop-up-modal" element={<PopUpModalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

