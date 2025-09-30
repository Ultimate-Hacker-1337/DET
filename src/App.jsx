import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Intro from "./pages/Introduce/Intro";
import HistoryPage from "./pages/Introduce/History";
import Maqasid from "./pages/Introduce/Maqasid";
import Marakiz from "./pages/Introduce/Marakiz";
import ChishtHistoryPage from "./pages/Introduce/ChishtHistory";
import AudioBayanaat from "./pages/Publication/AudioBayanaat";
import VideoBayanaat from "./pages/Publication/VideoBayanaat";
import HamdoNaat from "./pages/Publication/HamdoNaat";
import Poetry from "./pages/Publication/Poetry";
import Books from "./pages/Publication/Books";
import Malfoozat from "./pages/Publication/Malfoozat";
import DarseNizami from "./pages/Education/DarseNizami";
import HifzeQuran from "./pages/Education/HifzeQuran";
import Tajweed from "./pages/Education/Tajweed";
import Admission from "./pages/Education/Admission";
import Halqaat from "./pages/Contact/Halqaat";
import YourHalqa from "./pages/Contact/YourHalqa";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        {/* Shared Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/goals" element={<Maqasid />} />
            <Route path="/campuses" element={<Marakiz />} />
            <Route path="/chishthistory" element={<ChishtHistoryPage />} />
            <Route path="/audiobayanaat" element={<AudioBayanaat />} />
            <Route path="/videobayanaat" element={<VideoBayanaat />} />
            <Route path="/hamdonaat" element={<HamdoNaat />} />
            <Route path="/poetry" element={<Poetry />} />
            <Route path="/malfoozat" element={<Malfoozat />} />
            <Route path="/books" element={<Books />} />
            <Route path="/darse-nizami" element={<DarseNizami />} />
            <Route path="/hifz-quran" element={<HifzeQuran />} />
            <Route path="/tajweed-qiraat" element={<Tajweed />} />
            <Route path="/admissions" element={<Admission />} />
            <Route path="/raabta/halqaat" element={<Halqaat />} />
            <Route path="/raabta/your-halqa" element={<YourHalqa />} />
          </Routes>
        </main>

        {/* Shared Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;