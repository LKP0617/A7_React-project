import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;
const PRODUCTS_ENDPOINT = import.meta.env.VITE_PRODUCTS_ENDPOINT;

// 取得商品列表
export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}${API_PATH}${PRODUCTS_ENDPOINT}`);
    return response.data; // 假設 API 回傳的是 { products: [...] }
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
