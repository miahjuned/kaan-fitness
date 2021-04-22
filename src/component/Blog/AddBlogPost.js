import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { UserContext } from '../../App';

const Add_BlogPost = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [imageResponsoe , setImageResponsoe] = useState([]);

    const { register, handleSubmit, formState: { errors } } = useForm();


    const [blogPost , setBlogPost] = useState(null);

    const onSubmit = data => {
        const productData = {
            title: data.title,
            author: loggedInUser.displayName,
            description: data.description,
            description2: data.description2,
            description3: data.description3,
            imageURL: blogPost,
            date: new Date(),
            email: loggedInUser.email
        };
        const url = `https://infinite-woodland-54699.herokuapp.com/addBlogPost`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then (res => setBlogPost('New post added Successfully!', res))
    };



    const handleImageUpload = product => {

        const imageData = new FormData();
        imageData.set('key', '994392279289c0649211748cc7b4c09d');
        imageData.append('image', product.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageResponsoe('Image added', response.data.data.display_url);
            setBlogPost(response.data.data.display_url);
          })
          .catch(function (error) {
            alert(error);
          });
    }


    return (
        <div className="Admin_Deshboard">
        <Container className="Admin_Deshboard_Area">

            <Row>
                <Col md={3} lg={3} sm={3} xl={3} xs={3}>
                </Col>
                <Col className="rightSide" md={9} lg={9} sm={9} xl={9} xs={9}>

                    <form onSubmit={handleSubmit(onSubmit)}>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th colSpan="3"> Add NEW Blog Post</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>1</td>
                                <td>Blog title name:</td>
                                <td><input name="title" placeholder="Blog title" ref={register} /></td>
                            </tr>

                            <tr>
                                <td>2</td>
                                <td>Upload blog Image:</td>
                                <td>
                                    <input type="file" name="exampleRequired" onChange={handleImageUpload}/>
                                    {
                                        imageResponsoe.length === 0 && <div className="spinner-border text-info spiner" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    } 
                                    <p className="text-light bg-success">{imageResponsoe}</p>
                                    <img src={blogPost} alt=""/>
                            </td>
                            </tr>

                            <tr>
                            <td>3</td>
                            <td>Blog Description: </td>
                            <td><input name="description" placeholder="write description" ref={register} /></td>
                            </tr>
                            
                            <tr>
                            <td>4</td>
                            <td>Blog Description 2 : </td>
                            <td><input name="description2" placeholder="write description" ref={register} /></td>
                            </tr>

                            <tr>
                            <td>5</td>
                            <td>Blog Description 3: </td>
                            <td><input name="description3" placeholder="write description" ref={register} /></td>
                            </tr>

                            <tr>
                            <td>6</td>
                            <td>Author name: </td>
                            <td>{loggedInUser.displayName}</td>
                            </tr>

                            <tr>
                            <td>7</td>
                            <td>Author Email: </td>
                            <td>{loggedInUser.email}</td>
                            </tr>


                            <tr>
                            <td colSpan="2"><p className="text-light bg-success">{blogPost}</p></td>
                            <td ><input className="btn btn-info" type="submit" value="Add Blog Post"/></td>
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

export default Add_BlogPost;