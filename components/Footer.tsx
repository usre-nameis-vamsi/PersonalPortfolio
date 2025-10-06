"use client"
import { GitFork, Star } from "lucide-react"
import { useEffect, useState } from "react"

interface RepoStats {
  stargazers_count: number
  forks_count: number
}

const Footer = () => {
  const [stats, setStats] = useState<RepoStats>({ stargazers_count: 0, forks_count: 0 })

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("https://api.github.com/repos/tajmirul/portfolio-2.0")
        if (response.ok) {
          const data = await response.json()
          setStats({
            stargazers_count: data.stargazers_count,
            forks_count: data.forks_count,
          })
        }
      } catch (error) {
        console.error("Error fetching repo stats:", error)
      }
    }

    fetchStats()
  }, [])

  return (
    <footer className="pb-5">
      <div className="pl-[8%] pr-[4%] w-full text-left">
        <div className="">
          <a
            href="https://github.com/usre-nameis-vamsi"
            target="_blank"
            rel="noreferrer"
            className="leading-none text-muted-foreground hover:underline hover:text-white"
          >
            Design & built by Vamsi Chanumolu
            <div className="flex items-center justify-center gap-5 pt-1">
              <span className="flex items-center gap-2">
                <Star size={18} /> {stats.stargazers_count}
              </span>
              <span className="flex items-center gap-2">
                <GitFork size={18} /> {stats.forks_count}
              </span>
            </div>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
