import React from "react";
import Navbar from "./components/Navbar";
import ShoeInfo from "./components/ShoeInfo";
import ShoeDisplay from "./components/ShoeDisplay";

const App = () => {
  return (
    <div className="main-content">
      <Navbar />
      <div className="shoe-sections">
        <ShoeDisplay />
        <ShoeInfo />
      </div>
    </div>
  );
};

export default App;
