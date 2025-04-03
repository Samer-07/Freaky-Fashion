import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./SearchResults.css";

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q") || "";
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8000/api/search?q=${query}`)
            .then((resp) => resp.json())
            .then((data) => {
                setResults(data);
            })
            .catch((error) => console.error("Fetch error:", error));
    }, [query]);

    return (
        <div className="search-results-container">
            <h2> Hittade ({results.length}) Produkter </h2>
            {results.length > 0 ? (
                <ul className="product-grid">
                    {results.map((product) => (
                        <li key={product.id} className="product-card">
                            <div className="product-image-wrapper">
                                <Link to={`/product/${product.id}`}>
                                    <img src={product.featuredImage} alt={product.title} className="product-img" />
                                </Link>
                                <span className="wishlist-icon">❤️</span>
                            </div>
                            <div className="product-details">
                                    <p className="products-name">{product.title} </p>
                                    <p className="products-price">{product.price} SEK</p>
                                </div>
                                <p className="products-brand">{product.introduction}</p>
                        
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Opss inga produkter</p>
            )}
        </div>
    );
};

export default SearchResults;
