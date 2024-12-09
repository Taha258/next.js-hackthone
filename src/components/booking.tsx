"use client";

import Image from "next/image";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

interface Specification {
  label: string;
  value: string;
}

interface Review {
  id: number;
  author: string;
  title: string;
  date: string;
  rating: number;
  content: string;
  avatar: string;
}

const specifications: Specification[] = [
  { label: "Type Car", value: "Sport" },
  { label: "Capacity", value: "2 Person" },
  { label: "Steering", value: "Manual" },
  { label: "Gasoline", value: "70L" },
];

const reviews: Review[] = [
  {
    id: 1,
    author: "Alex Stanton",
    title: "CEO at Bukalapak",
    date: "21 July 2022",
    rating: 4,
    content:
      "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    avatar: "/Men.png",
  },
  {
    id: 2,
    author: "Skylar Dias",
    title: "CEO at Amazon",
    date: "20 July 2022",
    rating: 4,
    content:
      "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
    avatar: "/Profill.png",
  },
];

// Array of images for dynamic rendering
const carImages = ["/View 1.png", "/View 2.png", "/View 3.png"];

export default function CarDetails() {
  return (
    <div className="mx-auto max-w-6xl p-6 bg-[#f6f7f9]">
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Left Column - Hero Section */}
        <div className="space-y-6">
          <Card className="overflow-hidden bg-[#4361EE] p-6 text-white">
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold leading-tight">
                Sports car with the best design and acceleration
              </h1>
              <p className="text-sm opacity-90">
                Safety and comfort while driving a futuristic and elegant sports
                car
              </p>
            </div>
            <div className="relative mt-6 h-40">
              <Image
                src="/Nissan.png"
                alt="Nissan GT-R"
                fill
                className="object-contain"
              />
            </div>
          </Card>
          <div className="grid grid-cols-3 gap-4">
            {carImages.map((image, index) => (
              <Card
                key={index}
                className={`overflow-hidden ${
                  index === 1 ? "ring-2 ring-[#4361EE]" : ""
                }`}
              >
                <Image
                  src={image} // Dynamically set the image path
                  alt={`Car view ${index + 1}`}
                  width={120}
                  height={80}
                  className="h-full w-full object-cover"
                />
              </Card>
            ))}
          </div>
        </div>

        {/* Right Column - Details */}
        <div className="bg-white p-10 space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Nissan GT-R</h2>
              <div className="mt-1 flex items-center">
                {[1, 2, 3, 4].map((star) => (
                  <svg
                    key={star}
                    className="h-4 w-4 fill-current text-yellow-400"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-gray-500">
                  440+ Reviewer
                </span>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 rounded-full"
            >
              <Heart className="h-5 w-5 text-red-500" />
            </Button>
          </div>

          <p className="text-gray-600">
            NISMO has become the embodiment of Nissans outstanding performance
            &rsquo; inspired by the most unforgiving proving ground&rsquo; the
            &quot;race track&quot;.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {specifications.map((spec) => (
              <div key={spec.label} className="space-y-1">
                <p className="text-sm text-gray-500">{spec.label}</p>
                <p className="font-medium">{spec.value}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-xl font-semibold">$80.00/days</p>
              <p className="text-sm text-gray-500 line-through">$100.00</p>
            </div>
            <Link href={"/billing"}>
              <Button className="bg-[#4361EE] px-7 py-6">Rent Now</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-semibold">
            Reviews <span className="ml-2 text-sm text-gray-500">13</span>
          </h3>
        </div>
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <Image
                    src={review.avatar}
                    alt={review.author}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{review.author}</h4>
                    <p className="text-sm text-gray-500">{review.title}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">{review.date}</p>
                  <div className="mt-1 flex justify-end">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <svg
                        key={i}
                        className="h-4 w-4 fill-current text-yellow-400"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{review.content}</p>
            </div>
          ))}
        </div>
        <Button variant="outline" className="mt-6 w-full">
          Show All
        </Button>
      </div>
    </div>
  );
}
