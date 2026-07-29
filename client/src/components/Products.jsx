import "./Products.css";
import ProductCard from "./ProductCard.jsx";
import products from "../data/products";
function Products() {

    return (
    <section className="products-section">

    <h2 className="products-title">
        Latest Products
    </h2>

    <div className="products-container">

        {products.map(product => (
            <ProductCard
                key={product.id}
                product={product}
            />
        ))}

    </div>

</section>
    );
}

export default Products;