import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Service from "./components/services/Service";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";


export default function App(){
  return(
    <>
      <Header/>
      
      <main>
        <Hero/>
        <Service/>
        <About/>
      </main>
        <Footer/>

      
    </>
  );
}