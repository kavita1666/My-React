import { render } from "./react-dom.js";
import React from "./react.js";
import "./App.css";
import { productsData } from "./jsonData.js";

function Card({ title, image, brand, price }) {
  return (
    <div className="card">
      <img src={image} alt="iphone" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>
          <b>${price}</b>
        </p>
      </div>
    </div>
  );
}

function Products({ products }) {
  return (
    <div className="container">
      <div className="heading-div">
        <h1>Products</h1>
      </div>
        <div className="container-cards">
        {products.map((product) => {
        return <Card key={product.id} title={product.title} brand={product.brand} price={product.price} image={product.thumbnail} />;
      })}
        </div>
      
    </div>
  );
}

render(<Products products={productsData} />, document.getElementById("root"));
