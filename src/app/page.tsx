"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
  ExternalLink,
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

// Video data with real YouTube/Vimeo URLs
const videos = [
  { id: "V0ooe8Iz8Co", title: "Part 1: Logging In & User Management", duration: "2m 34s" },
  { id: "lpctRnU2pKU", title: "Part 2: Managing Your Market Data", duration: "2m 38s" },
  { id: "dPDy_v6grzc", title: "Part 3: Creating Your First Terms of Engagement", duration: "1m 56s" },
  { id: "gfBKkQDsWys", title: "Part 4: Navigating the Valuation Dashboard", duration: "2m 58s" },
  { id: "f_vrRQStDtU", title: "Part 5: The Full Valuation Process", duration: "5m 47s" },
  { id: "IQC7sUw9WnI", title: "Part 6: The Online Repository", duration: "2m 25s" },
];

// Standards logos
const standards = [
  { name: "IFRS", full: "International Financial Reporting Standards" },
  { name: "ICMS", full: "International Construction Measurement Standards" },
  { name: "IVSC", full: "International Valuation Standards Council" },
  { name: "RICS", full: "Royal Institution of Chartered Surveyors" },
  { name: "ILMS", full: "International Land Measurement Standards" },
];

// Features
const features = [
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
];

// Property types
const propertyTypes = [
  { icon: Home, title: "Residential", desc: "Apartments, houses, HMOs, terraced houses, etc." },
  { icon: Store, title: "Commercial", desc: "Offices, shopping centres, convenience stores, etc." },
  { icon: TreePine, title: "Land", desc: "Green/brown field, development & agricultural lands." },
  { icon: Factory, title: "Industrial", desc: "Warehouses, manufacturing, flex spaces, etc." },
  { icon: Church, title: "Others", desc: "Schools, theatres, churches, special purpose, etc." },
];

