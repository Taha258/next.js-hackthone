import { SearchIcon } from 'lucide-react'
import { Input } from "@/components/ui/input"

export function Search() {
  return (
    <div className="relative">
      <SearchIcon className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
      <Input
        className="pl-8"
        placeholder="Search for a car"
        type="search"
      />
    </div>
  )
}

