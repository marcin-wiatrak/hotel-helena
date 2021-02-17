import React from 'react';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <ul className={styles.footerNav}>
                    <li className={styles.footerNavElement}>
                        <Link to="/">hotel</Link>
                    </li>
                    <li className={styles.footerNavElement}>
                        <Link to="/pokoje">pokoje</Link>
                    </li>
                    <li className={styles.footerNavElement}>
                        <Link to="/bar-i-sala-gier">bar i sala gier</Link>
                    </li>
                    <li className={styles.footerNavElement}>
                        <Link to="/centrum-mini-spa">centrum mini spa</Link>
                    </li>
                    <li className={styles.footerNavElement}>
                        <Link to="/covid-19">covid-19</Link>
                    </li>
                    <li className={styles.footerNavElement}>
                        <Link to="/regulamin">regulamin</Link>
                    </li>
                </ul>
            </div>

            <div className={styles.footerContainer}>
                <h3 className={styles.heading}>Hotel Port Helena</h3>
                <p className={styles.paragraph}>al. Wojska Polskiego 58</p>
                <p className={styles.paragraph}>11-500 Giżycko</p>
                <p className={styles.paragraph}>NIP: 845 000 66 27</p>
                <p className={styles.paragraph}>recepcja@hotelhelena.pl</p>
                <p className={styles.paragraph}>87-429-22-09</p>
            </div>

            <div className={styles.footerContainerMap}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2342.74021322177!2d21.736096315996456!3d54.04287643001018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e187fc64e07aa9%3A0x286041142dc00b1c!2sHotel%20Helena!5e0!3m2!1spl!2spl!4v1613414808658!5m2!1spl!2spl"
                    aria-hidden="false"
                    tabIndex="0"
                    title="mapka"
                ></iframe>
            </div>

            <div className={styles.creator}>
                <p>&copy; 2021 hotelhelena.pl</p>
                <p>Projekt i wykonanie marcinwiatrak.pl</p>
            </div>
        </footer>
    );
};

export default Footer;
