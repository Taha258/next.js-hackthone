import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

const transactions = [
  {
    car: "Nissan GT - R",
    price: "$80.00",
    image: "/Nissan.png",
  },
  {
    car: "CR - V",
    price: "$99.00",
    image: "/Koenigsegg.png",
  },
  {
    car: "Rolls - Royce",
    price: "$96.00",
    image: "/RollsRoyce.png",
  },
  {
    car: "CR - V",
    price: "$80.00",
    image: "/CR-V.png",
  },
];

export function RecentTransactions() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <h2 className="text-lg font-semibold">Recent Transaction</h2>
        <button className="text-sm text-blue-600">View All</button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 ">
          {transactions.map((transaction, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg border p-4"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={transaction.image}
                  alt={transaction.car}
                  width={130}
                  height={40}
                  className="h-10 w-25 rounded object-cover"
                />
                <span className="font-medium">{transaction.car}</span>
              </div>
              <span className="font-bold">{transaction.price}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
