import Link from "next/link"
import { Container } from "../ui/Container"
import { Button } from "../ui/Button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/50 backdrop-blur-md dark:bg-black/50 dark:border-gray-800">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl tracking-tight">
            SaaSReplica.
          </Link>
          <nav className="hidden md:flex gap-6 items-center text-sm font-medium text-gray-600 dark:text-gray-300">
            <Link href="/" className="hover:text-black dark:hover:text-white transition-colors">Home</Link>
            <Link href="/products" className="hover:text-black dark:hover:text-white transition-colors">Products</Link>
            <Link href="/about" className="hover:text-black dark:hover:text-white transition-colors">About</Link>
            <Link href="/faq" className="hover:text-black dark:hover:text-white transition-colors">FAQ</Link>
            <Link href="/contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</Link>
          </nav>
          <div className="flex gap-4">
            <Button variant="ghost" className="hidden md:inline-flex">Log In</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </Container>
    </header>
  )
}
