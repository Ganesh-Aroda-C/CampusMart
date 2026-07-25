import "./ProductCard.css";

function ProductCard(props) {
    return (
        <div 
            className="product-card"
            onClick={()=>alert("Open product Details")}
        >
            <span>{props.product.icon}</span>
            <h3>{props.product.name}</h3>
            <p>₹{props.product.price}</p>
            
        </div>
    );
}

export default ProductCard;