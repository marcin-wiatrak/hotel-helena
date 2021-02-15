import React from 'react'; 
import Header from './Components/Header';
import Hotel from './Views/Hotel/Hotel';
import Pokoje from './Views/Pokoje/Pokoje'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact>
        <Hotel />
      </Route>
      <Route path="/pokoje" exact>
        <Pokoje />
      </Route>
      <Route path="/" exact>
        {/* <Main /> */}
      </Route>
      <Route path="/" exact>
        {/* <Main /> */}
      </Route>
      <Route path="/" exact>
        {/* <Main /> */}
      </Route>
      <Route path="/" exact>
        {/* <Main /> */}
      </Route>
      <Route path="/" exact>
        {/* <Main /> */}
      </Route>
      <Route path="/" exact>
        {/* <Main /> */}
      </Route>
    </Switch>
  </Router>
)

export default App;