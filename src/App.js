import logo from './logo.svg';
import './App.css';
import HomePage from "./components/Pages/HomePage";
import QAPage from "./components/Pages/QAPage";
import WhyUsPage from './components/Pages/WhyUsPage';

import OfferpricingPage from "./components/Pages/OfferPricingPage"
import ContactPage from "./components/Pages/ContactPage"
import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom'
import OfferPricingPage from './components/Pages/OfferPricingPage';
import Navigation from './components/componetsmini/Nav';
function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="Home" element={<HomePage />} />
        <Route path="QA" element={<QAPage />} />
        <Route path="Whyus" element={<WhyUsPage />} />
        <Route path="Offer" element={<OfferPricingPage />} />
        <Route path="Contact" element={<ContactPage />} />
      </Routes>



    </div>
  );
}

export default App;
