import React, { useState } from 'react';
import axios from 'axios';
import './Add_Services.css';
import { useForm } from 'react-hook-form';
import { Col, Container, Row } from 'react-bootstrap';

const Add_Services = () => {
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [imageURLS , setImageURL] = useState(null);

    const onSubmit = data => {
        const productData = {
            name: data.product,
            descrition: data.descrition,
            price: data.price,
            facilities1: data.facilities1,
            facilities2: data.facilities2,
            facilities3: data.facilities3,
            imageURL: imageURLS
        };
        const url = `https://infinite-woodland-54699.herokuapp.com/addServices`;

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

                    <label >Services Name : </label>
                    <input name="product" placeholder="Services Name" ref={register} />
                    <hr/>
                    <label >Services descrition : </label>
                    <input name="descrition" placeholder="Services descrition" ref={register} />
                    <hr/>

                    <label >Services image upload: </label>
                    <input type="file" name="exampleRequired" onChange={handleImageUpload}/>
                    <hr/>

                    <label >Services Price: </label>
                    <input name="price" placeholder="Services Price:" ref={register} />

                    <hr/>
                    <label >Facilities 1: </label>
                    <input name="facilities1" placeholder="Cardio:" ref={register} />

                    <hr/>
                    <label >Facilities 2 : </label>
                    <input name="facilities2" placeholder="Swimming Pool" ref={register} />

                    <hr/>
                    <label >Facilities 3: </label>
                    <input name="facilities3" placeholder="Crossfit" ref={register} />

                <hr/>

                        <input type="submit" />

                    </form>
                </Col>
            </Row>
        </Container>
        </div>
        // <div className="Admin_Deshboard">
        //     <form onSubmit={handleSubmit(onSubmit)}>

        //         <label >Services Name : </label>
        //         <input name="product" placeholder="Services Name" ref={register} />
        //         <hr/>
        //         <label >Services descrition : </label>
        //         <input name="descrition" placeholder="Services descrition" ref={register} />
        //         <hr/>

        //         <label >Services image upload: </label>
        //         <input type="file" name="exampleRequired" onChange={handleImageUpload}/>
        //         <hr/>

        //         <label >Services Price: </label>
        //         <input name="price" placeholder="Services Price:" ref={register} />

        //         <hr/>
        //         <label >Facilities 1: </label>
        //         <input name="facilities1" placeholder="Cardio:" ref={register} />

        //         <hr/>
        //         <label >Facilities 2 : </label>
        //         <input name="facilities2" placeholder="Swimming Pool" ref={register} />

        //         <hr/>
        //         <label >Facilities 3: </label>
        //         <input name="facilities3" placeholder="Crossfit" ref={register} />

        //         <hr/>

        //         <input type="submit" />

        //     </form>

        // <div className="Admin_Deshboard">
        // <Container className="Admin_Deshboard_Area">
        //     <Row>
        //         <Col className="leftSide" md={3} lg={3} sm={3} xl={3} xs={3}>
        //         </Col>


        //         <Col className="rightSide" md={9} lg={9} sm={9} xl={9} xs={9}>
        //             <form onSubmit={handleSubmit(onSubmit)}>

        //                 <label >Services Name : </label>
        //                 <input name="product" placeholder="Services Name" ref={register} />
        //                 <hr/>
        //                 <label >Services descrition : </label>
        //                 <input name="descrition" placeholder="Services descrition" ref={register} />
        //                 <hr/>

        //                 <label >Services image upload: </label>
        //                 <input type="file" name="exampleRequired" onChange={handleImageUpload}/>
        //                 <hr/>

        //                 <label >Services Price: </label>
        //                 <input name="price" placeholder="Services Price:" ref={register} />

        //                 <hr/>
        //                 <label >Facilities 1: </label>
        //                 <input name="facilities1" placeholder="Cardio:" ref={register} />

        //                 <hr/>
        //                 <label >Facilities 2 : </label>
        //                 <input name="facilities2" placeholder="Swimming Pool" ref={register} />

        //                 <hr/>
        //                 <label >Facilities 3: </label>
        //                 <input name="facilities3" placeholder="Crossfit" ref={register} />

        //                 <hr/>

        //                 <input type="submit" />

        //             </form>
        //         </Col>
        //     </Row>
        // </Container>
        // </div>
    );
};

export default Add_Services;