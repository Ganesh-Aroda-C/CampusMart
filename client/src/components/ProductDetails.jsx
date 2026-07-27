import { useParams } from "react-router-dom";
import products from "../data/products";
function ProductDetails() {
    const { id } = useParams();
    const productId = Number(id);
    const product = products.find(product => product.id === productId);
    if (!product) {
    return <h1>Product Not Found</h1>;
}
    return (
        <>
            <h1>{product.name}</h1>
            <p>{product.icon}</p>
            <p>₹{product.price}</p>
        </>
    );
}

export default ProductDetails;