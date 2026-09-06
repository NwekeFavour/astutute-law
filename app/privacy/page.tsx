import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Astute Law Office.",
};

const NAV = [
  {
    label: "Privacy Policy",
    href: "#privacy-policy",
    children: [
      { label: "Information we collect", href: "#information-we-collect" },
      { label: "How we collect it", href: "#how-we-collect" },
      { label: "How we share it", href: "#how-we-share" },
      { label: "Our website", href: "#firm-website" },
      { label: "Legal basis for processing", href: "#legal-basis" },
      { label: "Security & retention", href: "#security-retention" },
      { label: "Access & correction", href: "#access-correction" },
      { label: "Inquiries & complaints", href: "#inquiries" },
      { label: "Changes to this policy", href: "#changes" },
    ],
  },
  { label: "Accessible Client Service", href: "#accessible-service" },
  { label: "Accessibility Plan", href: "#accessibility-plan" },
  { label: "Fraud Notice", href: "#fraud-notice" },
];

export default function PrivacyPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <div className="bg-[#027b7a] py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-sm font-medium text-white/70 mb-3">
            Astute Law Office
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight max-w-2xl">
            Privacy &amp; Client&nbsp;Service Policies
          </h1>
          <p className="mt-4 text-white/80 max-w-xl leading-relaxed">
            How we collect, use and protect your personal information, and how
            we support accessibility and guard against fraud in your dealings
            with the Firm.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-12">
          {/* Sticky section nav */}
          <nav className="hidden lg:block">
            <div className="sticky top-10 py-12">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-3">
                On this page
              </p>
              <ul className="space-y-1 text-sm">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="block py-1 text-gray-700 hover:text-[#027b7a] font-medium"
                    >
                      {item.label}
                    </a>
                    {item.children && (
                      <ul className="ml-3 border-l border-gray-200 pl-3 space-y-1 mb-2">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <a
                              href={child.href}
                              className="block py-0.5 text-gray-500 hover:text-[#027b7a]"
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Content */}
          <div className="py-12 max-w-2xl">
            {/* Quick reference card */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 mb-12 text-sm text-gray-600">
              <p className="font-semibold text-gray-900 mb-1">
                Questions about your information?
              </p>
              <p>
                Astute Law Office, 55 Village Centre Place, Suite 200, Mississauga, ON L4Z1V9 &middot;{" "}
                <a
                  href="mailto:info@astutelawoffice.com"
                  className="text-[#027b7a] font-medium hover:underline"
                >
                  info@astutelawoffice.com
                </a>
              </p>
            </div>

            {/* ---------------------------------------------------------- */}
            <section id="privacy-policy" className="scroll-mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Privacy Policy
              </h2>

              <div className="space-y-5 text-gray-700 leading-relaxed">
                <p>
                  This privacy policy applies to Astute Law Office
                  (&ldquo;Astute&rdquo;, &ldquo;the Firm&rdquo;) and explains
                  how we collect, use, disclose and otherwise process personal
                  information. Generally speaking, &ldquo;personal
                  information&rdquo; is information about an identifiable
                  individual, subject to more particular definitions or
                  interpretations under applicable law. This privacy policy does
                  not apply to personal information about employees, lawyers, or
                  other temporary or permanent staff, consultants, volunteers or
                  other individuals assigned to Astute (collectively,
                  &ldquo;Members of Astute&rdquo;) or to any information that is
                  not personal information as defined in or interpreted under
                  applicable law.
                </p>
                <p>
                  Astute offers and provides legal services and information to a
                  wide range of clients. The Firm collect, use, disclose and
                  otherwise process personal information as necessary to offer
                  and provide clients and potential clients with these legal
                  services and information and generally to fulfill our
                  professional legal responsibilities and manage our business.
                  The Firm has a professional obligation to keep confidential
                  all information we obtain within a lawyer-client relationship.
                </p>
              </div>

              {/* Information we collect */}
              <div id="information-we-collect" className="scroll-mt-10 mt-10">
                <h3 className="text-lg font-bold text-gray-900 border-l-4 border-[#027b7a] pl-4 mb-4">
                  The Information the Firm Collect and How They Are Used
                </h3>

                <div className="pl-4 space-y-5 text-gray-700 leading-relaxed">
                  <div>
                    <p className="font-bold text-gray-900 mb-2">
                      Clients, potential clients and others, generated in the
                      course of our practice
                    </p>
                    <p className="mb-2">
                      The personal information the Firm collect in relation to
                      clients and potential clients includes:
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>
                        name, pronouns, address, email address, contact details,
                        nature of the client or potential client&apos;s legal
                        issue, financial, credit, billing and account
                        information, and other incidental information relating
                        to the services we provide;
                      </li>
                      <li>
                        information material to your legal issue, for example,
                        financial, property ownership, family, employment,
                        disciplinary, benefit or tax information, and any other
                        information you give to us when you ask or instruct us
                        to act for you;
                      </li>
                      <li>
                        legal issue or area of law of interest, for instance
                        when you request receipt of materials concerning our
                        services and developments in the law;
                      </li>
                      <li>
                        information about individuals it collects in the course
                        of acting for clients, including personal information
                        about employees of clients, referrals, adverse parties
                        and parties with parallel interests, other counsel,
                        mediators and arbitrators, witnesses and potential
                        witnesses, expert witnesses and consultants; and
                      </li>
                      <li>
                        information about you contained in communications within
                        Astute and between us and you, whether online or
                        offline.
                      </li>
                    </ul>
                    <p className="mt-3 mb-2">
                      The Firm uses this information to:
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>
                        assess whether the Firm can act for you, including to
                        avoid conflicts of interest;
                      </li>
                      <li>
                        offer and provide legal information and services to you;
                      </li>
                      <li>
                        communicate with you regarding the services you request
                        and to respond to your requests and inquiries;
                      </li>
                      <li>
                        administer our client time and billing databases, and
                        issue and collect accounts;
                      </li>
                      <li>
                        provide you with material on our services and
                        developments in the law;
                      </li>
                      <li>
                        develop and use our knowledge management and precedent
                        systems and permit Members of the Firm to consult, for
                        precedent purposes, documents that we have created on
                        your behalf and that contain personal information;
                      </li>
                      <li>
                        manage and administer our business, including to avoid
                        negligence and protect you and us against error and
                        fraud; and
                      </li>
                      <li>
                        comply with legal, regulatory and self-regulatory
                        requirements, and to fulfill our legal and professional
                        obligations.
                      </li>
                    </ul>
                    <p className="mt-3">
                      The Firm collects this information directly from clients
                      and potential clients, or indirectly with their consent or
                      where permitted by law. If you do not wish to receive
                      materials about the Firm&apos;s services and legal
                      developments, you may unsubscribe or ask the Firm not to
                      contact you for these purposes.
                    </p>
                  </div>

                  <div>
                    <p className="font-bold text-gray-900 mb-2">
                      Potential Members of Astute Law Office
                    </p>
                    <p>
                      If you apply for a position at Astute, we will collect the
                      personal information contained in, and generated in
                      relation to, your application package, in order to
                      evaluate your application and assess whether to offer you
                      a position at Astute Law Office. For candidates who are
                      not offered or do not accept a position, the Firm normally
                      retain this information for a reasonable period in the
                      event that an appropriate position becomes available or
                      that you reapply. If you accept a position at Astute Law
                      Office, the information will be retained in accordance
                      with the Firm&apos;s privacy procedures applicable to the
                      personal information of Members of Astute Law Office.
                    </p>
                  </div>

                  <div>
                    <p className="font-bold text-gray-900 mb-2">
                      Astute Law Office Alumni
                    </p>
                    <p>
                      The Firm collects and retain personal information about
                      professionals who have formerly been Members of Astute Law
                      Office (&ldquo;Astute Alumni&rdquo;), including name,
                      contact details and employment status and history. The
                      Firm uses this information to maintain a record of where
                      Astute Alumni are subsequently employed or practising. If
                      you wish, you may ask us not to retain this information or
                      contact you for these purposes.
                    </p>
                  </div>

                  <div>
                    <p className="font-bold text-gray-900 mb-2">
                      Guests of and visitors to Astute
                    </p>
                    <p>
                      Astute collects information about its guests and visitors.
                      Specifically, visitors to the offices of Astute may be
                      asked to provide their name, pronouns, address, telephone
                      number and organization name. This information is retained
                      by the Firm as long as necessary for security or emergency
                      preparedness purposes. The Firm may also install video
                      cameras in public-access areas on its premises and will
                      post signs notifying individuals of the existence and
                      purpose of any such cameras. The Firm uses the information
                      we collect about guests of and visitors to enable us to
                      act responsibly in the event of a health or other crisis
                      or emergency and to enhance workplace security.
                    </p>
                  </div>

                  <div>
                    <p className="font-bold text-gray-900 mb-2">
                      Agents, vendors, suppliers, expert witnesses and foreign
                      associates
                    </p>
                    <p>
                      Astute may collect information about third-party agents,
                      vendors, suppliers, expert witnesses and foreign
                      associates (&ldquo;Service Providers&rdquo;) who provide
                      goods, services and information to Astute. This
                      information would include name and contact information,
                      banking information and information about experience and
                      qualifications. We collect this information directly from
                      our Service Providers, or indirectly with their consent or
                      where permitted by law. The Firm use this information to
                      assess suitability for particular assignments; to contact
                      you, where necessary, in relation to the goods, services
                      and information you are providing to Astute; and to pay
                      you for your services. The Firm may also use this
                      information to provide you with material regarding our
                      services or developments in the law. If you do not wish to
                      receive materials about our services and legal
                      developments, you may unsubscribe or ask the Firm not to
                      contact you for these purposes.
                    </p>
                  </div>
                </div>
              </div>

              {/* How we collect */}
              <div id="how-we-collect" className="scroll-mt-10 mt-10">
                <h3 className="text-lg font-bold text-gray-900 border-l-4 border-[#027b7a] pl-4 mb-4">
                  How The Firm Collects Information About You
                </h3>
                <div className="pl-4 space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    The Firm typically collect personal information directly
                    from you or through our interaction with you. However,
                    sometimes the Firm may obtain personal information about you
                    from other sources. For example, in relation to clients, in
                    addition to personal information that you provide, the Firm
                    may collect personal information from:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>a government agency or registry;</li>
                    <li>
                      third parties, such as your real estate agent, your
                      financial institution, your insurance company, or your
                      employer; and
                    </li>
                    <li>
                      other law firms or agents who have acted for you in the
                      past, where these parties have information relevant to the
                      matter in which we are acting for you.
                    </li>
                  </ul>
                  <p>
                    In relation to potential Members of Astute, in addition to
                    personal information that you provide, we may collect
                    personal information from:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>
                      the third parties you provide as references in support of
                      your application; and
                    </li>
                    <li>
                      individuals involved in the evaluation and review process.
                    </li>
                  </ul>
                </div>
              </div>

              {/* How we share */}
              <div id="how-we-share" className="scroll-mt-10 mt-10">
                <h3 className="text-lg font-bold text-gray-900 border-l-4 border-[#027b7a] pl-4 mb-4">
                  How The Firm Discloses and Shares Your Information
                </h3>
                <div className="pl-4 space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    Astute discloses the personal information it collects about
                    clients or other individuals it deals with to third parties
                    where:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>
                      the legal services the Firm provides to you require that
                      you give your personal information to third parties, such
                      as a lender in a real estate mortgage transaction;
                    </li>
                    <li>
                      the Firm is required or authorized by law to do so, for
                      example, where the rules of court require us to provide
                      personal information to the opposite side and the court in
                      a litigation matter or where a court issues a subpoena or
                      order;
                    </li>
                    <li>
                      the Firm engage an expert or consultant on your behalf in
                      a litigation matter;
                    </li>
                    <li>
                      the Firm retains another law firm or agent to act or
                      assist in acting on your behalf;
                    </li>
                    <li>
                      it is necessary to collect fees, for instance, to a
                      financial institution or collection agent;
                    </li>
                    <li>
                      necessary to comply with regulatory (including
                      self-regulatory) requirements or requests from
                      governmental authorities, for example, disclosure of
                      personal information reasonably requested or required by
                      governing bodies of the legal profession in the course of
                      its oversight of our practice;
                    </li>
                    <li>
                      you have instructed the Firm to disclose your personal
                      information to a third party for a designated purpose; and
                    </li>
                    <li>
                      the Firm reasonably believe a third party requesting your
                      information is your agent.
                    </li>
                  </ul>
                  <p>
                    The Firm may disclose personal information about Astute
                    Alumni in order to provide an employment reference to a
                    third party where you have requested the provision of the
                    reference.
                  </p>
                  <p>
                    <strong className="text-gray-900">
                      Service Providers.
                    </strong>{" "}
                    Astute may also transfer your personal information to
                    Service Providers, including our affiliates, hired to
                    administer or provide products, services or information on
                    our behalf. The Firm require our Service Providers to use
                    your personal information only as necessary to perform the
                    services we have hired them to provide. Most of our Service
                    Providers process personal information in Canada or the EEA.
                    On occasion, the Firm may use service providers that process
                    personal information in the United States or other countries
                    that do not offer the same legal protections for personal
                    information as Canada or the EEA. In such cases, the Firm
                    will ensure that appropriate contractual protections are in
                    place, as required by applicable laws. If you have any
                    questions about the Firm&apos;s use of Service Providers,
                    including outside of Québec, Canada or the EEA, please
                    contact us.
                  </p>
                  <p>
                    <strong className="text-gray-900">
                      Business Transactions.
                    </strong>{" "}
                    The Firm may also use and disclose personal information to
                    parties connected with the proposed or actual financing,
                    insuring, sale or other disposal of all or part of our
                    business or assets, for purposes connected to evaluating and
                    performing the transaction. These purposes may include
                    determining whether to proceed with the transaction or
                    business relationship, or fulfilling any records or other
                    reporting requirements to those parties. Where applicable,
                    the Firm will take steps to require that such parties treat
                    your personal information in accordance with this privacy
                    policy and use and disclose it only for the purposes for
                    which it was collected, including to provide the services or
                    information that Astute would otherwise provide to you and
                    generally to carry on Astute business.
                  </p>
                </div>
              </div>

              {/* Website */}
              <div id="firm-website" className="scroll-mt-10 mt-10">
                <h3 className="text-lg font-bold text-gray-900 border-l-4 border-[#027b7a] pl-4 mb-4">
                  The Firm&apos;s Website
                </h3>
                <div className="pl-4 space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    As most websites do, the Firm uses automatic data collection
                    technologies to track usage patterns on our website. Each
                    time you visit the website, the Firm&apos;s server records
                    your Internet service provider, IP address, the date and
                    time of your visit, the pages you visit and the documents
                    downloaded, the searches you performed, and the referring
                    URLs you came from. We use this information to optimize our
                    website service.
                  </p>
                  <p>
                    For your convenience, we may offer links from our website to
                    other websites. However, Astute is not responsible for, nor
                    does it accept any liability for, the personal information
                    collection, use and disclosure practices of other entities
                    to which the Firm&apos;s website may link. You should
                    consult the privacy policies of these other entities before
                    providing any personal information on their websites.
                  </p>
                </div>
              </div>

              {/* Legal basis */}
              <div id="legal-basis" className="scroll-mt-10 mt-10">
                <h3 className="text-lg font-bold text-gray-900 border-l-4 border-[#027b7a] pl-4 mb-4">
                  Legal Basis for Processing
                </h3>
                <div className="pl-4 space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    In connection with the Firm&apos;s commercial activities
                    outside of the European Economic Area (&ldquo;EEA&rdquo;),
                    the Firm processes personal information with consent except
                    where otherwise permitted or required by law. For example,
                    the Firm may be permitted to collect, use or disclose
                    personal information without consent in order to collect a
                    debt you owe to the Firm, to comply with a subpoena or court
                    order, or to comply with the rules of court regarding the
                    production of records. Your consent may be express or
                    implied, depending on the circumstances and the sensitivity
                    of the personal information in question. For example, in
                    most cases, a client&apos;s consent to the collection, use
                    and disclosure of personal information by Astute may be
                    implied by the fact that the client has engaged Astute to
                    provide legal services, where the collection, use and
                    disclosure of personal information relates to the
                    performance of those services by Astute.
                  </p>
                  <p>
                    In connection with our commercial activities in the EEA, the
                    Firm relies on one of the following legal grounds (as
                    appropriate) to process personal information:
                  </p>
                  <ol className="list-decimal pl-5 space-y-1.5">
                    <li>
                      To enter and perform a contract with you or to perform any
                      steps you require from the Firm before entering into a
                      contract.
                    </li>
                    <li>
                      To pursue our legitimate business interests in
                      establishing, managing or concluding our business
                      relationship with you.
                    </li>
                    <li>
                      Where you have specifically consented to the Firm
                      processing your personal information.
                    </li>
                    <li>
                      To comply with the Firm&apos;s legal obligations and
                      establish, exercise or defend the Firm&apos;s legal
                      rights.
                    </li>
                  </ol>
                  <p>
                    Where personal information is processed with consent, you
                    may (subject to contractual and legal restrictions) refuse
                    to provide your consent, or choose to withdraw your consent,
                    to the Firm&apos;s processing of your personal information
                    by contacting the Firm at{" "}
                    <a
                      href="mailto:info@astutelawoffice.com"
                      className="text-[#027b7a] font-medium hover:underline"
                    >
                      info@astutelawoffice.com
                    </a>
                    . Note that if you refuse to consent, or withdraw your
                    consent, to certain processing of your personal information,
                    we may not be able to provide certain of our services.
                  </p>
                </div>
              </div>

              {/* Security & retention */}
              <div id="security-retention" className="scroll-mt-10 mt-10">
                <h3 className="text-lg font-bold text-gray-900 border-l-4 border-[#027b7a] pl-4 mb-4">
                  Security and Retention
                </h3>
                <div className="pl-4 space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    Astute has implemented reasonable physical, organizational
                    and technological security measures to safeguard the
                    personal information in its custody or control. These
                    include safeguards reasonable for the sensitivity, use,
                    quantity, and storage medium of the personal information to
                    protect against loss or theft, as well as unauthorized
                    access, disclosure, copying, use, or modification.
                    Authorized Members of Astute, agents and mandatories have
                    access to your personal information for the performance of
                    their duties.
                  </p>
                  <p>
                    You can generally visit the Astute website without providing
                    any personal information. However, given that electronically
                    submitted data is not 100 per cent secure, the Firm make no
                    warranties as to the security of any such personal
                    information that you submit, which you do at your own risk.
                  </p>
                  <p>
                    Personal information is retained on the Firm&apos;s servers
                    or those of its Service Providers as described in this
                    privacy policy, and otherwise in accordance with our record
                    retention policies. The Firm&apos;s record retention periods
                    are established taking into account requirements of privacy
                    laws, the purposes for which the information was collected,
                    legal and regulatory requirements to retain the information
                    for minimum periods, limitation periods for taking legal
                    action, and our business purposes.
                  </p>
                </div>
              </div>

              {/* Access & correction */}
              <div id="access-correction" className="scroll-mt-10 mt-10">
                <h3 className="text-lg font-bold text-gray-900 border-l-4 border-[#027b7a] pl-4 mb-4">
                  Access, Correction and Other Rights
                </h3>
                <div className="pl-4 space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    The Firm maintain a file of your personal information for
                    the purposes described in this privacy policy. This file is
                    accessible at Astute Law Office, 55 Village Centre Place, Suite 200, Mississauga, ON L4Z1V9. If you wish to request
                    access to, or correction of, your personal information in
                    custody or control of Astute, please make your request in
                    writing to the Firm at the address below. The Firm may need
                    to verify your identity before searching for or providing
                    you with personal information. In some circumstances, the
                    Firm may not provide access to your personal information,
                    for example, if it contains the personal information of
                    other persons, if it constitutes confidential commercial
                    information, if it is protected by solicitor-client
                    privilege, or if it is otherwise not properly the subject of
                    an access request.
                  </p>
                  <p>
                    Since the Firm predominantly use personal information to
                    provide legal services, it is important that the information
                    be accurate and up to date. Please inform the Firm as soon
                    as possible of any changes to your personal information.
                  </p>
                  <p>
                    Depending on your jurisdiction, you may also have the right,
                    in specified circumstances, to object to the Firm&apos;s use
                    of your personal information, to request the deletion of
                    your personal information or restrict its use, to request a
                    copy of the information you have provided to the Firm to use
                    for your own purposes, or to lodge a complaint with the
                    supervisory authority. If you have any questions about these
                    rights, or you would like to exercise any of them, please
                    contact us.
                  </p>
                </div>
              </div>

              {/* Inquiries */}
              <div id="inquiries" className="scroll-mt-10 mt-10">
                <h3 className="text-lg font-bold text-gray-900 border-l-4 border-[#027b7a] pl-4 mb-4">
                  Inquiries and Complaints
                </h3>
                <div className="pl-4 text-gray-700 leading-relaxed">
                  <p>
                    If you have any questions, inquiries or complaints about the
                    Firm&apos;s personal information practices, please contact
                    the Firm at Astute Law Office, 55 Village Centre Place, Suite 200, Mississauga, ON L4Z1V9 or via email at{" "}
                    <a
                      href="mailto:info@astutelawoffice.com"
                      className="text-[#027b7a] font-medium hover:underline"
                    >
                      info@astutelawoffice.com
                    </a>
                    .
                  </p>
                </div>
              </div>

              {/* Changes */}
              <div id="changes" className="scroll-mt-10 mt-10">
                <h3 className="text-lg font-bold text-gray-900 border-l-4 border-[#027b7a] pl-4 mb-4">
                  Changes to This Policy
                </h3>
                <div className="pl-4 text-gray-700 leading-relaxed">
                  <p>
                    This privacy policy is effective as of the date last posted.
                    Astute reserves the right to change this privacy policy at
                    any time. The Firm will take reasonable steps to advise you
                    of any changes to this privacy policy, including by posting
                    the revised policy on the Firm&apos;s website. It is
                    recommended that you review this privacy policy from time to
                    time to obtain the current version. You may contact us at
                    the address, email address or telephone number above to
                    obtain a current copy of this privacy policy.
                  </p>
                </div>
              </div>
            </section>

            {/* ---------------------------------------------------------- */}
            <hr className="my-14 border-gray-200" />

            <section id="accessible-service" className="scroll-mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Astute Accessible Client Service Policy
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Astute Law Office (&ldquo;Astute&rdquo; or the
                  &ldquo;Firm&rdquo;) is committed to ensuring that we provide
                  services to our clients and client representatives with
                  disabilities in an accessible manner, and in a way that
                  respects the dignity and independence of those individuals.
                  The Firm&apos;s commitment to ensuring accessible service is
                  part of our overall objectives of providing excellent client
                  service and promoting diversity.
                </p>
                <p>
                  This Astute Accessible Client Service Policy (the
                  &ldquo;Policy&rdquo;) establishes policies, practices and
                  procedures relating to the Firm&apos;s provision of services
                  to clients, client representatives and other third parties.
                  Astute may implement additional policies, practices and/or
                  procedures in this regard, including those contained in client
                  service training materials. However, all such additional
                  policies, practices and procedures will be consistent with the
                  Policy.
                </p>
              </div>
            </section>

            {/* ---------------------------------------------------------- */}
            <section id="accessibility-plan" className="scroll-mt-10 mt-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Accessibility Plan Pursuant to the Accessibility for Ontarians
                with Disabilities Act, 2005
              </h2>
              <div className="text-gray-700 leading-relaxed">
                <p>
                  This Accessibility Plan for Astute Law Office
                  (&ldquo;Astute&rdquo;) outlines the policies, practices and
                  actions that Astute will implement in its Ontario operations
                  over a multi-year period (the &ldquo;Plan&rdquo;) to improve
                  accessibility for individuals with disabilities. The Plan also
                  incorporates and references Astute&apos;s existing
                  accessibility policies and practices in an effort to
                  streamline the Firm&apos;s efforts in achieving its
                  accessibility goals, and to comply with all applicable laws.
                </p>
              </div>
            </section>

            {/* ---------------------------------------------------------- */}
            <section id="fraud-notice" className="scroll-mt-10 mt-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Fraud Notice
              </h2>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 mb-6">
                <p className="font-bold text-gray-900 mb-1">
                  Fraudulent / Unauthorized Communications Using the Name of
                  Astute Law Office
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Watch for impersonation attempts sent from addresses that are
                  not genuinely ours.
                </p>
              </div>

              <div className="space-y-5 text-gray-700 leading-relaxed">
                <div>
                  <p className="font-bold text-gray-900 mb-2">
                    Fraudulent Communications and Impersonations
                  </p>
                  <p>
                    If you received an email from misleading email addresses not
                    ending with &ldquo;@astutelawoffice.com&rdquo;, we suggest
                    that you do not respond, click on any links or open
                    attachments to the email, or engage with the sender. If you
                    have actually lost any money as a result of this
                    communication, please report the crime to your local police.
                  </p>
                  <ul className="list-disc pl-5 mt-3 space-y-1.5">
                    <li>
                      Canadian residents may report the attempted fraud to the{" "}
                      <a
                        href="http://www.antifraudcentre-centreantifraude.ca/index-eng.htm"
                        className="text-[#027b7a] font-medium hover:underline"
                      >
                        Canadian Anti-Fraud Centre
                      </a>
                      .
                    </li>
                    <li>
                      U.S. residents may report the attempted fraud to the{" "}
                      <a
                        href="https://complaint.ic3.gov"
                        className="text-[#027b7a] font-medium hover:underline"
                      >
                        FBI Internet Crime Complaint Centre
                      </a>
                      .
                    </li>
                    <li>
                      U.K. residents may report the attempted fraud to{" "}
                      <a
                        href="https://www.actionfraud.police.uk"
                        className="text-[#027b7a] font-medium hover:underline"
                      >
                        Action Fraud
                      </a>
                      .
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="font-bold text-gray-900 mb-2">
                    False Claims of Association With Astute Law Office
                  </p>
                  <p>
                    If you wish to communicate with an Astute Law Office lawyer,
                    please contact them directly through{" "}
                    <a
                      href="mailto:info@astutelawoffice.com"
                      className="text-[#027b7a] font-medium hover:underline"
                    >
                      info@astutelawoffice.com
                    </a>
                    .
                  </p>
                </div>
              </div>
            </section>

            <p className="text-sm text-gray-500 mt-16 pt-8 border-t border-gray-200">
              © {new Date().getFullYear()} Astute Law Office. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
