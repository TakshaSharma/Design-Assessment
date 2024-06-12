import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Common components
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
// Pages components
import Home from './pages/HomePage';
import AboutUs from './pages/AboutUsPage';
import Pricing from './pages/PricingPage';
import Features from './pages/FeaturesPage';

const App = () => {
  return (
    <div className='md:overflow-x-hidden'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/features' element={<Features />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
