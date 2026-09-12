import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { WorksStory } from './components/WorksStory';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-cream text-ink">
      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <WorksStory />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
