import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  icons: string; // Assuming icons is a string path to the image
}

export default function ServiceCard({
  title,
  description,
  icons,
}: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-[#f5f3ef] p-8 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 hover:shadow-2xl hover:bg-[#027b7a]">
      {/* Soft overlay fade effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Top Right Arrow Circle */}
      <div className="absolute group-hover:bg-[#fff] rounded-full -top-2 -right-2 z-1000">
        {/* White Outer Halo */}
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white">
          {/* Inner Circle */}
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f5f3ef] transition-all duration-500 group-hover:bg-[#027b7a] group-hover:scale-110">
            <ArrowUpRight className="h-7 w-7 text-gray-700 transition-all duration-500 group-hover:rotate-45 group-hover:text-[#fff]" />
          </div>
        </div>
      </div>


      {/* Icon Circle */}
      <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white transition-all duration-500 group-hover:scale-110">
        <Image
          src={icons}
          alt={title}
          width={28}
          height={28}
          className="object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="relative z-10 mb-4 text-xl font-semibold text-gray-900 transition-colors duration-500 group-hover:text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="relative z-10 mb-6 text-sm leading-relaxed text-gray-600 transition-colors duration-500 group-hover:text-white/90">
        {description}
      </p>

      {/* Read More */}
      <div className="relative z-10 flex items-center gap-2 text-sm font-medium text-gray-900 transition-all duration-500 group-hover:gap-3 group-hover:text-white">
        Read More
        <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </div>
  );
}
