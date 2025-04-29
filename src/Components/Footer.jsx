import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
  Check
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Using the same color palette as the header
  const colors = {
    orange: "#f96f0c",
    yellow: "#fbb735",
    purple: "#7745bf",
    cyan: "#4dcddd",
    blue: "#7284bf",
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemFade = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="relative text-gray-700 w-full bg-gray-100">
      {/* Main Content */}
      <div className="pt-6 pb-5 px-4 md:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Main CTA Box */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="rounded-2xl px-6 md:px-8 py-6 text-center md:text-left shadow-2xl mb-16 relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${colors.purple} 0%, ${colors.blue} 100%)` }}
          >
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -left-32 -top-32 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl"></div>
              <div className="absolute -right-32 -bottom-32 w-96 h-96 rounded-full bg-purple-600/20 blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-white/5 rotate-45"></div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <motion.div variants={staggerChildren} className="max-w-2xl">
                <motion.div
                  variants={itemFade}
                  className="inline-block mb-3 bg-white/10 backdrop-blur-sm text-blue-200 px-4 py-1 rounded-full text-sm"
                >
                  #SimplifyPayments
                </motion.div>

                <motion.h2
                  variants={itemFade}
                  className="text-xl lg:text-2xl font-bold mb-6 leading-tight text-white"
                >
                  Elevate Your Business with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-yellow">
                    Seamless Payments
                  </span>
                </motion.h2>

                <motion.p
                  variants={itemFade}
                  className="text-blue-100 text-base mb-4"
                >
                  Join 10,000+ businesses that trust SPTransactionHub for
                  lightning-fast, secure payment processing across all platforms.
                </motion.p>

                <motion.div
                  variants={itemFade}
                  className="flex flex-wrap justify-center md:justify-start gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-indigo-900 hover:text-indigo-700 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold transition duration-300 shadow-lg flex items-center gap-2"
                    style={{ background: `linear-gradient(to right, ${colors.yellow}, ${colors.orange})` }}
                  >
                    <Link to="/contact-us" className="flex items-center text-white">
                      Get Started <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </motion.button>

                 
                </motion.div>
              </motion.div>

              <motion.div variants={itemFade} className="hidden lg:block">
                <div className="relative bg-gradient-to-br from-blue-800/40 to-purple-800/40 p-1 rounded-2xl backdrop-blur-sm">
                  <div className="bg-indigo-900/60 rounded-xl p-6">
                    <div className="flex flex-col gap-4 min-w-[300px]">
                      {[
                        "Fast Integration",
                        "99.9% Uptime",
                        "24/7 Support",                 
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${colors.cyan}30` }}>
                            <Check className="text-cyan w-5 h-5" />
                          </div>
                          <span className="text-blue-100">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Footer Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 md:gap-10 pt-0"
          >
            {/* Company Info */}
            <div className="col-span-1 lg:col-span-1 xl:col-span-2">
              <Link to="/" className="flex items-center space-x-2 group mb-6">
                <div className="relative flex items-start space-x-0.5">
                  <img
                    src="/assets/logo.png"
                    alt="SPTransactionHub Logo"
                    className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = "#";
                    }}
                  />
                  <span 
                    className="flex items-center justify-center text-[8px] font-semibold text-white rounded-full h-4 w-4 mt-1"
                    style={{ backgroundColor: colors.purple }}
                  >TM</span>
                </div>
              </Link>

              <p className="text-base leading-7 text-gray-700 mb-6">
                SPTransactionHub is India's most trusted payment gateway,
                handling millions of transactions daily with 99.99% uptime. Our
                cutting-edge technology ensures secure, fast and reliable
                payment processing across all digital platforms.
              </p>

              <div className="mb-6 space-y-4">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-3"
                >
                  <div className="p-2 rounded-lg mt-1 flex-shrink-0" style={{ backgroundColor: `${colors.blue}15` }}>
                    <MapPin className="w-4 h-4" style={{ color: colors.purple }} />
                  </div>
                  <p className="text-sm leading-6 text-gray-700">
                    A-28, Kh. No. 929/425/3, Plot No. 34A, First Floor L.H.S,
                    Guru Nanak Pura, Laxmi Nagar, Delhi-110092
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3"
                >
                  <div className="p-2 rounded-lg flex-shrink-0" style={{ backgroundColor: `${colors.blue}15` }}>
                    <Phone className="w-4 h-4" style={{ color: colors.purple }} />
                  </div>
                  <p className="text-sm leading-6 text-gray-700">
                    +91 98765 43210
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3"
                >
                  <div className="p-2 rounded-lg flex-shrink-0" style={{ backgroundColor: `${colors.blue}15` }}>
                    <Mail className="w-4 h-4" style={{ color: colors.purple }} />
                  </div>
                  <p className="text-sm leading-6 text-gray-700">
                    support@sptransactionhub.com
                  </p>
                </motion.div>
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
                  {
                    icon: <Twitter className="w-4 h-4" />,
                    href: "https://twitter.com",
                    color: colors.cyan,
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.2, y: -5 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-gray-50 p-3 rounded-full transition shadow-md border border-gray-100"
                    style={{ color: social.color }}
                    aria-label={`Visit our social media page`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Footer Links Sections */}
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
                  { name: "Terms & Conditions", to: "#" },
                  { name: "Privacy Policy", to: "/privacy-policy" },
                ],
              },
              {
                title: "Developers",
                links: [
                  { name: "Getting Started", to: "#" },
                  { name: "API Documentation", to: "#" },
                  { name: "Integration Guide", to: "#" },
                 
                  { name: "FAQs", to: "#" },
                ],
              },
            ].map((section, index) => (
              <div key={index}>
                <h4 className="text-xl font-bold mb-6 relative pb-3" style={{ color: colors.purple }}>
                  {section.title}
                  <span className="absolute bottom-0 left-0 w-12 h-1 rounded-full" style={{ backgroundColor: colors.yellow }}></span>
                </h4>
                <motion.ul
                  variants={staggerChildren}
                  className="space-y-4 text-base text-gray-700"
                >
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      variants={itemFade}
                      whileHover={{ x: 10 }}
                      className="transform transition duration-300"
                    >
                      <Link to={link.to} className="flex items-center group">
                        
                        <span className="group-hover:text-purple-800">{link.name}</span>
                        <ChevronRight className="w-0 h-4 opacity-0 group-hover:opacity-100 group-hover:w-4 ml-1 transition-all duration-300" style={{ color: colors.cyan }} />
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            ))}
          </motion.div>

          {/* Bottom Strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 pt-4 pb-4 px-4 md:px-6 rounded-xl"
            style={{ background: `linear-gradient(135deg, ${colors.purple} 0%, ${colors.blue} 100%)` }}
          >
            <div className="flex flex-col md:flex-row justify-center items-center text-sm">
              <p className="text-white mb-4 md:mb-0">
                © {currentYear} SP Transaction Hub Technology Private Limited.
                All Rights Reserved.
              </p>
              
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;