import React, { useEffect, useState } from "react";
import { get_products } from "@/api/products";

const Admin_Product = () => {
  const [products, setProducts] = useState([]);

  const fetch_products = async () => {
    const products_list = await get_products();
    setProducts(products_list)  
    console.log(products)
  };
  useEffect(() => {
    fetch_products();
  }, []);
  return (
    <div>
      <table className="table table-hover border border mt-5 w-50 mx-auto">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Image</th>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product._id}</td>
              <td>{product.name}</td>
              <td>{product.image_url}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody> 
       </table>
    </div>
  );
};

export default Admin_Product;
