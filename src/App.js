import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Espanol from './Languages/Espanol'
import English from './Languages/English'




function App() {

  return (
      <Router>
        <div>

          <Switch>
            <Route exact path='/' component={English}/>
            <Route exact path='/es' component={Espanol}/>
            <Route path='*' component={English}/>
          </Switch>

        </div>
      </Router>
  );
}

export default App;
