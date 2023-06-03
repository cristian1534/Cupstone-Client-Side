import axios from "axios";

export const get_products = async () => {
  try {
    const response = await fetch(`${process.env.SERVER_URL}/get-all`);
    const jsonData = await response.json();
    return jsonData;
  } catch (err) {
    console.log(err.message);
  }
};

export const create_product = async (product) => {
  try {
    await axios.post(`${process.env.SERVER_URL}/create`, product);
  } catch (err) {
    return err.message;
  }
};

export const update_product = async (id, product) => {
  try {
    const data = await axios.patch(
      `${process.env.SERVER_URL}/update/${id}`,
      product
    );
    return data;
  } catch (err) {
    return err.message;
  }
};

export const get_product = async (id) => {
  try {
    const data = await axios.get(`${process.env.SERVER_URL}/get-one/${id}`);
    return data.data;
  } catch (err) {
    return err.message;
  }
};

export const delete_product = async (id) => {
  try {
    const data = await axios.delete(`${process.env.SERVER_URL}/delete/${id}`);
    return data.data;
  } catch (err) {
    return err.message;
  }
};
