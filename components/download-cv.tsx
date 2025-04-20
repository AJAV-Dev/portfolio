import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DownloadCV() {
  return (
    <Button className="gap-2" asChild>
      <a href="/files/curriculum-vitae.pdf" download>
        <Download className="h-4 w-4" />
        Descargar CV
      </a>
    </Button>
  )
}
