import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import Menu from "./src/components/Menu";
import Restaurant from "./src/components/Restaurant";
import Footer from "./src/components/Footer";
import LocomotiveScroll from 'locomotive-scroll';




function App(){
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="app_js_nuke">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const app = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Body/>,
        // errorElement: <Error/>
      },
      {
        path: "/about",
        element: <About/>,
        // errorElement: <Error/>
      },
      {
        path: "/contact",
        element: <Contact/>,
        // errorElement: <Error/>
      },
      {
        path: "/restaurants/:resId",
        element: <Menu/>,
        // errorElement: <Error/>
      },
    ],
    errorElement: <Error/>
  },

])

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<RouterProvider router={app}/>) 

