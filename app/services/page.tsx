"use client"

import { motion } from "framer-motion"
import { Bot, TrendingUp, Package, Database, CreditCard, Shield, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const services = [
  {
    icon: Package,
    title: "Smart Inventory Management",
    description: "AI-powered inventory tracking with predictive analytics",
    features: [
      "Real-time stock monitoring",
      "Automated reorder alerts",
      "Demand forecasting",
      "Multi-location tracking",
    ],
  },
  {
    icon: TrendingUp,
    title: "Advanced Analytics Dashboard",
    description: "Comprehensive insights for data-driven decisions",
    features: ["Custom reporting tools", "Performance metrics", "Trend analysis", "ROI optimization"],
  },
  {
    icon: CreditCard,
    title: "Purchase Management System",
    description: "Streamlined procurement with intelligent automation",
    features: ["Vendor management", "Purchase order automation", "Cost optimization", "Approval workflows"],
  },
  {
    icon: Database,
    title: "Data Extraction & Management",
    description: "Intelligent document processing and data handling",
    features: ["OCR document scanning", "Data validation", "Automated filing", "Integration APIs"],
  },
  {
    icon: CreditCard,
    title: "Flexible Payment Solutions",
    description: "Customizable payment plans and financial management",
    features: ["Multiple payment options", "Credit management", "Invoice automation", "Financial reporting"],
  },
  {
    icon: Shield,
    title: "Identity Verification",
    description: "Secure authentication and access control",
    features: ["Multi-factor authentication", "Role-based access", "Audit trails", "Compliance monitoring"],
  },
]

export default function ServicesPage() {
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
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight">OUR SERVICES</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto px-4">
              Comprehensive AI-powered solutions designed to transform your logistics operations with TransactLink
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-gray-200 hover:border-black transition-all duration-300 group hover:shadow-lg">
                  <CardHeader className="pb-4 px-6 sm:px-8 pt-6 sm:pt-8">
                    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }} className="mb-4">
                      <service.icon className="h-10 w-10 sm:h-12 sm:w-12 text-black group-hover:text-gray-600 transition-colors" />
                    </motion.div>
                    <CardTitle className="text-xl sm:text-2xl font-bold">{service.title}</CardTitle>
                    <p className="text-gray-600 text-sm sm:text-base">{service.description}</p>
                  </CardHeader>
                  <CardContent className="px-6 sm:px-8 pb-6 sm:pb-8">
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="h-5 w-5 text-black flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }} className="mt-6">
                      <Button
                        variant="outline"
                        className="border-black text-black hover:bg-black hover:text-white group"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Technology Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Bot className="h-16 w-16 mx-auto mb-8 text-black" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">POWERED BY AI</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Our advanced artificial intelligence algorithms continuously learn and adapt to optimize your logistics
              operations with TransactLink, providing unprecedented efficiency and accuracy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-black text-white p-8 sm:p-12 rounded-lg text-center"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">Ready to Transform Your Business?</h3>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 px-4">
              Get started with our AI-powered logistics platform today
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              Request Demo
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
