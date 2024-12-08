import { useState } from 'react'

export function FilterSidebar() {
  const [maxPrice, setMaxPrice] = useState(100)

  return (
    <aside className="w-[260px] space-y-8">
      <div>
        <h3 className="text-sm font-semibold text-[#1A202C] mb-4">TYPE</h3>
        <div className="space-y-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="w-5 h-5 rounded border-[#90A3BF] text-[#3563E9]" />
            <span className="text-sm text-[#1A202C]">Sport</span>
            <span className="text-sm text-[#90A3BF] ml-auto">(10)</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="w-5 h-5 rounded border-[#90A3BF] text-[#3563E9]" />
            <span className="text-sm text-[#1A202C]">SUV</span>
            <span className="text-sm text-[#90A3BF] ml-auto">(12)</span>
          </label>
          {/* Add other vehicle types */}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-[#1A202C] mb-4">CAPACITY</h3>
        <div className="space-y-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="w-5 h-5 rounded border-[#90A3BF] text-[#3563E9]" />
            <span className="text-sm text-[#1A202C]">2 Person</span>
            <span className="text-sm text-[#90A3BF] ml-auto">(10)</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="w-5 h-5 rounded border-[#90A3BF] text-[#3563E9]" />
            <span className="text-sm text-[#1A202C]">4 Person</span>
            <span className="text-sm text-[#90A3BF] ml-auto">(14)</span>
          </label>
          {/* Add other capacity options */}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-[#1A202C] mb-4">PRICE</h3>
        <input
          type="range"
          min="0"
          max="100"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full h-2 bg-[#F6F7F9] rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between mt-2 text-sm text-[#90A3BF]">
          <span>Max. ${maxPrice}.00</span>
        </div>
      </div>
    </aside>
  )
}

