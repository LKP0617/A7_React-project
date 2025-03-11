import Header from '../layout/Header';
import Footer from '../layout/Footer';
import sevenImgs from '../assets/images/seven/SevenImgs';
import Icons from '../assets/images/icons/Icons';
import { Link } from 'react-router';

function checkout() {
    return (
        <>
            <Header />

            <div className="container">

                <div className="shopping_status_checkout">
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

                <Link to='/cart' type="button" class="btn d-flex align-items-center backCartBtn">
                    <img src={Icons.chevron_left} alt="chevron_left" style={{ width: "32px" }} />
                    <p className='ms-1'>返回購物車</p>
                </Link>

                <div className="cartform_style product_list col">
                    <div className="product_list_title p-2">
                        <div className="form-check d-flex align-items-center gap-2">
                            <input className="form-check-input" type="checkbox" id="allProduct" />
                            <label className="form-check-label" htmlFor="allProduct">全部商品</label>
                        </div>
                    </div>

                    <div className="cart_brand_product">

                        <div className="card mt-3 m-md-3 m-1 border-2">
                            <div className="card-header">
                                <h6 className='fw-bolder text-neutral-100'>Nega Flower</h6>
                            </div>
                            <div className="card-body">

                                <div className="cartproduct-list d-flex justify-content-between align-items-center p-4 border-bottom">
                                    <div className='d-flex align-items-center'>
                                        <img src="/src/assets/images/negaflower/開幕花禮｜奶油燕麥盆花.jpeg" className='me-4' alt="開幕花禮｜奶油燕麥盆花" style={{ width: "96px" }} />
                                        <div className="ms-2">
                                            <p>開幕花禮 | 奶油燕麥盆花</p>
                                            <span className='fs-9 text-neutral-100 specification'>規格 奶油燕麥</span>
                                        </div>
                                    </div>
                                    <div className='d-flex gap-4'>
                                        <p>NT$ 550</p>
                                        <p>X 1</p>
                                        <p>NT$ 550</p>
                                    </div>
                                </div>

                                <div className="cartproduct-list d-flex justify-content-between align-items-center p-4 border-bottom">
                                    <input className="form-check-input" type="checkbox" id="nega_flower" />
                                    <div className='d-flex align-items-center'>
                                        <img src="/src/assets/images/negaflower/開幕花禮｜奶油燕麥盆花.jpeg" className='me-4' alt="開幕花禮｜奶油燕麥盆花" style={{ width: "96px" }} />
                                        <div className="ms-2">
                                            <p>開幕花禮 | 奶油燕麥盆花</p>
                                            <span className='fs-9 text-neutral-100 specification'>規格 奶油燕麥</span>
                                        </div>
                                    </div>
                                    <p>NT$ 550</p>
                                    <div className="product_num">
                                        <select id="inputState" className="form-select" defaultValue="1">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                    <button type="button" className="btn border border-1 rounded-pill delbtn">刪除</button>
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
                                <button type="button" className="btn btn-outline-danger rounded-pill fs-8 my-2 me-3">使用優惠</button>
                            </div>

                        </div>

                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default checkout