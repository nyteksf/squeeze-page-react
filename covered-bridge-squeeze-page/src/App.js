import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import FaqPage from "./pages/FaqPage";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import WhyWeExist from "./pages/WhyWeExist";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* HOME */}
          <Route path="/" element={<Home />} />
          {/* OTHER */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/whyweexist" element={<WhyWeExist />} />
          {/* LEGAL */}
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          {/* 404 ROUTE -- ADD MY CAT ONE FROM OTHER PROJECT */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
