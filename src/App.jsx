import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contacts';
import Footer from './components/Footer';
import ParticleNetwork from './components/ParticleNetwork';
import './index.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-background text-text-primary overflow-x-hidden">
      
      {/* O fundo de partículas roda desde o início (Loading + Background) */}
      <ParticleNetwork onLoadComplete={() => setIsLoaded(true)} />

      {/* Conteúdo do Site: Só aparece (fade-in) depois da explosão */}
      <div 
        className={`relative z-10 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <Header />
        
        <main>
          <Hero />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;