import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import CreateDog from './components/CreateDog';
import Details from './components/Details';
import Error404 from './components/Error404';
import axios from "axios";

axios.defaults.baseURL = "https://dogs-page-api.onrender.com/";

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/dog' component={CreateDog}/>
          <Route exact path='/home/:id' component={Details}/>
          <Route path="*" component={Error404}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
