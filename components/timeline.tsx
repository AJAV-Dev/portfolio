"use client"

import { Briefcase, GraduationCap } from "lucide-react"

interface TimelineProps {
  onItemClick: (title: string, description: string) => void
}

export function Timeline({ onItemClick }: TimelineProps) {
  const educationItems = [

    {
      title: "Profesional en Química",
      institution: "Universidad Santiago de Cali, 2019-2025",
      description:
        "Enfoque en química física y métodos computacionales. Tesis sobre modelado computacional de mecanismos de reacción.",
    },
    {
      title: "Técnico en Desarrollo de Software",
      institution: "Politécnico internacional de Occidente, 2024-2025",
      description:
        "Graduado con honores. Especialización secundaria en Ciencias de la Computación, lo que despertó mi interés en combinar la química con la programación.",
    },
    {
      title: "Tecnologo Químico",
      institution: "Universidad del Valle, 2015-2018",
      description:
        "Enfoque en química física y métodos computacionales. Tesis sobre modelado computacional de mecanismos de reacción.",
    },
  ]

  const experienceItems = [
    {
      title: "Desarrollador de Software",
      company: "independiente, 2024-Presente",
      description:
        "Desarrollo de soluciones de software especializadas para aplicaciones científicas, centrándome en herramientas de análisis de datos para laboratorios de investigación. Liderando un equipo de desarrolladores que trabajan en sistemas de gestión de información de laboratorio.",
    },
    {
      title: "Practicante profesional en química",
      company: "Bureau Veritas Colombia, 2019-2022",
      description:
        "Realicé investigación química mientras desarrollaba herramientas de software para automatizar el análisis y visualización de datos. Creé aplicaciones personalizadas para la optimización del flujo de trabajo de laboratorio y la gestión de datos.",
    },
    {
      title: "Asistente de Investigación",
      company: "Laboratorio Universitario, 2015-2019",
      description:
        "Asistí en proyectos de investigación mientras cursaba el pregrado. Desarrollé scripts y pequeñas aplicaciones para automatizar el procesamiento de datos para análisis espectroscópicos, lo que despertó mi interés en un desarrollo de software más extenso.",
    },
  ]

  return (
    <div className="relative border-l border-border pl-6 ml-4">
      {/* Education */}
      {educationItems.map((item, index) => (
        <div key={`edu-${index}`} className="mb-10 relative">
          <div className="absolute -left-10 flex h-6 w-6 items-center justify-center rounded-full bg-secondary/20">
            <GraduationCap className="h-4 w-4 text-secondary" />
          </div>
          <div
            className="flex flex-col cursor-pointer hover:bg-muted p-3 rounded-lg transition-colors"
            onClick={() => onItemClick(item.title + ", " + item.institution, item.description)}
          >
            <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
            <p className="text-muted-foreground">{item.institution}</p>
            <p className="mt-2 text-foreground text-justify line-clamp-2">{item.description}</p>
            <p className="text-xs text-primary mt-1">Click para más información</p>
          </div>
        </div>
      ))}

      {/* Experience */}
      {experienceItems.map((item, index) => (
        <div key={`exp-${index}`} className="mb-10 relative">
          <div className="absolute -left-10 flex h-6 w-6 items-center justify-center rounded-full bg-accent-1/20">
            <Briefcase className="h-4 w-4 text-accent-1" />
          </div>
          <div
            className="flex flex-col cursor-pointer hover:bg-muted p-3 rounded-lg transition-colors"
            onClick={() => onItemClick(item.title + ", " + item.company, item.description)}
          >
            <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
            <p className="text-muted-foreground">{item.company}</p>
            <p className="mt-2 text-foreground text-justify line-clamp-2">{item.description}</p>
            <p className="text-xs text-primary mt-1">Click para más información</p>
          </div>
        </div>
      ))}
    </div>
  )
}
