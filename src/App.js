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

function App() {
  return (
    <Router className="App">
      <NavbarArea></NavbarArea>
      <Header></Header>
      <Featured></Featured>
      <Switch>
        <Route>

        </Route>
      </Switch>
      <GetInTouch></GetInTouch>
      <Blog></Blog>
      <Footer></Footer>
    </Router>
  );
}

export default App;
