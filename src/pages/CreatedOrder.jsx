import Header from '../layout/Header';
import Footer from '../layout/Footer';
import sevenImgs from '../assets/images/seven/SevenImgs';
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
                        <h5 className="card-title">訂單成立</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">訂單編號</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

                <div className='d-flex justify-content-center gap-4'>
                    <div className='d-flex justify-content-center mt-4 margin-bottom-1'>
                        <Link to="/" className='btn rounded-pill toOrderBtn'>
                            <p className='fs-8'>查看訂單</p>
                        </Link>
                    </div>
                    <div className='d-flex justify-content-center mt-4 margin-bottom-1'>
                        <Link to="/" className='btn rounded-pill backHomeBtn'>
                            <p className='fs-8'>返回首頁</p>
                        </Link>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default createdOrder