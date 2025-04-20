"use client"

import { useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Skill {
  name: string
  icon: string
}

interface SkillCarouselProps {
  skills: Skill[]
  isTech?: boolean
  direction: "ltr" | "rtl" // left-to-right or right-to-left
}

export function SkillCarousel({ skills, isTech = false, direction }: SkillCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scroll = (scrollDirection: "left" | "right") => {
    if (carouselRef.current) {
      const { current } = carouselRef
      const scrollAmount = 200

      if (scrollDirection === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" })
      }
    }
  }

  // Auto-scroll effect
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let scrollInterval: NodeJS.Timeout

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (!carousel) return

        const scrollAmount = 1
        const maxScroll = carousel.scrollWidth - carousel.clientWidth

        if (direction === "ltr") {
          // Left to right scrolling
          carousel.scrollLeft += scrollAmount
          if (carousel.scrollLeft >= maxScroll) {
            carousel.scrollLeft = 0
          }
        } else {
          // Right to left scrolling
          carousel.scrollLeft -= scrollAmount
          if (carousel.scrollLeft <= 0) {
            carousel.scrollLeft = maxScroll
          }
        }
      }, 20)
    }

    const stopAutoScroll = () => {
      clearInterval(scrollInterval)
    }

    startAutoScroll()

    carousel.addEventListener("mouseenter", stopAutoScroll)
    carousel.addEventListener("mouseleave", startAutoScroll)

    return () => {
      clearInterval(scrollInterval)
      carousel.removeEventListener("mouseenter", stopAutoScroll)
      carousel.removeEventListener("mouseleave", startAutoScroll)
    }
  }, [direction])

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full bg-background/80 shadow-md hover:bg-background"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Scroll izquierda</span>
        </Button>
      </div>

      <div
        ref={carouselRef}
        className="flex overflow-x-auto scrollbar-hide gap-4 py-4 px-6"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex-none w-[150px] h-[100px] bg-card rounded-lg shadow-md flex flex-col items-center justify-center p-4 border border-border hover:border-primary/50 transition-colors"
          >
            {isTech ? (
              <div className="text-3xl mb-2">{renderTechIcon(skill.icon)}</div>
            ) : (
              <div className="text-3xl mb-2">{skill.icon}</div>
            )}
            <p className="text-sm font-medium text-center">{skill.name}</p>
          </div>
        ))}
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full bg-background/80 shadow-md hover:bg-background"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Scroll derecha</span>
        </Button>
      </div>
    </div>
  )
}

function renderTechIcon(icon: string) {
  switch (icon) {
    case "js":
      return (
        <div className="w-8 h-8 bg-yellow-400 flex items-center justify-center text-black font-bold rounded">JS</div>
      )
    case "ts":
      return <div className="w-8 h-8 bg-blue-600 flex items-center justify-center text-white font-bold rounded">TS</div>
    case "react":
      return <div className="w-8 h-8 bg-blue-400 flex items-center justify-center text-white font-bold rounded">R</div>
    case "node":
      return <div className="w-8 h-8 bg-green-600 flex items-center justify-center text-white font-bold rounded">N</div>
    case "next":
      return <div className="w-8 h-8 bg-black flex items-center justify-center text-white font-bold rounded">N</div>
    case "html":
      return (
        <div className="w-8 h-8 bg-orange-600 flex items-center justify-center text-white font-bold rounded">H5</div>
      )
    case "css":
      return <div className="w-8 h-8 bg-blue-500 flex items-center justify-center text-white font-bold rounded">C3</div>
    case "git":
      return <div className="w-8 h-8 bg-red-500 flex items-center justify-center text-white font-bold rounded">G</div>
    default:
      return <div className="w-8 h-8 bg-gray-500 flex items-center justify-center text-white font-bold rounded">?</div>
  }
}
