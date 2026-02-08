import React from "react";

function Products() {

  const products = ["Learning React", "Pro React", "Beginner React "];
  const listProducts = products.map((products) => 

      <li key = {products.toString()} >{products}</li>
  );
  return (
    <div>
      <ul>{listProducts}</ul>
    </div>
  );
}

export default Products;