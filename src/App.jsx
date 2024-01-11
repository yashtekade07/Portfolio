import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
const App = () => {
  return (
    <main className='bg-slate-300/20 h-full'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
