import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './Review.css';
import ReviewImg from '../../images/Kaan-FitnessFinal-With-Tagline-White.jpg';
const Review = () => {
    return (
        <Container className="carousel_Area">
            <article>TESTIMONIAL</article>
            <h2>What my clients are saying:</h2>
            <Carousel className="carousel_section">
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
            </Carousel>
        </Container>
    );
};

export default Review;