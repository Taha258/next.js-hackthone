import { PickUpSection } from "@/components/pick-up-section";
import CarSection from "@/components/car-section";
import Sidebar from "@/components/sidebar";
import Car from '@/components/responsiveCard';
import CarDetails from '@/components/booking'
import Link from "next/link";

export default function page() {
  return (
    <main className="container mx-auto bg-[#f6f7f9] ">
      <div className="flex">
        <div className="hidden lg:block bg-[white]">
          <Sidebar />
          {/* <CarDetails /> */}
        </div>

        <div className="flex flex-col justify-center items-center gap-5">
  {/* <PickUpSection /> */}
  <CarDetails />
  <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-3 p-3 justify-items-center">
           <Link href={'/page3'}><Car brand="Koenigsegg" title="Sport" image={'/Koenigsegg.png'} price="$99.00" /></Link>
            <Link href={'/page3'}><Car brand="Nissan GT-R" title="Sport" image={'/Nissan.png'} price="$80.00" /></Link>
           <Link href={'/page3'}><Car brand="Rolls-Royce" title="Sport" image={'/RollsRoyce.png'} price="$96.00" /></Link>
            <Link href={'/page3'}><Car brand="Nissan GT-R" title="Sport" image={'/Nissan.png'} price="$80.00" /></Link>
  </div>
  <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-3 p-3 justify-items-center">
  <Link href={'/page3'}><Car brand="All New Rush" title="SUV" image={'/AllNewTerios.png'} price="$72.00"/></Link>

  <Link href={'/page3'}><Car brand="CR-V" title="SUV" image={'/CR-V.png'} price="$80.00"/></Link>

  <Link href={'/page3'}><Car brand="All New Rush" title="SUV" image={'/AllNewTerios.png'} price="$72.00"/></Link>

  <Link href={'/page3'}><Car brand="CR-V" title="SUV" image={'/CR-V.png'} price="$80.00"/></Link>
  </div>
  <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-3 p-3 justify-items-center">
  <Link href={'/page3'}><Car brand="MGZX Exclusice" title="Sport" image={'/MGZX Exclusice.png'} price="$76.00"/></Link>

<Link href={'/page3'}><Car brand="New MGZS" title="Sport" image={'/NewMGZS.png'} price="$80.00"/></Link>

<Link href={'/page3'}><Car brand="MGZX Exclusice" title="Sport" image={'/MGZX Exclusice.png'} price="$76.00"/></Link>

<Link href={'/page3'}><Car brand="New MGZS" title="Sport" image={'/NewMGZS.png'} price="$80.00"/></Link>

  </div>
</div>


      </div>
    
{/* <Link href={'/page2'}> <button className='ml-[300px] bg-blue-600 px-4 py-2 rounded-sm text-white hover:bg-blue-700'>Show More</button></Link>  */}

    </main>
  );
}
