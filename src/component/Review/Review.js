import React, { useEffect, useState } from 'react';
import { Card, CardImg, Carousel, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import './Review.css';
import ReviewImg from '../../images/Kaan-FitnessFinal-With-Tagline-White.jpg';
import { Link } from 'react-router-dom';
const Review = () => {

    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('https://infinite-woodland-54699.herokuapp.com/allReview')
        .then(res => res.json())
        .then(data => setReview(data))
    }, [])

    return (
        <div className="carousel_Area">
        <Container className="">
            <article>TESTIMONIAL</article>
            <h2>What my clients are saying:</h2>
            <Row>

                {
                    review.length === 0 && <div className="spinner-border text-info spiner" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                }

                {
                    review.map(review => <Col className="carousel_section" key={review._id} review={review}>
                          <Card className="card" md={12} lg={3} sm={12} xl={3} xs={12}>
                            <CardImg style={{height: '200px'}} variant="top" src={review.imageURL}>
                            </CardImg>
                            <Card.Body>
                                <Card.Title><h3>{review.name}</h3></Card.Title>
                                <Card.Text>
                                    <p>{review.title}</p>
                                </Card.Text>
                                <Card.Text>
                                    <h2>“{review.description}”</h2>
                                    
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        {/* <Carousel>
                            <Carousel.Item interval={1000}>
                                <img 
                                className=""
                                src={review.imageURL} 
                                alt="First Review"
                                />
                                <hr/>
                                <Carousel.Caption>
                                    <img 
                                    className="headerimg"
                                    src={review.imageURL} 
                                    alt="First Review"
                                    />
                                    <h3>{review.className}</h3>
                                    <p>{review.title}</p>
                                    <p>{review.description}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel> */}
                    </Col>)
                }
            </Row>
            {/* <Carousel className="carousel_section">
                <Carousel.Item interval={1000}>
                    <img 
                    className=""
                    src={ReviewImg} 
                    alt="First Review"
                    />
                    <hr/>
                    <Carousel.Caption>
                        <img 
                        className="headerimg"
                        src={ReviewImg} 
                        alt="First Review"
                        />
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item interval={1000}>
                    <img 
                    className="d-block "
                    src={ReviewImg} 
                    alt="First Review"
                    />
                    <hr/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item >
                    <img 
                    className="d-block "
                    src={ReviewImg} 
                    alt="First Review"
                    />
                    <hr/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}
        </Container>
        </div>
    );
};

export default Review;