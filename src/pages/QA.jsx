import Header from '../layout/Header';
import Footer from '../layout/Footer';
import sevenImgs from '../assets/images/seven/SevenImgs';
import Icons from '../assets/images/icons/Icons';

function QA() {
    return (
        <>
            <Header />
            <div className="container qa-bg">
                <div className="question-content">
                    <h2 className="text-center mt-4">Q&A</h2>
                    <div className="accordion" id="qaAccordion">
                        <div className="accordion-item">
                            <h3 className="accordion-header" id="heading1">
                                <a title="如何選擇適合我的商品" className="accordion-button collapsed" data-bs-toggle="collapse" href="#collapse1" role="button" aria-controls="collapse1">
                                    Q: 如何選擇適合我的商品?
                                </a>
                            </h3>
                            <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#qaAccordion">
                                <div className="accordion-body Body2">
                                    我們的選品團隊精心挑選了各類獨特商品,並在每個產品頁面提供詳細的描述與建議搭配,
                                    幫助您找到最符合您需求的產品。
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h3 className="accordion-header" id="heading2">
                                <a title="商品都是正品嗎?" className="accordion-button collapsed" data-bs-toggle="collapse" href="#collapse2" role="button" aria-controls="collapse2">
                                    Q: 商品都是正品嗎?
                                </a>
                            </h3>
                            <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#qaAccordion">
                                <div className="accordion-body Body2">
                                    我們保證所有商品皆為品牌正品,直接來自於官方授權的供應商。每一件商品在上架前都經過嚴格檢驗,確保品質無虞。
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h3 className="accordion-header" id="heading3">
                                <a title="我如何確定商品的尺寸或規格?" className="accordion-button collapsed" data-bs-toggle="collapse" href="#collapse3" role="button" aria-controls="collapse3">
                                    Q: 我如何確定商品的尺寸或規格?
                                </a>
                            </h3>
                            <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#qaAccordion">
                                <div className="accordion-body Body2">
                                    每個商品的尺寸或規格資訊都會詳細列在商品頁面,並附有尺寸表或參考圖。
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h3 className="accordion-header" id="heading4">
                                <a title="是否可以使用折扣碼?" className="accordion-button collapsed" data-bs-toggle="collapse" href="#collapse4" role="button" aria-controls="collapse4">
                                    Q: 是否可以使用折扣碼?
                                </a>
                            </h3>
                            <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#qaAccordion">
                                <div className="accordion-body Body2">
                                    我們接受有效的折扣碼,您可以在結帳時輸入折扣碼,系統會自動計算折扣金額。請注意,部分折扣碼可能僅適用於特定商品或活動期間。
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h3 className="accordion-header" id="heading5">
                                <a title="如何加入選品店的會員計劃?" className="accordion-button collapsed" data-bs-toggle="collapse" href="#collapse5" role="button" aria-controls="collapse5">
                                    Q: 如何加入選品店的會員計劃?
                                </a>
                            </h3>
                            <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#qaAccordion">
                                <div className="accordion-body Body2">
                                    您可以在我們的網站上免費註冊成為會員,享受會員專屬的優惠和活動通知。
                                    註冊過程簡單,只需填寫基本資料即可。
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h3 className="accordion-header" id="heading6">
                                <a title="如何獲取最新的選品資訊?" className="accordion-button collapsed" data-bs-toggle="collapse" href="#collapse6" role="button" aria-controls="collapse6">
                                    Q: 如何獲取最新的選品資訊?
                                </a>
                            </h3>
                            <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6"
                                data-bs-parent="#qaAccordion">
                                <div className="accordion-body Body2">
                                    我們接受有效的折扣碼,您可以在結帳時輸入折扣碼,系統會自動計算折扣金額。請注意,部分折扣碼可能僅適用於特定商品或活動期間。
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h3 className="accordion-header" id="heading7">
                                <a title="如何參加選品店的活動或促銷?" className="accordion-button collapsed" data-bs-toggle="collapse" href="#collapse7" role="button" aria-controls="collapse7">
                                    Q: 如何參加選品店的活動或促銷?
                                </a>
                            </h3>
                            <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7"
                                data-bs-parent="#qaAccordion">
                                <div className="accordion-body Body2">
                                    我們接受有效的折扣碼,您可以在結帳時輸入折扣碼,系統會自動計算折扣金額。請注意,部分折扣碼可能僅適用於特定商品或活動期間。
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

export default QA