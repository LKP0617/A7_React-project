import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import productData from "../data/productData"; // 確保路徑正確
import "../assets/scss/pages/_productDetail.scss";

import { Row, Col, Button } from "react-bootstrap"; // 使用 Bootstrap
import cartIcon from "../assets/images/icons/shopping-cart.svg";
import bagIcon from "../assets/images/icons/shopping-bag.svg";
import Facebook from '../assets/images/icons/Facebook.svg';
import Instagram from '../assets/images/icons/Instagram.svg';
import Line from '../assets/images/icons/Line.svg';
import share_2 from '../assets/images/icons/share-2.svg';

import Header from '../layout/Header';
import Footer from '../layout/Footer';

function ProductDetail() {
  const { productId } = useParams();
  const product = productData.find((p) => String(p.id) === String(productId));

  if (!product) {
    return <div className="not-found">商品未找到</div>;
  }

  // 商品輪播功能
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const images = product.images || [];
  
  // 切換主圖的左右箭頭
  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // 產品規格選擇
  const [selectedFeature, setSelectedFeature] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // 調整數量
  const handleQuantityChange = (amount) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1 && newQuantity <= product.quantity) {
      setQuantity(newQuantity);
    }
  };

  const [isFavorite, setIsFavorite] = useState(false);

  // 切換收藏狀態
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <>
    <Header />
    <div className="container product-detail-container mt-80">
      {/* 🔹 麵包屑 */}
      <nav aria-label="breadcrumb" className="breadcrumb-container">
        <ol className="breadcrumb subtitle">
          <li className="breadcrumb-item">
            <Link to="/">首頁</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/products">商品總覽</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {product.category}
          </li>
        </ol>
      </nav>

      {/* 🔹 使用 Bootstrap Row & Column */}
      <Row className="product-detail">
        {/* 🔹 左側：商品圖片輪播 */}
        <Col md={6} className="product-left">
          <div className="product-gallery">
            {/* 主圖 */}
            <div className="main-image">
              <img src={images[selectedImageIndex]} alt={product.name} />
            </div>

            {/* 🔹 小圖區域，增加左右切換按鈕 */}
            <div className="thumbnail-container">
              <button className="prev-btn" onClick={handlePrevImage}>&lt;</button>
              <div className="thumbnail-list">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={product.name}
                    onClick={() => setSelectedImageIndex(index)}
                    className={index === selectedImageIndex ? "active" : ""}
                  />
                ))}
              </div>
              <button className="next-btn" onClick={handleNextImage}>&gt;</button>
            </div>
          </div>
        </Col>


        {/* 🔹 右側：商品資訊 */}
        <Col md={6} className="product-right d-flex flex-column justify-content-between">
          <div>
            <h1 className="product-name h4">{product.name}</h1>
            <p className="product-description body-1">{product.description}</p>

            {/* 🔹 Subcategory Hashtags */}
            {product.sub_category && product.sub_category.length > 0 && (
              <p className="product-tags">
                {product.sub_category.map((item) => `#${item}`).join(' ')}
              </p>
            )}

            <p className="product-price h3">NT${product.price[selectedFeature]}</p>
          </div>

          {/* 🔹 商品選擇區塊 (規格選擇、數量、按鈕群組) */}
          <div className="select-group mt-auto d-flex flex-column">
            {/* 規格選擇框 */}
            <select className="form-select w-100">
              <option value="" disabled selected>請選擇商品規格</option>
              {product.features && product.features.length > 0 ? (
                product.features.map((feature, index) => (
                  <option key={index} value={feature}>{feature}</option>
                ))
              ) : (
                <option value="無規格">無規格</option>
              )}
            </select>

            {/* 數量選擇框 */}
            <select className="form-select w-100">
              <option value="" disabled selected>數量</option>
              {[...Array(product.quantity).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>{num + 1}</option>
              ))}
            </select>

            {/* 按鈕群組 - 設置與主圖底邊對齊 */}
            <div className="button-group">
              <div className="d-flex gap-2">
                <button className="btn btn-primary-100 w-100">
                  <img src={cartIcon} alt="cart" className="me-2" />加入購物車
                </button>
                <button className="btn btn-secondary-100 w-100">
                  <img src={bagIcon} alt="bag" className="me-2" />立即購買
                </button>
              </div>
              {/* 加入收藏清單 */}
              <button className="btn btn-outline-dark w-100 mt-40" onClick={toggleFavorite}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill={isFavorite ? "#D33E41" : "none"}
                  stroke={isFavorite ? "#D33E41" : "#484848"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="me-2"
                >
                  <path d="M19 14C20.49 12.54 22 10.79 22 8.5C22 7.041 21.4205 5.64236 20.3891 4.61091C19.3576 3.57946 17.9587 3 16.5 3C14.74 3 13.5 3.5 12 5C10.5 3.5 9.26 3 7.5 3C6.04131 3 4.64236 3.57946 3.61091 4.61091C2.57946 5.64236 2 7.04131 2 8.5C2 10.8 3.5 12.55 5 14L12 21L19 14Z" />
                </svg>
                {isFavorite ? "已收藏" : "加入收藏清單"}
              </button>
            </div>

            {/* 📌 手機版分享按鈕 (改為內嵌到 select-group 內) */}
            <div className="share-row-mobile d-md-none d-flex  align-items-center mt-40">
              <p className="bold-text fs-6">分享到:</p>
              <ul className="share-icon d-flex">
                <li><a href="#"><img src={Line} alt="line" /></a></li>
                <li><a href="#"><img src={Instagram} alt="Instagram" /></a></li>
                <li><a href="#"><img src={Facebook} alt="facebook" /></a></li>
                <li><a href="#"><img src={share_2} alt="share" /></a></li>
              </ul>
            </div>
          </div>

          {/* 📌 電腦版分享按鈕 (位置靠右底部) */}
          <div className="share-row d-none d-md-flex align-items-center">
            <p className="me-md-4 bold-text fs-6">分享到:</p>
            <ul className="share-icon d-flex">
              <li><a href="#"><img src={Line} alt="line" /></a></li>
              <li><a href="#"><img src={Instagram} alt="Instagram" /></a></li>
              <li><a href="#"><img src={Facebook} alt="facebook" /></a></li>
              <li><a href="#"><img src={share_2} alt="share" /></a></li>
            </ul>
          </div>

        </Col>

      </Row>
    </div>
    <Footer/>
    </>
  );
}

export default ProductDetail;
