import { useEffect, useRef, useState } from 'react';
import axios, { Axios } from 'axios';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Icons from '../assets/images/icons/Icons';
import { Link } from 'react-router-dom';
import { data } from 'react-router';
import { Modal } from 'bootstrap';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

function Cart() {

    const couponModalRef = useRef(null);
    const [modalMode, setModalMode] = useState(null);
    const [cart, setCart] = useState({});
    const [expandedItems, setExpandedItems] = useState({});
    const [allProducts, setAllProducts] = useState([]);

    const toggleAddOn = (itemId) => {
        setExpandedItems((prev) => ({
            ...prev,
            [itemId]: !prev[itemId]
        }));
    };

    const addOnItems = Array.isArray(cart?.product?.add_on_items)
        ? cart.product.add_on_items
            .map((itemName) => allProducts.find((p) => p.title === itemName))
            .filter((p) => p) // 過濾 undefined
            .slice(0, 4) // 只顯示最多 4 個
        : []; // 若 `add_on_items` 不存在，則設為空陣列

    const [addOnQuantities, setAddOnQuantities] = useState({});

    const handleAddOnQuantityChange = (itemId, newQty) => {
        setAddOnQuantities((prev) => ({
            ...prev,
            [itemId]: newQty,
        }));
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${BASE_URL}/v2/api/${API_PATH}/products/all`);
                if (!response.ok) throw new Error("無法獲取所有商品資料");
                const data = await response.json();
                setAllProducts(data.products);
            } catch (error) {
                console.error("API 請求錯誤:", error);
            }
        };
        fetchProducts();
    }, []);

    useEffect(() => {
        new Modal(couponModalRef.current, { backdrop: false });
        getCart();
    }, [])

    const handleOpenCouponModal = (mode) => {
        setModalMode(mode);

        const modalInstance = Modal.getInstance(couponModalRef.current, { backdrop: false });
        modalInstance.show();
    }

    const getCart = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/v2/api/${API_PATH}/cart`);

            setCart(res.data.data);
            console.log(res.data)
        } catch (error) {
            alert('取得購物車失敗')
        }
    }

    const removeCart = async () => {
        try {
            await axios.delete(`${BASE_URL}/v2/api/${API_PATH}/carts`)

            getCart();
        } catch (error) {
            alert('刪除購物車失敗')
        }
    }

    const removeCartProduct = async (cartItem_id) => {
        try {
            await axios.delete(`${BASE_URL}/v2/api/${API_PATH}/cart/${cartItem_id}`)

            getCart();
        } catch (error) {
            alert('刪除購物車商品失敗')
        }
    }

    const updateCartProduct = async (cartItem_id, product_id, qty) => {
        try {
            await axios.put(`${BASE_URL}/v2/api/${API_PATH}/cart/${cartItem_id}`,
                {
                    data: {
                        product_id,
                        qty: Number(qty)
                    }
                })

            getCart();
        } catch (error) {
            alert('更新購物車商品失敗')
        }
    }

    const checkUserLogin = async () => {
        try {
            await axios.post(`${BASE_URL}/v2/api/user/check`);
            return true;
        } catch (error) {
            return false;
        }
    };

    const putCartOrder = async () => {
        try {
            await axios.post(`${BASE_URL}/v2/api/${API_PATH}/order`)
        } catch (error) {
            alert('建立訂單失敗')
        }
    }

    const handleCheckoutClick = async (e) => {
        // 防止 Link 預設行為，阻止跳轉
        e.preventDefault();
        const isLoggedIn = await checkUserLogin();
    
        if (!isLoggedIn) {
            alert("尚未登入，請登入後再進行結帳")
        } else {
            putCartOrder();
        }
    };

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
                                    <h6 className='fw-bolder'>{cart.brand}</h6>
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                    <p>共 {data.catrs} 項商品</p>
                                    <p>NT$ {cart.total}</p>
                                </div>
                                <div className="d-flex justify-content-between mb-3 fs-9">
                                    <p>折扣</p>
                                    <p>- NT$ </p>
                                </div>
                            </div>
                            <div className="pricetotal d-flex justify-content-between mt-4">
                                <h5 className='fw-bold'>金額小計</h5>
                                <h5 className='fw-bold'>NT$ {cart.final_total}</h5>
                            </div>
                        </div>
                        <div className="total_price_footer d-flex flex-column gap-2 align-items-center">
                            <Link to="/checkout" onClick={handleCheckoutClick} className="btn rounded-pill d-flex justify-content-center gap-1" role="button" style={{ width: "100%" }}>
                                <img src={Icons.shopping_bag} alt="chevron-left" style={{ width: "24px" }} />
                                <p>前往結帳</p>
                            </Link>
                            <Link to="/products" className="btn rounded-pill d-flex justify-content-center gap-1" role="button" style={{ width: "100%" }}>
                                <img src={Icons.chevron_left} alt="chevron-left" style={{ width: "24px" }} />
                                <p>返回購物</p>
                            </Link>
                        </div>
                    </div>

                    {cart.carts?.length > 0 && (
                        <div className='col-9'>
                            <div className="cartform_style product_list ">
                                <div className="product_list_title p-2 d-flex justify-content-between">
                                    <div className="form-check d-flex align-items-center gap-2">
                                        <input className="form-check-input" type="checkbox" id="allProduct" />
                                        <label className="form-check-label" htmlFor="allProduct">全部商品</label>
                                    </div>
                                    <button onClick={removeCart} type="button" className="btn rounded-pill ms-2 delAllBtn">清除購物車</button>
                                </div>


                                {cart.carts?.map((cartItem) => (
                                    <div className="cart_brand_product">
                                        <div className="card mt-3 m-md-3 m-1 border-2">
                                            <div className="card-header d-flex justify-content-between align-items-center">
                                                <div className="">
                                                    <input className="form-check-input me-2" type="checkbox" id="nega_flower" />
                                                    <label className="form-check-label" htmlFor="nega_flower">
                                                        <h6 className='fw-bolder text-neutral-100'>{cartItem.product.brand}</h6>
                                                    </label>
                                                </div>
                                                <button onClick={() => removeCartProduct(cartItem.id)} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>

                                            <div key={cartItem.id} className="card-body">
                                                <div className="cartproduct-list d-flex justify-content-between align-items-center p-4 border-bottom">

                                                    <div className='d-flex align-items-center'>
                                                        <input className="form-check-input me-2" type="checkbox" id="nega_flower" />
                                                        <img src={cartItem.product.images[0]} className='mx-4' alt={cartItem.product.title} style={{ width: "96px" }} />
                                                        <div className="ms-2">
                                                            <p>{cartItem.product.title}</p>
                                                            <span className='fs-9 text-neutral-100 specification'>規格 {cartItem.feature}</span>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex align-items-center'>
                                                        <p className='fw-bold me-2'>NT$ {cartItem.product.price}</p>

                                                        <div className="d-flex align-items-center mx-4">
                                                            <div className="btn-group me-2" role="group">
                                                                <button
                                                                    onClick={() => updateCartProduct(cartItem.id, cartItem.product_id, cartItem.qty - 1)}
                                                                    disabled={cartItem.qty === 1}
                                                                    type="button"
                                                                    className="btn btn-outline-dark btn-sm"
                                                                >-</button>
                                                                <span
                                                                    className="btn border border-dark"
                                                                    style={{ width: "50px", cursor: "auto" }}
                                                                >{cartItem.qty}</span>
                                                                <button
                                                                    onClick={() => updateCartProduct(cartItem.id, cartItem.product_id, cartItem.qty + 1)}
                                                                    type="button"
                                                                    className="btn btn-outline-dark btn-sm"
                                                                >+</button>
                                                            </div>
                                                            <span className="input-group-text bg-transparent border-0">
                                                                {cartItem.product.unit}
                                                            </span>
                                                        </div>

                                                        <button onClick={() => removeCartProduct(cartItem.id)} type="button" className="btn border border-1 rounded-pill ms-2 delbtn">刪除</button>
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
                                                        {/* <h6 className='coupon_detail'>全館滿1000享50元優惠</h6>
                                                <h6 className='couponCode_detail'>優惠碼 17BIRTHDAY200</h6> */}
                                                    </div>
                                                </div>
                                                <button onClick={() => handleOpenCouponModal(null)} type="button" className="btn btn-outline-danger rounded-pill fs-8 my-2 me-3">使用優惠</button>
                                            </div>

                                            <div className="card-footer border-bottom border-2">
                                                <button
                                                    className="btn d-flex align-items-center gap-1 justify-content-center w-100"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#plusProduct-${cartItem.id}`}
                                                    aria-expanded={expandedItems[cartItem.id] || false}
                                                    onClick={() => toggleAddOn(cartItem.id)}
                                                >
                                                    <h6>可加購商品</h6>
                                                    <img src={expandedItems[cartItem.id] ? Icons.chevron_down : Icons.chevron_up} alt="toggle-icon" style={{ width: "32px" }} />
                                                </button>
                                            </div>

                                            {cart.carts?.map((cartItem) => {
                                                {/* 加購商品區塊 */ }
                                                <div key={cartItem.id} className="cart_brand_product">
                                                    {addOnItems.length > 0 && (
                                                        <div className="collapse" id={`plusProduct-${cartItem.id}`}>
                                                            <div className="shopcart_plusProduct d-flex gap-3 flex-wrap justify-content-center">
                                                                {addOnItems.map((item) => {
                                                                    const itemQty = addOnQuantities[item.id] || 1;
                                                                    return (
                                                                        <div key={item.id} className="card border-2 px-0 rounded-bottom-0">
                                                                            <div className="position-relative">
                                                                                <img src={item?.images?.[0] || "https://via.placeholder.com/150"} className="card-img-top" alt={item.title} />

                                                                                <button
                                                                                    className="plus-btn position-absolute bottom-0 end-0 border-1 rounded-circle p-0"
                                                                                    onClick={() => addCartProduct(item.id, "無規格", itemQty)}
                                                                                >
                                                                                    <img className="plus-icon px-1 py-1" src={Icons.plus} alt="plus" />
                                                                                </button>
                                                                            </div>

                                                                            <div className="card-footer text-center">
                                                                                <select
                                                                                    className="form-select"
                                                                                    value={itemQty}
                                                                                    onChange={(e) => handleAddOnQuantityChange(item.id, Number(e.target.value))}
                                                                                >
                                                                                    {[...Array(5).keys()].map((num) => (
                                                                                        <option key={num + 1} value={num + 1}>
                                                                                            數量：{num + 1}
                                                                                        </option>
                                                                                    ))}
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    );
                                                                })}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            })}
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div >
                    )}

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
            </div >
            <Footer />
        </>
    )
}

export default Cart