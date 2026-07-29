import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {

    return (
        <section className="hero">
            <h1>Buy & Sell within your Campus</h1>
            <p>
                Discover affordable books, laptops, phones, accessories and more from fellow students. Sell what you no longer need and help someone on campus save money.
            </p>
            <div className="hero-buttons">
                
                <button className="primary-btn">Browse Products</button>
                <Link to="/sell" className="secondary-btn">Sell an Item</Link>
            
            </div>
            <div className="hero-stats">

                    <div className="stat-card">
                        <h2>500+</h2>
                        <p>Listings</p>
                    </div>

                    <div className="stat-card">
                        <h2>1000+</h2>
                        <p>Students</p>
                    </div>

                    <div className="stat-card">
                        <h2>20+</h2>
                        <p>Categories</p>
                    </div>

                </div>
        </section>

    );


}
export default Hero;