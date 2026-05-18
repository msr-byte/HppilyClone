import { Container } from "@/components/ui/Container"
import { Typography } from "@/components/ui/Typography"

export default function AboutPage() {
  return (
    <div className="py-24">
      <Container className="max-w-3xl">
        <Typography variant="h1" className="mb-6">About Us</Typography>
        <Typography variant="lead" className="mb-8">
          We are a team of passionate developers and designers dedicated to building the most premium SaaS experiences on the web.
        </Typography>
        <Typography variant="p">
          Founded in 2024, SaaSReplica aims to bridge the gap between stunning design and scalable technology. 
          By combining Next.js, Framer Motion, and Sanity CMS, we deliver a lightning-fast experience that 
          your users will love, with an intuitive dashboard that your content team will appreciate.
        </Typography>
      </Container>
    </div>
  )
}
