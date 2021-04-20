import React from "react";
import { Col, Container, Nav, footer, footerBrand, Row } from "react-bootstrap";
import "./Footer.css";
import logo from "../../images/Kaan-FitnessFinal-With-Tagline-White.jpg";
import { Link } from "react-router-dom";
import FacebookIcon from '../../images/facebook.png';
import YoutubeIcon from '../../images/youtube.png';
import InstagramIcon from '../../images/instagram.png';

const Footer = () => {
  return (
    <div className="footer">
      <Container>
                <Row>
                    <Col md={3} lg={4} sm={2} xl={4} xs={2}></Col>
                    <Col md={6} lg={4} sm={8} xl={4} xs={8}>
                        <img src={logo} alt="FooterImage"/>
                        <hr/>
                        <Row>
                            <Col md={4} lg={4} sm={4} xl={4} xs={4}>
                                <Link className="pr-5 footerItem" to="/about">CREDITS</Link>
                            </Col>
                            <Col md={4} lg={4} sm={4} xl={4} xs={4}>
                                <Link className="pr-5 footerAbout" to="/about">ABOUT</Link>
                            </Col>
                            <Col md={4} lg={4} sm={4} xl={4} xs={4}>
                                <Link className="pr-5 footerItem" to="/about">DISCLAIMER</Link>
                            </Col>
                        </Row>
                        <hr/>
                        <article>Follow us:</article>
                        <Row>
                            
                            <Col md={4} lg={4} sm={4} xl={4} xs={4}>
                              <a href="#">
                                <img src={FacebookIcon} alt=""/>
                              </a>
                            </Col>
                            <Col md={4} lg={4} sm={4} xl={4} xs={4}>
                              <a href="#">
                                <img src={InstagramIcon} alt=""/>
                              </a>
                            </Col>
                            <Col md={4} lg={4} sm={4} xl={4} xs={4}>
                              <a href="#">
                                <img src={YoutubeIcon} alt=""/>
                              </a>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={3} lg={4} sm={2} xl={4} xs={2}></Col>
                </Row>
            </Container>
    </div>
  );
};

export default Footer;
