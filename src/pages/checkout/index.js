import { Cart_Context } from "@/context/cart_context";
import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const Checkout = () => {
  const [cart, setCart] = useContext(Cart_Context);
  const [user, setUser] = useState(null);
  const [address, setAddress] = useState(null);
  const router = useRouter();

  const total_to_pay = cart.reduce((acc, product) => {
    return acc + product.quantity * product.price;
  }, 0);

  const handle_checkout = async (e) => {
    e.preventDefault();
    try {
      const order = await cart.map((order) => ({
        ...order,
        user,
        address,
      }));

      await axios
        .post("http://localhost:5000/api/create-order", order)
        .then(() => {
          setCart([])
          router.push("/")
        })
        .catch((err) => console.log(err.message));
    } catch (err) {
      return err.message;
    }
  };

  return (
    <div className="container">
      <div className="text-center mt-5 text-uppercase text-secondary">
        <h1>Checkout</h1>
      </div>
      <table className="table table-hover border border mt-5">
        <thead>
          <tr>
            <th scope="col">Quantity</th>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>{product.quantity}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="text-uppercase p-2 text-danger  rounded ml-5">
        Total: {total_to_pay}
      </h2>
      <div className="text-center text-uppercase text-secondary p-2">
        <h3>Confirm your Order</h3>
      </div>
      <form onSubmit={handle_checkout}>
        <div className="form-group">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                <i className="bi bi-person-fill">Name:</i>
              </span>
            </div>
            <input
              required 
              type="text"
              className="form-control"
              id="nameInput"
              placeholder="John Jackson"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                <i className="bi bi-house-fill">Address</i>
              </span>
            </div>
            <input
              required
              type="text"
              className="form-control"
              id="addressInput"
              placeholder="Steward Street 8888"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default Checkout;
