import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Insights } from "./components/Insights";
import { ResearchHub } from "./components/ResearchHub";
import { CTA } from "./components/CTA";
import { HowItWorks } from "./components/HowItWorks";
import { ClientPortal } from "./components/ClientPortal";
import { WhyChooseOneIBC } from "./components/WhyChooseOneIBC";
import { Testimonials } from "./components/Testimonials";
import { News } from "./components/News";
import { Footer } from "./components/Footer";
import { JurisdictionsPage } from "./pages/JurisdictionsPage";
import { JurisdictionDetailPage } from "./pages/JurisdictionDetailPage";
import { AllServicesPage } from "./pages/AllServicesPage";
import { FeesPage } from "./pages/FeesPage";
import { NomineeServicesPage } from "./pages/NomineeServicesPage";
import { SetupNowPage } from "./pages/SetupNowPage";
import { ContactPage } from "./pages/ContactPage";
import { RateCardPage } from "./pages/RateCardPage";
import SignInPage from "./pages/SignInPage";
import MyAccountPage from "./pages/MyAccountPage";
import MakePaymentPage from "./pages/MakePaymentPage";
import { IncorporationPage } from "./pages/IncorporationPage";
import { CompanyRenewalPage } from "./pages/CompanyRenewalPage";
import { TaxAccountingPage } from "./pages/TaxAccountingPage";
import { ServicedOfficePage } from "./pages/ServicedOfficePage";

function HomePage() {
  return (
    <>
      <Hero />
      <Insights />
      <ResearchHub />
      <CTA />
      <HowItWorks />
      <ClientPortal />
      <WhyChooseOneIBC />
      <Testimonials />
      <News />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white pt-[110px]">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/jurisdictions"
            element={<JurisdictionsPage />}
          />
          <Route
            path="/compare-jurisdictions"
            element={<JurisdictionsPage />}
          />
          <Route
            path="/jurisdiction/:jurisdiction"
            element={<JurisdictionDetailPage />}
          />
          <Route
            path="/all-services"
            element={<AllServicesPage />}
          />
          <Route path="/fees" element={<FeesPage />} />
          <Route
            path="/nominee-services"
            element={<NomineeServicesPage />}
          />
          <Route path="/setup-now" element={<SetupNowPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/rate-card" element={<RateCardPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route
            path="/my-account"
            element={<MyAccountPage />}
          />
          <Route
            path="/make-payment"
            element={<MakePaymentPage />}
          />
          <Route
            path="/incorporation"
            element={<IncorporationPage />}
          />
          <Route
            path="/company-renewal"
            element={<CompanyRenewalPage />}
          />
          <Route
            path="/tax-accounting"
            element={<TaxAccountingPage />}
          />
          <Route
            path="/serviced-office"
            element={<ServicedOfficePage />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}