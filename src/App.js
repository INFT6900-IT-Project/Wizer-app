import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import Features from './components/Pages/Features';
import SignIn from './components/Pages/SignUpIn/signIn';



function App() {
  return (

  <div>
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/features' component={Features}/>
        <Route path='/sign-in' component={SignIn}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
