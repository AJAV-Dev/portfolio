import { ProjectShowcase } from "@/components/project-showcase"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-background">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground">Proyectos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explora mi trabajo en química y desarrollo de software
          </p>
        </div>

        <ProjectShowcase category="all" />
      </div>
    </section>
  )
}
