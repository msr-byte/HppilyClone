"use client"

import { motion } from "framer-motion"
import { Container } from "../ui/Container"
import { Button } from "../ui/Button"
import { Typography } from "../ui/Typography"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black py-20 lg:py-32">
      <Container className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-800 dark:text-blue-300 mb-6">
            Introducing SaaSReplica 2.0
          </span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl"
        >
          <Typography variant="h1" className="mb-6">
            The Ultimate Platform to Scale Your Business
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl"
        >
          <Typography variant="lead" className="mb-10 text-gray-600 dark:text-gray-300">
            A modern, CMS-based replica that mimics premium design aesthetics and smooth animations. Focus on building your business, we handle the rest.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" className="h-14 px-8 text-lg">Start for free</Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-lg bg-white/50 backdrop-blur-sm">View Demo</Button>
        </motion.div>
      </Container>
      
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/20 rounded-full blur-3xl -z-10 pointer-events-none" />
    </section>
  )
}
