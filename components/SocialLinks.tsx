import { SOCIAL_LINKS } from "@/lib/data"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"
import Link from "next/link"

const SocialLinks = () => {
  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "github":
        return <Github className="h-5 w-5" />
      case "linkedin":
        return <Linkedin className="h-5 w-5" />
      case "twitter":
        return <Twitter className="h-5 w-5" />
      case "instagram":
        return <Instagram className="h-5 w-5" />
      default:
        return null
    }
  }

  return (
    <div className="fixed left-6 bottom-0 z-10 hidden md:block">
      <div className="flex flex-col items-center space-y-6">
        {SOCIAL_LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-primary transition-colors duration-300"
            aria-label={link.name}
          >
            {getIcon(link.name)}
          </Link>
        ))}
        <div className="h-24 w-px bg-foreground/20"></div>
      </div>
    </div>
  )
}

export default SocialLinks
