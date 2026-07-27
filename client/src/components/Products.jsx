import "./Products.css";
import ProductCard from "./ProductCard.jsx";
import products from "../data/products";
function Products() {

    return (
    <>
        <h2 className="products-title">Featured Products</h2>
        <section className="products-container">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </section>
    </>
    );
}

export default Products;