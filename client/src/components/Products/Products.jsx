import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = ({ images }) => {
    return (
        <div className="products-gallery">
            {images.map((product) => (
                <div key={product.id} className="products-item">
                    <Link to={`/product/${product.id}`} className="images-container">
                        <img src={product.featuredImage} alt={product.title} />
                        <FontAwesomeIcon icon={faHeart} className="likes-button" />
                    </Link>
                    <div className="product-">
                        <div className="products-">
                            <span>{product.title}</span>
                            <span>{product.price} SEK</span>
                        </div>
                        <p className="product-brand">{product.introduction}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;
