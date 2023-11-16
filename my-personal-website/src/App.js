import React from 'react';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import ContentBlock from './components/ContentBlock';
import Footer from './components/Footer';
import './styles/App.css';



const App = () => {
  return (
    <div className="app-background">
      <NavBar />
      <HeroSection />
      <ContentBlock 
        title="Personal Newsletter: A Leap Forward" 
        content="Hope you get a little inspired"
      />
      {/* Add more ContentBlock components as needed */}
      <Footer />
    </div>
  );
};

export default App;






