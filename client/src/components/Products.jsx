import "./Products.css";
import ProductCard from "./ProductCard.jsx";

function Products() {

    const products = [
        { id: 1, icon: "📚", name: "Books", price: 1000 },
        { id: 2, icon: "🎮", name: "Game", price: 2000 },
        { id: 3, icon: "💻", name: "Laptop", price: 15000 },
        { id: 4, icon: "🪑", name: "Furniture", price: 3000 }
    ];

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