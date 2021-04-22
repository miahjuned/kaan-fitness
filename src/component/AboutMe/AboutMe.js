import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './AboutMe.css';
import Aboutme from '../../images/Adam-Kaan.jpg';

const GetInTouch = () => {
    return (
        <div className="AboutMe_Section">
            <Container fluid>
                <Row>
                    <Col md={6} lg={6} sm={6} xl={6} xs={12}>
                        <div className="AboutMe_area">
                            <h2>About <span>Me.</span></h2>
                            <article>As an accomplished fitness professional and weight loss coach for desi professional dads, I have appeared on the BBC, British Muslim Tv and other places.</article>


                            <article>Suffering for most of my teens with a rare case of tuberculosis, which completely deteriorated my health and left me on the verge of death,  I vowed never to take my health for granted again. But following mainstream information I struggled for decades with my weight until I went on an expensive serious academic learning journey and cracked the code to permanent easy weight loss especially for desi who love their curry and kebabs.</article>

                            <article>Since then it has been my passion to help people wake up to the reality that, in terms of health, they are off course. That the human and ﬁnancial cost of our current way of life is far too great.</article>

                            <article>My years of research led me to develop the Fit Dad Life Mastery, a step-by-step system to quickly transition people to this revolutionary way of looking at health and fitness.</article>
                        </div>
                    </Col>
                    
                    <Col md={6} lg={6} sm={6} xl={6} xs={12}>
                        <div className="AboutMe_area">
                            <img src={Aboutme} alt="Get In touch Image"/>
                        </div>

                    </Col>
                </Row>
            </Container>
            
        </div>
    );
};

export default GetInTouch;