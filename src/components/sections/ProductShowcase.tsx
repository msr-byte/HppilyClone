"use client"

import { motion } from "framer-motion"
import { Container } from "../ui/Container"
import { Typography } from "../ui/Typography"
import { Button } from "../ui/Button"

export function ProductShowcase() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 lg:pr-10"
          >
            <Typography variant="h2" className="mb-6">
              Manage content like never before
            </Typography>
            <Typography variant="p" className="text-gray-500 dark:text-gray-400 mb-8 text-lg">
              Our intuitive dashboard lets you update your website, manage products, and view analytics in real-time without writing a single line of code.
            </Typography>
            <ul className="space-y-4 mb-8">
              {[
                "Drag and drop page builder",
                "Real-time visual editing",
                "Built-in SEO management",
                "Multi-language support"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                  <div className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Button size="lg">Explore Dashboard</Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-white">
              {/* Fake dashboard UI instead of an actual image for safety */}
              <div className="h-10 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="p-8 h-[400px] flex items-center justify-center bg-gray-50 dark:bg-gray-950">
                <Typography variant="muted">Dashboard Image Placeholder</Typography>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
