import laptop from "../assets/images/products/laptop.jpeg";
import iphone from "../assets/images/products/iphone-17.jpeg";
import book from "../assets/images/products/maths.jpeg";
import headphones from "../assets/images/products/headphones.jpeg";
import chair from "../assets/images/products/chair.jpg";
import watch from "../assets/images/products/watch.jpeg";

const products = [
    {
        id: 1,
        image: laptop,
        name: "Lenovo ThinkPad E14",
        price: 35000,
        category: "Electronics",
        condition: "Used - Like New",
        seller: "Rahul",
        description: "Ryzen 5, 16GB RAM, 512GB SSD. Purchased 8 months ago. Includes original charger."
    },
    {
        id: 2,
        image: iphone,
        name: "iPhone 12",
        price: 28000,
        category: "Mobiles",
        condition: "Used - Good",
        seller: "Priya",
        description: "128GB Blue variant. Battery health 87%. No display issues. Charger included."
    },
    {
        id: 3,
        image: book,
        name: "Engineering Mathematics Book",
        price: 450,
        category: "Books",
        condition: "Used - Good",
        seller: "Arjun",
        description: "First-year engineering mathematics textbook with minimal notes and highlighted formulas."
    },
    {
        id: 4,
        image: headphones,
        name: "Boat Rockerz 550",
        price: 1800,
        category: "Accessories",
        condition: "Used - Like New",
        seller: "Sneha",
        description: "Wireless headphones with up to 20 hours battery backup. Comes with charging cable."
    },
    {
        id: 5,
        image: chair,
        name: "Study Chair",
        price: 2200,
        category: "Furniture",
        condition: "Used - Fair",
        seller: "Karthik",
        description: "Comfortable study chair with adjustable height. Minor scratches but fully functional."
    },
    {
        id: 6,
        image: watch,
        name: "Noise Smart Watch",
        price: 2500,
        category: "Wearables",
        condition: "Used - Good",
        seller: "Aisha",
        description: "Tracks heart rate, sleep and workouts. Includes original box and charger."
    }
];

export default products;