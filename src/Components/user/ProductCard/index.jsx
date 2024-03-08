import React, { useState } from 'react'
import './index.css'
import { images } from '../../../assets'
import SiteButton from '../../Button/button'
import { useNavigate } from 'react-router'
import { SiteModal } from '../../SiteModal'

export const ProductCard = ({ item, myCars }) => {
    const navigate = useNavigate();
    
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const handleClose = () => setShowModal(false)
    const handleClose2 = () => setShowModal2(false)
    const handleShow = () => setShowModal(true)
    const actionMethod = () => {
        setShowModal(false)
        setShowModal2(true)
    }

    return (
        <>
            <div className="product-card">
                <div className="my-2">
                    <div className="product-img">
                        <img src={item.productImages[0]} alt="" className="img-fluid product-card-img" />
                        {myCars ? <span className={`status-tag ${item.status ? 'active-tag' : 'inactive-tag'}`}>{item.status ? 'Active' : 'Inactive'}</span> : ''}
                    </div>
                </div>
                <div className="product-card-inner mb-2 mt-3">
                    {myCars ? '' : (
                        <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                            <span className="fuel-tag">
                                <img src={images.kmIcon} alt="" className="img-fluid" />
                                {item.km} Km
                            </span>
                            <p className="p-md medium mb-0 orange-text">${item.price}</p>
                        </div>
                    )}
                    <p className="p-md mb-0 mt-1 medium">{item.name}</p>
                    <p className="p-sm mb-0 grey-text">{item.description}</p>
                    <hr />
                    <div className="d-flex align-items-center gap-2">
                        {myCars ? (
                            <SiteButton className="border-btn py-2 p-sm px-0 mnw-0 w-50" onClick={handleShow}>Delete</SiteButton>
                        ) :
                            <SiteButton className="border-btn py-2 p-sm px-0 mnw-0 w-50">Message</SiteButton>
                        }
                        <SiteButton className="px-0 mnw-0 py-2 p-sm w-50" onClick={() => navigate(`/product-details/${myCars?'my-car/':''}${item.id}`)}>View Details</SiteButton>
                    </div>
                </div>
            </div>
            
            <SiteModal show={showModal} modalType="true" actionMethod={actionMethod} handleClose={handleClose} modalImg={images.exclamationIcon} modalText="Are you sure you want to delete ?" />
            <SiteModal show={showModal2} handleClose={handleClose2} modalImg={images.checkIcon} modalText="Deleted Successfully" normalModal />

        </>
    )
}
