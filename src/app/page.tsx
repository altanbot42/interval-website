"use client";

import { motion } from "framer-motion";
import {
  Building2,
  CheckCircle,
  FileText,
  Users,
  Database,
  Camera,
  FolderKanban,
  GitBranch,
  Cloud,
  LayoutTemplate,
  FileSpreadsheet,
  Receipt,
  Sparkles,
  BookOpen,
  MessageCircle,
  GraduationCap,
  Play,
  Home,
  Store,
  TreePine,
  Factory,
  Church,
  TrendingUp,
  DollarSign,
  Hammer,
  Mail,
  ArrowRight,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true },
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A7A8F] to-[#065666] flex items-center justify-center">
              <span className="text-white font-bold text-lg">IV</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">InterVal</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-[#0A7A8F] transition-colors">Features</a>
            <a href="#demo" className="text-gray-600 hover:text-[#0A7A8F] transition-colors">Demo</a>
            <a href="#support" className="text-gray-600 hover:text-[#0A7A8F] transition-colors">Support</a>
            <a href="https://app.interval-soft.com" className="px-5 py-2.5 bg-[#0A7A8F] text-white rounded-full font-medium hover:bg-[#065666] transition-colors">
              Sign In
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm text-gray-600">Trusted by 500+ valuers worldwide</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                The First{" "}
                <span className="gradient-text">All-in-One</span>{" "}
                Property Valuation Solution
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                InterVal is a cloud based solution that helps valuers to produce{" "}
                <strong className="text-[#0A7A8F]">RICS & IVS standard-perfect</strong> reports
                in a fraction of the time with far fewer human errors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://app.interval-soft.com/signup" className="px-8 py-4 bg-[#0A7A8F] text-white rounded-full font-semibold text-lg hover:bg-[#065666] transition-all hover:shadow-lg hover:shadow-[#0A7A8F]/25 flex items-center justify-center gap-2">
                  Start Free Trial <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#demo" className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-[#0A7A8F] transition-all flex items-center justify-center gap-2">
                  <Play className="w-5 h-5 text-[#0A7A8F]" /> Watch Demo
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                No credit card required • Easy cancellation • Fast onboarding
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#0A7A8F]/20">
                <div className="aspect-video bg-gradient-to-br from-[#0A7A8F] to-[#065666] flex items-center justify-center">
                  <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-[#0A7A8F] ml-1" fill="#0A7A8F" />
                  </button>
                </div>
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">
                Click above to watch a short 2 minute overview video
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Logos */}
      <section className="py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="flex flex-wrap items-center justify-center gap-12 opacity-60">
            {["IFRS", "ICMS", "IVSC", "RICS", "ILMS"].map((logo) => (
              <div key={logo} className="text-2xl font-bold text-gray-400">{logo}</div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* From A to Z */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#0A7A8F] to-[#065666] text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">From A to Z</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              With its easy to follow decision tree architecture, InterVal guides valuers through
              all aspects of an assignment including the terms of engagement, the investigation
              report, the valuation report and the audit trail.
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>No setup fees • Ready to use immediately • System configuration takes 20-30 minutes</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 px-6 section-gradient">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need in One Platform
            </h2>
            <p className="text-xl text-gray-600">
              Streamline every step of the valuation process with one intuitive solution
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: Building2, title: "Full valuation solution", desc: "Value any type of asset, under market, income and cost approaches." },
              { icon: CheckCircle, title: "Standard Perfect", desc: "Perform fully IVS & RICS compliant valuation reports in less than one hour." },
              { icon: Database, title: "Comparable database", desc: "Build and use datasets to create a property database with sales and lease data." },
              { icon: Camera, title: "Inspection", desc: "Share inspection findings with photos and videos through detailed reports." },
              { icon: FolderKanban, title: "Project Management", desc: "Track the progress on each assignment and ensure your team delivers on time." },
              { icon: GitBranch, title: "A to Z valuations", desc: "From the TOE to the delivery of the final report with an automatic audit trail." },
              { icon: Users, title: "Collaborative solution", desc: "Work with your team to carry out valuations, based on your own data." },
              { icon: Cloud, title: "Online Repository", desc: "Use an online repository to share findings, storing all valuation files securely." },
              { icon: LayoutTemplate, title: "Templating", desc: "Tailor your reports with pre-defined templates, ensuring consistency." },
              { icon: FileSpreadsheet, title: "Quotation", desc: "Quickly generate professional and structured quotations for clients." },
              { icon: Receipt, title: "Invoicing", desc: "Generate your invoices effortlessly and track your billing with ease." },
              { icon: Sparkles, title: "And Many More", desc: "Lots of additional features designed to enhance your valuation workflow." },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-12 h-12 bg-[#E8F4F6] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0A7A8F] transition-colors">
                  <feature.icon className="w-6 h-6 text-[#0A7A8F] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              World-Class Support at Your Fingertips
            </h2>
            <p className="text-xl text-gray-600">
              Get the help you need, when you need it—through comprehensive resources, live assistance, and personalized training.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: BookOpen, title: "Knowledge Base", desc: "Access 150+ pages of detailed documentation, step-by-step tutorials, and best practices to guide you through every feature." },
              { icon: MessageCircle, title: "Live Support", desc: "Submit support tickets or connect with our experts via live chat for fast, reliable troubleshooting whenever you need it." },
              { icon: GraduationCap, title: "Onboarding & Training", desc: "Every account includes a free 1-hour onboarding session. Need more? Purchase additional hours with our specialists." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="text-center p-8 rounded-3xl bg-gradient-to-b from-[#E8F4F6] to-white border border-[#0A7A8F]/10"
              >
                <div className="w-16 h-16 bg-[#0A7A8F] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Demo Videos */}
      <section id="demo" className="py-20 px-6 section-gradient">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Speed Dating: Get to Know InterVal
            </h2>
            <p className="text-xl text-gray-600">
              Quick, bite-sized videos to master InterVal in minutes!
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { title: "Part 1: Logging In & User Management", duration: "2m 34s" },
              { title: "Part 2: Managing Your Market Data", duration: "2m 38s" },
              { title: "Part 3: Creating Your First Terms of Engagement", duration: "1m 56s" },
              { title: "Part 4: Navigating the Valuation Dashboard", duration: "2m 58s" },
              { title: "Part 5: The Full Valuation Process", duration: "4m 47s" },
              { title: "Part 6: The Online Repository", duration: "2m 25s" },
            ].map((video, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden mb-3 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-[#0A7A8F] transition-all group-hover:scale-110">
                      <Play className="w-6 h-6 text-white ml-1" fill="white" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 rounded text-xs text-white">
                    {video.duration}
                  </div>
                </div>
                <h3 className="font-medium text-gray-900 group-hover:text-[#0A7A8F] transition-colors">
                  {video.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Value any type of property
            </h2>
            <p className="text-xl text-gray-600">
              Generate fast, accurate RICS & IVS-compliant reports for all property sectors
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {[
              { icon: Home, title: "Residential", desc: "Apartments, houses, HMOs, terraced houses, etc." },
              { icon: Store, title: "Commercial", desc: "Offices, shopping centres, convenience stores, etc." },
              { icon: TreePine, title: "Land", desc: "Green/brown field, development & agricultural lands." },
              { icon: Factory, title: "Industrial", desc: "Warehouses, manufacturing, flex spaces, etc." },
              { icon: Church, title: "Others", desc: "Schools, theatres, churches, special purpose, etc." },
            ].map((type, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-[#E8F4F6] transition-colors group"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                  <type.icon className="w-7 h-7 text-[#0A7A8F]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-sm text-gray-600">{type.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Valuation Methods */}
      <section className="py-20 px-6 section-gradient">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Using any valuation method
            </h2>
            <p className="text-xl text-gray-600">
              Deliver precise, RICS & IVS-compliant reports using trusted valuation methodologies
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: TrendingUp, title: "Market Approach", desc: "Evaluate property value using comparable sales in the same market area." },
              { icon: DollarSign, title: "Income Approach", desc: "Determine property value based on the income it generates over time." },
              { icon: Hammer, title: "Cost Approach", desc: "Assess property value by calculating the cost to replace it with a similar one." },
            ].map((method, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="p-8 bg-white rounded-3xl shadow-lg shadow-gray-200/50 border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#0A7A8F] to-[#065666] rounded-2xl flex items-center justify-center mb-6">
                  <method.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-gray-600">{method.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#0A7A8F] to-[#065666]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Effortless Compliance, Smarter Valuations
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Join hundreds of valuers transforming their workflows with InterVal. Whether you&apos;re
              looking for faster turnaround times, perfect compliance, or seamless reporting, we&apos;ve got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://app.interval-soft.com/signup" className="px-8 py-4 bg-white text-[#0A7A8F] rounded-full font-semibold text-lg hover:shadow-lg transition-all">
                Start for Free
              </a>
              <a href="mailto:contact@interval-soft.com" className="px-8 py-4 bg-white/10 text-white rounded-full font-semibold text-lg border border-white/30 hover:bg-white/20 transition-all">
                Schedule a Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <Mail className="w-12 h-12 text-[#0A7A8F] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">Subscribe to our Newsletter</h2>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter to receive exclusive offers, latest news and updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-[#0A7A8F]"
              />
              <button className="px-6 py-3 bg-[#0A7A8F] text-white rounded-full font-medium hover:bg-[#065666] transition-colors">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#0A7A8F] flex items-center justify-center">
              <span className="text-white font-bold text-sm">IV</span>
            </div>
            <span className="text-gray-400">© 2025 InterVal. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="mailto:contact@interval-soft.com" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
