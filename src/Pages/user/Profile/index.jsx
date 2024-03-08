import React, { useState } from 'react'
import { UserLayout } from '../../../Components/user/Layout'
import { InnerBanner } from '../../../Components/user/InnerBanner'
import { images } from '../../../assets'
import './index.css'
import SiteInput from '../../../Components/Input/input'
import SiteButton from '../../../Components/Button/button'
import SiteTextarea from '../../../Components/Input/textarea'
import { SiteModal } from '../../../Components/SiteModal'
import { useNavigate } from 'react-router'

export const MyProfile = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false)
    const handleShow = () => setShowModal(true)
    return (
        <>
            <UserLayout headerClass="inner-page-header">
                <InnerBanner noSearch />
                <section className="sell-car">
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-lg-11">
                                <div className="row">
                                    <div className="col-lg-6 pe-lg-5 py-sm-5 py-4 sell-car-left position-relative">
                                        <div className="sell-car-inner pe-xxl-4">
                                            <h2>My Profile</h2>
                                            <div className="row">
                                                <div className="col-12 my-3">
                                                    <label htmlFor="" className="site-label ms-0 mb-2">Profile Picture</label>
                                                    <div className="user-profile-img">
                                                        <img src={images.userImg} alt="" className="img-fluid" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 my-3">
                                                    <label htmlFor="" className="site-label ms-0">First Name</label>
                                                    <p className="grey-text mb-0">Bella</p>
                                                </div>
                                                <div className="col-sm-6 my-3">
                                                    <label htmlFor="" className="site-label ms-0">Last Name</label>
                                                    <p className="grey-text mb-0">Edward</p>
                                                </div>
                                                <div className="col-sm-6 my-3">
                                                    <label htmlFor="" className="site-label ms-0">Gender</label>
                                                    <p className="grey-text mb-0">Female</p>
                                                </div>
                                                <div className="col-sm-6 my-3">
                                                    <label htmlFor="" className="site-label ms-0">Email</label>
                                                    <p className="grey-text mb-0">bellaedward@gmail.com</p>
                                                </div>
                                                <div className="col-12 mt-4">
                                                    <div className="d-flex align-items-center gap-3 flex-wrap">
                                                        <SiteButton onClick={()=>navigate('/edit-profile')}>Edit Profile</SiteButton>
                                                        <SiteButton onClick={()=>navigate('/change-password')} className="border-btn">Change Password</SiteButton>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={images.sellCarBg} alt="" className="img-fluid sell-car-right-img" />
                </section>
            </UserLayout>
            <SiteModal show={showModal} handleClose={handleClose} modalImg={images.checkIcon} modalText="Your message has been submitted" normalModal />
        </>
    )
}
