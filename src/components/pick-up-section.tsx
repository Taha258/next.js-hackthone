import { ArrowUpDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function PickUpSection() {
  return (
    <div className="container mx-auto px-6 bg-[#f6f7f9]">
      <div className="bg-white rounded-[10px] p-6 shadow-sm">
        <div className="flex flex-col lg:flex-row items-center gap-6 relative">
          {/* Pick Up Section */}
          <div className="w-full lg:w-[45%]">
            <div className="space-y-6">
              <RadioGroup defaultValue="pick-up">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pick-up" id="pick-up" />
                  <Label htmlFor="pick-up" className="text-base font-semibold">
                    Pick - Up 
                  </Label>
                </div>
              </RadioGroup>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue aria-placeholder="Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="semarang">Semarang</SelectItem>
                    <SelectItem value="jakarta">Jakarta</SelectItem>
                    <SelectItem value="surabaya">Surabaya</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger>
                    <SelectValue aria-placeholder="Date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="20-july">20 July 2024</SelectItem>
                    <SelectItem value="21-july">21 July 2024</SelectItem>
                    <SelectItem value="22-july">22 July 2024</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger>
                    <SelectValue aria-placeholder="Time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="07-00">07:00</SelectItem>
                    <SelectItem value="08-00">08:00</SelectItem>
                    <SelectItem value="09-00">09:00</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Swap Button */}
          <div className="absolute left-1/2 top-1/2 lg:static -translate-x-1/2 -translate-y-1/2 lg:translate-x-0 lg:translate-y-0 z-10">
            <Button 
              size="icon" 
              className="h-12 w-12 rounded-[10px] bg-[#3563E9] hover:bg-[#3563E9]/90"
            >
              <ArrowUpDown className="h-6 w-6 text-white" />
            </Button>
          </div>

          {/* Drop Off Section */}
          <div className="w-full lg:w-[45%]">
            <div className="space-y-6">
              <RadioGroup defaultValue="drop-off">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="drop-off" id="drop-off" />
                  <Label htmlFor="drop-off" className="text-base font-semibold">
                    Drop - Off
                  </Label>
                </div>
              </RadioGroup>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue aria-placeholder="Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="semarang">Semarang</SelectItem>
                    <SelectItem value="jakarta">Jakarta</SelectItem>
                    <SelectItem value="surabaya">Surabaya</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger>
                    <SelectValue aria-placeholder="Date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="20-july">20 July 2024</SelectItem>
                    <SelectItem value="21-july">21 July 2024</SelectItem>
                    <SelectItem value="22-july">22 July 2024</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger>
                    <SelectValue aria-placeholder="Time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="07-00">07:00</SelectItem>
                    <SelectItem value="08-00">08:00</SelectItem>
                    <SelectItem value="09-00">09:00</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

