import React from "react";
import Rating from "./Rating.jsx";

const getProducts = () => [
  {
    imageUrl: "http://loremflickr.com/150/150?random=1",
    productName: "Product 1",
    releasedDate: "May 31, 2016",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris.",
    rating: 4,
    numOfReviews: 2,
  },
  {
    imageUrl: "http://loremflickr.com/150/150?random=2",
    productName: "Product 2",
    releasedDate: "October 31, 2016",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligura ligula purus sit amet mauris.",
    rating: 2,
    numOfReviews: 12,
  },
  {
    imageUrl: "http://loremflickr.com/150/150?random=3",
    productName: "Product 3",
    releasedDate: "July 30, 2016",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligura ligula purus sit amet mauris.",
    rating: 5,
    numOfReviews: 2,
  },
];

function Product({ data }) {
  return (
    <div className="mb-4 d-flex">
      <img
        width={64}
        height={64}
        className="me-3"
        src={data.imageUrl}
        alt={data.productName}
      />
      <div>
        <h5>{data.productName}</h5>
        <span className="text-muted d-block mb-2">{data.releasedDate}</span>
        <Rating rating={data.rating} numOfReviews={data.numOfReviews} />
        <p className="mt-2">{data.description}</p>
      </div>
    </div>
  );
}

function Products() {
  console.log("Products rendered");
  const products = getProducts();

  return (
    <div>
      {products.map((product) => (
        <Product key={product.productName} data={product} />
      ))}
    </div>
  );
}

export default Products;
