import AboutHomePage1 from "../componetsmini/AboutHomePage1";
import AboutHomePage2 from "../componetsmini/AboutHomePage2";
import Calltoaction from "../componetsmini/Calltoaction";
import Footer from "../componetsmini/Footer";
import Hero from "../componetsmini/Hero";
import Navigation from "../componetsmini/Nav";
import ServiceHomePage from "../componetsmini/ServiceHomePage";
import OfferPricingPage from "./OfferPricingPage";
import QAPage from "./QAPage";
import WhyUsPage from "./WhyUsPage";

function HomePage() {
  return (
    <div className="HomePage">
      <Hero />
      <AboutHomePage1 />
      <ServiceHomePage />
      <AboutHomePage2 />
      <Calltoaction />
      <Footer />

  
    </div>
  );
}

export default HomePage;

