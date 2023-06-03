import axios from "axios";

export const get_products = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/get-all");
    const jsonData = await response.json();
    return jsonData;
  } catch (err) {
    console.log(err.message);
  }
};

export const create_product = async (product) => {
  try {
    await axios.post("http://localhost:5000/api/create", product);
  } catch (err) {
    return err.message;
  }
};

export const update_product = async (id, product) => {
  try {
    const data = await axios.patch(
      `http://localhost:5000/api/update/${id}`,
      product
    );
    return data;
  } catch (err) {
    return err.message;
  }
};

export const get_product = async (id) => {
  try {
    const data = await axios.get(`http://localhost:5000/api/get-one/${id}`);
    return data.data;
  } catch (err) {
    return err.message;
  }
};

export const delete_product = async (id) => {
  try {
    const data = await axios.delete(`http://localhost:5000/api/delete/${id}`);
    return data.data;
  } catch (err) {
    return err.message;
  }
};
