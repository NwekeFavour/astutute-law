import Image from "next/image";
import Footer from "@/components/footer";
import Lawyer from "@/public/assets/images/lawyer.jpeg";

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div data-aos="fade-down" className="bg-[#EDF7FF] text-center lg:pb-20 md:pb-18 pb-14 pt-20">
        <p className="m-0 font-semibold lg:text-[60px] md:text-[55px] sm:text-[50px] text-[45px]">
          The Firm
        </p>
        <p className="mt-2 text-gray-600">Home {">"} The Firm</p>
      </div>

      {/* About Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-start">
        {/* Left Text */}
        <div data-aos="fade-right" className="space-y-6">
          <p className="text-[#027b7a] font-semibold mb-3">ABOUT ASTUTE LAW FIRM</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Astute Law Office: Your Trusted Legal Partner
          </h2>
          <p className="text-gray-600 mb-5 leading-relaxed">
            Astute Law Office is committed to delivering exceptional legal
            services through practical legal advice and strategic
            representation. I help individuals and businesses navigate complex
            legal landscapes with clarity, precision, and confidence.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Astute Law firm understands that every client’s objectives are unique. That
            is why I provide tailored legal solutions designed to align with
            your goals, protect your interests, and position you for sustainable
            growth while remaining fully compliant with regulatory standards.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From individuals to businesses, I work closely with my clients to
            understand their needs, protect their interests, and achieve
            meaningful results through ethical and strategic legal practice.
          </p>
        </div>

        {/* Right Image Placeholder */}
        <div data-aos="fade-left" className="w-full max-w-md aspect-[4/5] relative mx-auto rounded-xl overflow-hidden bg-gray-100">
          <Image
            src={Lawyer}
            alt="Astute Professional"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
            priority
          />
        </div>
      </div>

      {/* Core Services */}
      <div data-aos="fade-up" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Astute Law Firm Offers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive legal solutions designed to protect, guide, and grow
              your interests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-semibold mb-3 text-[#027b7a]">
                Practical Legal Advice
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I translate complex legal jargon into clear, actionable
                guidance. From contract negotiations to regulatory compliance,
                my advice is precise, relevant, and results-oriented.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-semibold mb-3 text-[#027b7a]">
                Strategic Representation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Whether in litigation, arbitration, or mediation, I craft
                well-analyzed legal strategies that maximize your chances of
                success while protecting your best interests.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-semibold mb-3 text-[#027b7a]">
                Business Growth & Corporate Advisory
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I support businesses in corporate governance, mergers &
                acquisitions, and intellectual property protection to ensure
                expansion remains sustainable and legally sound.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-semibold mb-3 text-[#027b7a]">
                Compliance & Regulatory Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Astute Law Office proactive compliance services include risk assessments,
                policy development, and business readiness evaluations to
                safeguard your operations in an evolving regulatory environment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission / Vision */}
      <div className="bg-[#F8FAFC] py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide reliable, transparent, and results-driven legal
              services while upholding the highest standards of professionalism
              and ethics.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be a trusted legal partner known for excellence, integrity, and
              long-term client relationships across diverse practice areas.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Values</h3>
            <p className="text-gray-600 leading-relaxed">
              Integrity, accountability, professionalism, and unwavering
              commitment to protecting Astute Law Office clients’ rights and interests.
            </p>
          </div>
        </div>
      </div>

      {/* Practice Areas */}
      <section className="py-24 bg-gradient-to-b from-white to-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <p className="text-[#027b7a] font-semibold tracking-wide mb-3">
              PRACTICE AREAS
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-4 gap-6">
            {/* Family Law Card */}
            <div data-aos="fade-up" data-aos-delay="100" className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 text-[#027b7a]">
                Family Law
              </h3>

              <div className="space-y-3 text-gray-600 text-sm">
                {[
                  "Divorce and separation",
                  "Parenting time & decision-making responsibility",
                  "Child and spousal support",
                  "Property division",
                  "Marriage and cohabitation agreements",
                  "Urgent court motions & restraining orders",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#027b7a]" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 pt-6 border-t border-gray-100 text-gray-600 text-sm leading-relaxed">
                Wherever possible, resolution is encouraged through negotiation
                and settlement. Where court intervention is required, the firm
                provides thorough preparation and effective advocacy.
              </p>
            </div>

            {/* Mental Health Law Card */}
            <div data-aos="fade-up" data-aos-delay="200"  className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 text-[#027b7a]">
                Mental Health Law
              </h3>

              <div className="space-y-3 text-gray-600 text-sm">
                {[
                  "Consent and Capacity Board hearings",
                  "Involuntary admissions & treatment matters",
                  "Capacity and substitute decision-making",
                  "Community Treatment Orders",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#027b7a]" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 pt-6 border-t border-gray-100 text-gray-600 text-sm leading-relaxed">
                The firm ensures clients understand their rights and the legal
                processes that directly affect their liberty and well-being.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="200"  className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 text-[#027b7a]">
                Business Law
              </h3>

              <div className="space-y-3 text-gray-600 text-sm">
                {[
                  "Consent and Capacity Board hearings",
                  "Involuntary admissions & treatment matters",
                  "Capacity and substitute decision-making",
                  "Community Treatment Orders",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#027b7a]" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 pt-6 border-t border-gray-100 text-gray-600 text-sm leading-relaxed">
                The firm ensures clients understand their rights and the legal
                processes that directly affect their liberty and well-being.
              </p>
            </div>


            {/* Child Protection Card */}
            <div data-aos="fade-up" data-aos-delay="300" className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 text-[#027b7a]">
                Child Protection
              </h3>

              <div className="space-y-3 text-gray-600 text-sm">
                {[
                  "Children’s Aid Society investigations",
                  "Temporary care and supervision",
                  "Crown wardship proceedings",
                  "Status review applications",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#027b7a]" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 pt-6 border-t border-gray-100 text-gray-600 text-sm leading-relaxed">
                These matters demand diligence, preparation, and measured
                advocacy. The firm works to safeguard clients’ legal rights
                within child protection proceedings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <div data-aos="fade-up"  className="bg-[#F8FAFC] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Astute Law Office?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div data-aos="zoom-in" data-aos-delay="100" className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">
                Experienced Attorney
              </h3>
              <p className="text-gray-600">
                Extensive legal knowledge across diverse practice areas,
                ensuring depth, accuracy, and strategic foresight.
              </p>
            </div>

            <div data-aos="zoom-in" data-aos-delay="200" className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">
                Client-Centric Approach
              </h3>
              <p className="text-gray-600">
                I prioritize collaboration and transparency to deliver
                solutions aligned with your objectives.
              </p>
            </div>

            <div data-aos="zoom-in" data-aos-delay="300" className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">
                Comprehensive Legal Support
              </h3>
              <p className="text-gray-600">
                From litigation to compliance and corporate advisory, I cover
                every aspect of your legal needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call To Action */}
      <div data-aos="fade-up"  className="py-20 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Trusted Legal Support When You Need It Most
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Whether you need legal guidance, representation, or strategic advice,
          Astute Law Office is ready to stand by you every step of the way.
        </p>
        <button className="px-8 py-4 bg-[#027b7a] text-white rounded-full hover:bg-[#027b7a]/80 transition">
          Contact Me
        </button>
      </div>
      <Footer />
    </div>
  );
}
