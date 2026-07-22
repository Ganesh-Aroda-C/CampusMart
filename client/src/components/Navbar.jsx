import "./Navbar.css"
function Navbar(){
    return (
        <nav className="navbar">
            <div className="logo">Campusmart</div>
              
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