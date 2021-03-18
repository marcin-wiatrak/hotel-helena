import React from 'react';
import styles from './Hotel.module.scss';
import hotel_front from '../../assets/images/hotel_front.jpg';

const Hotel = () => (
    <div className={styles.outerWrapper}>
        <section className={styles.wrapper}>
            <h2 className={styles.heading}>Hotel</h2>

            <p className={styles.paragraph}>
                Trzygwiazdkowy hotel Helena jest położony w cichej okolicy,
                zaledwie 100 metrów od jeziora Kisajno oraz 1,5 km od centrum
                Giżycka i jeziora Niegocin. Z okien roztacza się widok na
                jezioro i przystań, lub pobliski las.
            </p>
            <p className={styles.paragraph}>
                Na miejscu znajduje się duży prywatny parking, z którego Goście
                mogą korzystać bezpłatnie.
            </p>
            <p className={styles.paragraph}>
                Hotel dysponuje 40 pokojami 1-, 2osobowymi. W obiekcie znajduje
                się również pomieszczenie przystosowane do pobytu osób
                niepełnosprawnych.
            </p>

            <img
                src={hotel_front}
                className={styles.image}
                alt="Wejście główne hotelu Helena"
            />
        </section>
    </div>
);

export default Hotel;
