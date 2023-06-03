import React, { useState } from "react";
import { useRouter } from "next/router";
import { create_product } from "../api/products";

const Admin_Create = () => {
  const [product, setProduct] = useState({
    name: "",
    image_url: "",
    description: "",
    price: "",
  });

  const handle_change = (e) => {
    const { value, name } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const router = useRouter();

  const handle_submit = async (e) => {
    e.preventDefault();
    try {
      await create_product(product);
      router.push("/");
    } catch (err) {
      return err.message;
    }
  };

  return (
    <div>
      <h1 className="text-secondary">CREATE PRODUCT</h1>
      <form onSubmit={handle_submit}>
        <div className="form-group mb-3 mt-5">
          <label htmlFor="name">Product:</label>
          <input
            required
            name="name"
            value={product.name}
            onChange={handle_change}
            type="text"
            className="form-control w-50 mx-auto"
            id="name"
            placeholder="Enter name of product"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="url_image">URL Image:</label>
          <input
            required
            name="image_url"
            value={product.image_url}
            onChange={handle_change}
            type="text"
            className="form-control w-50 mx-auto"
            id="url_image"
            placeholder="Image URL of product"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="description">Description:</label>
          <textarea
            required
            name="description"
            value={product.description}
            onChange={handle_change}
            className="form-control w-50 mx-auto"
            id="description"
            rows="3"
            placeholder="Description of the product"
          ></textarea>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="price">Price:</label>
          <input
            required
            name="price"
            value={product.price}
            onChange={handle_change}
            type="Number"
            className="form-control w-50 mx-auto"
            id="price"
            placeholder="Enter the price of the product"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default Admin_Create;
