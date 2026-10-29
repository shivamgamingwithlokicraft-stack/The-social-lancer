import { notFound } from "next/navigation";
import Link from "next/link";
import { teamData } from "@/lib/data";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function TeamProfilePage({ params }: { params: { slug: string } }) {
  const member = teamData.find((m) => m.slug === params.slug);

  if (!member) {
    notFound();
  }

  return (
    <div className="py-24 px-6 bg-brand-offwhite min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Link href="/team" className="inline-flex items-center text-sm font-semibold text-gray-500 hover:text-brand-accent mb-8 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Back to Team
        </Link>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            
            <div className="bg-brand-pink/20 p-8 md:p-12 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-gray-100">
              <div className="w-32 h-32 bg-brand-pink rounded-full flex items-center justify-center mb-6 text-4xl font-bold text-brand-black/30">
                {member.name.charAt(0)}
              </div>
              <h1 className="text-3xl font-bold mb-2">{member.name}</h1>
              <p className="text-brand-accent font-semibold mb-6">{member.designation}</p>
            </div>

            <div className="md:col-span-2 p-8 md:p-12">
              <h2 className="text-xl font-bold mb-4">Biography</h2>
              <p className="text-gray-600 leading-relaxed mb-10">{member.bio}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-lg mb-4">Main Responsibilities</h3>
                  <ul className="space-y-2">
                    {member.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 size={16} className="text-brand-accent mt-0.5 shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-4">Skills & Expertise</h3>
                  <ul className="space-y-2">
                    {member.skills.map((skill, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle2 size={16} className="text-brand-accent mt-0.5 shrink-0" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}