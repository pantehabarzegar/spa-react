import { Link } from "react-router-dom";
import home from '../image/home.png';

const Home = () => {
    return (
        <div className="container ">
            <div className="row home-row mt-5">
                <div className="col-md-6 ">
                    <p>
                           <h3>Herzlich willkommen in unserer App für maßgeschneiderte Fahrradbestellungen! ;)</h3> 
                           <br></br>
                      
                            Suchen Sie nach einem Fahrrad mit bestimmten Eigenschaften? 
                            
                             Wünschen Sie eine einzigartige Erfahrung bei der Bestellung von Fahrrädern, sei es für sich selbst oder Ihre Kunden?   <br></br>
                             Unsere App ist bereit, Ihnen zu helfen.

                            Unsere Firma ist einer der führenden Fahrradhersteller und -monteure mit einer Vielzahl von Fahrradteilen auf Lager. Wir verstehen, dass jeder Kunde individuelle Bedürfnisse und Vorlieben hat. Deshalb bietet Ihnen unsere App die Möglichkeit, ein Fahrrad mit genau den gewünschten Eigenschaften und Teilen zu bestellen.
                            
                    </p>
                    <Link className="btn btn-dark mt-2" to="/users">Produkten</Link>
                    <Link className="btn btn-light ms-3 mt-2" to="/posts">Konfigurator</Link>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-4 ">
                <img src={home}  className="home-png"  alt="Mein Bild" />
                </div>

            </div>
        </div >
    )
}

export default Home;
