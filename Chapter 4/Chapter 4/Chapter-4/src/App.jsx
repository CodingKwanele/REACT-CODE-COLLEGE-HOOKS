import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./Products.jsx";

function App() {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Product Catalog</h1>
      <Products />
    </div>
  );
}

export default App;
