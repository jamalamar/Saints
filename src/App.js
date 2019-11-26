import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Views/Home'
import OurStory from './Views/Ourstory'
import FAQs from './Views/FAQs'
import Contact from './Views/Contact'

import NavBar from './Components/Navbar'
import Footer from './Components/Footer'



function App() {

  return (
    <Router>
      <div >

        <NavBar/>

        <Route path="/" exact component={Home} />
        <Route path="/OurStory" component={OurStory} />
        <Route path="/FAQs" component={FAQs} />
        <Route path="/Contact" component={Contact} />

        <Footer />

      </div>
    </Router>
  );
}

export default App;
