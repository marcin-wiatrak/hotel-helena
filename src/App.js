import React from 'react';
import Header from './Components/Header';
import Hotel from './Views/Hotel/Hotel';
import Pokoje from './Views/Pokoje/Pokoje';
import { Route, Switch } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import BarISalaGier from './Views/BarISalaGier/BarISalaGier';
import CentrumMiniSpa from './Views/CentrumMiniSpa/CentrumMiniSpa';
import Kontakt from './Views/Kontakt/Kontakt';
import Regulamin from './Views/Regulamin/Regulamin';
import BonTurystyczny from './Views/BonTurystyczny/BonTurystyczny';

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
            <Route path="/centrum-mini-spa">
                <CentrumMiniSpa />
            </Route>
            <Route path="/bar-i-sala-gier">
                <BarISalaGier />
            </Route>
            <Route path="/bon-turystyczny">
                <BonTurystyczny />
            </Route>
            <Route path="/regulamin">
                <Regulamin />
            </Route>
            <Route path="/kontakt">
                <Kontakt />
            </Route>
        </Switch>
        <Footer />
    </>
);

export default App;
