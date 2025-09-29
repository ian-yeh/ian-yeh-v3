import Inner from "@/components/layout/Inner";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { motion } from "framer-motion";
import Header from "@/components/ui/Header";

export default function Home() {
  return (
    <Inner>
      <div className="h-[100vh]">
        <Header text="CONTACT" />
        <div className="grid grid-cols-2 gap-8 mt-8 px-4">
          <div className="flex flex-col gap-6 justify-end">
            <h2 className="text-3xl font-normal tracking-widest">
              I&apos;m a full-stack software engineer from Toronto, Canada.
            </h2>
            <p className="text-slate-600 font-light tracking-widest text-xl">
              I care about building things for humans, by humans.
            </p>
            <PrimaryButton />
          </div>
        </div>
      </div>
    </Inner>
  );
}
