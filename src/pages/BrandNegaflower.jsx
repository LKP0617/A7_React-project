
import React, { useState, useEffect } from "react";
import "../assets/scss/pages/_BrandPages.scss"; // 確保有引入對應的 CSS

import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard"; // 引入商品卡片元件


const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

const NegaflowerBannerPcImages = [
    "https://i.imgur.com/Zhn35kc.png",
    "https://i.imgur.com/cb7W3nW.png",
    "https://i.imgur.com/OBn3SYO.png"
  ];
  
  const NegaflowerBannerMbImages = [
    "https://i.imgur.com/HrazmNY.png",
    "https://i.imgur.com/jQ5dt08.png",
    "https://i.imgur.com/jRaiAVE.png"
  ];

const BrandNegaflower = () => {
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    const fetchTopProducts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/v2/api/${API_PATH}/products/all`);
        if (!response.ok) throw new Error("無法獲取商品資料");
        const data = await response.json();

        if (!data.products) throw new Error("API 回傳格式錯誤");

        // 🔹 過濾 Negaflower 品牌，排除 category 為 "加購"，並根據 quantity 排序
        const filteredProducts = data.products
          .filter(product => product.brand === "Negaflower" && product.category !== "加購")
          .sort((a, b) => b.quantity - a.quantity) // 依照庫存量降序排列
          .slice(0, 8); // 取前 8 筆

        setTopProducts(filteredProducts);
      } catch (error) {
        console.error("API 請求錯誤:", error);
      }
    };

    fetchTopProducts();
  }, []);


  return (
    <>
    <Header />
    <div className="brand-container">
      {/* 🔹 品牌主圖 */}
      <div className="banner">
        <img
          className="main-banner"
          src="https://i.imgur.com/5Y1sZ0L.png"
          alt="negaflower十月新品上市"
        />
        <img
          className="main-banner-m"
          src="https://i.imgur.com/CaRpsPh.png"
          alt="negaflower十月新品上市"
        />
      </div>

      {/* 🔹 品牌介紹 */}
      <div className="brand-name">
        <div className="container text-align-center p12">
          <img
            className="brand-logo"
            src="https://i.imgur.com/Y9nAq2A.jpg"
            alt="negaflower logo"
          />
          <h1 className="brand-title branding-h3 main-text">
            Nega Flower 品牌館
          </h1>
          <p className="brand-story branding-h4 main-text">
            Nega Flower 致力於將浪漫與美好融入日常生活。<br />
            無論是慶祝特別時刻，還是平凡日子的點綴，<br />
            我們相信花卉的美麗能讓生活更加溫馨與動人。
          </p>
          <p className="brand-story-m branding-h4 main-text">
            Nega Flower 致力於將浪漫與美好融入日常生活。無論是慶祝特別時刻，
            還是平凡日子的點綴，我們相信花卉的美麗能讓生活更加溫馨與動人。
          </p>
        </div>
      </div>
    </div>

    <Banner desktopImages={NegaflowerBannerPcImages} mobileImages={NegaflowerBannerMbImages} interval={3000} />

    {/* 🔹 產品分類 */}
    <div className="product-category p-12">
        <div className="container text-align-center">
          <h2 className="product-category-title h4">Negaflower 產品</h2>
          <hr className="product-category-title-hr" />
          <div className="product-category-img d-flex justify-content-center m12">
            {/* 左邊：花禮設計 */}
            <div className="product-categary-l d-flex align-items-center justify-content-center">
              <img
                src="https://i.imgur.com/oZQPjPG.png"
                alt="花禮設計"
              />
              <div className="product-category-l-hover"></div>
              <span className="h4 white">花禮設計</span>
            </div>

            {/* 右邊：鮮花花束 & 婚禮花藝 */}
            <div className="product-category-r d-flex flex-column">
              {/* 上：鮮花花束 */}
              <div className="product-category-t d-flex align-items-center justify-content-center">
                <img
                  src="https://i.imgur.com/o2qBPFQ.png"
                  alt="鮮花花束"
                />
                <div className="product-category-t-hover"></div>
                <span className="h4 white">鮮花花束</span>
              </div>
              {/* 下：婚禮花藝 */}
              <div className="product-category-b d-flex align-items-center justify-content-center">
                <img
                  src="https://i.imgur.com/ZNFPy1h.png"
                  alt="婚禮花藝"
                />
                <div className="product-category-b-hover"></div>
                <span className="h4 white">婚禮花藝</span>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div className="brand-container">
      {/* 🔹 熱銷推薦標題 */}
      <div className="hot-sell-section container">
        <div className="text-align-center">
          <h2 className="hot-sell-title h4">熱銷推薦</h2>
          <hr className="product-category-title-hr" />
        </div>
        <div className="hot-sell-grid">
          {topProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default BrandNegaflower;
