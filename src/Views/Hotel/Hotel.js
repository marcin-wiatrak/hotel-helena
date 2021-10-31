import React from 'react';
import styles from './Hotel.module.scss';
import hotel_front from '../../assets/images/hotel_front.jpg';
import hotel_3 from '../../assets/images/DJI_0016-11.jpg';

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
            <div className={styles.imgWrapper}>
                <img
                    src={hotel_front}
                    className={styles.image}
                    alt="Zdjęcie Hotelu Helena 1"
                />
                <img
                    src={hotel_3}
                    className={styles.image}
                    alt="Zdjęcie Hotelu Helena 3"
                />
            </div>
        </section>
    </div>
);

export default Hotel;
