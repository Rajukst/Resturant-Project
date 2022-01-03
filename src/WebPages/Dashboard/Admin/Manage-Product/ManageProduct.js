import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";

import DynamicManage from "./DynamicManage";

const ManageProduct = () => {
  const [update, setUpdate] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/home-product")
      .then((res) => res.json())
      .then((data) => setUpdate(data));
  }, []);
  return (
    <div>
      <h1>This is Manage Products</h1>

      {update.map((getProducts) => (
        <DynamicManage
          key={getProducts._id}
          manageProduct={getProducts}
        ></DynamicManage>
      ))}
    </div>
  );
};

export default ManageProduct;
