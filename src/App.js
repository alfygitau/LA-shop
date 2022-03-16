import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products/Products";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
    </div>
  );
}

export default App;
