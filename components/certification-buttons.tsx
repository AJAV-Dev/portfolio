import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CertificationButtons() {
  const certifications = [
    {
      name: "JavaScript Avanzado",
      url: "https://www.linkedin.com/learning/certificates/example1",
    },
    {
      name: "React Fundamentals",
      url: "https://www.linkedin.com/learning/certificates/example2",
    },
    {
      name: "Análisis de Datos Químicos",
      url: "https://www.linkedin.com/learning/certificates/example3",
    },
    {
      name: "Desarrollo Web Full Stack",
      url: "https://www.linkedin.com/learning/certificates/example4",
    },
    {
      name: "Gestión de Proyectos",
      url: "https://www.linkedin.com/learning/certificates/example5",
    },
    {
      name: "Técnicas Analíticas Avanzadas",
      url: "https://www.linkedin.com/learning/certificates/example6",
    },
  ]

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {certifications.map((cert, index) => (
        <Button key={index} variant="outline" className="bg-card border border-border hover:border-primary/50" asChild>
          <Link href={cert.url} target="_blank" rel="noopener noreferrer">
            {cert.name} <ExternalLink className="ml-2 h-3 w-3" />
          </Link>
        </Button>
      ))}
    </div>
  )
}
