import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import FaqPage from "./pages/FaqPage";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FaqPage />} />
          {/* Catch-all 404 route -- ADD MY CAT ONE FROM OTHER PROJECT */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
