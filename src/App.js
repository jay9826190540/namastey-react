import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from './components/Body';
import About from "./components/About";
import Contactus from "./components/Contactus";
import Error from "./components/Error";
import RestaurantDetails from "./components/Restaurantmenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => (
  <div className="App">
    <Header></Header>
    <Outlet />
  </div>
)
//// createrBrowserRouter takes array and inside array it takes object
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contactus",
        element: <Contactus />
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantDetails />
      }
    ],
    errorElement: <Error />
  }

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
