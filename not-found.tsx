import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] flex flex-col items-center justify-center text-[#F5F5F5] font-sans">
      <h1 className="text-6xl font-bold text-[#7C3AED] mb-4">404</h1>
      <h2 className="text-2xl mb-6">System Off-Grid</h2>
      <p className="text-[#A1A1AA] mb-8 text-center max-w-md">
        The cinematic experience you are looking for has not been fully rendered yet.
      </p>
      <Link 
        href="/" 
        className="px-6 py-3 border border-[#7C3AED] text-[#7C3AED] rounded-full hover:bg-[#7C3AED] hover:text-[#0B0B0F] transition duration-300"
      >
        Return to Base
      </Link>
    </div>
  );
}
