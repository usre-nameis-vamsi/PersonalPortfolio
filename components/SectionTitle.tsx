import { cn } from "@/lib/utils"

interface Props {
  title: string
  subtitle?: string
  className?: string
  align?: "left" | "center" | "right"
}

const SectionTitle = ({ title, subtitle, className, align = "left" }: Props) => {
  return (
    <div
      className={cn(
        "relative mb-20",
        {
          "text-center": align === "center",
          "text-left": align === "left",
          "text-right": align === "right",
        },
        className,
      )}
    >
      {subtitle && (
        <span className="inline-block text-sm font-medium text-primary mb-2 uppercase tracking-wider">{subtitle}</span>
      )}
      <h2 className="text-5xl md:text-6xl font-anton relative inline-block">{title}</h2>
    </div>
  )
}

export default SectionTitle
