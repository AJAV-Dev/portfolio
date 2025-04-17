import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button asChild variant="outline" size="icon">
        <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <Github className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </Link>
      </Button>
      <Button asChild variant="outline" size="icon">
        <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </Link>
      </Button>
      <Button asChild variant="outline" size="icon">
        <Link href="mailto:your.email@example.com">
          <Mail className="h-5 w-5" />
          <span className="sr-only">Email</span>
        </Link>
      </Button>
    </div>
  )
}
