import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
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
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
      </Routes>
      </ScrollToTop>
    </Router>
    </div>
  );
}

export default App;
