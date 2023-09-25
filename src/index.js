import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Body from './Body';
import Footer from './footer';
import Error from './Error';
import About from './About';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
