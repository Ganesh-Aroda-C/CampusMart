import "../App.css";

function SellItem() {

    return (

        <section className="sell-page">

            <h1 className="sell-title">
                Sell Your Item
            </h1>

            <p className="sell-description">
                List your item so other students can discover and buy it.
            </p>

            <form className="sell-form">

                <div className="form-group">

                    <label htmlFor="productName">
                        Product Name
                    </label>

                    <input
                        type="text"
                        id="productName"
                        placeholder="Enter product name"
                    />

                </div>

                <div className="form-group">

                    <label htmlFor="category">
                        Category
                    </label>

                    <select id="category">

                        <option value="">
                            Select a category
                        </option>

                        <option value="Clothes">
                            Clothes
                        </option>

                        <option value="Books">
                            Books
                        </option>

                        <option value="Electronics">
                            Electronics
                        </option>

                        <option value="Furniture">
                            Furniture
                        </option>

                        <option value="Accessories">
                            Accessories
                        </option>

                        <option value="Games">
                            Games
                        </option>

                        <option value="Others">
                            Others..
                        </option>


                    </select>

                </div>

                <div className="form-group">

                    <label htmlFor="price">
                        Price
                    </label>

                    <input
                        type="number"
                        id="price"
                        placeholder="Enter price"
                    />

                </div>

                <div className="form-group">

                    <label htmlFor="condition">
                        Condition
                    </label>

                    <select id="condition">

                        <option value="">
                            Select condition
                        </option>

                        <option value="New">
                            New
                        </option>

                        <option value="Like New">
                            Like New
                        </option>

                        <option value="Good">
                            Good
                        </option>

                        <option value="Fair">
                            Fair
                        </option>

                        <option value="Poor">
                            Poor
                        </option>

                    </select>

                </div>

                <div className="form-group">

                    <label htmlFor="description">
                        Description
                    </label>

                    <textarea
                        id="description"
                        placeholder="Describe your item..."
                        rows="5"
                    >

                    </textarea>

                </div>

                <div className="form-group">

                    <label htmlFor="image">
                        Product Image
                    </label>

                    <input
                        type="file"
                        id="image"
                        accept="image/*"
                    />

                </div>
                
                <button
                    type="submit"
                    className="submit-btn"
                >
                    Post Listing
                </button>

            </form>

        </section>

    );

}

export default SellItem;