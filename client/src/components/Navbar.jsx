import "./Navbar.css"
function Navbar(){
    return (
        <nav className="navbar">
            <h1 className="logo">
    Campus<span>Mart</span>
</h1>
              
            <ul className="nav-links">
                <li>HOME</li>
                <li>PRODUCTS</li>
                <li>SELL</li>
                <li>LOGIN</li>
            </ul>
        </nav>
    )
}
export default Navbar;