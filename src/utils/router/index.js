import { createBrowserRouter, Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar';
import AboutUs from '../../pages/aboutUs';
import AllEvents from '../../pages/allEvents';
import ContactPage from '../../pages/contactPage';
import Events from '../../pages/events';
import Home from '../../pages/home';
import OfficeBearers from '../../pages/officeBearers';
export default createBrowserRouter([
    {
      path:"",
      element:<div><Navbar/><Outlet/></div>, 
      children:[
        {
          path:"/home",
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
      ]
    }
  ])