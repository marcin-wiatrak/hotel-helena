import React from 'react';
import styles from './BarISalaGier.module.scss';

import hotel_front from '../../assets/images/hotel_front.jpg';

const BarISalaGier = (props) => (
    <div className={styles.outerWrapper}>
        <section className={styles.wrapper}>
            <h2 className={styles.heading}>Bar i Sala gier</h2>

            <p className={styles.paragraph}>
                Zachęcamy Państwa do skorzystania z naszego baru i sali gier.
            </p>
            <img
                src={hotel_front}
                className={styles.image}
                alt="Wejście główne hotelu Helena"
            />
        </section>
    </div>
);

export default BarISalaGier;
