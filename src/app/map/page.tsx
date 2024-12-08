import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className='flex bg-[#f6f7f9] container mx-auto'>
        <div className=''>
            <Image src={'/Nav Bar.png'} alt='side' width={300} height={1900}/>       
         </div>
         <div className='flex p-10'>
         <Image src={'/Details Rental.png'} alt='side' width={500} height={10}/>       
            <div className='p-4'>
            <Image className='mb-4' src={'/Details Rental.png'} alt='side' width={300} height={850}/>       
            <Image src={'/Details Rental.png'} alt='side' width={300} height={850}/>       
            </div>
         </div>
    </div>
  )
}
