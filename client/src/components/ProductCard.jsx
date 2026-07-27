import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard(props) {
    return (
        <Link
    to={`/product/${props.product.id}`}
    className="product-card"
>
            <span>{props.product.icon}</span>
            <h3>{props.product.name}</h3>
            <p>₹{props.product.price}</p>
            <p className="view-details">
                View Details →
            </p>
       </Link>
    );
}

export default ProductCard;