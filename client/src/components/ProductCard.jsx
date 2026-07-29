import '../App.css';
import { Link } from "react-router-dom";

function ProductCard(props) {

    return (

        <Link
            to={`/product/${props.product.id}`}
            className="product-card"
        >

            <img
                src={props.product.image}
                alt={props.product.name}
                className="product-card-image"
            />

            <h3 className="product-name">
                {props.product.name}
            </h3>

            <p className="product-price">
                ₹{props.product.price}
            </p>

            <span className="product-condition">
                {props.product.condition}
            </span>

            <p className="view-details">
                View Details →
            </p>

        </Link>

    );
}

export default ProductCard;