import React, { useState, useEffect } from "react";
import { Container, Row, Col, Accordion, Form, Button, Pagination } from "react-bootstrap";
// import "../assets/scss/pages/_products.scss";
import Header from "../layout/Header";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard"; // ✅ 確保導入 ProductCard
/*import productData from "../data/productData"; // 確保路徑正確*/
/*import productData from "../data/products.json";*/
import Footer from "../layout/Footer";

// ✅ 設定 API URL
const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;
const PRODUCTS_API = `${BASE_URL}/v2/api/${API_PATH}/products/all`;

// ✅ 定義 fetchProducts 函式
const fetchProducts = async () => {
    try {
      const response = await fetch(PRODUCTS_API);
      if (!response.ok) throw new Error("API 請求失敗");
      const data = await response.json();
      return data.products || []; // 確保回傳陣列
    } catch (error) {
      console.error("API 請求錯誤:", error);
      return []; // 避免錯誤時程式崩潰
    }
  };
  

function Products() {
    const [products, setProducts] = useState([]); // 存放 API 取得的商品
    const [loading, setLoading] = useState(true); // 控制載入狀態
    const [selectedCategory, setSelectedCategory] = useState("全部商品");
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]); // ✅ 修正：初始化為 []

    const itemsPerPage = 12;

    // ✅ 取得 API 資料
    useEffect(() => {
        async function getData() {
          setLoading(true);
          const allProducts = await fetchProducts();
          setProducts(allProducts);
          setLoading(false);
        }
        getData();
      }, []);
      

    // ✅ 取得所有分類，並排除 "加購"
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            setCategories([...new Set(products.map((product) => product.category))].filter(category => category !== "加購"));
            setBrands([...new Set(products.map((product) => product.brand))]);
        }
    }, [products]); // ✅ `products` 變更時，更新分類和品牌

    // 🛠️ 更新篩選條件
    useEffect(() => {
        let updatedProducts = products.filter(product => 
            (selectedCategory === "全部商品" || product.category === selectedCategory) &&
            (selectedBrands.length === 0 || selectedBrands.includes(product.brand)) &&
            (product.category !== "加購") // 🛠️ 避免「加購」商品顯示
        );
    
        // 🛠️ 價格篩選（如果有填寫）
        if (minPrice && maxPrice) {
            updatedProducts = updatedProducts.filter(product => {
                const price = Array.isArray(product.price) ? product.price[0] : product.price;
                return price >= Number(minPrice) && price <= Number(maxPrice);
            });
        }
    
        // 🛠️ 按 `created_at` 排序（新到舊）
        updatedProducts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    
        setFilteredProducts(updatedProducts);
        setCurrentPage(1); // 🛠️ 選擇分類後重置為第一頁
    }, [products, selectedCategory, selectedBrands, minPrice, maxPrice]); // ✅ 這裡要加入 `products`
    

    // 計算分頁
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const displayedProducts = filteredProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // 🛠️ 切換品牌篩選
    const handleBrandSelection = (brand) => {
        setSelectedBrands((prev) =>
            prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
        );
    };

    // ✅ 定義 handleFilterUpdate 來手動更新篩選條件
