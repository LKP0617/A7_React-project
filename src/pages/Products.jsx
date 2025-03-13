import React, { useState, useEffect } from "react";
import { Container, Row, Col, Accordion, Form, Button, Pagination } from "react-bootstrap";
import "../assets/scss/pages/_products.scss";
import Header from "../layout/Header";
import Banner from "../layout/Banner";
import ProductCard from "../layout/ProductCard"; // ✅ 確保導入 ProductCard
/*import productData from "../data/productData"; // 確保路徑正確*/
import productData from "../data/products.json";
import Footer from "../layout/Footer";

const categories = [
    "全部商品",
    ...new Set(productData
        .map((product) => product.category)
        .filter((category) => category !== "加購") // 🛠️ 排除「加購」
    ),
];

const brands = [...new Set(productData.map((product) => product.brand))];

function Products() {
    const [selectedCategory, setSelectedCategory] = useState("全部商品");
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    
    // 直接篩選出「非加購」類別的商品
    const [filteredProducts, setFilteredProducts] = useState(
        productData.filter((product) => product.category !== "加購")
    );

    const itemsPerPage = 12;

    // 🛠️ 更新篩選條件
    useEffect(() => {
        let updatedProducts = productData.filter(product => 
            (selectedCategory === "全部商品" || product.category === selectedCategory) &&
            (selectedBrands.length === 0 || selectedBrands.includes(product.brand)) &&
            (product.category !== "加購") // 🛠️ 避免「加購」商品顯示
        );

        // 價格篩選（如果有填寫）
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
    }, [selectedCategory, selectedBrands, minPrice, maxPrice]);

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

                        {/* ✅ 套用篩選按鈕 */}
                        <Button 
                            className="w-100 mt-3 category-leftbar-btn"
                            onClick={() => setFilteredProducts([...filteredProducts])} 
                        >
                            套用篩選
                        </Button>
                    </Col>

                    {/* 右側商品列表 */}
                    <Col md={9}>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h2>{selectedCategory}</h2>
                            <div className="d-flex">
                                <Button variant="outline-secondary" className="me-2">篩選</Button>
                                <Button variant="outline-secondary">排序</Button>
                            </div>
                        </div>

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

                        {/* 分頁 */}
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
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    );
}

export default Products;
