import { notFound } from "next/navigation"
import { CERTIFICATIONS } from "@/app/_components/Certifications"
import CertificationDetails from "./_components/CertificationDetails"
import type { Metadata } from "next"

export const generateStaticParams = async () => {
  return CERTIFICATIONS.map((cert) => ({ id: cert.id }))
}

export const generateMetadata = async ({ params }: { params: { id: string } }) => {
  const certification = CERTIFICATIONS.find((cert) => cert.id === params.id)

  return {
    title: `${certification?.name} - ${certification?.issuer}`,
    description: certification?.description,
  } as Metadata
}

const Page = async ({ params }: { params: { id: string } }) => {
  const certification = CERTIFICATIONS.find((cert) => cert.id === params.id)

  if (!certification) {
    return notFound()
  }

  return <CertificationDetails certification={certification} />
}

export default Page
