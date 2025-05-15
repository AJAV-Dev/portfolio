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
    title: "🧪 Calculadora de Normalidad y Molaridad",
    description:
      "Esta aplicación permite calcular instrucciones de laboratorio para preparar soluciones ácidas o básicas con una concentración deseada en molaridad (M) o normalidad (N), partiendo de una solución madre concentrada.",
    image: "/images/normality-molarity-tool.png",
    category: "chemistry",
    tags: ["React", "Ácidos", "Bases", "Calculadora"],
    link: "https://calculadora-acidos-bases.vercel.app/",
  },
  {
    id: 2,
    title: "📚 Sistema de Gestión de Inventario de Libros (CRUD)",
    description:
      "Una aplicación web para gestionar un inventario de libros. Permite agregar, editar, eliminar y visualizar libros en una tabla dinámica, conectada a un backend desarrollado con JSON Server.",
    image: "/images/books-inventory-system.png",
    category: "software",
    tags: ["Vue", "Base de Datos", "Gestión"],
    link: "https://app-inventario-de-libros.vercel.app",
  },
  {
    id: 3,
    title: "Calculadora de pH para Soluciones Amortiguadoras",
    description:
      "Una herramienta para calcular el pH para soluciones amortiguadoras.",
    image: "/images/buffer-calculator.png",
    category: "chemistry",
    tags: ["Buffer", "pH", "Cálculadora", "React"],
    link: "https://calculadora-buffers.vercel.app",
  },
  {
    id: 4,
    title: "Sistema de automatización de reportes con Python",
    description: "Un sistema para automatizar la generación de reportes en formato PDF utilizando Python.",
    image: "/images/cooming-soon.png",
    category: "software",
    tags: ["Python", "Automatización", "Reportes"],
    link: "#",
  },
  {
    id: 5,
    title: "Calculadora de Transferencia de Métodos para HPLC",
    description:
      "Una herramienta para calcular la transferencia de métodos analíticos para cromatografía líquida de alta resolución (HPLC).",
    image: "/images/hplc-transfer-tool.png",
    category: "chemistry",
    tags: ["HPLC", "Transferencia de Métodos", "Cromatografía"],
    link: "https://metodos-hplc.vercel.app",
  },
  {
    id: 6,
    title: "Software de facturación e inventario",
    description:
      "Realizado con JS + PHP + HTML5 + AJAX + MySQL.",
    image: "/images/cooming-soon.png",
    category: "software",
    tags: ["Diseño de Bases de Datos", "Algoritmos de Búsqueda", "Gestión de Inventario"],
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
