"use client"

import { SocialLinks } from "@/components/social-links"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export function SiteFooter() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const logoSrc = mounted && theme === "dark" ? "/images/logoDark.svg" : "/images/logoLight.svg"

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="border-t py-8 bg-background">
      <div className="container flex flex-col items-center justify-center gap-4">
        <button onClick={scrollToTop} className="focus:outline-none">
          <Image src={logoSrc || "/placeholder.svg"} alt="AJAV Logo" width={40} height={40} />
        </button>

        <p className="text-center text-sm leading-loose text-muted-foreground">
          &copy; {new Date().getFullYear()} AJAV-Dev. Todos los derechos reservados.
        </p>

        <SocialLinks />
      </div>
    </footer>
  )
}
