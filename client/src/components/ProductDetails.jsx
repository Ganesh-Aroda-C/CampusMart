import { useParams } from "react-router-dom";
import products from "../data/products";
import '../App.css';
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";


function ProductDetails() {
    const { id } = useParams();
    const productId = Number(id);

    const product = products.find(product => product.id === productId);
    const relatedProducts = products.filter(
    product => product.id !== productId
);
    if (!product) {
    return <h1><strong>Product Not Found</strong></h1>;
}
    return (
        <>
         <Navbar />
    <div className="product-details-container">

        <div className="product-left">

            <div className="product-image">
                <img
                    src={product.image}
                    alt={product.name}
                />
            </div>

        </div>

        <div className="product-right">

            <h1><strong>{product.name}</strong></h1>

            <h2><strong>₹{product.price}</strong></h2>

            <div className="product-meta">

                <span className="category">
                    {product.category}
                </span>

                <span className="condition">
                    {product.condition}
                </span>

            </div>

            <div className="seller-card">

                <h4>Seller</h4>

                <p>{product.seller}</p>

            </div>
            <h3>Description</h3>

            <p>{product.description}</p>

            <button>
                Request to Buy
            </button>

        </div>

    </div>
       
    <div className="related-products">

        <h2 className="products-title">
            Related Products
        </h2>

        <div className="products-container">

            {relatedProducts.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}

        </div>

    </div>
            
        </>
    );
}

export default ProductDetails;