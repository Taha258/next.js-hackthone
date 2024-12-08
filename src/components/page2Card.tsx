import { Heart } from 'lucide-react'
// import { Car } from "@/types/car"
import Image from "next/image"

export interface CarFeatures {
    gas?: boolean;
    manual?: boolean;
    capacity: number;
  }
  
  export interface Car {
    id: string;
    name: string;
    type: string;
    image: string;
    price: number;
    originalPrice?: number;
    features: CarFeatures;
    isFavorite?: boolean;
  }
  
  

interface CarCardProps {
  car: Car
}

export function CarCard2({ car }: CarCardProps) {
  return (
    <div className="bg-white rounded-[10px] p-4 space-y-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-base font-semibold text-[#1A202C]">{car.name}</h3>
          <p className="text-sm text-[#90A3BF]">{car.type}</p>
        </div>
        <button className="text-[#90A3BF] hover:text-[#ED3F3F]">
          <Heart className={`w-5 h-5 ${car.isFavorite ? 'fill-[#ED3F3F] text-[#ED3F3F]' : ''}`} />
        </button>
      </div>
      
      <div className="relative h-[120px] w-full">
        <Image 
          src={car.image} 
          alt={car.name}
          fill
          className="object-contain"
        />
      </div>

      <div className="flex items-center justify-between text-sm text-[#90A3BF]">
        <div className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.34 9.33L20.34 3.33C20.1539 2.75182 19.7772 2.24406 19.2677 1.87788C18.7582 1.51171 18.1395 1.30372 17.5 1.28H6.5C5.86052 1.30372 5.24184 1.51171 4.73232 1.87788C4.2228 2.24406 3.84609 2.75182 3.66 3.33L1.66 9.33C1.24 10.85 1.73 12.5 2.9 13.67V19.5C2.9 20.163 3.16375 20.7989 3.63258 21.2678C4.1014 21.7366 4.73739 22 5.4 22H18.6C19.2626 22 19.8986 21.7366 20.3674 21.2678C20.8363 20.7989 21.1 20.163 21.1 19.5V13.67C22.27 12.5 22.76 10.85 22.34 9.33ZM5.12 10L6.87 4.78C6.95 4.5 7.2 4.28 7.5 4.28H16.5C16.8 4.28 17.05 4.5 17.13 4.78L18.88 10C19.02 10.47 18.94 10.97 18.67 11.36C18.4 11.75 17.97 11.98 17.5 11.98H6.5C6.03 11.98 5.6 11.75 5.33 11.36C5.06 10.97 4.98 10.47 5.12 10ZM6.9 19V17.78C6.9 17.3487 7.06857 16.9351 7.36863 16.635C7.66869 16.335 8.08261 16.1664 8.51429 16.1664C8.94597 16.1664 9.35989 16.335 9.65995 16.635C9.96001 16.9351 10.1286 17.3487 10.1286 17.78V19H6.9ZM13.9 19V17.78C13.9 17.3487 14.0686 16.9351 14.3686 16.635C14.6687 16.335 15.0826 16.1664 15.5143 16.1664C15.946 16.1664 16.3599 16.335 16.66 16.635C16.96 16.9351 17.1286 17.3487 17.1286 17.78V19H13.9Z" fill="#90A3BF"/>
          </svg>
          <span>{car.features.gas ? 'Gas' : 'Electric'}</span>
        </div>
        <div className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.07 16.07C15.61 16.53 14.83 16.24 14.19 15.61L11.15 12.57C10.54 11.96 10.24 11.18 10.7 10.72C11.16 10.26 11.94 10.55 12.58 11.19L15.62 14.23C16.26 14.86 16.53 15.61 16.07 16.07Z" fill="#90A3BF"/>
          </svg>
          <span>{car.features.manual ? 'Manual' : 'Auto'}</span>
        </div>
        <div className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="#90A3BF"/>
            <path d="M12 14.5C6.99 14.5 2.91 17.86 2.91 22C2.91 22.28 3.13 22.5 3.41 22.5H20.59C20.87 22.5 21.09 22.28 21.09 22C21.09 17.86 17.01 14.5 12 14.5Z" fill="#90A3BF"/>
          </svg>
          <span>{car.features.capacity} People</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2">
        <div>
          <span className="text-base font-semibold text-[#1A202C]">${car.price}.00/</span>
          <span className="text-sm text-[#90A3BF]">day</span>
          {car.originalPrice && (
            <p className="text-sm text-[#90A3BF] line-through">${car.originalPrice}.00</p>
          )}
        </div>
        <button className="bg-[#3563E9] text-white px-4 py-2.5 rounded-[4px] text-sm font-semibold hover:bg-[#2351D4] transition-colors">
          Rent Now
        </button>
      </div>
    </div>
  )
}

