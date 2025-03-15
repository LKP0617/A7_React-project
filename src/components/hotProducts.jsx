import { useEffect, useRef, useState } from 'react';
import axios, { Axios } from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Icons from '../assets/images/icons/Icons';
import { Link } from 'react-router';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

export default function hotProducts() {
    const [hotProducts, setHotProducts] = useState([]);

    const getHotProducts = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/v2/api/${API_PATH}/products/all`);
            const sortedProducts = res.data.products.sort((a, b) => b.quantity - a.quantity);
            const top4Products = sortedProducts.slice(0, 4);
            setHotProducts(top4Products);

            // console.log("API 取得的所有產品", res.data.products);
            // console.log("前 4 個熱銷商品", top4Products);
        } catch (error) {
            console.error("取得產品失敗", error);
            alert("取得產品失敗");
        }
    };

    useEffect(() => {
        getHotProducts();
    }, [])

    const handleClick = () => {
        navigate(`/products/${product.id}`);
    };

    return (
        <>
            <div className="recommend_product_title justify-content-between align-items-center margin-bottom-2">
                <h4 className="fw-bold">熱銷推薦</h4>

                {/* 手機板 */}
                <div className="recommend_product_swiper d-lg-none">
                    <div className='mySwiper2'>
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={16}
                            slidesPerView={2}
                            initialSlide={0}
                            navigation={{
                                nextEl: ".swiper-button-next2",
                                prevEl: ".swiper-button-prev2",
                            }}
                        >
                            {hotProducts.map((product) => (
                                <SwiperSlide key={product.id}>
                                    <div className="card border-0 px-0 rounded-bottom-0">
                                        <Link to="/" className="border border-1 rounded-top-3 h-100">
                                            <div className="position-relative recommend_product_card_img">
                                                <img src={product.images[0]} className="card-img-top" alt={product.title} />
                                                <button className="heart-btn position-absolute bottom-0 end-0 border-0 bg-transparent p-0">
                                                    <img className="heart-icon px-1 py-1" src={Icons.heart} alt="heart" />
                                                </button>
                                            </div>
                                            <div className="card-body d-flex flex-column gap-2">
                                                <div className="d-flex justify-content-center align-items-center gap-3">
                                                    <img src={product.brand_logo} alt="brand logo" style={{ width: "24px", height: "24px" }} />
                                                    <p className="fs-10">{product.brand}</p>
                                                </div>
                                                <div className="d-flex flex-column justify-content-center gap-1 d-inline-block text-truncate" style={{ maxWidth: "150px" }}>
                                                    <p className="fw-bold fs-9 text-center">{product.title}</p>
                                                    <p className="fw-bold fs-9 text-center">NT$ {product.price}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Swiper Navigation */}
                        <div className="swiper-button-next2"></div>
                        <div className="swiper-button-prev2"></div>
                    </div>
                </div>

                <Link className="btn index_btn rounded-pill" to="/" role="button">
                    <p className="fs-8 fw-bold">查看更多</p>
                </Link>
            </div>

            <div className="row recommend_product_card d-lg-flex gap-4 d-none rounded-bottom-0">

                {/* 網頁板 */}
                {hotProducts.map((product) => (
                    <div key={product.id} className="col card border-0 px-0 rounded-bottom-0 card-enhanced">
                        <Link to="/" className="border border-1 rounded-top-3 h-100">
                            <div className="position-relative recommend_product_card_img">
                                <img src={product.images[0]} className="card-img-top" alt={product.title} />
                                <button className="heart-btn position-absolute bottom-0 end-0 border-0 bg-transparent p-0">
                                    <img className="heart-icon px-1 py-1" src={Icons.heart} alt="heart" />
                                </button>
                            </div>
                            <div className="card-body d-flex gap-3">
                                <img src={product.brand_logo} alt="logo" style={{ width: "61px", height: "61px" }} />
                                <div className="d-flex flex-column justify-content-center">
                                    <p className="fs-9 mb-2">{product.brand}</p>
                                    <p className="fw-bold text-truncate">{product.title}</p>
                                    <p className="fw-bold mt-1">NT$ {product.price}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}

            </div>
        </>
    )
}