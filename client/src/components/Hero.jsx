import "./Hero.css"

function Hero() {

    return (
        <section className="hero">
            <h1>Buy & Sell withing your Campus</h1>
            <p>
                Find books, laptops, cycles and more from students around you.
            </p>
            <div className="hero-buttons">
                <button className="primary-btn">Browse Products</button>

                <button className="secondar-btn">Sell an Itme</button>
            </div>
        </section>

    );


}
export default Hero;