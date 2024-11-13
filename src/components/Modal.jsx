'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import VisuallyHidden from "@/components/ui/VisuallyHidden"

// Import all festival images
import christmasImage from "../assets/chirstmas.jpg"
import newYearImage from "../assets/newyear.jpg"

// Add more festival images as needed

const festivals = [
  { name: "Christmas", date: new Date(new Date().getFullYear(), 10, 25), image: christmasImage },
  { name: "New Year", date: new Date(new Date().getFullYear() + 1, 0, 1), image: newYearImage },
  // Add more festivals with their dates and images
]

function getUpcomingFestival() {
  const today = new Date()
  const fifteenDaysFromNow = new Date(today.getTime() + 15 * 24 * 60 * 60 * 1000)

  return festivals
    .filter(festival => {
      const festivalDate = new Date(festival.date)
      festivalDate.setFullYear(today.getFullYear())
      if (festivalDate < today) {
        festivalDate.setFullYear(today.getFullYear() + 1)
      }
      return festivalDate <= fifteenDaysFromNow && festivalDate >= today
    })
    .sort((a, b) => a.date.getTime() - b.date.getTime())[0] || null
}

export default function FestivalImageModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentFestival, setCurrentFestival] = useState(null)

  useEffect(() => {
    const festival = getUpcomingFestival()
    if (festival) {
      setCurrentFestival(festival)
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [])

  if (!currentFestival) return null

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[600px] p-0">
        <VisuallyHidden>
          <DialogTitle>{currentFestival.name} Festival Announcement</DialogTitle>
        </VisuallyHidden>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -right-3 -top-3 bg-white rounded-full p-1 shadow-md transition-all hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 z-50"
        >
          <X className="h-6 w-6 text-gray-600" />
          <span className="sr-only">Close</span>
        </button>
        <div className="relative aspect-[4/3] w-full">
          <img
            src={currentFestival.image}
            alt={`${currentFestival.name} Advertisement`}
            className="w-full h-full object-cover"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}