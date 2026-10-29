import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { portfolioData } from "@/lib/data";

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = portfolioData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Get 2 related projects (excluding current one)
  const relatedProjects = portfolioData
    .filter((p) => p.slug !== project.slug)
    .slice(0, 2);

  return (
    <div className="flex flex-col min-h-screen bg-brand-offwhite">
      
      {/* 1. HERO HEADER */}
      <section className="bg-brand-pink py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <Link href="/work" className="inline-flex items-center text-sm font-semibold text-brand-black/60 hover:text-brand-black mb-8 transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to Portfolio
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="bg-brand-black text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {project.category}
            </span>
            <span className="bg-white text-brand-accent border border-brand-accent/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {project.client}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-brand-black tracking-tight leading-tight max-w-4xl">
            {project.title}
          </h1>
          <p className="text-xl text-brand-black/80 leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </div>
      </section>

      {/* 2. MAIN IMAGE */}
      <section className="px-6 -mt-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl bg-gray-200">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. DETAILS CONTENT */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-brand-black">The Challenge</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{project.challenge}</p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-4 text-brand-black">Our Approach</h2>
              <p className="text-gray-600 text-lg leading-relaxed">{project.approach}</p>
            </div>

            <div className="bg-brand-pink/20 p-8 md:p-10 rounded-3xl border border-brand-pink/50">
              <h2 className="text-2xl font-bold mb-4 text-brand-black">Concept Objective</h2>
              <p className="text-gray-700 text-lg leading-relaxed">{project.results}</p>
              <p className="text-sm text-brand-accent font-semibold mt-6 pt-6 border-t border-brand-pink/50">
                * Note: This is a concept project demonstrating a proposed strategy, not verified client results.
              </p>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-xl mb-6">Project Details</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-gray-400 mb-1 uppercase tracking-wider">Category</p>
                  <p className="font-medium text-brand-black">{project.category}</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-gray-400 mb-1 uppercase tracking-wider">Services Provided</p>
                  <ul className="space-y-2 mt-2">
                    {project.services.map((s, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700 font-medium">
                        <CheckCircle2 size={16} className="text-brand-accent shrink-0" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <Link href="/contact" className="flex items-center justify-center w-full bg-brand-black text-white font-bold py-3 rounded-lg hover:bg-brand-accent transition-colors gap-2">
                  Start a Similar Project <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. RELATED PROJECTS */}
      <section className="py-24 px-6 bg-brand-offwhite border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black">More Work</h2>
            <Link href="/work" className="hidden sm:flex items-center gap-2 font-semibold text-brand-accent hover:text-black transition-colors">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((proj, i) => (
              <Link key={i} href={`/work/${proj.slug}`} className="group">
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all">
                  <div className="aspect-video relative overflow-hidden">
                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-bold text-brand-accent uppercase tracking-wider mb-2">{proj.category}</p>
                    <h3 className="text-xl font-bold group-hover:text-brand-accent transition-colors">{proj.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
