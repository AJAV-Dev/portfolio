import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DownloadCV() {
  return (
    <Button className="gap-2">
      <Download className="h-4 w-4" />
      Download CV
    </Button>
  )
}
