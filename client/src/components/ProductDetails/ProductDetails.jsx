import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ProductDetails.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [similarProducts, setSimilarProducts] = useState([]);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
    
    useEffect(() => {
        fetch(`http://localhost:8000/api/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data))
            .catch((err) => console.error("Fetch error:", err));

        fetch(`http://localhost:8000/api/products/${id}/similar`)
            .then((res) => res.json())
            .then((data) => setSimilarProducts(data.slice(0, 5))) 
            .catch((err) => console.error("Fetch error:", err));

        const handleResize = () => {
            setIsDesktop(window.innerWidth > 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [id]);

    if (!product) return <p>Ladda</p>;

    return (
        <div className={`product-details ${isDesktop ? "desktop-view" : "mobile-view"}`}>
            <div className="product-info">
                <div className="product-image-container">
                    <Link to={`/product/${product.id}`}>
                        <img src={product.featuredImage} alt={product.title} className="product-image" />
                        <FontAwesomeIcon icon={faHeart} className="likes-button" />

                    </Link>
                    </div>

                <div className="product-text">
                    <h2 className="product-title">{product.title}</h2>
                    <p className="brand">{product.introduction}</p>
                    <p className="description">{product.full_description}</p>
                    <p className="price">{product.price} SEK</p>
                    <button className="add-to-cart">Lägg i varukorg</button>
                </div>
            </div>

            {isDesktop && similarProducts.length > 0 && (
                <div className="similar-products-container">
                    <h3 className="similar-title">Liknande Produkter</h3>
                    <Swiper 
                        modules={[Navigation]} 
                        navigation 
                        spaceBetween={10} 
                        slidesPerView={3} 
                        className="similar-products-swiper"
                    >
                        {similarProducts.map((product) => (
                            <SwiperSlide key={product.id} className="similar-product">
                                   <Link to={`/product/${product.id}`}>
                                <img src={product.featuredImage} alt={product.title} /></Link>
                                <div className="similar-info">
                                    <p className="similar-name">{product.title}</p>
                                    <p className="similar-price">{product.price} SEK</p>
                                </div>
                                <p className="brand">{product.introduction}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;
