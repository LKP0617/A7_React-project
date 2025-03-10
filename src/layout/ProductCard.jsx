import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "../assets/scss/layout/_productCard.scss";

function ProductCard({ product }) {
    // 設定品牌對應的圖片
    const brandLogo =
        product.brand === "Negaflower"
        ? "https://i.imgur.com/Y9nAq2A.jpg"
        : product.brand === "陶之家"
        ? "https://i.imgur.com/nTCBTgi.png"
        : "https://via.placeholder.com/60"; // 預設圖片，防止 brand 沒匹配時顯示錯誤

    // 收藏功能狀態
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };
  

  return (
    <Card className="product-card  px-0 rounded-bottom-0">
      <a href="#" className=" rounded-top-3 h-100 d-block">
        {/* 圖片區域 */}
        <div className="position-relative product-card-img-container">
          <img src={product.images[0]} className="product-image card-img-top" alt={product.name} />
          {/* 收藏按鈕 */}
          <button className="heart-btn position-absolute bottom-0 end-0 border-0 bg-transparent p-0" onClick={toggleFavorite}>
            <img
              className="heart-icon px-1 py-1"
              src={isFavorite ? "src/assets/images/icons/heart-red.png" : "src/assets/images/icons/heart.png"}
              alt="heart"
            />
          </button>
        </div>
        
        {/* 電腦版資訊區域 */}
        <Card.Body className="product-info-desktop">
          <img src={brandLogo} alt={product.brand} className="brand-logo" />
          <div className="text-container">
            <p className="brand-name body-2">{product.brand}</p>
            <p className="product-name title">{product.name}</p>
            <p className="product-price title">NT${product.price[0]}</p>
          </div>
        </Card.Body>

        {/* 手機版資訊區域 */}
        <Card.Body className="product-info-mobile">
          <div className="brand-row">
          <img src={brandLogo} alt={product.brand} className="brand-logo" />
            <p className="brand-name minimum">{product.brand}</p>
          </div>
          <p className="product-name subtitle">{product.name}</p>
          <p className="product-price subtitle">NT${product.price[0]}</p>
        </Card.Body>
      </a>
    </Card>
  );
}

export default ProductCard;
