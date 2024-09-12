import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./src/components/header/Header";
import Hero from "./src/components/hero/Hero.jsx";
import Service from "./src/components/services/Service";
import About from "./src/components/about/About";
import Contact from "./src/components/contact/Contact";
import SignUp from "./src/components/credentials/SignUp";
import Footer from "./src/components/footer/Footer";

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

export default function App() {
  return <RouterProvider router={router} />;
}
