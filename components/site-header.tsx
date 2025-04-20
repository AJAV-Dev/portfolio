"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { useTheme } from "next-themes"

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState("home")
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (!element) continue

        const offsetTop = element.offsetTop
        const offsetHeight = element.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  const logoSrc = mounted && theme === "dark" ? "/images/logoDark.svg" : "/images/logoLight.svg"

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <button onClick={() => scrollToSection("home")} className="focus:outline-none">
            <Image src={logoSrc || "/placeholder.svg"} alt="AJAV Logo" width={40} height={40} />
          </button>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm">
          <button
            onClick={() => scrollToSection("home")}
            className={`transition-colors hover:text-primary ${activeSection === "home" ? "text-primary" : ""}`}
          >
            Inicio
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className={`transition-colors hover:text-primary ${activeSection === "about" ? "text-primary" : ""}`}
          >
            Sobre Mí
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className={`transition-colors hover:text-primary ${activeSection === "projects" ? "text-primary" : ""}`}
          >
            Proyectos
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`transition-colors hover:text-primary ${activeSection === "contact" ? "text-primary" : ""}`}
          >
            Contacto
          </button>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <LanguageToggle />
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <button
                  onClick={() => {
                    scrollToSection("home")
                    document
                      .querySelector("[data-radix-collection-item]")
                      ?.dispatchEvent(new MouseEvent("click", { bubbles: true }))
                  }}
                  className="text-lg font-medium text-left"
                >
                  Inicio
                </button>
                <button
                  onClick={() => {
                    scrollToSection("about")
                    document
                      .querySelector("[data-radix-collection-item]")
                      ?.dispatchEvent(new MouseEvent("click", { bubbles: true }))
                  }}
                  className="text-lg font-medium text-left"
                >
                  Sobre Mí
                </button>
                <button
                  onClick={() => {
                    scrollToSection("projects")
                    document
                      .querySelector("[data-radix-collection-item]")
                      ?.dispatchEvent(new MouseEvent("click", { bubbles: true }))
                  }}
                  className="text-lg font-medium text-left"
                >
                  Proyectos
                </button>
                <button
                  onClick={() => {
                    scrollToSection("contact")
                    document
                      .querySelector("[data-radix-collection-item]")
                      ?.dispatchEvent(new MouseEvent("click", { bubbles: true }))
                  }}
                  className="text-lg font-medium text-left"
                >
                  Contacto
                </button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
