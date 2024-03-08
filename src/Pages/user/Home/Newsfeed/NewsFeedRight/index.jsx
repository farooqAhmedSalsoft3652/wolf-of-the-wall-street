import React, { useState } from 'react'
import { userNewsFeed } from '../../../../../Config/Data';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { UserNewsFeedCard } from './UserNewsfeedCard';
import { SiteModal } from '../../../../../Components/SiteModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';
import SiteTextarea from '../../../../../Components/Input/textarea';
import { images } from '../../../../../assets';
import SiteButton from '../../../../../Components/Button/button';
import SiteInput from '../../../../../Components/Input/input';

export const NewsFeedRight = () => {
    const [fileUrls, setFileUrls] = useState([]);

    const handleFileUpload = (event) => {
        const files = event.target.files;
        const urls = Array.from(files).map((file) => URL.createObjectURL(file));
        setFileUrls((prevUrls) => [...prevUrls, ...urls]);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const files = event.dataTransfer.files;
        const urls = Array.from(files).map((file) => URL.createObjectURL(file));
        setFileUrls(urls);
    };

    const handleDeleteImage = (index) => {
        const updatedUrls = [...fileUrls];
        updatedUrls.splice(index, 1);
        setFileUrls(updatedUrls);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };
    let currentEntry = {};
    const [modalEntry, setModalEntry] = useState({});
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [show2, setShow2] = useState(false);
    const handleShow2 = (id) => {
        currentEntry = userNewsFeed.find(e => e.id == id)
        setModalEntry(currentEntry);
        console.log(currentEntry)
        setShow2(true)
    };
    const handleClose2 = () => setShow2(false);
    const [show3, setShow3] = useState(false);
    const handleShow3 = () => {
        handleClose2();
        setShow3(true);
    };
    const handleClose3 = () => {
        setShow3(false)
        setShow2(true);
    };
    const [show4, setShow4] = useState(false);
    const handleShow4 = (id) => {
        currentEntry = userNewsFeed.find(e => e.id == id)
        setModalEntry(currentEntry);
        console.log(currentEntry)
        setShow4(true)
    };
    const handleClose4 = () => setShow4(false);
    const [show5, setShow5] = useState(false);
    const handleShow5 = () => setShow5(true);
    const handleClose5 = () => setShow5(false);
    return (
        <>
            <div className="newsfeed-wrapper">
                <div className="upload-post">
                    <div className="d-flex align-items-center gap-2">
                        <div className="flex-shrink-0">
                            <Link className='d-block'><img src={images.newsfeedProfilePic} alt="" className="img-fluid newsfeed-profile-pic" /></Link>
                        </div>
                        <div className="flex-grow-1">
                            <div className="upload-post-card" onClick={handleShow}>
                                <p className="mb-0">What’s on your mind?</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center gap-3 flex-wrap mt-3">
                        <label htmlFor="" onClick={handleShow} className="upload-post-content upload-post-img">
                            <div className="flex-shrink-0">
                                <img src={images.uploadImgIcon} alt="" className="img-fluid" />
                            </div>
                            <div className="flex-grow-1">
                                <span>Upload Image</span>
                            </div>
                        </label>
                        <label htmlFor="" onClick={handleShow} className="upload-post-content upload-post-video">
                            <div className="flex-shrink-0">
                                <img src={images.uploadVideoIcon} alt="" className="img-fluid" />
                            </div>
                            <div className="flex-grow-1">
                                <span>Upload Video</span>
                            </div>
                        </label>
                    </div>
                </div>
                <h6 className='mt-3 mb-4'>Newsfeed</h6>
                {userNewsFeed.map(ele => (
                    <UserNewsFeedCard key={ele.id} handleDelete={handleShow5} handleClick2={() => handleShow4(ele.id)} handleClick={() => handleShow2(ele.id)} item={ele} />
                ))}
            </div>
            <SiteModal
                show={show}
                handleClose={handleClose}
                userModal
                className="newsfeed-modal"
            >
                <div className="border-line">
                    <p className="bold mb-0 p-lg">Create Post</p>
                </div>
                <div className="px-3 mt-3">
                    <SiteTextarea placeholder="What's In your Mind" rows="7" />
                    <div className="upload-profile-pictures" onDrop={handleDrop} onDragOver={handleDragOver}>
                        {fileUrls.length > 0 ? (
                            <>
                                <div className="profile-pictures-preview mt-4">
                                    {fileUrls.map((url, index) => (
                                        <div className="position-relative">
                                            <div key={index} className="image-container">
                                                <img src={url} className="img-fluid business-profile-pic" />
                                                <button
                                                    type="button"
                                                    onClick={() => handleDeleteImage(index)}
                                                    className="delete-img"
                                                >
                                                    <FontAwesomeIcon icon={faTimes} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-end">
                                    <label htmlFor="uploadProfilePictures" className="cursor-pointer orange-text me-3 semi-bold">
                                        + Add More
                                    </label>
                                    <div className="d-none">
                                        <input
                                            type="file"
                                            id="uploadProfilePictures"
                                            onChange={handleFileUpload}
                                            multiple
                                        />
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className='text-center'>
                                <label htmlFor="" className="cursor-pointer">
                                    <img src={images.uploadImg} alt="" className="img-fluid" />
                                </label>
                                <div className="d-none">
                                    <input
                                        type="file"
                                        id="uploadProfilePictures"
                                        onChange={handleFileUpload}
                                        multiple
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="d-flex align-items-center gap-3 flex-wrap mt-3">
                        <label htmlFor="uploadProfilePictures" className="upload-post-content upload-post-img">
                            <div className="flex-shrink-0">
                                <img src={images.uploadImgIcon} alt="" className="img-fluid" />
                            </div>
                            <div className="flex-grow-1">
                                <span>Upload Image</span>
                            </div>
                        </label>
                        <label htmlFor="uploadProfilePictures" className="upload-post-content upload-post-video">
                            <div className="flex-shrink-0">
                                <img src={images.uploadVideoIcon} alt="" className="img-fluid" />
                            </div>
                            <div className="flex-grow-1">
                                <span>Upload Video</span>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <SiteButton className="user-btn" onClick={handleClose}>Post</SiteButton>
                </div>
            </SiteModal>
            <SiteModal
                show={show2}
                handleClose={handleClose2}
                userModal
                className="newsfeed-modal"
            >
                <UserNewsFeedCard likeModal={handleShow3} modalNewsfeedCard item={modalEntry} />
                <div className="position-relative">
                    <SiteInput placeholder="Enter Comment" />
                    <button className="transparent-btn right-icon"><FontAwesomeIcon className='p-md' icon={faPaperPlane} /></button>
                </div>
            </SiteModal>
            <SiteModal
                show={show3}
                handleClose={handleClose3}
                userModal
                className="newsfeed-modal"
            >
                <button className="close-btn transparent-btn" onClick={handleClose3}><FontAwesomeIcon icon={faTimes} /></button>
                <p className="p-lg mb-0 custom-border-bottom bold">People Who Reacted</p>
                {modalEntry.reactions?.map(e => (
                    <div className="d-flex align-items-center mt-3 gap-2">
                        <div className="flex-shrink-0">
                            <div className="position-relative d-inline-block">
                                <img src={e.img} alt="" className="img-fluid liker-img" />
                                <span className="reaction">
                                    <img src={e.reaction == 1 ? images.likeReaction : e.reaction == 2 ? images.loveReaction : e.reaction == 3 ? images.laughReaction : e.reaction == 4 ? images.wowReaction : e.reaction == 5 ? images.sadReaction : e.reaction == 6 ? images.angryReaction : ''} alt="" className="img-fluid" />
                                </span>
                            </div>
                        </div>
                        <div className="flex-grow-1">
                            <p className="mb-0 bold">{e.name}</p>
                        </div>
                    </div>
                ))}
            </SiteModal>
            <SiteModal
                show={show4}
                handleClose={handleClose4}
                userModal
                className="newsfeed-modal"
            >
                <p className="p-lg bold mb-0 custom-border-bottom">Create Post</p>
                <SiteTextarea className="mt-3" rows={6} value={modalEntry.post} />
                <div className="upload-profile-pictures" onDrop={handleDrop} onDragOver={handleDragOver}>
                    {fileUrls.length > 0 ? (
                        <>
                            <div className="profile-pictures-preview mt-4">
                                {fileUrls.map((url, index) => (
                                    <div className="position-relative">
                                        <div key={index} className="image-container">
                                            <img src={url} className="img-fluid business-profile-pic" />
                                            <button
                                                type="button"
                                                onClick={() => handleDeleteImage(index)}
                                                className="delete-img"
                                            >
                                                <FontAwesomeIcon icon={faTimes} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="text-end">
                                <label htmlFor="uploadProfilePictures" className="cursor-pointer orange-text me-3 semi-bold">
                                    + Add More
                                </label>
                                <div className="d-none">
                                    <input
                                        type="file"
                                        id="uploadProfilePictures"
                                        onChange={handleFileUpload}
                                        multiple
                                    />
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className='text-center'>
                            <label htmlFor="" className="cursor-pointer">
                                <img src={images.uploadImg} alt="" className="img-fluid" />
                            </label>
                            <div className="d-none">
                                <input
                                    type="file"
                                    id="uploadProfilePictures"
                                    onChange={handleFileUpload}
                                    multiple
                                />
                            </div>
                        </div>
                    )}
                </div>
                <div className="d-flex align-items-center gap-3 flex-wrap mt-3">
                    <label htmlFor="uploadProfilePictures" className="upload-post-content upload-post-img">
                        <div className="flex-shrink-0">
                            <img src={images.uploadImgIcon} alt="" className="img-fluid" />
                        </div>
                        <div className="flex-grow-1">
                            <span>Upload Image</span>
                        </div>
                    </label>
                    <label htmlFor="uploadProfilePictures" className="upload-post-content upload-post-video">
                        <div className="flex-shrink-0">
                            <img src={images.uploadVideoIcon} alt="" className="img-fluid" />
                        </div>
                        <div className="flex-grow-1">
                            <span>Upload Video</span>
                        </div>
                    </label>
                </div>
                <div className="text-center">
                    <SiteButton className="user-btn mt-4" buttonText="Update" onClick={handleClose4} />
                </div>
            </SiteModal>

            <SiteModal userModal show={show5} handleClose={handleClose5} modalImg={images.exclamationIcon} modalTitle="Remove Post" modalText="Are you sure you wish to Remove this post?" >
                <button className="transparent-btn close-btn" onClick={handleClose5}><FontAwesomeIcon icon={faTimes} /></button>
                <div className="d-flex flex-wrap gap-3 mt-3 align-items-center justify-content-center">
                    <SiteButton className="border-btn" buttonText="No" onClick={handleClose5} />
                    <SiteButton className="user-btn" buttonText="Yes" onClick={handleClose5} />
                </div>
            </SiteModal>
        </>
    )
}
