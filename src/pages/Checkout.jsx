import { useEffect, useRef, useState } from 'react'
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import sevenImgs from '../assets/images/seven/SevenImgs';
import Icons from '../assets/images/icons/Icons';
import { Link } from 'react-router';

function checkout() {
    const [selectedPayment, setSelectedPayment] = useState("credit_card");
    const [isChecked, setIsChecked] = useState(false);
    const [shippingMethod, setShippingMethod] = useState("選擇取貨方式");

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

                <Link to='/cart' type="button" className="btn d-flex align-items-center backCartBtn">
                    <img src={Icons.chevron_left} alt="chevron_left" style={{ width: "32px" }} />
                    <p className='ms-1'>返回購物車</p>
                </Link>

                <div className="cartform_style product_list col">
                    <div className="cart_brand_product">

                        <div className='cart_detail mt-3 mx-3 p-3'>
                            <h5 className='text-center'>訂單商品</h5>
                        </div>

                        <div className="card mt-3 m-md-3 m-1 border-2">
                            <div className="card-header">
                                <h6 className='fw-bolder text-neutral-100'>Nega Flower</h6>
                            </div>
                            <div className="card-body">
                                <div className='d-flex justify-content-end px-3'>
                                    <h6 className=''>單價</h6>
                                    <h6 className=''>數量</h6>
                                    <h6 className=''>總價</h6>
                                </div>
                                <div className="cartproduct-list d-flex justify-content-between align-items-center p-3 border-bottom">
                                    <div className='d-flex align-items-center'>
                                        <img src="/src/assets/images/negaflower/開幕花禮｜奶油燕麥盆花.jpeg" className='me-4' alt="開幕花禮｜奶油燕麥盆花" style={{ width: "96px" }} />
                                        <div className="ms-2">
                                            <p>開幕花禮 | 奶油燕麥盆花</p>
                                            <span className='fs-9 text-neutral-100 specification'>規格 奶油燕麥</span>
                                        </div>
                                    </div>
                                    <div className='d-flex'>
                                        <p className='ms-4 me-3'>NT$ 550</p>
                                        <p className='ms-4 me-3'>1</p>
                                        <p className='ms-4'>NT$ 550</p>
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
                                <button type="button" className="btn btn-outline-secondary rounded-pill fs-8 my-2 me-3">變更優惠</button>
                            </div>

                            <div className='mx-4 mb-4'>
                                <div className='d-flex'>

                                    <div className='col p-4'>
                                        <p className='mb-1'>給設計師的留言：</p>
                                        <p className='fs-9 text-neutral-100 mb-3'>可於此填寫客製細節與規格說明(非客製化商品可略過)</p>
                                        <div className="input-group">
                                            <textarea className="form-control" aria-label="With textarea" placeholder="請填寫留言" rows="5"></textarea>
                                        </div>
                                    </div>

                                    <div className='border-start border-end bordor-1 mx-4'></div>

                                    <div className='col p-4'>
                                        <div className="mb-3">
                                            <p className="mb-3">運送方式</p>
                                            <select
                                                className="form-select"
                                                aria-label="Default select"
                                                value={shippingMethod}
                                                onChange={(e) => setShippingMethod(e.target.value)}
                                            >
                                                <option value="選擇取貨方式">選擇取貨方式</option>
                                                <option value="超商取貨">超商取貨</option>
                                                <option value="宅配">宅配</option>
                                            </select>
                                        </div>

                                        {/* 收件門市 */}
                                        <div className="mb-3">
                                            <p className="fw-bold mb-3">收件門市</p>
                                            <div className="d-flex mb-3">
                                                <div className="d-flex align-items-center col me-3">
                                                    <p htmlFor="county" className="form-label me-3 mb-0" style={{ width: "70px" }}>縣市</p>
                                                    <select id="county" className="form-select" aria-label="Default select" defaultValue="請選擇">
                                                        <option value="請選擇">請選擇</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                                <div className="d-flex align-items-center col ms-3">
                                                    <p htmlFor="administrativeDistricts" className="form-label me-3 mb-0" style={{ width: "70px" }}>行政區</p>
                                                    <select id="administrativeDistricts" className="form-select" aria-label="Default select" defaultValue="請選擇">
                                                        <option value="請選擇">請選擇</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>
                                                </div>
                                            </div>

                                            {/* 地址/店面選擇 */}
                                            <div className="d-flex align-items-center">
                                                <label htmlFor="store" className="form-label mb-0 me-3" style={{ width: "90px" }}>取貨地址</label>
                                                {shippingMethod === "超商取貨" ? (
                                                    // 店面選擇 (select)
                                                    <select id="store" className="form-select" aria-label="Default select" defaultValue="請選擇">
                                                        <option value="請選擇">請選擇店面</option>
                                                        <option value="1">分店1</option>
                                                        <option value="2">分店2</option>
                                                        <option value="3">分店3</option>
                                                    </select>
                                                ) : (
                                                    // 地址輸入框 (input)
                                                    <input type="text" className="form-control" id="store" placeholder="請輸入詳細地址" />
                                                )}
                                            </div>
                                        </div>

                                        <div className='mb-3'>
                                            <div className='d-flex gap-3'>
                                                <p className='fw-bold mb-3'>收件人資料</p>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id="recipientCheckDefault"
                                                        checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)}
                                                    />
                                                    <label className="form-check-label" htmlFor="recipientCheckDefault">
                                                        收件人資訊同購買人
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <div className="d-flex align-items-center col me-3">
                                                    <label htmlFor="recipientName" className="form-label mb-0 me-2" style={{ width: "60px" }}>姓名</label>
                                                    <input type="text" className="form-control" id="recipientName" placeholder="請輸入姓名" />
                                                </div>
                                                <div className="d-flex align-items-center col ms-3">
                                                    <label htmlFor="recipientPhone" className="form-label mb-0 me-2" style={{ width: "60px" }}>電話</label>
                                                    <input type="text" className="form-control" id="recipientPhone" placeholder="請輸入電話" />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="mb-3">
                                                <label htmlFor="unicode" className="form-label">統一編號</label>
                                                <input type="text" className="form-control" id="unicode" placeholder="請輸入統一編號" />
                                            </div>
                                        </div>

                                        <div>
                                            <p className='fw-bold'>統一發票</p>
                                            <div className='d-flex align-items-center'>
                                                <div className="form-check me-3">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="flexRadioDefault"
                                                        id="paperInvoice"
                                                        value="paper_invoice"
                                                        checked={selectedPayment === "credit_card"}
                                                        onChange={(e) => setSelectedPayment(e.target.value)}
                                                    />
                                                    <label className="form-check-label" htmlFor="paperInvoice">
                                                        <p className='fs-9 text-neutral-100'>紙本發票</p>
                                                    </label>
                                                </div>
                                                <div className='d-flex align-items-center ms-3'>
                                                    <div className="form-check col-4">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="flexRadioDefault"
                                                            id="electronicCarriers"
                                                            value="electronic_carriers"
                                                            checked={selectedPayment === "credit_card"}
                                                            onChange={(e) => setSelectedPayment(e.target.value)}
                                                        />
                                                        <label className="form-check-label" htmlFor="electronicCarriers">
                                                            <p className='fs-9 text-neutral-100'>電子載具</p>
                                                        </label>
                                                    </div>
                                                    <input type="text" className="form-control col-8" id="electronicCarriers" placeholder="請輸入統一編號" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className='cart_detail m-3 p-3'>
                            <h5 className='text-center'>請選擇付款方式</h5>
                        </div>

                        <div className='mx-4 mb-4'>
                            <div className='d-flex'>

                                <div className='col p-4'>
                                    <h5 className='mb-3'>請選擇付款方式</h5>
                                    <div className="form-check mb-3">
                                        <input
                                            className="form-check-input"
                                            type="radio" name="flexRadioDefault"
                                            id="cashOnDelivery"
                                            value="cash_on_delivery"
                                            checked={selectedPayment === "credit_card"}
                                            onChange={(e) => setSelectedPayment(e.target.value)}
                                        />
                                        <label className="form-check-label fs-9" htmlFor="cashOnDelivery">
                                            貨到付款
                                        </label>
                                    </div>
                                    <div className='mb-3'>
                                        <div className="form-check mb-2">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="quickPayment"
                                                value="quick_payment"
                                                checked={selectedPayment === "credit_card"}
                                                onChange={(e) => setSelectedPayment(e.target.value)}
                                            />
                                            <label className="form-check-label fs-9" htmlFor="quickPayment">
                                                快捷付款 - 常用信用卡付款
                                            </label>
                                        </div>
                                        <select className="form-select" aria-label="Default select" defaultValue="國泰世華 **** **** **** 1549">
                                            <option value="國泰世華 **** **** **** 1549">國泰世華 **** **** **** 1549</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="flexRadioDefault"
                                            id="inputCreditCard"
                                            value="input_credit_card"
                                            checked={selectedPayment === "credit_card"}
                                            onChange={(e) => setSelectedPayment(e.target.value)}
                                        />
                                        <label className="form-check-label fs-9" htmlFor="inputCreditCard">
                                            輸入信用卡卡號付款
                                        </label>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="basic-url" className="form-label fs-9 fw-light text-neutral-100">信用卡卡號</label>
                                        <div className="input-group mb-2">
                                            <input type="text" className="form-control" placeholder="0000-0000-0000-0000" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        </div>
                                        <div className='d-flex gap-2'>
                                            <div className='col'>
                                                <label htmlFor="basic-url" className="form-label fs-9 fw-light text-neutral-100">有效日期</label>
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control" placeholder="MM/YY" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                </div>
                                            </div>
                                            <div className='col'>
                                                <label htmlFor="basic-url" className="form-label fs-9 fw-light text-neutral-100">驗證碼</label>
                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control" placeholder="123" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col p-4 border border-2'>
                                    <div className="border-1 border-bottom">
                                        <div className='d-flex justify-content-between mb-2'>
                                            <h6 className='fw-bold'>商品總金額</h6>
                                            <h6 className='fw-bold'>NT$ 1730</h6>
                                        </div>
                                        <div className='d-flex justify-content-between mb-2 mt-1'>
                                            <p>運費總金額</p>
                                            <p>NT$ 60</p>
                                        </div>
                                        <div className='d-flex justify-content-between mb-4 mt-1'>
                                            <p className='fs-9'>優惠折抵</p>
                                            <p className='fs-9'>- NT$ 50</p>
                                        </div>
                                    </div>

                                    <div className='d-flex justify-content-between mt-4'>
                                        <h5 className='fw-bold'>金額小計</h5>
                                        <h5 className='fw-bold'>NT$ 1740</h5>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <div className='d-flex justify-content-center mt-4 margin-bottom-1'>
                    <Link to="/createdOrder" className='btn rounded-pill checkoutBtn'>
                        <p className='fs-8'>確認付款</p>
                    </Link>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default checkout