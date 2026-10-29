import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData } from "@/lib/data";
import { CheckCircle2, ArrowLeft } from "lucide-react";

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) notFound();

  return (
    <div className="py-24 px-6 bg-brand-offwhite min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Link href="/services" className="inline-flex items-center text-sm font-semibold text-gray-500 hover:text-brand-accent mb-8 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Back to Services
        </Link>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{service.title}</h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-12">{service.description}</p>

        <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-100 shadow-sm mb-12">
          <h2 className="text-2xl font-bold mb-6">What&apos;s Included</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="text-brand-accent shrink-0 mt-0.5" size={20} />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center bg-brand-pink/20 p-12 rounded-2xl border border-brand-pink/50">
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-gray-600 mb-8">Let&apos;s discuss how this service fits into your marketing goals.</p>
          <Link href="/contact" className="inline-block bg-brand-accent text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition">
            Inquire About This Service
          </Link>
        </div>
      </div>
    </div>
  );
}