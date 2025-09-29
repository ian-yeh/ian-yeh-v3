"use client"
import { motion, Variants } from "framer-motion"

interface InnerProps {
  children: React.ReactNode
}

export default function Inner({ children }: InnerProps) {
  
  const anim = (variants: Variants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants
    }
  }
  
  const slide = {
    initial: {
      top: "100vh"
    }, 
    enter: {
      top: "100vh"
    },
    exit: {
      top: "0",
    }
  }
  
  const opacity = {
    initial: {
      opacity: 0
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  }
  
  return (
    <div>
        <motion.div {...anim(slide)} className="fixed inset-0 bg-white z-50" />
        <motion.div {...anim(opacity)} > 
          {children}
        </motion.div>
    </div>
  )
}
