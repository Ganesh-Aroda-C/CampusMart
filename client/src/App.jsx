import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories'
import Products from "./components/Products.jsx";
import ProductDetails from "./components/ProductDetails.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Navbar />
          <Hero /> 
          <Categories />
          <Products />
        </>
        } 
      />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;