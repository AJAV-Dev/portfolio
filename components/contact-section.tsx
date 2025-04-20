import { ContactForm } from "@/components/contact-form"
import { SocialLinks } from "@/components/social-links"
import { DownloadCV } from "@/components/download-cv"
import { Phone, Mail, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-muted">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground">¡Trabajemos juntos!</h2>
        </div>

        <div className="flex flex-col items-center justify-center mt-8 space-y-6 text-center">
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-primary" />
            <span className="text-foreground">+57 324 5641169</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-primary" />
            <span className="text-foreground">alvaro28.av@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-foreground">Colombia. Yumbo – Valle del Cauca</span>
          </div>
        </div>

        <div className="grid gap-8 mt-12 md:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold text-foreground text-center md:text-left">Conéctate Conmigo</h3>
              <div className="flex justify-center md:justify-start">
                <SocialLinks />
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold text-foreground text-center md:text-left">Descarga Mi CV</h3>
              <div className="flex justify-center md:justify-start">
                <DownloadCV />
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Envíame un Mensaje</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
