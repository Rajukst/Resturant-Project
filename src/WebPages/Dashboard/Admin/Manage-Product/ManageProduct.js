import React, { useEffect, useState } from "react";
import { Button, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ManageProduct.css";

const ManageProduct = () => {
  const [update, setUpdate] = useState([]);
  useEffect(() => {
    fetch("https://shrouded-mountain-85773.herokuapp.com/home-product")
      .then((res) => res.json())
      .then((data) => setUpdate(data));
  }, []);

  // delete product
  const handleDeleteUser = (id) => {
    const proceed = window.confirm("are you sure to delete your product?");
    if (proceed) {
      const url = `https://shrouded-mountain-85773.herokuapp.com/home-product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted Successfully");
            const remainingProducts = update.filter(
              (newUpdate) => newUpdate._id !== id
            );
            setUpdate(remainingProducts);
          }
        });
    }
  };
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
                <Link to={`/manage-product/update/${myRow._id}`}>
                  <Button className="my-button" variant="warning">
                    Update
                  </Button>
                </Link>
              </td>
              <td>
                <Button
                  onClick={() => handleDeleteUser(myRow._id)}
                  className="my-button"
                  variant="danger"
                >
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
