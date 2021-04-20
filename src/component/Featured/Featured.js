import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Featured.css';
import Ipt from '../../images/IPT.jpg';
import onlineTrainer from '../../images/Certified-Online-Trainer.jpg';
import BBC from '../../images/bbc.jpg';
import BrithshMushlim from '../../images/british.jpg';
import FigureImage from 'react-bootstrap/esm/FigureImage';
const Featured = () => {
    return (
        <Container>
            <h2 className="featuredTitle">Featured on:</h2>
            <hr/>
            <Row className="featuredBody" >
                <Col  md={3} lg={3} sm={6} xl={3} xs={6}>
                    <a href="#" target="_blank" >
                        {/* <FigureImage
                            width={80}
                            alt="IPT"
                            src={Ipt}
                        /> */}

                        <img className="Ipt" src={Ipt} alt=""/>
                    </a>
                </Col>
                <Col md={3} lg={3} sm={6} xl={3} xs={6}>
                    <a href="#" target="_blank">
                        {/* <FigureImage
                            width={200}
                            alt="Certified Online Trainer"
                            src={onlineTrainer}
                        /> */}

                        <img className="align-middle onlineTrainer" src={onlineTrainer} alt=""/>
                    </a>
                </Col>
                <Col md={3} lg={3} sm={6} xl={3} xs={6}>
                    <a href="#home">
                        {/* <FigureImage
                            width={150}
                            alt="BBC"
                            src={BBC}
                        /> */}

                        <img className="BBC" src={BBC} alt=""/>
                    </a>
                </Col>
                <Col  md={3} lg={3} sm={6} xl={3} xs={6}>
                    <a href="#" target="_blank">
                        {/* <FigureImage
                            width={100}
                            href="#"
                            alt="Brithsh Mushlim Radio"
                            src={BrithshMushlim}
                        /> */}
                        <img className="BritishMuslim" src={BrithshMushlim} alt=""/>
                    </a>
                </Col>
            </Row>
        </Container>
    );
};

export default Featured;