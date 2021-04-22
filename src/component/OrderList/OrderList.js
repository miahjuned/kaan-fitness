import React, { useContext, useEffect, useState } from 'react';
import { Button,  Col, Container, Row, Table } from 'react-bootstrap';
import { UserContext } from '../../App';
const Services = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [allOrder, setAllOrder] = useState([]);

    useEffect(() => {
        fetch('https://infinite-woodland-54699.herokuapp.com/allOrder')
        .then(res => res.json())
        .then(data => setAllOrder(data))
    }, [])

     
    return (
        <div className="service_area">
            <Container>
                <article>OUR SERVICES BOOKING LIST</article>
                <h2>All order List</h2>


                    {
                        allOrder.length === 0 && <div className="spinner-border text-info spiner" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    }


                <Table  striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th> Services name</th>
                            <th> Services price</th>
                            <th> Email</th>
                            <th> Name</th>
                            <th> Mobile</th>
                            <th> Address</th>
                        </tr>

                        </thead>


                    {
                        allOrder.map(product => <tbody  striped bordered hover variant="dark" className="services_section" md={6} lg={3} sm={6} xl={3} xs={12} key={product._id} product={product}>
                                <tr>
                                    <td>{product.services}</td>
                                    <td>${product.price}</td>
                                    <td>{product.email}</td>
                                    <td>{product.name}</td>
                                    <td>{product.number}</td>
                                    <td>{product.adress}</td>
                                </tr>

                        </tbody>)
                    }

                    
                </Table>
            </Container>
        </div>
    );
};

export default Services;