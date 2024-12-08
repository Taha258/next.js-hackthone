import CarSection from "@/components/car-section";
import { Hero } from "@/components/hero";
import { PickUpSection } from "@/components/pick-up-section";

export default function Home() {
  return (
    <main className="">
          <div>
            <Hero/>
            <PickUpSection/>
           <CarSection/>
            
          </div>
    </main>
  );
}
