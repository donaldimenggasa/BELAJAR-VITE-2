import React from 'react';
import { Routes as Donaldi, Route,} from 'react-router-dom'
import Navbar from '../src/Component/Navbar';
import Home  from './Pages/Home';
import About from './Pages/About';
import Portofolio from './Pages/Portofolio';
import Services from './Pages/Services';
import Contact from './Pages/contact';


const App = () => {
  return (
    <div>
      <Navbar />
        <Donaldi>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portofolio' element={<Portofolio />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
        </Donaldi>
    </div>
  );
};

export default App;