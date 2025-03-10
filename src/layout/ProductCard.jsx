import React from "react";
import { Card } from "react-bootstrap";
import "../assets/scss/pages/_productCard.scss";

function ProductCard({ product }) {
  return (
    <Card className="recommend_product_card border-0 px-0 rounded-bottom-0">
    <a href="#" className="border border-1 rounded-top-3 h-100 d-block">
        <div className="position-relative recommend_product_card_img">
            <div className="product-image-container">
                {/* ✅ 只抓取第一張圖片 */}
                <img src={product.images[0]} className="product-image card-img-top" alt={product.name} />
            </div>
            <button className="heart-btn position-absolute bottom-0 end-0 border-0 bg-transparent p-0">
                <img className="heart-icon px-1 py-1" src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M19%2014C20.49%2012.54%2022%2010.79%2022%208.5C22%207.04131%2021.4205%205.64236%2020.3891%204.61091C19.3576%203.57946%2017.9587%203%2016.5%203C14.74%203%2013.5%203.5%2012%205C10.5%203.5%209.26%203%207.5%203C6.04131%203%204.64236%203.57946%203.61091%204.61091C2.57946%205.64236%202%207.04131%202%208.5C2%2010.8%203.5%2012.55%205%2014L12%2021L19%2014Z'%20stroke='%23484848'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e" alt="heart" />
            </button>
        </div>
        <Card.Body className="d-flex flex-column gap-2 align-items-center">
            <div className="d-flex justify-content-center align-items-center gap-2">
                <img src="https://i.imgur.com/Y9nAq2A.jpg" alt={product.brand} className="brand-logo" />
                <p className="fs-10">{product.brand}</p>
            </div>
            <div className="text-center">
                <p className="fw-bold fs-9 text-truncate">{product.name}</p>
                <p className="fw-bold fs-9">NT${product.price}</p>
            </div>
        </Card.Body>
    </a>
    </Card>

  );
}

export default ProductCard;