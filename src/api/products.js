import axios from "axios";

const SERVER_URL = "https://capstone-server-side-production.up.railway.app/api"

export const get_products = async () => {
  try {
    const response = await fetch(`${SERVER_URL}/get-all`);
    const jsonData = await response.json();
    return jsonData;
  } catch (err) {
    console.log(err.message);
  }
};

export const create_product = async (product) => {
  try {
    await axios.post(`${SERVER_URL}/create`, product);
  } catch (err) {
    return err.message;
  }
};

export const update_product = async (id, product) => {
  try {
    const data = await axios.patch(
      `${SERVER_URL}/update/${id}`,
      product
    );
    return data;
  } catch (err) {
    return err.message;
  }
};

export const get_product = async (id) => {
  try {
    const data = await axios.get(`${SERVER_URL}/get-one/${id}`);
    return data.data;
  } catch (err) {
    return err.message;
  }
};

export const delete_product = async (id) => {
  try {
    const data = await axios.delete(`${SERVER_URL}/delete/${id}`);
    return data.data;
  } catch (err) {
    return err.message;
  }
};
