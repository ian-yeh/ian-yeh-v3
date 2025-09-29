import { RevealAnimation } from "@/components/ui/RevealAnimation";

interface TimelineItemProps {
  role: string;
  company: string;
  period: string;
  description: string;
  delay?: number;
}

export default function TimelineItem({
  role,
  company,
  period,
  description,
  delay = 0,
}: TimelineItemProps) {
  return (
    <div className="relative pl-10 pb-16 last:pb-0">
      {/* Timeline dot */}
      <div className="absolute left-[-10px] top-1 w-[18px] h-[18px] bg-black rounded-full border-4 border-gray-900 z-10" />
      
      <RevealAnimation delay={delay}>
        <div className="space-y-2">
          <div>
            <div className="flex items-baseline space-x-6">
              <h3 className="font-jetbrains text-3xl font-bold tracking-widest">{role}</h3>
              <p className="font-jetbrains text-xl text-gray-500 mt-1">{period}</p>
            </div>
            <p className="font-jetbrains text-2xl text-slate-800 tracking-widest mt-4">{company}</p>
          </div>
          <p className="text-black text-xl mt-8 leading-relaxed tracking-widest max-w-2xl">
            {description}
          </p>
        </div>
      </RevealAnimation>
    </div>
  );
}
