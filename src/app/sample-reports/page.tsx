"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, FileText, Download, Home, Store, Factory, TreePine } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const reports = [
  {
    icon: Home,
    title: "Residential Valuation Report",
    type: "Apartment",
    standard: "RICS & IVS",
    method: "Market Approach",
    pages: "24 pages",
    description: "A comprehensive residential valuation report for a 2-bedroom apartment using the market comparison approach."
  },
  {
    icon: Store,
    title: "Commercial Valuation Report",
    type: "Office Building",
    standard: "RICS & IVS",
    method: "Income Approach",
    pages: "32 pages",
    description: "Detailed commercial property valuation using income capitalization method with DCF analysis."
  },
  {
    icon: Factory,
    title: "Industrial Valuation Report",
    type: "Warehouse",
    standard: "RICS & IVS",
    method: "Cost Approach",
    pages: "28 pages",
    description: "Industrial property valuation using the depreciated replacement cost methodology."
  },
  {
    icon: TreePine,
    title: "Land Valuation Report",
    type: "Development Land",
    standard: "RICS & IVS",
    method: "Residual Method",
    pages: "20 pages",
    description: "Development land valuation using residual approach with detailed feasibility analysis."
  },
];

export default function SampleReportsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A7A8F] to-[#065666] flex items-center justify-center">
              <span className="text-white font-bold text-lg">IV</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">InterVal</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/sample-reports" className="text-[#0A7A8F] font-medium">Sample Reports</Link>
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
            <a href="https://app.interval-soft.com/mad-auth/register" className="px-5 py-2.5 bg-[#0A7A8F] text-white rounded-full font-medium hover:bg-[#065666] transition-colors">
              Sign Up Free
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Sample Reports
            </h1>
            <p className="text-xl text-gray-600">
              Explore examples of RICS & IVS-compliant valuation reports generated with InterVal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {reports.map((report, idx) => (
              <motion.div
                key={report.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-200 hover:border-[#0A7A8F]/50 hover:shadow-xl transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#E8F4F6] to-[#D4EEF2] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:from-[#0A7A8F] group-hover:to-[#0EADC5] transition-all">
                    <report.icon className="w-8 h-8 text-[#0A7A8F] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{report.title}</h3>
                    <p className="text-gray-600 mb-4">{report.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">{report.type}</span>
                      <span className="px-3 py-1 bg-[#E8F4F6] text-[#0A7A8F] rounded-full text-sm">{report.standard}</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">{report.method}</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">{report.pages}</span>
                    </div>
                    <div className="flex gap-3">
                      <button className="flex items-center gap-2 px-4 py-2 bg-[#0A7A8F] text-white rounded-lg font-medium hover:bg-[#065666] transition-colors">
                        <FileText className="w-4 h-4" /> View Sample
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-700 rounded-lg font-medium hover:border-[#0A7A8F] hover:text-[#0A7A8F] transition-colors">
                        <Download className="w-4 h-4" /> Download PDF
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#0A7A8F] to-[#065666]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Create Your Own Reports</h2>
          <p className="text-white/80 mb-8">
            Start your free trial and generate professional, compliant valuation reports in minutes.
          </p>
          <a href="https://app.interval-soft.com/mad-auth/register" className="inline-flex px-8 py-4 bg-white text-[#0A7A8F] rounded-full font-semibold hover:shadow-lg transition-all">
            Start Free Trial
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0A7A8F] flex items-center justify-center">
              <span className="text-white font-bold">IV</span>
            </div>
            <span className="text-gray-400">© 2025 InterVal. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-8 text-gray-400">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/interval-license-agreement" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
