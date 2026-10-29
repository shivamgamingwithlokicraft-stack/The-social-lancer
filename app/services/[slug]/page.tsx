import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { servicesData } from "@/lib/data";

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-brand-offwhite">
      
      {/* Header */}
      <section className="bg-brand-pink py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <Link href="/services" className="inline-flex items-center text-sm font-semibold text-brand-black/60 hover:text-brand-black mb-8 transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to Services
          </Link>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-brand-black tracking-tight">
            {service.title}
          </h1>
          <p className="text-xl text-brand-black/80 leading-relaxed max-w-2xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* Details */}
      <section className="py-24 px-6 flex-grow">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl">
            <h2 className="text-3xl font-bold mb-8">What&apos;s Included</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="bg-brand-pink p-2 rounded-full shrink-0">
                    <CheckCircle2 className="text-brand-accent" size={20} />
                  </div>
                  <span className="text-gray-700 text-lg font-medium pt-1">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Inline CTA */}
          <div className="mt-16 text-center bg-brand-black p-12 rounded-3xl text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to get started?</h3>
            <p className="text-gray-400 mb-8 text-lg">Let&apos;s discuss how our {service.title.toLowerCase()} service fits into your marketing goals.</p>
            <Link href="/contact" className="inline-block bg-brand-accent text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition">
              Inquire About This Service
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}