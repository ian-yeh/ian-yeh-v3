import React, { useState, useEffect } from 'react';

function useTypewriter(text: string, speed = 50, delay = 0) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  
  useEffect(() => {
    setDisplayText('');
    setIsComplete(false);
    
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i <= text.length) {
          setDisplayText(text.slice(0, i));
          i++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, speed);
      
      return () => clearInterval(interval);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);
  
  return { displayText, isComplete };
}

function Terminal() {
  const line1 = useTypewriter('$ whoami', 60, 500);
  const line2 = useTypewriter('ian_yeh', 60, line1.isComplete ? 800 : 999999);
  const line3 = useTypewriter('$ ls interests/', 60, line2.isComplete ? 1200 : 999999);
  const line4 = useTypewriter('engineering  athletics  design  cinematography', 40, line3.isComplete ? 800 : 999999);
  const line5 = useTypewriter('$ cat mission.txt', 60, line4.isComplete ? 1500 : 999999);
  const line6 = useTypewriter('Building things for humans, by humans.', 50, line5.isComplete ? 800 : 999999);
  
  const [showCursor, setShowCursor] = useState(true);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="w-full h-full bg-[#F5F1E8] p-8 md:p-12 font-jetbrains text-sm md:text-base overflow-hidden">
      <div className="space-y-2">
        {/* Line 1: Command */}
        <div className="text-[#5C5450]">
          {line1.displayText}
          {!line1.isComplete && showCursor && <span className="text-[#A68A64]">█</span>}
        </div>
        
        {/* Line 2: Output */}
        {line1.isComplete && (
          <div className="text-[#8B7355] pl-0">
            {line2.displayText}
            {!line2.isComplete && showCursor && <span className="text-[#A68A64]">█</span>}
          </div>
        )}
        
        {/* Empty line for spacing */}
        {line2.isComplete && <div className="h-4"></div>}
        
        {/* Line 3: Command */}
        {line2.isComplete && (
          <div className="text-[#5C5450]">
            {line3.displayText}
            {!line3.isComplete && showCursor && <span className="text-[#A68A64]">█</span>}
          </div>
        )}
        
        {/* Line 4: Output */}
        {line3.isComplete && (
          <div className="text-[#8B7355] pl-0">
            {line4.displayText}
            {!line4.isComplete && showCursor && <span className="text-[#A68A64]">█</span>}
          </div>
        )}
        
        {/* Empty line for spacing */}
        {line4.isComplete && <div className="h-4"></div>}
        
        {/* Line 5: Command */}
        {line4.isComplete && (
          <div className="text-[#5C5450]">
            {line5.displayText}
            {!line5.isComplete && showCursor && <span className="text-[#A68A64]">█</span>}
          </div>
        )}
        
        {/* Line 6: Output */}
        {line5.isComplete && (
          <div className="text-[#8B7355] pl-0">
            {line6.displayText}
            {!line6.isComplete && showCursor && <span className="text-[#A68A64]">█</span>}
          </div>
        )}
        
        {/* Final cursor */}
        {line6.isComplete && (
          <div className="text-[#5C5450] mt-4">
            $ {showCursor && <span className="text-[#A68A64]">█</span>}
          </div>
        )}
      </div>
    </div>
  );
}

export default Terminal;
