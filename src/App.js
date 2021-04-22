import './App.css';
import NavbarArea from './component/Navbar/NavbarArea';
import Header from './component/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Featured from './component/Featured/Featured';
import Footer from './component/Footer/Footer';
import Blog from './component/Blog/Blog';
import GetInTouch from './component/Get_In_Touch/GetInTouch';
import Services from './component/Services/Services';
import Review from './component/Review/Review';
import Admin_Deshboard from './component/Admin_Deshboard/Admin_Deshboard';
import Add_Services from './component/Add_Services/Add_Services';
import AddReview from './component/Review/AddReview';
import AddAdmin from './component/Add Admin/AddAdmin';
import { createContext, useState } from 'react';
import Login from './component/Login/Login';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import CheckOut from './component/CheckOut/CheckOut';
import OrderList from './component/OrderList/OrderList';


export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
    
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router className="Ap">
        <NavbarArea></NavbarArea>
        
        {/* <Admin_Deshboard></Admin_Deshboard> */}

        <Switch>
          <Route path="/home">
            <Header></Header>
            <Featured></Featured>
            <Services></Services>
            <Review></Review>
            <GetInTouch></GetInTouch>
            <Blog></Blog>
          </Route>

          

          <Route path="/AddServices">
            <Admin_Deshboard></Admin_Deshboard>
            <Add_Services></Add_Services>
          </Route>

          
          <PrivateRoute path="/AddAdmin">
            <Admin_Deshboard></Admin_Deshboard>
            <AddAdmin></AddAdmin>
          </PrivateRoute>


          <PrivateRoute path="/orderList">
            <Admin_Deshboard></Admin_Deshboard>
            <OrderList></OrderList>
          </PrivateRoute>

          <PrivateRoute path="/admin">
            <Admin_Deshboard></Admin_Deshboard>
          </PrivateRoute>

          <PrivateRoute path="/Addreview">
            <Admin_Deshboard></Admin_Deshboard>
            <AddReview></AddReview>
          </PrivateRoute>


          <PrivateRoute path="/checkout/:_id">
            <CheckOut></CheckOut>
          </PrivateRoute>


          <Route path="/login">
            <Login></Login>
          </Route>


          <Route path="/">
            <Header></Header>
            <Featured></Featured>
            <Services></Services>
            <Review></Review>
            <GetInTouch></GetInTouch>
            <Blog></Blog>
          </Route>


        </Switch>
        <Footer></Footer>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
