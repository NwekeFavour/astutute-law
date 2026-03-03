import Image from "next/image";
import Link from "next/link";
import PeraOne from "@/public/assets/images/pera-img2.webp";
import ServiceImg2 from "@/public/assets/images/service4-img2.webp";
import ServiceImg3 from "@/public/assets/images/service4-img3.webp";
import ServiceImg4 from "@/public/assets/images/service4-img1.webp";
import WorkLaw1 from "@/public/assets/images/work-law1.svg";
import WorkLaw2 from "@/public/assets/images/work-law2.svg";
import WorkLaw3 from "@/public/assets/images/work-law3.svg";
import { CheckIcon, Users, HeartHandshake, ShieldCheck, Briefcase  } from "lucide-react";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center bg-[#EDF7FF] font-sans dark:bg-black">
        <div>
          <div className="md:py-10 lg:py-20">
            <div className="md:max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* ===== Left Content ===== */}
                <div className="lg:col-span-10">
                  <div className="space-y-6">
                    
                    <h1 className="text-[45px]! md:text-[70px]! xl:text-[80px]! font-bold leading-tight pro">
                      Protect Your Future Life
                      <br />
                      Our Best{" "}
                      <Image
                        src={PeraOne}
                        alt="Pera-Lawyer-img"
                        className="hidden lg:inline-block mx-2 align-middle"
                      />
                      Lawyers
                    </h1>

                    <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl">
                      We know that every case is unique, and we approach each with
                      meticulous attention to detail. Whether you're facing charges
                      related DUI, drug offenses, assault.
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <Link
                        href="/about"
                        className="inline-flex items-center gap-2 rounded-md border border-[#001313] px-6 py-3 font-semibold transition hover:bg-[#027b7a]/80 hover:text-white"
                      >
                        Learn More
                        <i className="fa-regular fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* ===== Right Spacer / Decorations ===== */}
                <div className="hidden lg:block lg:col-span-2">
                  {/* Decorative images can live here */}
                </div>
              </div>
              <div className="about4-section-area sp1 py-16">
                <div className="">
                  <div className="flex flex-col lg:flex-row items-center gap-12">
                    
                    {/* Left Column - Boxes */}
                    <div className="lg:w-1/2 flex flex-col gap-8">
                      {/* Box 1 */}
                      <div 
                        className="about4-single-boxarea relative p-6 rounded-xl bg-white shadow-lg flex items-start gap-4"
                        data-aos="fade-up" 
                        data-aos-duration="800"
                        data-aos-easing="linear"
                      >
                        <div className="bg-[#027b7a]/15 sm:w-[60px] rounded-full md:w-[50px] md:h-12  lg:w-[100px] w-[100px] h-12 lg:h-16 flex justify-center items-center">
                          <div className="bg-[#027b7a] rounded-full w-7 h-7 lg:w-8 md:w-7 md:h-7 lg:h-8 flex items-center justify-center">
                            <CheckIcon className="w-5 h-5 text-neutral-100 shrink-0 mt-1" />
                          </div>
                        </div>
                        <div className="about4-single-content-area">
                          <a href="/service-single" className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                            Legal Expertise
                          </a>
                          <p className="text-gray-600 mt-1 text-sm">
                            Criminal defense lawyers have specialized knowledge and expertise in criminal law, courtroom procedures.
                          </p>
                        </div>
                      </div>

                      {/* Box 2 */}
                      <div 
                        className="about4-single-boxarea relative p-6 rounded-xl bg-white shadow-lg flex items-start gap-4"
                        data-aos="fade-up" 
                        data-aos-duration="1000"
                        data-aos-easing="linear"
                      >
                        <div className="bg-[#027b7a]/15 sm:w-[60px] rounded-full md:w-[50px] md:h-12  lg:w-[100px] w-[100px] h-12 lg:h-16 flex justify-center items-center">
                          <div className="bg-[#027b7a] rounded-full w-7 h-7 lg:w-8 md:w-7 md:h-7 lg:h-8 flex items-center justify-center">
                            <CheckIcon className="w-5 h-5 text-neutral-100 shrink-0 mt-1" />
                          </div>
                        </div>
                        <div className="about4-single-content-area">
                          <a href="/service-single" className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                            Protection &amp; Rights
                          </a>
                          <p className="text-gray-600 mt-1 text-sm">
                            Criminal defense lawyers have specialized knowledge and expertise in criminal law, courtroom procedures.
                          </p>
                        </div>
                      </div>

                      {/* Box 3 */}
                      <div 
                        className="about4-single-boxarea relative p-6 rounded-xl bg-white shadow-lg flex items-start gap-4"
                        data-aos="fade-up" 
                        data-aos-duration="1200"
                        data-aos-easing="linear"
                      >
                        <div className="bg-[#027b7a]/15 sm:w-[60px] rounded-full md:w-[50px] md:h-12  lg:w-[100px] w-[100px] h-12 lg:h-16 flex justify-center items-center">
                          <div className="bg-[#027b7a] rounded-full w-7 h-7 lg:w-8 md:w-7 md:h-7 lg:h-8 flex items-center justify-center">
                            <CheckIcon className="w-5 h-5 text-neutral-100 shrink-0 mt-1" />
                          </div>
                        </div>
                        <div className="about4-single-content-area">
                          <a href="/service-single" className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                            Courtroom Representation
                          </a>
                          <p className="text-gray-600 mt-1 text-sm">
                            Criminal defense lawyers have specialized knowledge and expertise in criminal law, courtroom procedures.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Text */}
                    <div className="lg:w-1/2 flex flex-col gap-4">
                      <span 
                        className="text-[#027b7a] bg-[#027b7a]/16 w-fit px-3 py-1 font-medium"
                        data-aos="fade-right"
                        data-aos-duration="600"
                      >
                        Why Choose Us
                      </span>
                      <h2 
                        className="text-3xl lg:text-4xl font-bold text-gray-900"
                        data-aos="fade-right"
                        data-aos-duration="800"
                      >
                        Criminal Defense Expert At Your Legal Services
                      </h2>
                      <p 
                        className="text-gray-600 text-base"
                        data-aos="fade-right"
                        data-aos-duration="900"
                      >
                        Your case deserves personalized attention, and that's exactly what we <br className="hidden lg:inline" /> offer. Let us be your best legal advocates in the pursuit of justice.
                      </p>
                      <p 
                        className="text-gray-600 text-base m-0"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                      >
                        We know that every case is unique, and we tailor our approach to your <br className="hidden lg:inline" /> specific circumstances, leveraging our legal expertise and courtroom.
                      </p>
                      <div 
                        className="mt-4"
                        data-aos="fade-right"
                        data-aos-duration="1200"
                      >
                        <a href="/about" className="inline-block bg-[#027b7a] text-white px-6 py-3 rounded-none font-medium hover:bg-[#027b7a]/80 transition">
                          Request Case Evolution <i className="fa-regular fa-arrow-right ml-2"></i>
                        </a>
                      </div>
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
            <span className="text-sm text-gray-500 block mb-2">Practice Areas</span>
            <h2 className=" md:text-[34px]! sm:text-[32px]! text-[28px]! lg:text-[40px]! font-bold text-gray-900 pro">
              The Power of a Resilient Legal Defense Strategy
            </h2>
          </div>

          {/* Carousel */}
          <div className="w-full overflow-x-hidden py-4 relative">
            <div className="flex w-max animate-scroll">
              
              {/* Your cards */}
              {[
                { img: ServiceImg2, title: "Family Law", icon: Users, desc: "Providing compassionate and expert legal guidance for family-related matters including divorce, custody, and adoption." },
                { img: ServiceImg4, title: "Mental Health Law", icon: HeartHandshake, desc: "Protecting the rights of individuals with mental health concerns through legal advocacy and representation." },
                { img: ServiceImg2, title: "Criminal Law", icon: ShieldCheck, desc: "Offering strong defense strategies for clients facing criminal charges, from minor offenses to serious crimes." },
                { img: ServiceImg3, title: "Corporate & Commercial Law", icon: Briefcase, desc: "Providing legal solutions for businesses, including contracts, compliance, and commercial disputes." },
              ].map((service, index) => (
                <div key={index} className="relative shrink-0 w-80 h-80 rounded-none overflow-hidden shadow-md group cursor-pointer mr-6">
                  <Image src={service.img} alt={service.title} className="w-full h-full object-cover"/>
                  <div
                    className="absolute bottom-0 left-0 right-0 mx-4 bg-white bg-opacity-90
                    transition-all duration-500 my-5
                    h-20 group-hover:h-48
                    overflow-hidden flex flex-col items-center justify-center px-4"
                  >
                    {/* Top row: icon + title (always visible) */}
                    <div className="flex items-center justify-center gap-3">
                      <service.icon className="lg:w-9 lg:h-9 w-6 h-6 text-[#0a3b3f] shrink-0" />

                      <h3 className="lg:text-[22px] md:text-[20px] text-[19px] font-semibold text-black pro1 text-center">
                        {service.title}
                      </h3>
                    </div>

                    {/* Hover-only content */}
                    <div
                      className="mt-3 text-center
                      max-h-0 opacity-0
                      group-hover:max-h-40 group-hover:opacity-100
                      transition-all duration-300"
                    >
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

              {/* Repeat the same set of cards for infinite loop */}
              {[
                { img: ServiceImg2, title: "Family Law", icon: Users, desc: "Providing compassionate and expert legal guidance for family-related matters including divorce, custody, and adoption." },
                { img: ServiceImg4, title: "Mental Health Law", icon: HeartHandshake, desc: "Protecting the rights of individuals with mental health concerns through legal advocacy and representation." },
                { img: ServiceImg2, title: "Criminal Law", icon: ShieldCheck, desc: "Offering strong defense strategies for clients facing criminal charges, from minor offenses to serious crimes." },
                { img: ServiceImg3, title: "Corporate & Commercial Law", icon: Briefcase, desc: "Providing legal solutions for businesses, including contracts, compliance, and commercial disputes." },
              ].map((service, index) => (
                <div key={`dup-${index}`} className="relative shrink-0 w-80 h-80 rounded-none overflow-hidden shadow-md group cursor-pointer mr-6">
                  <Image src={service.img} alt={service.title} className="w-full h-full object-cover"/>
                  <div
                    className="absolute bottom-0 left-0 right-0 mx-4 bg-white bg-opacity-90
                    transition-all duration-500
                    h-20 group-hover:h-48
                    overflow-hidden flex my-5 flex-col items-center justify-center px-4"
                  >
                    {/* Top row: icon + title (always visible) */}
                    <div className="flex items-center justify-center gap-3">
                      <service.icon className="lg:w-9 lg:h-9 w-6 h-6 text-[#0a3b3f] shrink-0" />

                      <h3 className="lg:text-[22px] md:text-[20px] text-[19px] font-semibold text-black pro1 text-center">
                        {service.title}
                      </h3>
                    </div>

                    {/* Hover-only content */}
                    <div
                      className="mt-3 text-center
                      max-h-0 opacity-0
                      group-hover:max-h-40 group-hover:opacity-100
                      transition-all duration-300"
                    >
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
            <span className="text-sm text-center block mb-2 px-3 py-1 text-[#027b7a] bg-[#027b7a]/16 w-fit mx-auto " >How It Works</span>
            <h2 className="text-3xl font-bold text-gray-900">Support in Every Case</h2>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Investigation",
                desc: "Tax authorities, such as the internal revenue service (IRS) in the United States.",
                icon: WorkLaw1,
              },
              {
                step: "02",
                title: "Legal Representation",
                desc: "Tax authorities, such as the internal revenue service (IRS) in the United States.",
                icon: WorkLaw2,
              },
              {
                step: "03",
                title: "Compliance & Solution",
                desc: "Tax authorities, such as the internal revenue service (IRS) in the United States.",
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
                With years of experience, we&apos;ve successfully defended countless clients,
                securing their rights and helping them navigate the legal system.
              </p>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-teal-700 font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:bg-teal-100 hover:gap-3"
              >
                Contact Us
                <i className="fa-regular fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>

  );
}
