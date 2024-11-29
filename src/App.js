import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Referances from './components/Referances.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />

   
      <main>
   
        <Hero />
        <Projects />
        <Referances />
        <About />
        <Contact />

        

      </main>

       <Footer />
     
    </div>
  );
}

export default App;
