"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { portfolioData } from "@/lib/data";

const categories = [
  "All Work",
  "Content Strategy",
  "Social Media Campaigns",
  "Organic Growth",
  "Reels & Video",
  "Analytics & Reporting",
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All Work");

  const filteredProjects = portfolioData.filter((project) => {
    if (activeFilter === "All Work") return true;
    return project.category === activeFilter;
  });

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="bg-brand-pink py-32 px-6 text-center relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <div className="inline-block bg-brand-black text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            Our Work
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-brand-black tracking-tight leading-tight">
            Creative thinking. <br/>
            <span className="text-brand-accent">Strategic execution.</span>
          </h1>
          <p className="text-xl text-brand-black/80 max-w-2xl mx-auto leading-relaxed mb-10">
            Explore the ideas, content, and digital strategies designed to help brands communicate with clarity and connect with the right audiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-brand-accent text-white font-bold py-3 px-8 rounded-md hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-lg">
              Discuss Your Project <ArrowRight size={20} />
            </Link>
            <a href="#portfolio" className="border-2 border-brand-black font-bold py-3 px-8 rounded-md hover:bg-brand-black hover:text-white transition-all flex items-center justify-center gap-2">
              Explore Selected Work <ArrowDown size={20} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* 2. PORTFOLIO GRID */}
      <section id="portfolio" className="py-24 px-6 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto">
          
          {/* Filters */}
          <Reveal className="flex flex-wrap justify-center gap-2 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === cat 
                    ? "bg-brand-black text-white shadow-md" 
                    : "bg-white text-gray-600 border border-gray-200 hover:border-brand-black"
                }`}
              >
                {cat}
              </button>
            ))}
          </Reveal>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                // Make the first item span 2 columns for an asymmetric editorial look
                const isFeatured = index === 0 && activeFilter === "All Work";
                
                return (
                  <motion.div
                    key={project.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
                    className={isFeatured ? "md:col-span-2 lg:col-span-2" : ""}
                  >
                    <Link href={`/work/${project.slug}`} className="group block h-full">
                      <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                        
                        {/* Image Container with Mask Reveal */}
                        <div className={`relative overflow-hidden ${isFeatured ? "aspect-[21/9]" : "aspect-[4/3]"}`}>
                          <img 
                            src={project.image} 
                            alt={project.title} 
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-brand-black z-10">
                            {project.category}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 flex flex-col flex-grow">
                          <h3 className={`font-bold mb-3 group-hover:text-brand-accent transition-colors ${isFeatured ? "text-3xl" : "text-2xl"}`}>
                            {project.title}
                          </h3>
                          <p className="text-gray-600 line-clamp-2 mb-6 flex-grow">
                            {project.description}
                          </p>
                          
                          <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                            <span className="text-sm font-semibold text-gray-400">Concept Project</span>
                            <div className="flex items-center text-brand-black font-bold text-sm group-hover:text-brand-accent transition-colors">
                              View Project <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>

                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* 3. FINAL CTA */}
      <section className="py-24 px-6 bg-brand-black text-white text-center">
        <Reveal className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Have a project in mind?</h2>
          <p className="text-xl text-gray-400 mb-10">Let&apos;s explore how thoughtful strategy and creative content can help your brand move forward.</p>
          <Link href="/contact" className="inline-block bg-brand-accent text-white font-bold py-4 px-10 rounded-md hover:scale-105 transition-transform shadow-lg">
            Start a Project
          </Link>
        </Reveal>
      </section>

    </div>
  );
}