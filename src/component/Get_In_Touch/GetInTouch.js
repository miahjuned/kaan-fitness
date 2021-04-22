import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './GetInTouch.css';
import get_InTouch_Img from '../../images/Isolated-background.jpg';
import { Link } from 'react-router-dom';

const GetInTouch = () => {
    return (
        <div className="get_InTouch">
            <Container fluid>
                <Row>
                    <Col md={6} lg={6} sm={6} xl={6} xs={12}>
                        <img src={get_InTouch_Img} alt="Get In touch Image"/>

                    </Col>
                    <Col md={6} lg={6} sm={6} xl={6} xs={12}>
                        <h2>Get the Top 10 Weight Loss Myths Keeping you Fat</h2>
                        <article>It's time to end the frustration and get unstuck lose weight, build muscle, live longer, grow your brain and experience a paradigm shift just enter your best email below to get it:</article>
                        <hr/>
                        <input placeholder="your name" type="text"/>
                        <hr/>
                        <input placeholder="email" type="email" name="" id=""/>
                        <hr/>
                        <Link className="CardButton"><Button type="submit" value="">Submit</Button></Link>
                        <hr/>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default GetInTouch;