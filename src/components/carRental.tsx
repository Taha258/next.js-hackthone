import Image from "next/image";
import Link from "next/link";
import React from "react";

const CarRental: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Billing Info */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Billing Info</h2>
            <p className="text-sm text-gray-500 mb-4">Please enter your billing info</p>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 rounded-md p-3"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border border-gray-300 rounded-md p-3"
              />
              <input
                type="text"
                placeholder="Address"
                className="border border-gray-300 rounded-md p-3 col-span-2"
              />
              <input
                type="text"
                placeholder="Town / City"
                className="border border-gray-300 rounded-md p-3"
              />
              <div className="col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-600">
                  Upload Your ID Proof
                </label>
                <input
                  type="file"
                  className="border border-gray-300 rounded-md p-3 w-full"
                />
              </div>
            </form>
          </div>

          {/* Rental Info */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Rental Info</h2>
            <p className="text-sm text-gray-500 mb-4">Please select your rental dates</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pick-Up */}
              <div>
                <h3 className="font-medium mb-2">Pick-Up</h3>
                <form className="space-y-3">
                  <select className="border border-gray-300 rounded-md p-3 w-full">
                    <option>Select your city</option>
                  </select>
                  <input
                    type="date"
                    className="border border-gray-300 rounded-md p-3 w-full"
                  />
                  <input
                    type="time"
                    className="border border-gray-300 rounded-md p-3 w-full"
                  />
                </form>
              </div>
              {/* Drop-Off */}
              <div>
                <h3 className="font-medium mb-2">Drop-Off</h3>
                <form className="space-y-3">
                  <select className="border border-gray-300 rounded-md p-3 w-full">
                    <option>Select your city</option>
                  </select>
                  <input
                    type="date"
                    className="border border-gray-300 rounded-md p-3 w-full"
                  />
                  <input
                    type="time"
                    className="border border-gray-300 rounded-md p-3 w-full"
                  />
                </form>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
            <p className="text-sm text-gray-500 mb-4">Please select your payment method</p>
            <form className="space-y-6">
              {/* Credit Card */}
              <div>
                <label className="flex items-center space-x-3">
                  <input type="radio" name="payment" className="w-5 h-5" />
                  <span>Credit Card</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="border border-gray-300 rounded-md p-3"
                  />
                  <input
                    type="text"
                    placeholder="Expiration Date"
                    className="border border-gray-300 rounded-md p-3"
                  />
                  <input
                    type="text"
                    placeholder="Card Holder"
                    className="border border-gray-300 rounded-md p-3"
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="border border-gray-300 rounded-md p-3"
                  />
                </div>
              </div>
              {/* PayPal */}
              <label className="flex items-center space-x-3">
                <input type="radio" name="payment" className="w-5 h-5" />
                <span>PayPal</span>
              </label>
              {/* Bitcoin */}
              <label className="flex items-center space-x-3">
                <input type="radio" name="payment" className="w-5 h-5" />
                <span>Bitcoin</span>
              </label>
            </form>
          </div>

          {/* Confirmation */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Confirmation</h2>
            <p className="text-sm text-gray-500 mb-4">
              We are getting to the end. Just a few clicks and your rental is ready!
            </p>
            <form className="space-y-4">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span>
                  I agree with sending marketing and newsletter emails. No spam, promised!
                </span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5" />
                <span>I agree with terms and conditions and privacy policy.</span>
              </label>
              <Link href={'/map'}>
                <button
                type="button"
                className="w-full mt-5 bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700"
              >
                Rent Now
              </button>
              </Link>
            </form>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Rental Summary</h2>
            <p className="text-sm text-gray-500 mb-4">
              Prices may change depending on the length of the rental and the price of
              your rental car.
            </p>
            <div className="flex items-center space-x-4 mb-6">
            <Image
      src="/View 1.png"
      alt="Nissan GT - R"
      width={96}  
      height={64} 
      objectFit="cover"
      className="rounded-lg"
    />
              <div>
                <h3 className="font-medium">Nissan GT - R</h3>
                <p className="text-sm text-gray-500">★★★★☆ 440+ Reviews</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$80.00</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total Rental Price</span>
                <span>$80.00</span>
              </div>
            </div>
           <Link href={'/map'}>  <button
              type="button"
              className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700"
            >
              Apply Promo Code
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarRental;
