import { notFound } from "next/navigation"
import ProjectDetails from "./_components/ProjectDetails"
import { PROJECTS } from "@/lib/data"
import type { Metadata } from "next"

export const generateStaticParams = async () => {
  return PROJECTS.map((project) => ({ slug: project.slug }))
}

export const generateMetadata = async ({ params }: { params: { slug: string } }) => {
  const project = PROJECTS.find((project) => project.slug === params.slug)

  return {
    title: `${project?.title} - ${project?.techStack.slice(0, 3).join(", ")}`,
    description: project?.description,
  } as Metadata
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const project = PROJECTS.find((project) => project.slug === params.slug)

  if (!project) {
    return notFound()
  }

  return <ProjectDetails project={project} />
}

export default Page
