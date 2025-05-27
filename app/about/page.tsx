"use client"

import { motion } from "framer-motion"
import { Target, Users, Zap, Globe, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "We deliver accurate, data-driven solutions that optimize every aspect of your logistics operations.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Constantly pushing the boundaries of what's possible with AI and automation technology.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We work closely with our clients to understand their unique needs and deliver tailored solutions.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Our platform scales to support logistics operations across multiple regions and markets.",
  },
]

const stats = [
  { number: "500+", label: "Clients Served" },
  { number: "99.9%", label: "Uptime" },
  { number: "50M+", label: "Transactions Processed" },
  { number: "24/7", label: "Support Available" },
]

export default function AboutPage() {
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
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight">ABOUT US</h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto px-4">
              Leading the future of logistics through intelligent automation and AI-powered solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">OUR MISSION</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6">
                We believe that the future of logistics lies in intelligent automation. Our mission is to empower
                businesses with AI-driven solutions that eliminate inefficiencies, reduce costs, and create seamless
                supply chain experiences.
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                Through cutting-edge technology and deep industry expertise, we're building the next generation of
                logistics platforms that adapt, learn, and evolve with your business needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-black text-white p-8 sm:p-12 rounded-lg mt-8 lg:mt-0"
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">Why Choose Us?</h3>
              <ul className="space-y-4 text-base sm:text-lg">
                <li className="flex items-start">
                  <span className="text-gray-300 mr-3">•</span>
                  Advanced AI algorithms for predictive analytics
                </li>
                <li className="flex items-start">
                  <span className="text-gray-300 mr-3">•</span>
                  Seamless integration with existing systems
                </li>
                <li className="flex items-start">
                  <span className="text-gray-300 mr-3">•</span>
                  24/7 monitoring and support
                </li>
                <li className="flex items-start">
                  <span className="text-gray-300 mr-3">•</span>
                  Scalable solutions for businesses of all sizes
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">OUR VALUES</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-gray-200 hover:border-black transition-colors duration-300 group text-center">
                  <CardContent className="p-8">
                    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }} className="mb-6">
                      <value.icon className="h-12 w-12 text-black mx-auto group-hover:text-gray-600 transition-colors" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">BY THE NUMBERS</h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm sm:text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">GET IN TOUCH</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Ready to transform your logistics operations? Let's discuss how we can help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Mail className="h-12 w-12 mx-auto mb-4 text-black" />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-600">contact@transactlink.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Phone className="h-12 w-12 mx-auto mb-4 text-black" />
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-600">+27 68 367 28 25</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <MapPin className="h-12 w-12 mx-auto mb-4 text-black" />
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-gray-600">
                18 Saint Mark's Road
                <br />
                Zonnebloem, Cape Town, 7925
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button size="lg" className="bg-black text-white hover:bg-gray-800">
              Schedule a Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
