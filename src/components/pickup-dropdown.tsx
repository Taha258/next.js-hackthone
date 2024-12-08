import { ChevronDown } from 'lucide-react'

interface PickupDropdownProps {
  label: string
  value: string
  type: 'location' | 'date' | 'time'
}

export function PickupDropdown({ label, value, type }: PickupDropdownProps) {
  return (
    <div className="flex-1">
      <label className="block text-xs text-[#1A202C] mb-1">{label}</label>
      <button className="w-full flex items-center justify-between bg-white rounded-[10px] px-5 py-3 text-sm">
        <span className="text-[#1A202C]">{value}</span>
        <ChevronDown className="w-4 h-4 text-[#1A202C]" />
      </button>
    </div>
  )
}