// Valuation methods
const valuationMethods = [
  { icon: TrendingUp, title: "Market Approach", desc: "Evaluate property value using comparable sales in the same market area." },
  { icon: DollarSign, title: "Income Approach", desc: "Determine property value based on the income it generates over time." },
  { icon: Hammer, title: "Cost Approach", desc: "Assess property value by calculating the cost to replace it with a similar one." },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A7A8F] to-[#065666] flex items-center justify-center shadow-lg shadow-[#0A7A8F]/20">
              <span className="text-white font-bold text-lg">IV</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">InterVal</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/sample-reports" className="text-gray-600 hover:text-[#0A7A8F] transition-colors font-medium">Sample Reports</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-[#0A7A8F] transition-colors font-medium">Pricing</Link>
            <a href="https://docs.interval-soft.com/interval" target="_blank" rel="noopener" className="text-gray-600 hover:text-[#0A7A8F] transition-colors font-medium flex items-center gap-1">
              Knowledge Base <ExternalLink className="w-3 h-3" />
            </a>
            <Link href="/faq" className="text-gray-600 hover:text-[#0A7A8F] transition-colors font-medium">FAQ</Link>
            <Link href="/contact" className="text-gray-600 hover:text-[#0A7A8F] transition-colors font-medium">Contact</Link>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://app.interval-soft.com/mad-auth/login" className="px-5 py-2.5 text-[#0A7A8F] font-medium hover:bg-gray-50 rounded-full transition-colors">
              Sign In
            </a>
            <a href="https://app.interval-soft.com/mad-auth/register" className="px-5 py-2.5 bg-[#0A7A8F] text-white rounded-full font-medium hover:bg-[#065666] transition-colors shadow-lg shadow-[#0A7A8F]/25">
              Sign Up Free
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[#f0f9fa] via-white to-[#e8f4f6]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-gray-100 mb-8">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-gray-600">Trusted by 500+ valuers worldwide</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6">
                The First{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A7A8F] to-[#0EADC5]">All-in-One</span>{" "}
                Property Valuation Solution
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                InterVal is a cloud based solution that helps valuers to produce{" "}
                <strong className="text-[#0A7A8F]">RICS & IVS standard-perfect</strong> reports
                in a fraction of the time with far fewer human errors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a href="https://app.interval-soft.com/mad-auth/register" className="px-8 py-4 bg-gradient-to-r from-[#0A7A8F] to-[#0EADC5] text-white rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-[#0A7A8F]/30 transition-all flex items-center justify-center gap-2 group">
                  Start Free Trial <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#demo" className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-[#0A7A8F] hover:text-[#0A7A8F] transition-all flex items-center justify-center gap-2 shadow-sm">
                  <Play className="w-5 h-5" /> Watch Demo
                </a>
              </div>
              <p className="text-sm text-gray-500 flex items-center gap-4 flex-wrap">
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" /> No credit card</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" /> Cancel anytime</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-500" /> Fast onboarding</span>
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#0A7A8F]/20 border border-gray-200 bg-white">
                <a 
                  href="https://vimeo.com/1071734652" 
                  target="_blank" 
                  rel="noopener"
                  className="block aspect-video relative group"
                >
                  <Image
                    src="/hero-illustration.png"
                    alt="InterVal Platform Overview"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-[#0A7A8F] ml-1" fill="#0A7A8F" />
                    </div>
                  </div>
                </a>
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">
                Click above to watch a short 2 minute overview video
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Logos */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.p {...fadeInUp} className="text-center text-sm font-medium text-gray-400 uppercase tracking-wider mb-8">
            Compliant with International Standards
          </motion.p>
          <motion.div {...fadeInUp} className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
            {standards.map((std) => (
              <div key={std.name} className="group relative">
                <span className="text-2xl md:text-3xl font-bold text-gray-300 group-hover:text-[#0A7A8F] transition-colors cursor-default">
                  {std.name}
                </span>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {std.full}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* From A to Z - CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#0A7A8F] via-[#087A8E] to-[#065666] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-5xl mx-auto text-center relative">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Effortless Compliance<br />
              <span className="text-white/70">Smarter Valuations</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10">
              With its easy to follow decision tree architecture, InterVal guides valuers through
              all aspects of an assignment including the terms of engagement, the investigation
              report, the valuation report and the audit trail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="#" className="px-8 py-4 bg-white text-[#0A7A8F] rounded-full font-semibold text-lg hover:shadow-xl transition-all">
                Book a Free Demo (45 Min)
              </a>
              <a href="#" className="px-8 py-4 bg-white/10 text-white rounded-full font-semibold text-lg border border-white/30 hover:bg-white/20 transition-all backdrop-blur-sm">
                Free Consultation (15 Min)
              </a>
              <a href="https://app.interval-soft.com/mad-auth/register" className="px-8 py-4 bg-[#FF6B35] text-white rounded-full font-semibold text-lg hover:bg-[#E5572A] transition-all shadow-lg">
                Try for Free - 30 days
              </a>
            </div>
            <p className="text-sm text-white/60 uppercase tracking-wider">
              No setup fees • Ready immediately • Configuration in 20-30 minutes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need in One Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Streamline every step of the valuation process with one intuitive solution
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#E8F4F6] to-[#D4EEF2] rounded-xl flex items-center justify-center mb-4 group-hover:from-[#0A7A8F] group-hover:to-[#0EADC5] transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-[#0A7A8F] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              World-Class Support at Your Fingertips
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                className="text-center p-10 rounded-3xl bg-gradient-to-b from-[#f0f9fa] to-white border border-[#0A7A8F]/10 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#0A7A8F] to-[#0EADC5] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#0A7A8F]/20">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Demo Videos */}
      <section id="demo" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {videos.map((video, idx) => (
              <motion.a
                key={idx}
                variants={fadeInUp}
                href={`https://youtu.be/${video.id}`}
                target="_blank"
                rel="noopener"
                className="group block"
              >
                <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden mb-4 relative shadow-lg group-hover:shadow-xl transition-all">
                  <Image
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all shadow-xl">
                      <Play className="w-7 h-7 text-[#0A7A8F] ml-1" fill="#0A7A8F" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 px-3 py-1.5 bg-black/70 backdrop-blur-sm rounded-lg text-xs text-white font-medium">
                    {video.duration}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-[#0A7A8F] transition-colors">
                  {video.title}
                </h3>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
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
            {propertyTypes.map((type, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gradient-to-br hover:from-[#E8F4F6] hover:to-white transition-all duration-300 group border border-transparent hover:border-[#0A7A8F]/20"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-lg transition-all group-hover:scale-110">
                  <type.icon className="w-8 h-8 text-[#0A7A8F]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-sm text-gray-600">{type.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Valuation Methods */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
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
            {valuationMethods.map((method, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="p-10 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#0A7A8F] to-[#0EADC5] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#0A7A8F]/20 group-hover:scale-110 transition-transform">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{method.title}</h3>
                <p className="text-gray-600 leading-relaxed">{method.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#0A7A8F] via-[#087A8E] to-[#065666] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Valuations?
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Join hundreds of valuers who have already streamlined their workflows with InterVal.
              Start your free trial today—no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://app.interval-soft.com/mad-auth/register" className="px-10 py-5 bg-white text-[#0A7A8F] rounded-full font-bold text-lg hover:shadow-2xl transition-all">
                Start Your Free Trial
              </a>
              <Link href="/contact" className="px-10 py-5 bg-white/10 text-white rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all backdrop-blur-sm">
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <div className="w-16 h-16 bg-[#0A7A8F] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Subscribe to our Newsletter</h2>
            <p className="text-gray-400 mb-8">
              Subscribe to our newsletter to receive exclusive offers, latest news and updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-[#0A7A8F] focus:ring-2 focus:ring-[#0A7A8F]/20 transition-all"
              />
              <button className="px-8 py-4 bg-gradient-to-r from-[#0A7A8F] to-[#0EADC5] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#0A7A8F]/30 transition-all">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0A7A8F] flex items-center justify-center">
                <span className="text-white font-bold text-lg">IV</span>
              </div>
              <span className="text-gray-400">© 2025 InterVal Solution PTE. LTD. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-8 text-gray-400">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/interval-license-agreement" className="hover:text-white transition-colors">Terms</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              <a href="https://twitter.com/InterValSoft" target="_blank" rel="noopener" className="hover:text-white transition-colors">Twitter</a>
              <a href="https://sg.linkedin.com/company/interval-valuation" target="_blank" rel="noopener" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
