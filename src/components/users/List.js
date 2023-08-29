import React from "react";
import { Link } from "react-router-dom";
import Produkt from '../../image/pro.png';

const ListUsers = ({ users }) => {
    return (
        <div>
            {users.map(user => (
                <div className="container col-md-8" key={user.id}>
                    
                    <div className="carser.url}d mt-3  p-3 shadow">
                    <Link className="list-group-item font-link" to={`/users/${user.id}`}>{user.title}</Link>   
                    <img src={Produkt}  className="produkt-png"  alt="Mein Bild" />
                        <div className="card-body">
                            <h5 className="card-title">{user.id}</h5>
                            <p className="card-text">Das X-Modell ist ein hochmodernes Produkt mit leistungsstarker Kamera und beeindruckendem OLED-Display. Es verbindet elegantes Design mit fortschrittlicher Technologie und bietet eine nahtlose Benutzererfahrung.</p>
                            <Link to="#" className="btn btn-dark">{user.url}</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ListUsers;
