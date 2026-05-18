"use client"

import { motion } from "framer-motion"
import { Container } from "../ui/Container"
import { Typography } from "../ui/Typography"
import { Card } from "../ui/Card"

const testimonials = [
  {
    quote: "Since using SaaSReplica, our workflow has improved by 10x. The design is absolutely gorgeous and our clients love it.",
    author: "Sarah Jenkins",
    role: "CEO at TechFlow",
  },
  {
    quote: "The animations are smooth, the UI is premium, and it loads instantly. It's exactly what we were looking for.",
    author: "Michael Chen",
    role: "Product Manager at Innovate",
  },
  {
    quote: "A game-changer for our agency. We can now deliver top-tier SaaS websites to our clients in a fraction of the time.",
    author: "Emma Watson",
    role: "Lead Designer at CreativeStudio",
  }
]

export function Testimonials() {
  return (
    <section className="py-24 bg-white dark:bg-black">
      <Container>
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <Typography variant="h2" className="mb-4">Loved by innovators</Typography>
          <Typography variant="p" className="text-gray-500 dark:text-gray-400">
            Don't just take our word for it. See what our customers have to say about their experience.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full flex flex-col justify-between">
                <Typography variant="p" className="italic mb-8 text-gray-700 dark:text-gray-300">
                  "{testimonial.quote}"
                </Typography>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-800" />
                  <div>
                    <Typography variant="small" className="block">{testimonial.author}</Typography>
                    <Typography variant="muted">{testimonial.role}</Typography>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
