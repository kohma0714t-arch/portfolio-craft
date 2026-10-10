import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { WorksStory } from '../components/WorksStory';
import { Achievements } from '../components/Achievements';
import { Contact } from '../components/Contact';

export const HomePage: React.FC = () => {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Skills />
      <WorksStory />
      <Achievements />
      <Contact />
    </main>
  );
};
