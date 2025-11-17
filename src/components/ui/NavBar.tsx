"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"

interface HoverLinkProps {
  text: string
  route: string
}

const HoverLink = ({ text, route }: HoverLinkProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const textRef = useRef<HTMLParagraphElement>(null)
  const [textHeight, setTextHeight] = useState(0)

  useEffect(() => {
    if (textRef.current) {
      setTextHeight(textRef.current.offsetHeight)
    }
  }, [text])

  return (
    <Link 
      href={route} 
      className="tracking-widest"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden flex items-center">
        <motion.div
          animate={{ y: isHovered ? -textHeight*2 : 0 }}
          className="flex flex-col h-6 hover:text-slate-600"
          style={{ gap: textHeight }}
        >
          <p ref={textRef}>{text}</p>
          <p>{text}</p>
        </motion.div>
      </div>
    </Link>
  )
}

const NavBar = () => {
  return (
    <div>
      {/*FOOTER*/}
      <div className="bg-gray-200 rounded-full fixed bottom-8 -translate-x-1/2 left-1/2">
        <nav className="rounded-full px-8 py-3 flex gap-8">
          <HoverLink text={"Home"} route={"/"} />
          <HoverLink text={"About"} route={"/about"} />
          <HoverLink text={"Contact"} route={"/contact"} />
        </nav>
      </div>
    </div>
  )
}

export default NavBar
