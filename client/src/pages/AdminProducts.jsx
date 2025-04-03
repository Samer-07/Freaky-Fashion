import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AdminStyles.css";

function AdminProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/admin")
            .then((resp) => resp.json())
            .then((data) => setProducts(data));
    }, []);

    const handleDelete = (id) => {
        if (window.confirm("Är du säker på att du vill ta bort den här produkten?")) {
            fetch(`http://localhost:8000/api/admin/${id}`, {
                method: "DELETE",
            })
            .then((resp) => resp.json())
            .then(() => {
                setProducts(products.filter(product => product.id !== id));
            });
        }
    };

    return (
        <div className="admin-containers">
            <header className="admin-headers">Administration</header>
            <main className="admin-mains">
              
                <aside className="admin-sidebars">
                    <h2>Produkter</h2>
                </aside>

                <div className="admin-contents">
                    <div className="admin-headerss">
                        <h2 className="produkter-titles">Produkter</h2>
                        <Link to="/admin/products/new" className="add-buttons"> Ny produkt</Link>
                    </div>

                    
                    

                 
                    <table>
                        <thead>
                            <tr>
                                <th>Namn</th>
                                <th>Sku</th>
                                <th>Pris</th>
                                <th>Åtgärd</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.title}</td>
                                    <td>{product.sku}</td>
                                    <td>{product.price} SEK</td>
                                    <td>
                                        <button onClick={() => handleDelete(product.id)} className="delete-button">
                                            Radera
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}

export default AdminProducts;
