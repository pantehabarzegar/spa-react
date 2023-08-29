import { Link } from "react-router-dom";
import Produkt from '../../image/pro.png';

const ListPosts = ({ posts }) => {
    return (
        <>
           {posts.map(post => (
                <div className="container col-md-8" key={post.id}>
                    
                    <div className="carser.url}d mt-3  p-3 shadow">
                    <Link className="list-group-item font-link" to={`/posts/${post.id}`}>{post.title}</Link>   
                    <img src={Produkt}  className="produkt-png"  alt="Mein Bild" />
                        <div className="card-body">
                        <span>Produkt Nummer:</span>  
                            <h5 className="card-title">{post.id}</h5>
                            <p className="card-text">Das X-Modell ist ein hochmodernes Produkt mit leistungsstarker Kamera und beeindruckendem OLED-Display. Es verbindet elegantes Design mit fortschrittlicher Technologie und bietet eine nahtlose Benutzererfahrung.</p>
                            <Link to="#" className="btn btn-ko btn-dark pb-4">Details{post.url}</Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ListPosts;