import React, { useState } from "react";
import { Button } from "react-bootstrap";
const PublicReview = () => {
  const [email, setEmail] = useState("");
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://shrouded-mountain-85773.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    e.preventDefault();
    console.log(e);
  };
  return (
    <div>
      <div className="my-section">
        <div className="login-continer m-2">
          <h1>Make An Admin</h1>
          <div className="user-container mt-5">
            <form onSubmit={handleAdminSubmit}>
              <input
                type="email"
                id="fname"
                name="email"
                placeholder="User Email"
                onBlur={handleOnBlur}
              />
              <br />

              <br />
              <div className="all-buttons">
                <Button type="submit" className="mt-3">
                  Make Admin
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicReview;
