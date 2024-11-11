import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import Features from './components/Pages/Features';
import Pricing from './components/Pages/Pricing';
import ContactUs from './components/Pages/ContactUs';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import SignIn from './components/Pages/SignUpIn/SignIn'
import SignUp from './components/Pages/SignUpIn/SignUp';

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
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
      </Routes>
      </ScrollToTop>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
