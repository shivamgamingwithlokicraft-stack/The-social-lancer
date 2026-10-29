import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-9xl font-extrabold text-brand-pink mb-4">404</h1>
      <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8 max-w-md">The page you are looking for doesn&apos;t exist or has been moved.</p>
      <Link href="/" className="bg-brand-accent text-white font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition">
        Return Home
      </Link>
    </div>
  );
}