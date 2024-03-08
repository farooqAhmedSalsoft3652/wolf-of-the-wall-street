import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/UserContext/UserContext";
import SiteButton from "../../../Components/Button/button";
import { cookiePolicy, privacyPolicy, termsAndConditions, userAuthCredentials } from "../../../Config/Data";
import { faArrowLeftLong, faCalendarAlt, faCamera, faCaretDown, faCertificate, faCookie, faEnvelope, faEye, faEyeSlash, faFileAlt, faLock, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { AuthLayout } from "../../../Components/AuthLayout";
import SiteInput from "../../../Components/Input/input";
import { Tabs, Tab, Nav, Row, Col, Form } from "react-bootstrap";
import './index.css'
import { images } from "../../../assets";
import { SiteModal } from "../../../Components/SiteModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Particles from "../../../Components/ParticleEffect";
import { SiteSelect } from "../../../Components/Input/select";
import SiteTextarea from "../../../Components/Input/textarea";


const CreateProfile = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [show2, setShow2] = useState(false);
  const handleShow2 = () => setShow2(true);
  const handleClose2 = () => setShow2(false);

  const actionMethod = () => {
    handleClose()
    handleShow2()
  }

  const navigate = useNavigate();

  const [profilePic, setProfilePic] = useState(images.imgPlaceholder);
  function changePic(e) {
    setProfilePic(URL.createObjectURL(e.target.files[0]))
  }

  const genderOptions = [
    {
      id: 1,
      value: "SelectGender",
      option: "Select Gender"
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
      <section className={`login-bg profile-inner pt-0`}>
        <Particles />
        {/* ParticleEffect is rendered inside the login-bg container */}
        <div className="login-inner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 text-center py-4">
                <Link><img src={images.loginLogo} alt="" className="img-fluid login-logo" /></Link>
              </div>
              <div className="col-lg-8 mx-auto col-xl-7 pe-lg-5">
                <div className="login-left-card">
                  <div className="profile-header">
                    <p className="p-lg medium mb-0">Complete Your Profile</p>
                  </div>
                  <div className="login-left-card-inner pt-3 w-100">
                    <form>
                      <div className="profile-pic mx-auto">
                        <img src={profilePic} alt="" className="img-fluid" />
                      </div>
                      <div className="text-center">
                        <label htmlFor="upload-profile-img" className="text-center cursor-pointer mt-1 mb-4 underline">Upload Image</label>
                        <div className="d-none"><input type="file" onChange={changePic} name="" id="upload-profile-img" /></div>
                      </div>
                      <SiteInput
                        type="email"
                        oneIcon
                        leftIcon={faEnvelope}
                        placeholder="Enter Your Email Address"
                      />
                      <div className="mt-4">
                        <SiteInput
                          type="text"
                          oneIcon
                          leftIcon={faUser}
                          placeholder="Username"
                        />
                      </div>
                      <div className="mt-4">
                        <SiteInput
                          type="text"
                          oneIcon
                          leftIcon={faUser}
                          placeholder="Enter First Name"
                        />
                      </div>
                      <div className="mt-4">
                        <SiteInput
                          type="text"
                          oneIcon
                          leftIcon={faUser}
                          placeholder="Enter Last Name"
                        />
                      </div>
                      <div className="mt-4">
                        <SiteInput
                          type="text"
                          oneIcon
                          leftIcon={faPhone}
                          placeholder="Phone Number"
                        />
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          className="p-sm l-grey-text mb-0 mt-2 ms-2"
                          label="Enable 2 Factor Authentication On Phone"
                        />
                      </div>
                      <div className="mt-4">
                        <SiteSelect
                          oneIcon
                          leftIcon={faUser}
                          items={genderOptions}
                        />
                      </div>
                      <div className="mt-4">
                        <SiteTextarea
                          rows="5"
                          type="text"
                          className="ps-4"
                          placeholder="This Would Be Your Profile Biography"
                        />
                      </div>
                      <div className="mt-4">
                        <SiteInput
                          type="date"
                          oneIcon
                          leftIcon={faCalendarAlt}
                          placeholder="Enter Last Name"
                        />
                      </div>
                      <div className="text-center">
                        <SiteButton type="button" onClick={handleShow} className="mt-4 w-100">Create Profile</SiteButton>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SiteModal show={show2} handleClose={handleClose2}>
        <div className="text-center">
          <h3 className="semi-bold p-xlg">Profile Created</h3>
          <p className="px-sm-5 mb-0 white-text">Your profile has been created successfully! Get started with a subscription package by clicking "Purchase Now", or enjoy a <span className="semi-bold"> 5-minute trial </span> by clicking "Continue". </p>
        </div>
        <div className="d-flex align-items-center gap-3 mt-4 justify-content-center">
          <SiteButton className="white-border-btn" onClick={()=>navigate('/login')}>Continue</SiteButton>
          <SiteButton onClick={() => navigate('/subscription-plans')}>Purchase Now</SiteButton>
        </div>
      </SiteModal>
      <SiteModal show={show} handleClose={handleClose}>
        <div className="text-center">
          <h3 className="semi-bold">Verification Code</h3>
          <p className="p-xs mb-0 l-grey-text">Enter the verification code sent to your phone <br /> that ends with **** ***6434</p>
        </div>
        <form className="mt-4">
          <SiteInput
            type="number"
            oneIcon
            leftIcon={faCertificate}
            placeholder="Enter code"
          />
          <div className="text-end mt-2">
            <button className="white-text transparent-btn underline">Resend Code</button>
          </div>
          <div className="d-flex align-items-center mt-4 justify-content-center flex-wrap gap-3">
            <SiteButton type="button" onClick={actionMethod}>Continue</SiteButton>
          </div>
        </form>
      </SiteModal>
    </>
  );
};

export default CreateProfile;
