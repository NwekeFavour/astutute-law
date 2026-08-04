import Footer from "@/components/footer";

export const metadata = {
  title: "Fraud Notice | Astute Law Office",
};

export default function FraudNotice() {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-[#0a3b3f] py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Fraud Notice
          </h1>
          <p className="text-white/70 mt-2 text-sm">
            Fraudulent / Unauthorized Communications Using the Name of Astute
            Law Office
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Fraudulent Communications and Impersonations
            </h2>
            <p>
              If you received an email from a misleading email address not
              ending with &quot;@astutelawoffice.com&quot;, we suggest that
              you do not respond, click on any links, or open attachments to
              the email, or engage with the sender. If you have lost any
              money as a result of this communication, please report the
              crime to your local police.
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside">
              <li>
                Canadian residents may report attempted fraud to the{" "}
                <a
                  href="https://www.antifraudcentre-centreantifraude.ca/index-eng.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#027b7a] underline"
                >
                  Canadian Anti-Fraud Centre
                </a>
                .
              </li>
              <li>
                U.S. residents may report attempted fraud to the{" "}
                <a
                  href="https://complaint.ic3.gov/default.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#027b7a] underline"
                >
                  FBI Internet Crime Complaint Centre
                </a>
                .
              </li>
              <li>
                U.K. residents may report attempted fraud to{" "}
                <a
                  href="https://www.actionfraud.police.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#027b7a] underline"
                >
                  Action Fraud
                </a>
                .
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              False Claims of Association With Astute Law Office
            </h2>
            <p>
              If you wish to communicate with an Astute Law Office lawyer,
              please contact them directly through{" "}
              <a
                href="mailto:info@astutelawoffice.com"
                className="text-[#027b7a] underline"
              >
                info@astutelawoffice.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}