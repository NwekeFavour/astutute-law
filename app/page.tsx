"use client";
import Image from "next/image";
import Link from "next/link";
import PeraOne from "@/public/assets/images/law1.webp";
import PeraTwo from "@/public/assets/images/law2.webp";
import PeraThree from "@/public/assets/images/law3.webp";
import {
  CheckIcon,
  Users,
  HeartHandshake,
  ShieldCheck,
  Briefcase,
  ScrollText,
  MessageSquare,
  ClipboardCheck,
  Scale,
  HandCoins,
} from "lucide-react";
import Footer from "@/components/footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import BusinessLawImg from "@/public/assets/images/image1.png";
import FamilyLawImg from "@/public/assets/images/image2.png";
import MentalHealthImg from "@/public/assets/images/image3.png";
import WillsEstatesImg from "@/public/assets/images/image4.png";
import LegalAdvocacyImg from "@/public/assets/images/image5.png";
declare module "swiper/css";
declare module "swiper/css/effect-fade";
declare module "swiper/css/pagination";

// ===== Practice Areas (5, per Website_Notes.docx "Legal Expertise" section) =====
const practiceAreas = [
  {
    gradient: "from-[#3a1a0a] via-[#6b3515] to-[#8a4d1a]",
    title: "Business Law",
    icon: Briefcase,
    image: BusinessLawImg,
    desc: "Comprehensive legal support for entrepreneurs, professionals, and businesses at every stage — business formation, corporate structuring, shareholder and partnership agreements, commercial contracts, and ongoing corporate governance.",
  },
  {
    gradient: "from-[#0a3b3f] via-[#0d5257] to-[#1a7a6e]",
    title: "Family Law",
    icon: Users,
    image: FamilyLawImg,
    desc: "Family law matters are handled with diligence and sensitivity, covering separation and divorce, parenting arrangements, child and spousal support, and property division — with a focus on practical resolutions that safeguard your interests.",
  },
  {
    gradient: "from-[#1a3a5c] via-[#1a5272] to-[#0d6e8a]",
    title: "Mental Health Law",
    icon: HeartHandshake,
    image: MentalHealthImg,
    desc: "Guidance and representation in matters involving mental health legislation, including capacity, consent to treatment, and patient rights — supporting clients through healthcare institutions and administrative tribunals with fairness and dignity.",
  },
  {
    gradient: "from-[#4a1a5c] via-[#5c1a72] to-[#7a2a8a]",
    title: "Wills and Estates",
    icon: ScrollText,
    image: WillsEstatesImg,
    desc: "Thoughtful estate planning through the preparation of wills and powers of attorney, plus assistance with estate administration and probate — guiding clients through every legal and practical aspect with clarity and care.",
  },
  {
    gradient: "from-[#1a3a1a] via-[#2a5c2a] to-[#3a7a3a]",
    title: "Legal Advocacy",
    icon: ShieldCheck,
    image: LegalAdvocacyImg,
    desc: "Strategic guidance and careful advocacy across core practice areas, supporting individuals, families, and businesses in navigating complex legal issues with professionalism and a results-oriented approach.",
  },
];

