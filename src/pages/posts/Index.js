import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import ListPosts from "../../components/posts/List";

const IndexPost = () => {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => {
                setPosts(data);
                setLoading(false)
                setError(null)
            }).catch(err => {
                setError(err.message)
                setLoading(false)
            })

    }, []);

    return (
        <div >
            <h2 className="margin-s mt-5">Neue Konfiguration :</h2>
           
            <div>
                <Link className="btn btn-lg btn-dark margin-s mt-3 mb-5 " to="/posts/create">Erstellen</Link>
            </div>
            <h5 className="margin-s container">Unten können Sie die konfigurierten Fahrräder sehen. Außerdem können Sie durch Klicken auf den Produkttitel jedes Fahrrad vor der endgültigen Bestätigung bearbeiten oder löschen.</h5>
            {error && <div>{error}</div>}
            {loading && <div className="spinner-border"></div>}
            {posts && <ListPosts posts={posts}/>}
        </div>
    )
}

export default IndexPost