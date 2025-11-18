import { RevealAnimation } from "@/components/ui/RevealAnimation"

interface HeaderProps {
  text: string
}

const Header = ({ text }: HeaderProps) => {
  const animationDelay = 0.5;
  return (
    <div className="flex justify-between items-center mt-2">
      <RevealAnimation>
        <h1 className="w-fit text-[88px] md:text-[180px] leading-[0.85] tracking-[-0.02em]">
          {text}
        </h1>
      </RevealAnimation>
    </div>
  )
}

export default Header
