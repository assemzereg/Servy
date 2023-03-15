//dependaances declaration
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
// css
import "./App.css";
// pages
import Home from "./RPages/Home";
import Login from "./pages/Login";
import Produit from "./pages/Produit";
import Cart from "./RPages/Cart";
import Signup from "./pages/Signup";
import WishList from "./RPages/WishList";
import Shop from "./pages/Shop";
import Account from "./pages/Account";
import CategoriesP from "./pages/CategoriesP";
import AllProducts from "./pages/AllProducts";
// cookies
// import Cookies from 'js-cookie'
// data bese
import Footer from "./components/Footer";
import MobWishList from "./pages/MobWishList";
import { servy } from "./db/colors";
import ForgetPass from "./pages/ForgetPass";

function App() {
  return (
    <div style={{ backgroundColor: servy.ThirdGreenShade[10] }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Produit />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/account" element={<Account />} />
          <Route path="/categories/:id" element={<CategoriesP />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/resetPass" element={<ForgetPass />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
