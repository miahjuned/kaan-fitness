import React, { useEffect, useState } from 'react';
import { Card, CardImg,  Col, Container,  Row } from 'react-bootstrap';
import './Review.css';
const Review = () => {

    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('https://infinite-woodland-54699.herokuapp.com/allReview')
        .then(res => res.json())
        .then(data => setReview(data))
    }, [])

    return (
        <div className="Review_Area">
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
                    review.map(review => <Col className="Review_section" key={review._id} review={review}>
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
                    </Col>)
                }
            </Row>
        </Container>
        </div>
    );
};

export default Review;