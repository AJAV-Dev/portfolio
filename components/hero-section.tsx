"use client"

import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SocialLinks } from "@/components/social-links"

export function HeroSection() {
  return (
    <section id="home" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                ¡Hola! Soy Alvaro José
              </h1>
              <br></br>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Bienvenido a mi portafolio!!.
              </p>
            </div>
            <br></br>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver Proyectos
              </Button>
              <Button
                variant="outline"
                className="border-primary/20 hover:bg-primary/10"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contactar
              </Button>

              <div className="flex justify-center md:justify-start">
                <SocialLinks />
              </div>



            </div>
            <div className="pt-8 hidden md:block">
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground animate-bounce"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              >
                <ArrowDown className="h-6 w-6" />
                <span className="sr-only">Scroll hacia abajo</span>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            {/* Espacio reservado para futura imagen de perfil */}
            <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px] border-2 border-dashed border-muted-foreground/30 rounded-full flex items-center justify-center">
              <p className="text-muted-foreground text-center px-8">Espacio reservado para imagen de perfil</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
