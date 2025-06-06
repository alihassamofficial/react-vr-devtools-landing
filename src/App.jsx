import "./App.css";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PricingSection from "./components/PricingSection";
import Testimonials from "./components/Testimonials";
import WorkflowSection from "./components/WorkflowSection";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto  pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <WorkflowSection />
        <PricingSection />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default App;
