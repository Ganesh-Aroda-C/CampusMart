import { useParams } from "react-router-dom";
import products from "../data/products";
import "./ProductDetails.css"
function ProductDetails() {
    const { id } = useParams();
    const productId = Number(id);

    const product = products.find(product => product.id === productId);

    if (!product) {
    return <h1>Product Not Found</h1>;
}
    return (
        <>
        
    <div className="product-details-container">

        <div className="product-left">

            <div className="product-icon">
                {product.icon}
            </div>

        </div>

        <div className="product-right">

            <h1>{product.name}</h1>

            <h2>₹{product.price}</h2>

            <p>
                <strong>Category:</strong> {product.category}
            </p>

            <p>
                <strong>Condition:</strong> {product.condition}
            </p>

            <p>
                <strong>Seller:</strong> {product.seller}
            </p>

            <h3>Description</h3>

            <p>{product.description}</p>

            <button>
                Request to Buy
            </button>

        </div>

    </div>

            
        </>
    );
}

export default ProductDetails;