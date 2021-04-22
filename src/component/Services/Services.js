import React, { useEffect, useState } from 'react';
import { Button, Card, CardImg, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cardImg from '../../images/Isolated-background.jpg'
import './Services.css';
const Services = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allServices')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])

     
    return (
        <div className="service_area">
            <Container>
                <article>OUR SERVICES PRICING PLANS</article>
                <h2>A Plan For Every Price</h2>
                <Row>
                    {
                        product.length === 0 && <div className="spinner-border text-info spiner" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    }

                    {
                        product.map(product => <Col className="services_section" md={6} lg={3} sm={6} xl={3} xs={12} key={product._id} product={product}>
                            <Card className="card" >
                                <CardImg style={{height: '200px'}} variant="top" src={product.imageURL}>
                                </CardImg>
                                <Card.Body>
                                    <Card.Title><h2>{product.name}</h2></Card.Title>
                                    <Card.Text>
                                        {product.descrition}
                                    </Card.Text>
                                    <Card.Text>
                                        <strong>${product.price} <small>/mo</small></strong>
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>
                                        {product.facilities1}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        {product.facilities2}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        {product.facilities3}
                                    </ListGroupItem>
                                </ListGroup>
                                
                                <Card.Body>
                                    <Link className="CardButton" to={`/checkout/${product._id}`}><Button>BECOME A MEMBER</Button></Link>
                                </Card.Body>
                            </Card>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;