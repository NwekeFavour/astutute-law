"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingModal from "./bookingmodal";
import "../app/index.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // keep calendly loading state but we won't init calendly
  const [isCalendlyLoading] = useState(false);

  const [formData, setFormData] = useState({ name: "", email: "", reason: "" });
  const [availability, setAvailability] = useState<any[]>([]);
  const [loadingAvailability, setLoadingAvailability] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<any>(null);
  const [bookingLoading, setBookingLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // fetch availability from backend (same as before)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.reason) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setLoadingAvailability(true);
      setAvailability([]);
      setSelectedSlot(null);

      // update port/host to match your backend
      const res = await fetch("http://localhost:5000/availability");
      if (!res.ok) throw new Error("Failed to fetch availability");
      const data = await res.json();
      setAvailability(data.availability || []);
      // open modal (if not open) so mobile can also use form
      setIsModalOpen(true);
    } catch (err) {
      console.error(err);
      alert("Failed to load availability");
    } finally {
      setLoadingAvailability(false);
    }
  };

  // confirm booking POST -> /book
  const confirmBooking = async () => {
    if (!selectedSlot) return alert("Please select a time slot");
    if (!formData.name || !formData.email) return alert("Missing client info");

    try {
      setBookingLoading(true);
      const payload = {
        name: formData.name,
        email: formData.email,
        reason: formData.reason,
        slotStart: selectedSlot.start,
        slotEnd: selectedSlot.end,
      };

      const res = await fetch("http://localhost:5000/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (!res.ok) {
        console.error("book error", result);
        alert(result.error || "Booking failed");
        return;
      }

      alert("Booking confirmed!");
      setFormData({ name: "", email: "", reason: "" });
      setAvailability([]);
      setSelectedSlot(null);
      setIsModalOpen(false);
    } catch (err) {
      console.error(err);
      alert("Booking failed");
    } finally {
      setBookingLoading(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 py-6 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-white shadow-md" : "bg-[#EDF7FF]"
      }`}
    >
      <div
        className={`container mx-auto px-4 transition-all duration-300 ease-in-out ${
          scrolled ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-90"
        }`}
      >
        {/* Desktop */}
        <div className="hidden lg:flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold">Astute Law Office</Link>

          <nav>
            <ul className="flex items-center gap-8 font-normal">
              <li><Link className="hover:text-[#027b7a]" href="/">Home</Link></li>
              <li><Link className="hover:text-[#027b7a]" href="/about">About Us</Link></li>
              <li><Link className="hover:text-[#027b7a]" href="/practice-areas">Practice Areas</Link></li>
              <li><Link className="hover:text-[#027b7a]" href="/contact">Contact</Link></li>
            </ul>
          </nav>

          <Button
            className="bg-[#027b7a] hover:bg-[#027b7a]/80 rounded-lg lg:py-6"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            Book A Consultation
          </Button>
        </div>

        {/* Mobile */}
        <div className="flex lg:hidden items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">Astute Law Office</Link>

          <div className="flex items-center gap-2">
            {/* MOBILE MENU toggles nav drawer, not modal */}
            <Button variant="outline" size="icon" onClick={() => setMobileMenuOpen((s) => !s)}>
              <Menu  />
            </Button>

            <Button className="bg-[#027b7a] text-white" variant="outline" onClick={() => setIsModalOpen(true)}>
              Book
            </Button>
          </div>
        </div>

        {/* mobile nav drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-white rounded-md shadow-md">
            <ul className="flex flex-col gap-3">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/practice-areas">Practice Areas</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        )}

        {/* Modal (portal) */}
        <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left: Form */}
            <div className="flex-1 bg-[#F5F9FF] p-6 rounded-lg scrollbar-hide shadow-inner">
              <h2 className="text-2xl font-bold mb-4 text-[#027b7a]">Book A Consultation</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block font-semibold mb-1">Full Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Reason for Booking <span className="text-red-500">*</span></label>
                  <textarea
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full p-2 border rounded-md"
                  />
                </div>

                <div className="flex gap-2">
                  <Button type="submit" className="bg-[#027b7a]">See Availability</Button>
                  <Button type="button" variant="outline" onClick={() => {
                    setFormData({ name: "", email: "", reason: "" });
                    setAvailability([]);
                    setSelectedSlot(null);
                  }}>Reset</Button>
                </div>
              </form>
            </div>

            {/* Right: Availability */}
            <div className="flex-1 bg-white p-6 rounded-lg shadow-inner overflow-auto h-[100px] sm:h-[400px]">
              <h3 className="text-xl font-bold mb-4 text-[#027b7a]">Available Time Slots</h3>

              {loadingAvailability && <p className="text-center">Loading availability...</p>}

              {!loadingAvailability && availability.length === 0 && (
                <p className="text-sm text-gray-500">Submit your details (left) and click "See Availability" to show available dates.</p>
              )}

              <div className="space-y-4 ">
                {availability.map((day) => (
                  <div key={day.date} className="mb-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{new Date(day.date).toLocaleDateString()}</h4>
                      <span className="text-sm text-gray-500">{day.slots.length} slots</span>
                    </div>

                    <div className="mt-2 grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {day.slots.map((slot: any) => {
                        const isSelected = selectedSlot?.start === slot.start;
                        return (
                          <button
                            key={slot.start}
                            onClick={() => setSelectedSlot(slot)}
                            className={`px-3 py-2 rounded-md text-sm text-left transition ${
                              isSelected
                                ? "bg-[#027b7a] text-white"
                                : "border hover:border-[#027b7a]"
                            }`}
                          >
                            <div className="font-medium">{new Date(slot.start).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</div>
                            <div className={`text-xs ${isSelected ? "text-neutral-200" : "text-gray-500"} `}>{new Date(slot.start).toLocaleDateString()}</div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Selected slot summary */}
              {selectedSlot && (
                <div className="mt-4 border-t pt-4">
                  <h4 className="font-semibold mb-2">Selected Slot</h4>
                  <p className="mb-2">
                    <strong>When:</strong>{" "}
                    {new Date(selectedSlot.start).toLocaleString()}
                  </p>
                  <p className="mb-2">
                    <strong>Name:</strong> {formData.name}
                  </p>
                  <p className="mb-4">
                    <strong>Email:</strong> {formData.email}
                  </p>

                  <div className="flex gap-2">
                    <Button onClick={confirmBooking} className="bg-[#027b7a]" disabled={bookingLoading}>
                      {bookingLoading ? "Booking..." : "Confirm Consultation"}
                    </Button>
                    <Button variant="outline" onClick={() => setSelectedSlot(null)}>Change</Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </BookingModal>
      </div>
    </header>
  );
}