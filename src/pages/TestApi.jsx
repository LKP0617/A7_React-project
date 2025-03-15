import { useState, useEffect } from "react";

// ✅ 正確設定 API URL
const API_BASE = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;
const PRODUCTS_API = `${API_BASE}/v2/api/${API_PATH}/products/all`;

// console.log("完整 API URL:", PRODUCTS_API); // ✅ 這裡應該要顯示正確的 API URL


// ✅ 定義 fetchProducts，負責從 API 取得資料
const fetchProducts = async () => {
  try {
    const response = await fetch(PRODUCTS_API); // 向 API 發送請求
    if (!response.ok) throw new Error("API 請求失敗");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API 請求錯誤:", error);
    return { products: [] }; // 確保回傳一個空陣列，避免錯誤
  }
};

function TestAPI() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchProducts(); // ✅ 這次 fetchProducts 已經正確定義
        setProducts(data.products || []);
      } catch (error) {
        console.error("API 測試錯誤:", error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  if (loading) {
    return <p>載入中...</p>;
  }

  return (
    <div>
      <h1>API 測試頁面</h1>
      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.id}>
              <strong>{product.title}</strong> - NT${product.price}
            </li>
          ))
        ) : (
          <p>沒有找到商品</p>
        )}
      </ul>
    </div>
  );
}

export default TestAPI;
