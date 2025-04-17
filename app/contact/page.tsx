import { ContactForm } from "@/components/contact-form"
import { SocialLinks } from "@/components/social-links"
import { DownloadCV } from "@/components/download-cv"

export default function ContactPage() {
  return (
    <main className="container py-12 max-w-5xl mx-auto">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Contact Me</h1>
        <p className="text-xl text-muted-foreground">
          Get in touch to discuss potential collaborations or opportunities
        </p>
      </div>

      <div className="grid gap-8 mt-8 md:grid-cols-2">
        <div className="space-y-6">
          <p>
            I'm always interested in discussing new projects, opportunities, or collaborations. Whether you have a
            question about my work in chemistry, software development, or how I might help with your specific needs,
            feel free to reach out.
          </p>
          <p>
            Fill out the contact form, and I'll get back to you as soon as possible. Alternatively, you can connect with
            me directly through my social media profiles.
          </p>

          <div className="space-y-4 pt-4">
            <h3 className="text-xl font-semibold">Connect With Me</h3>
            <SocialLinks />
          </div>

          <div className="space-y-4 pt-4">
            <h3 className="text-xl font-semibold">Download My CV</h3>
            <p>Get a comprehensive overview of my skills, experience, and qualifications:</p>
            <DownloadCV />
          </div>
        </div>

        <div className="bg-muted p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Send Me a Message</h2>
          <ContactForm />
        </div>
      </div>
    </main>
  )
}
