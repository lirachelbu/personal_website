import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage'; // Renamed HeroSection to LandingPage
import Footer from './components/Footer';
import About from './components/About';
import Newsletter from './components/Newsletter';
import Social from './components/Social';
import './styles/App.css';
import './styles/NavBar.css';

const App = () => {
  return (
    <Router>
      <div className="landing">
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Use the LandingPage component */}
          <Route path="/about" element={<About />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/social" element={<Social />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
