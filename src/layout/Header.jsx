import { Link } from 'react-router'
import pc_logo from '../assets/images/pc_logo.png'
import search from '../assets/images/icons/search.svg'
import cart from '../assets/images/icons/shopping-cart.svg'

function Header() {
    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="header">
                        <Link to="index.html" className="pcLogo">
                            <img src={pc_logo} alt="pc_logo" />
                        </Link>
                        <div className="headerRight">
                            <Link to="#">
                                <img src={search} alt="search" />
                            </Link>
                            <Link to="#">
                                <img src={cart} alt="cart" />
                            </Link>
                            <Link to="#">
                                <button>註冊/登入</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <nav className="navbar navbar-expand-lg secondary-nav">
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav nav-list">
                        <li className="nav-item">
                            <Link className="nav-link fs-6" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-6" to="/products">商品總覽</Link>
                        </li>
                        <li className="nav-item dropdown d-flex">
                            <button className="nav-link dropdown-toggle fs-6" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                嚴選品牌
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item fs-6" to="#">negaflower</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item fs-6" to="#">陶之家</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item fs-6" to="#">SOS香氛</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-6" to="#">最新消息</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-6" to="#">關於拾柒</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-6" to="#">Q&A</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header