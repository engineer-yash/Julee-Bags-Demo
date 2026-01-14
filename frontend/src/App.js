import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllBags from './pages/AllBags';
import WildAdventure from './pages/WildAdventure';
import AboutJulee from './pages/AboutJulee';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-bags" element={<AllBags />} />
            <Route path="/wild-adventure" element={<WildAdventure />} />
            <Route path="/about" element={<AboutJulee />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
