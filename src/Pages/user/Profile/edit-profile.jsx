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

export const UserEditProfile = () => {
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false)
        navigate('/my-profile')
    };
    const [profilePic, setProfilePic] = useState(images.userImg);
    function changePic(e) {
        setProfilePic(URL.createObjectURL(e.target.files[0]))
    }

    const [formData, setFormData] = useState({
        firstName: "Bella",
        lastName: "Edward",
        contact: "1234567890",
        date: ""
    })

    const genderEntries = [
        {
            id: 1,
            value: "SelectGender",
            option: "Select"
        },
        {
            id: 2,
            value: "Male",
            option: "Male"
        },
        {
            id: 3,
            value: "Female",
            option: "Female"
        },
    ]

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
                                                <Link className='black-text' onClick={()=>navigate(-1)}><h3><FontAwesomeIcon icon={faArrowLeft} /></h3></Link>
                                                <h2>Edit Profile</h2>
                                            </div>
                                            <div className="user-profile-img mt-3">
                                                <img src={profilePic} alt="" className="img-fluid" />
                                                <label htmlFor="upload-dp" className="camera-btn"><FontAwesomeIcon icon={faCamera} /></label>
                                                <div className="d-none"><input type="file" onChange={changePic} id="upload-dp" /></div>
                                            </div>
                                            <div className='my-3'>
                                                <label className="mb-1 semi-bold ms-3">First Name</label>
                                                <SiteInput onChange={(event) => { setFormData({ ...formData, firstName: event.target.value }) }} className="border-input" value={formData.firstName} />
                                            </div>
                                            <div className='my-3'>
                                                <label className="mb-1 semi-bold ms-3">Last Name</label>
                                                <SiteInput onChange={(event) => { setFormData({ ...formData, lastName: event.target.value }) }} className="border-input" value={formData.lastName} />
                                            </div>
                                            <div className='my-3'>
                                                <label className="mb-1 semi-bold ms-3">Contact</label>
                                                <SiteSelect items={genderEntries} />
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
            <SiteModal show={show} handleClose={handleClose} modalImg={images.checkIcon} modalText="Profile has been Updated Successfully" normalModal />
        </>
    )
}
