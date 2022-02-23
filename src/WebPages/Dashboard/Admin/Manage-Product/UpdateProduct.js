import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import "./UpdateProduct.css";
const UpdateProduct = () => {
  const { id } = useParams();
  return (
    <div className="my-updateDiv">
      <h1 className="mt-5 text dark">This is update Product</h1>
      <p>{id}</p>
    </div>
  );
};

export default UpdateProduct;
