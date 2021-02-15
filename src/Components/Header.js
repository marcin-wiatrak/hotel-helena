import React, {useState} from 'react'; 
import Nav from './Navbar/Nav';
import styles from './Header.module.scss'
import logo_main from '../assets/images/logo_main.svg';
import slogan from '../assets/images/slogan.svg';


const Header = () => {

    const [isVisible, setIsVisible] = useState(false)

    const toggleNav = () => {
        setIsVisible(prev => !prev)
    }

    const style = styles.hamburger;
    const style2 = styles.active;

    const hamburgerClasses = isVisible ? (style +" "+ style2) : styles.hamburger;
    
    return (
        <header className={styles.wrapper}>
        <div className={styles.navbar}>
            <img src={logo_main} />
            <button className={hamburgerClasses} onClick={toggleNav}>
                <div className={styles.bar1}></div>
                <div className={styles.bar2}></div>
                <div className={styles.bar3}></div>
            </button>
        </div>
        <Nav isVisible={isVisible} />
        <img src={slogan} className={styles.slogan}></img>
    </header>
    )
}

export default Header;