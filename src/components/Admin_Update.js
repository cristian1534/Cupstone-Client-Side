import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { update_product } from "@/api/products";

const Admin_Update = () => {
  const [product, setProduct] = useState({
    name: "",
    image_url: "",
    description: "",
    price: "",
  });

  const [id, setId] = useState("");
  const router = useRouter();

  const handle_change = (e) => {
    const { value, name } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
    
  };

  const handle_submit = async (e) => {
    e.preventDefault();
    try {
      await update_product(id, product);
      router.push("/");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <h1 className="text-secondary">UPDATE PRODUCT</h1>
      <form onSubmit={handle_submit}>
        <label htmlFor="id">Product ID</label>
        <input
          id="id"
          name="id"
          value={id}
          type="text"
          placeholder="Product ID to update"
          onChange={(e) => setId(e.target.value)}
          className="form-control w-50 mx-auto"
        />
        <div className="form-group mb-3">
          <label htmlFor="name">Product:</label>
          <input
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
            name="price"
            value={product.price}
            onChange={handle_change}
            type="Number"
            className="form-control w-50 mx-auto"
            id="price"
            placeholder="Enter the price of the product"
          />
        </div>
        <button type="submit" className="btn btn-success">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default Admin_Update;
