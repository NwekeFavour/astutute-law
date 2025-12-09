"use client";

import Link from "next/link";
import { ArrowLeft, Home, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center space-y-6">
        
        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-100">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
        </div>

        {/* Text */}
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-gray-900">404</h1>
          <h2 className="text-xl font-semibold text-gray-800">
            Page Not Found
          </h2>
          <p className="text-gray-600">
            Sorry, the page you’re looking for doesn’t exist or has been moved.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-white font-medium hover:bg-teal-700 transition"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-5 py-2.5 text-gray-700 hover:bg-gray-100 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
