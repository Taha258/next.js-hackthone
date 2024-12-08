'use client'

import { useState } from 'react'

interface FilterOption {
  label: string
  count: number
  checked?: boolean
}

export default function Sidebar() {
  const [maxPrice, setMaxPrice] = useState(100)
  
  const typeOptions: FilterOption[] = [
    { label: 'Sport', count: 10, checked: true },
    { label: 'SUV', count: 12, checked: true },
    { label: 'MPV', count: 16 },
    { label: 'Sedan', count: 20 },
    { label: 'Coupe', count: 14 },
    { label: 'Hatchback', count: 14 }
  ]

  const capacityOptions: FilterOption[] = [
    { label: '2 Person', count: 10, checked: true },
    { label: '4 Person', count: 14 },
    { label: '6 Person', count: 12 },
    { label: '8 or More', count: 16, checked: true }
  ]

  return (
    <aside className="w-[260px] px-6 py-8 bg-white rounded-[10px]">
      {/* Type Section */}
      <div className="mb-8">
        <h3 className="text-xs font-semibold text-[#94A7CB] mb-4 uppercase tracking-wider">
          TYPE
        </h3>
        <div className="space-y-4">
          {typeOptions.map((option) => (
            <label key={option.label} className="flex items-center group cursor-pointer">
              <div className="relative flex items-center">
                <input 
                  type="checkbox"
                  defaultChecked={option.checked}
                  className="w-5 h-5 border-2 border-[#C3D4E9] rounded appearance-none cursor-pointer checked:bg-[#3563E9] checked:border-[#3563E9] transition-colors"
                />
                <svg 
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none opacity-0 peer-checked:opacity-100"
                  viewBox="0 0 12 12" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M10 3L4.5 8.5L2 6" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="ml-2 text-sm text-[#596780] group-hover:text-[#1A202C] transition-colors">
                {option.label}
              </span>
              <span className="ml-auto text-sm text-[#90A3BF]">
                ({option.count})
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Capacity Section */}
      <div className="mb-8">
        <h3 className="text-xs font-semibold text-[#94A7CB] mb-4 uppercase tracking-wider">
          CAPACITY
        </h3>
        <div className="space-y-4">
          {capacityOptions.map((option) => (
            <label key={option.label} className="flex items-center group cursor-pointer">
              <div className="relative flex items-center">
                <input 
                  type="checkbox"
                  defaultChecked={option.checked}
                  className="w-5 h-5 border-2 border-[#C3D4E9] rounded appearance-none cursor-pointer checked:bg-[#3563E9] checked:border-[#3563E9] transition-colors"
                />
                <svg 
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none opacity-0 peer-checked:opacity-100"
                  viewBox="0 0 12 12" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M10 3L4.5 8.5L2 6" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="ml-2 text-sm text-[#596780] group-hover:text-[#1A202C] transition-colors">
                {option.label}
              </span>
              <span className="ml-auto text-sm text-[#90A3BF]">
                ({option.count})
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Section */}
      <div>
        <h3 className="text-xs font-semibold text-[#94A7CB] mb-4 uppercase tracking-wider">
          PRICE
        </h3>
        <div className="px-1">
          <input
            type="range"
            min="0"
            max="100"
            value={maxPrice}
            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
            className="w-full h-2 bg-[#F6F7F9] rounded-lg appearance-none cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none
              [&::-webkit-slider-thumb]:w-4
              [&::-webkit-slider-thumb]:h-4
              [&::-webkit-slider-thumb]:rounded-full
              [&::-webkit-slider-thumb]:bg-[#3563E9]
              [&::-webkit-slider-thumb]:cursor-pointer
              [&::-moz-range-thumb]:w-4
              [&::-moz-range-thumb]:h-4
              [&::-moz-range-thumb]:rounded-full
              [&::-moz-range-thumb]:bg-[#3563E9]
              [&::-moz-range-thumb]:border-0
              [&::-moz-range-thumb]:cursor-pointer"
          />
          <div className="mt-2 flex justify-between items-center">
            <span className="text-sm text-[#90A3BF]">Max. ${maxPrice}.00</span>
          </div>
        </div>
      </div>
    </aside>
  )
}

