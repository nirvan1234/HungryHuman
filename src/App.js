import './App.css';
import React, { useEffect , useState} from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './footer';
import Error from './Error';
import About from './About';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import RestaurantMenu from './RestaurantMenu';

const AppLayout = () =>{
  return (
    <>
     <Header/>
      <Outlet />
      <Footer />
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    error:<Error />,
    children:[
      {
        path:"/",
        element:<Body />,
      },
      {
        path:"/about",
        element:<About />,
      },
      {
        path:"/restaurant/:id",
        element:<RestaurantMenu />,
        error:<Error/>
      }
    ]

  }
])



function App() {
  return (
    <>
    <Header/>
      <Body />
      <Footer />
      </>
      
   
  );
}

export default App;
