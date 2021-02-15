import React from 'react'; 
import Navbar from './Navbar/Navbar';
import styles from './Header.module.scss'


const Header = () => (
    <header className={styles.wrapper}>
        <Navbar />
    </header>
    
)

export default Header;