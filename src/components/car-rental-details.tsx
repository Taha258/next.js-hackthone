import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image";
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function CarRentalDetails() {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-col space-y-4 pb-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
        <div className="relative h-20 w-50 overflow-hidden rounded-lg order-first sm:order-last">
        <Image
  src="/Nissan.png" // Static image path
  alt="Nissan GT-R" // Descriptive alt text
  width={500}       // Explicit width (adjust as needed)
  height={300}      // Explicit height (adjust as needed)
  className="h-full w-full object-cover" // Additional styling
/>
        </div>
        <div>
          <h2 className="text-xl font-bold">Nissan GT - R</h2>
          <p className="text-sm text-muted-foreground">Sport Car</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label>Pick - Up</Label>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              <Select>
                <SelectTrigger>
                  <SelectValue aria-placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="location1">Location 1</SelectItem>
                  <SelectItem value="location2">Location 2</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue aria-placeholder="Date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="tomorrow">Tomorrow</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue aria-placeholder="Time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10am">10:00 AM</SelectItem>
                  <SelectItem value="11am">11:00 AM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label>Drop - Off</Label>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              <Select>
                <SelectTrigger>
                  <SelectValue aria-placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="location1">Location 1</SelectItem>
                  <SelectItem value="location2">Location 2</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue aria-placeholder="Date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="tomorrow">Tomorrow</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue aria-placeholder="Time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10am">10:00 AM</SelectItem>
                  <SelectItem value="11am">11:00 AM</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-t pt-4">
          <div>
            <p className="text-sm text-muted-foreground">Total Rental Price</p>
            <p className="text-2xl font-bold">$80.00</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

