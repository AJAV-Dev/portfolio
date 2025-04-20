import Image from "next/image"
import { Beaker, Code } from "lucide-react"

import { Timeline } from "@/components/timeline"

export default function AboutPage() {
  return (
    <main className="container py-12 max-w-5xl mx-auto">
      <div className="flex flex-col gap-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
          <p className="text-xl text-muted-foreground">
            A multidisciplinary professional with expertise in both Chemistry and Software Development
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <p>
              I am a passionate professional with a unique background that spans both chemistry and software
              development. My journey began in the scientific realm, where I developed a strong foundation in analytical
              thinking, experimental design, and problem-solving through my work in chemistry.
            </p>
            <p>
              As my career evolved, I discovered a passion for software development and began building technical skills
              that complemented my scientific background. This interdisciplinary approach has allowed me to bridge the
              gap between scientific knowledge and technical implementation, creating innovative solutions that draw
              from both domains.
            </p>
            <p>
              Today, I leverage my unique skill set to tackle complex problems that require both scientific
              understanding and technical expertise. Whether I'm developing software for laboratory automation, creating
              data visualization tools for scientific research, or building web applications with a focus on precision
              and reliability, I bring a methodical approach informed by my diverse background.
            </p>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src="/images/profile-photo.jpg" // Ruta actualizada a tu foto de perfil
              alt="Profile photo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="space-y-6 mt-8">
          <h2 className="text-3xl font-bold tracking-tight">Education & Experience</h2>
          <Timeline />
        </div>

        <div className="grid gap-8 md:grid-cols-2 mt-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Beaker className="h-6 w-6" />
              <h2 className="text-2xl font-bold tracking-tight">Chemistry Skills</h2>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              <li>Analytical Chemistry Techniques</li>
              <li>Laboratory Research & Experimentation</li>
              <li>Spectroscopy & Chromatography</li>
              <li>Chemical Data Analysis</li>
              <li>Method Development & Validation</li>
              <li>Scientific Documentation</li>
              <li>Quality Control & Assurance</li>
              <li>Chemical Safety Protocols</li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Code className="h-6 w-6" />
              <h2 className="text-2xl font-bold tracking-tight">Software Skills</h2>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              <li>Full-Stack Web Development</li>
              <li>JavaScript/TypeScript & React</li>
              <li>Next.js & Modern Frameworks</li>
              <li>Database Design & Management</li>
              <li>API Development & Integration</li>
              <li>Data Visualization</li>
              <li>Version Control (Git)</li>
              <li>Automated Testing & CI/CD</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6 mt-8">
          <h2 className="text-3xl font-bold tracking-tight">My Approach</h2>
          <p>
            My approach to work combines the methodical precision of scientific research with the creative
            problem-solving of software development. I believe in:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Data-Driven Decision Making:</strong> Using empirical evidence to guide development choices
            </li>
            <li>
              <strong>Iterative Improvement:</strong> Continuously refining solutions based on feedback and results
            </li>
            <li>
              <strong>Cross-Disciplinary Collaboration:</strong> Bridging communication gaps between technical and
              scientific teams
            </li>
            <li>
              <strong>Documentation & Reproducibility:</strong> Ensuring work is well-documented and processes are
              repeatable
            </li>
            <li>
              <strong>User-Centered Design:</strong> Creating solutions that address real user needs and pain points
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}
