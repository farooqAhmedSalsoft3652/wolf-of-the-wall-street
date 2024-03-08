import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../../assets'
import './index.css'

export const NotificationCard = (props) => {
    return (
        props.notificationPage ?
            (
                <>
                    <div className="notification-card">
                        <div className="d-flex">
                            <div className="flex-shrink-0">
                                <img src={images.bellIcon} alt="" className="img-fluid bell-icon mt-1" />
                            </div>
                            <div className="flex-grow-1 ms-2">
                                <p className='mb-0 p-lg d-blue-text semi-bold'>{props.item.heading}</p>
                                <p className="my-1 l-grey-text">{props.item.description}</p>
                                <p className="p-sm mb-0 l-grey-text">{props.item.time}</p>
                            </div>
                        </div>
                    </div>
                </>
            )
            : (
                <>
                    <hr className='mb-0 notification-line mt-1' />
                    <Link to={props.item.path}>
                        <div className="d-flex">
                            <div className="flex-shrink-0">
                                <span className="noti-card-bell-icon mt-1">
                                    <img src={images.notiBellIcon} alt="" className="img-fluid" />
                                </span>
                            </div>
                            <div className="flex-grow-1 ms-2">
                                <p className='mb-0 p-sm d-blue-text semi-bold'>{props.item.heading}</p>
                                <p className="p-sm my-1 l-grey-text">{props.item.description}</p>
                                <p className="p-sm mb-0 l-grey-text">{props.item.time}</p>
                            </div>
                        </div>
                    </Link>
                </>
            )
    )
}
