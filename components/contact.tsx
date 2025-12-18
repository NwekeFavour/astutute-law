"use client"
import { Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-[#f6f3ee] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-[#f6f3ee]">
          
          {/* LEFT: FORM */}
          <div className="lg:col-span-2 bg-[#f6f3ee] p-8 rounded-md">
            <h2 className="text-2xl font-semibold mb-2">
              Send Us A Message
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Our response time is within 30 minutes during business hours
            </p>

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
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 font-medium hover:bg-orange-600 transition"
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
                <h4 className="font-semibold mb-1">Contact Us</h4>
                <p className="text-sm text-gray-600">
                  8708 Technology Forest Pl Suite 125 - G,
                  The Woodlands, TX 77381
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white p-6 rounded-md shadow-sm flex gap-4">
              <Phone className="w-6 h-6 text-black" />
              <div>
                <h4 className="font-semibold mb-1">Call or text</h4>
                <p className="text-sm text-gray-600">123-456-7890</p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white p-6 rounded-md shadow-sm flex gap-4">
              <Mail className="w-6 h-6 text-black" />
              <div>
                <h4 className="font-semibold mb-1">Email us today</h4>
                <p className="text-sm text-gray-600">info@taxvice.com</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
