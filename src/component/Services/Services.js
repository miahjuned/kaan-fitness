import React from 'react';
import { Card, CardImg, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cardImg from '../../images/Isolated-background.jpg'
import './Services.css';
const Services = () => {
    return (
        <div className="service_area">
            <Container className="service_Section">
                <article>OUR SERVICES PRICING PLANS</article>
                <h2>A Plan For Every Price</h2>
                <Row>
                    <Col  md={6} lg={3} sm={6} xl={3} xs={12} >
                        <Card className="mb-3">
                            <CardImg style={{height: '200px'}} variant="top" src={cardImg}>
                            </CardImg>
                            <Card.Body>
                                <Card.Title>STANDARD</Card.Title>
                                <Card.Text>
                                    Positive pleasure-oriented goals are much more powerful.
                                </Card.Text>
                                <Card.Text>
                                    $12
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>
                                    Cardio
                                </ListGroupItem>
                                <ListGroupItem>
                                    Swimming Pool
                                </ListGroupItem>
                                <ListGroupItem>
                                    Gym
                                </ListGroupItem>
                                <ListGroupItem>
                                    Group Lessons
                                </ListGroupItem>
                                <ListGroupItem>
                                    Aerobics
                                </ListGroupItem>
                                <ListGroupItem>
                                    Crossfit
                                </ListGroupItem>
                            </ListGroup>
                            
                            <Card.Body>
                                <Link className="btn btn-info" to={`/checkout/`}>BECOME A MEMBER</Link>
                            </Card.Body>
                        </Card>
                    </Col>




                    <Col  md={6} lg={3} sm={6} xl={3} xs={12} >
                        <Card className="mb-3">
                            <CardImg style={{height: '200px'}} variant="top" src={cardImg}>
                            </CardImg>
                            <Card.Body>
                                <Card.Title>PREMIUM</Card.Title>
                                <Card.Text>
                                    Make a list of your achievements toward your long-term.
                                </Card.Text>
                                <Card.Text>
                                    $49 <small>/mo</small>
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>
                                    Cardio
                                </ListGroupItem>
                                <ListGroupItem>
                                    Swimming Pool
                                </ListGroupItem>
                                <ListGroupItem>
                                    Gym
                                </ListGroupItem>
                                <ListGroupItem>
                                    Group Lessons
                                </ListGroupItem>
                                <ListGroupItem>
                                    Aerobics
                                </ListGroupItem>
                                <ListGroupItem>
                                    Crossfit
                                </ListGroupItem>
                            </ListGroup>
                            
                            <Card.Body>
                                <Link className="btn btn-info" to={`/checkout/`}>BECOME A MEMBER</Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col  md={6} lg={3} sm={6} xl={3} xs={12} >
                        <Card className="mb-3">
                            <CardImg style={{height: '200px'}} variant="top" src={cardImg}>
                            </CardImg>
                            <Card.Body>
                                <Card.Title>PLATINUM</Card.Title>
                                <Card.Text>
                                    Use a past defeat as a motivator. Remind yourself you.
                                </Card.Text>
                                <Card.Text>
                                    $99 <small>/mo</small>
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>
                                    Cardio
                                </ListGroupItem>
                                <ListGroupItem>
                                    Swimming Pool
                                </ListGroupItem>
                                <ListGroupItem>
                                    Gym
                                </ListGroupItem>
                                <ListGroupItem>
                                    Group Lessons
                                </ListGroupItem>
                                <ListGroupItem>
                                    Aerobics
                                </ListGroupItem>
                                <ListGroupItem>
                                    Crossfit
                                </ListGroupItem>
                            </ListGroup>
                            
                            <Card.Body>
                                <Link className="btn btn-info" to={`/checkout/`}>BECOME A MEMBER</Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col  md={6} lg={3} sm={6} xl={3} xs={12} >
                        <Card className="mb-3">
                            <CardImg style={{height: '200px'}} variant="top" src={cardImg}>
                            </CardImg>
                            <Card.Body>
                                <Card.Title>PLATINUM PLUS</Card.Title>
                                <Card.Text>
                                    Positive pleasure-oriented goals are much more powerful.
                                </Card.Text>
                                <Card.Text>
                                    $499 <small>/mo</small>
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>
                                    Cardio
                                </ListGroupItem>
                                <ListGroupItem>
                                    Swimming Pool
                                </ListGroupItem>
                                <ListGroupItem>
                                    Gym
                                </ListGroupItem>
                                <ListGroupItem>
                                    Group Lessons
                                </ListGroupItem>
                                <ListGroupItem>
                                    Aerobics
                                </ListGroupItem>
                                <ListGroupItem>
                                    Crossfit
                                </ListGroupItem>
                            </ListGroup>
                            
                            <Card.Body>
                                <Link className="btn btn-info" to={`/checkout/`}>BECOME A MEMBER</Link>
                            </Card.Body>
                        </Card>
                    </Col>





                </Row>
            </Container>
        </div>
    );
};

export default Services;