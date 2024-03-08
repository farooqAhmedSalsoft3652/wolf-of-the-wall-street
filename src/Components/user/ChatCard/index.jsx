import React from 'react'
import './index.css'

export const ChatCard = ({item}) => {
    return (
        <div className="d-flex mt-3">
            <div className="flex-shrink-0">
                <img src={item.img} alt="" className="img-fluid chat-img" />
            </div>
            <div className="flex-grow-1 ms-2">
                <div className="d-flex align-items-center justify-content-between gap-2">
                    <p className='mb-0 p-sm semi-bold'>{item.sender}</p>
                    <p className="p-xs mb-0 l-grey-text">{item.time}</p>
                </div>
                <p className="p-xs my-1 chat-message l-grey-text">{item.message}</p>
            </div>
        </div>
    )
}
