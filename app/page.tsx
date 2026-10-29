"use client";

import { useState } from "react";
import { Mail, MapPin, Instagram, Linkedin, CheckCircle2, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API call (We will connect this to a real email service later)
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <div className="py-24 px-6 bg-brand-offwhite min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Let&apos;s Connect</h1>
          <p className="text-lg text-gray-600 mb-8">
            Ready to scale your business? Drop us a message and we&apos;ll get back to you within 24 hours.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-brand-pink p-3 rounded-lg"><Mail className="text-brand-black" /></div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Email Us</p>
                <a href="mailto:thesociallancer@gmail.com" className="font-bold hover:text-brand-accent transition-colors">thesociallancer@gmail.com</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-brand-pink p-3 rounded-lg"><MapPin className="text-brand-black" /></div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Location</p>
                <p className="font-bold">Bhopal, Madhya Pradesh, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <CheckCircle2 size={64} className="text-green-500 mb-6" />
              <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
              <p className="text-gray-600 mb-6">Thank you for reaching out. We will get back to you shortly.</p>
              <button onClick={() => setStatus("idle")} className="text-brand-accent font-semibold hover:underline">
                Send another message
              </button>
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-bold mb-6">Send a Project Inquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Full Name</label>
                    <input required type="text" className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-brand-accent outline-none" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Business Name</label>
                    <input type="text" className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-brand-accent outline-none" placeholder="Acme Corp" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input required type="email" className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-brand-accent outline-none" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Services Required</label>
                  <select className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-brand-accent outline-none bg-white">
                    <option>Social Media Management</option>
                    <option>Content Strategy</option>
                    <option>Reels & Video</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Project Goals</label>
                  <textarea required rows={4} className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-brand-accent outline-none resize-none" placeholder="Tell us about your brand..."></textarea>
                </div>
                <button disabled={status === "loading"} type="submit" className="w-full flex justify-center items-center bg-brand-accent text-white font-bold py-3 rounded-md hover:bg-opacity-90 transition-all mt-4 disabled:opacity-70">
                  {status === "loading" ? <Loader2 className="animate-spin" size={20} /> : "Submit Inquiry"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}