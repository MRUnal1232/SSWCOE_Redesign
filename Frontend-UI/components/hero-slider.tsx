"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    image: "/placeholder.svg?height=600&width=1600",
    title: "Welcome to SSWCOE",
    subtitle: "A Premier Engineering Institution",
    description:
      "Empowering students with knowledge, skills, and values to excel in the global technological landscape.",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=600&width=1600",
    title: "Excellence in Education",
    subtitle: "Innovative Teaching & Research",
    description: "Our state-of-the-art facilities and experienced faculty ensure a comprehensive learning experience.",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=600&width=1600",
    title: "Building Future Leaders",
    subtitle: "Beyond Academics",
    description:
      "We focus on holistic development through technical, soft skills, and personality development programs.",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[600px] mt-28">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 fade-in">{slide.title}</h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl mb-6 fade-in-delay-1">{slide.subtitle}</h2>
              <p className="text-lg md:text-xl max-w-2xl mx-auto fade-in-delay-2">{slide.description}</p>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-colors",
              index === currentSlide ? "bg-white" : "bg-white/40",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
