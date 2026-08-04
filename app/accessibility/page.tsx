import Footer from "@/components/footer";

export const metadata = {
  title: "Accessible Client Service Policy | Astute Law Office",
};

export default function AccessibleClientServicePolicy() {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-[#0a3b3f] py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Accessible Client Service Policy
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-6 text-gray-700 leading-relaxed">
          <p>
            Astute Law Office (&quot;Astute&quot; or the &quot;Firm&quot;) is
            committed to ensuring that we provide services to our clients and
            client representatives with disabilities in an accessible manner,
            and in a way that respects the dignity and independence of those
            individuals. The Firm&apos;s commitment to ensuring accessible
            service is part of our overall objectives of providing excellent
            client service and promoting diversity.
          </p>
          <p>
            This Astute Accessible Client Service Policy (the
            &quot;Policy&quot;) establishes policies, practices and
            procedures relating to the Firm&apos;s provision of services to
            clients, client representatives and other third parties. Astute
            may implement additional policies, practices and/or procedures in
            this regard, including those contained in client service training
            materials. However, all such additional policies, practices and
            procedures will be consistent with the Policy.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}