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
            <Row >
                <Col  md={3} lg={3} sm={3} xl={3} xs={12}>
                    <a href="#" target="_blank">
                        <FigureImage
                            width={80}
                            alt="IPT"
                            src={Ipt}
                        />
                    </a>
                </Col>
                <Col md={3} lg={3} sm={3} xl={3} xs={12}>
                    <a href="#" target="_blank">
                        <FigureImage
                            width={200}
                            alt="Certified Online Trainer"
                            src={onlineTrainer}
                        />
                    </a>
                </Col>
                <Col md={3} lg={3} sm={3} xl={3} xs={12}>
                    <a href="#home">
                        <FigureImage
                            width={150}
                            alt="BBC"
                            src={BBC}
                        />
                    </a>
                </Col>
                <Col md={3} lg={3} sm={3} xl={3} xs={12}>
                    <a href="#" target="_blank">
                        <FigureImage
                            width={100}
                            href="#"
                            alt="Brithsh Mushlim Radio"
                            src={BrithshMushlim}
                        />
                    </a>
                </Col>
            </Row>
        </Container>
    );
};

export default Featured;