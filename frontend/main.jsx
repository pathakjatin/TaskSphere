import React, { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./src/components/header/Header.jsx";
import Hero from "./src/components/hero/Hero.jsx";
import Service from "./src/components/services/Service.jsx";
import About from "./src/components/about/About.jsx";
import Contact from "./src/components/contact/Contact.jsx";
import SignUp from "./src/components/credentials/SignUp.jsx";
import Footer from "./src/components/footer/Footer.jsx";
import Home from './src/components/dashboard/Home.jsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Hero />
        <Footer />
      </>
    ),
  },
  {
    path: "/service",
    element: (
      <>
        <Header />
        <Service />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Header />
        <About />
        <Footer />
      </>
    ),
  },
  {
    path: "/contact",
    element: (
      <>
        <Header />
        <Contact />
        <Footer />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Header />
        <SignUp />
        <Footer />
      </>
    ),
  },
]);

const App = () =>{
  return <RouterProvider router={router} />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Home/>
  </StrictMode>,
)
