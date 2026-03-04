import Footer from "@/components/footer";
import ServiceCard from "@/components/serviceCard";
import ServiceInner from "@/public/assets/images/practice/service-inner3.svg";
import ServiceInnerFour from "@/public/assets/images/practice/service-inner4.svg";
import ServiceInnerFive from "@/public/assets/images/practice/service-inner5.svg";
import ServiceInnerSix from "@/public/assets/images/practice/service-inner6.svg";
import ServiceInnerSeven from "@/public/assets/images/practice/service-inner7.svg";
import ServiceInnerEight from "@/public/assets/images/practice/service-inner8.svg";
import ServiceInnerNine from "@/public/assets/images/practice/service-inner9.svg";

const services = [
  {
    title: "DUI/DWI Defense",
    icon: ServiceInnerSeven,
  },
  {
    title: "Assault and Battery",
    icon: ServiceInnerEight,
  },
  {
    title: "White-Collar Crimes",
    icon: ServiceInner,
  },
  {
    title: "Theft and Property Crimes",
    icon: ServiceInnerFour,
  },
  {
    title: "Domestic Violence",
    icon: ServiceInnerFive,
  },
  {
    title: "Juvenile Defense",
    icon: ServiceInnerSix,
  },
  {
    title: "Federal Crimes",
    icon: ServiceInnerSeven,
  },
  {
    title: "Divorce Law",
    icon: ServiceInnerEight,
  },
  {
    title: "Drug Offenses",
    icon: ServiceInnerNine,
  },
];

export default function PracticeAreasPage() {
  return (
    <>
      {/* Hero Section */}
              <div data-aos="fade-down" className="bg-[#EDF7FF] text-black text-center lg:pb-20 md:pb-18 pb-14 pt-20">
        <p className="m-0 font-semibold lg:text-[60px] md:text-[55px] sm:text-[50px] text-[45px]">
          Practice Areas
        </p>
        <p className="mt-2 text-gray-600">Home {">"} Practice Areas</p>
      </div>

      {/* Services Grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                icons={service.icon}
                description="Law strategy, or a legal professional in to the search of the latest updates and insights."
              />
            ))}
          </div>
        </div>
      </section>

      <div className="bg-[#027b7a] sm:p-7 p-5 md:p-10">
        <div className="flex items-center justify-center flex-col text-center max-w-3xl mx-auto text-white">
          <div>
            <p className="mb-3 font-bold lg:text-[40px] md:text-[32px] text-[28px]">Ready to Fight for Your<br/> Rights?</p>
            <p className="m-0 max-w-xl">
              With years of experience, we've successfully defended countless
              clients, To be securing their rights and helping them navigate the
              legal system.
            </p>
          </div>
        <div className="flex flex-wrap mx-auto flex-col items-center justify-between  gap-4 my-5">
  {/* Left Button */}
  <button
    className="bg-white text-[#027b7a] font-medium px-5 py-2 rounded-lg shadow-sm transition-all duration-300   hover:scale-105"
  >
    Free Case Evaluation
  </button>

  {/* Right Button */}
  <button
    className="bg-black text-white font-medium px-5 py-2 rounded-lg shadow-sm transition-all duration-300 hover:bg-gray-800 hover:scale-105"
  >
    Contact Us
  </button>
</div>
        </div>
      </div>
      <Footer />
    </>
  );
}
