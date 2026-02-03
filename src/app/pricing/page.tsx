"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight, ExternalLink, Sparkles } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const plans = [
  {
    name: "Essential",
    price: 99,
    description: "Basic tools for budget-conscious users",
    features: [
      "Market approach valuations",
      "Standard report templates",
      "Basic comparable database",
      "Email support",
      "1 user seat",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Standard",
    price: 149,
    description: "Ideal for private practitioners using multiple valuation methods",
    features: [
      "All Essential features",
      "Income approach valuations",
      "Cost approach valuations",
      "Custom report templates",
      "Advanced comparable database",
      "Project management tools",
      "Priority email support",
      "3 user seats",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Professional",
    price: 199,
    description: "Advanced tools and collaboration features",
    features: [
      "All Standard features",
      "DCF & DRC methodologies",
      "Team collaboration",
      "Audit trail & compliance",
      "API access",
      "Live chat support",
      "10 user seats",
    ],
    cta: "Coming H2 2025",
    popular: false,
    comingSoon: true,
  },
  {
    name: "Enterprise",
    price: null,
    description: "Custom pricing for large teams",
    features: [
      "All Professional features",
      "Unlimited user seats",
      "Custom integrations",
      "Dedicated account manager",
      "On-premise deployment option",
      "Custom SLA",
      "Training & onboarding",
    ],
    cta: "Contact Sales",
    popular: false,
    comingSoon: true,
  },
];

export default function PricingPage() {
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
            <Link href="/pricing" className="text-[#0A7A8F] font-medium">Pricing</Link>
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
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Choose the plan that fits your valuation practice. All plans include a 30-day free trial.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, idx) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative p-8 rounded-3xl border-2 transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-b from-[#0A7A8F] to-[#065666] border-[#0A7A8F] text-white scale-105 shadow-2xl shadow-[#0A7A8F]/30"
                    : "bg-white border-gray-200 hover:border-[#0A7A8F]/50 hover:shadow-xl"
                } ${plan.comingSoon ? "opacity-80" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#FF6B35] text-white text-sm font-semibold rounded-full flex items-center gap-1">
                    <Sparkles className="w-4 h-4" /> Most Popular
                  </div>
                )}
                {plan.comingSoon && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gray-500 text-white text-sm font-semibold rounded-full">
                    Coming Soon
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.popular ? "text-white/70" : "text-gray-600"}`}>
                  {plan.description}
                </p>
                <div className="mb-6">
                  {plan.price ? (
                    <div className="flex items-baseline gap-1">
                      <span className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                        ${plan.price}
                      </span>
                      <span className={plan.popular ? "text-white/70" : "text-gray-500"}>/month</span>
                    </div>
                  ) : (
                    <span className={`text-2xl font-bold ${plan.popular ? "text-white" : "text-gray-900"}`}>
                      Custom
                    </span>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? "text-green-300" : "text-[#0A7A8F]"}`} />
                      <span className={`text-sm ${plan.popular ? "text-white/90" : "text-gray-600"}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.comingSoon ? "#" : "https://app.interval-soft.com/mad-auth/register"}
                  className={`block w-full py-3 px-6 rounded-full font-semibold text-center transition-all ${
                    plan.popular
                      ? "bg-white text-[#0A7A8F] hover:shadow-lg"
                      : plan.comingSoon
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-[#0A7A8F] text-white hover:bg-[#065666]"
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Have questions?</h2>
          <p className="text-gray-600 mb-6">
            Check our FAQ or get in touch with our team.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/faq" className="px-6 py-3 bg-white text-gray-900 rounded-full font-medium border border-gray-200 hover:border-[#0A7A8F] transition-colors">
              View FAQ
            </Link>
            <Link href="/contact" className="px-6 py-3 bg-[#0A7A8F] text-white rounded-full font-medium hover:bg-[#065666] transition-colors flex items-center gap-2">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
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
