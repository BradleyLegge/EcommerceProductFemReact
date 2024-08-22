import React from "react";
import Navbar from "./components/Navbar";
import ShoeInfo from "./components/ShoeInfo";
import ShoeDisplay from "./components/ShoeDisplay";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div className="main-content">
      <Navbar />
      <Cart />
      <div className="shoe-sections">
        <ShoeDisplay />
        <ShoeInfo />
      </div>
    </div>
  );
};

export default App;
