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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCamera } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { SiteSelect } from '../../../Components/Input/select'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'

export const UserChangePassword = () => {
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false)
        navigate('/my-profile')
    };

    const [eyeIcon, seteyeIcon] = useState(faEyeSlash);
    const [passwordType, setPasswordType] = useState(0)

    const toggleIcon = () => {
        if (eyeIcon == faEyeSlash) {
            seteyeIcon(faEye)
            setPasswordType(1);
        }
        else {
            seteyeIcon(faEyeSlash);
            setPasswordType(0);
        }
    }
    const [eyeIcon2, seteyeIcon2] = useState(faEyeSlash);
    const [passwordType2, setPasswordType2] = useState(0)
    const toggleIcon2 = () => {
        if (eyeIcon2 == faEyeSlash) {
            seteyeIcon2(faEye)
            setPasswordType2(1);
        }
        else {
            seteyeIcon2(faEyeSlash);
            setPasswordType2(0);
        }
    }
    const [eyeIcon3, seteyeIcon3] = useState(faEyeSlash);
    const [passwordType3, setPasswordType3] = useState(0)
    const toggleIcon3 = () => {
        if (eyeIcon3 == faEyeSlash) {
            seteyeIcon3(faEye)
            setPasswordType3(1);
        }
        else {
            seteyeIcon3(faEyeSlash);
            setPasswordType3(0);
        }
    }

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
                                            <div className="d-flex align-items-center gap-1">
                                                <Link className='black-text' onClick={() => navigate(-1)}><h3><FontAwesomeIcon icon={faArrowLeft} /></h3></Link>
                                                <h2>Change Password</h2>
                                            </div>
                                            <div className="my-3">
                                                <SiteInput
                                                    label="Current Password"
                                                    requiredStar
                                                    type={passwordType == 0 ? "password" : "text"}
                                                    placeholder="Enter Current Password"
                                                    iconFunction={toggleIcon}
                                                    pass
                                                    eyeIcon={eyeIcon}
                                                />
                                            </div>
                                            <div className="my-3">
                                                <SiteInput
                                                    label="New Password"
                                                    requiredStar
                                                    type={passwordType2 == 0 ? "password" : "text"}
                                                    placeholder="Enter New Password"
                                                    iconFunction={toggleIcon2}
                                                    pass
                                                    eyeIcon={eyeIcon2}
                                                />
                                            </div>
                                            <div className="my-3">
                                                <SiteInput
                                                    label="Confirm New Password"
                                                    requiredStar
                                                    type={passwordType3 == 0 ? "password" : "text"}
                                                    placeholder="Confirm New Password"
                                                    iconFunction={toggleIcon3}
                                                    pass
                                                    eyeIcon={eyeIcon3}
                                                />
                                            </div>
                                            <div className="mt-4">
                                                <SiteButton onClick={handleShow}>Update</SiteButton>
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
            <SiteModal show={show} handleClose={handleClose} modalImg={images.checkIcon} modalText="Password has been Changed Successfully" normalModal />
        </>
    )
}