// ===== How It Works (5 steps, per Website_Notes.docx "How it works — Support in Every Case") =====
const howItWorks = [
  {
    step: "01",
    title: "Clear Legal Guidance",
    desc: "Clients are given clear explanations of their legal rights, options, and the steps involved in their matter, helping them understand the process and make informed decisions.",
    icon: ScrollText,
  },
  {
    step: "02",
    title: "Consistent Communication",
    desc: "Regular updates and timely responses to questions help clients stay informed about developments in their case and reduce uncertainty.",
    icon: MessageSquare,
  },
  {
    step: "03",
    title: "Careful Review & Strategy Development",
    desc: "Every matter is approached with attention to detail, including reviewing documents, researching relevant law, and preparing appropriate legal strategies.",
    icon: ClipboardCheck,
  },
  {
    step: "04",
    title: "Expert Implementation & Representation",
    desc: "Every matter receives expert strategy implementation and professional representation in negotiations, court proceedings, and other legal processes to protect your interests.",
    icon: Scale,
  },
  {
    step: "05",
    title: "Practical Advice & Cost-Effective Strategy",
    desc: "Beyond legal theory, clients receive practical advice tailored to their situation so they can address legal challenges effectively.",
    icon: HandCoins,
  },
];

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
                  heading: [
                    "Astute Law Office",
                    "is Committed To",
                    "Delivering Expert",
                    "Legal Support",
                  ],
                  highlightIndex: 1,
                  sub: "Legal services are provided with diligence, careful preparation, and a strong commitment to professional standards, with a focus on delivering clear and practical legal guidance",
                },
                {
                  img: PeraTwo,
                  heading: [
                    "High-Quality Legal",
                    "Services, Practical",
                    "Guidance",
                  ],
                  highlightIndex: 1,
                  sub: "Navigating legal issues can be challenging without clear and reliable guidance. Legal services are provided with attention to detail, thoughtful analysis, and a practical approach aimed at helping clients address their legal matters effectively.",
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
                          <h1 className="text-[40px]! md:text-[50px]! xl:text-[62px]! font-black leading-none tracking-tight text-white pro">
                            {slide.heading.map((line, idx) => (
                              <span
                                key={idx}
                                className={`block ${
                                  idx === slide.highlightIndex
                                    ? "text-[#4dd9d8]"
                                    : ""
                                }`}
                              >
                                {line}
                              </span>
                            ))}
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
                  <div>
                    {" "}
                    <div
                      data-aos="fade-right"
                      data-aos-duration="700"
                      className="mb-8"
                    >
                      {" "}
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#027b7a]/10 text-[#027b7a] text-sm font-semibold">
                        {" "}
                        <span className="w-2 h-2 rounded-full bg-[#027b7a]" />{" "}
                        OUR APPROACH{" "}
                      </span>{" "}
                      <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        {" "}
                        Legal Support Built Around{" "}
                        <span className="text-[#027b7a]"> Your Needs</span>{" "}
                      </h2>{" "}
                      <p className="mt-5 text-gray-600 leading-relaxed max-w-xl">
                        {" "}
                        At Astute Law Office, legal advice goes beyond
                        explaining the law. Every matter is approached with
                        careful attention to the circumstances, protection of
                        legal interests, and practical strategies designed to
                        achieve meaningful results.{" "}
                      </p>{" "}
                    </div>{" "}
                    {/* Service Links */}{" "}
                    <div className="space-y-4">
                      {" "}
                      {/* Practical Legal Advice */}{" "}
                      <Link
                        href="/about#practical-legal-advice"
                        data-aos="fade-up"
                        data-aos-duration="700"
                        scroll={false}
                        className="group flex items-center justify-between gap-5 bg-white border border-gray-100 p-5 md:p-6 shadow-sm hover:shadow-md hover:border-[#027b7a]/30 transition-all duration-300"
                      >
                        {" "}
                        <div className="flex items-center gap-4">
                          {" "}
                          <div className="relative flex-shrink-0 w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-[#0ea5a0] to-[#014f4d] flex items-center justify-center shadow-sm">
                            {" "}
                            <div className="absolute -top-3 -right-2 w-6 h-6 rounded-full bg-white/20" />{" "}
                            <div className="absolute top-1 -left-3 w-5 h-5 rounded-full bg-white/10" />{" "}
                            <div className="absolute -bottom-4 right-1 w-8 h-8 rounded-full bg-white/10" />{" "}
                            <i className="fa-regular fa-lightbulb text-white text-lg relative z-10" />{" "}
                          </div>{" "}
                          <div>
                            {" "}
                            <h3 className="font-semibold text-gray-900 group-hover:text-[#027b7a] transition-colors">
                              {" "}
                              Practical Legal Advice{" "}
                            </h3>{" "}
                            <p className="text-sm text-gray-500 mt-1">
                              {" "}
                              Clear guidance for informed decisions{" "}
                            </p>{" "}
                          </div>{" "}
                        </div>{" "}
                        <i className="fa-regular fa-arrow-right text-gray-400 group-hover:text-[#027b7a] group-hover:translate-x-1 transition-all" />{" "}
                      </Link>{" "}
                      {/* Business Growth */}{" "}
                      <Link
                        href="/about#business-growth-corporate-advisory"
                        data-aos="fade-up"
                        data-aos-duration="900"
                        scroll={false}
                        className="group flex items-center justify-between gap-5 bg-white border border-gray-100 p-5 md:p-6 shadow-sm hover:shadow-md hover:border-[#027b7a]/30 transition-all duration-300"
                      >
                        {" "}
                        <div className="flex items-center gap-4">
                          {" "}
                          <div className="relative flex-shrink-0 w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-[#2f6690] to-[#123a54] flex items-center justify-center shadow-sm">
                            {" "}
                            <div className="absolute -top-3 -right-2 w-6 h-6 rounded-full bg-white/20" />{" "}
                            <div className="absolute top-1 -left-3 w-5 h-5 rounded-full bg-white/10" />{" "}
                            <div className="absolute -bottom-4 right-1 w-8 h-8 rounded-full bg-white/10" />{" "}
                            <i className="fa-regular fa-building text-white text-lg relative z-10" />{" "}
                          </div>{" "}
                          <div>
                            {" "}
                            <h3 className="font-semibold text-gray-900 group-hover:text-[#027b7a] transition-colors">
                              {" "}
                              Business Growth & Corporate Advisory{" "}
                            </h3>{" "}
                            <p className="text-sm text-gray-500 mt-1">
                              {" "}
                              Legal support for sustainable business growth{" "}
                            </p>{" "}
                          </div>{" "}
                        </div>{" "}
                        <i className="fa-regular fa-arrow-right text-gray-400 group-hover:text-[#027b7a] group-hover:translate-x-1 transition-all" />{" "}
                      </Link>{" "}
                      {/* Strategic Representation */}{" "}
                      <Link
                        href="/about#strategic-representation"
                        data-aos="fade-up"
                        data-aos-duration="1100"
                        scroll={false}
                        className="group flex items-center justify-between gap-5 bg-white border border-gray-100 p-5 md:p-6 shadow-sm hover:shadow-md hover:border-[#027b7a]/30 transition-all duration-300"
                      >
                        {" "}
                        <div className="flex items-center gap-4">
                          {" "}
                          <div className="relative flex-shrink-0 w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-[#8b5cf6] to-[#4c1d95] flex items-center justify-center shadow-sm">
                            {" "}
                            <div className="absolute -top-3 -right-2 w-6 h-6 rounded-full bg-white/20" />{" "}
                            <div className="absolute top-1 -left-3 w-5 h-5 rounded-full bg-white/10" />{" "}
                            <div className="absolute -bottom-4 right-1 w-8 h-8 rounded-full bg-white/10" />{" "}
                            <i className="fa-regular fa-scale-balanced text-white text-lg relative z-10" />{" "}
                          </div>{" "}
                          <div>
                            {" "}
                            <h3 className="font-semibold text-gray-900 group-hover:text-[#027b7a] transition-colors">
                              {" "}
                              Strategic Representation{" "}
                            </h3>{" "}
                            <p className="text-sm text-gray-500 mt-1">
                              {" "}
                              Thoughtful advocacy when it matters most{" "}
                            </p>{" "}
                          </div>{" "}
                        </div>{" "}
                        <i className="fa-regular fa-arrow-right text-gray-400 group-hover:text-[#027b7a] group-hover:translate-x-1 transition-all" />{" "}
                      </Link>{" "}
                    </div>
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
                      Your matter deserves personalized attention, and that is
                      exactly what Astute Law Office provides. Every client
                      receives dedicated legal support and strong advocacy in
                      the pursuit of justice.
                    </p>
                    <p
                      className="text-gray-600 text-base m-0"
                      data-aos="fade-right"
                      data-aos-duration="1000"
                    >
                      Every matter is unique, and the approach is tailored to
                      each client's specific circumstances, drawing on legal
                      expertise and experience to pursue the best possible
                      outcome.
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

      {/* ===== LEGAL EXPERTISE / PRACTICE AREAS (5 cards) ===== */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="lg:w-8/12 mb-8">
            <span className="text-sm block mb-2 px-3 py-1 text-[#027b7a] bg-[#027b7a]/16 w-fit">
              Legal Expertise
            </span>
            <h2 className=" md:text-[34px]! sm:text-[32px]! text-[28px]! lg:text-[40px]! font-bold text-gray-900 pro mb-3">
              The Power of a Resilient Legal Strategy
            </h2>
            <p className="text-gray-600 text-base max-w-3xl">
              The Firm offers legal services across several core practice areas,
              with emphasis on strategic guidance, careful advocacy, and
              practical solutions tailored to each client&apos;s circumstances.
            </p>
          </div>

          {/* Carousel */}
          <div className="w-full overflow-x-hidden py-4 relative">
            <div className="flex w-max animate-scroll">
              {/* Render twice for the infinite-scroll effect */}
              {[...practiceAreas, ...practiceAreas].map((service, index) => (
                <div
                  key={index}
                  className="relative shrink-0 w-80 h-80 rounded-none overflow-hidden shadow-md group cursor-pointer mr-3"
                >
                  {/* Background image */}
                  <div className="absolute inset-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="320px"
                    />
                  </div>

                  {/* Gradient overlay on top of image for readability + brand color */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-25 flex items-center justify-center`}
                  >
                    {/* Decorative circles for depth */}
                    <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white opacity-5" />
                    <div className="absolute -bottom-10 -left-10 w-52 h-52 rounded-full bg-white opacity-5" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white opacity-5" />
                    {/* Center icon */}
                    <service.icon className="w-20 h-20 text-white opacity-40 relative z-10" />
                  </div>

                  {/* Bottom info panel — unchanged */}
                  <div
                    className="absolute bottom-0 left-0 right-0 mx-4 bg-white bg-opacity-90
      transition-all duration-500 my-5
      h-20 group-hover:h-56
      overflow-hidden flex flex-col items-center justify-center px-4"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <service.icon className="lg:w-9 lg:h-9 w-6 h-6 text-[#0a3b3f] shrink-0" />
                      <h3 className="lg:text-[22px] md:text-[20px] text-[19px] font-semibold text-black pro1 text-center">
                        {service.title}
                      </h3>
                    </div>
                    <div className="mt-3 text-center max-h-0 opacity-0 group-hover:max-h-48 group-hover:opacity-100 transition-all duration-300">
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

      {/* ===== HOW IT WORKS (5 steps) ===== */}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {howItWorks.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white min-h-[280px] rounded-lg p-6 shadow-md overflow-hidden transition-colors duration-500 hover:bg-[#027b7a]"
              >
                {/* Icon circle */}
                <div className="absolute top-0 left-0">
                  <div className="w-20 h-20 bg-[#027b7a] rounded-br-full flex items-center justify-center transition-colors duration-500 group-hover:bg-white/20">
                    <item.icon className="w-8 h-8 text-white" />
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
                  <p className="text-gray-600 text-[15px] md:text-sm transition-colors duration-500 group-hover:text-white/90">
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
                Ready to Protect Your Rights and Interests?
              </h2>

              <p className="text-white/90 text-base md:text-lg mb-8">
                With years of experience, Astute Law Office provides adequate
                representation and practical guidance to help clients navigate
                complex legal challenges with confidence.
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
