import { useEffect, useRef, useState } from 'react'
import axios, { Axios } from 'axios'
import { Modal } from 'bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router'
import Icons from '../assets/images/icons/Icons';
import SevenImgs from '../assets/images/seven/SevenImgs';
import { Value } from 'sass';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

function Header() {

    const loginModalRef = useRef(null);
    const searchModalRef = useRef(null);
    const [modalMode, setModalMode] = useState(null);

    const [isLoginIn, setIsLoginIn] = useState(false);
    const [userName, setUserName] = useState("");

    useEffect(() => {
        new Modal(loginModalRef.current, { backdrop: false });
        new Modal(searchModalRef.current, { backdrop: false });
    }, [])

    const handleOpenLoginModal = (mode) => {
        setModalMode(mode);

        const modalInstance = Modal.getInstance(loginModalRef.current);
        modalInstance.show();
    }

    const handleCloseLoginModal = () => {
        const modalInstance = Modal.getInstance(loginModalRef.current);
        modalInstance.hide();
    }

    const handleOpenSearchModal = (mode) => {
        setModalMode(mode);

        const modalInstance = Modal.getInstance(searchModalRef.current);
        modalInstance.show();
    }

    const handleCloseSearchModal = () => {
        const modalInstance = Modal.getInstance(searchModalRef.current);
        modalInstance.hide();
    }

    const [account, setAccount] = useState({
        "username": "請登入拾柒帳號",
        "password": "password"
    });

    const handleInputChange = (e) => {
        const { value, name } = e.target;

        setAccount({
            ...account,
            [name]: value
        })
    }

    const login = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`${BASE_URL}/v2/admin/signin`, account);
            const { token, expired } = res.data;
            document.cookie = `itToken=${token}; expires=${new Date(expired)}`;
            axios.defaults.headers.common['Authorization'] = token;
            setIsLoginIn(true);
            console.log('登入成功');

            handleCloseLoginModal();
        } catch (error) {
            alert('登入失敗');
        }
    }

    useEffect(() => {
        const token = document.cookie.replace(
            /(?:(?:^|.*;\s*)itToken\s*\=\s*([^;]*).*$)|^.*$/,
            "$1",
        );
        axios.defaults.headers.common['Authorization'] = token;

        if (token) {
            setUserName("USER");
            setIsLoginIn(true);
        }
    }, [])

    const logout = async () => {
        try {
            await axios.post(`${BASE_URL}/v2/logout`);
        } catch (error) {
            console.log("登出 API 失敗", error);
        }
        
        setIsLoginIn(false);
        setUserName("");
    }

    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="d-flex justify-content-between align-items-center py-4">
                        <Link to="/" className="pcLogo">
                            <img src={SevenImgs.pc_logo} alt="pc_logo" />
                        </Link>
                        <div className="headerRight ">
                            <div className='d-flex align-items-center'>
                                <Link onClick={() => handleOpenSearchModal(null)} className='headerIcons'>
                                    <img className='headerIcon' src={Icons.search} alt="search" />
                                </Link>
                                <Link to="/cart" className='headerIcons'>
                                    <img className='headerIcon' src={Icons.shopping_cart} alt="shopping_cart" />
                                </Link>
                                {!isLoginIn ? (
                                    // **顯示登入按鈕**
                                    <button onClick={handleOpenLoginModal} type="button" className="btn border-0 rounded-pill loginBtn">
                                        <p className="fw-bold fs-8">註冊/登入</p>
                                    </button>
                                ) : (
                                    // **顯示使用者名稱按鈕**
                                    <div className="dropdown">
                                        <button className="btn border-0 rounded-pill userBtn fw-bold" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {userName || "USER"}
                                        </button>
                                        <ul className="dropdown-menu text-center">
                                            <li><a className="dropdown-item" href="#">會員中心</a></li>
                                            <li><a className="dropdown-item" href="#">我的收藏</a></li>
                                            <li><a className="dropdown-item" href="#">我的訂單</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><button onClick={logout} className="dropdown-item">登出</button></li>
                                        </ul>
                                    </div>
                                )}
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
                            <Link className="nav-link fs-6 fw-bloder" to="/news">最新消息</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-6 fw-bloder" to="/sevenStory">關於拾柒</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-6 fw-bloder" to="/Q&A">Q&A</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* 登入Modal */}
            <div ref={loginModalRef} id="loginModal" className="modal" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <button onClick={() => handleCloseLoginModal(null)} type="button" className="close">
                                <img src={Icons.x} alt="x" />
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="modal-title">
                                <img className="modal-logo" src={SevenImgs.pc_logo_lg} alt="pc_logo" />
                            </div>
                            <form onSubmit={login}>
                                <div className="form-group my-4 ">
                                    <label htmlFor="username" className="my-2">會員帳號</label>
                                    <input name='username' value={account.username} onChange={handleInputChange} type="email" className="form-control" id="username" placeholder="請登入拾柒帳號" />
                                </div>
                                <div className="form-group  my-4 ">
                                    <label htmlFor="password" className="my-2">密碼</label>
                                    <input name='password' value={account.password} onChange={handleInputChange} type="password" className="form-control" id="password" placeholder="請輸入密碼" />
                                </div>
                                <button type="submit" className="login-btn btn btn-dark btn-block">登入拾柒</button>
                            </form>
                            <div className="extra-option">
                                <Link href="#"><span>忘記密碼？</span></Link>
                                <div className="ask-for">
                                    <p>還不是會員嗎?</p>
                                    <Link href="#" className="joinMember">立即加入會員</Link>
                                </div>
                            </div>
                            <div className="social-login-btn d-flex justify-content-between align-items-center">
                                <button className="btn btn-facebook btn-block">Facebook</button>
                                <button className="btn btn-google btn-block">Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- 搜尋彈窗 --> */}
            <div ref={searchModalRef} id="searchModal" className="modal fade" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header d-flex justify-content-between border-0">
                            <h5 className="modal-title" id="searchModalLabel"><i className="bi bi-search"></i> 搜尋商品</h5>
                            <button onClick={() => handleCloseSearchModal(null)} type="button" className="close">
                                <img src={Icons.x} alt="x" />
                            </button>
                        </div>
                        <div className="modal-body">
                            {/* <!-- 輸入框和搜尋按鈕 --> */}
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="輸入關鍵字" />
                                <Link href="#" className="btn btn-secondary">搜尋</Link>
                            </div>

                            <h6 className="my-4">熱門分類</h6>
                            <div className="d-flex flex-wrap ">
                                <Link href="#" className="btn  hashtag-link">#花藝</Link>
                                <Link href="#" className="btn  hashtag-link">#盆花</Link>
                                <Link href="#" className="btn  hashtag-link">#開幕花禮</Link>
                                <Link href="#" className="btn  hashtag-link">#陶器</Link>
                                <Link href="#" className="btn  hashtag-link">#香氛</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header