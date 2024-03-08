import React, { useEffect, useState } from 'react'
import { UserLayout } from '../../../../Components/user/Layout'
import { Container, Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import usePageTitle from "../../../../Hooks/usePageTitle";
import {packagesData} from "../../../../Config/Data"
import { useNavigate, useParams } from 'react-router';
import SiteButton from '../../../../Components/Button/button';
import SiteInput from '../../../../Components/Input/input';
import '../style.css'
import { SiteSelect } from '../../../../Components/Input/select';

const SubscriptionDetails = () => {
    usePageTitle("Subscription Details");
    const navigate =  useNavigate();
    const { id } = useParams();
    const [data, setData] = useState([]);

    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);

    const handleCheckboxChange1 = () => {
      setChecked1(!checked1);
    };

    const handleCheckboxChange2 = () => {
      setChecked2(!checked2);
    };

    const monthsEntries = [
        {
            id: 1,
            value: "SelectMonths",
            option: "Months"
        },
        {
            id: 2,
            value: "Jan",
            option: "Jan"
        },
        {
            id: 3,
            value: "Feb",
            option: "Feb"
        },
    ]
    const yearsEntries = [
        {
            id: 1,
            value: "SelectYear",
            option: "Year"
        },
        {
            id: 2,
            value: "2020",
            option: "2020"
        },
        {
            id: 3,
            value: "2021",
            option: "2021"
        },
        {
            id: 3,
            value: "2022",
            option: "2022"
        },
        {
            id: 3,
            value: "2023",
            option: "2023"
        },
        {
            id: 3,
            value: "2024",
            option: "2024"
        },
    ]

    useEffect(() => {
        const filteredData = packagesData.find((item) => id == item.id);
        // console.log(filteredData, id, "text");
        if (filteredData) {
          setData(filteredData);
        }
      }, []);
      
  return (
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
                    <Col xs={12} className='mb-3 mt-2'>
                        <h5 className='fw-semibold mb-0'>New Card</h5>
                    </Col>
                    <Col xs={12} lg={11} xl={10}>
                        <Row>
                            <Col lg={6} className='mb-4'>
                                <SiteInput
                                    type="text"
                                    label="Cardholder Name"
                                    labelClass="fw-regular"
                                    placeholder="Enter cardholder name"
                                    requiredStar
                                />
                            </Col>
                            <Col lg={6} className='mb-4'>
                                <SiteInput
                                    type="text"
                                    label="Credit/Debit Card No."
                                    labelClass="fw-regular"
                                    placeholder="Enter your card number"
                                    requiredStar
                                />
                            </Col>
                            <Col lg={6} className='mb-4'>
                                <label className="mb-1 semi-bold ms-3 d-block">Expiry Date<span class="red-text">*</span></label>
                                <div className="d-sm-flex gap-3">
                                <SiteSelect className="mb-3 mb-sm-0" items={monthsEntries} />
                                <SiteSelect className="" items={yearsEntries} />
                                </div>
                            </Col>
                            <Col lg={6} className='mb-4'>
                                <SiteInput
                                    type="text"
                                    label="CVV"
                                    labelClass="fw-regular"
                                    placeholder="Enter CVV number"
                                    requiredStar
                                />
                            </Col>
                            <Col lg={12}>
                                <div>
                                    <label className="checkbox-container d-inline-block p-sm mb-2 me-0">Save this card for future use
                                    <input
                                        type="checkbox"
                                        checked={checked1}
                                        onChange={handleCheckboxChange1}
                                        />
                                    <span className="checkmark mb-1"></span>
                                    </label>
                                </div>  
                                <div>
                                    <label className="checkbox-container d-inline-block p-sm mb-2 me-0">Auto Renewal subscription
                                    <input
                                        type="checkbox"
                                        checked={checked2}
                                        onChange={handleCheckboxChange2}
                                    />
                                    <span className="checkmark mb-1"></span>
                                    </label>
                                </div>
                            </Col>
                            <Col lg={12} className='mt-4'>
                                <SiteButton className="fw-light" onClick={()=>navigate(`/subscription-plans/details/subscription-checkout/${data.id}`)}>Pay Now</SiteButton>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    </UserLayout>
  )
}

export default SubscriptionDetails
