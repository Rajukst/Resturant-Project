import React, { useEffect, useState } from "react";
import { Button, Row, Table } from "react-bootstrap";
import "./ManageProduct.css";

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
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Short Description</th>
            <th>Actions</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {update.map((myRow) => (
            <tr>
              <td>{myRow._id}</td>
              <td>{myRow.name}</td>
              <td>{myRow.price}</td>
              <td>{myRow.description}</td>
              <td>
                <Button className="my-button" variant="warning">
                  Update
                </Button>
              </td>
              <td>
                <Button className="my-button" variant="danger">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageProduct;