const handleFilterUpdate = () => {
    let updatedProducts = products.filter(product => 
        (selectedCategory === "全部商品" || product.category === selectedCategory) &&
        (selectedBrands.length === 0 || selectedBrands.includes(product.brand)) &&
        (product.category !== "加購") // 🛠️ 避免「加購」商品顯示
    );

    // 🛠️ 價格篩選（如果有填寫）
    if (minPrice && maxPrice) {
        updatedProducts = updatedProducts.filter(product => {
            const price = Array.isArray(product.price) ? product.price[0] : product.price;
            return price >= Number(minPrice) && price <= Number(maxPrice);
        });
    }

    // 🛠️ 按 `created_at` 排序（新到舊）
    updatedProducts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    setFilteredProducts(updatedProducts);
    setCurrentPage(1); // 🛠️ 選擇分類後重置為第一頁
};


    return (
        <>
            <Header />
            <Banner />
            <Container className="mt-80 mb-80">
                <Row>
                    {/* 左側側邊欄 */}
                    <Col md={3} className="d-none d-md-block custom-sidebar">
                        <h5 className="list-title title">商品類別</h5>
                        <ul className="list-group Body-1">
                            {/* ✅ 確保「全部商品」選項存在 */}
                            <li
                                className={`list-group-item ${selectedCategory === "全部商品" ? "active" : ""}`}
                                onClick={() => setSelectedCategory("全部商品")}
                            >
                                全部商品
                            </li>
    
                            {/* ✅ 渲染分類，確保不包含「加購」 */}
                            {categories.map((category, index) => (
                                <li
                                    key={index}
                                    className={`list-group-item ${selectedCategory === category ? "active" : ""}`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category}
                                </li>
                            ))}
                        </ul>
    
                        <hr />
    
                        <Accordion defaultActiveKey="">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>品牌</Accordion.Header>
                                <Accordion.Body>
                                    {brands.map((brand, index) => (
                                        <Form.Check
                                            key={index}
                                            type="checkbox"
                                            label={brand}
                                            checked={selectedBrands.includes(brand)}
                                            onChange={() => handleBrandSelection(brand)}
                                        />
                                    ))}
                                </Accordion.Body>
                            </Accordion.Item>
    
                            {/* ✅ 價格篩選區 */}
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>價格</Accordion.Header>
                                <Accordion.Body className="d-flex align-items-center gap-2">
                                    <Form.Control
                                        type="number"
                                        placeholder="最低金額"
                                        className="price-input"
                                        value={minPrice}
                                        onChange={(e) => setMinPrice(e.target.value)}
                                    />
                                    <span>—</span>
                                    <Form.Control
                                        type="number"
                                        placeholder="最高金額"
                                        className="price-input"
                                        value={maxPrice}
                                        onChange={(e) => setMaxPrice(e.target.value)}
                                    />
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
    
                        {/* ✅ 修正篩選按鈕，使其可以手動觸發篩選 */}
                        <Button 
                            className="w-100 mt-3 category-leftbar-btn"
                            onClick={handleFilterUpdate} // ✅ 觸發篩選函式
                        >
                            套用篩選
                        </Button>
                    </Col>
    
                    {/* 右側商品列表 */}
                    <Col md={9}>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h2>{selectedCategory}</h2>
                            <div className="d-flex">
                                {/* ✅ 修正「篩選」按鈕，確保可以手動觸發篩選 */}
                                <Button variant="outline-secondary" className="me-2" onClick={handleFilterUpdate}>篩選</Button>
                                <Button variant="outline-secondary">排序</Button>
                            </div>
                        </div>
    
                        {/* ✅ 渲染商品列表 */}
                        <Row>
                            {displayedProducts.length > 0 ? (
                                displayedProducts.map((product) => (
                                    <Col xs={6} md={4} key={product.id} className="mb-4">
                                        <ProductCard product={product} />
                                    </Col>
                                ))
                            ) : (
                                <p className="no-products">沒有符合條件的商品</p>
                            )}
                        </Row>
    
                        {/* ✅ 修正當 `totalPages === 0` 時，避免渲染空的分頁 */}
                        {totalPages > 0 && (
                            <Pagination className="custom-pagination justify-content-center mt-4">
                                <Pagination.Prev
                                    className="pagination-prev"
                                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                                    disabled={currentPage === 1}
                                >
                                    &lt;
                                </Pagination.Prev>
    
                                {[...Array(totalPages)].map((_, index) => (
                                    <Pagination.Item
                                        key={`page-${index + 1}`} 
                                        active={index + 1 === currentPage}
                                        onClick={() => setCurrentPage(index + 1)}
                                    >
                                        {index + 1}
                                    </Pagination.Item>
                                ))}
    
                                <Pagination.Next
                                    className="pagination-next"
                                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                                    disabled={currentPage === totalPages}
                                >
                                    &gt;
                                </Pagination.Next>
                            </Pagination>
                        )}
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    );
    
}

export default Products;
