import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomeES from '../Views/HomeES'
import FlavorsES from '../Views/FlavorsES'
import BuyNowES from '../Views/BuyNowES'
import FAQsES from '../Views/FAQsES'
import ContactES from '../Views/ContactES'
import GreatnessES from '../Views/GreatnessES'

import NavBarES from '../Components/NavbarES'
import FooterES from '../Components/FooterES'
import ModalES from '../Components/ModalES'



function Espanol() {

  return (
    <Router>
      <div>

        <NavBarES/>

        <ModalES/>


        <Switch>
          <Route exact path="/es" component={HomeES} />
          <Route path="/Comprar" component={BuyNowES} />
          <Route path="/Sabores" component={FlavorsES} />
          <Route path="/Preguntas" component={FAQsES} />
          <Route path="/Grandeza" component={GreatnessES} />
          <Route path="/Contacto" component={ContactES} />
          <Route path='*' component={HomeES} />
        </Switch>

        <FooterES />

      </div>
    </Router>
  );
}

export default Espanol;
