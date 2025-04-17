import { Briefcase, GraduationCap } from "lucide-react"

export function Timeline() {
  return (
    <div className="relative border-l border-muted-foreground/20 pl-6 ml-4">
      {/* Education */}
      <div className="mb-10 relative">
        <div className="absolute -left-10 flex h-6 w-6 items-center justify-center rounded-full bg-muted">
          <GraduationCap className="h-4 w-4" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold">Ph.D. in Chemistry</h3>
          <p className="text-muted-foreground">University Name, 2015-2019</p>
          <p className="mt-2">
            Specialized in analytical chemistry with a focus on spectroscopic methods for molecular structure
            determination. Dissertation on novel approaches to analyzing complex molecular mixtures.
          </p>
        </div>
      </div>

      <div className="mb-10 relative">
        <div className="absolute -left-10 flex h-6 w-6 items-center justify-center rounded-full bg-muted">
          <GraduationCap className="h-4 w-4" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold">M.S. in Chemistry</h3>
          <p className="text-muted-foreground">University Name, 2013-2015</p>
          <p className="mt-2">
            Focused on physical chemistry and computational methods. Thesis on computational modeling of reaction
            mechanisms.
          </p>
        </div>
      </div>

      <div className="mb-10 relative">
        <div className="absolute -left-10 flex h-6 w-6 items-center justify-center rounded-full bg-muted">
          <GraduationCap className="h-4 w-4" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold">B.S. in Chemistry</h3>
          <p className="text-muted-foreground">University Name, 2009-2013</p>
          <p className="mt-2">
            Graduated with honors. Minor in Computer Science, which sparked my interest in combining chemistry with
            programming.
          </p>
        </div>
      </div>

      {/* Experience */}
      <div className="mb-10 relative">
        <div className="absolute -left-10 flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
          <Briefcase className="h-4 w-4" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold">Senior Software Developer</h3>
          <p className="text-muted-foreground">Company Name, 2022-Present</p>
          <p className="mt-2">
            Developing specialized software solutions for scientific applications, focusing on data analysis tools for
            research laboratories. Leading a team of developers working on laboratory information management systems.
          </p>
        </div>
      </div>

      <div className="mb-10 relative">
        <div className="absolute -left-10 flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
          <Briefcase className="h-4 w-4" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold">Research Scientist & Software Developer</h3>
          <p className="text-muted-foreground">Research Institute, 2019-2022</p>
          <p className="mt-2">
            Conducted chemical research while developing software tools to automate data analysis and visualization.
            Created custom applications for laboratory workflow optimization and data management.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -left-10 flex h-6 w-6 items-center justify-center rounded-full bg-primary/20">
          <Briefcase className="h-4 w-4" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold">Research Assistant</h3>
          <p className="text-muted-foreground">University Laboratory, 2015-2019</p>
          <p className="mt-2">
            Assisted with research projects while pursuing Ph.D. Developed scripts and small applications to automate
            data processing for spectroscopic analysis, which sparked my interest in more extensive software
            development.
          </p>
        </div>
      </div>
    </div>
  )
}
