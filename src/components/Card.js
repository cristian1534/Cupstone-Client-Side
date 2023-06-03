import { useContext } from "react";
import Custom_Modal from "./Custom_Modal";
import { Cart_Context } from "@/context/cart_context";

export default function Card({ id, name, image_url, description, price }) {
  const [cart, setCart] = useContext(Cart_Context);

  const add_to_cart = () => {
    setCart((current_products) => {
      const exists = current_products.find((product) => product.id === id);
      if (exists) {
        return current_products.map((product) => {
          if (product.id === id) {
            return { ...product, quantity: product.quantity + 1 };
          } else {
            return product;
          }
        });
      } else {
        return [...current_products, { id, name, quantity: 1, price }];
      }
    });
  };

  const remove_product = (id) => {
    setCart((current_products) => {
      if (
        current_products.find((product) => product.id === id)?.quantity === 1
      ) {
        return current_products.filter((product) => product.id !== id);
      } else {
        return current_products.map((product) => {
          if (product.id === id) {
            return { ...product, quantity: product.quantity - 1 };
          } else {
            return product;
          }
        });
      }
    });
  };

  const get_quantity = (id) => {
    return cart.find((product) => product.id === id)?.quantity || 0;
  };
  const data = get_quantity(id);

  return (
    <div className="card d-flex align-items-center justify-content-center text-center">
      <img src={image_url} className="card-img-top w-50 p-3 " alt="Product-1" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <h4>u$s {price}</h4>
        {data !== 0 && (
          <div>
            <p className="bg-info w-100 text-light rounded p-1 m-2">
              PLACED IN CART: {data}{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="red"
                className="bi bi-trash3-fill m-2"
                viewBox="0 0 16 16"
                onClick={() => remove_product(id)}
              >
                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
              </svg>
            </p>
          </div>
        )}
      </div>
      <div className="mb-3">
        <Custom_Modal
          add_to_cart={add_to_cart}
          remove_product={remove_product}
          id={id}
          name_one={"Add to Cart"}
          title={name}
          description={`Purchase to your account: U$S ${price}`}
          name_two={"Confirm"}
        />
      </div>
    </div>
  );
}
