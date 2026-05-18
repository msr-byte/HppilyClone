import { Container } from "../ui/Container"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-gray-50 dark:bg-black dark:border-gray-800 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="font-bold text-xl tracking-tight">SaaSReplica.</span>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              A modern CMS-based replica mimicking premium design aesthetics and smooth animations.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li><Link href="/products">Features</Link></li>
              <li><Link href="/products">Pricing</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li><Link href="/">Privacy Policy</Link></li>
              <li><Link href="/">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t dark:border-gray-800 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} SaaSReplica. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}
