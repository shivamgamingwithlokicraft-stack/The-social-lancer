"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageSquare, Lightbulb, Users, BarChart3 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";

const stages = [
  {
    num: "01",
    title: "Discover",
    headline: "Understand before we create.",
    desc: "Every brand has a different audience, story, and set of challenges. We begin by understanding your business, current digital presence, objectives, and the people you want to reach.",
    activities: [
      "Understand brand goals and priorities.",
      "Review available social media channels.",
      "Identify audience needs and communication challenges.",
      "Discuss existing content and brand positioning.",
      "Establish the scope of the engagement."
    ],
    deliverables: [
      "Discovery summary.",
      "Initial observations.",
      "Agreed objectives and priorities."
    ]
  },
  {
    num: "02",
    title: "Strategise",
    headline: "Give every idea a direction.",
    desc: "Once the context is clear, we develop an approach that aligns content, communication, and publishing priorities with your brand's objectives.",
    activities: [
      "Define content pillars.",
      "Establish messaging and creative direction.",
      "Identify suitable content formats.",
      "Develop a content calendar where included in the agreed scope.",
      "Define relevant performance indicators."
    ],
    deliverables: [
      "Content strategy.",
      "Content pillars.",
      "Proposed publishing calendar.",
      "Measurement framework."
    ]
  },
  {
    num: "03",
    title: "Create & Execute",
    headline: "Turn strategy into meaningful content.",
    desc: "We translate the agreed direction into content designed to communicate clearly, represent your brand consistently, and give your audience a reason to engage.",
    activities: [
      "Develop content ideas and scripts.",
      "Produce or coordinate approved creative assets.",
      "Prepare reels and short-form content where included.",
      "Schedule or publish content where included.",
      "Support community engagement where included."
    ],
    deliverables: [
      "Approved content assets.",
      "Captions and creative copy.",
      "Publishing schedule.",
      "Agreed content deliverables."
    ]
  },
  {
    num: "04",
    title: "Review & Refine",
    headline: "Learn from the work. Improve what comes next.",
    desc: "Digital communication evolves continuously. We review the performance information available, identify useful patterns, and use those insights to inform future content decisions.",
    activities: [
      "Review relevant content performance.",
      "Analyse available engagement and reach metrics.",
      "Identify useful content patterns.",
      "Discuss observations and recommendations.",
      "Refine future content priorities."
    ],
    deliverables: [
      "Performance summary.",
      "Improvement recommendations.",
      "Updated content priorities.",
      "Next-cycle action plan."
    ]
  }
];

const faqs = [
  { q: "What happens during the initial discussion?", a: "We use this time to understand your brand, your goals, and your current challenges. It's a collaborative conversation to see if we're a good fit and to define the scope of a potential project." },
  { q: "Do I need to have a complete content strategy already?", a: "Not at all. Most of our clients come to us with a blank slate or a fragmented approach. Building the strategy from the ground up is exactly what we do in Stage 02." },
  { q: "How is the content plan developed?", a: "Based on our discovery findings, we establish core content pillars that align with your brand's voice and target audience. We then map these pillars into a structured editorial calendar." },
  { q: "Can the process be adapted to different brands?", a: "Yes. While our four-stage framework remains consistent, the depth of research, the volume of content, and the specific deliverables are tailored to your specific needs and budget." },
  { q: "How are content performance and improvements reviewed?", a: "In Stage 04, we look at the metrics that matter for your specific goals—whether that's engagement, reach, or website clicks. We use these insights to double down on what's working and adjust what isn't." },
  { q: "What happens after I submit a project enquiry?", a: "We will review your submission and reach out via email to schedule an introductory call. From there, we'll walk you through the discovery process." }
];

