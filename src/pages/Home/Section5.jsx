import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import storeIOS from "../../assets/shop/appstore.png"
import storeGoogle from "../../assets/shop/googleplay.png"
import DownloadImage from "../../assets/shop/e-shop.png"
import brand1 from "../../assets/brands/brand-11.png"
import brand2 from "../../assets/brands/brand-12.png"
import brand3 from "../../assets/brands/brand-13.png"
import brand4 from "../../assets/brands/brand-14.png"
import brand5 from "../../assets/brands/brand-15.png"
import brand6 from "../../assets/brands/brand-16.png"
import brand7 from "../../assets/brands/brand-17.png"
import brand8 from "../../assets/brands/brand-18.png"
const Section5 = () => {
    return (
        <>
            <section className="shop_section">
                <Container>
                    <Row className='align-items-center' >
                        <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
                            <h4>Download mobile App and</h4>
                            <h2>save up to 20%</h2>
                            <p> Aliquam a augue suscipit, luctus neque purus ipsum and neque
                                dolor primis libero tempus, blandit varius</p>
                            <Link to='/'>
                                <img src={storeIOS} className='img-fluid me-3 store' alt="IOS" />
                            </Link>
                            <Link to='/'>
                                <img src={storeGoogle} className='img-fluid me-3 store' alt="Android" />
                            </Link>
                        </Col>
                        <Col lg="6">
                            <img src={DownloadImage} className="img-fluid" alt="e-shop" />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='brand_section'>
                <Container>
                    <Row>
                        <Carousel>
                            <Carousel.Item>
                                <Carousel.Caption>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="brand_img">
                                            <img src={brand1} className='img-fluid' alt="brand1" />
                                        </div>
                                        <div className="brand_img">
                                            <img src={brand2} className='img-fluid' alt="brand2" />
                                        </div>
                                        <div className="brand_img">
                                            <img src={brand3} className='img-fluid' alt="brand3" />
                                        </div>
                                        <div className="brand_img">
                                            <img src={brand4} className='img-fluid' alt="brand4" />
                                        </div>
                                        <div className="brand_img">
                                            <img src={brand5} className='img-fluid' alt="brand5" />
                                        </div>
                                        <div className="brand_img">
                                            <img src={brand6} className='img-fluid' alt="brand6" />
                                        </div>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Carousel.Caption>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="brand_img">
                                            <img src={brand3} className='img-fluid' alt="brand1" />
                                        </div>
                                        <div className="brand_img">
                                            <img src={brand4} className='img-fluid' alt="brand2" />
                                        </div>
                                        <div className="brand_img">
                                            <img src={brand5} className='img-fluid' alt="brand3" />
                                        </div>
                                        <div className="brand_img">
                                            <img src={brand6} className='img-fluid' alt="brand4" />
                                        </div>
                                        <div className="brand_img">
                                            <img src={brand7} className='img-fluid' alt="brand5" />
                                        </div>
                                        <div className="brand_img">
                                            <img src={brand8} className='img-fluid' alt="brand6" />
                                        </div>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Section5
