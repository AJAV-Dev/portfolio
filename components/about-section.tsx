"use client"

import { useState } from "react"
import Image from "next/image"
import { Beaker, Code } from "lucide-react"
import { Timeline } from "@/components/timeline"
import { SkillCarousel } from "@/components/skill-carousel"
import { CertificationButtons } from "@/components/certification-buttons"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export function AboutSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
  })

  const openModal = (title: string, description: string) => {
    setModalContent({ title, description })
    setIsModalOpen(true)
  }

  return (
    <section id="about" className="py-16 bg-background">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex flex-col gap-8">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-foreground">Sobre Mí</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Un profesional multidisciplinario con experiencia en Química y Desarrollo de Software
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
            <div className="space-y-6">
              <p className="text-foreground text-justify">
                Soy un profesional apasionado con una formación única que abarca tanto la química como el desarrollo de
                software. Mi trayectoria comenzó en el ámbito científico, donde desarrollé una sólida base en
                pensamiento analítico, diseño experimental y resolución de problemas a través de mi trabajo en química.
              </p>
              <p className="text-foreground text-justify">
                A medida que evolucionó mi carrera, descubrí una pasión por el desarrollo de software y comencé a
                construir habilidades técnicas que complementaban mi formación científica. Este enfoque
                interdisciplinario me ha permitido tender un puente entre el conocimiento científico y la implementación
                técnica, creando soluciones innovadoras que se nutren de ambos dominios.
              </p>
              <p className="text-foreground text-justify">
                Hoy, aprovecho mi conjunto único de habilidades para abordar problemas complejos que requieren tanto
                comprensión científica como experiencia técnica. Ya sea desarrollando software para automatización de
                laboratorio, creando herramientas de visualización de datos para investigación científica o construyendo
                aplicaciones web con un enfoque en precisión y confiabilidad, aporto un enfoque metódico informado por
                mi diversa formación.
              </p>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-xl border-2 border-secondary/20 shadow-lg">
              <Image src="/images/profile-photo.jpg" alt="Foto de perfil" fill className="object-cover" priority />
            </div>
          </div>

          <div className="space-y-6 mt-8">
            <h3 className="text-3xl font-bold tracking-tight text-center text-foreground">Educación & Experiencia</h3>
            <Timeline onItemClick={openModal} />
          </div>

          <div className="space-y-8 mt-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 justify-center">
                <Beaker className="h-6 w-6 text-accent-1" />
                <h3 className="text-2xl font-bold tracking-tight text-foreground">Habilidades en Química</h3>
              </div>
              <SkillCarousel
                skills={[
                  { name: "Técnicas Analíticas", icon: "🧪" },
                  { name: "Espectroscopía", icon: "📊" },
                  { name: "Cromatografía", icon: "📈" },
                  { name: "Análisis de Datos", icon: "📉" },
                  { name: "Validación de Métodos", icon: "✅" },
                  { name: "Documentación Científica", icon: "📝" },
                  { name: "Control de Calidad", icon: "🔍" },
                  { name: "Protocolos de Seguridad", icon: "⚠️" },
                ]}
                direction="ltr"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 justify-center">
                <Code className="h-6 w-6 text-accent-2" />
                <h3 className="text-2xl font-bold tracking-tight text-foreground">Habilidades en Software</h3>
              </div>
              <SkillCarousel
                skills={[
                  { name: "JavaScript", icon: "js" },
                  { name: "React", icon: "react" },
                  { name: "TypeScript", icon: "ts" },
                  { name: "Node.js", icon: "node" },
                  { name: "Next.js", icon: "next" },
                  { name: "HTML5", icon: "html" },
                  { name: "CSS3", icon: "css" },
                  { name: "Git", icon: "git" },
                ]}
                isTech={true}
                direction="rtl"
              />
            </div>
          </div>

          <div className="space-y-6 mt-8">
            <h3 className="text-3xl font-bold tracking-tight text-center text-foreground">Certificaciones LinkedIn</h3>
            <CertificationButtons />
          </div>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-xl">{modalContent.title}</DialogTitle>
            <DialogDescription>{modalContent.description}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  )
}
