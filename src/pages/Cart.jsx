import { useEffect, useRef, useState } from 'react'
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import SevenImgs from '../assets/images/seven/SevenImgs';
import Icons from '../assets/images/icons/Icons';
import { Link } from 'react-router';
import { Modal } from 'bootstrap';

function Cart() {

    const couponModalRef = useRef(null);
    const [modalMode, setModalMode] = useState(null);

    useEffect(() => {
        new Modal(couponModalRef.current, { backdrop: false });
    }, [])

    const handleOpenCouponModal = (mode) => {
        setModalMode(mode);

        const modalInstance = Modal.getInstance(couponModalRef.current);
        modalInstance.show();
    }

    return (
        <>
            <Header />

            <div className="container">

                <div className="shopping_status_cart">
                    <div className="progress-stacked rounded-pill">
                        <div className="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style={{ width: "33.33%" }}>
                            <div className="progress-bar stepbar1">
                                <p>選擇結帳商品</p>
                            </div>
                        </div>
                        <div className="progress" role="progressbar" aria-label="Segment two" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style={{ width: "33.33%" }}>
                            <div className="progress-bar stepbar2">
                                <p>填寫地址與付款方式</p>
                            </div>
                        </div>
                        <div className="progress" role="progressbar" aria-label="Segment three" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{ width: "33.33%" }}>
                            <div className="progress-bar stepbar3">
                                <p>訂單成立</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cart_content d-sm-flex flex-column flex-row-reverse justify-content-between margin-bottom-1 margin-bottom-mobile-1">

                    <div className="cartform_style total_price col-3">
                        <div className="total_price_title">
                            <div className='brand_total_price border-bottom mb-3'>
                                <div className='text-start mb-3'>
                                    <h6 className='fw-bolder'>Nega flower</h6>
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                    <p>共 2 項商品</p>
                                    <p>NT$ 1100</p>
                                </div>
                                <div className="d-flex justify-content-between mb-3 fs-9">
                                    <p>折扣</p>
                                    <p>- NT$ 250</p>
                                </div>
                            </div>
                            <div className='brand_total_price border-bottom mb-3'>
                                <div className='text-start mb-3'>
                                    <h6 className='fw-bolder'>陶之家</h6>
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                    <p>共 1 項商品</p>
                                    <p>NT$ 550</p>
                                </div>
                                <div className="d-flex justify-content-between mb-3 fs-9">
                                    <p>折扣</p>
                                    <p>- NT$ 0</p>
                                </div>
                            </div>
                            <div className="pricetotal d-flex justify-content-between mt-4">
                                <h5 className='fw-bold'>金額小計</h5>
                                <h5 className='fw-bold'>NT$ 1400</h5>
                            </div>
                        </div>
                        <div className="total_price_footer d-flex flex-column gap-2 align-items-center">
                            <Link to="/checkout" className="btn rounded-pill d-flex justify-content-center gap-1" role="button" style={{ width: "100%" }}>
                                <img src={Icons.shopping_bag} alt="chevron-left" style={{ width: "24px" }} />
                                <p>前往結帳</p>
                            </Link>
                            <Link to="/products" className="btn rounded-pill d-flex justify-content-center gap-1" role="button" style={{ width: "100%" }}>
                                <img src={Icons.chevron_left} alt="chevron-left" style={{ width: "24px" }} />
                                <p>返回購物</p>
                            </Link>
                        </div>
                    </div>

                    <div className="cartform_style product_list col-7">
                        <div className="product_list_title p-2">
                            <div className="form-check d-flex align-items-center gap-2">
                                <input className="form-check-input" type="checkbox" id="allProduct" />
                                <label className="form-check-label" htmlFor="allProduct">全部商品</label>
                            </div>
                        </div>

                        <div className="cart_brand_product">

                            <div className="card mt-3 m-md-3 m-1 border-2">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <div className="">
                                        <input className="form-check-input me-2" type="checkbox" id="nega_flower" />
                                        <label className="form-check-label" htmlFor="nega_flower">
                                            <h6 className='fw-bolder text-neutral-100'>Nega Flower</h6>
                                        </label>
                                    </div>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>

                                <div className="card-body">
                                    <div className="cartproduct-list d-flex justify-content-between align-items-center p-4 border-bottom">
                                        <div className='d-flex align-items-center'>
                                            <input className="form-check-input me-2" type="checkbox" id="nega_flower" />
                                            <img src="/src/assets/images/negaflower/開幕花禮｜奶油燕麥盆花.jpeg" className='mx-4' alt="開幕花禮｜奶油燕麥盆花" style={{ width: "96px" }} />
                                            <div className="ms-2">
                                                <p>開幕花禮 | 奶油燕麥盆花</p>
                                                <span className='fs-9 text-neutral-100 specification'>規格 奶油燕麥</span>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <p className='fw-bold me-2'>NT$ 550</p>
                                            <select id="inputState" className="form-select mx-4" defaultValue="1" style={{ width: '96px' }}>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                            <button type="button" className="btn border border-1 rounded-pill ms-2 delbtn">刪除</button>
                                        </div>
                                    </div>

                                    <div className="cartproduct-list d-flex justify-content-between align-items-center p-4 border-bottom">
                                        <div className='d-flex align-items-center'>
                                            <input className="form-check-input me-2" type="checkbox" id="nega_flower" />
                                            <img src="/src/assets/images/negaflower/開幕花禮｜奶油燕麥盆花.jpeg" className='mx-4' alt="開幕花禮｜奶油燕麥盆花" style={{ width: "96px" }} />
                                            <div className="ms-2">
                                                <p>開幕花禮 | 奶油燕麥盆花</p>
                                                <span className='fs-9 text-neutral-100 specification'>規格 奶油燕麥</span>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <p className='fw-bold me-2'>NT$ 550</p>
                                            <select id="inputState" className="form-select mx-4" defaultValue="1" style={{ width: '96px' }}>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                            <button type="button" className="btn border border-1 rounded-pill ms-2 delbtn">刪除</button>
                                        </div>
                                    </div>

                                </div>

                                <div className='cart_coupon d-flex justify-content-between align-items-center m-3'>
                                    <div className='coupon_title d-flex gap-3 ms-3'>
                                        <div className='d-flex align-items-center'>
                                            <img src={Icons.TicketPerforated} className='me-2' alt="TicketPerforated" />
                                            <h6>套用優惠</h6>
                                        </div>
                                        <img src={Icons.chevron_right} alt="chevron_right" />
                                        <div>
                                            <h6 className='coupon_detail'>全館滿1000享50元優惠</h6>
                                            <h6 className='couponCode_detail'>優惠碼 17BIRTHDAY200</h6>
                                        </div>
                                    </div>
                                    <button onClick={() => handleOpenCouponModal(null)} type="button" className="btn btn-outline-danger rounded-pill fs-8 my-2 me-3">使用優惠</button>
                                </div>

                                <div className="card-footer border-bottom border-2">
                                    <button
                                        className="btn d-flex align-items-center gap-1 justify-content-center w-100"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#brand_1_plusProduct"
                                        aria-expanded="false"
                                        aria-controls="brand_1_plusProduct">
                                        <h6>可加購商品</h6>
                                        <img src={Icons.chevron_up} alt="chevron_up" style={{ width: "32px" }} />
                                    </button>
                                </div>

                                <div className="collapse" id="brand_1_plusProduct">
                                    <div className="shopcart_plusProduct d-flex gap-3 flex-wrap">

                                        <div className="card border-2 px-0 rounded-bottom-0">
                                            <div className="position-relative">
                                                <img src="/src/assets/images/negaflower/可可棕配色零食花束.jpg" className="card-img-top" alt="可可棕配色零食花束" />
                                                <button
                                                    className="plus-btn position-absolute bottom-0 end-0 border-1 rounded-circle p-0">
                                                    <img className="plus-icon px-1 py-1" src={Icons.plus} alt="plus" />
                                                </button>
                                            </div>
                                            <div className="card-body d-md-flex d-none gap-3">
                                                <img src="src/assets/images/negaflower/negaflower_logo.jpg" alt="nega" style={{ width: "61px", height: "61px" }} />
                                                <div className="d-flex flex-column justify-content-center">
                                                    <p className="fs-9 mb-2">Nega Flower</p>
                                                    <p className="fw-bold text-truncate">透明提袋50cm</p>
                                                    <p className="fw-bold mt-1">NT$ 30</p>
                                                </div>
                                            </div>
                                            <div className="card-body d-md-none d-flex flex-column gap-2">
                                                <div className="d-flex justify-content-center align-items-center gap-3">
                                                    <img src="src/assets/images/negaflower/negaflower_logo.jpg" alt="nega" style={{ width: "24px", height: "24px" }} />
                                                    <p className="fs-10">Nega Flower</p>
                                                </div>
                                                <div className="d-flex flex-column justify-content-center gap-1">
                                                    <p className="fw-bold fs-9 text-center text-truncate">透明提袋50cm</p>
                                                    <p className="fw-bold fs-9 text-center">NT$ 30</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card border-2 px-0 rounded-bottom-0">
                                            <div className="position-relative">
                                                <img src="/src/assets/images/negaflower/可可棕配色零食花束.jpg" className="card-img-top" alt="可可棕配色零食花束" />
                                                <button
                                                    className="plus-btn position-absolute bottom-0 end-0 border-1 rounded-circle p-0">
                                                    <img className="plus-icon px-1 py-1" src={Icons.plus} alt="plus" />
                                                </button>
                                            </div>
                                            <div className="card-body d-md-flex d-none gap-3">
                                                <img src="src/assets/images/negaflower/negaflower_logo.jpg" alt="nega" style={{ width: "61px", height: "61px" }} />
                                                <div className="d-flex flex-column justify-content-center">
                                                    <p className="fs-9 mb-2">Nega Flower</p>
                                                    <p className="fw-bold text-truncate">透明提袋100cm</p>
                                                    <p className="fw-bold mt-1">NT$ 40</p>
                                                </div>
                                            </div>
                                            <div className="card-body d-md-none d-flex flex-column gap-2">
                                                <div className="d-flex justify-content-center align-items-center gap-3">
                                                    <img src="src/assets/images/negaflower/negaflower_logo.jpg" alt="nega" style={{ width: "24px", height: "24px" }} />
                                                    <p className="fs-10">Nega Flower</p>
                                                </div>
                                                <div className="d-flex flex-column justify-content-center gap-1">
                                                    <p className="fw-bold fs-9 text-center text-truncate">透明提袋100cm</p>
                                                    <p className="fw-bold fs-9 text-center">NT$ 40</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card border-2 px-0 rounded-bottom-0">
                                            <div className="position-relative">
                                                <img src="/src/assets/images/negaflower/可可棕配色零食花束.jpg" className="card-img-top" alt="可可棕配色零食花束" />
                                                <button
                                                    className="plus-btn position-absolute bottom-0 end-0 border-1 rounded-circle p-0">
                                                    <img className="plus-icon px-1 py-1" src={Icons.plus} alt="plus" />
                                                </button>
                                            </div>
                                            <div className="card-body d-md-flex d-none gap-3">
                                                <img src="/src/assets/images/negaflower/negaflower_logo.jpg" alt="nega" style={{ width: "61px", height: "61px" }} />
                                                <div className="d-flex flex-column justify-content-center">
                                                    <p className="fs-9 mb-2">Nega Flower</p>
                                                    <p className="fw-bold text-truncate">透明提袋150cm</p>
                                                    <p className="fw-bold mt-1">NT$ 50</p>
                                                </div>
                                            </div>
                                            <div className="card-body d-md-none d-flex flex-column gap-2">
                                                <div className="d-flex justify-content-center align-items-center gap-3">
                                                    <img src="/src/assets/images/negaflower/negaflower_logo.jpg" alt="nega" style={{ width: "24px", height: "24px" }} />
                                                    <p className="fs-10">Nega Flower</p>
                                                </div>
                                                <div className="d-flex flex-column justify-content-center gap-1">
                                                    <p className="fw-bold fs-9 text-center text-truncate">透明提袋150cm</p>
                                                    <p className="fw-bold fs-9 text-center">NT$ 50</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card border-2 px-0 rounded-bottom-0">
                                            <div className="position-relative">
                                                <img src="/src/assets/images/negaflower/可可棕配色零食花束.jpg" className="card-img-top" alt="剪刀" />
                                                <button
                                                    className="plus-btn position-absolute bottom-0 end-0 border-1 rounded-circle p-0">
                                                    <img className="plus-icon px-1 py-1" src={Icons.plus} alt="plus" />
                                                </button>
                                            </div>
                                            <div className="card-body d-md-flex d-none gap-3">
                                                <img src="/src/assets/images/negaflower/negaflower_logo.jpg" alt="nega" style={{ width: "61px", height: "61px" }} />
                                                <div className="d-flex flex-column justify-content-center">
                                                    <p className="fs-9 mb-2">Nega Flower</p>
                                                    <p className="fw-bold text-truncate">剪刀</p>
                                                    <p className="fw-bold mt-1">NT$ 250</p>
                                                </div>
                                            </div>
                                            <div className="card-body d-md-none d-flex flex-column gap-2">
                                                <div className="d-flex justify-content-center align-items-center gap-3">
                                                    <img src="/src/assets/images/negaflower/negaflower_logo.jpg" alt="nega" style={{ width: "24px", height: "24px" }} />
                                                    <p className="fs-10">Nega Flower</p>
                                                </div>
                                                <div className="d-flex flex-column justify-content-center gap-1">
                                                    <p className="fw-bold fs-9 text-center text-truncate">剪刀</p>
                                                    <p className="fw-bold fs-9 text-center">NT$ 250</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card border-2 px-0 rounded-bottom-0">
                                            <div className="position-relative">
                                                <img src="/src/assets/images/negaflower/可可棕配色零食花束.jpg" className="card-img-top" alt="噴罐" />
                                                <button
                                                    className="plus-btn position-absolute bottom-0 end-0 border-1 rounded-circle p-0">
                                                    <img className="plus-icon px-1 py-1" src={Icons.plus} alt="plus" />
                                                </button>
                                            </div>
                                            <div className="card-body d-md-flex d-none gap-3">
                                                <img src="/src/assets/images/negaflower/negaflower_logo.jpg" alt="nega" style={{ width: "61px", height: "61px" }} />
                                                <div className="d-flex flex-column justify-content-center">
                                                    <p className="fs-9 mb-2">Nega Flower</p>
                                                    <p className="fw-bold text-truncate">噴罐</p>
                                                    <p className="fw-bold mt-1">NT$ 80</p>
                                                </div>
                                            </div>
                                            <div className="card-body d-md-none d-flex flex-column gap-2">
                                                <div className="d-flex justify-content-center align-items-center gap-3">
                                                    <img src="/src/assets/images/negaflower/negaflower_logo.jpg" alt="nega" style={{ width: "24px", height: "24px" }} />
                                                    <p className="fs-10">Nega Flower</p>
                                                </div>
                                                <div className="d-flex flex-column justify-content-center gap-1">
                                                    <p className="fw-bold fs-9 text-center text-truncate">噴罐</p>
                                                    <p className="fw-bold fs-9 text-center">NT$ 80</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card border-2 px-0 rounded-bottom-0">
                                            <div className="position-relative">
                                                <img src="/src/assets/images/negaflower/可可棕配色零食花束.jpg" className="card-img-top" alt="卡片" />
                                                <button
                                                    className="plus-btn position-absolute bottom-0 end-0 border-1 rounded-circle p-0">
                                                    <img className="plus-icon px-1 py-1" src={Icons.plus} alt="plus" />
                                                </button>
                                            </div>
                                            <div className="card-body d-md-flex d-none gap-3">
                                                <img src="/src/assets/images/negaflower/negaflower_logo.jpg" alt="nega" style={{ width: "61px", height: "61px" }} />
                                                <div className="d-flex flex-column justify-content-center">
                                                    <p className="fs-9 mb-2">Nega Flower</p>
                                                    <p className="fw-bold text-truncate">卡片</p>
                                                    <p className="fw-bold mt-1">NT$ 50</p>
                                                </div>
                                            </div>
                                            <div className="card-body d-md-none d-flex flex-column gap-2">
                                                <div className="d-flex justify-content-center align-items-center gap-3">
                                                    <img src="/src/assets/images/negaflower/negaflower_logo.jpg" alt="nega" style={{ width: "24px", height: "24px" }} />
                                                    <p className="fs-10">Nega Flower</p>
                                                </div>
                                                <div className="d-flex flex-column justify-content-center gap-1">
                                                    <p className="fw-bold fs-9 text-center text-truncate">卡片</p>
                                                    <p className="fw-bold fs-9 text-center">NT$ 50</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="card mt-3 m-md-3 m-1 border-2">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <div className="">
                                        <input className="form-check-input me-2" type="checkbox" id="toa" />
                                        <label className="form-check-label" htmlFor="toa">
                                            <h6 className='fw-bolder text-neutral-100'>陶之家</h6>
                                        </label>
                                    </div>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="card-body">

                                    <div className="cartproduct-list d-flex justify-content-between align-items-center p-4 border-bottom">
                                        <div className='d-flex align-items-center'>
                                            <input className="form-check-input me-2" type="checkbox" id="nega_flower" />
                                            <img src="/src/assets/images/negaflower/開幕花禮｜奶油燕麥盆花.jpeg" className='mx-4' alt="開幕花禮｜奶油燕麥盆花" style={{ width: "96px" }} />
                                            <div className="ms-2">
                                                <p>開幕花禮 | 奶油燕麥盆花</p>
                                                <span className='fs-9 text-neutral-100 specification'>規格 奶油燕麥</span>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <p className='fw-bold me-2'>NT$ 550</p>
                                            <select id="inputState" className="form-select mx-4" defaultValue="1" style={{ width: '96px' }}>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                            <button type="button" className="btn border border-1 rounded-pill ms-2 delbtn">刪除</button>
                                        </div>
                                    </div>

                                </div>

                                <div className='cart_coupon d-flex justify-content-between align-items-center m-3'>
                                    <div className='d-flex gap-3 ms-3'>
                                        <div className='d-flex'>
                                            <img src={Icons.TicketPerforated} className='me-2' alt="TicketPerforated" />
                                            <h6>套用優惠</h6>
                                        </div>
                                        <img src={Icons.chevron_right} alt="chevron_right" />
                                        <h6 className='coupon_noDetail'>尚未使用任何優惠</h6>
                                    </div>
                                    <button onClick={() => handleOpenCouponModal(null)} type="button" className="btn btn-outline-danger rounded-pill fs-8 my-2 me-3">使用優惠</button>
                                </div>

                                <div className="card-footer border-bottom border-2">
                                    <button
                                        className="btn d-flex align-items-center gap-1 justify-content-center w-100"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#brand_2_plusProduct"
                                        aria-expanded="false"
                                        aria-controls="brand_2_plusProduct">
                                        <h6>可加購商品</h6>
                                        <img src={Icons.chevron_up} alt="chevron_up" style={{ width: "32px" }} />
                                    </button>
                                </div>

                                <div className="collapse" id="brand_2_plusProduct">
                                    <div className="shopcart_plusProduct d-flex gap-3 flex-wrap">

                                        <div className="card border-2 px-0 rounded-bottom-0">
                                            <div className="position-relative">
                                                <img src="/src/assets/images/negaflower/可可棕配色零食花束.jpg" className="card-img-top" alt="可可棕配色零食花束" />
                                                <button
                                                    className="plus-btn position-absolute bottom-0 end-0 border-1 rounded-circle p-0">
                                                    <img className="plus-icon px-1 py-1" src={Icons.plus} alt="plus" />
                                                </button>
                                            </div>
                                            <div className="card-body d-md-flex d-none gap-3">
                                                <img src="src/assets/images/negaflower/negaflower_logo.jpg" alt="nega" style={{ width: "61px", height: "61px" }} />
                                                <div className="d-flex flex-column justify-content-center">
                                                    <p className="fs-9 mb-2">Nega Flower</p>
                                                    <p className="fw-bold text-truncate">透明提袋50cm</p>
                                                    <p className="fw-bold mt-1">NT$ 30</p>
                                                </div>
                                            </div>
                                            <div className="card-body d-md-none d-flex flex-column gap-2">
                                                <div className="d-flex justify-content-center align-items-center gap-3">
                                                    <img src="src/assets/images/negaflower/negaflower_logo.jpg" alt="nega" style={{ width: "24px", height: "24px" }} />
                                                    <p className="fs-10">Nega Flower</p>
                                                </div>
                                                <div className="d-flex flex-column justify-content-center gap-1">
                                                    <p className="fw-bold fs-9 text-center text-truncate">透明提袋50cm</p>
                                                    <p className="fw-bold fs-9 text-center">NT$ 30</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card border-2 px-0 rounded-bottom-0">
                                            <div className="position-relative">
                                                <img src="/src/assets/images/negaflower/可可棕配色零食花束.jpg" className="card-img-top" alt="可可棕配色零食花束" />
                                                <button
                                                    className="plus-btn position-absolute bottom-0 end-0 border-1 rounded-circle p-0">
                                                    <img className="plus-icon px-1 py-1" src={Icons.plus} alt="plus" />
                                                </button>
                                            </div>
                                            <div className="card-body d-md-flex d-none gap-3">
                                                <img src="src/assets/images/negaflower/negaflower_logo.jpg" alt="nega" style={{ width: "61px", height: "61px" }} />
                                                <div className="d-flex flex-column justify-content-center">
                                                    <p className="fs-9 mb-2">Nega Flower</p>
                                                    <p className="fw-bold text-truncate">透明提袋100cm</p>
                                                    <p className="fw-bold mt-1">NT$ 40</p>
                                                </div>
                                            </div>
                                            <div className="card-body d-md-none d-flex flex-column gap-2">
                                                <div className="d-flex justify-content-center align-items-center gap-3">
                                                    <img src="src/assets/images/negaflower/negaflower_logo.jpg" alt="nega" style={{ width: "24px", height: "24px" }} />
                                                    <p className="fs-10">Nega Flower</p>
                                                </div>
                                                <div className="d-flex flex-column justify-content-center gap-1">
                                                    <p className="fw-bold fs-9 text-center text-truncate">透明提袋100cm</p>
                                                    <p className="fw-bold fs-9 text-center">NT$ 40</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card border-2 px-0 rounded-bottom-0">
                                            <div className="position-relative">
                                                <img src="/src/assets/images/negaflower/可可棕配色零食花束.jpg" className="card-img-top" alt="可可棕配色零食花束" />
                                                <button
                                                    className="plus-btn position-absolute bottom-0 end-0 border-1 rounded-circle p-0">
                                                    <img className="plus-icon px-1 py-1" src={Icons.plus} alt="plus" />
                                                </button>
                                            </div>
                                            <div className="card-body d-md-flex d-none gap-3">
                                                <img src="/src/assets/images/negaflower/negaflower_logo.jpg" alt="nega" style={{ width: "61px", height: "61px" }} />
                                                <div className="d-flex flex-column justify-content-center">
                                                    <p className="fs-9 mb-2">Nega Flower</p>
                                                    <p className="fw-bold text-truncate">透明提袋150cm</p>
                                                    <p className="fw-bold mt-1">NT$ 50</p>
                                                </div>
                                            </div>
                                            <div className="card-body d-md-none d-flex flex-column gap-2">
                                                <div className="d-flex justify-content-center align-items-center gap-3">
                                                    <img src="/src/assets/images/negaflower/negaflower_logo.jpg" alt="nega" style={{ width: "24px", height: "24px" }} />
                                                    <p className="fs-10">Nega Flower</p>
                                                </div>
                                                <div className="d-flex flex-column justify-content-center gap-1">
                                                    <p className="fw-bold fs-9 text-center text-truncate">透明提袋150cm</p>
                                                    <p className="fw-bold fs-9 text-center">NT$ 50</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card border-2 px-0 rounded-bottom-0">
                                            <div className="position-relative">
                                                <img src="/src/assets/images/negaflower/可可棕配色零食花束.jpg" className="card-img-top" alt="剪刀" />
                                                <button
                                                    className="plus-btn position-absolute bottom-0 end-0 border-1 rounded-circle p-0">
                                                    <img className="plus-icon px-1 py-1" src={Icons.plus} alt="plus" />
                                                </button>
                                            </div>
                                            <div className="card-body d-md-flex d-none gap-3">
                                                <img src="/src/assets/images/negaflower/negaflower_logo.jpg" alt="nega" style={{ width: "61px", height: "61px" }} />
                                                <div className="d-flex flex-column justify-content-center">
                                                    <p className="fs-9 mb-2">Nega Flower</p>
                                                    <p className="fw-bold text-truncate">剪刀</p>
                                                    <p className="fw-bold mt-1">NT$ 250</p>
                                                </div>
                                            </div>
                                            <div className="card-body d-md-none d-flex flex-column gap-2">
                                                <div className="d-flex justify-content-center align-items-center gap-3">
                                                    <img src="/src/assets/images/negaflower/negaflower_logo.jpg" alt="nega" style={{ width: "24px", height: "24px" }} />
                                                    <p className="fs-10">Nega Flower</p>
                                                </div>
                                                <div className="d-flex flex-column justify-content-center gap-1">
                                                    <p className="fw-bold fs-9 text-center text-truncate">剪刀</p>
                                                    <p className="fw-bold fs-9 text-center">NT$ 250</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card border-2 px-0 rounded-bottom-0">
                                            <div className="position-relative">
                                                <img src="/src/assets/images/negaflower/可可棕配色零食花束.jpg" className="card-img-top" alt="噴罐" />
                                                <button
                                                    className="plus-btn position-absolute bottom-0 end-0 border-1 rounded-circle p-0">
                                                    <img className="plus-icon px-1 py-1" src={Icons.plus} alt="plus" />
                                                </button>
                                            </div>
                                            <div className="card-body d-md-flex d-none gap-3">
                                                <img src="/src/assets/images/negaflower/negaflower_logo.jpg" alt="nega" style={{ width: "61px", height: "61px" }} />
                                                <div className="d-flex flex-column justify-content-center">
                                                    <p className="fs-9 mb-2">Nega Flower</p>
                                                    <p className="fw-bold text-truncate">噴罐</p>
                                                    <p className="fw-bold mt-1">NT$ 80</p>
                                                </div>
                                            </div>
                                            <div className="card-body d-md-none d-flex flex-column gap-2">
                                                <div className="d-flex justify-content-center align-items-center gap-3">
                                                    <img src="/src/assets/images/negaflower/negaflower_logo.jpg" alt="nega" style={{ width: "24px", height: "24px" }} />
                                                    <p className="fs-10">Nega Flower</p>
                                                </div>
                                                <div className="d-flex flex-column justify-content-center gap-1">
                                                    <p className="fw-bold fs-9 text-center text-truncate">噴罐</p>
                                                    <p className="fw-bold fs-9 text-center">NT$ 80</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card border-2 px-0 rounded-bottom-0">
                                            <div className="position-relative">
                                                <img src="/src/assets/images/negaflower/可可棕配色零食花束.jpg" className="card-img-top" alt="卡片" />
                                                <button
                                                    className="plus-btn position-absolute bottom-0 end-0 border-1 rounded-circle p-0">
                                                    <img className="plus-icon px-1 py-1" src={Icons.plus} alt="plus" />
                                                </button>
                                            </div>
                                            <div className="card-body d-md-flex d-none gap-3">
                                                <img src="/src/assets/images/negaflower/negaflower_logo.jpg" alt="nega" style={{ width: "61px", height: "61px" }} />
                                                <div className="d-flex flex-column justify-content-center">
                                                    <p className="fs-9 mb-2">Nega Flower</p>
                                                    <p className="fw-bold text-truncate">卡片</p>
                                                    <p className="fw-bold mt-1">NT$ 50</p>
                                                </div>
                                            </div>
                                            <div className="card-body d-md-none d-flex flex-column gap-2">
                                                <div className="d-flex justify-content-center align-items-center gap-3">
                                                    <img src="/src/assets/images/negaflower/negaflower_logo.jpg" alt="nega" style={{ width: "24px", height: "24px" }} />
                                                    <p className="fs-10">Nega Flower</p>
                                                </div>
                                                <div className="d-flex flex-column justify-content-center gap-1">
                                                    <p className="fw-bold fs-9 text-center text-truncate">卡片</p>
                                                    <p className="fw-bold fs-9 text-center">NT$ 50</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* 優惠券Modal */}
                <div ref={couponModalRef} className="modal" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className='d-flex gap-2'>
                                    <img src={Icons.TicketPerforated} className='me-1' alt="TicketPerforated" />
                                    <h6 className="modal-title">優惠</h6>
                                </div>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p>Modal body text goes here.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div >

            <Footer />
        </>
    )
}

export default Cart