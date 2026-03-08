"use client";

import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { X } from "lucide-react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function BookingModal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const portal = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-5xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Book a Consultation</h2>
            <p className="text-sm text-gray-500 mt-0.5">Astute Law Office — C$500.00 consultation fee</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-2 rounded-full hover:bg-gray-100 transition text-gray-500 hover:text-gray-900"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 px-6 py-6">
          {children}
        </div>
      </div>
    </div>
  );

  return typeof document !== "undefined"
    ? ReactDOM.createPortal(portal, document.body)
    : null;
}