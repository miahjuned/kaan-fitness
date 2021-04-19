import React from 'react';
import { Button, Col, Container, Figure, Row } from 'react-bootstrap';
import FigureImage from 'react-bootstrap/esm/FigureImage';
import heroImg from '../../images/hero-image.jpg';
import './Header.css'
const Header = () => {
    return (
        <div className="headerArea">
           <Container>
               <Row>
                   <Col md={8} lg={8} sm={8} xl={8} xs={12} className="headerInfo">
                       <h2>
                           <strong style={{color:"red"}}>High Achieving </strong> Busy Professional South Asian Dads
                        </h2>
                       <p>
                           Lose 20 - 30kg, take control of your health and feel confident in 90 Days with <strong style={{color:"red"}}> Online </strong> Weight Loss Coaching. Get Started with a FREE 5 Day Challenge
                        </p>

                       <Button>Get Started FREE</Button>
                       <article>
                           South Asian men are 6 times more likely to be diagnosed with diabetes, heart disease and strokes as early as in their mid 30's resulting in premature death, don't become another statistic? (Source: NHS)
                        </article>
                   </Col>
                   <Col md={4} lg={4} sm={4} xl={4} xs={12} className="heroImg">
                       <div className="">
                            {/* <img src={heroImg} alt=""/> */}
                       </div>
                       <img src={heroImg} alt=""/>
                       {/* <Figure>
                           <FigureImage
                               width={500}
                               height={500}
                               alt="Adam khan"
                               src={heroImg}
                           />
                           <FigureImage className="heroImg2" src={heroImg}></FigureImage>
                       </Figure> */}
                    </Col>
               </Row>
           </Container>
        </div>
    );
};

export default Header;