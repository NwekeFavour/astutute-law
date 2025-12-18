"use client";

import React, { useEffect } from "react";
import ReactDOM from "react-dom";

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
      document.body.style.overflow = "hidden"; // prevent background scroll
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
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* panel */}
      <div className="relative z-10 w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex justify-end p-3">
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-xl p-2 rounded hover:bg-gray-100"
          >
            ✕
          </button>
        </div>
        <div className="px-6 pb-6">{children}</div>
      </div>
    </div>
  );

  return typeof document !== "undefined"
    ? ReactDOM.createPortal(portal, document.body)
    : null;
}
