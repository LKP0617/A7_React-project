import React, { useState, useEffect } from "react";
import { Container, Row, Col, Accordion, Form, Button, Pagination, Dropdown } from "react-bootstrap";
import Header from "../layout/Header";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
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
        return data.products || [];
    } catch (error) {
        console.error("API 請求錯誤:", error);
        return [];
    }
};

// ✅ 動態 `Banner` 圖片
const ProductBannerPcImages = [
    "https://i.imgur.com/Zhn35kc.png",
    "https://i.imgur.com/xvZymRd.png",
    "https://i.imgur.com/OBn3SYO.png"
  ];
  
  const ProductBannerMbImages = [
    "https://i.imgur.com/HrazmNY.png",
    "https://i.imgur.com/UNl0gyG.png",
    "https://i.imgur.com/jRaiAVE.png"
  ];


function Products() {
    const [products, setProducts] = useState([]); // 存放 API 取得的商品
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("全部商品");
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sortOrder, setSortOrder] = useState(""); // ✅ 新增排序選擇

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
    }, [products]);

    // 🛠️ 更新篩選條件
    useEffect(() => {
        handleFilterUpdate();
    }, [products, selectedCategory, selectedBrands, minPrice, maxPrice, sortOrder]);

    // ✅ 篩選與排序邏輯
    const handleFilterUpdate = () => {
        let updatedProducts = products.filter(product =>
            (selectedCategory === "全部商品" || product.category === selectedCategory) &&
            (selectedBrands.length === 0 || selectedBrands.includes(product.brand)) &&
            (product.category !== "加購")
        );

        // 🛠️ 價格篩選
        if (minPrice && maxPrice) {
            updatedProducts = updatedProducts.filter(product => {
                const price = Array.isArray(product.price) ? product.price[0] : product.price;
                return price >= Number(minPrice) && price <= Number(maxPrice);
            });
        }

        // 🛠️ 排序邏輯
        if (sortOrder === "highToLow") {
            updatedProducts.sort((a, b) => b.price - a.price);
        } else if (sortOrder === "lowToHigh") {
            updatedProducts.sort((a, b) => a.price - b.price);
        } else {
            updatedProducts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        }

        setFilteredProducts(updatedProducts);
        setCurrentPage(1);
    };

    // ✅ 計算分頁
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const displayedProducts = filteredProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // ✅ 切換品牌篩選
    const handleBrandSelection = (brand) => {
        setSelectedBrands((prev) =>
            prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
        );
    };

    const [hotSaleProducts, setHotSaleProducts] = useState([]);

useEffect(() => {
    if (products.length > 0) {
        // 🔹 過濾掉 category 為 "加購" 的商品，並按 quantity 值排序，取前 4 個
        const topSelling = products
            .filter(product => product.category !== "加購")
            .sort((a, b) => b.quantity - a.quantity)
            .slice(0, 4);

        setHotSaleProducts(topSelling);
    }
}, [products]);


    return (
        <>
            <Header />
            <Banner desktopImages={ProductBannerPcImages} mobileImages={ProductBannerMbImages} interval={3000} />
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
                        {/* 🔹 商品分類標題 + 排序選單 */}
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h2>{selectedCategory}</h2>
                            <div className="d-flex align-items-center">
                                <span className="me-2">排序：</span>
                                <Dropdown>
                                    <Dropdown.Toggle variant="outline-secondary">
                                        {sortOrder === "highToLow"
                                            ? "價格由高到低"
                                            : sortOrder === "lowToHigh"
                                            ? "價格由低到高"
                                            : "請選擇"}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => setSortOrder("highToLow")}>
                                            價格由高到低
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={() => setSortOrder("lowToHigh")}>
                                            價格由低到高
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
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

                        {/* ✅ 分頁按鈕（僅當 `totalPages > 0` 時顯示） */}
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
            {/* 🔹 熱銷推薦區塊 */}
            <div className="hot-sale-container mt-5">
                <div className="container">
                    <h2 className="hot-sale-title text-center">熱銷推薦</h2>
                    <hr className="hot-sale-title-hr" />
                    
                    <Row className="justify-content-center">
                        {hotSaleProducts.map((product) => (
                            <Col xs={6} md={3} key={product.id} className="mb-4">
                                <ProductCard product={product} />
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
            <Footer/>
        </>
    );
    
}

export default Products;
