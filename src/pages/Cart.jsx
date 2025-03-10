import Header from '../layout/Header';
import Footer from '../layout/Footer';
import sevenImgs from '../assets/images/seven/SevenImgs';
import Icons from '../assets/images/icons/Icons';

function Cart() {

    return (
        <>
            <Header />

            <div className="container">

                <div className="shopping_status">
                    <div className="progress-stacked rounded-pill">
                        <div className="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style={{width: "33.33%"}}>
                            <div className="progress-bar stepbar1">
                                <p>選擇結帳商品</p>
                            </div>
                        </div>
                        <div className="progress" role="progressbar" aria-label="Segment two" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style={{width: "33.33%"}}>
                            <div className="progress-bar stepbar2">
                                <p>填寫地址與付款方式</p>
                            </div>
                        </div>
                        <div className="progress" role="progressbar" aria-label="Segment three" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: "33.33%"}}>
                            <div className="progress-bar stepbar3">
                                <p>訂單成立</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cart_content d-sm-flex flex-column flex-row-reverse justify-content-between margin-bottom-1 margin-bottom-mobile-1">

                    <div className="cartform_style total_price col-3">
                        <div className="total_price_title">
                            <div className="product_total d-flex justify-content-between mb-2">
                                <div className="col-5 d-flex justify-content-between align-items-center">
                                    <p>共</p>
                                    <h6>1</h6>
                                    <p>項商品</p>
                                </div>
                                <h6 className="px-1">,</h6>
                                <div className="col-5 d-flex justify-content-between align-items-center">
                                    <p>數量</p>
                                    <h6>1</h6>
                                    <p>個</p>
                                </div>
                            </div>
                            <div className="pricetotal d-flex gap-2 justify-content-end">
                                <h6>小計</h6>
                                <div className="d-flex gap-1">
                                    <h6>NT$</h6>
                                    <h6>1,680</h6>
                                </div>
                            </div>
                        </div>
                        <div className="total_price_footer d-flex flex-column gap-2 align-items-center">
                            <a className="btn rounded-pill d-flex justify-content-center gap-1" href="#" role="button"
                                data-toggle="modal" data-target="#loginModal">
                                <p>前往結帳</p>
                                <img src={Icons.chevron_right} alt="chevron-left" style={{width: "12px"}} />
                            </a>
                            <a className="btn rounded-pill d-flex justify-content-center gap-1" href="#" role="button">
                                <img src={Icons.chevron_left} alt="chevron-left" style={{width: "12px"}} />
                                    <p>返回購物</p>
                            </a>
                        </div>
                    </div>

                    <div className="cartform_style product_list col-7">
                        <div className="product_list_title p-2">
                            <div className="form-check d-flex align-items-center gap-2">
                                <input className="form-check-input" type="checkbox" value="" id="allProduct" />
                                    <label className="form-check-label" for="allProduct">全部商品</label>
                            </div>
                        </div>

                        <div className="brand_product">

                            <div className="card mt-3 m-md-3 m-1 border-2">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <div className="">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="nega_flower" />
                                            <label className="form-check-label" for="nega_flower">Nega Flower</label>
                                    </div>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="card-body">
                                    <div className="cartproduct-list d-flex justify-content-between align-items-center">
                                        <input className="form-check-input" type="checkbox" value="" id="nega_flower" />
                                            <img src="/src/assets/images/negaflower/開幕花禮｜奶油燕麥盆花.jpg" alt="開幕花禮｜奶油燕麥盆花" style={{width: "20%"}} />
                                                <p className="">開幕花禮 | 奶油燕麥盆花</p>
                                                <div className="product_num">
                                                    <select id="inputState" className="form-select">
                                                        <option selected>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </div>
                                                <p>NT$ 1,680</p>
                                                <a href="#" className="btn border border-1 delbtn">刪除</a>
                                            </div>
                                    </div>

                                    <div className="card-footer border-bottom border-2">
                                        <button className="btn d-flex align-items-center gap-1 justify-content-center w-100"
                                            type="button" data-bs-toggle="collapse" data-bs-target="#brand_1_plusProduct"
                                            aria-expanded="false" aria-controls="brand_1_plusProduct">
                                            <img src={Icons.plus} alt="plus" style={{width: "24px"}} />
                                                <h6>可加購商品</h6>
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
                                                    <img src="src/assets/images/negaflower/negaflower_logo.jpg" alt="nega" style={{width: "61px", height: "61px"}} />
                                                        <div className="d-flex flex-column justify-content-center">
                                                            <p className="fs-9 mb-2">Nega Flower</p>
                                                            <p className="fw-bold text-truncate">透明提袋50cm</p>
                                                            <p className="fw-bold mt-1">NT$ 30</p>
                                                        </div>
                                                </div>
                                                <div className="card-body d-md-none d-flex flex-column gap-2">
                                                    <div className="d-flex justify-content-center align-items-center gap-3">
                                                        <img src="src/assets/images/negaflower/negaflower_logo.jpg" alt="nega" style={{width: "24px", height: "24px"}} />
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
                                                    <img src="src/assets/images/negaflower/negaflower_logo.jpg" alt="nega" style={{width: "61px", height: "61px"}} />
                                                        <div className="d-flex flex-column justify-content-center">
                                                            <p className="fs-9 mb-2">Nega Flower</p>
                                                            <p className="fw-bold text-truncate">透明提袋100cm</p>
                                                            <p className="fw-bold mt-1">NT$ 40</p>
                                                        </div>
                                                </div>
                                                <div className="card-body d-md-none d-flex flex-column gap-2">
                                                    <div className="d-flex justify-content-center align-items-center gap-3">
                                                        <img src="src/assets/images/negaflower/negaflower_logo.jpg" alt="nega" style={{width: "24px", height: "24px"}} />
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
                                                    <img src="src/assets/images/negaflower/negaflower_logo.jpg" alt="nega" style={{width: "61px", height: "61px"}} />
                                                        <div className="d-flex flex-column justify-content-center">
                                                            <p className="fs-9 mb-2">Nega Flower</p>
                                                            <p className="fw-bold text-truncate">透明提袋150cm</p>
                                                            <p className="fw-bold mt-1">NT$ 50</p>
                                                        </div>
                                                </div>
                                                <div className="card-body d-md-none d-flex flex-column gap-2">
                                                    <div className="d-flex justify-content-center align-items-center gap-3">
                                                        <img src="src/assets/images/negaflower/negaflower_logo.jpg" alt="nega" style={{width: "24px", height: "24px"}} />
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
                                                    <img src="src/assets/images/negaflower/negaflower_logo.jpg" alt="nega" style={{width: "61px", height: "61px"}} />
                                                        <div className="d-flex flex-column justify-content-center">
                                                            <p className="fs-9 mb-2">Nega Flower</p>
                                                            <p className="fw-bold text-truncate">剪刀</p>
                                                            <p className="fw-bold mt-1">NT$ 250</p>
                                                        </div>
                                                </div>
                                                <div className="card-body d-md-none d-flex flex-column gap-2">
                                                    <div className="d-flex justify-content-center align-items-center gap-3">
                                                        <img src="src/assets/images/negaflower/negaflower_logo.jpg" alt="nega" style={{width: "24px", height: "24px"}} />
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
                                                    <img src="src/assets/images/negaflower/negaflower_logo.jpg" alt="nega" style={{width: "61px", height: "61px"}} />
                                                        <div className="d-flex flex-column justify-content-center">
                                                            <p className="fs-9 mb-2">Nega Flower</p>
                                                            <p className="fw-bold text-truncate">噴罐</p>
                                                            <p className="fw-bold mt-1">NT$ 80</p>
                                                        </div>
                                                </div>
                                                <div className="card-body d-md-none d-flex flex-column gap-2">
                                                    <div className="d-flex justify-content-center align-items-center gap-3">
                                                        <img src="src/assets/images/negaflower/negaflower_logo.jpg" alt="nega" style={{width: "24px", height: "24px"}} />
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
                                                    <img src="src/assets/images/negaflower/negaflower_logo.jpg" alt="nega" style={{width: "61px", height: "61px"}} />
                                                        <div className="d-flex flex-column justify-content-center">
                                                            <p className="fs-9 mb-2">Nega Flower</p>
                                                            <p className="fw-bold text-truncate">卡片</p>
                                                            <p className="fw-bold mt-1">NT$ 50</p>
                                                        </div>
                                                </div>
                                                <div className="card-body d-md-none d-flex flex-column gap-2">
                                                    <div className="d-flex justify-content-center align-items-center gap-3">
                                                        <img src="src/assets/images/negaflower/negaflower_logo.jpg" alt="nega" style={{width: "24px", height: "24px"}} />
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

                </div>
                <Footer />
            </>
            )
}

            export default Cart