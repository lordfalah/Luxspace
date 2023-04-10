import axios from "axios";
import { defer } from "react-router-dom";

const api = axios.create({
  baseURL: "https://c62364c1-2a10-4d20-8a86-3812107b3e63.mock.pstmn.io/api/",
});

const getProducts = async (url = "") => {
  try {
    const { data } = await api.get(url);
    return data;
  } catch (error) {
    throw new Response(error.statusText || error.message);
  }
};

const getDetailProduct = async (id) => {
  const { data } = await api.get(`products/${id}`);
  return data;
};

export { getProducts, getDetailProduct };
export default api;
