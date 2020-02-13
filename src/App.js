import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Views/Home'
import AboutUs from './Views/AboutUs'
import FAQs from './Views/FAQs'
import Contact from './Views/Contact'

import NavBar from './Components/Navbar'
import Footer from './Components/Footer'



function App() {

  return (
    <Router>
      <div>

        <NavBar/>

        <Switch>
          <Route path="/" exact component={Home} />
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
