"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MapPin, ExternalLink, Send, MessageSquare, Calendar } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function ContactPage() {
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
            <Link href="/sample-reports" className="text-gray-600 hover:text-[#0A7A8F] transition-colors font-medium">Sample Reports</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-[#0A7A8F] transition-colors font-medium">Pricing</Link>
            <a href="https://docs.interval-soft.com/interval" target="_blank" rel="noopener" className="text-gray-600 hover:text-[#0A7A8F] transition-colors font-medium flex items-center gap-1">
              Knowledge Base <ExternalLink className="w-3 h-3" />
            </a>
            <Link href="/faq" className="text-gray-600 hover:text-[#0A7A8F] transition-colors font-medium">FAQ</Link>
            <Link href="/contact" className="text-[#0A7A8F] font-medium">Contact</Link>
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
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600">
              Have a question? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div {...fadeInUp}>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E8F4F6] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#0A7A8F]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:info@interval-soft.com" className="text-[#0A7A8F] hover:underline">
                      info@interval-soft.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E8F4F6] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#0A7A8F]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+447723564800" className="text-[#0A7A8F] hover:underline">
                      +44 7723 564 800
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#E8F4F6] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#0A7A8F]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      68 Circular Road, #02-01<br />
                      Singapore 049422
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
              <div className="space-y-4">
                <a href="#" className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-200 hover:border-[#0A7A8F] hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 bg-[#0A7A8F] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Book a Demo</h3>
                    <p className="text-sm text-gray-600">Schedule a 45-minute walkthrough</p>
                  </div>
                </a>
                
                <a href="#" className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-200 hover:border-[#0A7A8F] hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 bg-[#0A7A8F] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Free Consultation</h3>
                    <p className="text-sm text-gray-600">15-minute call with our team</p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0A7A8F] focus:ring-2 focus:ring-[#0A7A8F]/20 outline-none transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0A7A8F] focus:ring-2 focus:ring-[#0A7A8F]/20 outline-none transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0A7A8F] focus:ring-2 focus:ring-[#0A7A8F]/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0A7A8F] focus:ring-2 focus:ring-[#0A7A8F]/20 outline-none transition-all"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0A7A8F] focus:ring-2 focus:ring-[#0A7A8F]/20 outline-none transition-all bg-white">
                      <option>General Inquiry</option>
                      <option>Sales Question</option>
                      <option>Technical Support</option>
                      <option>Partnership</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0A7A8F] focus:ring-2 focus:ring-[#0A7A8F]/20 outline-none transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-[#0A7A8F] to-[#0EADC5] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-[#0A7A8F]/30 transition-all flex items-center justify-center gap-2"
                  >
                    Send Message <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
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
