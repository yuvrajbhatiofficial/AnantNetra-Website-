import HomePage from "@/app/components/HomePage";
import Features from "./components/Feature";
import BentoGrids from "./components/BentoGrid";
import { AnimatedTestimonialsDemo } from "./components/Testimonial";




export default function Page() {
  return(
    <> 
    
    <HomePage  />
    
    <BentoGrids />
    <Features />
    <AnimatedTestimonialsDemo />
    
    </>
  )
   ;
}