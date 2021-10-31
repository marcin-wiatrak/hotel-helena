import React from 'react';
import styles from './CentrumMiniSpa.module.scss';
import spa_1 from '../../assets/images/spa/1.jpg';
import spa_2 from '../../assets/images/spa/2.jpg';
import spa_3 from '../../assets/images/spa/3.jpg';
import spa_4 from '../../assets/images/spa/4.jpg';
import spa_5 from '../../assets/images/spa/5.jpg';
import spa_6 from '../../assets/images/spa/6.jpg';

const CentrumMiniSpa = () => (
    <div className={styles.outerWrapper}>
        <section className={styles.wrapper}>
            <h2 className={styles.heading}>Centrum mini SPA</h2>

            <p className={styles.paragraph}>
                Sauna sucha- 20zł./ osoba/godzina Sauna parowa- 20,00zł./osoba/
                godzina Kabina Infrared- 20,00zł./ osoba/ godzina Woda i ręcznik
                w cenie Obowiązuje wcześniejsza rezerwacja
            </p>
            <div className={styles.imgWrapper}>
                <img
                    src={spa_1}
                    className={styles.image}
                    alt="Zdjęcie mini spa 1"
                />
                <img
                    src={spa_2}
                    className={styles.image}
                    alt="Zdjęcie mini spa 2"
                />
                <img
                    src={spa_3}
                    className={styles.image}
                    alt="Zdjęcie mini spa 3"
                />
                <img
                    src={spa_4}
                    className={styles.image}
                    alt="Zdjęcie mini spa 4"
                />
                <img
                    src={spa_5}
                    className={styles.image}
                    alt="Zdjęcie mini spa 5"
                />
                <img
                    src={spa_6}
                    className={styles.image}
                    alt="Zdjęcie mini spa 6"
                />
            </div>
        </section>
    </div>
);

export default CentrumMiniSpa;
