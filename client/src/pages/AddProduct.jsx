import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Addproduct.css";

function AddProduct() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [full_description, setFullDescription] = useState("");
    const [introduction, setIntroduction] = useState("");
    const [featuredImage, setFeaturedImage] = useState("");
    const [sku, setSku] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = { title, price, full_description, introduction, featuredImage, sku };

        fetch("http://localhost:8000/api/admin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProduct),
        }).then(() => navigate("/admin/products"));
    };

    return (
        <div className="admin-container">
            <header className="admin-header">Administration</header>
            <main className="admin-main">
                <aside className="admin-sidebar">
                    <h2>Produkter</h2>
                </aside>
                <section className="admin-content">
                    <h2>Ny produkt</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Namn</label>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                        </div>

                        <div className="form-group">
                            <label>Beskrivning</label>
                            <textarea value={full_description} onChange={(e) => setFullDescription(e.target.value)} required></textarea>
                        </div>

                        <div className="form-group">
                            <label>Bild</label>
                            <input type="text" placeholder="URL till bild" value={featuredImage} onChange={(e) => setFeaturedImage(e.target.value)} required />
                        </div>

                        <div className="form-group">
                            <label>Märke</label>
                            <input type="text" value={introduction} onChange={(e) => setIntroduction(e.target.value)} required />
                        </div>

                        <div className="form-group">
                            <label>SKU</label>
                            <input type="text" value={sku} onChange={(e) => setSku(e.target.value)} required />
                        </div>

                        <div className="form-group">
                            <label>Pris</label>
                            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
                        </div>

                        <button type="submit" className="submit-btn">Lägg till</button>
                    </form>
                </section>
            </main>
        </div>
    );
}

export default AddProduct;
