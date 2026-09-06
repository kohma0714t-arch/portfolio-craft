import React from 'react';
import { BlueprintBackground } from './components/BlueprintBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { WorksStory } from './components/WorksStory';
import { Contact } from './components/Contact';
import { StoryIndicator } from './components/StoryIndicator';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white text-ink">
      <BlueprintBackground />
      <StoryIndicator />
      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <WorksStory />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
