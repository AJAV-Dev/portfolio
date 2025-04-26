import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CertificationButtons() {
  const certifications = [
    {
      name: "B1 Intermediate English Certificate of Proficiency",
      url: "https://www.linkedin.com/in/alvaro-jose-avendano/overlay/1744243940472/single-media-viewer?type=DOCUMENT&profileId=ACoAADLlyBoBUzIz3xsQoYL0RUAjmolTem1vzhE&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bl2kYan%2FAT0SsmWauQtsWyw%3D%3D",
    },
    {
      name: "Análisis y Visualización de Datos",
      url: "https://www.linkedin.com/in/alvaro-jose-avendano/details/certifications/1742563342436/single-media-viewer/?type=DOCUMENT&profileId=ACoAADLlyBoBUzIz3xsQoYL0RUAjmolTem1vzhE",
    },
    {
      name: "SCRUM Foundation Professional (SFP)​",
      url: "https://certione.org/certificate-verification/36E39FD-36E3933-312AAEA/",
    },
    {
      name: "Microsoft Word, Excel, PowerPoint",
      url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-e97d2016-b8c9-435e-9975-a2040e9cf81d.pdf",
    },
    {
      name: "SAP Business Technology Platform",
      url: "https://academy.logaligroup.com/mod/simplecertificate/verify.php?code=678fa5cb-cec4-4f58-bfc4-59e56c3dcfbb",
    },
    
  ]

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {certifications.map((cert, index) => (
        <Button key={index} variant="outline" className="bg-card border border-border hover:border-primary/50" asChild>
          <Link href={cert.url} target="_blank" rel="noopener noreferrer">
            {cert.name} <ExternalLink className="ml-2 h-3 w-3" />
          </Link>
        </Button>
      ))}
    </div>
  )
}
