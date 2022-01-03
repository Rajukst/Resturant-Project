import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";
import "./Dashboard.css";
import AddProduct from "./Admin/Add-Product/AddProduct";
import MyOrder from "./Users/My-Order/MyOrder";
import PublicReview from "./Users/Public-Review/PublicReview";
import ManageProduct from "./Admin/Manage-Product/ManageProduct";
import AllOrders from "./Admin/All-Orders/AllOrders";

import UpdateProduct from "./Admin/Manage-Product/UpdateProduct";
const Dashboard = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className="my-dashboard">
      <Container fluid className="mt-5">
        <Row>
          <Col className="shed-borders" xs={12} md={3} lg={3}>
            <Link to={`${url}/my-order`}>
              <p className="ms-5 mt-5">My Order</p>
            </Link>
            <Link to={`${url}/make-admin`}>
              <p className="ms-5">Make Admin</p>
            </Link>
            <Link to={`${url}/manage-product`}>
              <p className="ms-5">Manage Product</p>
            </Link>
            <Link to={`${url}/all-orders`}>
              <p className="ms-5">All Orders</p>
            </Link>
            <Link to={`${url}/add-product`}>
              <p className="ms-5">Add Product</p>
            </Link>
          </Col>
          <Col xs={12} md={9} lg={9}>
            <Switch>
              <Route path={`${path}/add-product`}>
                <AddProduct></AddProduct>
              </Route>
              <Route path={`${path}/my-order`}>
                <MyOrder></MyOrder>
              </Route>
              <Route path={`${path}/make-admin`}>
                <PublicReview></PublicReview>
              </Route>
              <Route path={`${path}/manage-product`}>
                <ManageProduct></ManageProduct>
              </Route>
              <Route path={`${path}/manage-product/update/:id`}>
                <UpdateProduct></UpdateProduct>
              </Route>

              <Route path={`${path}/all-orders`}>
                <AllOrders></AllOrders>
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
