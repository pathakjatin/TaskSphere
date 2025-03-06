import { About } from "../components/Home/About";
import Hero from "../components/Home/Hero";

export default function HomePage(){
    return(
        <main className="h-full">
            <Hero/>
            <About/>
        </main>
    );
}