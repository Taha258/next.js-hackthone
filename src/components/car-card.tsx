import { Heart } from "lucide-react";
import Image from "next/image";

export default function CarCard({brand,title,image,price}:{brand:string,title:string,image:string,price:string}) {
  return (
    <div className="w-[300px] h-[340px] rounded-xl bg-white p-4 shadow">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-medium text-[15px]">{brand}</h3>
          <p className="text-sm text-muted-foreground">{title}</p>
        </div>
        <button className="rounded-full p-1 hover:bg-gray-100">
          <Heart className="h-5 w-5 text-red-500" />
        </button>
      </div>

      {/* Car Image */}
     {/* Full div */}
      <div className="">
      <div className="my-4">
        <Image
          src={image}
          alt="Koenigsegg"
          height={80}
          width={220}
          className="w-full object-contain"
        />
      </div>

      {/* Specs */}
      <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Image
            src="/gas-station.png"
            alt="Transmission"
            height={14}
            width={14}
            className="h-3.5 w-3.5"
          />
          <span>90L</span>
        </div>
        <div className="flex items-center gap-1">
          <Image
            src="/curcle.png"
            alt="Transmission"
            height={14}
            width={14}
            className="h-3.5 w-3.5"
          />
          <span>Manual</span>
        </div>
        <div className="flex items-center gap-1">
          <Image
            src="/profile-2user.png"
            alt="Transmission"
            height={14}
            width={14}
            className="h-3.5 w-3.5 my-7"
          />
          <span>2 People</span>
        </div>
      </div>
      </div> {/* Full div */}
      {/* Price and CTA */}
      <div className="flex flex-col xl:flex-row items-center justify-between">
  <div>
    <span className="text-lg font-semibold">{price}</span>
    <span className="text-sm text-gray-500">/day</span>
  </div>
  <button className="mt-1 sm:mt-0 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700">
    Rent Now
  </button>
</div>
    </div>
  );
}
