import Header from '../layout/Header';
import Footer from '../layout/Footer';
import SevenImgs from '../assets/images/seven/SevenImgs';
import Icons from '../assets/images/icons/Icons';
import { Link } from 'react-router';

function createdOrder() {

    return (
        <>
            <Header />

            <div className="container">

                <div className="shopping_status_createdOrder">
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

                <div className="card created-order-card">
                    <div className="card-body">
                        <h5 className="card-title py-2 text-center mb-3">訂單成立</h5>
                        <div className='orderContent p-4'>
                            <div className='d-flex justify-content-between border-bottom border-1 p-1 mb-3'>
                                <div className='d-flex gap-3 align-items-center'>
                                    <h6 className="card-subtitle fw-bolder">訂單編號</h6>
                                    <p className='fs-7'>0123456789</p>
                                </div>
                                <div className='d-flex gap-3 align-items-center'>
                                    <h6 className="fs-8 fw-bold">購買於</h6>
                                    <p className='fs-8'>2025.03.16</p>
                                </div>
                            </div>

                            <div className='orderBrandList mb-2'>
                                <h6 className="orderBrand px-3 py-2 fw-bold">Nega Flower</h6>
                                <div className='d-flex gap-4 p-2'>
                                    <div className='col'>
                                        <div className='mb-2'>
                                            <div className='d-flex gap-2 align-items-center'>
                                                <p className="fs-7 fw-bold">取貨方式 :</p>
                                                <p className='fs-8'>宅配到府</p>
                                            </div>
                                            <p className='fs-8 text-secondary my-1'>小豬物流</p>
                                            <p className='fs-9 text-secondary fw-light'>桃園市中壢區內定二街56巷14號</p>
                                        </div>
                                        <div className='d-flex gap-2 align-items-center mb-2'>
                                            <p className="fs-7 fw-bold">付款方式 :</p>
                                            <p className='fs-8'>貨到付款</p>
                                        </div>
                                        <p className='mb-1'>給設計師的留言：</p>
                                        <div className="input-group">
                                            <textarea
                                                className="form-control"
                                                aria-label="With textarea"
                                                placeholder="請填寫留言"
                                                rows="5"
                                                disabled
                                                defaultValue="無留言">
                                            </textarea>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div>
                                            <div className='d-flex align-items-center justify-content-end p-2 border-bottom border-1'>
                                                <div className='me-auto'>
                                                    <p className="fs-7 fw-bold">開幕花禮 | 奶油燕麥盆花</p>
                                                    <p className="fs-9 fw-light text-secondary">奶油燕麥</p>
                                                </div>
                                                <p className='fs-8 text-end ms-3' style={{ width: '40px' }}>X1</p>
                                                <p className='fs-8 text-end ms-3' style={{ width: '100px' }}>NT$ 1500</p>
                                            </div>
                                            <div className='d-flex align-items-center justify-content-end p-2 border-bottom border-1'>
                                                <div className='me-auto'>
                                                    <p className="fs-7 fw-bold">紫玫瑰永生花束</p>
                                                    <p className="fs-9 fw-light text-secondary">紫玫瑰</p>
                                                </div>
                                                <p className='fs-8 text-end ms-3' style={{ width: '40px' }}>X2</p>
                                                <p className='fs-8 text-end ms-3' style={{ width: '100px' }}>NT$ 1000</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='d-flex align-items-center justify-content-end p-2 border-bottom border-1'>
                                                <p className='fs-8 text-end ms-3' style={{ width: '40px' }}>折扣</p>
                                                <p className='fs-8 text-end ms-3' style={{ width: '100px' }}>-NT$ 100</p>
                                            </div>
                                            <div className='d-flex align-items-center justify-content-end p-2 border-bottom border-1'>
                                                <p className='fs-8 text-end ms-3' style={{ width: '40px' }}>運費</p>
                                                <p className='fs-8 text-end ms-3' style={{ width: '100px' }}>NT$ 60</p>
                                            </div>
                                            <div className='d-flex align-items-center justify-content-end p-2 border-bottom border-1'>
                                                <p className='fs-8 text-end ms-3' style={{ width: '40px' }}>小計</p>
                                                <p className='fs-8 text-end ms-3' style={{ width: '100px' }}>NT$ 2460</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='orderBrandList mb-2'>
                                <h6 className="orderBrand px-3 py-2 fw-bold">陶之家</h6>
                                <div className='d-flex gap-4 p-2'>
                                    <div className='col'>
                                        <div className='mb-2'>
                                            <div className='d-flex gap-2 align-items-center'>
                                                <p className="fs-7 fw-bold">取貨方式 :</p>
                                                <p className='fs-8'>宅配到府</p>
                                            </div>
                                            <p className='fs-8 text-secondary my-1'>小豬物流</p>
                                            <p className='fs-9 text-secondary fw-light'>桃園市中壢區內定二街56巷14號</p>
                                        </div>
                                        <div className='d-flex gap-2 align-items-center mb-2'>
                                            <p className="fs-7 fw-bold">付款方式 :</p>
                                            <p className='fs-8'>貨到付款</p>
                                        </div>
                                        <p className='mb-1'>給設計師的留言：</p>
                                        <div className="input-group">
                                            <textarea
                                                className="form-control"
                                                aria-label="With textarea"
                                                placeholder="請填寫留言"
                                                rows="5"
                                                disabled
                                                defaultValue="無留言">
                                            </textarea>
                                        </div>
                                    </div>
                                    <div className='col'>
                                        <div>
                                            <div className='d-flex align-items-center justify-content-end p-2 border-bottom border-1'>
                                                <div className='me-auto'>
                                                    <p className="fs-7 fw-bold">開幕花禮 | 奶油燕麥盆花</p>
                                                    <p className="fs-9 fw-light text-secondary">奶油燕麥</p>
                                                </div>
                                                <p className='fs-8 text-end ms-3' style={{ width: '40px' }}>X1</p>
                                                <p className='fs-8 text-end ms-3' style={{ width: '100px' }}>NT$ 1500</p>
                                            </div>
                                            <div className='d-flex align-items-center justify-content-end p-2 border-bottom border-1'>
                                                <div className='me-auto'>
                                                    <p className="fs-7 fw-bold">紫玫瑰永生花束</p>
                                                    <p className="fs-9 fw-light text-secondary">紫玫瑰</p>
                                                </div>
                                                <p className='fs-8 text-end ms-3' style={{ width: '40px' }}>X2</p>
                                                <p className='fs-8 text-end ms-3' style={{ width: '100px' }}>NT$ 1000</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='d-flex align-items-center justify-content-end p-2 border-bottom border-1'>
                                                <p className='fs-8 text-end ms-3' style={{ width: '40px' }}>折扣</p>
                                                <p className='fs-8 text-end ms-3' style={{ width: '100px' }}>-NT$ 100</p>
                                            </div>
                                            <div className='d-flex align-items-center justify-content-end p-2 border-bottom border-1'>
                                                <p className='fs-8 text-end ms-3' style={{ width: '40px' }}>運費</p>
                                                <p className='fs-8 text-end ms-3' style={{ width: '100px' }}>NT$ 60</p>
                                            </div>
                                            <div className='d-flex align-items-center justify-content-end p-2 border-bottom border-1'>
                                                <p className='fs-8 text-end ms-3' style={{ width: '40px' }}>小計</p>
                                                <p className='fs-8 text-end ms-3' style={{ width: '100px' }}>NT$ 2460</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='d-flex gap-3 align-items-center justify-content-end p-2'>
                                <p className="fs-6 fw-bold">結帳金額</p>
                                <p className='fs-6'>NT$ 4920</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='d-flex justify-content-center gap-4'>
                    <div className='d-flex justify-content-center mt-4 margin-bottom-1'>
                        <Link to="/" className='btn rounded-pill toOrderBtn'>
                            <p className='fs-8'>查看訂單</p>
                        </Link>
                    </div>
                    <div className='d-flex justify-content-center mt-4 margin-bottom-1'>
                        <Link to="/products" className='btn rounded-pill backHomeBtn'>
                            <p className='fs-8'>繼續購物</p>
                        </Link>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default createdOrder