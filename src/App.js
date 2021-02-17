import React from 'react';
import Header from './Components/Header';
import Hotel from './Views/Hotel/Hotel';
import Pokoje from './Views/Pokoje/Pokoje';
import { Route, Switch } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
const App = () => (
  <>
    <Header />
    <Switch>
      <Route path="/" exact>
        <Hotel />
      </Route>
      <Route path="/pokoje">
        <Pokoje />
      </Route>
      <Route path="/mini-spa">{/* <Main /> */}</Route>
      <Route path="/">{/* <Main /> */}</Route>
      <Route path="/">{/* <Main /> */}</Route>
      <Route path="/">{/* <Main /> */}</Route>
      <Route path="/">{/* <Main /> */}</Route>
      <Route path="/">{/* <Main /> */}</Route>
    </Switch>
    <Footer />
  </>
);

export default App;
