"use client";

import { useEffect, ReactNode } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface AOSProviderProps {
  children: ReactNode;
}

export default function AOSProvider({ children }: AOSProviderProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return <>{children}</>;
}