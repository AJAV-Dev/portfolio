import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProjectShowcase } from "@/components/project-showcase"

export default function ProjectsPage() {
  return (
    <main className="container py-12 max-w-5xl mx-auto">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="text-xl text-muted-foreground">Explore my work across chemistry and software development</p>
      </div>

      <Tabs defaultValue="all" className="mt-8">
        <TabsList className="grid w-full grid-cols-3 max-w-md">
          <TabsTrigger value="all">All Projects</TabsTrigger>
          <TabsTrigger value="chemistry">Chemistry</TabsTrigger>
          <TabsTrigger value="software">Software</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <ProjectShowcase category="all" />
        </TabsContent>
        <TabsContent value="chemistry" className="mt-6">
          <ProjectShowcase category="chemistry" />
        </TabsContent>
        <TabsContent value="software" className="mt-6">
          <ProjectShowcase category="software" />
        </TabsContent>
      </Tabs>
    </main>
  )
}
