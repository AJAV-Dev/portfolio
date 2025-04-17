import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { ProjectShowcase } from "@/components/project-showcase"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />

      <section className="container py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
            Bridging Chemistry & Software Development
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Explore my unique blend of scientific knowledge and technical expertise. I bring analytical thinking from
            chemistry and creative problem-solving from software development to create innovative solutions.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild>
              <Link href="/projects">
                View My Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-6">
            <div className="flex h-[180px] flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-bold">Chemistry Expertise</h3>
                <p className="text-sm text-muted-foreground">
                  Specialized knowledge in analytical techniques, laboratory procedures, and chemical research
                  methodologies.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-6">
            <div className="flex h-[180px] flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-bold">Software Development</h3>
                <p className="text-sm text-muted-foreground">
                  Proficient in modern web technologies, application development, and creating efficient, scalable
                  solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-6">
            <div className="flex h-[180px] flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-bold">Interdisciplinary Approach</h3>
                <p className="text-sm text-muted-foreground">
                  Combining scientific methodology with technical implementation to solve complex problems across
                  domains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Featured Projects</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            A selection of my recent work across chemistry and software development
          </p>
        </div>
        <ProjectShowcase featured={true} />
        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
