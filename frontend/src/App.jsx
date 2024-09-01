import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Service from "./components/services/Service";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import SignUp from "./components/credentials/SignUp";
import Footer from "./components/footer/Footer";


export default function App(){
  return(
    <>
      <Header/>
      
      <main>
        <Hero/>
        <Service/>
        <About/>
        <Contact/>
        <SignUp/>
      </main>
        <Footer/>

      
    </>
  );
}