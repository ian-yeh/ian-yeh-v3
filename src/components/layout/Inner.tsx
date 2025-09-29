"use client"
import { motion, Variant } from "framer-motion"
import Link from "next/link"

interface InnerProps {
  children: React.ReactNode
}

type AnimationVariants = {
  initial: Variant
  enter: Variant
  exit: Variant
}

export default function Inner({ children }: InnerProps) {

  const anim = (variants: AnimationVariants) => {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants
    }
  }

  const slide: AnimationVariants = {
    initial: {
      top: "100vh"
    }, 
    enter: {
      top: "100vh"
    },
    exit: {
      top: "0",
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  }

  const opacity: AnimationVariants = {
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
    }
  }

  const perspective: AnimationVariants = {
    initial: {
      y: 0,
      scale: 1,
      opacity: 1
    },
    enter: {
      y: 0,
      scale: 1,
      opacity: 1
    },
    exit: {
      y: -100,
      scale: 0.9,
      opacity: 0.5,
      transition: {
        duration: 1.3,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  }

  return (
    <div className="bg-black">
      <motion.div {...anim(slide)} className="fixed inset-0 bg-white z-50" />
      <motion.div {...anim(perspective)} className="bg-white">
        <motion.div {...anim(opacity)} > 
          {children}


          {/*FOOTER*/}
          <div className="fixed bottom-8 -translate-x-1/2 left-1/2">
            <nav className="border-2 rounded-full px-8 py-3 flex gap-8">
              <Link href="/" className="tracking-widest transition-colors">Home</Link>
              <Link href="/about" className="tracking-widest transition-colors">About</Link>
              <Link href="/contact" className="tracking-widest transition-colors">Contact</Link>
            </nav>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
