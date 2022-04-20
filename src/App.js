import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutSection from "./components/AboutSection/AboutSection";
import AchievementSection from "./components/AchievementsSection/AchievementSection";
import Contact from "./components/Contact/Contact";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import NavMenu from "./components/NavMenu/NavMenu";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavMenu />
        <Routes>
          <Route path="/portfolio_ayve178/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<AboutSection />} />
        </Routes>
        <Routes>
          <Route path="/projects" element={<ProjectSection />} />
        </Routes>
        <Routes>
          <Route path="/experience" element={<ExperienceSection />} />
        </Routes>
        <Routes>
          <Route path="/achievements" element={<AchievementSection />} />
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
