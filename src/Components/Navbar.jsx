import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Globe,
  Phone,
  Mail,
  Shield,
  User,
  CreditCard,
  BarChart,
  Code,
  Search,
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";

const PaymentSystemNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownTimeoutRef = useRef(null);

  // Color palette
  const colors = {
    orange: "#f96f0c",
    yellow: "#fbb735",
    purple: "#7745bf",
    cyan: "#4dcddd",
    blue: "#7284bf",
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSearch = () => setIsSearchActive(!isSearchActive);

  useEffect(() => {
    const debounce = (func, wait) => {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
      };
    };

    const debouncedHandleScroll = debounce(() => {
      setIsScrolled(window.scrollY > 10);
    }, 100);

    window.addEventListener("scroll", debouncedHandleScroll);
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const navLinks = [
    {
      name: "Products",
      href: "#",
      icon: <CreditCard className="w-4 h-4" />,
      dropdown: [
        {
          title: "UPI",
          desc: "Fast, Secure, Seamless Payment Solution",
          href: "/upi",
        },
        {
          title: "IMPS",
          desc: "Instant Transfers Anytime, Anywhere Securely",
          href: "/imps",
        },
        {
          title: "API",
          desc: "Connect. Integrate. Build. Scale. Simplify",
          href: "/api",
        },
        {
          title: "WALLET",
          desc: "Empowering your spending, effortlessly securely",
          href: "/wallet",
        },
      ],
    },
    {
      name: "Pricing",
      href: "/pricing",
      icon: <BarChart className="w-4 h-4" />,
    },
    {
      name: "Banking Partners",
      href: "/banking-patner",
      icon: <Shield className="w-4 h-4" />,
    },
    {
      name: "Developers",
      href: "#",
      icon: <Code className="w-4 h-4" />,
      dropdown: [
        {
          title: "API Documentation",
          desc: "Comprehensive guides and references",
          href: "#",
        },
        {
          title: "SDKs & Libraries",
          desc: "Tools for quick integration",
          href: "#",
        },
        {
          title: "Testing Environment",
          desc: "Sandbox for development",
          href: "#",
        },
        {
          title: "Code Examples",
          desc: "Sample implementations",
          href: "#",
        },
      ],
    },
    {
      name: "About Us",
      href: "/about",
      icon: <User className="w-4 h-4" />,
    },
  ];

  const handleMouseEnter = (linkName) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsDropdownOpen(linkName);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(null);
    }, 300);
  };

  const handleDropdownItemClick = (linkName) => {
    setActiveLink(linkName);
    setTimeout(() => setIsDropdownOpen(null), 100);
  };

  const handleParentClick = (linkName, hasDropdown) => {
    if (hasDropdown) {
      setIsDropdownOpen(isDropdownOpen === linkName ? null : linkName);
    } else {
      setActiveLink(linkName);
      setIsOpen(false);
    }
  };

  return (
    <div className="w-full font-sans">
      {/* Top Bar with Social Media Icons */}
      <div
        className="text-white py-2"
        style={{
          background: `linear-gradient(135deg, ${colors.purple} 0%, ${colors.blue} 100%)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 items-center mb-2 md:mb-0">
            <span className="flex items-center group text-sm">
              <span className="flex h-2 w-2 relative mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4dcddd]"></span>
              </span>
              24/7 Support Available
            </span>
            <span className="hidden md:flex items-center text-sm group">
              <Phone className="w-3 h-3 mr-2 text-[#fff] group-hover:text-[#fbb735] transition-colors" />
              <span className="group-hover:text-[#fbb735] transition-colors">
                +91-8542867195
              </span>
            </span>
            <span className="hidden md:flex items-center text-sm group">
              <Mail className="w-3 h-3 mr-2 text-[#fff] group-hover:text-[#fbb735] transition-colors" />
              <span className="group-hover:text-[#fbb735] transition-colors">
                support@sptransactionhub.com
              </span>
            </span>
          </div>
          <div className="flex space-x-6 items-center text-sm">
            <div className="hidden md:flex space-x-4 items-center">
              <a
                href="https://www.facebook.com/profile.php?id=61575073861853"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Facebook className="w-4 h-4 text-[#fff] group-hover:text-[#fbb735] transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/sp-transaction-hub-technology-private-limited-9b818935a"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Linkedin className="w-4 h-4 text-[#fff] group-hover:text-[#fbb735] transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/sp_transaction_hub_official"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Instagram className="w-4 h-4 text-[#fff] group-hover:text-[#fbb735] transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "shadow-lg py-3" : "shadow-md py-4"
        }`}
        style={{
          background: "white",
          borderBottom: `3px solid ${colors.yellow}`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-2 group">
                <div className="relative flex items-start space-x-0.5">
                  <img src="/assets/logo.png" alt="logo" />
                  <span
                    className="flex items-center justify-center text-[8px] font-semibold text-white rounded-full h-4 w-4 mt-1"
                    style={{ backgroundColor: colors.purple }}
                  >
                    TM
                  </span>
                </div>
              </a>
            </div>

            <div className="hidden lg:flex flex-1 justify-center">
              <ul className="flex space-x-1 ml-6">
                {navLinks.map((link) => (
                  <li
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(link.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {link.dropdown ? (
                      <div
                        className="flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer"
                        style={{
                          color:
                            activeLink === link.name
                              ? colors.purple
                              : "#4B5563",
                          backgroundColor:
                            activeLink === link.name
                              ? `${colors.purple}15`
                              : "transparent",
                        }}
                        onClick={() => handleParentClick(link.name, true)}
                        aria-expanded={isDropdownOpen === link.name}
                      >
                        <span
                          className="mr-1.5"
                          style={{ color: colors.purple }}
                        >
                          {link.icon}
                        </span>
                        {link.name}
                        <ChevronDown
                          className={`ml-1 w-4 h-4 transition-transform ${
                            isDropdownOpen === link.name ? "rotate-180" : ""
                          }`}
                          style={{ color: colors.purple }}
                        />
                      </div>
                    ) : (
                      <Link
                        to={link.href}
                        className="flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors"
                        style={{
                          color:
                            activeLink === link.name
                              ? colors.purple
                              : "#4B5563",
                          backgroundColor:
                            activeLink === link.name
                              ? `${colors.purple}15`
                              : "transparent",
                        }}
                        onClick={() => handleParentClick(link.name, false)}
                      >
                        <span
                          className="mr-1.5"
                          style={{ color: colors.purple }}
                        >
                          {link.icon}
                        </span>
                        {link.name}
                      </Link>
                    )}

                    {link.dropdown && isDropdownOpen === link.name && (
                      <div
                        className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border overflow-hidden z-50"
                        style={{ borderColor: colors.cyan }}
                        onMouseEnter={() => handleMouseEnter(link.name)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="p-2">
                          {link.dropdown.map((item, index) => (
                            <Link
                              key={index}
                              to={item.href}
                              className="block p-3 rounded-md hover:bg-blue-50 transition-colors"
                              onClick={() => handleDropdownItemClick(link.name)}
                            >
                              <div
                                className="font-medium"
                                style={{ color: colors.purple }}
                              >
                                {item.title}
                              </div>
                              <div className="text-xs text-gray-500 mt-0.5">
                                {item.desc}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden md:flex items-center space-x-2">
              <button
                onClick={toggleSearch}
                className="p-2 rounded-full hover:bg-blue-50 transition-colors"
                style={{ color: colors.blue }}
                aria-label="Toggle search"
              >
                <Search className="w-5 h-5" />
              </button>
              <Link
                to="/contact-us"
                className="px-4 py-2 text-sm font-medium text-white rounded-md shadow-sm transition-colors flex items-center"
                style={{
                  background: `linear-gradient(to right, ${colors.yellow}, ${colors.orange})`,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = `linear-gradient(to right, ${colors.orange}, ${colors.yellow})`)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = `linear-gradient(to right, ${colors.yellow}, ${colors.orange})`)
                }
              >
                <User className="w-4 h-4 mr-1.5" />
                Enquiry Now
              </Link>
            </div>

            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={toggleSearch}
                className="p-2 rounded-full hover:bg-blue-50 transition-colors"
                style={{ color: colors.blue }}
                aria-label="Toggle search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md hover:bg-purple-50 transition-colors"
                style={{ color: colors.purple }}
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
              >
                {isOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {isSearchActive && (
            <div
              className="absolute inset-x-0 top-full bg-white shadow-md border-t p-4"
              style={{ borderColor: colors.cyan }}
              role="search"
            >
              <div className="max-w-3xl mx-auto relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for products, documentation or FAQs..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2"
                  style={{
                    borderColor: colors.blue,
                    ringColor: colors.purple,
                  }}
                  aria-label="Search input"
                  autoFocus
                />
                <Search className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <button
                  onClick={toggleSearch}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="mt-3 text-xs text-gray-500">
                  <span className="font-medium">Quick Links:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <Link
                      to="/developers/docs"
                      className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 hover:bg-purple-100 hover:text-purple-600 transition-colors"
                    >
                      API Documentation
                    </Link>
                    <Link
                      to="/pricing"
                      className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 hover:bg-purple-100 hover:text-purple-600 transition-colors"
                    >
                      Pricing Plans
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="lg:hidden bg-white border-t shadow-lg transition-transform duration-300 ease-in-out"
            style={{ borderColor: colors.yellow }}
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="border-b last:border-b-0"
                  style={{ borderColor: `${colors.blue}30` }}
                >
                  {link.dropdown ? (
                    <>
                      <button
                        className="w-full flex items-center justify-between py-3 px-2"
                        style={{
                          color:
                            activeLink === link.name
                              ? colors.purple
                              : "#4B5563",
                          fontWeight:
                            activeLink === link.name ? "500" : "normal",
                        }}
                        onClick={() => {
                          setIsDropdownOpen(
                            isDropdownOpen === link.name ? null : link.name
                          );
                          setActiveLink(link.name);
                        }}
                      >
                        <div className="flex items-center">
                          <span
                            className="mr-2"
                            style={{ color: colors.purple }}
                          >
                            {link.icon}
                          </span>
                          {link.name}
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            isDropdownOpen === link.name ? "rotate-180" : ""
                          }`}
                          style={{ color: colors.purple }}
                        />
                      </button>
                      {isDropdownOpen === link.name && (
                        <div
                          className="px-4 py-2 mb-2 rounded-md"
                          style={{ backgroundColor: `${colors.blue}10` }}
                        >
                          {link.dropdown.map((item, itemIdx) => (
                            <Link
                              key={itemIdx}
                              to={item.href}
                              className="block py-2 px-2 text-sm border-b last:border-b-0 hover:text-purple-600"
                              style={{
                                color: "#4B5563",
                                borderColor: `${colors.blue}20`,
                              }}
                              onClick={() => {
                                setIsDropdownOpen(null);
                                setIsOpen(false);
                              }}
                            >
                              <div
                                className="font-medium"
                                style={{ color: colors.purple }}
                              >
                                {item.title}
                              </div>
                              <div className="text-xs text-gray-500">
                                {item.desc}
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className="w-full flex items-center py-3 px-2"
                      style={{
                        color:
                          activeLink === link.name ? colors.purple : "#4B5563",
                        fontWeight: activeLink === link.name ? "500" : "normal",
                      }}
                      onClick={() => {
                        setActiveLink(link.name);
                        setIsOpen(false);
                      }}
                    >
                      <span className="mr-2" style={{ color: colors.purple }}>
                        {link.icon}
                      </span>
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-2 flex flex-col space-y-2">
                <Link
                  to="/contact-us"
                  className="flex items-center justify-center py-2.5 px-4 text-white rounded-md shadow-sm transition-colors"
                  style={{
                    background: `linear-gradient(to right, ${colors.yellow}, ${colors.orange})`,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = `linear-gradient(to right, ${colors.orange}, ${colors.yellow})`)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = `linear-gradient(to right, ${colors.yellow}, ${colors.orange})`)
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <User className="w-4 h-4 mr-2" />
                  Enquiry Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default PaymentSystemNavbar;
