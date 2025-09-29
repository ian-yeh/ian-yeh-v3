import Inner from "@/components/layout/Inner";
import Link from "next/link";

export default function Home() {
  return (
    <Inner>
      <div className="flex justify-between items-center">
        <h1 className="font-jetbrains text-[200px] leading-none tracking-[0.15em]">ABOUT ME</h1>
        <div className="px-3 text-right tracking-widest flex flex-col justify-between h-full">
          <div className="mb-12">
            <h3>Canadian Citizen</h3>
            <h3>SWE @ McMaster U</h3>
          </div>
          <div className="text-slate-500">
            <h3>GitHub</h3>
            <h3>LinkedIn</h3>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 mt-8 px-4">
        <div className="flex flex-col gap-6 justify-end">
          <h2 className="text-3xl font-normal tracking-widest">
            I&apos;m a full-stack software engineer from Toronto, Canada.
          </h2>
          <p className="text-slate-600 font-light tracking-widest text-xl">
            I care about building things for humans, by humans.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full w-fit tracking-widest hover:bg-slate-800">
            View my work
          </button>
        </div>
      </div>

      {/*FOOTER*/}
      <div className="fixed bottom-8 -translate-x-1/2 left-1/2">
        <nav className="border-2 rounded-full px-8 py-3 flex gap-8">
          <Link href="/" className="tracking-widest transition-colors">Home</Link>
          <Link href="/about" className="tracking-widest transition-colors">About</Link>
          <Link href="/contact" className="tracking-widest transition-colors">Contact</Link>
        </nav>
      </div>
    </Inner>
  );
}

