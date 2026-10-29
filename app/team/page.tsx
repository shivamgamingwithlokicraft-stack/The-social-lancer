import Link from "next/link";
import { teamData, responsibilityMatrix } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function TeamPage() {
  return (
    <div className="py-24 px-6 bg-brand-offwhite min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Meet the People Behind the Work</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every strong campaign brings together thinkers, creators, strategists, and problem-solvers.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {teamData.map((member) => (
            <Link key={member.slug} href={`/team/${member.slug}`} className="group">
              <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
                <div className="aspect-square bg-brand-pink/50 flex items-center justify-center">
                   <span className="text-brand-black/20 font-bold text-4xl">{member.name.charAt(0)}</span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-xs font-bold text-brand-accent uppercase tracking-wider mb-1">{member.role}</p>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{member.designation}</p>
                  <div className="mt-auto flex items-center text-sm font-semibold text-brand-black group-hover:text-brand-accent transition-colors">
                    View Profile <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Responsibility Matrix */}
        <div>
          <h2 className="text-3xl font-bold mb-8">How Our Team Works</h2>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-brand-pink/30 border-b border-gray-200">
                  <th className="p-4 font-bold text-sm uppercase tracking-wider text-brand-black">Activity</th>
                  <th className="p-4 font-bold text-sm uppercase tracking-wider text-brand-black">Primary Responsibility</th>
                  <th className="p-4 font-bold text-sm uppercase tracking-wider text-brand-black">Supporting Team</th>
                </tr>
              </thead>
              <tbody>
                {responsibilityMatrix.map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4 font-medium">{row.activity}</td>
                    <td className="p-4 text-brand-accent font-semibold">{row.primary}</td>
                    <td className="p-4 text-gray-600">{row.support}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}