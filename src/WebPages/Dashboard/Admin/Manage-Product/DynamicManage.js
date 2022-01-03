import React from "react";
import { Button, Card, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const DynamicManage = ({ manageProduct }) => {
  const { _id, name, price, description } = manageProduct;
  console.log(manageProduct);
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{description.slice(0, 90)}</td>
            <Link to={`/manage-product/update/${_id}`}>
              <Button>Update</Button>
            </Link>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default DynamicManage;
