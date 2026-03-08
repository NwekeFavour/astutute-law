"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingModal from "./bookingmodal";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import "../app/index.css";
import { toast } from "sonner";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
const API = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

type Slot = {
  start: string;
  end: string;
  startTime: string;
  endTime: string;
};

type AvailableSlots = { [date: string]: Slot[] };
type Step = "details" | "otp" | "slots" | "payment" | "success";

// ─────────────────────────────────────────────
// Step Indicator
// ─────────────────────────────────────────────
function StepIndicator({ current }: { current: Step }) {
  const steps: { key: Step; label: string }[] = [
    { key: "details", label: "Your Details" },
    { key: "otp", label: "Verify Email" },
    { key: "slots", label: "Pick a Slot" },
    { key: "payment", label: "Payment" },
    { key: "success", label: "Confirmed" },
  ];

  const index = steps.findIndex((s) => s.key === current);

  return (
  <div className="flex items-center justify-center mb-8 px-2">
    {steps.map((step, i) => (
      <div key={step.key} className="flex items-center">
        <div className="flex flex-col items-center">
          <div
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold transition-all ${
              i < index
                ? "bg-[#027b7a] text-white"
                : i === index
                ? "bg-[#027b7a] text-white ring-2 sm:ring-4 ring-[#027b7a]/20"
                : "bg-gray-100 text-gray-400"
            }`}
          >
            {i < index ? "✓" : i + 1}
          </div>
          <span
            className={`text-[9px] sm:text-xs mt-1 font-medium text-center max-w-[48px] sm:max-w-none leading-tight ${
              i <= index ? "text-[#027b7a]" : "text-gray-400"
            }`}
          >
            {step.label}
          </span>
        </div>
        {i < steps.length - 1 && (
          <div
            className={`w-4 xs:w-6 sm:w-10 md:w-14 h-0.5 mx-0.5 sm:mx-1 mb-4 sm:mb-5 flex-shrink-0 transition-all ${
              i < index ? "bg-[#027b7a]" : "bg-gray-200"
            }`}
          />
        )}
      </div>
    ))}
  </div>
  );
}

// ─────────────────────────────────────────────
// Payment Form
// ─────────────────────────────────────────────
function PaymentForm({
  clientSecret,
  onSuccess,
  onBack,
  selectedSlot,
  formData,
}: {
  clientSecret: string;
  onSuccess: (paymentIntentId: string) => Promise<void>;
  onBack: () => void;
  selectedSlot: Slot;
  formData: { name: string; email: string; reason: string };
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePay = async () => {
    if (!stripe || !elements) return;
    setLoading(true);
    setError("");

    const card = elements.getElement(CardElement);
    if (!card) {
      setLoading(false);
      return;
    }

    try {
      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card,
            billing_details: { name: formData.name, email: formData.email },
          },
        }
      );

      if (stripeError) {
        setError(stripeError.message || "Payment failed");
        return;
      }

      if (paymentIntent?.status === "succeeded") {
        await onSuccess(paymentIntent.id);
      } else {
        setError("Payment was not completed. Please try again.");
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-100">
        <h3 className="font-semibold text-gray-800 mb-3">Booking Summary</h3>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>Client</span>
            <span className="font-medium text-gray-900">{formData.name}</span>
          </div>
          <div className="flex justify-between">
            <span>Date</span>
            <span className="font-medium text-gray-900">
              {new Date(selectedSlot.start).toLocaleDateString("en-NG", {
                weekday: "short", month: "long", day: "numeric",
              })}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Time</span>
            <span className="font-medium text-gray-900">
              {selectedSlot.startTime} – {selectedSlot.endTime}
            </span>
          </div>
          <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between font-bold text-gray-900">
            <span>Total</span>
            <span className="text-[#027b7a]">C$500</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Card Details
        </label>
        <div className="border border-gray-200 rounded-lg p-3.5 bg-white focus-within:border-[#027b7a] focus-within:ring-2 focus-within:ring-[#027b7a]/20 transition">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "15px",
                  color: "#111827",
                  fontFamily: "'Segoe UI', sans-serif",
                  "::placeholder": { color: "#9ca3af" },
                },
                invalid: { color: "#ef4444" },
              },
            }}
          />
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
            ⚠️ {error}
          </p>
        )}
      </div>

      <div className="flex gap-3">
        <Button variant="outline" onClick={onBack} disabled={loading} className="flex-1">
          ← Back
        </Button>
        <Button
          onClick={handlePay}
          disabled={loading || !stripe}
          className="flex-1 bg-[#027b7a] hover:bg-[#027b7a]/90"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              Processing...
            </span>
          ) : (
            "Pay C$500.00 & Confirm"
          )}
        </Button>
      </div>

      <p className="text-xs text-gray-400 text-center mt-4">
        🔒 Secured by Stripe. Your card details are never stored.
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────
// Booking Flow
// ─────────────────────────────────────────────
function BookingFlow({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState<Step>("details");
  const [formData, setFormData] = useState({ name: "", email: "", reason: "" });
  const [availableSlots, setAvailableSlots] = useState<AvailableSlots>({});
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
  const [clientSecret, setClientSecret] = useState("");
  const [loadingIntent, setLoadingIntent] = useState(false);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [eventLink, setEventLink] = useState("");

  // OTP state
  const [otpValue, setOtpValue] = useState("");
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpError, setOtpError] = useState("");
  const [otpResendTimer, setOtpResendTimer] = useState(0);

  // Resend countdown
  useEffect(() => {
    if (otpResendTimer <= 0) return;
    const interval = setInterval(() => {
      setOtpResendTimer((t) => {
        if (t <= 1) { clearInterval(interval); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [otpResendTimer]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Step 1 → send OTP → go to OTP step
  const handleDetailsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setOtpLoading(true);
    setOtpError("");
    setOtpValue("");
    try {
      const res = await fetch(`${API}/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, name: formData.name }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send OTP");
      setOtpResendTimer(60);
      setStep("otp");
    } catch (err: any) {
      toast.error(err.message || "Failed to send verification code.");
    } finally {
      setOtpLoading(false);
    }
  };

  // Step 2 → verify OTP → fetch slots → go to slots step
  const verifyOtp = async () => {
    if (otpValue.length !== 6) return;
    setOtpLoading(true);
    setOtpError("");
    try {
      const res = await fetch(`${API}/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, otp: otpValue }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Verification failed");

      // OTP passed — now fetch slots
      setLoadingSlots(true);
      const slotsRes = await fetch(`${API}/available-slots?days=14`);
      if (!slotsRes.ok) throw new Error("Failed to fetch slots");
      const slotsData = await slotsRes.json();
      setAvailableSlots(slotsData.availableSlots || {});
      setStep("slots");
    } catch (err: any) {
      setOtpError(err.message || "Verification failed. Please try again.");
    } finally {
      setOtpLoading(false);
      setLoadingSlots(false);
    }
  };

  const resendOtp = async () => {
    if (otpResendTimer > 0) return;
    setOtpLoading(true);
    setOtpError("");
    setOtpValue("");
    try {
      const res = await fetch(`${API}/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, name: formData.name }),
      });
      if (!res.ok) throw new Error("Failed to resend OTP");
      setOtpResendTimer(60);
      toast.success("New code sent!");
    } catch (err: any) {
      setOtpError(err.message);
    } finally {
      setOtpLoading(false);
    }
  };

  // Step 3 → create payment intent → go to payment step
  const proceedToPayment = async () => {
    if (!selectedSlot) return;
    setLoadingIntent(true);
    try {
      const res = await fetch(`${API}/create-payment-intent`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          start: selectedSlot.start,
          end: selectedSlot.end,
          description: formData.reason,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to create payment");
      setClientSecret(data.clientSecret);
      setStep("payment");
    } catch (err: any) {
      toast.error(err.message || "Failed to initiate payment. Please try again.");
    } finally {
      setLoadingIntent(false);
    }
  };

  // Step 4 → confirm booking
  const confirmBooking = useCallback(async (paymentIntentId: string): Promise<void> => {
    setBookingLoading(true);
    try {
      const res = await fetch(`${API}/book`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentIntentId }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Booking failed");
      setEventLink(data.eventLink);
      setStep("success");
    } catch (err: any) {
      toast.error(err.message || "Booking failed. Please contact us.");
    } finally {
      setBookingLoading(false);
    }
  }, []);

  const reset = () => {
    setStep("details");
    setFormData({ name: "", email: "", reason: "" });
    setAvailableSlots({});
    setSelectedSlot(null);
    setClientSecret("");
    setEventLink("");
    setOtpValue("");
    setOtpError("");
    setOtpResendTimer(0);
  };

  // ── Step: Details ──
  if (step === "details") {
    return (
      <>
        <StepIndicator current="details" />
        <div className="max-w-md mx-auto">
          <form onSubmit={handleDetailsSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#027b7a]/30 focus:border-[#027b7a] transition text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#027b7a]/30 focus:border-[#027b7a] transition text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Reason for Consultation <span className="text-red-500">*</span>
              </label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
                rows={3}
                placeholder="Briefly describe your legal matter..."
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#027b7a]/30 focus:border-[#027b7a] transition text-sm resize-none"
              />
            </div>
            <Button
              type="submit"
              disabled={otpLoading}
              className="w-full bg-[#027b7a] hover:bg-[#027b7a]/90 py-2.5"
            >
              {otpLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Sending verification code...
                </span>
              ) : (
                "Continue →"
              )}
            </Button>
          </form>
        </div>
      </>
    );
  }

  // ── Step: OTP ──
  if (step === "otp") {
    return (
      <>
        <StepIndicator current="otp" />
        <div className="max-w-sm mx-auto text-center">
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-1">Check your email</h3>
          <p className="text-sm text-gray-500 mb-6">
            We sent a 6-digit code to{" "}
            <strong className="text-gray-800">{formData.email}</strong>
          </p>

          {/* OTP boxes */}
          <div className="flex gap-2 justify-center mb-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <input
                key={i}
                id={`otp-${i}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={otpValue[i] || ""}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, "");
                  const arr = otpValue.split("");
                  arr[i] = val;
                  const newOtp = arr.join("").slice(0, 6);
                  setOtpValue(newOtp);
                  setOtpError("");
                  if (val && i < 5) {
                    document.getElementById(`otp-${i + 1}`)?.focus();
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Backspace" && !otpValue[i] && i > 0) {
                    document.getElementById(`otp-${i - 1}`)?.focus();
                  }
                }}
                onPaste={(e) => {
                  // Handle paste — fill all 6 boxes at once
                  e.preventDefault();
                  const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
                  setOtpValue(pasted);
                  const lastIndex = Math.min(pasted.length, 5);
                  document.getElementById(`otp-${lastIndex}`)?.focus();
                }}
                className={`w-11 h-12 text-center text-xl font-bold border-2 rounded-lg focus:outline-none transition ${
                  otpError
                    ? "border-red-400 bg-red-50 text-red-600"
                    : otpValue[i]
                    ? "border-[#027b7a] bg-[#027b7a]/5 text-gray-900"
                    : "border-gray-200 text-gray-900 focus:border-[#027b7a]"
                }`}
              />
            ))}
          </div>

          {otpError && (
            <p className="text-sm text-red-500 mb-4">⚠️ {otpError}</p>
          )}

          <Button
            onClick={verifyOtp}
            disabled={otpLoading || otpValue.length !== 6}
            className="w-full bg-[#027b7a] hover:bg-[#027b7a]/90 mb-4"
          >
            {otpLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                {loadingSlots ? "Loading availability..." : "Verifying..."}
              </span>
            ) : (
              "Verify & See Available Times →"
            )}
          </Button>

          <p className="text-sm text-gray-500">
            Didn't receive it?{" "}
            {otpResendTimer > 0 ? (
              <span className="text-gray-400">Resend in {otpResendTimer}s</span>
            ) : (
              <button
                onClick={resendOtp}
                disabled={otpLoading}
                className="text-[#027b7a] font-semibold hover:underline"
              >
                Resend code
              </button>
            )}
          </p>

          <button
            onClick={() => setStep("details")}
            className="mt-4 text-sm text-gray-400 hover:text-gray-600"
          >
            ← Back to details
          </button>
        </div>
      </>
    );
  }

  // ── Step: Slots ──
  if (step === "slots") {
    const dates = Object.keys(availableSlots);
    return (
      <>
        <StepIndicator current="slots" />
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <button
              onClick={() => setStep("otp")}
              className="text-sm text-gray-500 hover:text-gray-800 flex items-center gap-1"
            >
              ← Back
            </button>
            <p className="text-sm text-gray-500">
              Showing availability for the next 14 days
            </p>
          </div>

          {dates.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <p className="text-lg font-medium">No available slots</p>
              <p className="text-sm mt-1">Please check back later or contact us directly.</p>
            </div>
          ) : (
            <div className="space-y-6 max-h-[340px] overflow-y-auto pr-1">
              {dates.map((date) => (
                <div key={date}>
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
                    {new Date(date).toLocaleDateString("en-NG", {
                      weekday: "long", month: "long", day: "numeric",
                    })}
                  </h4>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {availableSlots[date].map((slot) => {
                      const isSelected = selectedSlot?.start === slot.start;
                      return (
                        <button
                          key={slot.start}
                          onClick={() => setSelectedSlot(slot)}
                          className={`px-3 py-2.5 rounded-lg text-sm font-medium border transition-all ${
                            isSelected
                              ? "bg-[#027b7a] text-white border-[#027b7a] shadow-md"
                              : "border-gray-200 hover:border-[#027b7a] hover:text-[#027b7a] text-gray-700 bg-white"
                          }`}
                        >
                          {slot.startTime}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {selectedSlot && (
            <div className="mt-6 pt-5 border-t border-gray-100">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="text-sm text-gray-700">
                  <span className="font-semibold text-gray-900">Selected: </span>
                  {new Date(selectedSlot.start).toLocaleDateString("en-NG", {
                    weekday: "short", month: "short", day: "numeric",
                  })}{" "}
                  at{" "}
                  <span className="font-semibold text-[#027b7a]">
                    {selectedSlot.startTime}
                  </span>
                </div>
                <Button
                  onClick={proceedToPayment}
                  disabled={loadingIntent}
                  className="bg-[#027b7a] hover:bg-[#027b7a]/90"
                >
                  {loadingIntent ? "Preparing payment..." : "Proceed to Payment →"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }

  // ── Step: Payment ──
  if (step === "payment" && clientSecret && selectedSlot) {
    return (
      <>
        <StepIndicator current="payment" />
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <PaymentForm
            clientSecret={clientSecret}
            onSuccess={confirmBooking}
            onBack={() => setStep("slots")}
            selectedSlot={selectedSlot}
            formData={formData}
          />
        </Elements>
        {bookingLoading && (
          <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center">
            <div className="bg-white rounded-xl p-6 text-center shadow-xl">
              <svg className="animate-spin h-8 w-8 mx-auto mb-3 text-[#027b7a]" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
              <p className="font-semibold text-gray-700">Confirming your booking...</p>
            </div>
          </div>
        )}
      </>
    );
  }

  // ── Step: Success ──
  if (step === "success") {
    return (
      <div className="text-center py-8 max-w-md mx-auto">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
        <p className="text-gray-500 mb-2">
          A confirmation email has been sent to <strong>{formData.email}</strong>.
        </p>
        <p className="text-gray-500 mb-6 text-sm">
          Please bring a valid ID and any relevant documents to your consultation.
        </p>
        {eventLink && (
          <Link
            href={eventLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-4 px-5 py-2.5 bg-[#027b7a] text-white rounded-lg font-semibold text-sm hover:bg-[#027b7a]/90 transition"
          >
            View in Google Calendar →
          </Link>
        )}
        <div className="flex gap-3 justify-center mt-4">
          <Button variant="outline" onClick={reset}>Book Another</Button>
          <Button className="bg-[#027b7a]" onClick={onClose}>Done</Button>
        </div>
      </div>
    );
  }

  return null;
}

// ─────────────────────────────────────────────
// Header
// ─────────────────────────────────────────────
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-[2000] py-6 transition-all duration-300 ease-in-out ${
        scrolled ? "bg-[#027b7a] shadow-md" : "bg-[#027b7a]"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Desktop */}
        <div className="hidden lg:flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-gray-100">
            Astute Law Office
          </Link>
          <nav>
            <ul className="flex items-center gap-8 font-normal">
              <li><Link className="hover:text-gray-900 text-gray-100 transition" href="/">Home</Link></li>
              <li><Link className="hover:text-gray-900 text-gray-100 transition" href="/about">The Firm</Link></li>
              <li><Link className="hover:text-gray-900 text-gray-100 transition" href="/practice-areas">Practice Areas</Link></li>
              <li><Link className="hover:text-gray-900 text-gray-100 transition" href="/contact">Contact</Link></li>
            </ul>
          </nav>
          <Button
            className="bg-gray-100 font-bold text-[#027b7a] hover:bg-gray-200 rounded-lg py-6"
            onClick={() => setIsModalOpen(true)}
          >
            Book A Consultation
          </Button>
        </div>

        {/* Mobile */}
        <div className="flex lg:hidden items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-gray-100">
            Astute Law Office
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" onClick={() => setMobileMenuOpen((s) => !s)}>
              <Menu />
            </Button>
            <Button
              className="font-bold text-white hover:bg-gray-200 rounded-lg"
              onClick={() => setIsModalOpen(true)}
            >
              Book
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-white rounded-md shadow-md">
            <ul className="flex flex-col gap-3 text-gray-700">
              <li><Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
              <li><Link href="/about" onClick={() => setMobileMenuOpen(false)}>The Firm</Link></li>
              <li><Link href="/practice-areas" onClick={() => setMobileMenuOpen(false)}>Practice Areas</Link></li>
              <li><Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
            </ul>
          </div>
        )}
      </div>

      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <BookingFlow onClose={() => setIsModalOpen(false)} />
      </BookingModal>
    </header>
  );
}