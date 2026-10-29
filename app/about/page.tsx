"use client";

import Link from "next/link";
import { ArrowRight, Target, Eye, Lightbulb, Users, Zap, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { teamData } from "@/lib/data";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="bg-brand-pink py-32 px-6 text-center relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <div className="inline-block bg-brand-black text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            About The Social Lancer
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-brand-black tracking-tight leading-tight">
            Good brands deserve to be <span className="text-brand-accent">impossible to ignore.</span>
          </h1>
          
          <p className="text-xl text-brand-black/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            We bring strategy, creativity, and social-first thinking together to help brands build meaningful digital connections.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-brand-accent text-white font-bold py-3 px-8 rounded-md hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-lg">
              Let&apos;s Talk <ArrowRight size={20} />
            </Link>
            <Link href="/services" className="border-2 border-brand-black font-bold py-3 px-8 rounded-md hover:bg-brand-black hover:text-white transition-all">
              Explore Our Services
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="py-24 px-6 bg-brand-offwhite">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">More than posts. A bigger picture.</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                The Social Lancer is a digital marketing agency focused on helping brands communicate clearly, create content with purpose, and build stronger relationships with their audiences.
              </p>
              <p>
                We believe effective social media is about more than publishing regularly. It starts with understanding a brand, identifying its audience, developing a thoughtful strategy, and creating content that gives people a reason to pay attention.
              </p>
              <p>
                From content planning and social media management to short-form video and organic growth strategy, we aim to connect creativity with clear business objectives.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="py-24 px-6 bg-brand-black text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <Reveal direction="right">
            <div className="bg-white/5 p-10 rounded-3xl border border-white/10">
              <Target className="text-brand-pink mb-6" size={40} />
              <h3 className="text-3xl font-bold mb-4">Make every digital interaction count.</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Our mission is to help brands build a meaningful and consistent digital presence through strategic thinking, creative storytelling, and audience-focused execution.
              </p>
            </div>
          </Reveal>
          
          <Reveal direction="left" delay={0.2}>
            <div className="bg-white/5 p-10 rounded-3xl border border-white/10">
              <Eye className="text-brand-accent mb-6" size={40} />
              <h3 className="text-3xl font-bold mb-4">A digital presence with purpose.</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Our vision is to help brands move beyond simply being visible online and build recognition, trust, and lasting relationships with their audiences.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. WHAT WE BELIEVE */}
      <section className="py-24 px-6 bg-brand-offwhite">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What We Believe</h2>
            <p className="text-xl text-gray-600">The principles that guide our creative process.</p>
          </Reveal>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { title: "Strategy before posting", desc: "Every piece of content should have a purpose.", icon: Target },
              { title: "Creativity with clarity", desc: "Strong ideas should communicate a clear message.", icon: Lightbulb },
              { title: "People before algorithms", desc: "Understand the audience, then build content around its needs.", icon: Users },
              { title: "Consistency builds recognition", desc: "A coherent voice and visual identity help brands become memorable.", icon: Zap },
              { title: "Learning through insights", desc: "Use relevant performance data to improve future decisions.", icon: CheckCircle2 },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} variants={fadeUp} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                  <Icon className="text-brand-accent mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 5. WHAT WE DO */}
      <section className="py-24 px-6 bg-brand-pink/30">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What We Do</h2>
            <p className="text-xl text-gray-700">Core service areas designed for modern brand growth.</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Content strategy and planning", slug: "content-strategy" },
              { title: "Social media management", slug: "social-media-management" },
              { title: "Organic growth strategy", slug: "organic-growth" },
              { title: "Reels and short-form video", slug: "reels-video" },
              { title: "Brand storytelling and positioning", slug: "brand-positioning" },
              { title: "Content performance analysis", slug: "analytics" },
            ].map((service, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <Link href={`/services/${service.slug}`} className="group block bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="flex justify-between items-center mb-4">
                    <div className="w-10 h-10 bg-brand-pink rounded-full flex items-center justify-center text-brand-accent font-bold">
                      {i + 1}
                    </div>
                    <ArrowRight className="text-gray-300 group-hover:text-brand-accent group-hover:translate-x-1 transition-all" size={20} />
                  </div>
                  <h3 className="font-bold text-lg">{service.title}</h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR APPROACH */}
      <section className="py-24 px-6 bg-brand-offwhite">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Thoughtful strategy. Creative execution.</h2>
          </Reveal>

          <div className="space-y-8">
            {[
              { num: "01", title: "Discover", desc: "Understand the brand, audience, objectives, and current digital presence." },
              { num: "02", title: "Strategise", desc: "Establish content pillars, communication priorities, and an appropriate content plan." },
              { num: "03", title: "Create & Publish", desc: "Develop and deliver relevant content aligned with the agreed strategy." },
              { num: "04", title: "Review & Refine", desc: "Review available performance insights and identify opportunities to improve." },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 0.15}>
                <div className="flex flex-col md:flex-row gap-6 items-start bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="text-4xl font-extrabold text-brand-pink/50">{step.num}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-lg">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MEET THE TEAM */}
      <section className="py-24 px-6 bg-brand-dark text-white">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">The people behind the ideas.</h2>
            <p className="text-lg text-gray-400">A dedicated team of strategists and creators.</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamData.map((member, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <Link href={`/team/${member.slug}`} className="group block bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-brand-pink transition-colors">
                  <div className="w-20 h-20 bg-brand-pink/20 rounded-full mb-6 flex items-center justify-center text-2xl font-bold text-brand-pink">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-brand-pink text-sm mb-4">{member.designation}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-white transition-colors">
                    View Profile <ArrowRight size={14} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.4} className="text-center mt-12">
            <Link href="/team" className="inline-block border-2 border-white hover:bg-white hover:text-black px-8 py-3 rounded-md font-bold transition-all">
              View Full Team Directory
            </Link>
          </Reveal>
        </div>
      </section>

      {/* 8. WHY WORK WITH US */}
      <section className="py-24 px-6 bg-brand-offwhite">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-12">Why Work With Us?</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {[
              "Strategy-led creative work",
              "Consistent brand communication",
              "Audience-focused content",
              "Thoughtful performance review"
            ].map((point, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="flex items-center gap-4 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                  <CheckCircle2 className="text-brand-accent shrink-0" size={24} />
                  <span className="font-bold text-lg">{point}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-24 px-6 bg-brand-accent text-white text-center">
        <Reveal className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Your next chapter starts with a conversation.</h2>
          <p className="text-xl text-white/80 mb-10">Tell us what you&apos;re building, where you want to go, and how you want your brand to show up online.</p>
          <Link href="/contact" className="inline-block bg-white text-brand-accent font-bold py-4 px-10 rounded-md hover:bg-brand-pink hover:text-brand-black transition-colors shadow-xl">
            Start a Project
          </Link>
        </Reveal>
      </section>

    </div>
  );
}