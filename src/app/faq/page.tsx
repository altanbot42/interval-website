"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, ChevronDown, Search } from "lucide-react";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "What is InterVal?",
        a: "InterVal is a cloud-based property valuation software that helps valuers produce RICS & IVS compliant reports efficiently. It guides you through the entire valuation process from terms of engagement to final report delivery."
      },
      {
        q: "How do I sign up for a free trial?",
        a: "Simply click the 'Sign Up Free' button on our website. No credit card is required. You'll get full access to InterVal for 30 days to explore all features."
      },
      {
        q: "What standards does InterVal support?",
        a: "InterVal supports RICS (Royal Institution of Chartered Surveyors), IVS (International Valuation Standards), IFRS, ICMS, IPMS, and ILMS standards. We also support local standards in various jurisdictions."
      },
      {
        q: "How long does onboarding take?",
        a: "System configuration takes just 20-30 minutes. Every account includes a free 1-hour onboarding session with our specialists to help you get started."
      },
    ]
  },
  {
    category: "Features & Functionality",
    questions: [
      {
        q: "What valuation methods are supported?",
        a: "InterVal supports the Market Approach (comparable sales), Income Approach (rental income based), and Cost Approach (DRC/DCF methodologies). Our Professional plan includes advanced DCF capabilities."
      },
      {
        q: "What property types can I value?",
        a: "InterVal supports all major property types including residential (apartments, houses, HMOs), commercial (offices, retail), industrial (warehouses, manufacturing), land, and special purpose properties."
      },
      {
        q: "Can I customize report templates?",
        a: "Yes! InterVal's templating system allows you to customize logos, colors, and layouts. You can create multiple templates to match different client requirements or property types."
      },
      {
        q: "Does InterVal include a comparable database?",
        a: "Yes, you can build and maintain your own property database with sales and lease data. This helps you quickly find and apply comparables to your valuations."
      },
    ]
  },
  {
    category: "Pricing & Plans",
    questions: [
      {
        q: "How much does InterVal cost?",
        a: "InterVal offers three plans: Essential ($99/month), Standard ($149/month), and Professional ($199/month). Enterprise pricing is available for larger teams. All plans include a 30-day free trial."
      },
      {
        q: "Can I change plans later?",
        a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
      },
      {
        q: "Is there a setup fee?",
        a: "No, there are no setup fees. InterVal is ready to use immediately after you sign up."
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards (Visa, MasterCard, American Express) and can arrange invoicing for Enterprise customers."
      },
    ]
  },
  {
    category: "Support & Training",
    questions: [
      {
        q: "What support options are available?",
        a: "We offer email support for all plans, priority support for Standard plans, and live chat support for Professional and Enterprise plans. Our Knowledge Base has 150+ pages of documentation."
      },
      {
        q: "Do you provide training?",
        a: "Yes! Every account includes a free 1-hour onboarding session. Additional training hours can be purchased as needed."
      },
      {
        q: "Where can I find documentation?",
        a: "Our comprehensive Knowledge Base is available at docs.interval-soft.com. It includes step-by-step tutorials, best practices, and detailed feature guides."
      },
    ]
  },
  {
    category: "Security & Compliance",
    questions: [
      {
        q: "Is my data secure?",
        a: "Yes, InterVal uses enterprise-grade security including encryption at rest and in transit, secure cloud infrastructure, and regular security audits."
      },
      {
        q: "Where is my data stored?",
        a: "Your data is stored in secure cloud servers. Enterprise customers can discuss on-premise deployment options."
      },
      {
        q: "Does InterVal create an audit trail?",
        a: "Yes, InterVal automatically generates a complete audit trail for every valuation, documenting all changes, decisions, and approvals throughout the process."
      },
    ]
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span className="font-medium text-gray-900 group-hover:text-[#0A7A8F] transition-colors pr-8">
          {question}
        </span>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="pb-5 text-gray-600 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredFaqs = searchQuery
    ? faqs.map(cat => ({
        ...cat,
        questions: cat.questions.filter(
          q => q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
               q.a.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(cat => cat.questions.length > 0)
    : faqs;

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
            <Link href="/faq" className="text-[#0A7A8F] font-medium">FAQ</Link>
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
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Find answers to common questions about InterVal.
            </p>
            
            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:border-[#0A7A8F] focus:ring-2 focus:ring-[#0A7A8F]/20 outline-none transition-all"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          {filteredFaqs.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
              <div className="bg-white rounded-2xl border border-gray-200 px-6">
                {category.questions.map((faq, i) => (
                  <FAQItem key={i} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </motion.div>
          ))}
          
          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">No results found for &quot;{searchQuery}&quot;</p>
            </div>
          )}
        </div>
      </section>

      {/* Still have questions? */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#0A7A8F] to-[#065666]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still have questions?</h2>
          <p className="text-white/80 mb-8">
            Can&apos;t find the answer you&apos;re looking for? Our team is here to help.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="px-6 py-3 bg-white text-[#0A7A8F] rounded-full font-semibold hover:shadow-lg transition-all">
              Contact Support
            </Link>
            <a href="https://docs.interval-soft.com/interval" target="_blank" rel="noopener" className="px-6 py-3 bg-white/10 text-white rounded-full font-semibold border border-white/30 hover:bg-white/20 transition-all">
              View Documentation
            </a>
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
