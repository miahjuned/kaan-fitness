import './App.css';
import NavbarArea from './component/Navbar/NavbarArea';
import Header from './component/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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

function App() {
  return (
    <Router className="App">
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
        <Route path="/bookingList">
          <Admin_Deshboard></Admin_Deshboard>
        </Route>

        <Route path="/admin">
          <Admin_Deshboard></Admin_Deshboard>
        </Route>

        <Route path="/Addreview">
          <Admin_Deshboard></Admin_Deshboard>
          <AddReview></AddReview>
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
  );
}

export default App;
