import React from 'react';
import styles from './BonTurystyczny.module.scss';
import bon from '../../assets/images/bon_turystyczny.jpg';

const BonTurystyczny = () => (
    <div className={styles.outerWrapper}>
        <section className={styles.wrapper}>
            <h2 className={styles.heading}>Bon turystyczny</h2>
            <div className={styles.bonimg}>
                <img src={bon} alt="Bon turystyczny" />
            </div>
            <div>
                <p className={styles.paragraph}>
                    Informacja na temat bonu turystycznego, jak go uzyskać oraz
                    kto jest uprawniony znajduje się na stronie:
                </p>
                <a
                    href="https://www.gov.pl/web/rozwoj-praca-technologia/bonturystyczny"
                    className={styles.link}
                >
                    https://www.gov.pl/web/rozwoj-praca-technologia/bonturystyczny
                </a>
            </div>
        </section>
    </div>
);

export default BonTurystyczny;
