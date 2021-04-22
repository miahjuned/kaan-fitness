import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const Add_Services = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {_id} = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [Services, setServices] = useState({});
    
    useEffect(() => {
        fetch('https://infinite-woodland-54699.herokuapp.com/checkout/' + _id)
        .then(res => res.json())
        .then(data => setServices(data));
    }, [_id])



    const [Order , setOrder] = useState(null);

    const onSubmit = data => {
        const productData = {
            name: loggedInUser.displayName,
            email: loggedInUser.displayName,
            adress: data.adress,
            price: Services.price,
            services: Services.name,
            number: data.number
        };
        const url = `https://infinite-woodland-54699.herokuapp.com/order`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then (res => setOrder('Order Successfull!', res))
    };



    return (
        <div className="Admin_Deshboard">
        <Container className="Admin_Deshboard_Area">
            <Row>
                <Col className="leftSide" md={3} lg={3} sm={3} xl={3} xs={3}>
                </Col>


                <Col className="rightSide" md={9} lg={9} sm={9} xl={9} xs={9}>

                    <form onSubmit={handleSubmit(onSubmit)}>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                            <th colSpan="3"> 
                                <h2>
                                    <img style={{width:"40px"}} src={loggedInUser.photoURL} alt="userImage"/>
                                    Welcome <small>{loggedInUser.displayName}!</small>
                                </h2>
                                <hr/>
                                Checkout information
                            </th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                            <td>1</td>
                            <td>Services name:</td>
                            <td>{Services.name} package</td>
                            </tr>

                            <tr>
                            <td>2</td>
                            <td>Services price:</td>
                            <td>${Services.price}</td>
                            </tr>

                            <tr>
                            <td>3</td>
                            <td>Name: </td>
                            <td>{loggedInUser.displayName}</td>
                            </tr>

                            <tr>
                            <td>4</td>
                            <td>Email: </td>
                            <td>{loggedInUser.email}</td>
                            </tr>

                            <tr>
                            <td>5</td>
                            <td>Your Address: </td>
                            <td><input name="adress" placeholder="write Your address" ref={register} />
                            </td>
                            </tr>

                            <tr>
                            <td>6</td>
                            <td>Mobile Number: </td>
                            <td><input name="number" placeholder="write mobile number" ref={register} /></td>
                            </tr>

                            <tr>
                            <td colSpan="2"><p className="text-light bg-success">{Order}</p></td>
                            <td ><input className="btn btn-info" type="submit" value="Place an order"/></td>
                            </tr>

                        </tbody>
                    </Table>
                    </form>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Add_Services;