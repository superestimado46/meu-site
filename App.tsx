import React from 'react';
import Hero from './components/Hero';
import Proof from './components/Proof';
import ProblemSolution from './components/ProblemSolution';
import Modules from './components/Modules';
import Bonuses from './components/Bonuses';
import Pricing from './components/Pricing';
import Guarantee from './components/Guarantee';
import Summary from './components/Summary';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-tiktok-black font-sans antialiased text-white selection:bg-simpson-yellow selection:text-black">
      <main>
        <Hero />
        <Proof />
        <ProblemSolution />
        <Modules />
        <Bonuses />
        <Pricing />
        <Guarantee />
        <Summary />
      </main>
      <Footer />
      
      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-black/90 backdrop-blur border-t border-gray-800 z-50 md:hidden">
        <button 
          onClick={() => document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full py-3 bg-simpson-yellow text-black font-bold rounded-lg shadow-lg"
        >
          QUERO COMEÇAR AGORA
        </button>
      </div>
    </div>
  );
}

export default App;