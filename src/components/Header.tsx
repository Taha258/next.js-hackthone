'use client'

import Link from "next/link"
import { Bell, Heart, Menu, Search, Settings } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { useState } from "react"
import Image from "next/image"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto">
        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between h-16 px-4">
          <Link href="/" className="text-[#3563E9] text-2xl font-bold">
            MORENT
          </Link>
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input 
                className="pl-10 pr-4 py-2 w-full rounded-full border-gray-200" 
                placeholder="Search something here"
                type="search"
              />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:bg-gray-100"
            >
              <Heart className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:bg-gray-100 relative"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:bg-gray-100"
            >
              <Settings className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:bg-gray-100 p-0"
            >
              
              <Image
  alt="Profile"
  className="rounded-full h-8 w-8"
  src="/Men.png"
  width={32} // Equivalent to w-8 (8 * 4 = 32px)
  height={32} // Equivalent to h-8 (8 * 4 = 32px)
  style={{
    aspectRatio: "1/1",
    objectFit: "cover",
  }}
/>
            </Button>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden">
          <div className="flex items-center justify-between h-16 px-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Link href="/" className="text-[#3563E9] text-2xl font-bold">
              MORENT
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:bg-gray-100 p-0"
            >
             <Image
  alt="Profile"
  className="rounded-full h-8 w-8"
  src="/Men.png"
  width={32} 
  height={32} 
  style={{
    aspectRatio: "1/1",
    objectFit: "cover",
  }}
/>
            </Button>
          </div>
          <div className="px-4 pb-4">
            <div className="relative flex items-center">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input 
                className="pl-10 pr-4 py-2 w-full rounded-full border-gray-200" 
                placeholder="Search something here"
                type="search"
              />
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-2 top-1/2 -translate-y-1/2"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 6.5H16"
                    stroke="#596780"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 6.5H2"
                    stroke="#596780"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 10C11.933 10 13.5 8.433 13.5 6.5C13.5 4.567 11.933 3 10 3C8.067 3 6.5 4.567 6.5 6.5C6.5 8.433 8.067 10 10 10Z"
                    stroke="#596780"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 17.5H18"
                    stroke="#596780"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 17.5H2"
                    stroke="#596780"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 21C15.933 21 17.5 19.433 17.5 17.5C17.5 15.567 15.933 14 14 14C12.067 14 10.5 15.567 10.5 17.5C10.5 19.433 12.067 21 14 21Z"
                    stroke="#596780"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden fixed inset-0 bg-white transform transition-transform duration-200 ease-in-out",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <div className="p-4">
            <Button 
              variant="ghost" 
              size="icon"
              className="mb-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <nav className="space-y-4">
              <Button variant="ghost" className="w-full justify-start" size="lg">
                <Heart className="h-5 w-5 mr-2" />
                Favorites
              </Button>
              <Button variant="ghost" className="w-full justify-start" size="lg">
                <Bell className="h-5 w-5 mr-2" />
                Notifications
              </Button>
              <Button variant="ghost" className="w-full justify-start" size="lg">
                <Settings className="h-5 w-5 mr-2" />
                Settings
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

