import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Resume from './components/Resume/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main id="main">
        <Resume />
      </main>
      <Footer />
    </div>
  );
};

export default App;
