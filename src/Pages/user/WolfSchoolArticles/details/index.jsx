import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import {schoolArticlesData } from '../../../../Config/Data';
import { UserLayout } from '../../../../Components/user/Layout';
import { Breadcrumb, Col, Container, Row, Card   } from 'react-bootstrap';
import usePageTitle from '../../../../Hooks/usePageTitle';
import BackButton from '../../../../Components/backButton'
import { images } from "../../../../assets/index"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faEye, faHeart, faMessage, faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const WolfSchoolArticlesDetails = () => {
    usePageTitle("WOWS School - Articles || Details");
    const navigate =  useNavigate();
    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const filteredData = schoolArticlesData.find((item) => id == item.id);
        // console.log(filteredData, id, "text");
        if (filteredData) {
          setData(filteredData);
        }
      }, []);

  return (
    <>
    <UserLayout className="test">
        <section className="page-section subscription-details">
            <Container>
                <Row>
                    <Col xs={12} className="mb-3">
                        <Breadcrumb>
                            <Breadcrumb.Item>The Wolf OW School</Breadcrumb.Item>
                            <Breadcrumb.Item active>The Wolf OW School Detail</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                    <Col xs={12} className='page-title mb-4'>
                        <div className="d-flex align-items-center gap-2 ">
                            <BackButton />
                            <h3 className="text-white mb-0 fw-semibold">Has Remote Work Peaked?</h3>
                        </div>
                    </Col>
                    <Col xs={12}>
                        <Row>
                            <Col lg={8}>
                                <div className="primary-bg p-3 article-detail">
                                    <div className="articel-banner mb-3">
                                        <img class="allign-self-start" src={data.articleImage} alt="" />
                                    </div>
                                    <div className="view-count mb-2">
                                        <FontAwesomeIcon icon={faEye} className='me-1' />23 veiws
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h3 className='title'>{data.title}</h3>
                                        {data?.category &&(
                                            <h6 className='fw-semibold category-name mb-2'>{data.category}</h6>
                                        )}
                                    </div>
                                    <div class="d-flex justify-content-between gap-2 mt-2 mb-3">
                                        <div class="flex-grow-1">
                                            <div class="d-flex align-items-center gap-3">
                                                <div class="flex-shrink-0">
                                                    <Link>
                                                        <img src={images.newsfeedProfilePic} alt="" className="img-fluid newsfeed-profile-pic" />
                                                    </Link>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <Link className="p-lg text-white no-underline semi-bold">{data.authorName}</Link>
                                                    <p className="mb-0 text-gray">{data.designation}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                        {data?.articleText &&(
                                            <Card.Text>{data.articleText}</Card.Text>
                                        )}
                                        {/* <div className="d-flex align-items-center pt-2 pb-3 justify-content-between gap-2">
                                            <button  className="transparent-btn total-reactions d-flex align-items-center">
                                                <span className="like-icon text-white"><FontAwesomeIcon icon={faThumbsUp} /></span>
                                                <span className="love-icon text-white"><FontAwesomeIcon icon={faThumbsDown} /></span>
                                                <span className="ms-2 text-white count">{window.screen.width > "575" ? `${data.reactions[0].name} and ${data.reactions.length - 1} others` : data.reactions.length}</span>
                                            </button>
                                            <div className="d-flex align-items-center share-like-btns">
                                                <button className="transparent-btn text-white"><FontAwesomeIcon icon={faMessage} /> {data.comments.length}</button>
                                                <button className="transparent-btn text-white ms-1"><FontAwesomeIcon icon={faShare} /> {data.shares.length}</button>
                                            </div>
                                        </div> */}
                                        <div className="post-reaction">
                                            {/* <div className="react-now">
                                                <button className="transparent-btn  p-md"><FontAwesomeIcon icon={faThumbsUp} /> <span className="d-sm-inline-block d-none"> Like</span></button>
                                                <div className="post-reactions user-post-reactions gap-3">
                                                    <button className="transparent-btn"><span className="like-icon"><FontAwesomeIcon icon={faThumbsUp} /></span></button>
                                                    <button className="transparent-btn"><span className="love-icon"><FontAwesomeIcon icon={faHeart} /></span></button>
                                                    <button className="transparent-btn"><img src={images.laughReaction} alt="" className="img-fluid reaction-icon" /></button>
                                                    <button className="transparent-btn"><img src={images.sadReaction} alt="" className="img-fluid reaction-icon" /></button>
                                                    <button className="transparent-btn"><img src={images.wowReaction} alt="" className="img-fluid reaction-icon" /></button>
                                                    <button className="transparent-btn"><img src={images.angryReaction} alt="" className="img-fluid reaction-icon" /></button>
                                                </div>
                                            </div> */}
                                            {/* <button className="transparent-btn  p-md" onClick={props.handleClick}><FontAwesomeIcon icon={faThumbsDown} /> <span className="d-sm-inline-block d-none"> Dislike</span></button>
                                            <button className="transparent-btn  p-md" onClick={props.handleClick}><FontAwesomeIcon icon={faCommentAlt} /> <span className="d-sm-inline-block d-none"> Comment</span></button>
                                            <button className="transparent-btn  p-md" onClick={props.handleClick}><FontAwesomeIcon icon={faShare} /> <span className="d-sm-inline-block d-none"> Share</span></button> */}
                                        </div>

                                    
                                </div>
                            </Col>
                            <Col lg={3} className=''>
                                <h6>Related Articles</h6>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    </UserLayout>
    </>
  )
}

export default WolfSchoolArticlesDetails
