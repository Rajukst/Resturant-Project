import React, { useRef } from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
  const productName = useRef();
  const productPrice = useRef();
  const productDescription = useRef();
  const productImage = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const name = productName.current.value;
    const price = productPrice.current.value;
    const description = productDescription.current.value;
    const image = productImage.current.value;
    const totalData = { name, price, description, image };
    console.log(totalData);
    fetch("http://localhost:5000/add-product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(totalData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Data Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="section">
      <div className="my-continer m-2">
        <h1>Add Your Product</h1>

        <div className="user-container mt-5">
          <form onSubmit={handleOnSubmit}>
            <input
              type="text"
              id="fname"
              name="productName"
              placeholder="Product Name"
              ref={productName}
              required
            />
            <br />
            <input
              type="text"
              id="fname"
              name="price"
              placeholder="Product Price"
              ref={productPrice}
              required
            />
            <br />
            <input
              type="text"
              id="fname"
              name="description"
              placeholder="Product Description"
              ref={productDescription}
              required
            />
            <br />
            <input
              type="text"
              id="fname"
              name="ProductImage"
              placeholder="Product Image URL"
              ref={productImage}
              required
            />
            <br />
            <button type="submit">Add Product</button>
            <button type="reset" value="Reset">
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
