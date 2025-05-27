"use client"

import { motion } from "framer-motion"
import { ArrowRight, Bot, BarChart3, Package, CreditCard, Shield, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const features = [
  {
    icon: Package,
    title: "Smart Inventory Alerts",
    description: "AI-powered stock monitoring with automated alerts when inventory runs low",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Real-time insights and predictive analytics for informed decision making",
  },
  {
    icon: CreditCard,
    title: "Purchase Management",
    description: "Streamlined procurement processes with intelligent vendor selection",
  },
  {
    icon: Database,
    title: "Data Extraction",
    description: "Automated data processing and intelligent document management",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment Plans",
    description: "Customizable payment solutions tailored to your business needs",
  },
  {
    icon: Shield,
    title: "Identity Verification",
    description: "Secure user authentication and access control systems",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              INNOVATIVE
              <br />
              <span className="text-gray-600">SUPPLY CHAIN</span>
              <br />
              <span className="text-black">MANAGEMENT</span>
              <br />
              <span className="text-gray-600">PLATFORM</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Revolutionizing supply chain management through intelligent automation, predictive analytics, and seamless
              integration with TransactLink.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">INTELLIGENT AUTOMATION</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Our AI-driven platform transforms every aspect of your logistics operations
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border-2 border-gray-200 hover:border-black transition-colors duration-300 group">
                  <CardContent className="p-6 sm:p-8">
                    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }} className="mb-6">
                      <feature.icon className="h-12 w-12 text-black group-hover:text-gray-600 transition-colors" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Bot className="h-16 w-16 mx-auto mb-8 text-white" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">READY TO AUTOMATE?</h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 px-4">
              Join the future of logistics with our AI-powered platform
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              Start Your Journey
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