export default function ProcessPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scroll-linked animation for the timeline line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="flex flex-col min-h-screen bg-brand-offwhite">
      
      {/* 1. HERO SECTION */}
      <section className="bg-brand-pink py-32 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-block bg-brand-black text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            How We Work
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-brand-black tracking-tight leading-tight">
            A thoughtful process. <br/>
            <span className="text-brand-accent">A clearer digital direction.</span>
          </h1>
          <p className="text-xl text-brand-black/80 max-w-2xl mx-auto leading-relaxed mb-10">
            Great social media work begins with understanding. We bring research, strategy, creative execution, and performance insights together in a structured process designed around your brand&apos;s goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-brand-accent text-white font-bold py-3 px-8 rounded-md hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-lg">
              Start a Project <ArrowRight size={20} />
            </Link>
            <Link href="/services" className="border-2 border-brand-black font-bold py-3 px-8 rounded-md hover:bg-brand-black hover:text-white transition-all">
              Explore Our Services
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. ANIMATED TIMELINE */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto" ref={containerRef}>
          
          <Reveal className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Our Four-Stage Framework</h2>
            <p className="text-lg text-gray-600">A structured approach to building your brand.</p>
          </Reveal>

          <div className="relative">
            {/* Background Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />
            
            {/* Animated Foreground Line */}
            <motion.div 
              style={{ height: lineHeight }}
              className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-brand-accent -translate-x-1/2 origin-top"
            />

            <div className="space-y-16 md:space-y-24">
              {stages.map((stage, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row items-start ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 top-0 w-12 h-12 rounded-full bg-white border-4 border-brand-accent text-brand-accent font-bold flex items-center justify-center -translate-x-1/2 z-10 shadow-lg text-sm">
                    {stage.num}
                  </div>

                  {/* Content Card */}
                  <div className="ml-20 md:ml-0 md:w-[calc(50%-3rem)] pl-0 md:px-8">
                    <Reveal direction={i % 2 === 0 ? "left" : "right"}>
                      <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl">
                        <h3 className="text-2xl font-bold mb-2 text-brand-black">{stage.title}</h3>
                        <p className="text-brand-accent font-semibold mb-4">{stage.headline}</p>
                        <p className="text-gray-600 mb-8 leading-relaxed">{stage.desc}</p>
                        
                        <div className="grid grid-cols-1 gap-6">
                          <div>
                            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-3">Activities</h4>
                            <ul className="space-y-2">
                              {stage.activities.map((act, j) => (
                                <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                                  <CheckCircle2 size={16} className="text-gray-300 mt-0.5 shrink-0" />
                                  {act}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="bg-brand-pink/20 p-4 rounded-xl border border-brand-pink/50">
                            <h4 className="font-bold text-sm uppercase tracking-wider text-brand-accent mb-2">Deliverables</h4>
                            <ul className="space-y-1">
                              {stage.deliverables.map((del, j) => (
                                <li key={j} className="flex items-start gap-2 text-sm text-gray-700 font-medium">
                                  <span className="text-brand-accent mt-1">•</span>
                                  {del}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. COLLABORATION PRINCIPLES */}
      <section className="py-24 px-6 bg-brand-black text-white">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">A partnership, not a guessing game.</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">We believe the best work happens when we operate as an extension of your team.</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Clear communication", desc: "Align on goals, expectations, and priorities.", icon: MessageSquare },
              { title: "Thoughtful planning", desc: "Establish direction before committing to execution.", icon: Lightbulb },
              { title: "Collaborative feedback", desc: "Use agreed review and approval steps.", icon: Users },
              { title: "Continuous learning", desc: "Use available insights to inform improvements.", icon: BarChart3 },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors h-full">
                    <div className="bg-brand-pink/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="text-brand-pink" size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WHAT TO PREPARE */}
      <section className="py-24 px-6 bg-brand-offwhite">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-brand-black">A strong start begins with the right context.</h2>
            <p className="text-lg text-gray-600">To make our discovery phase as productive as possible, it helps if you can prepare:</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "A brief introduction to your brand.",
              "Your main business or communication goals.",
              "An overview of your target audience.",
              "Links to existing digital channels.",
              "Examples of content you like.",
              "Any known challenges or constraints."
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
                  <CheckCircle2 className="text-brand-accent shrink-0" size={20} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-24 px-6 bg-brand-offwhite border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-brand-black">Frequently Asked Questions</h2>
          </Reveal>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <details className="group bg-white p-6 rounded-xl border border-gray-100 shadow-sm cursor-pointer">
                  <summary className="font-bold text-lg flex justify-between items-center list-none">
                    {faq.q}
                    <span className="transition group-open:rotate-180 text-brand-accent">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-4 leading-relaxed">{faq.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="py-24 px-6 bg-brand-accent text-white text-center">
        <Reveal className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to build with purpose?</h2>
          <p className="text-xl text-white/80 mb-10">Tell us where your brand is today and what you want to achieve. We&apos;ll start by understanding your goals.</p>
          <Link href="/contact" className="inline-block bg-white text-brand-accent font-bold py-4 px-10 rounded-md hover:bg-brand-pink hover:text-brand-black transition-colors shadow-xl">
            Start a Project
          </Link>
        </Reveal>
      </section>

    </div>
  );
}