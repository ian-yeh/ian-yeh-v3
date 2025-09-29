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
            <h3 className="font-jetbrains text-5xl tracking-widest">{role}</h3>
            <p className="font-jetbrains text-3xl text-slate-800 tracking-widest">{company}</p>
            <p className="text-sm text-gray-500 mt-1">{period}</p>
          </div>
          <p className="text-gray-300 leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>
      </RevealAnimation>
    </div>
  );
}
