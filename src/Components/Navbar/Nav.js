import React, {useState} from 'react'; 

import styles from './Nav.module.scss';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

const Navbar = ({isVisible}) => (
    // <img src={logo_main} className={styles.logo} />
    
    <Router>
        <nav className={`${styles.wrapper} ${isVisible ? styles.activeMenu : "" }`}>
            <ul>
                <li>
                    <NavLink exact activeClassName={styles.activeLink} to='/'>Hotel</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName={styles.activeLink} to='/pokoje'>Pokoje</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName={styles.activeLink} to='/mini-spa'>Mini spa</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName={styles.activeLink} to='/bar-i-sala-gier'>Bar i Sala gier</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName={styles.activeLink} to='/bon-turystyczny'>Bon turystyczny</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName={styles.activeLink} to='/dane-osobowe'>Dane osobowe</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName={styles.activeLink} to='/bezpieczny-hotel'>Bezpieczny hotel</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName={styles.activeLink} to='/regulamin'>Regulamin</NavLink>
                </li>
                <li>
                    <NavLink exact activeClassName={styles.activeLink} to='/kontakt'>Kontakt</NavLink>
                </li>
            </ul>
        </nav>
    </Router>
)

export default Navbar;