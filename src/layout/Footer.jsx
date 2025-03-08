import pc_logo from '../assets/images/pc_logo.png'

function Footer() {
    return (
        <>
            <footer>
                <div className="forbgColor">

                    <div className="container">

                        <div className="footerBorder">
                            <div className="container  ">
                                <div className="logoSlogan d-flex flex-column me-5 wwe">
                                    <a href="index.html" className="logo">
                                        <img src={pc_logo} alt="pc_logo" className="" />
                                    </a>
                                    <p>
                                        手工的溫暖，品牌的堅持
                                    </p>
                                </div>
                                <div className="row">
                                    <div className=" bt-40 col-xl-3 col-lg-3 col-md-12 col-sm-12  flex-column">
                                        <h6 className="h6 my-3">網站地圖</h6>
                                        <div className="forMobile">
                                            <a href="javascript:;">商品總覽</a>
                                            <a href="javascript:;">最新消息</a>
                                            <a href="javascript:;">關於拾柒</a>
                                        </div>
                                    </div>
                                    <div className="bt-40 col-xl-3 col-lg-3 col-md-12 col-sm-12  flex-column">
                                        <h6 className="h6 my-3">幫助/政策</h6>
                                        <div className="forMobile">
                                            <a href="javascript:;">服務條款</a>
                                            <a href="javascript:;">隱私政策</a>
                                            <a href="javascript:;">退貨政策</a>
                                            <a href="javascript:;">防詐騙宣導</a>
                                        </div>
                                    </div>
                                    <div className="bt-40 service col-xl-3 col-lg-3 col-md-12 col-sm-12  flex-column flex-wrap">
                                        <h6 className="h6 my-3">客戶服務</h6>
                                        <div className="forMobile">
                                            <a href="javascript:;">常見問題</a>
                                            <a href="javascript:;">退換貨須知</a>
                                            <a href="javascript:;">訂貨進度查詢</a>
                                            <a href="javascript:;">折價卷說明</a>
                                            <a href="javascript:;">品牌合作窗口</a>
                                        </div>
                                    </div>
                                    <div className="  col-xl-3 col-lg-3 col-md-12 col-sm-12 ">
                                        <h6 className=" h6 my-3 ">聯絡我們</h6>
                                        <div className=" footerIcon  d-flex gap-4 my-4">
                                            <a href="#">
                                                <img src="../assets/images/header_footer/Line (dark).png" alt="" />
                                            </a>
                                            <a href="javascript:;">
                                                <img src="../assets/images/header_footer/mail 1.png" alt="" />
                                            </a>
                                            <a href="javascript:;">
                                                <img src="../assets/images/header_footer/Facebook (B&W).png" alt="" />
                                            </a>
                                            <a href="javascript:;">
                                                <img src="../assets/images/header_footer/Instagram(B&W).png" alt="" />
                                            </a>
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
                            <div className="copyright d-flex justify-content-center ">
                                <p>
                                    <img src="../assets/images/header_footer/copyright.png" alt="" />
                                </p>
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