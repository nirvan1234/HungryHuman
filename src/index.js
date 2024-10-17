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
import Cart from './cart';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import RestaurantMenu from './RestaurantMenu';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

const AppLayout = () =>{
  return (
    <>
    <Provider store={appStore}>
     <Header/>
      <Outlet />
      <Footer />
      </Provider>
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    errorElement: <Error />,
    children:[
      {
        path:"/",
        element:<Body />
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/restaurant/:resId",
        element:<RestaurantMenu />,
      },
      {
        path:"/cart",
        element:<Cart />
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
