import { useEffect, useRef, useState } from 'react'
import axios, { Axios } from 'axios'
import { Modal } from 'bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router'
import Icons from '../assets/images/icons/Icons';
import SevenImgs from '../assets/images/seven/SevenImgs';

function Header() {

    const loginModalRef = useRef(null);
    const [modalMode, setModalMode] = useState(null);

    useEffect(() => {
        new Modal(loginModalRef.current, { backdrop: false });

        // new Modal(delProductModalRef.current, { backdrop: false });
    }, [])

    const handleOpenLoginModal = (mode) => {
        setModalMode(mode);

        const modalInstance = Modal.getInstance(loginModalRef.current);
        modalInstance.show();
    }

    const handleCloseLoginModal = (mode) => {
        const modalInstance = Modal.getInstance(loginModalRef.current);
        modalInstance.hide();
    }

    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="d-flex justify-content-between align-items-center py-4">
                        <Link to="index.html" className="pcLogo">
                            <img src={SevenImgs.pc_logo} alt="pc_logo" />
                        </Link>
                        <div className="headerRight ">
                            <div className='d-flex align-items-center'>
                                <Link to="#" className='headerIcons'>
                                    <img className='headerIcon' src={Icons.search} alt="search" />
                                </Link>
                                <Link to="#" className='headerIcons'>
                                    <img className='headerIcon' src={Icons.shopping_cart} alt="shopping_cart" />
                                </Link>
                                <button onClick={() => handleOpenLoginModal(null)} type="button" className="btn border-0 rounded-pill loginBtn">
                                    <p className='fw-blod fs-8'>註冊/登入</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <nav className="navbar navbar-expand-lg secondary-nav">
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav nav-list">
                        <li className="nav-item">
                            <Link className="nav-link fs-6 fw-bloder" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-6 fw-bloder" to="/products">商品總覽</Link>
                        </li>
                        <li className="nav-item dropdown d-flex">
                            <Dropdown>
                                <Dropdown.Toggle variant="none" id="dropdown-basic" className="nav-link dropdown-toggle fs-6 fw-bloder">
                                    嚴選品牌
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">
                                        <Link className="dropdown-item fs-6 fw-bloder" to="#">negaflower</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">
                                        <Link className="dropdown-item fs-6 fw-bloder" to="#">陶之家</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">
                                        <Link className="dropdown-item fs-6 fw-bloder" to="#">SOS香氛</Link>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-6 fw-bloder" to="#">最新消息</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-6 fw-bloder" to="#">關於拾柒</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-6 fw-bloder" to="#">Q&A</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* 登入 */}
            <div ref={loginModalRef} id="loginModal" className="modal" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        {/* <!-- 關閉按鈕 --> */}
                        <div className="modal-header border-0">
                            <button onClick={() => handleCloseLoginModal(null)} type="button" className="close">
                                <img src={Icons.x} alt="x" />
                            </button>
                        </div>
                        {/* <!-- 彈出視窗內容 --> */}
                        <div className="modal-body">
                            {/* <!-- Logo --> */}
                            <div className="modal-title">
                                <img className="modal-logo" src={SevenImgs.pc_logo_lg} alt="pc_logo" />
                            </div>
                            <form>
                                {/* <!-- 帳號欄位 --> */}
                                <div className="form-group my-4 ">
                                    <label for="username" className="my-2">登入會員</label>
                                    <input type="text" className="form-control" id="username" placeholder="登入拾柒帳號" />
                                </div>
                                {/* <!-- 密碼欄位 --> */}
                                <div className="form-group  my-4 ">
                                    <label for="password" className="my-2">輸入密碼</label>
                                    <input type="password" className="form-control" id="password" placeholder="輸入密碼" />
                                </div>
                                {/* <!-- 登入按鈕 --> */}
                                <button type="submit" className=" login-btn btn btn-dark btn-block">登入拾柒</button>
                            </form>
                            {/* <!-- 額外選項 --> */}
                            <div className="extra-option">
                                <Link href="#"><span>忘記密碼？</span></Link>
                                <div className="ask-for">
                                    <p>還不是會員嗎?</p>
                                    <Link href="#" className="joinMember">立即加入會員</Link>
                                </div>
                            </div>
                            <div className="social-login-btn d-flex justify-content-between align-items-center">
                                {/* <!-- Facebook 登入按鈕 --> */}
                                <button className="btn btn-facebook btn-block">Facebook</button>
                                {/* <!-- Google 登入按鈕 --> */}
                                <button className="btn btn-google btn-block">Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header