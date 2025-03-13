import { useParams, Link } from "react-router-dom";
import { useState } from "react";
/*import productData from "../data/productData"; // 確保路徑正確*/
import productData from "../data/products.json";
import "../assets/scss/pages/_productDetail.scss";

import { Row, Col, Button } from "react-bootstrap"; // 使用 Bootstrap
import cartIcon from "../assets/images/icons/shopping-cart.svg";
import bagIcon from "../assets/images/icons/shopping-bag.svg";
import Facebook from '../assets/images/icons/Facebook.svg';
import Instagram from '../assets/images/icons/Instagram.svg';
import Line from '../assets/images/icons/Line.svg';
import share_2 from '../assets/images/icons/share-2.svg';
import Icons from '../assets/images/icons/Icons';

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

// 當選擇規格時，自動調整數量選項範圍
const handleFeatureChange = (index) => {
  setSelectedFeature(index);
  setQuantity(1); // 切換規格時，數量重置為 1
};

// 取得當前選擇規格的庫存數量
const maxQuantity = product.quantity[selectedFeature] || 1;

// 調整數量
const handleQuantityChange = (amount) => {
  const newQuantity = quantity + amount;
  if (newQuantity >= 1 && newQuantity <= maxQuantity) {
    setQuantity(newQuantity);
  }
};

  const [isFavorite, setIsFavorite] = useState(false);

  // 切換收藏狀態
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  
  // 品牌館對應logo
  const brandLogo =
  product?.brand === "Negaflower"
    ? "https://i.imgur.com/Y9nAq2A.jpg"
    : product?.brand === "陶之家"
    ? "https://i.imgur.com/nTCBTgi.png"
    : product?.brand === "SOS香氛"
    ? "https://i.imgur.com/WE6gmjk.png"
    : "https://i.imgur.com/r5w9tAg.png";

    const [activeTab, setActiveTab] = useState("information");

   // 🔹 處理商品介紹：提取 HTML，或只取 `<p>` 內純文字
    const extractTextFromHTML = (htmlString) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = htmlString;
    const paragraphs = Array.from(tempElement.querySelectorAll("p")).map((p) => p.textContent);
    return paragraphs;
    };
  
  // 🔹 隨機選擇 1~2 張商品圖片
    const shuffledImages = [...product.images].sort(() => 0.5 - Math.random()).slice(0, 2);


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
              <img src={images[selectedImageIndex]} alt={product.title} />
            </div>

            {/* 🔹 小圖區域，增加左右切換按鈕 */}
            <div className="thumbnail-container">
              <button className="prev-btn" onClick={handlePrevImage}>&lt;</button>
              <div className="thumbnail-list">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={product.title}
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
            <h1 className="product-name h4">{product.title}</h1>
            <p className="product-description body-1">{product.description}</p>

            {/* 🔹 Subcategory Hashtags */}
            {product.sub_category && product.sub_category.length > 0 && (
              <p className="product-tags">
                {product.sub_category.map((item) => `#${item}`).join(' ')}
              </p>
            )}

            <p className="product-price h3">
            NT${Array.isArray(product.price) ? product.price[selectedFeature] : product.price}
            </p>

          </div>

          {/* 🔹 商品選擇區塊 (規格選擇、數量、按鈕群組) */}
          <div className="select-group mt-auto d-flex flex-column">
            {/* 規格選擇框 */}
            <select
            className="form-select w-100"
            value={selectedFeature}
            onChange={(e) => handleFeatureChange(Number(e.target.value))}
            >
            <option value="" disabled>請選擇商品規格</option>
            {product.features && product.features.length > 0 ? (
                product.features.map((feature, index) => (
                <option key={index} value={index}>
                    {feature}
                </option>
                ))
            ) : (
                <option value="無規格">無規格</option>
            )}
            </select>

            {/* 數量選擇框 */}
            <select
            className="form-select w-100"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            >
            <option value="" disabled>數量</option>
            {[...Array(maxQuantity).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                {num + 1}
                </option>
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

    {/* 🔹 可加購商品區塊 */}
    {product.add_on_items && product.add_on_items.length > 0 && (
    <div className="container add-on-container add border my-5 my-md-7">
        <div className="row bg-grey-100 fs-6">
        <div className="col">
            <div className="add-on-title Title text-center bg-grey-100 bold-text">
            <p className="h6">可加購商品</p>
            </div>
        </div>
        </div>

        {/* 電腦版 - 固定 4 欄 */}
        <div className="add-content d-none d-md-flex justify-content-center">
        {product.add_on_items
            .map((itemName) => productData.find((p) => p.title === itemName)) // 透過名稱匹配加購品
            .filter((p) => p) // 過濾 undefined
            .slice(0, 4) // 只取最多 4 個
            .map((item, index) => (
            <div key={index} className="card border-0 my-md-6 bold-text">
                <img
                src={item.images[0]} // 取第一張圖片
                className="card-img-top border-radius-none mb-3"
                alt={item.title}
                />
                <p className="card-title mb-3 title">{item.title}</p>
                <div className="fs-6 mb-3 h6">NT${item.price}</div>

                {/* 數量選擇框 (上限 5) */}
                <select className="form-select mb-3">
                {[...Array(5).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>
                    數量：{num + 1}
                    </option>
                ))}
                </select>

                {/* 加入購物車按鈕 */}
                <button className="btn border border-black-100 d-flex justify-content-center align-items-center fs-8 fs-md-8 border-radius-small bold-text">
                <img src={cartIcon} className="me-md-2" alt="shopping-cart" />
                加入購物車
                </button>
            </div>
            ))}
        </div>
    </div>
    )}

    <section className="shop container border d-flex flex-wrap justify-content-start align-items-center py-4">
    {/* 品牌 Logo & 名稱 */}
    <div className="shop-name d-flex align-items-center">
        <a href="#">
        <img className="shop-icon me-3 me-md-4" src={brandLogo} alt={product.brand} />
        </a>
        <a href="#">
        <p className="me-md-5 branding-h3">{product.brand}品牌館</p>
        </a>
    </div>

    {/* 關注按鈕 */}
    <button className={`btn follow-btn d-flex justify-content-center align-items-center fs-8 bold-text`}>
        <img src={Icons.plus} alt="plus" className="follow-icon" />
        <span className="follow-text">加入關注</span>
    </button>
    
    </section>


    <div className="container detail">
    {/* 🔹 分頁按鈕 */}
    <ul className="detail-nav nav justify-content-center my-6 my-md-5 my-lg-7 fs-6 bold-text">
      <li className={`nav-item ${activeTab === "information" ? "active" : ""}`}>
        <button
          className={`nav-link text-black-100 ${activeTab === "information" ? "active" : ""}`}
          onClick={() => setActiveTab("information")}
        >
          商品介紹
        </button>
      </li>
      <li className={`nav-item ${activeTab === "spec" ? "active" : ""}`}>
        <button
          className={`nav-link text-black-100 ${activeTab === "spec" ? "active" : ""}`}
          onClick={() => setActiveTab("spec")}
        >
          商品規格
        </button>
      </li>
    </ul>

    {/* 🔹 分頁內容 */}
    <div className="tab-content">
      {/* 🔸 商品介紹 */}
      {activeTab === "information" && (
        <div id="information" className="tab-pane fade show active">
          <div className="container-text text-center mb-6 mb-md-7">
            {product.details ? (
              <div dangerouslySetInnerHTML={{ __html: product.details }} />
            ) : (
              extractTextFromHTML(product.details).map((paragraph, index) => (
                <p key={index} className="body-1 mb-2 mb-md-1 text-black-100">{paragraph}</p>
              ))
            )}
          </div>

          {/* 🔹 隨機顯示 1~2 張圖片，兩張換行 */}
          <div className="product-img">
            {shuffledImages.map((image, index) => (
              <div key={index} className="row">
                <div className="img col mb-6 mb-md-7">
                  <img src={image} alt={`產品圖片 ${index + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 🔸 商品規格 */}
      {activeTab === "spec" && (
        <div id="spec" className="tab-pane fade show active">
          <table className="info-table text-center mb-6 mb-md-7">
            <tbody>
              {product.specifications.map((spec, index) => (
                <tr key={index}>
                  <th>{spec.name}</th>
                  <td>{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
    </div>



    <Footer/>
    </>
  );
}

export default ProductDetail;
