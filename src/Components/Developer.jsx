import React, { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

// Color palette from your navigation
const colors = {
  orange: "#f96f0c",
  yellow: "#fbb735",
  purple: "#7745bf",
  cyan: "#4dcddd",
  blue: "#7284bf",
};

// Developer Resource Card Component with updated colors
const DevResourceCard = ({ icon, title, description, linkText, link }) => {
  const [isHovering, setIsHovering] = useState(false);

  // Icons mapping with updated color styling
  const icons = {
    api: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke={colors.purple}
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
    sdk: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke={colors.blue}
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
    testing: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke={colors.cyan}
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
    code: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke={colors.orange}
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  };

  // Get the icon by type or default to api
  const IconComponent = icons[icon] || icons.api;

  return (
    <div
      className="rounded-lg shadow-lg p-6 transition-all duration-300"
      style={{
        backgroundColor: "#FFFFFF",
        borderTop: `3px solid ${colors.yellow}`,
        transform: isHovering ? "translateY(-5px)" : "translateY(0)",
        boxShadow: isHovering
          ? `0 15px 30px -5px ${colors.purple}20, 0 10px 10px -5px ${colors.purple}15`
          : `0 10px 15px -3px ${colors.blue}20`,
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Icon */}
      <div className="mb-5">{IconComponent}</div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-2" style={{ color: colors.purple }}>
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 mb-5">{description}</p>

      {/* Link */}
      <div className="mt-auto">
        <Link
          to={link || "#"}
          className="inline-flex items-center font-medium transition-colors"
          style={{
            color: colors.blue,
            ":hover": { color: colors.purple },
          }}
        >
          {linkText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

// CardGroup Component with improved background - only Developer Resources
const CardGroup = () => {
  const devResources = [
    {
      icon: "api",
      title: "API Documentation",
      description:
        "Comprehensive guides and references for integrating our APIs into your applications.",
      linkText: "Browse Documentation",
      link: "#",
    },
    {
      icon: "sdk",
      title: "SDKs & Libraries",
      description:
        "Tools and libraries for quick integration across multiple programming languages and platforms.",
      linkText: "View Libraries",
      link: "#",
    },
    {
      icon: "testing",
      title: "Testing Environment",
      description:
        "Sandbox environment for development and testing before deploying to production.",
      linkText: "Get Started",
      link: "#",
    },
    {
      icon: "code",
      title: "Code Examples",
      description:
        "Sample implementations and ready-to-use code snippets for common integration scenarios.",
      linkText: "See Examples",
      link: "#",
    },
  ];

  return (
    <div
      className="py-8 relative overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, white, ${colors.purple}05, white)`,
      }}
    >
      {/* Developer Resources Section */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mb-4">
            Developer Resources
          </div>
          <h2 className="text-2xl md:text-2xl font-bold mb-3 text-gray-800 leading-tight">
            Everything you need to integrate our solutions into your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              {" "}
              applications.
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-2">
          {devResources.map((resource, idx) => (
            <DevResourceCard key={idx} {...resource} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGroup;
