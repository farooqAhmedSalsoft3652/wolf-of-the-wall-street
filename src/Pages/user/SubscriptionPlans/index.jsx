import React from 'react'
import { UserLayout } from '../../../Components/user/Layout'
import { Container, Row, Col, Tab, Nav, Card } from 'react-bootstrap'
import SubscriptionCard from './Components/SubscriptionCard'

import {packagesData} from "../../../Config/Data"
import { useNavigate } from 'react-router'
import usePageTitle from "../../../Hooks/usePageTitle";

import './style.css';

const SubscriptionPlans = () => {
  usePageTitle("Subscription Plans");
  const navigate =  useNavigate();
  const tabKeys = ["monthly", "6month", "yearly"];

  return (
    <UserLayout className="test">
        <div className="page-section">
        <Container>
            <Row>
                <Col xs={12}>
                    <h3 className='mb-0'>Subscription Plans</h3>
                    <Tab.Container defaultActiveKey="monthly">
                      <Nav variant="pills" className="justify-content-center my-4 subscription-nav">
                        {tabKeys.map((key) => (
                          <Nav.Item key={key}>
                            <Nav.Link eventKey={key}>{key === "6month" ? "6 Month" : key}</Nav.Link>
                          </Nav.Item>
                        ))}
                      </Nav>
                      <Tab.Content>
                        {tabKeys.map((key) => (
                          <Tab.Pane eventKey={key} key={key}>
                            <Row>
                              {packagesData.map((card) => (
                                <Col lg={4} key={card.id} className='mb-4 mb-lg-0'>
                                  <SubscriptionCard data={card} />
                                </Col>
                              ))}
                            </Row>
                          </Tab.Pane>
                        ))}
                      </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        </div>
        {/* <NewsFeed /> */}
    </UserLayout>
  )
}

export default SubscriptionPlans

