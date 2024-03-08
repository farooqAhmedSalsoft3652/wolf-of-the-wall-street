import { faArrowDown, faArrowUp, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Offcanvas } from 'react-bootstrap';
import { favoriteNews, mostActiveFeeds } from '../../../../../Config/Data';
import { images } from '../../../../../assets';

export const NewsFeedLeft = ({ trial , activeFeeds, favorites, testimonials, className }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const initialTime = 5 * 60; // 5 minutes in seconds
    const [timeRemaining, setTimeRemaining] = useState(initialTime);

    useEffect(() => {
        const timer = setInterval(() => {
            if (timeRemaining > 0) {
                setTimeRemaining(timeRemaining - 1);
            } else {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer); // Cleanup on component unmount

    }, [timeRemaining]);

    const formatTime = (timeInSeconds) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;

        return {
            hours: String(hours).padStart(2, '0'),
            minutes: String(minutes).padStart(2, '0'),
            seconds: String(seconds).padStart(2, '0'),
        };
    };

    const { hours, minutes, seconds } = formatTime(timeRemaining);

    return (
        <div className={`${className?className:''}`}>
            <div className="text-end">
                <button className="transparent-btn white-text d-lg-none" onClick={handleShow}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>

            <Offcanvas show={show} onHide={handleClose} className="newsfeed-offcanvas" responsive="lg">
                <Offcanvas.Body className='d-block'>
                    {trial && (
                        <div className="trial-card">
                            <p className="p-lg semi-bold">5-Minute Trial</p>
                            <div className='d-flex gap-3'>
                                <div className='text-center'>
                                    <h2 className='bold mb-0'>{hours}</h2>
                                    <p className="p-sm mb-0">Hours</p>
                                </div>
                                <h2 className='bold'>:</h2>
                                <div className='text-center'>
                                    <h2 className='bold mb-0'>{minutes}</h2>
                                    <p className="p-sm mb-0">Minutes</p>
                                </div>
                                <h2 className='bold'>:</h2>
                                <div className='text-center'>
                                    <h2 className='bold mb-0'>{seconds}</h2>
                                    <p className="p-sm mb-0">Seconds</p>
                                </div>
                            </div>
                        </div>
                    )}
                    {activeFeeds && (
                        <div className="activefeed-card mt-3">
                            <p className="p-lg semi-bold">Most Active Feeds</p>
                            {mostActiveFeeds.map(item=>(
                                <div className="d-flex align-items-center active-feeds-entries gap-3 flex-wrap" key={item.id}>
                                    <div className='flex-shrink-0'>
                                        <p className="p-md mb-0">{item.title}</p>
                                        <p className="p-sm l-grey-text mb-0">{item.type}</p>
                                    </div>
                                    <div className='text-end flex-grow-1'>
                                        <p className="p-md mb-0">{item.price}</p>
                                        <p className={`p-sm mb-0 ${item.status=="up"?'green-text':'red-text'}`}>{item.status=="up"?<FontAwesomeIcon icon={faArrowUp} />:<FontAwesomeIcon icon={faArrowDown} />} {item.difference}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {favorites && (
                        <div className="activefeed-card mt-3">
                            <p className="p-lg semi-bold">Favourite</p>
                            {favoriteNews.map(item=>(
                                <div className="d-flex align-items-center active-feeds-entries gap-3 flex-wrap" key={item.id}>
                                    <div className='d-flex gap-2 align-items-center'>
                                        <div className="flex-shrink-0">
                                            <img src={item.img} alt="" className="img-fluid currency-icon" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <p className="p-md mb-0">{item.title}</p>
                                            <p className="p-sm l-grey-text mb-0">{item.type}</p>
                                        </div>
                                    </div>
                                    <div className='text-end flex-grow-1'>
                                        <p className="p-md mb-0">{item.price}</p>
                                        <p className={`p-sm mb-0 ${item.status=="up"?'green-text':'red-text'}`}>{item.status=="up"?<FontAwesomeIcon icon={faArrowUp} />:<FontAwesomeIcon icon={faArrowDown} />} {item.difference}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {testimonials && (
                        <div className="activefeed-card mt-3">
                            <p className="p-lg semi-bold">Testimonials</p>
                            <div className="testimonial-card">
                                <img src={images.testimonialImg} alt="" className="img-fluid " />
                                <div className="testimonial-inner mt-2">
                                    <p className="mb-0">Foster Social</p>
                                    <p className="mb-0 p-sm l-grey-text">"Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Aenean Euismod Bibendum Laoreet. Proin Gravida Dolor Sit Amet Lacus Accumsan Et Viverra Justo Commodo. Proin Sodales Pulvinar Tempor. Cum Sociislorem Ipsum Dolor Sit Amet, "</p>
                                </div>
                            </div>
                        </div>
                    )}
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}
