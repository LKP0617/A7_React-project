import { useEffect, useRef, useState } from 'react';
import axios, { Axios } from 'axios';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import SevenImgs from '../assets/images/seven/SevenImgs';
import Icons from '../assets/images/icons/Icons';
import { Link } from 'react-router';
import HotProducts from '../components/hotProducts';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

function Home() {

    return (
        <>
            <Header />

            <div className="brands">
                <div className="brand_container">
                    <div className='brand_swiper margin-bottom-1 margin-bottom-mobile-1'>
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={48}
                            slidesPerView={'auto'}
                            loop={true}
                            initialSlide={1}
                            pagination={{ clickable: true }}
                            // navigation
                            breakpoints={{
                                768: { slidesPerView: 1, spaceBetween: 30 },
                                576: { slidesPerView: 1, spaceBetween: 0 },
                                0: { slidesPerView: 1, spaceBetween: 0 },
                            }}
                            className='position-relative'
                        >
                            <SwiperSlide>
                                <div className="swiper-slide swiper-slide-img1"></div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide swiper-slide-img2"></div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide swiper-slide-img3"></div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>

            <div className="index_brand margin-bottom-1 margin-bottom-mobile-1`">
                <div className="container container-mobile">
                    <div className="index_brand_title_mobile margin-bottom-mobile-1"></div>
                    <div className="brand-content brand-content-lg p-4">
                        <h5 className="fw-bold">
                            在時光的流轉中，我們拾起那些微小而珍貴的瞬間，將它們凝結成為日常中的詩意與美好。讓你在平凡的生活中尋找到溫柔與浪漫的所在，邀請你一同拾取屬於你的光陰之美。
                        </h5>
                        <h4 className="fw-bold text-end">——拾柒</h4>
                    </div>

                    <div className="brand-content-mobile">
                        <div className="d-flex justify-content-center">
                            <h5 className="fw-bold pb-2 mb-3">拾柒</h5>
                        </div>
                        <p className="fw-bold text-center">在時光的流轉中，我們拾起那些微小而珍貴的瞬間，將它們凝結成為日常中的詩意與美好。讓你在平凡的生活中尋找到溫柔與浪漫的所在，邀請你一同拾取屬於你的光陰之美。</p>
                    </div>
                </div>
            </div>

            <div className="container container-mobile">
                <div className="product_types d-flex flex-sm-row flex-column align-items-center margin-bottom-1 margin-bottom-mobile-1">

                    <div className="col">
                        <div className="product_type_Bg d-flex align-items-center">
                            <div className="d-flex flex-column m-auto">
                                <h3 className="m-auto text-white fw-bold">拾柒</h3>
                                <h3 className="m-auto text-white fw-bold">主打選品</h3>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="product_type">
                            <Link to="/">
                                <div className="product_type01 d-flex align-items-center">
                                    <div className="d-flex flex-column m-auto">
                                        <h4 className="text-white fw-bold py-3">花藝</h4>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="col">
                        <div className="product_type">
                            <Link to="/">
                                <div className="product_type02 d-flex align-items-center">
                                    <div className="d-flex flex-column m-auto">
                                        <h4 className="text-white fw-bold py-3">香水</h4>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="col">
                        <div className="product_type">
                            <Link to="/">
                                <div className="product_type03 d-flex align-items-center">
                                    <div className="d-flex flex-column m-auto">
                                        <h4 className="text-white fw-bold py-3">陶藝</h4>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            <div className="recommend_product">
                <div className="container container-mobile">
                    <HotProducts />
                </div>
            </div>

            <div className="container container-mobile">
                <div className="news">
                    <div className="news_title d-flex justify-content-between align-items-center margin-bottom-2">
                        <h4 className="fw-bold">最新消息</h4>

                        {/* <div className="news_swiper d-lg-none">
                            <div className="swiper mySwiper2">
                                <div className="swiper-wrapper">

                                    <div className="swiper-slide">
                                        <div className="col card border-0 px-0">
                                            <Link to="/">
                                                <div className="card p-4">
                                                    <img src="../assets/images/news_01.png" className="card-img-top mb-4" alt="news_01"
                                                        style="height: 100%;" />
                                                    <div className="card-body p-0 h-auto d-flex flex-column justify-content-between">
                                                        <div className="d-flex flex-column">
                                                            <h5 className="card-title fw-bold">精選手製小品特惠活動</h5>
                                                            <p className="card-text fs-9">這次活動精選了我們的手工製作精品，讓您以優惠價格購得心儀的小品。每一件作品都經過匠心獨運，限時特惠，機會難得，千萬不要錯過！</p>
                                                        </div>
                                                        <p className="card-text fs-10">2024/08/20</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                                <div className="swiper-button-next2"></div>
                                <div className="swiper-button-prev2"></div>
                            </div>
                        </div> */}

                        <Link className="btn index_btn rounded-pill" to="/news" role="button">
                            <p className="fs-8 fw-bold">查看更多</p>
                        </Link>
                    </div>

                    <div className="news_card d-lg-flex gap-4 d-none">

                        <Link to="/">
                            <div className="card p-4 card-enhanced">
                                <img src={SevenImgs.news_01} className="card-img-top mb-4" alt="news_01" style={{ height: '100%' }} />
                                <div className="card-body p-0 h-auto d-flex flex-column justify-content-between">
                                    <div className="d-flex flex-column">
                                        <h5 className="card-title fw-bold">精選手製小品特惠活動</h5>
                                        <p className="card-text fs-9">這次活動精選了我們的手工製作精品，讓您以優惠價格購得心儀的小品。每一件作品都經過匠心獨運，限時特惠，機會難得，千萬不要錯過！</p>
                                    </div>
                                    <p className="card-text fs-10">2024/08/20</p>
                                </div>
                            </div>
                        </Link>

                        <Link to="/">
                            <div className="card p-4 card-enhanced">
                                <img src={SevenImgs.news_03} className="card-img-top mb-4" alt="news_03" style={{ height: '100%' }} />
                                <div className="card-body p-0 h-auto d-flex flex-column justify-content-between">
                                    <div className="d-flex flex-column">
                                        <h5 className="card-title fw-bold">父親節特惠活動</h5>
                                        <p className="card-text fs-9">父親節將至，為您的父親挑選一份別具意義的禮物吧！我們特別推出父親節專屬優惠，讓您以優惠價格為父親送上一份溫馨的心意。</p>
                                    </div>
                                    <p className="card-text fs-10">2024/08/31</p>
                                </div>
                            </div>
                        </Link>

                        <Link to="/">
                            <div className="card p-4 card-enhanced">
                                <img src={SevenImgs.news_02} className="card-img-top mb-4" alt="news_02" style={{ height: '100%' }} />
                                <div className="card-body p-0 h-auto d-flex flex-column justify-content-between">
                                    <div className="d-flex flex-column">
                                        <h5 className="card-title fw-bold">本月壽星優惠通知</h5>
                                        <p className="card-text fs-9">祝本月壽星生日快樂！我們特別為您準備了專屬優惠，作為生日禮物的一部分。憑此通知即可在結帳時享受折扣，讓您的生日更加難忘。</p>
                                    </div>
                                    <p className="card-text fs-10">2024/10/23</p>
                                </div>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}



export default Home