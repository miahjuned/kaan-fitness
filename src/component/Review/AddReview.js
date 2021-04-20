import React, { useState } from 'react';
import axios from 'axios';
import './AddReview.css';
import { useForm } from 'react-hook-form';
import { Col, Container, Row } from 'react-bootstrap';

const Add_Services = () => {
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [imageURLS , setImageURL] = useState(null);

    const onSubmit = data => {
        const productData = {
            name: data.product,
            price: data.price,
            wight: data.wight,
            imageURL: imageURLS
        };
        const url = `https://fierce-coast-48195.herokuapp.com/addProduct`;

        console.log(productData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then (res => console.log('server side responsed', res))
    };


    const handleImageUpload = product => {

        const imageData = new FormData();
        imageData.set('key', '994392279289c0649211748cc7b4c09d');
        imageData.append('image', product.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }


    return (
        <div className="Admin_Deshboard">
        <Container className="Admin_Deshboard_Area">
            <Row>
                <Col className="leftSide" md={3} lg={3} sm={3} xl={3} xs={3}>
                </Col>


                <Col className="rightSide" md={9} lg={9} sm={9} xl={9} xs={9}>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <label >Your Name : </label>
                        <input name="product" placeholder="Write Your Name" ref={register} />
                        <hr/>

                        <label >Your company name: </label>
                        <input name="price" placeholder="Write your company name" ref={register} />

                        <hr/>
                        <label >Description : </label>
                        <input name="wight" placeholder="write your feedback description" ref={register} />

                        <hr/>

                        <input type="submit" />

                    </form>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Add_Services;