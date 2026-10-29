import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="bg-brand-pink py-32 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-brand-black tracking-tight">
          Click. Connect. <span className="text-brand-accent">Convert.</span>
        </h1>
        <p className="text-xl text-brand-black/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          We help brands build a stronger digital presence through social media strategy, creative content, and storytelling.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact" className="bg-brand-accent text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition">
            Let's Talk
          </Link>
          <Link href="/work" className="border-2 border-brand-black font-bold py-3 px-8 rounded-md hover:bg-brand-black hover:text-white transition">
            Explore Work
          </Link>
        </div>
      </section>
    </div>
  );
}