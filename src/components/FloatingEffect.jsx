"use client";

import { useEffect } from "react";

const FloatingEffect = () => {

  useEffect(() => {

    const handleMouseMove = (e) => {
    const x = (e.clientX - window.innerWidth / 2) / 50;
    const y = (e.clientY - window.innerHeight / 2) / 50;

    document.querySelectorAll(".floating-svg").forEach((el, i) => {
      const speed = 1 + i * 0.2;
        el.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => window.removeEventListener("mousemove", handleMouseMove);
  
  }, []);

  return null;
  
};

export default FloatingEffect;
