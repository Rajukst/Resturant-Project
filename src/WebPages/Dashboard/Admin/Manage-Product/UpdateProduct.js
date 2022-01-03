import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const UpdateProduct = () => {
  const { id } = useParams();
  return (
    <div>
      <h1 className="mt-5 text dark">This is update Product {id}</h1>
    </div>
  );
};

export default UpdateProduct;
