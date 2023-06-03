import React, { useState } from "react";
import { delete_product } from "@/api/products";
import { useRouter } from "next/router";

const Admin_Delete = () => {
  const [id, setId] = useState("");
  const router = useRouter();

  const handle_submit = async (e) => {
    e.preventDefault();
    try {
      await delete_product(id);
      router.push("/");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <h1 className="text-secondary">DELETE PRODUCT</h1>
      <div className="form-check form-check-inline"></div>
      <form onSubmit={handle_submit}>
        <label htmlFor="id">Product ID</label>
        <input
          required
          id="id"
          name="id"
          type="text"
          placeholder="Product ID to remove"
          className="form-control w-50 mx-auto mb-3"
          onChange={(e) => setId(e.target.value)}
        />
        <button type="submit" className="btn btn-danger">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default Admin_Delete;
