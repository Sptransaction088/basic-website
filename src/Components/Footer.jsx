import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const colors = {
    orange: "#f96f0c",
    yellow: "#fbb735",
    purple: "#7745bf",
    cyan: "#4dcddd",
    blue: "#7284bf",
  };

  const handleLinkClick = (path, event) => {
    event.preventDefault();
    console.log("Footer: Clicking link:", path);
    window.location.href = path; // Manual navigation
  };

  // Function to handle PDF download for Terms & Conditions
  const handleTermsClick = (event) => {
    event.preventDefault();
    console.log("Footer: Opening Terms & Conditions PDF");
    
    // Path to your PDF file
    const pdfPath = "/assets/Term Of Use.pdf";
    
    // Open the PDF in a new tab
    window.open(pdfPath, "_blank");
  };

  return (
    <footer className="relative text-gray-700 w-full bg-gray-100">
      <div className="pt-6 pb-5 px-4 md:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-2xl px-6 md:px-8 py-6 text-center md:text-left shadow-2xl mb-16 relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${colors.purple} 0%, ${colors.blue} 100%)`,
            }}
          >
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="text-xl lg:text-2xl font-bold mb-6 leading-tight text-white">
                  Elevate Your Business with Seamless Payments
                </h2>
                <p className="text-blue-100 text-base mb-4">
                  Join 10,000+ businesses that trust SPTransactionHub.
                </p>
                <button
                  className="px-6 py-3 rounded-xl font-bold text-white"
                  style={{
                    background: `linear-gradient(to right, ${colors.yellow}, ${colors.orange})`,
                  }}
                  onClick={(e) => handleLinkClick("/contact-us", e)}
                >
                  Get Started <ArrowRight className="ml-2 w-4 h-4 inline" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="col-span-1">
              <a href="/" onClick={(e) => handleLinkClick("/", e)}>
                <img
                  src="/assets/logo.png"
                  alt="SPTransactionHub Logo"
                  className="h-12 w-auto"
                  onError={(e) => (e.target.src = "#")}
                />
              </a>
              <p className="text-base text-gray-700 my-4">
                SPTransactionHub: Trusted payment gateway with 99.99% uptime.
              </p>
              <div className="space-y-4">
                <p className="text-sm text-gray-700">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  A-28, Guru Nanak Pura, Laxmi Nagar, Delhi-110092
                </p>
                <p className="text-sm text-gray-700">
                  <Phone className="w-4 h-4 inline mr-2" />
                  +91-8542867195
                </p>
                <p className="text-sm text-gray-700">
                  <Mail className="w-4 h-4 inline mr-2" />
                  support@sptransactionhub.com
                </p>
              </div>
            </div>

            {[
              {
                title: "Products",
                links: [
                  { name: "UPI Payments", to: "/upi" },
                  { name: "IMPS Transfer", to: "/imps" },
                  { name: "API Integration", to: "/api" },
                  { name: "Wallet", to: "/wallet" },
                ],
              },
              {
                title: "Company",
                links: [
                  { name: "About Us", to: "/about" },
                  { name: "Contact Us", to: "/contact-us" },
                  { name: "Terms & Conditions", to: "/assets/Term Of Use.pdf", onClick: handleTermsClick },
                  { name: "Privacy Policy", to: "/privacy-policy" },
                ],
              },
              {
                title: "Developers",
                links: [
                 
                  {
                    name: "API Documentation",
                    to: " https://docs.google.com/document/d/1EjAXl67OYd7VT37RFaWVDrsYYvHuAmIG5D_9DKmbzYQ/edit?tab=t.0#heading=h.zaqg8iwuogd7",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                 
                ],
              },
            ].map((section, index) => (
              <div key={index}>
                <h4
                  className="text-xl font-bold mb-4"
                  style={{ color: colors.purple }}
                >
                  {section.title}
                </h4>
                <ul className="space-y-2 text-base text-gray-700">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.to}
                        onClick={link.onClick || ((e) => handleLinkClick(link.to, e))}
                        target={link.target}
                        rel={link.rel}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className="mt-16 pt-4 pb-4 px-4 rounded-xl text-center text-sm text-white"
            style={{
              background: `linear-gradient(135deg, ${colors.purple} 0%, ${colors.blue} 100%)`,
            }}
          >
            © {currentYear} SP Transaction Hub Technology Private Limited. All
            Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;