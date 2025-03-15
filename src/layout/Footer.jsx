import SevenImgs from '../assets/images/seven/SevenImgs'
import Icons from '../assets/images/icons/Icons'
import { Link } from 'react-router'

function Footer() {
    return (
        <>
            <footer>
                <div className="forbgColor">

                    <div className="footerBorder">
                        <div className="container">

                            <div className="container  ">
                                <div className="logoSlogan d-flex flex-column me-5 wwe">
                                    <Link to="/" className="logo">
                                        <img src={SevenImgs.pc_logo} alt="pc_logo" className="pc_logo" />
                                    </Link>
                                    <p>
                                        手工的溫暖，品牌的堅持
                                    </p>
                                </div>
                                <div className="row">
                                    <div className=" bt-40 col-xl-3 col-lg-3 col-md-12 col-sm-12  flex-column">
                                        <h6 className="h6 my-3">網站地圖</h6>
                                        <div className="forMobile">
                                            <Link to="/products">商品總覽</Link>
                                            <Link to="/news">最新消息</Link>
                                            <Link to="/sevenStory">關於拾柒</Link>
                                        </div>
                                    </div>
                                    <div className="bt-40 col-xl-3 col-lg-3 col-md-12 col-sm-12  flex-column">
                                        <h6 className="h6 my-3">幫助/政策</h6>
                                        <div className="forMobile">
                                            <Link to="/">服務條款</Link>
                                            <Link to="/">隱私政策</Link>
                                            <Link to="/">退貨政策</Link>
                                            <Link to="/">防詐騙宣導</Link>
                                        </div>
                                    </div>
                                    <div className="bt-40 service col-xl-3 col-lg-3 col-md-12 col-sm-12  flex-column flex-wrap">
                                        <h6 className="h6 my-3">客戶服務</h6>
                                        <div className="forMobile">
                                            <Link to="/Q&A">常見問題</Link>
                                            <Link to="/Q&A">退換貨須知</Link>
                                            <Link to="/Q&A">訂貨進度查詢</Link>
                                            <Link to="/Q&A">折價卷說明</Link>
                                            <Link to="/Q&A">品牌合作窗口</Link>
                                        </div>
                                    </div>
                                    <div className="  col-xl-3 col-lg-3 col-md-12 col-sm-12 ">
                                        <h6 className=" h6 my-3 ">聯絡我們</h6>
                                        <div className=" footerIcon  d-flex gap-4 my-4">
                                            <Link to="/">
                                                <img src={Icons.Line_dark} alt="Line_dark" />
                                            </Link>
                                            <Link to="/">
                                                <img src={Icons.mail} alt="mail" />
                                            </Link>
                                            <Link to="/">
                                                <img src={Icons.Facebook_BW} alt="Facebook_BW" />
                                            </Link>
                                            <Link to="/">
                                                <img src={Icons.Instagram_BW} alt="Instagram_BW" />
                                            </Link>
                                        </div>
                                        <div className="footerMail">
                                            <p>seventeen17@gmail.com</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="copyrightBorder">
                        <div className="container">
                            <div className="copyright d-flex justify-content-center gap-1">
                                <img src={Icons.copyright} alt="copyright" />
                                <p>seventeen 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer