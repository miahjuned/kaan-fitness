import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Admin_Deshboard.css";
const Admin_Deshboard = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
      fetch('http://localhost:5000/loginUser', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({ email: loggedInUser.email })
      })
          .then(res => res.json())
          .then(data => setIsUser(data));
  }, [])

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
                    <Link className="pr-5 footerItem" to="/AddAdmin">
                      Add Admin
                    </Link>
                </Navbar.Brand>
                </Navbar>
                <hr/>
                    <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        <Link className="pr-5 footerItem" to="/orderList">
                          Order List
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


          <Col className="rightSide" md={9} lg={9} sm={9} xl={9} xs={9}>
            {/* <Add_Services></Add_Services> */}
            {/* <AddReview></AddReview> */}
          </Col>



        </Row>
      </Container>
    </div>
  );
};

export default Admin_Deshboard;
