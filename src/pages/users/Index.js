import { useEffect, useState } from "react"
import ListUsers from "../../components/users/List";

const IndexUser = () => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/photos")
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setLoading(false)
                setError(null)
            }).catch(err => {
                setError(err.message)
                setLoading(false)
            })

    }, []);

    return (
        <div className="container mt-5">
            <div className="row g-3 ">
                <h2 className="produkt">Produkten :</h2>
                <p className="produkt " >Sie können aus einer Vielzahl von Fahrradteilen und Eigenschaften auswählen, angepasst an Ihre Vorlieben und Bedürfnisse ;) <br></br> Zusätzlich wird durch Klicken auf die Überschrift jedes Produkts eine Seite geöffnet, auf der Sie detailliertere Informationen über <br></br>das Produkt erhalten können."</p>
                {error && <div>{error}</div>}
                {loading && <div className="spinner-border"></div>}
                {users && <ListUsers users={users} />}
            </div>
        </div>
    )
}

export default IndexUser