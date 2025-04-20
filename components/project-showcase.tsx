import Image from "next/image"
import Link from "next/link"
import { Beaker, Code, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample project data - in a real application, this would come from a database or CMS
const projects = [
  {
    id: 1,
    title: "Herramienta de Análisis de Estructuras Moleculares",
    description:
      "Una herramienta de software para analizar y visualizar estructuras moleculares a partir de datos espectroscópicos.",
    image: "/images/molecular-structure-tool.jpg",
    category: "chemistry",
    tags: ["Espectroscopía", "Análisis de Datos", "Visualización"],
    link: "#",
  },
  {
    id: 2,
    title: "Sistema de Gestión de Inventario de Laboratorio",
    description:
      "Una aplicación web para el seguimiento de productos químicos, equipos y suministros en laboratorios de investigación.",
    image: "/images/lab-inventory-system.jpg",
    category: "software",
    tags: ["React", "Base de Datos", "Gestión de Laboratorio"],
    link: "#",
  },
  {
    id: 3,
    title: "Simulador de Cinética de Reacciones",
    description:
      "Una herramienta computacional para modelar y predecir la cinética de reacciones químicas en diversas condiciones.",
    image: "/images/reaction-kinetics.jpg",
    category: "chemistry",
    tags: ["Cinética", "Simulación", "Modelado de Datos"],
    link: "#",
  },
  {
    id: 4,
    title: "Dashboard de Visualización de Datos Científicos",
    description: "Un dashboard interactivo para visualizar y analizar conjuntos de datos científicos complejos.",
    image: "/images/data-visualization.jpg",
    category: "software",
    tags: ["Visualización de Datos", "JavaScript", "Analítica"],
    link: "#",
  },
  {
    id: 5,
    title: "Sistema de Titulación Automatizado",
    description:
      "Desarrollo de hardware y software para un sistema de titulación automatizado con análisis de datos en tiempo real.",
    image: "/images/titration-system.jpg",
    category: "chemistry",
    tags: ["Automatización", "Química Analítica", "Integración de Hardware"],
    link: "#",
  },
  {
    id: 6,
    title: "Base de Datos de Publicaciones Científicas",
    description:
      "Una base de datos consultable de publicaciones científicas con seguimiento de citas y funciones de recomendación.",
    image: "/images/publication-database.jpg",
    category: "software",
    tags: ["Diseño de Bases de Datos", "Algoritmos de Búsqueda", "Investigación Académica"],
    link: "#",
  },
]

interface ProjectShowcaseProps {
  category?: "all" | "chemistry" | "software"
}

export function ProjectShowcase({ category = "all" }: ProjectShowcaseProps) {
  return (
    <div className="mt-8">
      <Tabs defaultValue={category} className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto">
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="chemistry">Química</TabsTrigger>
          <TabsTrigger value="software">Software</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="chemistry" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((project) => project.category === "chemistry")
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="software" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((project) => project.category === "software")
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface ProjectCardProps {
  project: (typeof projects)[0]
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-lg">
      <div className="relative h-48 w-full">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        <div className="absolute top-2 right-2">
          <Badge variant={project.category === "chemistry" ? "secondary" : "default"}>
            {project.category === "chemistry" ? (
              <>
                <Beaker className="h-3 w-3 mr-1" /> Química
              </>
            ) : (
              <>
                <Code className="h-3 w-3 mr-1" /> Software
              </>
            )}
          </Badge>
        </div>
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" size="sm">
          <Link href={project.link}>
            Ver Proyecto <ExternalLink className="ml-2 h-3 w-3" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
