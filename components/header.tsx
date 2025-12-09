"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-50 py-6
        transition-all duration-300 ease-in-out
        ${scrolled ? "bg-white " : "bg-[#EDF7FF]"}
      `}
    >
      {/* ✅ Animate CONTENT, not header */}
      <div
        className={`
          container mx-auto px-4
          transition-all duration-300 ease-in-out
          ${scrolled ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-90"}
        `}
      >
        {/* ===== Desktop Header ===== */}
        <div className="hidden lg:flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold">
            Lawsy
          </Link>

          <nav>
            <ul className="flex items-center gap-8 font-normal">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/practice-areas">Practice Areas</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>

          <Button className="bg-[#027b7a] hover:bg-[#027b7a]/80 rounded-lg lg:py-6">
            Book A Consultation
          </Button>
        </div>

        {/* ===== Mobile Header ===== */}
        <div className="flex lg:hidden items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            Lawsy
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-[280px] p-6">
              <ul className="space-y-4 font-semibold">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/practice-areas">Practice Areas</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>

              <Button className="w-full mt-6 bg-[#027b7a] hover:bg-[#027b7a]/70">Book A Consultation</Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
