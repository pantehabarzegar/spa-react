import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Produkt from '../../image/pro.png';

const ShowUser = () => {
    const { userId } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(res => res.json())
            .then(data => {
                setUser(data);
                setLoading(false)
                setError(null)
            }).catch(err => {
                setError(err.message)
                setLoading(false)
            })

    }, [userId]);

    return (
        <div className="container mt-2">
            <div className="row g-3">
                {error && <div>{error}</div>}
                {loading && <div className="spinner-border"></div>}
                {user && <div className="col-md-8">
                    <div className="card shadow my-5">
                        <div className="card-header">
                            {user.name}

                        </div>
                        <ul className="list-group list-group-flush">
                            <img src={Produkt}  className="produkt-png"  alt="Mein Bild" />
                           
                            
                            <li className="list-group-item"><h1>Produkt Numer : {user.id} </h1></li>
                            <p className="p-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Ste.
                            </p>
                            <li className="list-group-item"><h4>website : {user.website} / bestell-Nr :{user.phone}</h4></li>
                            <br/>
                            <br/>
                        </ul>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default ShowUser