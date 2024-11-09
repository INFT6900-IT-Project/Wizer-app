import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import Features from './components/Pages/Features';
import Pricing from './components/Pages/Pricing';
import ContactUs from './components/Pages/ContactUs';
import ScrollToTop from './components/ScrollToTop';


function App() {
  
  return (

  <div>
    <Router>
      <ScrollToTop>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/features' component={Features}/>
        <Route path='/pricing' component={Pricing}/>
        <Route path='/contact-us' component={ContactUs}/>
      </Switch>
      </ScrollToTop>
    </Router>
    </div>
  );
}

export default App;
