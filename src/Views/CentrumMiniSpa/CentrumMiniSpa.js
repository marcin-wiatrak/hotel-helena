import React from 'react';
import styles from './CentrumMiniSpa.module.scss';

const CentrumMiniSpa = (props) => (
    <div className={styles.outerWrapper}>
        <section className={styles.wrapper}>
            <h2 className={styles.heading}>Centrum mini SPA</h2>

            <p className={styles.paragraph}>
                Sauna sucha- 20zł./ osoba/godzina Sauna parowa- 20,00zł./osoba/
                godzina Kabina Infrared- 20,00zł./ osoba/ godzina Woda i ręcznik
                w cenie Obowiązuje wcześniejsza rezerwacja
            </p>
        </section>
    </div>
);

export default CentrumMiniSpa;
