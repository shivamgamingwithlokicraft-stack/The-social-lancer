"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";

// Text reveal variants for the hero
const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 * i },
  }),
};

const child = {
  visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 20, stiffness: 100 } },
  hidden: { opacity: 0, y: 20 },
};

// Masked reveal for images
const imageReveal = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: { clipPath: "inset(0 0% 0 0)", transition: { duration: 1, ease: [0.77, 0, 0.175, 1] } }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden pt-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-brand-pink py-24 md:py-32 px-6 flex items-center justify-center min-h-[85vh]">
        <motion.div 
          variants={container} 
          initial="hidden" 
          animate="visible" 
          className="max-w-5xl mx-auto text-center relative z-10"
        >
          <motion.div variants={child} className="inline-block bg-brand-black text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
            The Social Lancer • Digital Marketing Agency
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 text-brand-black tracking-tighter flex flex-col md:flex-row justify-center gap-x-4">
            <motion.span variants={child}>Click.</motion.span>
            <motion.span variants={child}>Connect.</motion.span>
            <motion.span variants={child} className="text-brand-accent">Convert.</motion.span>
          </h1>
          
          <motion.p variants={child} className="text-xl md:text-2xl text-brand-black/70 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            Creative ideas. Strategic content. Meaningful digital growth. We help brands build a stronger digital presence.
          </motion.p>
          
          <motion.div variants={child} className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-brand-accent text-white font-bold py-4 px-8 rounded-md hover:scale-105 hover:bg-brand-black transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg">
              Let&apos;s Talk 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/work" className="border-2 border-brand-black text-brand-black font-bold py-4 px-8 rounded-md hover:bg-brand-black hover:text-white transition-all duration-300">
              Explore Our Work
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. SERVICES PREVIEW */}
      <section className="py-32 px-6 bg-brand-offwhite">
        <div className="max-w-6xl mx-auto">
          <Reveal className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Our Core Services</h2>
              <p className="text-lg text-gray-600">From strategy to execution, we handle the creative and analytical sides of your social media presence.</p>
            </div>
            <Link href="/services" className="hidden md:flex items-center gap-2 font-semibold border-b-2 border-brand-accent pb-1 hover:text-brand-accent transition-colors">
              View All Services <ArrowRight size={16} />
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Content Strategy", desc: "Audience research, content pillars, and monthly calendars.", link: "content-strategy" },
              { title: "Social Media Management", desc: "Scheduling, publishing, and community engagement workflows.", link: "social-media-management" },
              { title: "Reels & Video", desc: "Hook development, scriptwriting, and motion graphics.", link: "reels-video" },
            ].map((service, i) => (
              <Reveal key={i} delay={i * 0.15}>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group h-full flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                  <div className="bg-brand-pink w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                    <CheckCircle2 className="text-brand-accent" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-8 flex-grow">{service.desc}</p>
                  <Link href={`/services/${service.link}`} className="text-brand-accent font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WORK PREVIEW (MASKED REVEAL) */}
      <section className="py-32 px-6 bg-brand-black text-white">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Featured Work</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">A glimpse into the campaigns and strategies we build.</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { 
                title: "E-Commerce Brand Launch", 
                cat: "Social Media Campaigns", 
                slug: "ecommerce-brand-launch",
                img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop" 
              },
              { 
                title: "B2B LinkedIn Growth", 
                cat: "Organic Growth", 
                slug: "b2b-linkedin-growth",
                img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1000&auto=format&fit=crop" 
              }
            ].map((proj, i) => (
              <motion.div 
                key={i} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-100px" }} 
                variants={imageReveal}
              >
                <Link href={`/work/${proj.slug}`} className="group relative overflow-hidden rounded-3xl aspect-[4/3] block">
                  <img 
                    src={proj.img} 
                    alt={proj.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out z-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 p-10 z-20 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-brand-pink text-sm font-bold uppercase tracking-wider mb-3">{proj.cat}</p>
                    <h3 className="text-3xl font-bold">{proj.title}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <Reveal delay={0.3} className="text-center mt-16">
            <Link href="/work" className="inline-flex items-center gap-2 font-bold border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-md transition-all duration-300">
              View Full Portfolio <ArrowRight size={20} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="py-32 px-6 bg-brand-accent text-white text-center relative overflow-hidden">
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        <Reveal className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Ready to scale your brand?</h2>
          <p className="text-xl text-white/80 mb-10 font-medium">Let&apos;s build a digital presence that actually converts.</p>
          <Link href="/contact" className="inline-block bg-white text-brand-accent font-bold py-4 px-10 rounded-md hover:scale-105 transition-transform duration-300 shadow-xl">
            Start a Project Today
          </Link>
        </Reveal>
      </section>

    </div>
  );
}