const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

const PRODUCTS_API = `${BASE_URL}/v2/api/${API_PATH}/products/all`;
console.log("完整 API URL:", PRODUCTS_API);

function TestAPI() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetchProducts();
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
              <strong>{product.name}</strong> - NT${product.price}
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

