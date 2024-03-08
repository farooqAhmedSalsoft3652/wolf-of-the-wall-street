import React, { useEffect, useState } from 'react'
import { UserLayout } from '../../../../Components/user/Layout'
import { Container, Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import usePageTitle from "../../../../Hooks/usePageTitle";
import {packagesData} from "../../../../Config/Data"
import { useNavigate, useParams } from 'react-router';
import SiteButton from '../../../../Components/Button/button';
import '../style.css'
import { images } from '../../../../assets';
import { SiteModal } from '../../../../Components/SiteModal';

const SubscriptionCheckout = () => {
    usePageTitle("Subscription Details");
    const navigate =  useNavigate();

    const { id } = useParams();
    const [data, setData] = useState([]);
    const [subscriptionModal, setSubscriptionModal] = useState(false);
    const [subscriptionConfirm, setSubscriptionConfirm] = useState(false);

    const [checked1, setChecked1] = useState(false);
    const handleCheckboxChange1 = () => {
      setChecked1(!checked1);
    };


    useEffect(() => {
        const filteredData = packagesData.find((item) => id == item.id);
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
                            <Breadcrumb.Item>Subscription Plans</Breadcrumb.Item>
                            <Breadcrumb.Item active>Card Detail</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                    <Col xs={12} className='page-title'>
                        <h3 className="text-white mb-0 fw-semibold">Card Details</h3>
                    </Col>
                    <Col xs={12}>
                        <div className="package-name mt-4">{data.packageName}</div>  
                        <div class="price mt-3">
                            <h3>${data.packagePrice}<span>/per month</span></h3>
                        </div>
                    </Col>
                    <Col xs={12} className='radio-card my-3'>
                        <div className="d-sm-flex">
                            <div className="flex-shrink-0 mb-3 mb-sm-0">
                                <span className='fw-semibold me-5'>Card Type</span>
                            </div>
                            <div className="flex-grow-1">
                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id={`radio-1`}
                                    label={`New Card`}
                                />
                                <Form.Check
                                    inline
                                    name="group1"
                                    type="radio"
                                    id={`radio-2`}
                                    label={` Existing Card`}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col lg={12} className=''>
                        <div class="form-check radio-card d-flex align-items-center mb-4 gap-3">
                            <Form.Check  type="radio"  name="group1" aria-label="radio 1" id="visa-card" />
                            <label class="form-check-label" for="visa-card">
                                <img src={images.VisaCard1} alt="" class="me-0" />
                            </label>
                            <span className='card-no'>**** **** **** 1224</span>
                        </div>
                        <div class="form-check radio-card d-flex align-items-center mb-4 gap-3">
                            <Form.Check  type="radio"  name="group1" aria-label="radio 1" id="visa-card2" />
                            <label class="form-check-label" for="visa-card2">
                                <img src={images.VisaCard2} alt="" class="me-0" />
                            </label>
                            <span className='card-no'>**** **** **** 1224</span>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div>
                            <label className="checkbox-container d-inline-block p-sm mb-2 me-0">Auto Renewal subscription
                            <input
                                type="checkbox"
                                checked={checked1}
                                onChange={handleCheckboxChange1}
                            />
                            <span className="checkmark mb-1"></span>
                            </label>
                        </div>
                    </Col>
                    <Col lg={12} className='mt-4'> 
                        <SiteButton className="fw-light" onClick={() => setSubscriptionModal(true)}>Pay Now</SiteButton>
                    </Col>
                </Row>
            </Container>
        </section>
    </UserLayout>

    <SiteModal
    show={subscriptionModal}
    modalTitle="Purchase Subscription"
    modalText="Are you sure you want to Purchased Subscription?"
    modalType={true}
    handleClose={()=> setSubscriptionModal(false)}
    actionMethod={() => {
        setSubscriptionModal(false);
        setSubscriptionConfirm(true);
    }}
     />
  
  <SiteModal
    show={subscriptionConfirm}
    normalModal={true}
    modalTitle="Purchase Subscription"
    modalText="Thank you for choosing TheWolfOW! Your subscription not only supports our community but also empowers you with exclusive benefits. We're thrilled to have you as part of our pack. Welcome to TheWolfOW family!"
    handleClose={()=> setSubscriptionConfirm(false)}
    />
  </>
  )
}

export default SubscriptionCheckout
