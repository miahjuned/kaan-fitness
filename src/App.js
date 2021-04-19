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
    </Router>
  );
}

export default App;
