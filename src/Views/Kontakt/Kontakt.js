import styles from './Kontakt.module.scss';
import hotel_front from '../../assets/images/hotel_front.jpg';
import React from 'react';

const Kontakt = () => {
    return (
        <div className={styles.outerWrapper}>
            <section className={styles.wrapper}>
                <h2 className={styles.heading}>Kontakt</h2>

                <div className={styles.contactWrapper}>
                    <h3>Hotel Port Helena</h3>
                    <p>al. Wojska Polskiego 58</p>
                    <p>11-500 Giżycko</p>
                    <p>NIP: 845 000 66 27</p>
                    <p>recepcja@hotelhelena.pl</p>
                    <p>87-429-22-09</p>
                </div>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2342.74021322177!2d21.736096315996456!3d54.04287643001018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e187fc64e07aa9%3A0x286041142dc00b1c!2sHotel%20Helena!5e0!3m2!1spl!2spl!4v1613414808658!5m2!1spl!2spl"
                    aria-hidden="false"
                    tabIndex="0"
                    title="mapka"
                    className={styles.footerMap}
                />
            </section>
        </div>
    );
};

export default Kontakt;
