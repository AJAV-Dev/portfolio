import Link from "next/link"

export function MainNav() {
  return (
    <div className="mr-4 flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="font-bold inline-block">Chemistry & Code</span>
      </Link>
      <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
        <Link href="/" className="transition-colors hover:text-foreground/80">
          Home
        </Link>
        <Link href="/about" className="transition-colors hover:text-foreground/80">
          About
        </Link>
        <Link href="/projects" className="transition-colors hover:text-foreground/80">
          Projects
        </Link>
        <Link href="/contact" className="transition-colors hover:text-foreground/80">
          Contact
        </Link>
      </nav>
    </div>
  )
}
