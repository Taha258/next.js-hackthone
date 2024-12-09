import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <div className="container mx-auto px-6 py-8 bg-[#f6f7f9]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Card */}
        <div className="relative bg-[#54A6FF] rounded-[10px] p-6 md:p-10 overflow-hidden h-[360px]">
          <div className="relative z-10 max-w-[300px]">
            <h2 className="text-white text-[32px] font-semibold leading-[38px] mb-4">
              The Best Platform for Car Rental
            </h2>
            <p className="text-[#FFFFFF99] text-base mb-8">
              Ease of doing a car rental safely and reliably. Of course at a low price.
            </p>
            <Button className="bg-[#3563E9] hover:bg-[#3563E9]/90 text-white rounded-[4px] px-5 py-[13px] text-base font-semibold">
              Rental Car
            </Button>
          </div>
          <div className="absolute right-0 bottom-0 w-[90%] md:w-[70%] h-[180px] md:h-[200px]">
            <Image
              src="/Koenigsegg.png"
              alt="White sports car"
              fill
              className="object-contain object-right-bottom"
              priority
            />
          </div>
        </div>

        {/* Right Card - Only visible on desktop */}
        <div className="relative bg-[#3563E9] rounded-[10px] p-6 md:p-10 overflow-hidden h-[360px] hidden lg:block">
          <div className="relative z-10 max-w-[300px]">
            <h2 className="text-white text-[32px] font-semibold leading-[38px] mb-4">
              Easy way to rent a car at a low price
            </h2>
            <p className="text-[#FFFFFF99] text-base mb-8">
              Providing cheap car rental services and safe and comfortable facilities.
            </p>
            <Button className="bg-[#54A6FF] hover:bg-[#54A6FF]/90 text-white rounded-[4px] px-5 py-[13px] text-base font-semibold">
              Rental Car 
            </Button>
          </div>
          <div className="absolute right-0 bottom-0 w-[60%] h-[200px]">
            <Image
              src="/Nissan.png"
              alt="Blue sports car"
              fill
              className="object-contain object-right-bottom"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

