// import Image from 'next/image'
// import React from 'react'

// export default function page() {
//   return (
//     <div className='flex bg-[#f6f7f9] container mx-auto'>
//         <div className=''>
//             <Image src={'/Nav Bar.png'} alt='side' width={300} height={1900}/>       
//          </div>
//          <div className='flex p-10'>
//          <Image src={'/Details Rental.png'} alt='side' width={500} height={10}/>       
//             <div className='p-4'>
//             <Image className='mb-4' src={'/Details Rental.png'} alt='side' width={300} height={850}/>       
//             <Image src={'/Details Rental.png'} alt='side' width={300} height={850}/>       
//             </div>
//          </div>
//     </div>
//   )
// }

import { MapSide } from "@/components/mapSide"
import { CarRentalDetails } from "@/components/car-rental-details"
import { RecentTransactions } from "@/components/recent-transaction"
import { TopFiveRental } from "@/components/top-five-rental"
import Image from "next/image"
import { Fullscreen } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-background container mx-auto">
      
      <MapSide />
      <main className="flex-1 p-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="h-[300px] rounded-lg ">
            <h1>Details Rental</h1>
              {/* Map placeholder - You would integrate a real map here */}
              <Image alt="map" width={1000} height={500} src={'/Maps.png'}/>
            </div>
            <CarRentalDetails />
          </div>
          <div className="space-y-8">
            <TopFiveRental />
            <RecentTransactions />
          </div>
        </div>
      </main>
    </div>
  )
}

