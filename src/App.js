
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
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
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>,
    },
    {
      path:"/aboutus",
      element:<AboutUs/>
    },
    {
      path:"/contact",
      element:<ContactPage/>
    },
    {
      path:"/office",
      element:<OfficeBearers/>
    },
    {
      path:"/allevents",
      element:<AllEvents/>,
    },
    {
      path:"/events",
      element:<Events/>,
    },
  ])
  return (
   <> 
    
    
      <Navbar/>
      <RouterProvider router={router}/>

    </>
  );
}

export default App;
