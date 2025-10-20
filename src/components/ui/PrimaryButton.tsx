"use client"
import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"

const PrimaryButton = ({ children = "View my work" }) => {
  const [isHovered, setIsHovered] = useState(false)
  const textRef = useRef<HTMLParagraphElement>(null)
  const [textHeight, setTextHeight] = useState(0)

  useEffect(() => {
    if (textRef.current) {
      setTextHeight(textRef.current.offsetHeight)
    }
  }, [children])

  return (
    <div>
      {/* Animated button for desktop */}
      <motion.button 
        className="hidden md:flex bg-black text-white h-12 px-6 py-3 rounded-full w-fit tracking-widest hover:bg-slate-800 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.03 }}
      >
        <motion.div
          animate={{ y: isHovered ? -textHeight*2 : 0 }}
          className="flex flex-col"
          style={{ gap: textHeight }}
        >
          <p ref={textRef}>{children}</p>
          <p>{children}</p>
        </motion.div>
      </motion.button>

      {/* Simple button for mobile */}
      <button className="md:hidden bg-black text-white h-12 px-6 py-3 rounded-full w-fit tracking-widest text-sm">
        {children}
      </button>
    </div>
  )
}

export default PrimaryButton