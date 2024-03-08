import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './index.css'

export const ReviewCard = ({ item }) => {
    return (
        <div className="review-card">
            <div className="flex-shrink-0">
                <img src={item.img} alt="" className="img-fluid review-card-img" />
            </div>
            <div className="flex-grow-1">
                <div className="d-flex gap-2 mt-2 justify-content-between">
                    <div className="flex-grow-1">
                        <p className="semi-bold mb-1">{item.name}</p>
                        <div className="d-flex gap-1 align-items-center">
                            <FontAwesomeIcon icon={faStar} className='yellow-text' />
                            <FontAwesomeIcon icon={faStar} className='yellow-text' />
                            <FontAwesomeIcon icon={faStar} className='yellow-text' />
                            <FontAwesomeIcon icon={faStar} className='yellow-text' />
                            <FontAwesomeIcon icon={faStar} className='l-grey-text' />
                        </div>
                    </div>
                    <div className="flex-shrink-0">
                        <p className="p-xs m-grey-text mb-0">{item.date}</p>
                    </div>
                </div>
                <p className="m-grey-text mt-3 mb-0">{item.review}</p>
            </div>
        </div>
    )
}
