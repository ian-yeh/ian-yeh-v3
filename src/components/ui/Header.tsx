import { RevealAnimation } from "@/components/ui/RevealAnimation"

interface HeaderProps {
  text: string
}

const Header = ({ text }: HeaderProps) => {
  const animationDelay = 0.5;
  return (
    <div className="flex justify-between items-center">
      <RevealAnimation>
        <h1 className="w-fit font-jetbrains text-7xl md:text-[144px] leading-none tracking-[0.15em]">{text}</h1>
      </RevealAnimation>
      <div 
        className="text-right tracking-widest flex flex-col justify-between px-4 py-6 h-full text-sm md:text-base"
      >
        <div className="">
          <RevealAnimation delay={animationDelay}><h3>Canadian Citizen</h3></RevealAnimation>
          <RevealAnimation delay={animationDelay + 0.15}><h3>SWE @ McMaster U</h3></RevealAnimation>
        </div>
        <div className="text-slate-500">
          <RevealAnimation delay={animationDelay + 0.3}><h3>GitHub</h3></RevealAnimation>
          <RevealAnimation delay={animationDelay + 0.45}><h3>LinkedIn</h3></RevealAnimation>
        </div>
      </div>
    </div>
  )
}

export default Header
