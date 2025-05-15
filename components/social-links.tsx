import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button asChild variant="outline" size="icon">
        <Link href="https://github.com/AJAV-Dev" target="_blank" rel="noopener noreferrer">
          <Github className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </Link>
      </Button>
      <Button asChild variant="outline" size="icon">
        <Link href="https://www.linkedin.com/in/alvarojav" target="_blank" rel="noopener noreferrer">
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </Link>
      </Button>
      <Button asChild variant="outline" size="icon">
        <Link href="mailto:alvaro28.av@gmail.com">
          <Mail className="h-5 w-5" />
          <span className="sr-only">Email</span>
        </Link>
      </Button>
    </div>
  )
}
