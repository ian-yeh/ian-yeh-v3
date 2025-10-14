import Inner from "@/components/layout/Inner";
import Header from "@/components/ui/Header";
import { RevealAnimation } from "@/components/ui/RevealAnimation";
import TimelineItem from "@/components/ui/TimelineItem";

export default function Home() {
  return (
    <Inner>
      <div className="min-h-[100vh]">
        <div className="px-4">
          <Header text="ABOUT ME" />
        </div>
        <div className="gap-8 mt-8 px-4">
            <RevealAnimation delay={0.7}>
              <h2 className="text-3xl font-normal tracking-widest">
                A snapshot of my journey.
              </h2>
            </RevealAnimation>
        </div>
        <div className="px-4 mt-20">
          <div className="h-[100vh] border-l-[1.5px] space-y-8">
            <TimelineItem 
              role="Software Engineer"
              company="Google Developer Group McMaster"
              period="September 2025-Present"
              description="Coding full-stack apps."
            />
            <TimelineItem 
              role="Software Engineer"
              company="Google Developer Group McMaster"
              period="September 2025-Present"
              description="Coding full-stack apps."
            />
            <TimelineItem 
              role="Software Engineer"
              company="Google Developer Group McMaster"
              period="September 2025-Present"
              description="Coding full-stack apps."
            />
          </div>
        </div>
      </div>
    </Inner>
  );
}

