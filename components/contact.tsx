"use client"
import { Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-[#f6f3ee] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center lg:grid-cols-3 gap-8 bg-[#f6f3ee]">
          
          {/* LEFT: FORM */}
          <div className="lg:col-span-2 bg-[#f6f3ee] p-4 sm:p-8 rounded-md">
            <h2 className="text-2xl font-semibold md:mb-10 mb-8 ">
              Send A Message
            </h2>
            <form className="space-y-4">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>

              {/* Service */}
              <input
                type="text"
                placeholder="Service Type"
                className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black"
              />

              {/* Message */}
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black resize-none"
              />

              {/* Button */}
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#027b7a] text-white px-6 py-3 font-medium hover:bg-[#025a5a] transition"
              >
                Free Case Evaluation →
              </button>
            </form>
          </div>

          {/* RIGHT: CONTACT INFO */}
          <div className="space-y-4">
            
            {/* Address */}
            <div className="bg-white p-6 rounded-md shadow-sm flex gap-4">
              <Clock className="w-6 h-6 text-black" />
              <div>
                <h4 className="font-semibold mb-1">Address</h4>
                <p className="text-sm text-gray-600">
                  301-231 Oak Park Blvd, <br />
                  Oakville, ON L6H 7S8 
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white p-6 rounded-md shadow-sm flex gap-4">
              <Phone className="w-6 h-6 text-black" />
              <div>
                <h4 className="font-semibold mb-1">Call or text</h4>
                <p className="text-sm text-gray-600">902 5806 770</p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-md shadow-sm flex gap-4">
              <Mail className="w-6 h-6 text-black" />
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-sm text-gray-600">taiwoade-lawal@astutelawoffice.com</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
