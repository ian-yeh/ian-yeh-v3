import { RevealAnimation } from "@/components/ui/RevealAnimation"

interface HeaderProps {
  text: string
}

const Header = ({ text }: HeaderProps) => {
  const animationDelay = 0.5;
  return (
    <div className="flex justify-between items-center mt-4">
      <RevealAnimation>
        <h1 className="w-fit text-[180px] leading-[0.85] tracking-[-0.02em]">
          {text}
        </h1>
      </RevealAnimation>
      <div 
        className="text-right tracking-widest flex flex-col justify-between px-4 py-6 h-full text-sm md:text-base"
      >
      </div>
    </div>
  )
}

export default Header
