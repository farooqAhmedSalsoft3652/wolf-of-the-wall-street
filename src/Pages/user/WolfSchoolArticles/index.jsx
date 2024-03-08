import React from 'react'
import { Container, Row, Col, Tab, Nav, Card } from 'react-bootstrap'
import { UserLayout } from '../../../Components/user/Layout'
import Form from 'react-bootstrap/Form';
import { images } from '../../../assets'
import SiteInput from '../../../Components/Input/input';
import CustomFilters from "../../../Components/CustomFilters";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import ArticlesCard from '../../../Components/ArticlesCard';
import { useNavigate } from 'react-router'
import usePageTitle from "../../../Hooks/usePageTitle"
import {schoolArticlesData} from "../../../Config/Data"
import './style.css'

const WolfSchoolArticles  = (props) => {
  usePageTitle("WOWS School - Articles ");
  const navigate =  useNavigate();
  const tabKeys = ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5", "Category 6"];
  return (
    <>
    <UserLayout className="test">
      <section className='article-page-banner'>
        <Container fluid>
          <Row className='g-0'>
            <Col xs={12} className='g-0 text-center'>
              <img src={images.WolfSchoolBanner} alt="" className='img-fluid' />
            </Col>
          </Row>
        </Container>
      </section>
        <div className="school-articles py-3">
            <Container>
                <Row>
                    <Col xs={12} className='profile-inner article-filter d-flex justify-content-between mb-4'>
                      <div className="flex-shrink-0">
                        <SiteInput doubleIcon rightIcon={faSearch} className="search-input" placeholder="Search" />
                      </div>
                      <div className="flex-grow-1 justify-content-end d-flex align-items-center gap-3">
                        <div className="d">
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                            className="p-sm custom-form-switch align-self-center mb-0"
                            label="Switch to Top Rated topics"
                          />
                          </div>
                          <div className="v">
                            <CustomFilters
                              dateFilter={true}
                              sortStatus={props?.sortStatus}
                              statusFilter={props?.statusFilter}
                              // statusFilterText={props?.statusFilterText}
                              // filters={props?.filters}
                              // setFilters={props?.setFilters}
                              // dateEndFilter={props?.dateEndFilter}
                              />
                          </div>
                      </div>
                    </Col>
                    <Col xs={12}>
                      <Tab.Container defaultActiveKey="Category 1">
                        <Nav variant="pills" className="justify-content-center my-5 subscription-nav">
                          {tabKeys.map((key) => (
                            <Nav.Item key={key}>
                              <Nav.Link eventKey={key}>{key}</Nav.Link>
                            </Nav.Item>
                          ))}
                        </Nav>
                        <Tab.Content>
                          {tabKeys.map((key) => (
                            <Tab.Pane eventKey={key} key={key}>
                              <Row>
                                {schoolArticlesData.map((card) => (
                                  <Col lg={4} key={card.id} className='mb-4 mb-lg-0'>
                                    <ArticlesCard data={card} to={`/wolf-school-articles/details/${card.id}`} />
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
    </UserLayout>
    </>
  )
}

export default WolfSchoolArticles
