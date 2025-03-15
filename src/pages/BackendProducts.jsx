import { useEffect, useRef, useState } from 'react'
import axios, { Axios } from 'axios'
import { Modal } from 'bootstrap';
import Header from '../layout/Header';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

const defaultModalState = {
    images: [""],
    title: "",
    brand: "",
    brand_logo: "",
    category: "",
    sub_category: [""],
    unit: "",
    origin_price: "",
    price: "",
    description: "",
    details: "",
    specifications: "",
    add_on_items: "",
    is_enabled: 0,
};

export default function BackendProducts() {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            // const res = await axios.get(`${BASE_URL}/v2/api/${API_PATH}/admin/products/all`); // 管理者
            const res = await axios.get(`${BASE_URL}/v2/api/${API_PATH}/products/all`); // 客戶
            setProducts(res.data.products)
            // console.log("API 取得的所有產品", res.data.products);
            console.log("取得產品成功");
        } catch (error) {
            alert('取得產品失敗');
        }
    };

    useEffect(() => {
        getProducts();
    }, [])

    const productModalRef = useRef(null);
    const delProductModalRef = useRef(null);
    const [modalMode, setModalMode] = useState(null);

    useEffect(() => {
        new Modal(productModalRef.current, { backdrop: false });

        new Modal(delProductModalRef.current, { backdrop: false });
    }, [])

    const handleOpenProductModal = (mode, product) => {
        setModalMode(mode);

        if (mode === 'create') {
            setSelectedProduct(defaultModalState);
        } else {
            setSelectedProduct({
                ...product,
                add_on_items: product.add_on_items || [""],
                description: product.description || [""],
                details: product.details || [""],
                specifications: product.specifications || [""],
                sub_category: product.sub_category || [""],
            });
        }

        const modalInstance = Modal.getInstance(productModalRef.current);
        modalInstance.show();
    }

    const handleCloseProductModal = () => {
        const modalInstance = Modal.getInstance(productModalRef.current);
        modalInstance.hide();
    }

    const handleOpenDelProductModal = (product) => {
        setSelectedProduct(product);
        const modalInstance = Modal.getInstance(delProductModalRef.current);
        modalInstance.show();
    }

    const handleCloseDelProductModal = () => {
        const modalInstance = Modal.getInstance(delProductModalRef.current);
        modalInstance.hide();
    }

    const [selectedProduct, setSelectedProduct] = useState(defaultModalState);

    const handleModalInputChange = (e) => {
        const { value, name, type, checked } = e.target;

        setSelectedProduct({
            ...selectedProduct,
            [name]: type === "checkbox" ? checked : value
        })
    }

    const handleImageChange = (e, index) => {
        const { value } = e.target;

        const newImages = [...selectedProduct.images];
        newImages[index] = value;

        setSelectedProduct({
            ...selectedProduct,
            images: newImages
        })
    }

    const handleAddImage = () => {
        const newImages = [...selectedProduct.images, ''];

        setSelectedProduct({
            ...selectedProduct,
            images: newImages
        })
    }

    const handleRemoveImage = () => {
        const newImages = [...selectedProduct.images];

        newImages.pop();

        setSelectedProduct({
            ...selectedProduct,
            images: newImages
        })
    }

    const createProduct = async () => {
        try {
            await axios.post(`${BASE_URL}/v2/api/${API_PATH}/admin/product`,
                {
                    data: {
                        ...selectedProduct,
                        origin_price: Number(selectedProduct.origin_price),
                        price: Number(selectedProduct.price),
                        is_enabled: selectedProduct.is_enabled ? 1 : 0
                    }
                });
            getProducts();
            setIsContent(true);
        } catch (error) {
            alert('新增產品失敗');
        }
    }

    const updateProduct = async () => {
        try {
            await axios.put(`${BASE_URL}/v2/api/${API_PATH}/admin/product/${selectedProduct.id}`,
                {
                    data: {
                        ...selectedProduct,
                        origin_price: Number(selectedProduct.origin_price),
                        price: Number(selectedProduct.price),
                        is_enabled: selectedProduct.is_enabled ? 1 : 0
                    }
                }
            );
            getProducts();
            setIsContent(true);
        } catch (error) {
            alert('編輯產品失敗');
        }
    }

    const delProduct = async () => {
        try {
            await axios.delete(`${BASE_URL}/v2/api/${API_PATH}/admin/product/${selectedProduct.id}`,
                {
                    data: {
                        ...selectedProduct,
                        origin_price: Number(selectedProduct.origin_price),
                        price: Number(selectedProduct.price),
                        is_enabled: selectedProduct.is_enabled ? 1 : 0
                    }
                });
            getProducts();
            setIsContent(true);
        } catch (error) {
            alert('刪除產品失敗');
        }
    }

    const handleUpdateProduct = async () => {
        const apiCall = modalMode === 'create' ? createProduct : updateProduct;

        try {
            await apiCall();
            getProducts();
            handleCloseProductModal();
        } catch (error) {
            alert('更新產品失敗')
        }
    }

    const handleDelProduct = async () => {
        try {
            await delProduct();

            getProducts();
            handleCloseDelProductModal();
        } catch (error) {
            alert('刪除產品失敗');
        }
    }

    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col">
                        <div className='d-flex justify-content-between'>
                            <h2 className="fw-bolder">產品列表</h2>
                            <button onClick={() => handleOpenProductModal('create')} type="button" className='btn btn-success btn-sm'>建立新的產品</button>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">產品名稱</th>
                                    <th scope="col">品牌館</th>
                                    <th scope="col">類別</th>
                                    <th scope="col">規格</th>
                                    <th scope="col">原價</th>
                                    <th scope="col">售價</th>
                                    <th scope="col">是否啟用</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product) => (
                                    <tr key={product.id} className="align-middle">
                                        <th scope="row">{product.title}</th>
                                        <th>{product.brand}</th>
                                        <th>{product.category}</th>
                                        <td>
                                            <select id="features" className="form-select" aria-label="Default select">
                                                <option value>{product.features}</option>
                                            </select>
                                        </td>
                                        <td>{product.origin_price}</td>
                                        <td>{product.price}</td>
                                        <td>{product.is_enabled ? <span className="text-success">啟用</span> : <span>未啟用</span>}</td>
                                        <td>
                                            {/* <button type="button" className="btn btn-primary" onClick={() => { setProducts(product) }}>查看詳細資訊</button> */}
                                            <div className="btn-group">
                                                <button onClick={() => handleOpenProductModal('edit', product)} type="button" className="btn btn-outline-primary btn-sm">編輯</button>
                                                <button onClick={() => handleOpenDelProductModal(product)} type="button" className="btn btn-outline-danger btn-sm">刪除</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <div ref={productModalRef} id="productModal" className="modal" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content border-0 shadow">
                        <div className="modal-header border-bottom">
                            <h5 className="modal-title fs-4">{modalMode === 'create' ? '新增產品' : '編輯產品'}</h5>
                            <button onClick={handleCloseProductModal} type="button" className="btn-close" aria-label="Close"></button>
                        </div>

                        <div className="backProductModal modal-body p-4">
                            <div className="row g-4">
                                <div className="col-md-4">
                                    <div className="mb-4">
                                        <label htmlFor="primary-image" className="form-label">
                                            主圖
                                        </label>
                                        <div className="input-group">
                                            <input
                                                value={selectedProduct.images}
                                                onChange={handleModalInputChange}
                                                name="imageUrl"
                                                type="text"
                                                id="primary-image"
                                                className="form-control"
                                                placeholder="請輸入圖片連結"
                                            />
                                        </div>
                                        <img
                                            src={selectedProduct.images}
                                            alt={selectedProduct.title}
                                            className="img-fluid"
                                        />
                                    </div>

                                    {/* 副圖 */}
                                    <div className="border border-2 border-dashed rounded-3 p-3">
                                        {selectedProduct.images?.map((image, index) => (
                                            <div key={index} className="mb-2">
                                                <label
                                                    htmlFor={`images-${index + 1}`}
                                                    className="form-label"
                                                >
                                                    圖片 {index + 1}
                                                </label>
                                                <input
                                                    value={image}
                                                    onChange={(e) => handleImageChange(e, index)}
                                                    id={`images-${index + 1}`}
                                                    type="text"
                                                    placeholder={`圖片網址 ${index + 1}`}
                                                    className="form-control mb-2"
                                                />
                                                {image && (
                                                    <img
                                                        src={image}
                                                        alt={`圖片 ${index + 1}`}
                                                        className="img-fluid mb-2"
                                                    />
                                                )}
                                            </div>
                                        ))}
                                        <div className="btn-group w-100">
                                            {selectedProduct.images.length < 5 && selectedProduct.images[selectedProduct.images.length - 1] !== '' && (
                                                <button onClick={handleAddImage} className="btn btn-outline-primary btn-sm w-100">新增圖片</button>
                                            )}
                                            {selectedProduct.images.length > 1 && (
                                                <button onClick={handleRemoveImage} className="btn btn-outline-danger btn-sm w-100">取消圖片</button>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-8">
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">
                                            標題
                                        </label>
                                        <input
                                            value={selectedProduct.title}
                                            onChange={handleModalInputChange}
                                            name="title"
                                            id="title"
                                            type="text"
                                            className="form-control"
                                            placeholder="請輸入標題"
                                        />
                                    </div>

                                    <div className="mb-3 d-flex gap-3">
                                        <div className='col'>
                                            <label htmlFor="brand" className="form-label">
                                                品牌
                                            </label>
                                            <input
                                                value={selectedProduct.brand}
                                                onChange={handleModalInputChange}
                                                name="brand"
                                                id="brand"
                                                type="text"
                                                className="form-control"
                                                placeholder="請輸入品牌"
                                            />
                                        </div>
                                        <div className='col-8'>
                                            <div className='d-flex gap-2 brand_logo'>
                                                <div className='col-9'>
                                                    <label htmlFor="brand_logo" className="form-label">
                                                        品牌圖片
                                                    </label>
                                                    <input
                                                        value={selectedProduct.brand_logo}
                                                        onChange={handleModalInputChange}
                                                        name="brand_logo"
                                                        id="brand_logo"
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="請輸入品牌圖片"
                                                    />
                                                </div>
                                                <img
                                                    src={selectedProduct.brand_logo}
                                                    alt={selectedProduct.brand}
                                                    className="img-fluid col-2"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="category" className="form-label">
                                            類別
                                        </label>
                                        <input
                                            value={selectedProduct.category}
                                            onChange={handleModalInputChange}
                                            name="category"
                                            id="category"
                                            type="text"
                                            className="form-control"
                                            placeholder="請輸入類別"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="sub_category" className="form-label">
                                            子類別
                                        </label>
                                        <input
                                            value={selectedProduct.sub_category}
                                            onChange={handleModalInputChange}
                                            name="sub_category"
                                            id="sub_category"
                                            type="text"
                                            className="form-control"
                                            placeholder="請輸入子類別"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="unit" className="form-label">
                                            單位
                                        </label>
                                        <input
                                            value={selectedProduct.unit}
                                            onChange={handleModalInputChange}
                                            name="unit"
                                            id="unit"
                                            type="text"
                                            className="form-control"
                                            placeholder="請輸入單位"
                                        />
                                    </div>

                                    <div className="row g-3 mb-3">
                                        <div className="col-6">
                                            <label htmlFor="origin_price" className="form-label">
                                                原價
                                            </label>
                                            <input
                                                value={selectedProduct.origin_price}
                                                onChange={handleModalInputChange}
                                                name="origin_price"
                                                id="origin_price"
                                                type="number"
                                                className="form-control"
                                                placeholder="請輸入原價"
                                            />
                                        </div>
                                        <div className="col-6">
                                            <label htmlFor="price" className="form-label">
                                                售價
                                            </label>
                                            <input
                                                value={selectedProduct.price}
                                                onChange={handleModalInputChange}
                                                name="price"
                                                id="price"
                                                type="number"
                                                className="form-control"
                                                placeholder="請輸入售價"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">
                                            產品描述
                                        </label>
                                        <textarea
                                            value={selectedProduct.description}
                                            onChange={handleModalInputChange}
                                            name="description"
                                            id="description"
                                            className="form-control"
                                            rows={4}
                                            placeholder="請輸入產品描述"
                                        ></textarea>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="details" className="form-label">
                                            說明內容
                                        </label>
                                        <textarea
                                            value={selectedProduct.details}
                                            onChange={handleModalInputChange}
                                            name="details"
                                            id="details"
                                            className="form-control"
                                            rows={4}
                                            placeholder="請輸入說明內容"
                                        ></textarea>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="specifications" className="form-label">
                                            規格
                                        </label>
                                        <textarea
                                            value={selectedProduct.specifications[""]}
                                            onChange={handleModalInputChange}
                                            name="specifications"
                                            id="specifications"
                                            className="form-control"
                                            rows={4}
                                            placeholder="請輸入規格"
                                        ></textarea>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="add_on_items" className="form-label">
                                            加購商品
                                        </label>
                                        <textarea
                                            value={selectedProduct.add_on_items}
                                            onChange={handleModalInputChange}
                                            name="add_on_items"
                                            id="add_on_items"
                                            className="form-control"
                                            rows={4}
                                            placeholder="請輸入加購商品"
                                        ></textarea>
                                    </div>

                                    <div className="form-check">
                                        <input
                                            checked={selectedProduct.is_enabled}
                                            onChange={handleModalInputChange}
                                            name="is_enabled"
                                            type="checkbox"
                                            className="form-check-input"
                                            id="isEnabled"
                                        />
                                        <label className="form-check-label" htmlFor="isEnabled">
                                            是否啟用
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer border-top bg-light">
                            <button onClick={handleCloseProductModal} type="button" className="btn btn-secondary">
                                取消
                            </button>
                            <button onClick={handleUpdateProduct} type="button" className="btn btn-primary">
                                確認
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div
                ref={delProductModalRef}
                className="modal fade"
                id="delProductModal"
                tabIndex="-1"
                style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">刪除產品</h1>
                            <button
                                onClick={handleCloseDelProductModal}
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            你是否要刪除
                            <span className="text-danger fw-bold">{selectedProduct.title}</span>
                        </div>
                        <div className="modal-footer">
                            <button
                                onClick={handleCloseDelProductModal}
                                type="button"
                                className="btn btn-secondary"
                            >
                                取消
                            </button>
                            <button onClick={handleDelProduct} type="button" className="btn btn-danger">
                                刪除
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
