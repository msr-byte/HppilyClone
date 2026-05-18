import { Container } from "@/components/ui/Container"
import { Typography } from "@/components/ui/Typography"

export default function ProductsPage() {
  return (
    <div className="py-24">
      <Container>
        <Typography variant="h1" className="mb-6">Products</Typography>
        <Typography variant="lead" className="mb-12">Browse our premium selection of SaaS components and templates.</Typography>
        <div className="h-64 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center">
          <Typography variant="muted">Product Listing Grid (CMS Integrated)</Typography>
        </div>
      </Container>
    </div>
  )
}
