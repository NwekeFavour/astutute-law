import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <div className="bg-[#EDF7FF] text-center lg:pb-20 md:pb-18 pb-14 pt-20">
        <p className="m-0 font-semibold lg:text-[60px] md:text-[55px] sm:text-[50px] text-[45px]">
          About Us
        </p>
        <p className="mt-2 text-gray-600">
          Home {">"} About Us
        </p>
      </div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
        
        {/* Left Text */}
        <div>
          <p className="text-[#027b7a] font-semibold mb-3">
            WHO WE ARE
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Dedicated To Justice, Integrity & Client Success
          </h2>
          <p className="text-gray-600 mb-5 leading-relaxed">
            We are a professional law firm committed to delivering trusted legal
            solutions with clarity, confidence, and care. Our team combines
            deep legal expertise with a client-first approach to ensure every
            case receives the attention it deserves.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From individuals to businesses, we work closely with our clients
            to understand their needs, protect their interests, and achieve
            meaningful results through ethical and strategic legal practice.
          </p>
        </div>

        {/* Right Image Placeholder */}
        <div className="w-full h-[380px] bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
          {/* Replace with Image */}
          About Image
        </div>
      </div>

      {/* Mission / Vision */}
      <div className="bg-[#F8FAFC] py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide reliable, transparent, and results-driven legal
              services while upholding the highest standards of professionalism
              and ethics.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be a trusted legal partner known for excellence, integrity,
              and long-term client relationships across diverse practice areas.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Our Values</h3>
            <p className="text-gray-600 leading-relaxed">
              Integrity, accountability, professionalism, and unwavering
              commitment to protecting our clients’ rights and interests.
            </p>
          </div>

        </div>
      </div>

      {/* Call To Action */}
      <div className="py-20 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Trusted Legal Support When You Need It Most
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Whether you need legal guidance, representation, or strategic advice,
          our experienced team is ready to stand by you every step of the way.
        </p>
        <button className="px-8 py-4 bg-[#027b7a] text-white rounded-full hover:bg-[#027b7a]/80 transition">
          Contact Us
        </button>
      </div>
        <Footer/>
    </div>
  );
}
