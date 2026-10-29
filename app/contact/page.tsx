"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, MapPin, ArrowRight, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setStatus("success");
    } catch (error: any) {
      setStatus("error");
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="bg-brand-pink py-32 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-block bg-brand-black text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            Let&apos;s Work Together
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-brand-black tracking-tight leading-tight">
            Have a brand in mind? <span className="text-brand-accent">Let&apos;s make it matter.</span>
          </h1>
          <p className="text-xl text-brand-black/80 max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re building your digital presence from scratch or looking to improve your current social media strategy, we&apos;d love to understand your goals.
          </p>
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="mt-10"
          >
            <a href="#enquiry-form" className="inline-flex items-center gap-2 bg-brand-accent text-white font-bold py-3 px-8 rounded-md hover:scale-105 transition-transform shadow-lg">
              Start Your Enquiry <ArrowRight size={20} />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. MAIN CONTACT & FORM SECTION */}
      <section id="enquiry-form" className="py-24 px-6 bg-brand-offwhite">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16">
          
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <Reveal>
              <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form to tell us about your project. We read every inquiry and will get back to you with the next steps.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
                <div className="bg-brand-pink p-3 rounded-lg text-brand-accent"><Mail size={24} /></div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Email Us</p>
                  <a href="mailto:thesociallancer@gmail.com" className="font-bold hover:text-brand-accent transition-colors text-lg">thesociallancer@gmail.com</a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
                <div className="bg-brand-pink p-3 rounded-lg text-brand-accent"><MapPin size={24} /></div>
                <div>
                  <p className="text-sm text-gray-500 font-medium mb-1">Location</p>
                  <p className="font-bold text-lg">Bhopal, Madhya Pradesh, India</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3} className="flex gap-4 pt-4">
              <a href="https://instagram.com/thesociallancer" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:text-brand-accent font-semibold transition-all">
                <FaInstagram size={20} /> Instagram
              </a>
              <a href="https://in.linkedin.com/company/the-social-lancer" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:text-brand-accent font-semibold transition-all">
                <FaLinkedin size={20} /> LinkedIn
              </a>
            </Reveal>
          </div>

          {/* Right Side: The Form */}
          <div className="lg:col-span-3">
            <Reveal direction="left">
              <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl relative overflow-hidden">
                
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-20 text-center"
                    >
                      <div className="bg-green-100 p-4 rounded-full mb-6 text-green-600">
                        <CheckCircle2 size={48} />
                      </div>
                      <h3 className="text-3xl font-bold mb-2">Inquiry Received!</h3>
                      <p className="text-gray-600 mb-8">Thank you for reaching out. We will review your details and get back to you shortly.</p>
                      <button onClick={() => setStatus("idle")} className="text-brand-accent font-semibold hover:underline">
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <h3 className="text-2xl font-bold mb-8">Project Enquiry</h3>
                      
                      {status === "error" && (
                        <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 flex items-center gap-2 text-sm font-medium">
                          <AlertCircle size={18} /> {errorMessage}
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="name" className="block text-sm font-semibold mb-2">Full Name *</label>
                            <input required id="name" name="name" type="text" className="w-full bg-brand-offwhite border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-brand-accent outline-none transition-all" placeholder="John Doe" />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-semibold mb-2">Email Address *</label>
                            <input required id="email" name="email" type="email" className="w-full bg-brand-offwhite border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-brand-accent outline-none transition-all" placeholder="john@example.com" />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="company" className="block text-sm font-semibold mb-2">Company / Brand Name *</label>
                            <input required id="company" name="company" type="text" className="w-full bg-brand-offwhite border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-brand-accent outline-none transition-all" placeholder="Acme Corp" />
                          </div>
                          <div>
                            <label htmlFor="service" className="block text-sm font-semibold mb-2">Service Required *</label>
                            <select required id="service" name="service" className="w-full bg-brand-offwhite border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-brand-accent outline-none transition-all">
                              <option value="">Select a service...</option>
                              <option value="Content Strategy">Content Strategy</option>
                              <option value="Social Media Management">Social Media Management</option>
                              <option value="Organic Growth Strategy">Organic Growth Strategy</option>
                              <option value="Reels & Short-Form Video">Reels & Short-Form Video</option>
                              <option value="Brand Positioning & Storytelling">Brand Positioning & Storytelling</option>
                              <option value="Content Analytics & Reporting">Content Analytics & Reporting</option>
                              <option value="Other / Not Sure Yet">Other / Not Sure Yet</option>
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="website" className="block text-sm font-semibold mb-2">Website / Social Profile (Optional)</label>
                            <input id="website" name="website" type="url" className="w-full bg-brand-offwhite border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-brand-accent outline-none transition-all" placeholder="https://" />
                          </div>
                          <div>
                            <label htmlFor="budget" className="block text-sm font-semibold mb-2">Approximate Budget (Optional)</label>
                            <select id="budget" name="budget" className="w-full bg-brand-offwhite border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-brand-accent outline-none transition-all">
                              <option value="">Select a range...</option>
                              <option value="Under ₹25,000">Under ₹25,000</option>
                              <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                              <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                              <option value="₹1,00,000+">₹1,00,000+</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="description" className="block text-sm font-semibold mb-2">Project Description *</label>
                          <textarea required id="description" name="description" rows={4} className="w-full bg-brand-offwhite border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-brand-accent outline-none transition-all resize-none" placeholder="Tell us about your brand, your goals, your current challenges, and what you would like to achieve."></textarea>
                        </div>

                        <button 
                          type="submit" 
                          disabled={status === "loading"}
                          className="w-full bg-brand-accent text-white font-bold py-4 rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 mt-4 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                        >
                          {status === "loading" ? (
                            <><Loader2 className="animate-spin" size={20} /> Sending Inquiry...</>
                          ) : (
                            "Submit Project Enquiry"
                          )}
                        </button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* 3. BEFORE YOU REACH OUT & FAQ */}
      <section className="py-24 px-6 bg-brand-black text-white">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">A little context goes a long way.</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Sharing your goals, target audience, current channels, and biggest challenges helps us understand your requirements and have a more productive conversation.
            </p>
          </Reveal>

          <div className="space-y-4">
            {[
              { q: "What should I include in my enquiry?", a: "The more context, the better. Tell us about your brand, what you sell, who your audience is, and what your current social media looks like." },
              { q: "Which services do you offer?", a: "We specialize in Content Strategy, Social Media Management, Organic Growth, Reels & Video, Brand Positioning, and Analytics." },
              { q: "Can you work with a new or early-stage brand?", a: "Absolutely. We love building from the ground up and establishing foundational digital strategies for new brands." },
              { q: "How does the initial conversation work?", a: "Once you submit the form, we will review your details and reach out to schedule an introductory call to discuss your goals." }
            ].map((faq, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <details className="group bg-white/5 p-6 rounded-xl border border-white/10 cursor-pointer">
                  <summary className="font-bold text-lg flex justify-between items-center list-none">
                    {faq.q}
                    <span className="transition group-open:rotate-180 text-brand-pink">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <p className="text-gray-400 mt-4 leading-relaxed">{faq.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="py-24 px-6 bg-brand-accent text-center">
        <Reveal className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Let&apos;s turn your ideas into a clearer digital direction.</h2>
          <a href="#enquiry-form" className="inline-block bg-white text-brand-accent font-bold py-4 px-10 rounded-md hover:bg-brand-pink hover:text-brand-black transition-colors shadow-xl">
            Tell Us About Your Project
          </a>
        </Reveal>
      </section>

    </div>
  );
}