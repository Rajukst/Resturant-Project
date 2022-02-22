import React, { useRef } from "react";
import Swal from "sweetalert2";

const AddProduct = () => {
  const addName = useRef();
  const addPrice = useRef();
  const addImage = useRef();
  const addText = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const name = addName.current.value;
    const price = addPrice.current.value;
    const image = addImage.current.value;
    const description = addText.current.value;
    const totalAdd = { name, price, image, description };
    console.log(totalAdd);
    fetch("http://localhost:5000/add-product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(totalAdd),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product Added Successfully !!",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        }
      });
  };
  return (
    <div>
      <h1>This is Add Product</h1>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          name=""
          id=""
          ref={addName}
          placeholder="Product Name"
          required
        />
        <br />
        <br />
        <input
          type="text"
          name=""
          id=""
          ref={addPrice}
          placeholder="Product Price"
          required
        />
        <br />
        <br />
        <input
          type="text"
          name=""
          id=""
          ref={addImage}
          placeholder="Product Image or Url"
          required
        />
        <br />
        <br />
        <textarea id="" ref={addText} name="" rows="" cols=""></textarea>
        <br />
        <br />
        <input type="submit" value="Add Product" />
      </form>
    </div>
  );
};

export default AddProduct;
