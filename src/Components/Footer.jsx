import React, { useState, useEffect } from "react";
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
  Check,
  ArrowUp
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // Colors from the first design
  const colors = {
    orange: "#f96f0c",
    yellow: "#fbb735",
    purple: "#7745bf",
    cyan: "#4dcddd",
    blue: "#7284bf",
  };

  // Show back to top button when scrolled
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Toggle accordion for mobile view
  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Functionality from the second design
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

  // Footer sections for both desktop and mobile
  const footerSections = [
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
          to: "https://docs.google.com/document/d/1EjAXl67OYd7VT37RFaWVDrsYYvHuAmIG5D_9DKmbzYQ/edit?tab=t.0#heading=h.zaqg8iwuogd7",
          target: "_blank",
          rel: "noopener noreferrer",
        },
      ],
    },
  ];

  return (
    <footer className="relative text-gray-700 w-full bg-gray-100">
      {/* Main Content */}
      <div className="pt-8 pb-5 px-4 md:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Main CTA Box */}
          <div
            className="rounded-2xl px-6 md:px-8 py-6 text-center md:text-left shadow-2xl mb-16 relative overflow-hidden transform transition-all hover:scale-[1.01] duration-300"
            style={{ background: `linear-gradient(135deg, ${colors.purple} 0%, ${colors.blue} 100%)` }}
          >
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -left-32 -top-32 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl"></div>
              <div className="absolute -right-32 -bottom-32 w-96 h-96 rounded-full bg-purple-600/20 blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-white/5 rotate-45"></div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="inline-block mb-3 bg-white/10 backdrop-blur-sm text-blue-200 px-4 py-1 rounded-full text-sm font-medium">
                  #SimplifyPayments
                </div>

                <h2 className="text-xl lg:text-2xl font-bold mb-6 leading-tight text-white">
                  Elevate Your Business with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-yellow">
                    Seamless Payments
                  </span>
                </h2>

                <p className="text-blue-100 text-base mb-4">
                  Join 10,000+ businesses that trust SPTransactionHub for
                  lightning-fast, secure payment processing.
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <button
                    className="px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-white flex items-center transition-all hover:shadow-lg transform hover:-translate-y-1 duration-300"
                    style={{ background: `linear-gradient(to right, ${colors.yellow}, ${colors.orange})` }}
                    onClick={(e) => handleLinkClick("/contact-us", e)}
                  >
                    Get Started <ArrowRight className="ml-2 w-4 h-4" />
                  </button>

                 
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="relative bg-gradient-to-br from-blue-800/40 to-purple-800/40 p-1 rounded-2xl backdrop-blur-sm shadow-lg">
                  <div className="bg-indigo-900/60 rounded-xl p-6">
                    <div className="flex flex-col gap-4 min-w-[300px]">
                      {[
                        "Fast Integration",
                        "99.9% Uptime",
                        "24/7 Support",                 
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3"
                        >
                          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${colors.cyan}30` }}>
                            <Check className="text-cyan w-5 h-5" />
                          </div>
                          <span className="text-blue-100">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-6 pt-0">
            {/* Company Info */}
            <div className="col-span-1 lg:col-span-5">
              <a 
                href="/" 
                className="flex items-center space-x-2 mb-6"
                onClick={(e) => handleLinkClick("/", e)}
              >
                <div className="relative flex items-start space-x-0.5">
                  <img
                    src="/assets/logo.png"
                    alt="SPTransactionHub Logo"
                    className="h-12 w-auto object-contain"
                    onError={(e) => {
                      e.target.src = "/api/placeholder/120/60";
                    }}
                  />
                  <span 
                    className="flex items-center justify-center text-[8px] font-semibold text-white rounded-full h-4 w-4 mt-1"
                    style={{ backgroundColor: colors.purple }}
                  >TM</span>
                </div>
              </a>

              <p className="text-base leading-7 text-gray-700 mb-6">
                SPTransactionHub is India's trusted payment gateway,
                handling millions of transactions daily with 99.99% uptime. Our
                technology ensures secure, fast and reliable
                payment processing across all digital platforms.
              </p>

              <div className="mb-6 space-y-4">
                <div className="flex items-start space-x-3 group hover:opacity-80 transition-opacity">
                  <div className="p-2 rounded-lg mt-1 flex-shrink-0" style={{ backgroundColor: `${colors.blue}15` }}>
                    <MapPin className="w-4 h-4" style={{ color: colors.purple }} />
                  </div>
                  <p className="text-sm leading-6 text-gray-700">
                    A-28, Guru Nanak Pura, Laxmi Nagar, Delhi-110092
                  </p>
                </div>

                <a href="tel:+918542867195" className="flex items-center space-x-3 group hover:opacity-80 transition-opacity">
                  <div className="p-2 rounded-lg flex-shrink-0" style={{ backgroundColor: `${colors.blue}15` }}>
                    <Phone className="w-4 h-4" style={{ color: colors.purple }} />
                  </div>
                  <p className="text-sm leading-6 text-gray-700 group-hover:underline">
                    +91-8542867195
                  </p>
                </a>

                <a href="mailto:support@sptransactionhub.com" className="flex items-center space-x-3 group hover:opacity-80 transition-opacity">
                  <div className="p-2 rounded-lg flex-shrink-0" style={{ backgroundColor: `${colors.blue}15` }}>
                    <Mail className="w-4 h-4" style={{ color: colors.purple }} />
                  </div>
                  <p className="text-sm leading-6 text-gray-700 group-hover:underline">
                    support@sptransactionhub.com
                  </p>
                </a>
              </div>

              <div className="flex space-x-4 mt-5">
                {[
                  {
                    icon: <Facebook className="w-4 h-4" />,
                    href: "https://www.facebook.com/profile.php?id=61575073861853",
                    color: colors.blue,
                  },
                  {
                    icon: <Instagram className="w-4 h-4" />,
                    href: "https://www.instagram.com/sp_transaction_hub_official?igsh=ZmpiMzJwY3Vjdmp3",
                    color: colors.purple,
                  },
                  {
                    icon: <Linkedin className="w-4 h-4" />,
                    href: "https://www.linkedin.com/in/sp-transaction-hub-technology-private-limited-9b818935a",
                    color: colors.blue,
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-gray-50 p-3 rounded-full transition shadow-md border border-gray-100 hover:shadow-lg transform hover:-translate-y-1 duration-300"
                    style={{ color: social.color }}
                    aria-label={`Visit our social media page`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links Sections - Desktop View */}
            <div className="hidden md:flex md:col-span-1 lg:col-span-7 gap-0 justify-between w-full">
              {footerSections.map((section, index) => (
                <div key={index} className="w-full max-w-[200px]">
                  <h4 className="text-2xl font-bold mb-6 relative pb-3" style={{ color: colors.purple }}>
                    {section.title}
                    <span className="absolute bottom-0 left-0 w-16 h-1 rounded-full" style={{ backgroundColor: colors.yellow }}></span>
                  </h4>
                  <ul className="space-y-5 text-lg text-gray-700">
                    {section.links.map((link, linkIndex) => (
                      <li
                        key={linkIndex}
                        className="transform transition duration-300 hover:translate-x-2"
                      >
                        <a 
                          href={link.to}
                          onClick={link.onClick || ((e) => handleLinkClick(link.to, e))}
                          target={link.target}
                          rel={link.rel}
                          className="flex items-center group font-medium whitespace-nowrap"
                        >
                          <span className="group-hover:text-purple-800">{link.name}</span>
                          <ChevronRight className="w-0 h-5 opacity-0 group-hover:opacity-100 group-hover:w-5 ml-1 transition-all duration-300" style={{ color: colors.cyan }} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Footer Links Sections - Mobile View with Accordion */}
            <div className="col-span-1 md:hidden space-y-2">
              {footerSections.map((section, index) => (
                <div key={index} className="border-b border-gray-200 pb-2">
                  <button 
                    className="flex justify-between items-center w-full py-3 text-left font-bold text-xl"
                    onClick={() => toggleAccordion(index)}
                    style={{ color: colors.purple }}
                  >
                    {section.title}
                    <ChevronRight 
                      className={`w-6 h-6 transition-transform duration-300 ${activeAccordion === index ? 'rotate-90' : ''}`} 
                    />
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      activeAccordion === index ? 'max-h-80 opacity-100 pb-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <ul className="space-y-4 text-lg text-gray-700 pl-2">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a 
                            href={link.to}
                            onClick={link.onClick || ((e) => handleLinkClick(link.to, e))}
                            target={link.target}
                            rel={link.rel}
                            className="block py-1 hover:text-purple-800 font-medium"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Strip */}
          <div
            className="mt-16 pt-5 pb-5 px-4 rounded-xl text-center text-base text-white"
            style={{
              background: `linear-gradient(135deg, ${colors.purple} 0%, ${colors.blue} 100%)`,
            }}
          >
            © {currentYear} SP Transaction Hub Technology Private Limited. All
            Rights Reserved.
          </div>
        </div>
      </div>

      {/* Back to top button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full shadow-lg transition-all hover:shadow-xl transform hover:-translate-y-1 z-50 text-white"
          style={{ background: `linear-gradient(to right, ${colors.yellow}, ${colors.orange})` }}
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};

export default Footer;