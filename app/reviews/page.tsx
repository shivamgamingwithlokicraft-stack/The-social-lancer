"use client";

import { useState } from "react";
import Link from "next/link";
import { Star, MessageSquareQuote, CheckCircle2, Loader2, AlertCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";

export default function ReviewsPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    // Add rating and boolean conversion for checkbox
    data.rating = rating.toString();
    data.permission = formData.get("permission") === "on";

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setStatus("success");
      setRating(0);
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
            Client Feedback
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-brand-black tracking-tight leading-tight">
            Good work speaks. <br/>
            <span className="text-brand-accent">Great partnerships tell the story.</span>
          </h1>
          <p className="text-xl text-brand-black/80 max-w-2xl mx-auto leading-relaxed">
            Every brand has its own goals, challenges, and ambitions. We&apos;re building our approach around thoughtful collaboration, meaningful communication, and work that serves a clear purpose.
          </p>
        </motion.div>
      </section>

      {/* 2. REVIEWS DISPLAY (EMPTY STATE) */}
      <section className="py-24 px-6 bg-brand-offwhite">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="bg-white p-12 md:p-20 rounded-3xl border border-gray-100 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-pink via-brand-accent to-brand-pink" />
              
              <MessageSquareQuote size={64} className="text-brand-pink mx-auto mb-8" />
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Your experience could be featured here.</h2>
              <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
                We value honest feedback from the people we work with. As our client partnerships grow, this space will showcase approved feedback and experiences.
              </p>
              
              <Link href="/contact" className="inline-flex items-center gap-2 bg-brand-accent text-white font-bold py-3 px-8 rounded-md hover:scale-105 transition-transform shadow-lg">
                Start a Conversation <ArrowRight size={20} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. REVIEW SUBMISSION FORM */}
      <section className="py-24 px-6 bg-brand-black text-white">
        <div className="max-w-3xl mx-auto">
          <Reveal className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Leave a Review</h2>
            <p className="text-lg text-gray-400">
              Already worked with us? We&apos;d love to hear your thoughts. Submissions are reviewed before being published.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-10"
                  >
                    <CheckCircle2 size={64} className="text-green-500 mb-6" />
                    <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                    <p className="text-gray-400 mb-6">Your feedback has been submitted successfully and is pending review.</p>
                    <button onClick={() => setStatus("idle")} className="text-brand-pink font-semibold hover:underline">
                      Submit another review
                    </button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-6">
                    {status === "error" && (
                      <div className="bg-red-500/10 text-red-400 p-4 rounded-lg flex items-center gap-2 text-sm border border-red-500/20">
                        <AlertCircle size={18} /> {errorMessage}
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-300">Your Name *</label>
                        <input required name="name" type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-brand-accent outline-none" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-300">Company / Brand *</label>
                        <input required name="company" type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-brand-accent outline-none" placeholder="Acme Corp" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-300">Email Address *</label>
                      <input required name="email" type="email" className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-brand-accent outline-none" placeholder="john@example.com" />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-300">Rating *</label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setRating(star)}
                            className="focus:outline-none transition-transform hover:scale-110"
                          >
                            <Star 
                              size={32} 
                              className={star <= rating ? "fill-brand-pink text-brand-pink" : "text-gray-600"} 
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-300">Your Feedback *</label>
                      <textarea required name="feedback" rows={4} className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-brand-accent outline-none resize-none" placeholder="Tell us about your experience working with us..."></textarea>
                    </div>

                    <div className="flex items-start gap-3 bg-black/30 p-4 rounded-lg border border-white/5">
                      <input required type="checkbox" id="permission" name="permission" className="mt-1 w-5 h-5 accent-brand-accent cursor-pointer" />
                      <label htmlFor="permission" className="text-sm text-gray-400 cursor-pointer">
                        I grant The Social Lancer permission to publish this feedback on their website. I understand this will be reviewed before publishing.
                      </label>
                    </div>

                    <button 
                      type="submit" 
                      disabled={status === "loading" || rating === 0}
                      className="w-full bg-brand-accent text-white font-bold py-4 rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                    >
                      {status === "loading" ? (
                        <><Loader2 className="animate-spin" size={20} /> Submitting...</>
                      ) : (
                        "Submit Review"
                      )}
                    </button>
                    {rating === 0 && <p className="text-center text-xs text-gray-500 mt-2">Please select a star rating to submit.</p>}
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}