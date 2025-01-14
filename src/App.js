import React, { useEffect , useState} from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './footer';
import Error from './Error';
import About from './About';
import Cart from './cart';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import RestaurantMenu from './RestaurantMenu';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';


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
      },
      {
        path:"/cart",
        element:<Cart />
      }
    ]

  }
])



function App() {
  return (
    <Provider store={appStore}>
    <>
    <Header/>
      <Body />
      <Footer />
      </>
    </Provider>
      
   
  );
}

export default App;
