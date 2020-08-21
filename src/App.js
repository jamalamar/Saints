import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Views/Home'
import AboutUs from './Views/AboutUs'
import BuyNow from './Views/BuyNow'
import FAQs from './Views/FAQs'
import Contact from './Views/Contact'

import NavBar from './Components/Navbar'
import Footer from './Components/Footer'
import Modal from './Components/Modal'



function App() {

  return (
    <Router>
      <div>

        <NavBar/>
        
        {/*<Modal/>*/}


        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/BuyNow" component={BuyNow} />
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/FAQs" component={FAQs} />
          <Route path="/Contact" component={Contact} />
          <Route exact path='*' component={Home} />
        </Switch>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
