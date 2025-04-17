import Image from "next/image"
import Link from "next/link"
import { Beaker, Code, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Sample project data - in a real application, this would come from a database or CMS
const projects = [
  {
    id: 1,
    title: "Molecular Structure Analysis Tool",
    description: "A software tool for analyzing and visualizing molecular structures from spectroscopic data.",
    image: "/placeholder.svg?height=400&width=600",
    category: "chemistry",
    tags: ["Spectroscopy", "Data Analysis", "Visualization"],
    link: "#",
  },
  {
    id: 2,
    title: "Laboratory Inventory Management System",
    description: "A web application for tracking chemicals, equipment, and supplies in research laboratories.",
    image: "/placeholder.svg?height=400&width=600",
    category: "software",
    tags: ["React", "Database", "Laboratory Management"],
    link: "#",
  },
  {
    id: 3,
    title: "Reaction Kinetics Simulator",
    description:
      "A computational tool for modeling and predicting chemical reaction kinetics under various conditions.",
    image: "/placeholder.svg?height=400&width=600",
    category: "chemistry",
    tags: ["Kinetics", "Simulation", "Data Modeling"],
    link: "#",
  },
  {
    id: 4,
    title: "Scientific Data Visualization Dashboard",
    description: "An interactive dashboard for visualizing and analyzing complex scientific datasets.",
    image: "/placeholder.svg?height=400&width=600",
    category: "software",
    tags: ["Data Visualization", "JavaScript", "Analytics"],
    link: "#",
  },
  {
    id: 5,
    title: "Automated Titration System",
    description: "Development of hardware and software for an automated titration system with real-time data analysis.",
    image: "/placeholder.svg?height=400&width=600",
    category: "chemistry",
    tags: ["Automation", "Analytical Chemistry", "Hardware Integration"],
    link: "#",
  },
  {
    id: 6,
    title: "Research Publication Database",
    description: "A searchable database of scientific publications with citation tracking and recommendation features.",
    image: "/placeholder.svg?height=400&width=600",
    category: "software",
    tags: ["Database Design", "Search Algorithms", "Academic Research"],
    link: "#",
  },
]

interface ProjectShowcaseProps {
  category?: "all" | "chemistry" | "software"
  featured?: boolean
}

export function ProjectShowcase({ category = "all", featured = false }: ProjectShowcaseProps) {
  let filteredProjects = projects

  if (category !== "all") {
    filteredProjects = projects.filter((project) => project.category === category)
  }

  if (featured) {
    filteredProjects = filteredProjects.slice(0, 3)
  }

  return (
    <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
      {filteredProjects.map((project) => (
        <Card key={project.id} className="overflow-hidden">
          <div className="relative h-48 w-full">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            <div className="absolute top-2 right-2">
              <Badge variant="secondary">
                {project.category === "chemistry" ? (
                  <>
                    <Beaker className="h-3 w-3 mr-1" /> Chemistry
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
                View Project <ExternalLink className="ml-2 h-3 w-3" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
