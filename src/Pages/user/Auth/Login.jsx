import React, { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/UserContext/UserContext";
import SiteButton from "../../../Components/Button/button";
import { cookiePolicy, privacyPolicy, termsAndConditions, userAuthCredentials } from "../../../Config/Data";
import { faArrowLeftLong, faCaretDown, faCertificate, faCookie, faEnvelope, faEye, faEyeSlash, faFileAlt, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { AuthLayout } from "../../../Components/AuthLayout";
import SiteInput from "../../../Components/Input/input";
import { Tabs, Tab, Nav, Row, Col } from "react-bootstrap";
import './index.css'
import { images } from "../../../assets";
import { SiteModal } from "../../../Components/SiteModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const UserLogin = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [show2, setShow2] = useState(false);
  const handleShow2 = () => setShow2(true);
  const handleClose2 = () => setShow2(false);
  const [show3, setShow3] = useState(false);
  const handleShow3 = () => setShow3(true);
  const handleClose3 = () => setShow3(false);
  const [show4, setShow4] = useState(false);
  const handleShow4 = () => setShow4(true);
  const handleClose4 = () => setShow4(false);

  const actionMethod = () => {
    handleClose()
    handleShow2()
  }

  const actionMethod2 = () => {
    handleClose2()
    handleShow3()
  }

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

  const [eyeIcon4, seteyeIcon4] = useState(faEyeSlash);
  const [passwordType4, setPasswordType4] = useState(0)
  const toggleIcon4 = () => {
    if (eyeIcon4 == faEyeSlash) {
      seteyeIcon4(faEye)
      setPasswordType4(1);
    }
    else {
      seteyeIcon4(faEyeSlash);
      setPasswordType4(0);
    }
  }

  const [eyeIcon5, seteyeIcon5] = useState(faEyeSlash);
  const [passwordType5, setPasswordType5] = useState(0)
  const toggleIcon5 = () => {
    if (eyeIcon5 == faEyeSlash) {
      seteyeIcon5(faEye)
      setPasswordType5(1);
    }
    else {
      seteyeIcon5(faEyeSlash);
      setPasswordType5(0);
    }
  }

  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const [checked2, setChecked2] = useState(false);

  const handleCheckboxChange2 = () => {
    setChecked2(!checked2);
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { setUserData } = useAuth();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    let currentUser = userAuthCredentials.find(authCredential => formData.email == authCredential.email && formData.password == authCredential.password)
    setUserData(currentUser);
    if (currentUser) {
      navigate('/');
    }
    else {
      alert("Wrong Credentials")
      // document.getElementById("falseCredentials").classList.remove("d-none");
    }
  };

  return (
    <>
      <AuthLayout>
        <>
          <Tabs
            defaultActiveKey={1}
            className="w-100 auth-tabs"
            id="uncontrolled-tab-example"
          >
            <Tab eventKey={1} title="Login" key={1}>
              <div className="w-100 login-left-card-inner">
                <form onSubmit={handleClick}>
                  <SiteInput
                    type="email"
                    oneIcon
                    leftIcon={faEnvelope}
                    onChange={(event) => {
                      setFormData({ ...formData, email: event.target.value });
                    }}
                    placeholder="Enter Your Email Address"
                  />
                  <div className="mt-4">
                    <SiteInput
                      type={passwordType == 0 ? "password" : "text"}
                      onChange={(event) => {
                        setFormData({ ...formData, password: event.target.value });
                      }}
                      doubleIcon
                      leftIcon={faLock}
                      placeholder="Enter Your Password"
                      iconFunction={toggleIcon}
                      eyeIcon={eyeIcon}
                    />
                  </div>
                  <div className="d-flex align-items-center mt-3 flex-wrap gap-2 justify-content-between">
                    <label className="checkbox-container grey-text mb-0 me-0">Remember Me
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={handleCheckboxChange}
                      />
                      <span className="checkmark"></span>
                    </label>
                    <Link onClick={handleShow} className='white-text'>Forget Password</Link>
                  </div>
                  <div className="text-center">
                    <SiteButton type="submit" className="mt-4 w-100">Login</SiteButton>
                  </div>
                </form>
              </div>
            </Tab>
            <Tab eventKey={2} title="Register" key={2}>
              <div className="w-100 login-left-card-inner">
                <form onSubmit={()=>navigate('/create-profile')}>
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
                      placeholder="Referral Code"
                    />
                  </div>
                  <div className="mt-4">
                    <SiteInput
                      type={passwordType4 == 0 ? "password" : "text"}
                      doubleIcon
                      leftIcon={faLock}
                      placeholder="Enter Password"
                      iconFunction={toggleIcon4}
                      eyeIcon={eyeIcon4}
                    />
                  </div>
                  <div className="mt-4">
                    <SiteInput
                      type={passwordType5 == 0 ? "password" : "text"}
                      doubleIcon
                      leftIcon={faLock}
                      placeholder="Confirm Password"
                      iconFunction={toggleIcon5}
                      eyeIcon={eyeIcon5}
                    />
                  </div>
                  <div className="d-flex align-items-center gap-1 mt-2 flex-wrap">
                    <label className="checkbox-container p-sm white-text mb-0 me-0">I  agree to our a
                      <input
                        type="checkbox"
                        checked={checked2}
                        onChange={handleCheckboxChange2}
                      />
                      <span className="checkmark mb-1"></span>
                    </label>
                    <button type="button" className="blue-text p-sm transparent-btn underline" onClick={handleShow4}> Terms</button>, <button type="button" className="blue-text p-sm transparent-btn underline" onClick={handleShow4}> Privacy Policy</button>, and <button type="button" className="blue-text p-sm transparent-btn underline" onClick={handleShow4}> Cookies Policy</button>
                  </div>
                  <img src={images.captcha} alt="" className="img-fluid mt-3" />
                  <div className="text-center">
                    <SiteButton type="submit" className="mt-4 w-100">Register</SiteButton>
                  </div>
                </form>
              </div>
            </Tab>
          </Tabs>
        </>
      </AuthLayout>
      <SiteModal show={show} handleClose={handleClose}>
        <div className="text-center">
          <h3 className="semi-bold">Password Recovery</h3>
          <p className="p-xs mb-0 l-grey-text">Enter your email address below and we’ll send you a <br /> link to reset your password</p>
        </div>
        <form className="mt-4">
          <SiteInput
            type="email"
            oneIcon
            leftIcon={faEnvelope}
            placeholder="Email"
          />
          <div className="d-flex align-items-center mt-4 justify-content-between flex-wrap gap-3">
            <Link onClick={handleClose} className="white-text no-underline"><FontAwesomeIcon icon={faArrowLeftLong} className="orange-text" /> Back to Login</Link>
            <SiteButton type="button" onClick={actionMethod}>Continue</SiteButton>
          </div>
        </form>
      </SiteModal>
      <SiteModal show={show2} handleClose={handleClose2}>
        <div className="text-center">
          <h3 className="semi-bold">Verification Code</h3>
          <p className="p-xs mb-0 l-grey-text">Enter the verification code sent to your email</p>
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
          <div className="d-flex align-items-center mt-4 justify-content-between flex-wrap gap-3">
            <Link onClick={handleClose2} className="white-text no-underline"><FontAwesomeIcon icon={faArrowLeftLong} className="orange-text" /> Back to Login</Link>
            <SiteButton type="button" onClick={actionMethod2}>Continue</SiteButton>
          </div>
        </form>
      </SiteModal>
      <SiteModal show={show3} handleClose={handleClose3}>
        <div className="text-center">
          <h3 className="semi-bold">Recover Password</h3>
          <p className="p-xs mb-0 l-grey-text">Enter Your Password</p>
        </div>
        <form className="mt-4">
          <SiteInput
            type={passwordType2 == 0 ? "password" : "text"}
            doubleIcon
            leftIcon={faLock}
            placeholder="Enter Your Password"
            iconFunction={toggleIcon2}
            eyeIcon={eyeIcon2}
          />
          <div className="mt-4">
            <SiteInput
              type={passwordType3 == 0 ? "password" : "text"}
              doubleIcon
              leftIcon={faLock}
              placeholder="Enter Your Password"
              iconFunction={toggleIcon3}
              eyeIcon={eyeIcon3}
            />
          </div>
          <div className="d-flex align-items-center mt-4 justify-content-between flex-wrap gap-3">
            <Link onClick={handleClose3} className="white-text no-underline"><FontAwesomeIcon icon={faArrowLeftLong} className="orange-text" /> Back to Login</Link>
            <SiteButton type="button" onClick={handleClose3}>Continue</SiteButton>
          </div>
        </form>
      </SiteModal>
      <SiteModal modalBodyClass="py-0" show={show4} className="full-screen-modal" handleClose={handleClose4}>
        <div className="container-fluid">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col lg={4} xl={3} className="my-3 pe-4 modal-separator">
                <Nav variant="pills" className="flex-column terms-pills">
                  <div className="text-lg-start text-center">
                    <Link><img src={images.loginLogo} alt="" className="img-fluid" /></Link>
                  </div>
                  <div className="d-flex flex-lg-column flex-row align-items-lg-start justify-content-lg-start align-items-center justify-content-center flex-wrap gap-3 mt-lg-5 mt-4">
                    <Nav.Item className="w-lg-100">
                      <Nav.Link eventKey="first" className="d-flex align-items-center gap-2">
                        <div className="flex-grow-1 d-flex align-items-center gap-2">
                          <FontAwesomeIcon icon={faLock} />
                          Privacy Policy
                        </div>
                        <div className="flex-shrink-0">
                          <span className="rotating-arrow"><FontAwesomeIcon icon={faCaretDown}/></span>
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="w-lg-100">
                      <Nav.Link eventKey="second" className="d-flex align-items-center gap-2">
                        <div className="flex-grow-1 d-flex align-items-center gap-2">
                          <FontAwesomeIcon icon={faFileAlt} />
                          Terms and Conditions
                        </div>
                        <div className="flex-shrink-0">
                          <span className="rotating-arrow"><FontAwesomeIcon icon={faCaretDown}/></span>
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="w-lg-100">
                      <Nav.Link eventKey="third" className="d-flex align-items-center gap-2">
                        <div className="flex-grow-1 d-flex align-items-center gap-2">
                          <FontAwesomeIcon icon={faCookie} />
                          Cookie Policies
                        </div>
                        <div className="flex-shrink-0">
                          <span className="rotating-arrow"><FontAwesomeIcon icon={faCaretDown}/></span>
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  </div>
                </Nav>
              </Col>
              <Col lg={8} xl={9} className="my-3 ps-lg-5">
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <div className="py-lg-4">
                      <h3>Privacy Policy</h3>
                      {privacyPolicy.map(ele=>(
                        <div key={ele.id}>
                          <p className="p-md mt-3 mb-2 medium">{ele.heading}</p>
                          <p className="p-sm l-grey-text">{ele.policy}</p>
                          {ele.img?<img src={ele.img} alt="" className="img-fluid w-100" /> :''}
                        </div>
                      ))}
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <div className="py-lg-4">
                      <h3>Terms and Conditions</h3>
                      {termsAndConditions.map(ele=>(
                        <div key={ele.id}>
                          <p className="p-md mt-3 mb-2 medium">{ele.heading}</p>
                          <p className="p-sm l-grey-text">{ele.term}</p>
                          {ele.img?<img src={ele.img} alt="" className="img-fluid w-100" /> :''}
                        </div>
                      ))}
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <div className="py-lg-4">
                      <h3>Cookie Policy</h3>
                      {cookiePolicy.map(ele=>(
                        <div key={ele.id}>
                          <p className="p-md mt-3 mb-2 medium">{ele.heading}</p>
                          <p className="p-sm l-grey-text">{ele.policy}</p>
                          {ele.img?<img src={ele.img} alt="" className="img-fluid w-100" /> :''}
                        </div>
                      ))}
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </SiteModal>
    </>
  );
};

export default UserLogin;
