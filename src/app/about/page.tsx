"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Target, Eye, Rocket, Users, Award, Globe } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const team = [
  {
    name: "Joachim 'Josh' Bertot",
    role: "CEO & Founder",
    description: "Serial tech and real estate entrepreneur. Founder of one of France's first ISPs and a valuation firm in Asia. Leads InterVal's product vision and growth."
  },
  {
    name: "Emile Frémont",
    role: "CPO",
    description: "MRICS valuer overseeing compliance and feature roadmap across residential, commercial, and complex assets."
  },
  {
    name: "Dustin Rawlins",
    role: "CTO",
    description: "Software engineer and security specialist leading InterVal's technical development and data architecture."
  },
  {
    name: "Richard Sawyer",
    role: "COO",
    description: "Marketing and operations strategist focused on scaling InterVal's adoption, partnerships, and customer success."
  },
];

const values = [
  { icon: Target, title: "Precision", description: "We build tools that deliver accurate, compliant valuations every time." },
  { icon: Rocket, title: "Efficiency", description: "We're obsessed with saving valuers time without sacrificing quality." },
  { icon: Users, title: "Partnership", description: "We grow alongside our customers, treating their success as our own." },
  { icon: Award, title: "Excellence", description: "We hold ourselves to the highest standards in everything we build." },
];

export default function AboutPage() {
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
              About InterVal
            </h1>
            <p className="text-xl text-gray-600">
              We&apos;re on a mission to transform how property valuations are done—making compliance effortless and valuers more productive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  InterVal was born from first-hand experience in the valuation industry. Our founder, Joachim Bertot, ran a valuation firm in Asia and experienced the pain of producing compliant reports manually.
                </p>
                <p>
                  He realized that valuers were spending more time on documentation and compliance than on actual valuation work. That had to change.
                </p>
                <p>
                  In 2022, InterVal was founded with a simple mission: build the tools that valuers deserve—intuitive, efficient, and always compliant with international standards.
                </p>
                <p>
                  Today, InterVal is trusted by hundreds of valuers worldwide, helping them produce RICS & IVS-compliant reports in a fraction of the time.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#0A7A8F] to-[#065666] p-12 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="w-24 h-24 text-white/80 mx-auto mb-6" />
                  <p className="text-4xl font-bold text-white mb-2">500+</p>
                  <p className="text-white/80">Valuers Worldwide</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center p-8 rounded-3xl bg-gray-50 hover:bg-[#E8F4F6] transition-all"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <value.icon className="w-8 h-8 text-[#0A7A8F]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the people behind InterVal.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-3xl border border-gray-200 hover:border-[#0A7A8F]/50 hover:shadow-xl transition-all"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#0A7A8F] to-[#0EADC5] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-bold text-gray-900 text-center mb-1">{member.name}</h3>
                <p className="text-[#0A7A8F] text-center text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm text-center">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#0A7A8F] to-[#065666]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join the InterVal Community</h2>
          <p className="text-white/80 mb-8">
            Be part of a growing network of valuers transforming the industry.
          </p>
          <a href="https://app.interval-soft.com/mad-auth/register" className="inline-flex px-8 py-4 bg-white text-[#0A7A8F] rounded-full font-semibold hover:shadow-lg transition-all">
            Start Your Free Trial
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
            <span className="text-gray-400">© 2025 InterVal Solution PTE. LTD. All rights reserved.</span>
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
