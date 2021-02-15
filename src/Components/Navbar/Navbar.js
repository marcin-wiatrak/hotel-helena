import React from 'react'; 
import logo_main from '../../assets/images/logo_main.svg';
import styles from './Navbar.module.scss';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

const Navbar = () => (
    // <img src={logo_main} className={styles.logo} />

    <Router>
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>Hotel</NavLink>
                </li>
                <li>
                    <NavLink to='/pokoje'>Pokoje</NavLink>
                </li>
                <li>
                    <NavLink to='/mini-spa'>Mini spa</NavLink>
                </li>
                <li>
                    <NavLink to='/bar-i-sala-gier'>Bar i Sala gier</NavLink>
                </li>
                <li>
                    <NavLink to='/bon-turystyczny'>Bon turystyczny</NavLink>
                </li>
                <li>
                    <NavLink to='/dane-osobowe'>Dane osobowe</NavLink>
                </li>
                <li>
                    <NavLink to='/bezpieczny-hotel'>Bezpieczny hotel</NavLink>
                </li>
                <li>
                    <NavLink to='/regulamin'>Regulamin</NavLink>
                </li>
                <li>
                    <NavLink to='/kontakt'>Kontakt</NavLink>
                </li>
            </ul>
        </nav>
    </Router>
)

export default Navbar;