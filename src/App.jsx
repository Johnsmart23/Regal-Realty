import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

// Pages & Sections
import HeroSection from "./components/HeroSection";
import PopularPages from "./components/PopularPages";
import Testimonial from "./components/Testimonial";
import OurServices from "./components/OurServices";
import FAQ from "./components/FAQ";
import Properties from "./pages/Properties";
import About from "./pages/About";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Agent from "./pages/Agent"; // ✅ Agent upload page
import PropertyDetail from "./pages/PropertyDetail"; // ✅ Dynamic detail page

// Static Detail Pages (if still needed)
import Detail1 from "./pages/Detail1";
import Detail2 from "./pages/Detail2";
import Detail3 from "./pages/Detail3";
import Detail4 from "./pages/Detail4";
import Detail5 from "./pages/Detail5";
import Detail6 from "./pages/Detail6";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <PopularPages />
              <Testimonial />
              <OurServices />
              <FAQ />
            </>
          }
        />

        {/* Static Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/agent" element={<Agent />} />

        {/* Dynamic Property Details Page */}
        <Route path="/property/:id" element={<PropertyDetail />} />

        {/* Optional Static Detail Pages */}
        <Route path="/detail1" element={<Detail1 />} />
        <Route path="/detail2" element={<Detail2 />} />
        <Route path="/detail3" element={<Detail3 />} />
        <Route path="/detail4" element={<Detail4 />} />
        <Route path="/detail5" element={<Detail5 />} />
        <Route path="/detail6" element={<Detail6 />} />
      </Routes>

      <ScrollToTopButton />
      <Footer />
    </Router>
  );
}

export default App;
