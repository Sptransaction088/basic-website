import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Company from './Components/Company';
import Upi from './Pages/Upi'; 
import Imps from './Pages/Imps'; 
import Api from './Pages/Api'; 
import Wallet from './Pages/Wallet';
import Pricing from './Pages/Pricing'; 
import ContactUs from './Pages/ContactUs';  
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Client from './Components/Client'; 
import PrivacyPolicy from './Pages/PrivacyPolicy'; 
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Company />} />
            <Route path="/upi" element={<Upi />} />
            <Route path="/api" element={<Api />} />
            <Route path="/imps" element={<Imps />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/banking-patner" element={<Client />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </div>
        <Footer />
      </div>
      
    </Router>
  );
}



export default App;