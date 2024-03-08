import React, { useEffect, useState } from 'react'
import { Col, Container, Dropdown, Nav, Navbar, Row } from 'react-bootstrap'
import { images } from '../../../assets'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faBars, faBell, faComments, faMessage, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../../../Context/UserContext/UserContext'
import { ChatCard } from '../ChatCard'
// import { chatItems } from '../../../Config/Data'
import { SiteModal } from '../../SiteModal'
import SiteInput from '../../Input/input'
import { SideMenu } from './SideMenu'

export const UserHeader = (props) => {
    const navigate = useNavigate();
    const { userData, clearUserData } = useAuth();
    const [checkAuth, setCheckAuth] = useState(false);

    useEffect(() => {
        if (userData && userData.userData?.role) {
            setCheckAuth(true);
        }
    }, [userData]);

    const logOut = () => {
        clearUserData();
        handleClose2();
        navigate('/login');
    };

    const [show, setShow] = useState(false);
    const handleAction = () => {
        setShow(false)
        logOut();
    };
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleAction2 = () => {
        setShow2(false)
        setShow(true)
    };
    const handleShow2 = () => setShow2(true);

    return (
        <>
            <header className={`user-header ${props?.className}`}>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <Navbar className='justify-content-between align-items-center'>
                                <div className="order-1 flex-grow-1 flex-1">
                                    <SideMenu />
                                </div>
                                <Navbar.Brand className='order-2 ms-sm-0 me-0 flex-grow-1 me-0 text-center flex-1'>
                                    <Link to={'/'}>
                                        <img src={images.loginLogo} alt="" className="img-fluid site-logo" />
                                    </Link>
                                </Navbar.Brand>
                                <Navbar.Collapse id="navbarScroll" className='order-3 d-inline-flex flex-grow-1 justify-content-end flex-1'>
                                    <Nav className="d-inline-flex align-items-lg-center align-items-start">
                                        {checkAuth == true ? (
                                            <div className='d-flex user-dropdowns-wrapper gap-4 align-items-center justify-content-end'>
                                                <Dropdown align={"end"} className='user-header-dropdown noti-dropdown'>
                                                    <Dropdown.Toggle id="dropdown-basic" className=''>
                                                        <FontAwesomeIcon icon={faComments} className='p-xlg' />
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        {/* <div className="notifications-wrapper">
                                                            {chatItems.map(item => (
                                                                <ChatCard item={item} key={item.id} />
                                                            ))}
                                                        </div> */}
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                <Dropdown align={"end"} className='user-header-dropdown noti-dropdown'>
                                                    <Dropdown.Toggle id="dropdown-basic" className=''>
                                                        <FontAwesomeIcon icon={faBell} className='p-xlg' />
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        {/* <div className="notifications-wrapper">
                                                            {chatItems.map(item => (
                                                                <ChatCard item={item} key={item.id} />
                                                            ))}
                                                        </div> */}
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                                <Dropdown align="end" id="dropdown-menu-align-end" className='user-bg-dropdown'>
                                                    <Dropdown.Toggle id="dropdown-basic" className='transparent-btn'>
                                                        <img src={images.userProfilePic} className='img-fluid user-profile-icon' alt='' />
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <div className="text-center">
                                                            <img src={images.userProfilePic} alt="" className="img-fluid user-profile-pic" />
                                                            <p className="bold mb-2 mt-2">Tom Albert</p>
                                                        </div>
                                                        <Link to="/my-profile">Profile</Link>
                                                        <Link to="/my-rent-cars">My Rent Cars</Link>
                                                        <Link to="/car-rent-logs">Rent My Car List & Logs</Link>
                                                        <Link to="/my-car-list">Sell My Car List</Link>
                                                        <Link to="/carpool-logs">Carpool logs</Link>
                                                        <Link to="/help">Help</Link>
                                                        <Link onClick={handleShow2}>Logout</Link>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        ) : (
                                            <Dropdown align={"end"} className='user-header-dropdown'>
                                                <Dropdown.Toggle id="dropdown-basic" className='user-dropdown-icon'>
                                                    <FontAwesomeIcon icon={faUser} />
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Link to="/login">Login</Link>
                                                    <Link to="/register">Sign Up</Link>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        )}
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                        <Col xl={6} lg={8} md={10} className='mx-auto'>
                            <SiteInput doubleIcon leftIcon={faAt} leftIconClass="border-0" className="pe-5" rightIcon={faSearch} />
                        </Col>
                    </Row>
                </Container>
            </header>
            <SiteModal show={show2} adminModal modalImg={images.exclamationIcon} modalText="Are You Sure You Want To Log Out?" modalType actionMethod={handleAction} handleClose={handleClose2} />
        </>

    )
}
