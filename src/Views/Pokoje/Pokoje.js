import React from 'react';
import styles from './Pokoje.module.scss';
import pokoje_1 from '../../assets/images/pokoje/DSC02196-HDR-1.jpg';
import pokoje_2 from '../../assets/images/pokoje/DSC02204-HDR-2.jpg';
import pokoje_3 from '../../assets/images/pokoje/DSC02206-HDR-2-3.jpg';
import pokoje_4 from '../../assets/images/pokoje/DSC02246-HDR-11.jpg';
import pokoje_5 from '../../assets/images/pokoje/DSC02287-HDR-21.jpg';

const Pokoje = (props) => (
    <div className={styles.outerWrapper}>
        <section className={styles.wrapper}>
            <h2 className={styles.heading}>Pokoje</h2>

            <p className={styles.paragraph}>
                Goście mają do dyspozycji klasycznie urządzone pokoje z
                balkonem. W każdym z nich znajduje się telewizor z płaskim
                ekranem ( dostępne kanały tv naziemnej), łazienka z prysznicem,
                zestaw do parzenia kawy i herbaty. Bezpłatne Wifi dostępne
                każdym pokoju i miejscach ogólnodostępnych.
            </p>
            <div className={styles.imgWrapper}>
                <img
                    src={pokoje_2}
                    className={styles.image}
                    alt="Zdjęcie pokoju 2"
                />
                <img
                    src={pokoje_3}
                    className={styles.image}
                    alt="Zdjęcie pokoju 3"
                />
                <img
                    src={pokoje_4}
                    className={styles.image}
                    alt="Zdjęcie pokoju 4"
                />
                <img
                    src={pokoje_5}
                    className={styles.image}
                    alt="Zdjęcie pokoju 5"
                />
                <img
                    src={pokoje_1}
                    className={styles.image}
                    alt="Zdjęcie pokoju 1"
                />
            </div>
        </section>
    </div>
);

export default Pokoje;
