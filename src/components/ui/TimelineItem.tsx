import { RevealAnimation } from "@/components/ui/RevealAnimation";
import Image from "next/image";

interface TimelineItemProps {
  role: string;
  company: string;
  period: string;
  description: string[];
  delay?: number;
  imageUrl: string
}

export default function TimelineItem({
  role,
  company,
  period,
  description,
  imageUrl,
  delay = 0,
}: TimelineItemProps) {
  return (
    <div className="relative pl-6 sm:pl-8 md:pl-10 pb-8 sm:pb-10 md:pb-12 last:pb-0">
      {/* Timeline dot */}
      <div className="absolute left-[-6px] sm:left-[-7px] top-1 sm:top-1.5 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-black rounded-full border-2 sm:border-[3px] border-gray-900 z-10" />
      <div className="grid grid-cols-[auto_1fr] gap-4">
        <RevealAnimation delay={delay + 0.2}>
          <Image 
            src={imageUrl}
            alt="Company Logo"
            width={300}
            height={200}
            className="object-cover rounded-2xl h-35 w-80"
          />
        </RevealAnimation>
        <RevealAnimation delay={delay}>
          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            <div className="space-y-0.5 sm:space-y-1">
              <h3 className="font-jetbrains text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wide sm:tracking-widest">
                {role}
              </h3>
              <p className="font-jetbrains text-base sm:text-lg md:text-xl lg:text-2xl text-slate-800 tracking-wide sm:tracking-widest">
                {company}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 mt-4 sm:mt-1.5 tracking-widest">
                {period}
              </p>
            </div>
            <ul className="text-xs sm:text-sm md:text-base tracking-widest leading-relaxed max-w-full md:max-w-xl lg:max-w-2xl pt-0.5 sm:pt-1 space-y-1">
              {description.map((item, index) => (
                <li key={index} className="flex gap-2">
                  <span>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </RevealAnimation>
      </div>
      
    </div>
  );
}