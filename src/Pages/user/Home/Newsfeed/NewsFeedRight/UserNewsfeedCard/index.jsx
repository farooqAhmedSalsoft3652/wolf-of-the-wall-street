import React, { useState } from 'react'
import { faCommentAlt, faEllipsisH, faExclamationCircle, faHeart, faMessage, faShare, faThumbsDown, faThumbsUp, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from 'react-bootstrap';
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { images } from '../../../../../../assets';

export const UserNewsFeedCard = (props) => {
    return (
        <div className="newsfeed-post">
            <div className="px-3">
                <div className="d-flex justify-content-between gap-2">
                    <div className="flex-grow-1">
                        <div className="d-flex align-items-center gap-3">
                            <div className="flex-shrink-0">
                                <Link>
                                    <img src={props.item.posterImg} alt="" className="img-fluid newsfeed-profile-pic" />
                                </Link>
                            </div>
                            <div className="flex-grow-1">
                                <Link className="p-lg black-text no-underline semi-bold">{props.item.name}</Link>
                                <p className="mb-0 ">{props.item.time}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0">
                        {props.modalNewsfeedCard ? '' : props.item.my == 1 ? (
                            <Dropdown align="end" className='post-dropdown'>
                                <Dropdown.Toggle id="dropdown-basic" className='transparent-btn'>
                                    <FontAwesomeIcon icon={faEllipsisH} />
                                </Dropdown.Toggle>

                                <Dropdown.Menu className=''>
                                    <Link onClick={props.handleClick2}>
                                        <FontAwesomeIcon icon={faExclamationCircle} />
                                        <span>Report</span>
                                    </Link>
                                    <Link onClick={props.handleDelete}>
                                        <FontAwesomeIcon className='text-danger' icon={faTrashAlt} />
                                        <span>Delete</span>
                                    </Link>
                                </Dropdown.Menu>
                            </Dropdown>
                        ) :
                            <Dropdown align="end" className='post-dropdown'>
                                <Dropdown.Toggle id="dropdown-basic" className='transparent-btn'>
                                    <FontAwesomeIcon icon={faEllipsisH} />
                                </Dropdown.Toggle>

                                <Dropdown.Menu className=''>
                                    <Link onClick={props.handleClick2}>
                                        <FontAwesomeIcon icon={faExclamationCircle} />
                                        <span>Report</span>
                                    </Link>
                                </Dropdown.Menu>
                            </Dropdown>
                        }
                    </div>
                </div>
                <p className=" mt-3">{props.item.post}</p>
            </div>
            <button className='transparent-btn w-100' onClick={props.handleClick}>
                {props.item.postImages.length > 0 && (
                    <div className="row">
                        {props.item.postImages.length === 1 && (
                            <div className="col-12">
                                <img
                                    src={props.item.postImages[0].img}
                                    alt=""
                                    className="img-fluid post-sm-img"
                                />
                            </div>
                        )}
                        {props.item.postImages.length > 1 && props.item.postImages.length <= 4 && (
                            props.item.postImages.map((file, index) => (
                                <div key={index} className="col-md-6">
                                    <img
                                        src={file.img}
                                        alt=""
                                        className="img-fluid post-img-bg"
                                    />
                                </div>
                            ))
                        )}
                        {props.item.postImages.length > 4 && (
                            <>
                                {props.item.postImages.slice(0,3).map(ele=>(
                                    <div className="col-6 mt-3">
                                        <img
                                            src={props.item.postImages[3].img}
                                            alt=""
                                            className="img-fluid post-sm-img"
                                        />
                                    </div>
                                ))}
                                <div className="col-6 mt-3">
                                    <div className="post-sm-images">
                                        <img
                                            src={props.item.postImages[3].img}
                                            alt=""
                                            className="img-fluid post-sm-img"
                                        />
                                        <div className="overlay">+{props.item.postImages.length - 4}</div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                )}
            </button>
            <div className="d-flex align-items-center mt-2 py-3 justify-content-between gap-2">
                <button onClick={props.likeModal} className="transparent-btn total-reactions d-flex align-items-center">
                    <span className="like-icon"><FontAwesomeIcon icon={faThumbsUp} /></span>
                    <span className="love-icon"><FontAwesomeIcon icon={faHeart} /></span>
                    <span className="ms-2">{window.screen.width > "575" ? `${props.item.reactions[0].name} and ${props.item.reactions.length - 1} others` : props.item.reactions.length}</span>
                </button>
                <div className="d-flex gap-2 align-items-center pe-3">
                    <button className="transparent-btn me-2"><FontAwesomeIcon icon={faMessage} /> {props.item.comments.length}</button>
                    <button className="transparent-btn ms-2"><FontAwesomeIcon icon={faShare} /> {props.item.shares.length}</button>
                </div>
            </div>
            <div className="post-reaction">
                <div className="react-now">
                    <button className="transparent-btn  p-md"><FontAwesomeIcon icon={faThumbsUp} /> <span className="d-sm-inline-block d-none"> Like</span></button>
                    <div className="post-reactions user-post-reactions gap-3">
                        <button className="transparent-btn"><span className="like-icon"><FontAwesomeIcon icon={faThumbsUp} /></span></button>
                        <button className="transparent-btn"><span className="love-icon"><FontAwesomeIcon icon={faHeart} /></span></button>
                        <button className="transparent-btn"><img src={images.laughReaction} alt="" className="img-fluid reaction-icon" /></button>
                        <button className="transparent-btn"><img src={images.sadReaction} alt="" className="img-fluid reaction-icon" /></button>
                        <button className="transparent-btn"><img src={images.wowReaction} alt="" className="img-fluid reaction-icon" /></button>
                        <button className="transparent-btn"><img src={images.angryReaction} alt="" className="img-fluid reaction-icon" /></button>
                    </div>
                </div>
                <button className="transparent-btn  p-md" onClick={props.handleClick}><FontAwesomeIcon icon={faThumbsDown} /> <span className="d-sm-inline-block d-none"> Dislike</span></button>
                <button className="transparent-btn  p-md" onClick={props.handleClick}><FontAwesomeIcon icon={faCommentAlt} /> <span className="d-sm-inline-block d-none"> Comment</span></button>
                <button className="transparent-btn  p-md" onClick={props.handleClick}><FontAwesomeIcon icon={faShare} /> <span className="d-sm-inline-block d-none"> Share</span></button>
            </div>
            {props.modalNewsfeedCard ?
                props.item.comments.map(e => (
                    <div className="comment-card">
                        <div className="d-flex gap-3">
                            <div className="flex-shrink-0">
                                <Link>
                                    <img src={e.img} alt="" className="img-fluid newsfeed-profile-pic mt-2" />
                                </Link>
                            </div>
                            <div className="flex-grow-1">
                                <div className="comment-card-inner">
                                    <Link className="p-lg black-text no-underline semi-bold">{e.name}</Link>
                                    <p className="mb-0 ">{e.comment}</p>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <div className="flex-grow-1">
                                        <div className="d-flex align-items-center gap-2 ms-3 mt-2">
                                            <div className="react-now">
                                                <button className="transparent-btn  p-md">Like</button>
                                                <div className="post-reactions user-post-reactions gap-3">
                                                    <button className="transparent-btn"><span className="like-icon"><FontAwesomeIcon icon={faThumbsUp} /></span></button>
                                                    <button className="transparent-btn"><span className="love-icon"><FontAwesomeIcon icon={faHeart} /></span></button>
                                                    <button className="transparent-btn"><img src={images.laughReaction} alt="" className="img-fluid reaction-icon" /></button>
                                                    <button className="transparent-btn"><img src={images.sadReaction} alt="" className="img-fluid reaction-icon" /></button>
                                                    <button className="transparent-btn"><img src={images.wowReaction} alt="" className="img-fluid reaction-icon" /></button>
                                                    <button className="transparent-btn"><img src={images.angryReaction} alt="" className="img-fluid reaction-icon" /></button>
                                                </div>
                                            </div>
                                            <button className="transparent-btn  p-md">Reply</button>
                                        </div>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <div className="d-flex align-items-center gap-1">
                                            <p className=" mb-0">{e.reactions.length}</p>
                                            <span className="like-icon"><FontAwesomeIcon icon={faThumbsUp} /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {e.replies.map(ele => (
                            <div className="comment-card ms-sm-4 ms-3 pe-0">
                                <div className="d-flex gap-sm-3 gap-2">
                                    <div className="flex-shrink-0">
                                        <Link>
                                            <img src={e.img} alt="" className="img-fluid newsfeed-profile-pic mt-2" />
                                        </Link>
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="comment-card-inner">
                                            <Link className="p-lg black-text no-underline semi-bold">{e.name}</Link>
                                            <p className="mb-0 ">{e.comment}</p>
                                        </div>
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="flex-grow-1">
                                                <div className="d-flex align-items-center gap-2 ms-3 mt-2">
                                                    <div className="react-now">
                                                        <button className="transparent-btn  p-md">Like</button>
                                                        <div className="post-reactions user-post-reactions gap-3">
                                                            <button className="transparent-btn"><span className="like-icon"><FontAwesomeIcon icon={faThumbsUp} /></span></button>
                                                            <button className="transparent-btn"><span className="love-icon"><FontAwesomeIcon icon={faHeart} /></span></button>
                                                            <button className="transparent-btn"><img src={images.laughReaction} alt="" className="img-fluid reaction-icon" /></button>
                                                            <button className="transparent-btn"><img src={images.sadReaction} alt="" className="img-fluid reaction-icon" /></button>
                                                            <button className="transparent-btn"><img src={images.wowReaction} alt="" className="img-fluid reaction-icon" /></button>
                                                            <button className="transparent-btn"><img src={images.angryReaction} alt="" className="img-fluid reaction-icon" /></button>
                                                        </div>
                                                    </div>
                                                    <button className="transparent-btn  p-md">Reply</button>
                                                </div>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <div className="d-flex align-items-center gap-1">
                                                    <p className=" mb-0">{e.reactions.length}</p>
                                                    <span className="like-icon"><FontAwesomeIcon icon={faThumbsUp} /></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))
                : ''}
        </div>
    )
}
