"use client"

import { motion } from "framer-motion"
import { Container } from "../ui/Container"
import { Typography } from "../ui/Typography"
import { Card } from "../ui/Card"
import { Zap, Shield, BarChart, Smartphone } from "lucide-react"

const features = [
  {
    title: "Lightning Fast",
    description: "Built on Next.js 14 and Edge Infrastructure for unparalleled performance.",
    icon: Zap,
  },
  {
    title: "Bank-grade Security",
    description: "Your data is encrypted at rest and in transit. Always secure.",
    icon: Shield,
  },
  {
    title: "Advanced Analytics",
    description: "Understand your users with powerful built-in analytics and reporting.",
    icon: BarChart,
  },
  {
    title: "Fully Responsive",
    description: "Looks perfect on desktops, tablets, and mobile devices.",
    icon: Smartphone,
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-white dark:bg-black">
      <Container>
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <Typography variant="h2" className="mb-4">Everything you need</Typography>
          <Typography variant="p" className="text-gray-500 dark:text-gray-400">
            Powerful features designed to help you build, manage, and scale your application with ease.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300">
                <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <Typography variant="h4" className="mb-2">{feature.title}</Typography>
                <Typography variant="p" className="text-gray-500 dark:text-gray-400 !mt-0">
                  {feature.description}
                </Typography>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
