import Inner from "@/components/layout/Inner";
import Header from "@/components/ui/Header";
import { RevealAnimation } from "@/components/ui/RevealAnimation";
import TimelineItem from "@/components/ui/TimelineItem";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Inner>
      <div className="min-h-[100vh]">
        <div className="px-4">
          <Header text="ABOUT ME" />
        </div>
        <div className="gap-8 mt-8 px-4">
            <RevealAnimation delay={0.7}>
              <div className="grid grid-cols-2">
                <h2 className="text-3xl font-normal tracking-widest">
                  A snapshot of my journey.
                </h2>
                {/** 
                 * 
                <Image 
                  src={"/ian-picture.jpg"}
                  alt="Ian Headshot"
                  width={500}
                  height={300}
                  className="object-cover rounded-4xl h-64 overflow-hidden"
                />
                */}
              </div>
            </RevealAnimation>
        </div>
        <div className="mt-16 flex flex-col items-center">
          <motion.div 
            className="min-h-[100vh] border-l-[1.5px] space-y-16 w-[80vw]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
          >
            <TimelineItem 
              role="Full-Stack Software Engineer"
              company="Google Developer Group McMaster"
              period="October 2025-Present"
              description={["Coding full-stack apps."]}
              imageUrl="/GDSC.png"
              delay={0.4}
            />
            <TimelineItem 
              role="Operations Software Engineer"
              company="McMaster Solar Car Project"
              period="September 2025-Present"
              description={["Coding full-stack apps."]}
              imageUrl="/McMasterSolarCar.png"
              delay={0.6}
            />
            <TimelineItem 
              role="Software Engineer Intern"
              company="BridgeSystems.net"
              period="June 2025-August 2025"
              description={["Coding full-stack apps."]}
              imageUrl="/bridgesystems_net.png"
              delay={0.8}
            />
          </motion.div>
        </div>
      </div>
    </Inner>
  );
}

