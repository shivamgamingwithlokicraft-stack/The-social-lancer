"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="bg-brand-pink py-32 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-block bg-brand-black text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
            The Social Lancer • Digital Marketing Agency
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-brand-black tracking-tight">
            Click. Connect. <span className="text-brand-accent">Convert.</span>
          </h1>
          <p className="text-xl text-brand-black/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Creative ideas. Strategic content. Meaningful digital growth. We help brands build a stronger digital presence through social media strategy and storytelling.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-brand-accent text-white font-bold py-3 px-8 rounded-md hover:scale-105 transition-transform flex items-center justify-center gap-2">
              Let&apos;s Talk <ArrowRight size={20} />
            </Link>
            <Link href="/work" className="border-2 border-brand-black font-bold py-3 px-8 rounded-md hover:bg-brand-black hover:text-white transition-all">
              Explore Our Work
            </Link>
          </div>
        </motion.div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 px-6 bg-brand-offwhite">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex flex-col md:flex-row justify-between items-end mb-16"
          >
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Core Services</h2>
              <p className="text-lg text-gray-600">From strategy to execution, we handle the creative and analytical sides of your social media presence.</p>
            </div>
            <Link href="/services" className="hidden md:flex items-center gap-2 font-semibold border-b-2 border-brand-accent pb-1 hover:text-brand-accent transition-colors mt-6 md:mt-0">
              View All Services <ArrowRight size={16} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Content Strategy", desc: "Audience research, content pillars, and monthly calendars.", link: "content-strategy" },
              { title: "Social Media Management", desc: "Scheduling, publishing, and community engagement workflows.", link: "social-media-management" },
              { title: "Reels & Video", desc: "Hook development, scriptwriting, and motion graphics.", link: "reels-video" },
            ].map((service, i) => (
              <motion.div 
                key={i} 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.2 }}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <CheckCircle2 className="text-brand-accent mb-4" size={28} />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-6">{service.desc}</p>
                <Link href={`/services/${service.link}`} className="text-brand-accent text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                  Learn More <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK PREVIEW */}
      <section className="py-24 px-6 bg-brand-black text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Work</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">A glimpse into the campaigns and strategies we build.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "E-Commerce Brand Launch", cat: "Social Media Campaigns", slug: "ecommerce-brand-launch" },
              { title: "B2B LinkedIn Growth", cat: "Organic Growth", slug: "b2b-linkedin-growth" }
            ].map((proj, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Link href={`/work/${proj.slug}`} className="group relative overflow-hidden rounded-2xl aspect-video bg-gray-800 flex items-end p-8 block hover:scale-[1.02] transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div>
                  <div className="relative z-20">
                    <p className="text-brand-pink text-sm font-bold uppercase tracking-wider mb-2">{proj.cat}</p>
                    <h3 className="text-2xl font-bold group-hover:text-brand-pink transition-colors">{proj.title}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/work" className="inline-flex items-center gap-2 font-bold border-2 border-white hover:border-brand-pink hover:text-brand-pink px-8 py-3 rounded-md transition-all">
              View Full Portfolio <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 bg-brand-accent text-white text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to scale your brand?</h2>
          <p className="text-xl text-white/80 mb-10">Let&apos;s build a digital presence that actually converts.</p>
          <Link href="/contact" className="inline-block bg-white text-brand-accent font-bold py-4 px-10 rounded-md hover:bg-brand-pink transition-colors hover:scale-105 shadow-lg">
            Start a Project Today
          </Link>
        </motion.div>
      </section>

    </div>
  );
}