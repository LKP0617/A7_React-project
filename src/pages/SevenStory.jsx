import Header from '../layout/Header';
import Footer from '../layout/Footer';
import sevenImgs from '../assets/images/seven/SevenImgs';
import Icons from '../assets/images/icons/Icons';
import { Link } from 'react-router'

function SevenStory() {
    return (
        <>
            <Header />
            <div className="content">
                <div className="Bg">
                    <div className="container ">
                        <div className="heart d-flex flex-column  align-items-center">
                            <img src={sevenImgs.pc_logo_lg} alt="拾柒LOGO" />
                                <h2 className="pc">拾柒, 以心選物, 傳遞質感與故事</h2>
                                <h2 className="mobile">拾柒, 以心選物<br /> 傳遞質感與故事</h2>
                        </div>
                    </div>
                </div>
                <div className="areaSecondBg">
                    <div className="container areaSecond d-flex flex-column justify-content-center ">
                        <h2>拾柒的誕生</h2>
                        <h3>質感之選 品味之源</h3>
                        <div className="areaSecondBgMobile">
                            <div>
                                <p className="Body-1">在繁忙的現代生活中,拾柒應運而生,專注於挑選全球高品質產品,承載著我們對經典與美學的追求。</p>
                                <p className="Body-1">我們相信,生活的品味源於選擇。每一件進入“拾柒”的商品,從材質到工藝,無不精挑細選。</p>
                                <p className="Body-1">拾柒不僅提供商品,更傳遞生活態度。加入我們, 讓質感融入生活,品味不凡。</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="insist">
                    <div className="container">
                        <h2>我們的堅持</h2>
                        <ul className="insist-list">
                            <li className="card">
                                <img src={sevenImgs.prc_time} alt="沙漏" />
                                    <h5>經典與永恆<br />時光流轉,經典不變</h5>
                            </li>
                            <li className="card">
                                <img src={sevenImgs.prc_pen_holder} alt="筆筒" />
                                    <h5>質感與工藝<br />每個細節, 皆工匠精神體現</h5>
                            </li>
                            <li className="card">
                                <img src={sevenImgs.prc_clay_pot} alt="陶壺" />
                                    <h5>可持續與責任<br />尊重自然,關注未來</h5>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="areaThirdBg">
                    <div className="container join ">
                        <div className="pc">
                            <h4 className="life">生活的品味源於選擇，每一件進入“拾柒”的商品</h4>
                            <h4>從材質到工藝，無不精挑細選，拾柒不僅提供商品,更傳遞生活態度</h4>
                            <h3 className="join-us">加入我們</h3>
                            <h3>讓質感融入生活,品味不凡</h3>
                        </div>
                        <div className="mobile">
                            <h6 className=" h6 life">生活的品味源於選擇</h6>
                            <h6>每一件進入“拾柒”的商品，從材質到工藝，無不精挑細選，拾柒不僅提供商品,更傳遞生活態度</h6>
                            <h5 className="join-us">加入我們</h5>
                            <h5 className="join-us-t">讓質感融入生活,品味不凡</h5>
                        </div>
                    </div>
                </div>
                <div className="container forMobileWhite">
                    <div className="nothing"></div>
                </div>
                <div className="Bg">
                    <div className="container">
                        <div className="values d-flex flex-column justify-content-between align-items-center">
                            <h2>卓越價值觀</h2>
                            <div className="d-flex flex-column justify-content-between align-items-center">
                                <img src={sevenImgs.pc_logo_lg} alt="拾柒LOGO" />
                                    <h4 className="pc">我們以不變的核心價值,迎接未來的挑戰與機遇<br /> 拾柒,將持續為您帶來不凡的生活體驗</h4>
                                    <div className="mobile d-flex flex-column justify-content-between align-items-center">
                                        <h6>我們以不變的核心價值</h6>
                                        <h6>迎接未來的挑戰與機遇</h6>
                                        <h6>拾柒, </h6>
                                        <h6>將持續為您帶來不凡的生活體驗 </h6>
                                    </div>
                                    <Link to="/products" className=" d-flex justify-content-center align-items-center">探索我們的選品</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default SevenStory