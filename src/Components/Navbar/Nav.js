import styles from './Nav.module.scss';
import { NavLink } from 'react-router-dom';

const Navbar = ({ isVisible }) => (
    <nav className={`${styles.wrapper} ${isVisible ? styles.activeMenu : ''}`}>
        <ul className={styles.mainNav}>
            <li className={styles.navElement}>
                <NavLink exact activeClassName={styles.activeLink} to="/">
                    Hotel
                </NavLink>
            </li>
            <li className={styles.navElement}>
                <NavLink activeClassName={styles.activeLink} to="/pokoje">
                    Pokoje
                </NavLink>
            </li>
            <li className={styles.navElement}>
                <NavLink activeClassName={styles.activeLink} to="/mini-spa">
                    Mini spa
                </NavLink>
            </li>
            <li className={styles.navElement}>
                <NavLink
                    activeClassName={styles.activeLink}
                    to="/bar-i-sala-gier"
                >
                    Bar i Sala gier
                </NavLink>
            </li>
            <li className={styles.navElement}>
                <NavLink
                    activeClassName={styles.activeLink}
                    to="/bon-turystyczny"
                >
                    Bon turystyczny
                </NavLink>
            </li>
            <li className={styles.navElement}>
                <NavLink activeClassName={styles.activeLink} to="/dane-osobowe">
                    Dane osobowe
                </NavLink>
            </li>
            <li className={styles.navElement}>
                <NavLink
                    activeClassName={styles.activeLink}
                    to="/bezpieczny-hotel"
                >
                    Bezpieczny hotel
                </NavLink>
            </li>
            <li className={styles.navElement}>
                <NavLink activeClassName={styles.activeLink} to="/regulamin">
                    Regulamin
                </NavLink>
            </li>
            <li className={styles.navElement}>
                <NavLink activeClassName={styles.activeLink} to="/kontakt">
                    Kontakt
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default Navbar;
