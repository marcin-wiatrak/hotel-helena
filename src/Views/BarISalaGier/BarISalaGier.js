import React from 'react';
import styles from './BarISalaGier.module.scss';

import bar_1 from '../../assets/images/barsalagier/1.jpg';
import bar_2 from '../../assets/images/barsalagier/2.jpg';
import bar_3 from '../../assets/images/barsalagier/3.jpg';
import bar_4 from '../../assets/images/barsalagier/4.jpg';
import bar_5 from '../../assets/images/barsalagier/5.jpg';
import bar_6 from '../../assets/images/barsalagier/6.jpg';
import bar_7 from '../../assets/images/barsalagier/7.jpg';
import bar_8 from '../../assets/images/barsalagier/8.jpg';

const BarISalaGier = () => (
    <div className={styles.outerWrapper}>
        <section className={styles.wrapper}>
            <h2 className={styles.heading}>Bar i Sala gier</h2>

            <p className={styles.paragraph}>
                Zachęcamy Państwa do skorzystania z naszego baru i sali gier.
            </p>
            <div className={styles.imgWrapper}>
                <img
                    src={bar_1}
                    className={styles.image}
                    alt="Zdjęcie baru i salonu gier 1"
                />
                <img
                    src={bar_2}
                    className={styles.image}
                    alt="Zdjęcie baru i salonu gier 2"
                />
                <img
                    src={bar_3}
                    className={styles.image}
                    alt="Zdjęcie baru i salonu gier 3"
                />
                <img
                    src={bar_4}
                    className={styles.image}
                    alt="Zdjęcie baru i salonu gier 4"
                />
                <img
                    src={bar_5}
                    className={styles.image}
                    alt="Zdjęcie baru i salonu gier 5"
                />
                <img
                    src={bar_6}
                    className={styles.image}
                    alt="Zdjęcie baru i salonu gier 6"
                />
                <img
                    src={bar_7}
                    className={styles.image}
                    alt="Zdjęcie baru i salonu gier 7"
                />
                <img
                    src={bar_8}
                    className={styles.image}
                    alt="Zdjęcie baru i salonu gier 8"
                />
            </div>
        </section>
    </div>
);

export default BarISalaGier;
