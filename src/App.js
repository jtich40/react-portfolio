import React, { useState } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [page, setPage] = useState('Home')

  const renderPage = () => {
    if (page === 'Home') {
      return <Home />;
    }
    if (page === 'About') {
      return <About />;
    }
    if (page === 'Skills') {
      return <Skills />;
    }
    if (page === 'Projects') {
      return <Projects />;
    }
  };

  return (
    <div className="App">
      <Nav setPage={setPage} />
      <main>
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
