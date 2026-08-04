import Footer from "@/components/footer";

export const metadata = {
  title: "Accessibility Plan | Astute Law Office",
};

export default function AccessibilityPlan() {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-[#0a3b3f] py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Accessibility Plan
          </h1>
          <p className="text-white/70 mt-2 text-sm">
            Pursuant to the Accessibility for Ontarians with Disabilities
            Act, 2005
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-6 text-gray-700 leading-relaxed">
          <p>
            This Accessibility Plan for Astute Law Office (&quot;Astute&quot;)
            outlines the policies, practices and actions that Astute will
            implement in its Ontario operations over a multi-year period (the
            &quot;Plan&quot;) to improve accessibility for individuals with
            disabilities.
          </p>
          <p>
            The Plan also incorporates and references Astute&apos;s existing
            accessibility policies and practices in an effort to streamline
            the Firm&apos;s efforts in achieving its accessibility goals, and
            to comply with all applicable laws.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}