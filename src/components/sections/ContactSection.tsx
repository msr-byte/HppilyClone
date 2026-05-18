"use client"

import { Container } from "../ui/Container"
import { Typography } from "../ui/Typography"
import { Button } from "../ui/Button"
import { Card } from "../ui/Card"

export function ContactSection() {
  return (
    <section className="py-24 bg-white dark:bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 dark:bg-blue-900/10 -skew-x-12 translate-x-20" />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Typography variant="h2" className="mb-6">Ready to get started?</Typography>
            <Typography variant="p" className="text-gray-500 dark:text-gray-400 mb-8 text-lg">
              Contact us today to schedule a demo or ask any questions. We usually reply within 24 hours.
            </Typography>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <Typography variant="small" className="text-gray-500 dark:text-gray-400">Email us</Typography>
                  <Typography variant="large">hello@saasreplica.com</Typography>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <Typography variant="small" className="text-gray-500 dark:text-gray-400">WhatsApp</Typography>
                  <Typography variant="large">+1 (555) 000-0000</Typography>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="p-8">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">First Name</label>
                  <input className="flex h-10 w-full rounded-md border border-gray-200 bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 dark:border-gray-800" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Name</label>
                  <input className="flex h-10 w-full rounded-md border border-gray-200 bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 dark:border-gray-800" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <input type="email" className="flex h-10 w-full rounded-md border border-gray-200 bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 dark:border-gray-800" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <textarea className="flex min-h-[120px] w-full rounded-md border border-gray-200 bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 dark:border-gray-800" placeholder="How can we help you?" />
              </div>
              <Button type="button" className="w-full">Send Message</Button>
            </form>
          </Card>
        </div>
      </Container>
    </section>
  )
}
