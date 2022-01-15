import styles from './Regulamin.module.scss';

const Regulamin = () => {
    return (
        <div className={styles.outerWrapper}>
            <section className={styles.wrapper}>
                <h2 className={styles.heading}>Regulamin Hotelu Helena</h2>
                <div className={styles.rulesContainer}>
                    <ol>
                        <li>
                            Regulamin obowiązuje wszystkich Gości przebywających
                            na terenie hotelu.
                        </li>
                        <li>
                            Rezerwacje w hotelu zachowują ważność do godziny
                            18:00 planowanego dnia przyjazdu, chyba że Gość
                            określił inna godzinę podczas dokonywania
                            rezerwacji.
                        </li>
                        <li>
                            Pokój wynajmowany jest na okres doby hotelowej,
                            która rozpoczyna się o godzinie 15:00 i kończy o
                            godzinie 11:00 dnia następnego.
                        </li>
                        <li>
                            W przypadku braku określenia przez Gościa długości
                            pobytu, przyjmuje się, że pokój został wynajęty na
                            jedną dobę hotelową.
                        </li>
                        <li>
                            Życzenie przedłużenia pobytu Gość zgłasza w recepcji
                            do godziny 10:00 w dniu, w którym upływa termin
                            pobytu. Hotel zobowiązuje się zrealizować zgłoszenie
                            w miarę posiadanych wolnych miejsc.
                        </li>
                        <li>
                            Gość powinien dokonać rejestracji pobytu w recepcji
                            na podstawie dokumentu zawierającego zdjęcie (np.
                            dowód osobisty, paszport, prawo jazdy). W przypadku
                            odmowy okazania dokumentu w sposób umożliwiający
                            zameldowanie, Recepcjonista ma obowiązek odmówić
                            wydania klucza. Warunkiem zameldowania Gościa jest
                            podpisanie karty meldunkowej. Dokonując ww
                            czynności, Gość potwierdza, iż zapoznał się i
                            akceptuje warunki Regulaminu
                        </li>
                        <li>
                            Należność za wynajem pokoi i usługi dodatkowe
                            pobierana jest:
                            <ul>
                                <li>
                                    w przypadku płatności gotówką, z góry za
                                    cały pobyt;
                                </li>
                                <li>
                                    w przypadku płatności kartą płatniczą może
                                    zostać dokonana blokada środków na karcie;
                                </li>
                                <li>
                                    Karta zostanie obciążana za całość pobytu
                                    przy wyjeździe. Wyjątkiem jest rezerwacja
                                    bezzwrotna (non-refundable) - w tym wypadku
                                    Hotel obciąża za całość pobytu, bez
                                    możliwości zwrotu, w dniu dokonania
                                    rezerwacji.
                                </li>
                                <li>
                                    za pozostałe usługi należność regulowana
                                    jest przy wyjeździe kartą płatniczą lub
                                    gotówką;
                                </li>
                                <li>
                                    w przypadku rezygnacji Gościa za pobyt w
                                    trakcie trwania doby hotelowej, Hotel nie
                                    zwraca opłaty za daną dobę hotelową;
                                </li>
                                <li>
                                    Faktury VAT mogą być wystawiane w dniu
                                    wyjazdu.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Hotel może odmówić przyjęcia Gościa, który podczas
                            wcześniejszego pobytu rażąco naruszył regulamin
                            hotelowy, wyrządził szkodę w mieniu hotelowym, innym
                            Gościom lub pracownikom hotelu.
                        </li>
                        <li>
                            Hotel świadczy usługi zgodnie ze swoją kategorią. W
                            przypadku jakichkolwiek zastrzeżeń dotyczących
                            świadczonych usług, o fakcie tym należy poinformować
                            recepcję.
                        </li>
                        <li>
                            Gość hotelowy nie ma prawa przekazywać pokoju innym
                            osobom, nawet przed upływem doby hotelowej, za którą
                            zapłacił.
                        </li>
                        <li>
                            Osoby odwiedzające Gościa, powinny opuścić hotel do
                            godziny 22:00.
                        </li>
                        <li>
                            Przebywanie osób odwiedzających na terenie hotelu (
                            z wyłączeniem restauracji) po godzinie 22:00 jest
                            jednoznaczne z wyrażeniem zgody przez Gościa na
                            dokwaterowanie do pokoju osoby odwiedzającej.
                            Dokwaterowanie następuje zgodnie z aktualną ceną
                            bieżącego dnia.
                        </li>
                        <li>
                            W hotelu w godzinach 22:00-6:00 obowiązuje tzw.
                            „cisza nocna”. W przypadku jej zakłócenia hotel ma
                            prawo podjąć interwencję a nawet odmówić dalszego
                            świadczenia usług.
                        </li>
                        <li>
                            Gość hotelowy ponosi odpowiedzialność materialną za
                            uszkodzenia i zniszczenia wyposażenia oraz urządzeń
                            technicznych hotelu powstałe z jego winy lub z winy
                            osób odwiedzających Gościa. Hotel ma prawo
                            dochodzenia roszczeń w związku ze zniszczeniami
                            powstałymi na terenie hotelu.
                        </li>
                        <li>
                            Odpowiedzialność hotelu z tytułu utraty lub
                            uszkodzenia rzeczy wniesionych przez Gościa regulują
                            przepisy Kodeksu Cywilnego art.846- 849. hotel może
                            odmówić przyjęcia do depozytu pieniędzy, papierów
                            wartościowych oraz cennych przedmiotów i broni,
                            jeżeli zagrażają one bezpieczeństwu albo ich wartość
                            jest zbyt duża w stosunku do standardu hotelu, a
                            także jeśli zajmują zbyt wiele miejsca.
                        </li>
                        <li>
                            Każdorazowo opuszczając pokój Gość zobowiązany jest
                            do wyłączenia oświetlenia, urządzeń audiowizualnych
                            oraz zamknięcia drzwi i pozostawienia klucza w
                            recepcji.
                        </li>
                        <li>
                            W hotelu obowiązuje zakaz przechowywania zwierząt
                            bez zgody recepcji.
                        </li>
                        <li>
                            Hotel nie ponosi odpowiedzialności za pojazdy
                            parkujące przy hotelu.
                        </li>
                        <li>
                            W pokojach hotelowych i na balkonach obowiązuje
                            zakaz palenia wyrobów tytoniowych. W przypadku
                            naruszenia zakazu Gość zostanie obciążony kosztami
                            ozonowania pokoju.
                        </li>
                        <li>
                            Gość zobowiązany jest do przestrzegania przepisów
                            przeciwpożarowych. Zabronione jest używanie urządzeń
                            elektrycznych niestanowiących wyposażenia pokoju
                            hotelowego, w szczególności: grzałek elektrycznych,
                            żelazek elektrycznych itp.
                            <ul>
                                <li>
                                    Deska do prasowania wraz z żelazkiem
                                    znajduje się na pierwszym piętrze w lewym
                                    skrzydle hotelu/ obowiązuje zakaz
                                    przenoszenia urządzeń do pomieszczeń
                                    mieszkalnych.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Hotel zobowiązuje się do przechowywania przedmiotów
                            pozostawionych przez Gości przez 30 dni.
                            <ul>
                                <li>
                                    W przypadku otrzymania polecenia ww.
                                    przedmioty zostaną odesłane Pocztą Polską
                                    lub przesyłką kurierską na adres wskazany
                                    przez Gościa, na jego koszt.
                                </li>
                            </ul>
                        </li>
                        <li>
                            W pokojach hotelowych obowiązuje zakaz organizowania
                            imprez.
                        </li>
                        <li>
                            W pokojach hotelowych nie można przechowywać
                            ładunków niebezpiecznych, materiałów łatwopalnych,
                            wybuchowych i iluminacyjnych.
                        </li>
                        <li>
                            Zakazuje się prowadzenia akwizycji i sprzedaży
                            obnośnej.
                        </li>
                        <li>
                            Zabrania się nadmiernego hałasowania na terenie
                            Hotelu. Jeśli Gość pod wpływem alkoholu i/lub
                            środków odurzających zakłóca spokojny pobyt Gości,
                            może zostać z niego usunięty.
                        </li>
                        <li>
                            Gościom nie wolno dokonywać jakichkolwiek zmian w
                            pokojach hotelowych (przestawianie mebli, łóżek
                            itp.)
                        </li>
                    </ol>
                </div>
            </section>
        </div>
    );
};

export default Regulamin;
