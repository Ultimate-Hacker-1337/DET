import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Darulifta from "./pages/Darulifta";
import Contact from "./pages/Contact";
import Intro from "./pages/Intro";
import HistoryPage from "./pages/History";
import Goals from "./components/Goals";
import Campuses from "./components/Campuses";
import Introduction from "./pages/Introduction";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Shared Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/darulifta" element={<Darulifta />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/campuses" element={<Campuses />} />
            <Route path="/introduction" element={<Introduction />} />
          </Routes>
        </main>

        {/* Shared Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;