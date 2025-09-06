import React, { useState } from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Nav/Header";
import Navbar from "./Nav/Navbar";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";

export default function App() {
  var items = [
    { fullName: "Home page", path: "/", navIcon: "home" },
    { fullName: "Pricelist", path: "/Shop", navIcon: "shop" },
    { fullName: "Shopping cart", path: "/Cart", navIcon: "cart" },
  ];
  var [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100 bg-body-tertiary">
        <Header frameName={items[selectedIndex].fullName} />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </main>
        <Navbar
          items={items}
          selectedIndex={selectedIndex}
          onSelect={setSelectedIndex}
        />
      </div>
    </BrowserRouter>
  );
}
