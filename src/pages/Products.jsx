import React, { useState } from "react";
import { Container, Row, Col, Accordion, Form, Button, Pagination } from "react-bootstrap";
import Header from "../layout/Header";
import footer from "../layout/Footer";
import Banner from "../layout/Banner";
import ProductCard from "../layout/ProductCard"; // ✅ 確保導入 ProductCard
import productData from "../data/productData"; // ✅ 確保導入 ProductData
import Footer from "../layout/Footer";

const categories = [...new Set(productData.map((product) => product.category))]; 
const brands = [...new Set(productData.map((product) => product.brand))]; 

function Products() {
    const [selectedCategory, setSelectedCategory] = useState("全部商品");
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    // 過濾商品
    const filteredProducts = productData.filter(
        (product) =>
            (selectedCategory === "全部商品" || product.category === selectedCategory) &&
            (selectedBrands.length === 0 || selectedBrands.includes(product.brand))
    );

    // 計算分頁
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const displayedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    // 切換品牌篩選
    const handleBrandSelection = (brand) => {
        setSelectedBrands((prev) =>
            prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
        );
    };

    return (
        <>
            <Header />
            <Banner />
            <Container className="mt-4">
                <Row>
                    {/* 左側側邊欄 */}
                    <Col md={3} className="d-none d-md-block">
                        <h5>商品類別</h5>
                        <ul className="list-group">
                            {/* 新增 "全部商品" 選項 */}
                            <li
                                className={`list-group-item ${selectedCategory === "全部商品" ? "active" : ""}`}
                                onClick={() => setSelectedCategory("全部商品")}
                                style={{ cursor: "pointer" }}
                            >
                                全部商品
                            </li>

                            {/* 動態生成其他商品類別 */}
                            {categories.map((category, index) => (
                                <li
                                    key={index}
                                    className={`list-group-item ${selectedCategory === category ? "active" : ""}`}
                                    onClick={() => setSelectedCategory(category)}
                                    style={{ cursor: "pointer" }}
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

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>價格</Accordion.Header>
                                <Accordion.Body className="d-flex">
                                    <Form.Control type="number" placeholder="最低" className="me-2" />
                                    <span>—</span>
                                    <Form.Control type="number" placeholder="最高" className="ms-2" />
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <Button variant="dark" className="w-100 mt-3">套用篩選</Button>
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

                        {/* 使用 ProductCard 來確保與組員一致 */}
                        <Row>
                            {displayedProducts.map((product) => (
                                <Col md={4} key={product.id} className="mb-4">
                                    <ProductCard product={product} />
                                </Col>
                            ))}
                        </Row>


                        {/* 分頁 */}
                        <Pagination className="justify-content-center mt-4">
                            {[...Array(totalPages)].map((_, index) => (
                                <Pagination.Item
                                    key={index}
                                    active={index + 1 === currentPage}
                                    onClick={() => setCurrentPage(index + 1)}
                                >
                                    {index + 1}
                                </Pagination.Item>
                            ))}
                        </Pagination>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    );
}

export default Products;
