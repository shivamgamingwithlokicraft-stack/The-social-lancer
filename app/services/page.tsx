"use client";

import Link from "next/link";
import { ArrowRight, BarChart3, Smartphone, PenTool, Video, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { servicesData } from "@/lib/data";

const iconMap: Record<string, any> = {
  "content-strategy": PenTool,
  "social-media-management": Smartphone,
  "organic-growth": Zap,
  "brand-positioning": Users,
  "reels-video": Video,
  "analytics": BarChart3,
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero */}
      <section className="bg-brand-pink py-32 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-brand-black tracking-tight">
            Our Core <span className="text-brand-accent">Services.</span>
          </h1>
          <p className="text-xl text-brand-black/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            We provide end-to-end social media and digital marketing solutions designed to scale your business and connect with your audience.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-brand-offwhite">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, i) => {
              const Icon = iconMap[service.slug] || PenTool;
              return (
                <Reveal key={service.slug} delay={i * 0.1}>
                  <Link href={`/services/${service.slug}`} className="group block h-full">
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col group-hover:-translate-y-2 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                      
                      <div className="bg-brand-pink w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                        <Icon className="text-brand-accent" size={28} />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                      <p className="text-gray-600 flex-grow mb-8">{service.description}</p>
                      
                      <div className="flex items-center text-brand-accent font-semibold text-sm group-hover:gap-2 transition-all">
                        Explore Service <ArrowRight size={16} className="ml-1" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-brand-black text-white text-center">
        <Reveal className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Not sure which service you need?</h2>
          <p className="text-xl text-gray-400 mb-10">Let&apos;s jump on a call and figure out the best strategy for your brand.</p>
          <Link href="/contact" className="inline-block bg-brand-accent text-white font-bold py-4 px-10 rounded-md hover:scale-105 transition-transform shadow-lg">
            Get a Free Consultation
          </Link>
        </Reveal>
      </section>

    </div>
  );
}