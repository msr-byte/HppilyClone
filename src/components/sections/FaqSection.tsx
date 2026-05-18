"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Container } from "../ui/Container"
import { Typography } from "../ui/Typography"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What makes SaaSReplica different?",
    answer: "We focus heavily on premium design aesthetics, modern animations, and top-tier performance to ensure your website stands out."
  },
  {
    question: "Can I manage the content without a developer?",
    answer: "Yes! The platform is integrated with a headless CMS (Sanity) which provides an intuitive dashboard for you to edit any content, anytime."
  },
  {
    question: "Is it optimized for SEO?",
    answer: "Absolutely. Built on Next.js, it offers server-side rendering, optimized metadata, and lightning-fast load times which Google loves."
  },
  {
    question: "What is the typical turnaround time?",
    answer: "Because we use a pre-built premium foundation, we can typically launch your fully customized site in 1-2 weeks."
  }
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <Container className="max-w-3xl">
        <div className="text-center mb-16">
          <Typography variant="h2" className="mb-4">Frequently Asked Questions</Typography>
          <Typography variant="p" className="text-gray-500 dark:text-gray-400">
            Everything you need to know about the product and billing.
          </Typography>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div 
                key={index} 
                className="border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-black overflow-hidden"
              >
                <button
                  className="flex w-full items-center justify-between p-6 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <Typography variant="large">{faq.question}</Typography>
                  <ChevronDown 
                    className={cn(
                      "h-5 w-5 text-gray-500 transition-transform duration-200",
                      isOpen ? "rotate-180" : ""
                    )} 
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-600 dark:text-gray-400">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
