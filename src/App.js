import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Views/Home'
import About from './Views/About'
import Contact from './Views/Contact'

import NavBar from './Components/Navbar'
import Footer from './Components/Footer'



function App() {

  return (
    <Router>
      <div >

        <NavBar/>

        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />

        <Footer />

      </div>
    </Router>
  );
}

export default App;
