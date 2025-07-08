"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animation?: "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight";
  delay?: number;
}

export default function ScrollAnimation({ 
  children, 
  className = "", 
  animation = "fadeUp",
  delay = 0 
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-in");
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  const animationClasses = {
    fadeUp: "translate-y-8 opacity-0",
    fadeIn: "opacity-0",
    fadeLeft: "translate-x-8 opacity-0",
    fadeRight: "-translate-x-8 opacity-0",
  };

  return (
    <div
      ref={elementRef}
      className={`${animationClasses[animation]} transition-all duration-700 ease-out ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}