import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import React from 'react';
import './App.css';
import Logoshowcase from './components/logo-showcase/logoshowcase';
import Navmenu from './components/Header/Navmenu';
import Gallery from './components/gallery/Gallery';
import CLientpartnership from './components/client-partnership/Clientpartnership'
import Services from './components/services/services';
import Aboutus from './components/Aboutus/Aboutus';
import Awards from './components/Award/Awards';
import Team from './components/Team/Team';
import Banner from './components/Banner/Banner';



function App() {
  return (
    <div className="App ">
      <header className="App-header">
        <Navmenu />
        <Banner />
        <Aboutus />
        <Services />
        
        <Gallery />
        <Awards />
        <Logoshowcase />
        <CLientpartnership />
     <Team />
      </header>
    </div>
  );
}

export default App;
