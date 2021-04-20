import React from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Add_Services from "../Add_Services/Add_Services";
import "./Admin_Deshboard.css";
const Admin_Deshboard = () => {
  return (
    <div className="Admin_Deshboard">
      <Container className="Admin_Deshboard_Area">
        <Row>
          <Col className="leftSide" md={3} lg={3} sm={3} xl={3} xs={3}>
                <hr />
                <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <Link className="pr-5 footerItem" to="/AddServices">
                      Add Services
                    </Link>
                </Navbar.Brand>
                </Navbar>
                <hr/>
                <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <Link className="pr-5 footerItem" to="/bookingList">
                      Booking List
                    </Link>
                </Navbar.Brand>
                </Navbar>
                <hr/>
                <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <Link className="pr-5 footerItem" to="/Addreview">
                      Services Review
                    </Link>
                </Navbar.Brand>
                </Navbar>
                <hr/>
          </Col>

          {/* <Col className="rightSide" md={9} lg={9} sm={9} xl={9} xs={9}>
            <Add_Services></Add_Services>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default Admin_Deshboard;
