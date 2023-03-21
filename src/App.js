
import { Route, Router, Routes } from 'react-router';
import './App.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import AboutUs from './pages/aboutUs';
import AllEvents from './pages/allEvents';
import ContactPage from './pages/contactPage';
import Events from './pages/events';
import Home from './pages/home';
import OfficeBearers from './pages/officeBearers';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/allevents' element={<AllEvents/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/events' element={<Events/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/office' element={<OfficeBearers/>}/>
        </Routes>
        <Footer/>
      </Router>

    </>
  );
}

export default App;
