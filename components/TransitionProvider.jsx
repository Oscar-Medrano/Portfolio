"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const BLOCK_SIZE = 30;
const ANIMATION_DURATION = 0.3;

const TransitionProvider = ({ children }) => {
  const pathname = usePathname();
  const containerRef = useRef(null);
  const gridRef = useRef(null);
  const [gridSize, setGridSize] = useState({ cols: 20, rows: 16 });
  const [isAnimating, setIsAnimating] = useState(false);
  const prevPathname = useRef(pathname);

  const calculateGrid = useCallback(() => {
    if (!containerRef.current || typeof window === 'undefined') {
      return { cols: 20, rows: 16 };
    }
    
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const cols = Math.ceil(width / BLOCK_SIZE) + 2;
    const rows = Math.ceil(height / BLOCK_SIZE) + 2;
    
    return { cols, rows };
  }, []);

  const createGridBlocks = useCallback(() => {
    if (!gridRef.current) return;
    
    const { cols, rows } = calculateGrid();
    setGridSize({ cols, rows });
  }, [calculateGrid]);

  const animateLeave = useCallback((callback) => {
    setIsAnimating(true);
    const blocks = gridRef.current?.querySelectorAll('.transition-block');
    
    if (!blocks || blocks.length === 0) {
      callback();
      return;
    }

    gsap.fromTo(blocks, 
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: ANIMATION_DURATION, 
        stagger: {
          amount: 0.2,
          from: "random",
        },
        ease: "power2.inOut",
        onComplete: () => {
          callback();
        }
      }
    );
  }, []);

  const animateEnter = useCallback(() => {
    const blocks = gridRef.current?.querySelectorAll('.transition-block');
    
    if (!blocks || blocks.length === 0) {
      setIsAnimating(false);
      return;
    }

    gsap.to(blocks, { 
      opacity: 0, 
      duration: ANIMATION_DURATION, 
      stagger: {
        amount: 0.2,
        from: "random",
      },
      ease: "power2.inOut",
      onComplete: () => {
        setIsAnimating(false);
      }
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      createGridBlocks();
    };
    
    createGridBlocks();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [createGridBlocks]);

  useEffect(() => {
    if (pathname !== prevPathname.current) {
      prevPathname.current = pathname;
      
      // Trigger leave animation first
      animateLeave(() => {
        // After leave, trigger enter animation
        animateEnter();
      });
    }
  }, [pathname, animateLeave, animateEnter]);

  const totalBlocks = gridSize.cols * gridSize.rows;

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden rounded-3xl">
      {children}
          <div 
            ref={gridRef}
            className="transition-grid absolute inset-0 pointer-events-none"
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${gridSize.cols}, ${BLOCK_SIZE}px)`,
              gridTemplateRows: `repeat(${gridSize.rows}, ${BLOCK_SIZE}px)`,
              zIndex: 10,
            }}
          >
            {Array.from({ length: totalBlocks }).map((_, i) => (
              <div 
                key={i} 
                className="transition-block bg-white"
                style={{ opacity: 0 }}
              />
            ))}
          </div>
    </div>
  );
};

export default TransitionProvider;
