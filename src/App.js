import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import Courses from './components/Pages/Courses';
import Features from './components/Pages/Features';
function App() {
  return (

  <div>
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/courses' component={Courses} />
        <Route path='/features' component={Features}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
