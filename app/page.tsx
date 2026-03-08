"use client";
import Image from "next/image";
import Link from "next/link";
import ServiceImg2 from "@/public/assets/images/service4-img2.webp";
import ServiceImg3 from "@/public/assets/images/service4-img3.webp";
import ServiceImg4 from "@/public/assets/images/service4-img1.webp";
import WorkLaw1 from "@/public/assets/images/work-law1.svg";
import WorkLaw2 from "@/public/assets/images/work-law2.svg";
import WorkLaw3 from "@/public/assets/images/work-law3.svg";
import PeraOne from "@/public/assets/images/law1.webp";
import PeraTwo from "@/public/assets/images/law2.webp";
import PeraThree from "@/public/assets/images/law3.webp";
import {
  CheckIcon,
  Users,
  HeartHandshake,
  ShieldCheck,
  Briefcase,
} from "lucide-react";
import Footer from "@/components/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center bg-[#EDF7FF] font-sans dark:bg-black">
        <div className="w-full">
          {/* ===== HERO CAROUSEL ===== */}
          <div className="relative w-full overflow-hidden min-h-[600px] lg:min-h-[700px]">
            <Swiper
              modules={[Autoplay, EffectFade, Pagination]}
              effect="fade"
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop={true}
              className="w-full min-h-[600px] lg:min-h-[700px]"
            >
              {[
                {
                  img: PeraOne,
                  heading: ["Protect Your", "Future Life,", "Our Best Lawyers"],
                  sub: "Every case is unique, and I approach each with meticulous attention to detail. Whether you're facing charges related to DUI, drug offenses, or assault.",
                },
                {
                  img: PeraTwo,
                  heading: [
                    "Justice Is",
                    "Not A Privilege,",
                    "It's Your Right",
                  ],
                  sub: "We stand beside you through every legal battle — from courtrooms to settlements — ensuring your voice is heard and your rights fully defended.",
                },
                {
                  img: PeraThree,
                  heading: ["Expert Counsel,", "Trusted By", "Thousands"],
                  sub: "With decades of combined experience across multiple legal disciplines, our team delivers results-driven representation you can count on.",
                },
              ].map((slide, i) => (
                <SwiperSlide key={i}>
                  {/* Background Image */}
                  <div className="relative w-full min-h-[600px] lg:min-h-[700px]">
                    <Image
                      src={slide.img}
                      alt={`hero-${i}`}
                      fill
                      priority={i === 0}
                      className="object-cover object-center"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/55" />

                    {/* Text on top */}
                    <div className="absolute inset-0 flex items-center">
                      <div className="md:max-w-6xl w-full mx-auto px-6 lg:px-8">
                        <div className="max-w-2xl space-y-6">
                          <h1 className="text-[48px]! md:text-[68px]! xl:text-[82px]! font-black leading-none tracking-tight text-white pro">
                            <span className="block">{slide.heading[0]}</span>
                            <span className="block text-[#4dd9d8]">
                              {slide.heading[1]}
                            </span>
                            <span className="block">{slide.heading[2]}</span>
                          </h1>
                          <p className="text-white/75 text-base md:text-lg leading-relaxed">
                            {slide.sub}
                          </p>
                          <div className="flex flex-wrap gap-4">
                            <Link
                              href="/about"
                              className="inline-flex text-white items-center gap-2 rounded-md px-7 py-3.5 font-semibold bg-[#027b7a] hover:bg-[#025f5e] transition"
                            >
                              Learn More
                              <i className="fa-regular fa-arrow-right"></i>
                            </Link>
                            <Link
                              href="/contact"
                              className="inline-flex text-white items-center gap-2 rounded-md px-7 py-3.5 font-semibold border border-white/60 hover:bg-white hover:text-[#027b7a] transition"
                            >
                              Contact Us
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* ===== BELOW HERO CONTENT ===== */}
          <div className="md:max-w-6xl mx-auto px-4">
            <div className="about4-section-area sp1 py-16">
              <div className="">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  {/* Left Column - Boxes */}
                  <div className="lg:w-1/2 flex flex-col gap-8">
                    {[
                      { label: "Legal Expertise", duration: "800" },
                      { label: "Protection & Rights", duration: "1000" },
                      { label: "Courtroom Representation", duration: "1200" },
                    ].map((box, i) => (
                      <div
                        key={i}
                        className="about4-single-boxarea relative p-6 rounded-xl bg-white shadow-lg flex items-start gap-4"
                        data-aos="fade-up"
                        data-aos-duration={box.duration}
                        data-aos-easing="linear"
                      >
                        <div className="bg-[#027b7a]/15 sm:w-[60px] rounded-full md:w-[50px] md:h-12 lg:w-[100px] w-[100px] h-12 lg:h-16 flex justify-center items-center">
                          <div className="bg-[#027b7a] rounded-full w-7 h-7 lg:w-8 md:w-7 md:h-7 lg:h-8 flex items-center justify-center">
                            <CheckIcon className="w-5 h-5 text-neutral-100 shrink-0 mt-1" />
                          </div>
                        </div>
                        <div className="about4-single-content-area">
                          <a
                            href="#"
                            className="text-lg font-semibold text-gray-900 hover:text-[#027b7a]"
                          >
                            {box.label}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right Column - Text */}
                  <div className="lg:w-1/2 flex flex-col gap-4">
                    <span
                      className="text-[#027b7a] bg-[#027b7a]/16 w-fit px-3 py-1 font-medium"
                      data-aos="fade-right"
                      data-aos-duration="600"
                    >
                      Why Choose Astute Law Office?
                    </span>
                    <p
                      className="text-gray-600 text-base"
                      data-aos="fade-right"
                      data-aos-duration="900"
                    >
                      Your case deserves personalized attention, and that's
                      exactly what Astute Law Office offer. I will be your best
                      legal advocates in the pursuit of justice.
                    </p>
                    <p
                      className="text-gray-600 text-base m-0"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                    >
                      I know that every case is unique, and I tailor my approach
                      to your <br className="hidden lg:inline" />
                      specific circumstances, leveraging my legal expertise and
                      courtroom.
                    </p>
                    <div
                      className="mt-4"
                      data-aos="fade-right"
                      data-aos-duration="1200"
                    >
                      <a
                        href="/about"
                        className="inline-block bg-[#027b7a] text-white px-6 py-3 rounded-none font-medium hover:bg-[#027b7a]/80 transition"
                      >
                        Request Case Evolution{" "}
                        <i className="fa-regular fa-arrow-right ml-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="lg:w-5/12 mb-8">
            <span className="text-sm text-gray-500 block mb-2">
              Practice Areas
            </span>
            <h2 className=" md:text-[34px]! sm:text-[32px]! text-[28px]! lg:text-[40px]! font-bold text-gray-900 pro">
              The Power of a Resilient Legal Strategy
            </h2>
          </div>

          {/* Carousel */}
          <div className="w-full overflow-x-hidden py-4 relative">
            <div className="flex w-max animate-scroll">
              {/* Your cards */}
              {[
                {
                  gradient: "from-[#0a3b3f] via-[#0d5257] to-[#1a7a6e]",
                  title: "Family Law",
                  icon: Users,
                  desc: "Providing compassionate and expert legal guidance for family-related matters including divorce, custody, and adoption.",
                },
                {
                  gradient: "from-[#1a3a5c] via-[#1a5272] to-[#0d6e8a]",
                  title: "Mental Health Law",
                  icon: HeartHandshake,
                  desc: "Protecting the rights of individuals with mental health concerns through legal advocacy and representation.",
                },
                {
                  gradient: "from-[#3a1a0a] via-[#6b3515] to-[#8a4d1a]",
                  title: "Corporate & Commercial Law",
                  icon: Briefcase,
                  desc: "Providing legal solutions for businesses, including contracts, compliance, and commercial disputes.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="relative shrink-0 w-80 h-80 rounded-none overflow-hidden shadow-md group cursor-pointer mr-3"
                >
                  {/* Icon background instead of image */}
                  <div
                    className={`w-full h-full bg-gradient-to-br ${service.gradient} flex items-center justify-center relative overflow-hidden`}
                  >
                    {/* Decorative circles for depth */}
                    <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white opacity-5" />
                    <div className="absolute -bottom-10 -left-10 w-52 h-52 rounded-full bg-white opacity-5" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white opacity-5" />
                    {/* Center icon */}
                    <service.icon className="w-20 h-20 text-white opacity-40 relative z-10" />
                  </div>

                  <div
                    className="absolute bottom-0 left-0 right-0 mx-4 bg-white bg-opacity-90
      transition-all duration-500 my-5
      h-20 group-hover:h-48
      overflow-hidden flex flex-col items-center justify-center px-4"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <service.icon className="lg:w-9 lg:h-9 w-6 h-6 text-[#0a3b3f] shrink-0" />
                      <h3 className="lg:text-[22px] md:text-[20px] text-[19px] font-semibold text-black pro1 text-center">
                        {service.title}
                      </h3>
                    </div>
                    <div className="mt-3 text-center max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-gray-700 text-sm mb-3">
                        {service.desc}
                      </p>
                      <a
                        href="#"
                        className="text-[#0a3b3f] font-medium inline-flex items-center"
                      >
                        Read More
                        <i className="fa-regular fa-arrow-right ml-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}

              {[
                {
                  gradient: "from-[#0a3b3f] via-[#0d5257] to-[#1a7a6e]",
                  title: "Family Law",
                  icon: Users,
                  desc: "Providing compassionate and expert legal guidance for family-related matters including divorce, custody, and adoption.",
                },
                {
                  gradient: "from-[#1a3a5c] via-[#1a5272] to-[#0d6e8a]",
                  title: "Mental Health Law",
                  icon: HeartHandshake,
                  desc: "Protecting the rights of individuals with mental health concerns through legal advocacy and representation.",
                },
                {
                  gradient: "from-[#3a1a0a] via-[#6b3515] to-[#8a4d1a]",
                  title: "Corporate & Commercial Law",
                  icon: Briefcase,
                  desc: "Providing legal solutions for businesses, including contracts, compliance, and commercial disputes.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="relative shrink-0 w-80 h-80 rounded-none overflow-hidden shadow-md group cursor-pointer mr-3"
                >
                  {/* Icon background instead of image */}
                  <div
                    className={`w-full h-full bg-gradient-to-br ${service.gradient} flex items-center justify-center relative overflow-hidden`}
                  >
                    {/* Decorative circles for depth */}
                    <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white opacity-5" />
                    <div className="absolute -bottom-10 -left-10 w-52 h-52 rounded-full bg-white opacity-5" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white opacity-5" />
                    {/* Center icon */}
                    <service.icon className="w-20 h-20 text-white opacity-40 relative z-10" />
                  </div>

                  <div
                    className="absolute bottom-0 left-0 right-0 mx-4 bg-white bg-opacity-90
      transition-all duration-500 my-5
      h-20 group-hover:h-48
      overflow-hidden flex flex-col items-center justify-center px-4"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <service.icon className="lg:w-9 lg:h-9 w-6 h-6 text-[#0a3b3f] shrink-0" />
                      <h3 className="lg:text-[22px] md:text-[20px] text-[19px] font-semibold text-black pro1 text-center">
                        {service.title}
                      </h3>
                    </div>
                    <div className="mt-3 text-center max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-gray-700 text-sm mb-3">
                        {service.desc}
                      </p>
                      <a
                        href="#"
                        className="text-[#0a3b3f] font-medium inline-flex items-center"
                      >
                        Read More
                        <i className="fa-regular fa-arrow-right ml-1"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-lg mx-auto mb-12">
            <span className="text-sm text-center block mb-2 px-3 py-1 text-[#027b7a] bg-[#027b7a]/16 w-fit mx-auto ">
              How It Works
            </span>
            <h2 className="text-3xl font-bold text-gray-900">
              Support in Every Case
            </h2>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Investigation",
                desc: " .",
                icon: WorkLaw1,
              },
              {
                step: "02",
                title: "Legal Representation",
                desc: " .",
                icon: WorkLaw2,
              },
              {
                step: "03",
                title: "Compliance & Solution",
                desc: " .",
                icon: WorkLaw3,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-white h-[245px] rounded-lg p-6 shadow-md overflow-hidden transition-colors duration-500 hover:bg-[#027b7a]"
              >
                {/* Icon circle */}
                <div className="absolute top-0 left-0">
                  <div className="w-20 h-20 bg-[#027b7a] rounded-br-full flex items-center justify-center transition-colors duration-500 group-hover:bg-white/20">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>

                {/* Step number */}
                <span className="absolute top-4 right-6 text-5xl font-bold text-gray-200 transition-colors duration-500 group-hover:text-white/30">
                  {item.step}
                </span>

                {/* Content */}
                <div className="relative z-10 mt-16">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 transition-colors duration-500 group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-[17px] md:text-sm transition-colors duration-500 group-hover:text-white/90">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-teal-700 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center">
            <div className="max-w-2xl text-center">
              <h2 className="text-3xl! md:text-4xl! font-bold text-white mb-4 pro">
                Ready to Fight for Your Rights?
              </h2>

              <p className="text-white/90 text-base md:text-lg mb-8">
                With years of experience, I&apos;ve successfully defended
                countless clients, securing their rights and helping them
                navigate the legal system.
              </p>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-teal-700 font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:bg-teal-100 hover:gap-3"
              >
                Contact
                <i className="fa-regular fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
