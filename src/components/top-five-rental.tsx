import { Card, CardContent, CardHeader } from "@/components/ui/card"

const carTypes = [
  { name: "Sport Car", value: "17,439", color: "bg-[#0D3559]" },
  { name: "SUV", value: "9,478", color: "bg-[#175D9C]" },
  { name: "Coupe", value: "18,197", color: "bg-[#2185DE]" },
  { name: "Hatch Back", value: "12,510", color: "bg-[#63A9E8]" },
  { name: "MPV", value: "14,404", color: "bg-[#A7D1F7]" },
]

export function TopFiveRental() {
  return (
    <Card className="rounded-lg bg-white shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <h2 className="text-lg font-semibold">Top 5 Car Rental</h2>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-12 gap-4">
          {/* Left side - Donut Chart */}
          <div className="col-span-7 relative">
            <div className="aspect-square relative">
              <div className="absolute inset-0">
                <div className="w-full h-full rounded-full border-[16px] border-[#EEF3F8]" />
              </div>
              {carTypes.map((type, index) => (
                <div
                  key={type.name}
                  className="absolute inset-0"
                  style={{
                    clipPath: `polygon(50% 50%, 100% ${index * 25}%, 100% ${(index + 1) * 25}%)`,
                  }}
                >
                  <div className={`h-full w-full ${type.color}`} />
                </div>
              ))}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold">72,030</span>
                <span className="text-xs text-gray-500">Car Rented</span>
              </div>
            </div>
          </div>

          {/* Right side - Statistics */}
          <div className="col-span-5 flex flex-col justify-center space-y-3">
            {carTypes.map((type) => (
              <div key={type.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full ${type.color}`} />
                  <span className="text-sm text-gray-600">{type.name}</span>
                </div>
                <span className="text-sm font-medium">{type.value}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

