import Inner from "@/components/layout/Inner";
import Header from "@/components/ui/Header";

export default function Home() {
  return (
    <Inner>
      <div className="min-h-[100vh]">
        <Header text="ABOUT ME" />
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
      </div>
    </Inner>
  );
}

