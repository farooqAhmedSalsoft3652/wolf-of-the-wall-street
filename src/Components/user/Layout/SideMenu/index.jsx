import { faBars, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

export const SideMenu = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button className="transparent-btn white-text" onClick={handleShow}>
                <FontAwesomeIcon icon={faBars} className='p-xlg' />
            </button>

            <Offcanvas show={show} className="menu-canvas" onHide={handleClose}>
                <Offcanvas.Body>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faCaretRight} />
                            <Link>Home Feeds</Link></li>
                        <li>
                            <FontAwesomeIcon icon={faCaretRight} />
                            <Link to="/wolf-school-articles">The Wolf OW School</Link></li>
                        <li>
                            <FontAwesomeIcon icon={faCaretRight} />
                            <Link>Articles And Discussions</Link></li>
                        <li>
                            <FontAwesomeIcon icon={faCaretRight} />
                            <Link>My Network</Link></li>
                        <li>
                            <FontAwesomeIcon icon={faCaretRight} />
                            <Link>Merchandise</Link></li>
                        <li>
                            <FontAwesomeIcon icon={faCaretRight} />
                            <Link>Testimonials</Link></li>
                        <li>
                            <FontAwesomeIcon icon={faCaretRight} />
                            <Link>Favorites</Link></li>
                        <li>
                            <FontAwesomeIcon icon={faCaretRight} />
                            <Link>Live Feed</Link></li>
                        <li>
                            <FontAwesomeIcon icon={faCaretRight} />
                            <Link to="/subscription-plans">Subscription Plan</Link></li>
                        <li>
                            <FontAwesomeIcon icon={faCaretRight} />
                            <Link>Polls</Link></li>
                        <li>
                            <FontAwesomeIcon icon={faCaretRight} />
                            <Link>Help</Link></li>
                        <li>
                            <FontAwesomeIcon icon={faCaretRight} />
                            <Link>Bookmark</Link></li>
                        <li>
                            <FontAwesomeIcon icon={faCaretRight} />
                            <Link>Leaderboard</Link></li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>


    )
}

