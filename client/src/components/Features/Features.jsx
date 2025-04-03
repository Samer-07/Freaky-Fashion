import { Truck, RefreshCw, CreditCard, Star } from "lucide-react";
import './Features.css';

const Features = () => {
    return (
        <div className="features-container">
            <div className="feature-item">
                <Truck size={24} />
                <span>Gratis frakt och returer</span>
            </div>
            <div className="feature-item">
                <RefreshCw size={24} />
                <span>Expressfrakt</span>
            </div>
            <div className="feature-item">
                <CreditCard size={24} />
                <span>Säkra betalningar</span>
            </div>
            <div className="feature-item">
                <Star size={24} />
                <span>Nyheter varje dag</span>
            </div>
        </div>
    );
};

export default Features;
