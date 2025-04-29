// App.jsx
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

function App() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "information-collected", title: "Information Collected & Use" },
    { id: "user-rights", title: "Your Rights" },
    { id: "data-collection", title: "Data Collection & IP" },
    { id: "cookie-usage", title: "Cookie Usage" },
    { id: "enforcement", title: "Enforcement & Compliance" },
    { id: "disclosure", title: "Disclosure & Transfer" },
    { id: "external-references", title: "External References" },
    { id: "data-security", title: "Data Security" },
    { id: "definitions", title: "Definitions" },
    { id: "modifications", title: "Modifications" },
    { id: "jurisdiction", title: "Applicable Law" },
    { id: "redressal", title: "Redressal of Grievances" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);

      // Update active section based on scroll
      const currentSections = document.querySelectorAll("section[id]");
      currentSections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Main content */}
      <main className="max-w-6xl mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row">
        {/* Sidebar navigation */}
        <aside className="md:w-1/4 md:sticky md:top-24 md:self-start mb-6 md:mb-0 md:pr-6">
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
            <h2 className="text-lg font-bold text-blue-600 mb-4">
              Table of Contents
            </h2>
            <nav>
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left py-1 px-2 rounded-md transition-colors ${
                        activeSection === section.id
                          ? "bg-blue-100 text-blue-600 font-medium"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        {/* Privacy policy content */}
        <div className="md:w-3/4">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h1 className="text-3xl font-bold text-blue-700 mb-6">
              Privacy Policy
            </h1>

            <section id="introduction" className="mb-10">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Introduction
              </h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                SP Transaction Hub Technology Private Limited, a company duly
                incorporated under the provisions of the Companies Act, 2013,
                bearing Corporate Identification Number (CIN)
                U63122DL2025PTC441930, and having its registered office at A-28,
                Kh. No. 929/425/3, Plot No. 34A, First Floor, L.H.S., Guru Nanak
                Pura, Laxmi Nagar, Delhi-110092 (hereinafter referred to as "SP
                Transaction HUB", "Company", "we", "our", or "us"), operates as
                a Payment Aggregator and offers a suite of services including
                but not limited to payouts, API integrations, and associated
                solutions to e-commerce platforms, educational entities,
                financial institutions, web aggregators, and other commercial
                establishments.
              </p>
              <p className="mb-4 text-gray-700 leading-relaxed">
                This Privacy Policy governs the manner in which we collect, use,
                process, retain, disclose, and protect the personal and
                sensitive personal data ("Personal Data") of individuals and
                entities (hereinafter referred to as "you", "your" or "User")
                accessing, utilizing, or transacting via our digital assets and
                service platforms, including but not limited to our website,
                mobile application(s), merchant interfaces, checkout pages, and
                all other digital environments and infrastructure relating to
                our Services (collectively referred to as "Platforms").
              </p>
              <p className="mb-4 text-gray-700 leading-relaxed">
                We are committed to upholding the highest standards of data
                privacy and protection in accordance with the applicable data
                protection laws, rules, and regulations ("Applicable Laws"). In
                this regard, we have implemented industry-standard security
                measures, administrative protocols, and technological safeguards
                to ensure the integrity, confidentiality, and availability of
                the Personal Data entrusted to us.
              </p>
              <p className="mb-4 text-gray-700 leading-relaxed">
                By accessing or availing our Services, you acknowledge that you
                have read, understood, and agree to be legally bound by the
                terms of this Privacy Policy, and you explicitly provide your
                informed consent to the collection, usage, processing,
                disclosure, retention, and cross-border transfer of your
                Personal Data as described herein.
              </p>

              <p className="text-gray-700 leading-relaxed">
                This Policy also outlines your data protection rights and
                provides guidance on how such rights may be exercised, along
                with the contact details of our designated grievance officer or
                data protection contact point for addressing any concerns or
                queries related to the processing of your Personal Data
              </p>
            </section>

            <section id="information-collected" className="mb-10">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Information Collected & Use
              </h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                We collect, receive, and store your Personal Information in
                accordance with applicable laws and regulations. Should you
                provide your third-party account credentials ("Third Party
                Account Information"), you acknowledge that certain content and
                information from these third-party accounts may be transmitted
                to your account with us, contingent upon your authorization of
                such transmissions.
              </p>
              <p className="mb-4 text-gray-700 leading-relaxed">
                We employ commercially reasonable efforts to ensure that the
                collection of Personal Information is restricted to that which
                is necessary to fulfill the purposes outlined in this Privacy
                Policy. In the event that we intend to use your information for
                purposes beyond those initially stated, we will seek your
                express consent prior to such use.
              </p>
              <p className="mb-4 text-gray-700 leading-relaxed">
                The Personal Information we collect will be utilized exclusively
                for the following purposes: facilitating your use of our
                services, ensuring a secure and efficient service experience,
                tailoring our offerings to align with consumer interests,
                keeping you informed about promotional offers and updates,
                resolving technical issues, personalizing your user experience,
                detecting and preventing errors, fraud, and other criminal
                activities, managing financial transactions, enforcing our Terms
                and Conditions, and for any other purpose explicitly
                communicated to you at the time of collection.
              </p>
              <h3 className="text-xl font-medium text-blue-600 mt-6 mb-3">
                What Information do we collect
              </h3>
              <p className="mb-4 text-gray-700 leading-relaxed">
                We value your privacy and are committed to ensuring that your
                personal information is protected. During your use of our
                services, we collect certain Personal Information, such as your
                name, email address, and mobile number, when you create an
                account to access the full range of services provided by SP
                Transaction HUB. Additionally, we may gather and store Sensitive
                Personal Data or Information, including but not limited to
                financial data (credit/debit card details, bank account
                information), Know Your Customer (KYC) documents in accordance
                with Reserve Bank of India (RBI) regulations, and other relevant
                details that you choose to save in your SP Transaction HUB
                account.
              </p>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Your email address may be utilized to send important updates,
                news, and newsletters, provided you opt-in for such
                communication during account registration or afterward.
                Furthermore, we may use your email to facilitate interactions
                between users, such as friend requests, personal messages, or
                other collaborative events.
              </p>

              <p className="text-gray-700 leading-relaxed">
                SP Transaction HUB ensures that your Personal Information is
                kept confidential and will not be disclosed to any third parties
                for commercial purposes. Any data provided by you may be erased
                at your discretion. If you choose to delete your information, SP
                Transaction HUB will permanently remove all stored data from its
                servers. We also retain records of customers using our platform
                for payment transactions; however, this information will only be
                shared with businesses powered by SP Transaction HUB when you
                voluntarily provide such information for business-related
                purposes. We disclaim liability for any misuse of your shared
                information by these businesses or individuals associated with
                them.
              </p>
            </section>

            <section id="user-rights" className="mb-10">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Your Rights Regarding the Data We Collect
              </h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                We are committed to respecting and safeguarding your privacy. As
                a data subject, you are entitled to certain rights under
                applicable data protection laws. These rights are as follows:
              </p>
              <ul className="list-disc pl-8 mb-4 space-y-2 text-gray-700">
                <li>
                  <span className="font-medium font-semibold">
                    Right to Keep Informed:
                  </span>{" "}
                  You have the right to be provided with clear and concise
                  information regarding the processing of your personal data.
                </li>
                <li>
                  <span className="font-medium font-semibold">
                    Right to Access:
                  </span>{" "}
                  You have the right to request confirmation as to whether your
                  personal data is being processed and inquire about specific
                  purposes.
                </li>
                <li>
                  <span className="font-medium font-semibold">
                    Right to Rectification:
                  </span>{" "}
                  If any of your personal data is inaccurate or incomplete, you
                  are entitled to request corrections or updates.
                </li>
                <li>
                  <span className="font-medium font-semibold">
                    Right to Restrict Processing:
                  </span>{" "}
                  You may request the deletion of your personal data or restrict
                  further processing.
                </li>
                <li>
                  <span className="font-medium font-semibold">
                    Right to Data Portability:
                  </span>{" "}
                  You are entitled to obtain and reuse your personal data in a
                  structured, commonly used, and machine-readable format.
                </li>
                <li>
                  <span className="font-medium font-semibold">
                    Right to Object:
                  </span>{" "}
                  You have the right to object to the use of your personal data
                  for direct marketing purposes.
                </li>
                <li>
                  <span className="font-medium font-semibold">
                    Profiling & Automated Decision-Making:
                  </span>{" "}
                  In our profiling activities, we rely on anonymized data to
                  ensure privacy.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                We strive to comply with all legal obligations concerning data
                protection and your rights, ensuring that your personal data is
                handled securely and responsibly.
              </p>
            </section>

            <section id="data-collection" className="mb-10">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Data Collection and Intellectual Property
              </h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                We gather and process certain information regarding your usage
                of our services, including but not limited to search queries,
                pages accessed, browser type, IP address, geolocation, requested
                and referring URLs, as well as timestamp data. This information
                is utilized to effectively manage and enhance the security of
                the platform, ensuring the highest standards of service.
                Additionally, we may aggregate this data to conduct statistical
                analyses of user behavior and preferences, providing valuable
                insights into the utilization of various features within SP
                Transaction HUB. However, such aggregated data is anonymized and
                cannot be traced back to any specific individual.
              </p>
              <p className="text-gray-700 leading-relaxed">
                All intellectual property rights pertaining to the SP
                Transaction HUB platform, including its website and content, are
                exclusively owned by us. Any downloading or copying of materials
                from the website does not confer upon you any ownership or
                rights to the content. In accordance with applicable law, the
                website and its contents are protected under copyright as a
                collective work, meaning the compilation, arrangement, and
                assembly of all elements are our intellectual property. This
                extends to all trademarks, logos, product and service marks, and
                other proprietary rights, whether registered or unregistered
                ("Our IP"). You expressly agree not to display or use Our IP
                without obtaining prior written consent from us. Any content on
                this website should not be interpreted as granting you any
                license, right, or interest in Our IP unless explicitly
                authorized in writing by us.
              </p>
            </section>

            <section id="cookie-usage" className="mb-10">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Cookie Usage
              </h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                We prioritize the privacy and security of our users. To enhance
                your browsing experience and optimize the functionality of our
                services, we use cookies. Cookies are small data files that are
                stored on your device while interacting with our website. These
                files allow us to uniquely identify your browser and track your
                usage patterns to improve the quality of our offerings.
              </p>
              <p className="mb-4 text-gray-700 leading-relaxed">
                We utilize both session cookies, which expire when you close
                your browser, and persistent cookies, which remain on your
                device until manually deleted. If you wish to remove persistent
                cookies, you can do so by following the instructions in your
                browser's help section. However, please be aware that disabling
                cookies may hinder the functionality of certain features on SP
                Transaction HUB.
              </p>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Furthermore, SP Transaction HUB employs third-party services
                that may gather anonymous data regarding your interactions with
                our platform through cookies. These third-party entities may use
                this data, including your browsing history across various
                websites, to serve targeted advertisements related to SP
                Transaction HUB's products and services. It is important to note
                that these third-party tools do not collect or have access to
                any personally identifiable information such as your name,
                contact details, or other sensitive data.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For those who wish to opt-out of sharing browsing data with
                third-party services, you may deactivate cookies through your
                browser settings. Please refer to your browser's help file for
                guidance on how to disable cookies. By managing your cookie
                preferences, you retain control over your personal data while
                still benefiting from the full functionality of our website.
              </p>
            </section>

            <section id="enforcement" className="mb-10">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Enforcement of Rights and Compliance Measures
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may utilize the information obtained through your use of its
                services, including but not limited to Personal Information, for
                the purpose of investigating, enforcing, and ensuring compliance
                with its Terms and Conditions and this Privacy Policy. This may
                include, without limitation, the monitoring of user activity to
                detect potential violations, undertaking internal reviews,
                cooperating with law enforcement or regulatory authorities when
                legally obligated, and initiating appropriate legal proceedings
                or remedial actions.
              </p>
            </section>

            <section id="disclosure" className="mb-10">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Disclosure and Transfer of Personal Data
              </h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                We uphold the highest standards of confidentiality and data
                protection. Your personal information shall not be disclosed or
                transferred to any third party except where it is necessary for
                the performance of legitimate business functions or as mandated
                by law. Such third parties may include, but are not limited to,
                financial institutions such as banks, the Reserve Bank of India
                (RBI), and other regulatory or governmental authorities as
                required under applicable laws.
              </p>
              <p className="mb-4 text-gray-700 leading-relaxed">
                We may share personal data solely for purposes including, but
                not limited to, facilitating the services offered by SP
                Transaction HUB, conducting internal quality assurance
                processes, enabling account setup, rendering technical or
                customer support, and integrating functionalities such as
                contact synchronization in accordance with your explicit
                instructions.
              </p>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Additionally, SP Transaction HUB reserves the right to disclose
                personal information in good faith if such disclosure is
                reasonably deemed necessary to: (a) address or investigate any
                suspected unlawful or fraudulent activity; (b) enforce our Terms
                of Use and Privacy Policy; (c) comply with applicable legal
                obligations, including judicial orders, subpoenas, or statutory
                mandates; or (d) safeguard the legal rights, integrity,
                property, or safety of SP Transaction HUB, its users,
                affiliates, or the public at large. We do not hold any
                obligation to challenge the validity or enforceability of any
                lawful request issued by a competent authority
              </p>
              <p className="text-gray-700 leading-relaxed">
                Furthermore, we may share non-personally identifiable,
                aggregated data concerning user interactions and behavioral
                trends with third parties for the purpose of evaluating or
                establishing commercial relationships, such as with advertisers
                or content distributors. For instance, we may disclose the
                number of users who have viewed or engaged with particular
                promotional content, without revealing individual user
                identities.
              </p>
            </section>

            <section id="external-references" className="mb-10">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                External References and Third-Party Linkages
              </h2>
              <p className="text-gray-700 leading-relaxed">
                This website may contain references to third-party entities,
                including but not limited to names, trademarks, products,
                services, or hyperlinks that lead to external websites or
                informational content. Such references and links are provided
                strictly for the convenience of the user and shall not be
                construed as an endorsement, sponsorship, affiliation, or
                recommendation by SP Transaction HUB TECHNOLOGY PRIVATE LIMITED
                ("SP Transaction HUB") of any kind. SP Transaction HUB does not
                assume responsibility for the privacy practices, content, or
                policies of any third-party websites. Furthermore, SP
                Transaction HUB does not disclose your Personal Information to
                such third parties, except as explicitly stated within this
                Privacy Policy or as required by applicable law. We strongly
                encourage all users to independently review the privacy policies
                and terms of use of any third-party sites accessed through links
                available on our platform.
              </p>
            </section>

            <section id="data-security" className="mb-10">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Data Security and Confidentiality
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We prioritize the security and confidentiality of your personal
                information. Your account is solely accessible through your
                unique password, and we employ state-of-the-art security
                protocols to protect the Personal Information stored in our
                systems. Access to this data is strictly limited to authorized
                personnel, including employees and contractors, who require it
                to perform their designated duties, such as customer support
                representatives. While we implement industry-leading safeguards,
                please note that SP Transaction HUB cannot be held liable for
                any intercepted information transmitted via the internet. By
                using our services, you acknowledge and agree to release SP
                Transaction HUB from any and all claims or liabilities resulting
                from unauthorized access or misuse of intercepted data. Should
                you have any concerns or inquiries regarding our security
                measures, please do not hesitate to contact us via email.
              </p>
            </section>

            <section id="definitions" className="mb-10">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Definitions
              </h2>
              <div className="text-gray-700 mb-3 leading-relaxed">
                <p className="mb-2">
                  <span className="font-medium font-semibold">
                    "Applicable Laws"
                  </span>{" "}
                  refers to the Information Technology Act, 2000, the
                  Information Technology (Reasonable Security Practices and
                  Procedures and Sensitive Personal Data or Information) Rules,
                  2011, the Payment and Settlement Systems Act, 2007, the
                  Prevention of Money Laundering Act, 2002, and any other
                  applicable laws, rules, regulations, guidelines, circulars,
                  ordinances, orders, judgments, notifications, decrees,
                  bye-laws, governmental restrictions, or any similar forms of
                  decision, determination, interpretation, policy, or
                  administration having the force of law in India, whether
                  currently in effect or enacted thereafter, as relevant to SP
                  Transaction HUB.
                </p>
                <p className="mb-2">
                  <span className="font-medium font-semibold">
                    "Biometrics"
                  </span>{" "}
                  means technologies that measure and analyze human body
                  characteristics, including but not limited to ‘fingerprints’,
                  ‘eye retinas and irises’, ‘voice patterns’, ‘facial patterns’,
                  ‘hand measurements’, and ‘DNA’, for the purpose of
                  authentication.
                </p>
                <p className="mb-2">
                  <span className="font-medium font-semibold">"Password"</span>{" "}
                  refers to any secret word, phrase, code, passphrase, secret
                  key, encryption or decryption keys that are used to gain
                  access to information or services.
                </p>
                <p className="mb-2">
                  <span className="font-medium font-semibold">
                    “Reasonable Security Practices and Procedures”
                  </span>{" "}
                  refer to the security measures and practices implemented to
                  protect Personal Data from unauthorized access, damage, use,
                  modification, disclosure, or impairment, as stipulated in
                  relevant agreements or as specified by Applicable Laws.
                </p>
                <p className="mb-2">
                  <span className="font-medium font-semibold">
                    "Personal Data"
                  </span>{" "}
                  encompasses any information that pertains to You, either
                  directly or indirectly, which, when combined with other
                  available or likely-to-be-available information, can be used
                  to identify You. This includes, but is not limited to:
                </p>
                <ul lassName="mb-2">
                  <i> - Passwords</i>
                  <li>
                    - Financial information (such as bank account details,
                    credit card numbers, debit card numbers, or other payment
                    instruments)
                  </li>
                  <li>
                    - Physical, physiological, or mental health conditions
                  </li>
                  <li>- Sexual orientation</li>
                  <li>- Medical records and history</li>
                  <li>- Biometric information</li>
                  <li>
                    - Any other information related to the aforementioned,
                    provided by You to Us in connection with obtaining Our
                    services
                  </li>
                  <li>
                    - Any information received by Us as part of lawful contracts
                    or otherwise processed or stored by Us
                  </li>
                </ul>
                <p className="mb-2">
                  <span className="font-medium font-semibold">
                    "Processing"{" "}
                  </span>{" "}
                  refers to any automated operation or set of operations
                  performed on Personal Data, including but not limited to
                  collection, recording, organization, structuring, storage,
                  adaptation, alteration, retrieval, use, combination, indexing,
                  sharing, disclosure by transmission, dissemination, or other
                  forms of making available, restriction, erasure, or
                  destruction of such data.
                </p>
                <p>
                  <b>Exception to Personal Data:</b> If any information provided
                  by You is publicly available, freely accessible in the public
                  domain, or furnished under the Right to Information Act, 2005,
                  or any other Applicable Laws, it will not be regarded as
                  Personal Data under this Policy.
                </p>
              </div>
            </section>

            <section id="modifications" className="mb-10">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Modifications to the Privacy Policy
              </h2>
              <p className=" mb-4 text-gray-700 leading-relaxed">
                The Privacy Policy of SP Transaction HUB is subject to periodic
                revisions and updates, which may be implemented without prior
                notice. We strongly encourage users to review this Privacy
                Policy regularly to remain informed about any changes. Any
                amendments made to this policy shall be effective immediately
                upon publication for all users of SP Transaction HUB. It is the
                user's responsibility to keep their Personal Information up to
                date, including ensuring that the most current email address is
                provided to us. Should you wish to prevent changes to the way
                your Personal Information is utilized, you must notify us
                promptly if you wish to deactivate your account with SP
                Transaction HUB. Your continued use of SP Transaction HUB
                services following any modification of this Privacy Policy
                signifies your acceptance of such changes and your agreement to
                comply with the revised terms and conditions.
              </p>
            </section>

            <section id="jurisdiction" className="mb-10">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Applicable Law and Jurisdiction
              </h2>
              <p className="text-gray-700 leading-relaxed">
                This Privacy Policy and your use of the Website shall be
                governed by and construed in accordance with the laws of India.
                By accessing and using this Website, you agree that any
                disputes, claims, or legal proceedings arising out of or
                relating to this Privacy Policy or your use of the Website shall
                be exclusively brought before the competent courts or tribunals
                located in Delhi, India. You hereby irrevocably submit to the
                jurisdiction of the courts/tribunals in Delhi and waive any
                objections to such jurisdiction or venue. This submission to
                jurisdiction is made in the context of the applicable laws, and
                all such proceedings shall be subject to the laws of India
                without regard to its conflict of law principles.
              </p>
            </section>

            <section id="redressal" className="mb-10">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Redressal of Complaints and Grievances
              </h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                In adherence to applicable data protection laws and in the
                interest of upholding transparency, accountability, and user
                trust, SP Transaction HUB Technology Private Limited maintains a
                robust grievance redressal mechanism for addressing concerns
                related to the collection, usage, storage, and processing of
                Personal Information, as well as any disputes pertaining to the
                content hosted on this Website. Users who believe their
                confidentiality, intellectual property rights, or any
                proprietary rights have been violated during the course of their
                interaction with the Website are encouraged to formally report
                such incidents.
              </p>
              <p className="mb-4 text-gray-700 leading-relaxed">
                All grievances must be submitted in writing to the designated
                Grievance cum Nodal Officer whose contact details are provided
                below. Alternatively, users may also lodge a formal complaint by
                raising a grievance ticket through the hyperlink made available
                for this purpose. Each complaint shall be reviewed and resolved
                in accordance with the principles of fairness, promptness, and
                lawful redressal as per the prevailing policies of SP
                Transaction HUB Technology Private Limited.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-md mt-4">
                <h4 className="font-semibold text-blue-700">
                  Grievance cum Nodal Officer
                </h4>
                <address className="mt-2 not-italic text-gray-700">
                  Mr. Ayushman
                  <br />
                  SP Transaction HUB Technology Private Limited
                  <br />
                  Address: A-28, KH. NO.929/425/3, PLOT NO.34-A, FIRST FLOOR
                  L.H.S.,
                  <br />
                  GURU NANAK PURA, LAXMI NAGAR, DELHI-110092
                  <br />
                  Email: grievances@sptransactionhub.com
                </address>
              </div>
            </section>
          </div>
        </div>
      </main>

   

    </div>
  );
}

export default App;
