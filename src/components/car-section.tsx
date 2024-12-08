'use client'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CarCard from './car-card';
import Car from './responsiveCard';
import Link from 'next/link';

export default function CarSection() {
  const [swiperIndex, setSwiperIndex] = useState(0);

  return (
    <section className="container mx-auto bg-[#f6f7f9] p-4 sm:px-6 md:px-8">
      <div className='flex justify-between py-5'><p className='text-gray-600'>Popular Car</p> <p className='text-blue-600'>View All</p></div>
      <Swiper
        className="mySwiper"
        onSlideChange={(swiper) => setSwiperIndex(swiper.activeIndex)}
      >
        <SwiperSlide>
          <div className="flex justify-center gap-10">
            <Link href={'/page3'}><CarCard brand="Koenigsegg" title="Sport" image={'/Koenigsegg.png'} price="$99.00" /></Link>
            <Link href={'/page3'}><CarCard brand="Nissan GT-R" title="Sport" image={'/Nissan.png'} price="$80.00" /></Link>
            <Link href={'/page3'}><CarCard brand="Rolls-Royce" title="Sport" image={'/RollsRoyce.png'} price="$96.00" /></Link>
            <Link href={'/page3'}><CarCard brand="Nissan GT-R" title="Sport" image={'/Nissan.png'} price="$80.00" /></Link>
            {/* <CarCard brand="Koenigsegg" title="Sport" image={'/Koenigsegg.png'} price="$99.00" /> */}
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="flex gap-4">
            <CarCard brand="Koenigsegg" title="Sport" image={'/Koenigsegg.png'} price="$99.00" />
            <CarCard brand="Koenigsegg" title="Sport" image={'/Koenigsegg.png'} price="$99.00" />
            <CarCard brand="Koenigsegg" title="Sport" image={'/Koenigsegg.png'} price="$99.00" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex gap-4">
            <CarCard brand="Koenigsegg" title="Sport" image={'/Koenigsegg.png'} price="$99.00" />
            <CarCard brand="Koenigsegg" title="Sport" image={'/Koenigsegg.png'} price="$99.00" />
            <CarCard brand="Koenigsegg" title="Sport" image={'/Koenigsegg.png'} price="$99.00" />
          </div>
        </SwiperSlide> */}
      </Swiper>
      <div className="flex gap-2 justify-center mt-4">
        {[...Array(5)].map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full bg-gray-300 ${swiperIndex === index ? 'bg-blue-500' : ''}`}
            onClick={() => setSwiperIndex(index)}
          />
        ))}
      </div>
      <p className='text-gray-600 mb-4'>Recomendation Car</p>
<div className='flex justify-center items-center'>
<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10">
  <Link href={'/page3'}><Car brand="All New Rush" title="SUV" image={'/AllNewTerios.png'} price="$72.00"/></Link>
  <Link href={'/page3'}><Car brand="CR-V" title="SUV" image={'/CR-V.png'} price="$80.00"/></Link>
  <Link href={'/page3'}><Car brand="All New Rush" title="SUV" image={'/AllNewTerios.png'} price="$72.00"/></Link>
  <Link href={'/page3'}><Car brand="CR-V" title="SUV" image={'/CR-V.png'} price="$80.00"/></Link>
</div>
</div>

<div className='flex justify-center items-center mt-5'>
<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10">
  <Link href={'/page3'}><Car brand="MGZX Exclusice" title="Sport" image={'/MGZX Exclusice.png'} price="$76.00"/></Link>
  <Link href={'/page3'}><Car brand="New MGZS" title="Sport" image={'/NewMGZS.png'} price="$80.00"/></Link>
  <Link href={'/page3'}><Car brand="MGZX Exclusice" title="Sport" image={'/MGZX Exclusice.png'} price="$76.00"/></Link>
  <Link href={'/page3'}><Car brand="New MGZS" title="Sport" image={'/NewMGZS.png'} price="$80.00"/></Link>
</div>
</div>
<div className='flex justify-center items-center mt-8 '>
<Link href={'/page2'}> <button className='bg-blue-600 px-4 py-2 rounded-sm text-white hover:bg-blue-700'>Show More</button></Link> 
</div>
    </section>
  )
}
