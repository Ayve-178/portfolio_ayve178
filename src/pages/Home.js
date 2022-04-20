import React from 'react';
import AboutSection from '../components/AboutSection/AboutSection';
import AchievementSection from '../components/AchievementsSection/AchievementSection';
import Contact from '../components/Contact/Contact';
import ExperienceSection from '../components/ExperienceSection/ExperienceSection';
import HeroSection from '../components/HeroSection/HeroSection';
import ProjectSection from '../components/ProjectSection/ProjectSection';

function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ExperienceSection />
      <AchievementSection />
      <Contact />
    </div>
  )
}

export default Home