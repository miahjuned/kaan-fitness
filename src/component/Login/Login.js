import React, { useContext, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import { googleSignIn, initialiseSignIn } from './firebaseManager';
import './Login.css';

const Login = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    
    initialiseSignIn();
    // Login using google

    const [googleUser, setGoogleUser] = useState({});
    const handleGoogleSignIn = (e) => {
        e.preventDefault();
        googleSignIn()
        .then(res => {
            setGoogleUser(res);
            // res set context API
            setLoggedInUser(res);
            // Redirect user after Loggedin
            history.replace(from);
        })
    }
    return (
        <Container className="loginPage">
            <Button onClick={handleGoogleSignIn}>Sign In with google</Button>
        </Container>
    );
};

export default Login;