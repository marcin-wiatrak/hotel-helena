import React, { useEffect, useState } from 'react';
import Nav from './Navbar/Navbar';
import styles from './Header.module.scss';
import { ReactComponent as LogoMain } from '../assets/images/logo_main_2.svg';
import { ReactComponent as Slogan } from '../assets/images/slogan.svg';

const Header = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleNav = () => {
        setIsVisible((prev) => !prev);
    };

    const style = styles.hamburger;
    const style2 = styles.active;

    const hamburgerClasses = isVisible
        ? style + ' ' + style2
        : styles.hamburger;

    const [stickyNav, setStickyNav] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 0) {
            setStickyNav(true);
        } else {
            setStickyNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    return (
        <header className={`${styles.wrapper}`}>
            <div
                className={`${styles.navbar} ${
                    stickyNav ? styles.stickyTop : ''
                }`}
            >
                <LogoMain className={styles.logo} />
                <button className={hamburgerClasses} onClick={toggleNav}>
                    <div className={styles.bar1} />
                    <div className={styles.bar2} />
                    <div className={styles.bar3} />
                </button>
                <Nav isVisible={isVisible} />
            </div>
            <Slogan className={styles.slogan} />
        </header>
    );
};

export default Header;
