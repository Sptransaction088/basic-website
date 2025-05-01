import React from "react";

// Simplified Card Component
const Card = ({ cutoutUrl, title, description, accentColor, link }) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
      {/* Product title bar */}
      <div className="px-4 py-2 text-sm font-medium flex justify-between items-center border-b border-gray-100">
        <span className="text-gray-700">{title}</span>
        <div className="flex space-x-1">
          <div className="w-2 h-2 rounded-full bg-red-400"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
        </div>
      </div>

      {/* Product image */}
      <div className="flex items-center justify-center py-4">
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center p-2"
          style={{
            background: `linear-gradient(135deg, ${accentColor}10, ${accentColor}30)`,
          }}
        >
          <img
            src={cutoutUrl || "/api/placeholder/200/200"}
            alt={title}
            className="w-20 h-20 object-contain rounded-full"
          />
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pt-1 pb-4">
        <h2 className="text-base font-bold mb-1 text-center" style={{ color: accentColor }}>
          {title}
        </h2>
        <p className="text-gray-600 text-xs mb-3 text-center">{description}</p>

        <div className="flex justify-center mt-2">
          <a href={link}>
            <button
              className="px-4 py-1.5 rounded-md text-xs font-medium text-white"
              style={{
                backgroundColor: accentColor,
              }}
            >
              Learn More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

// CardGroup Component with simplified design and reduced background height
const CardGroup = () => {
  const cards = [
    {
      cutoutUrl: "/assets/upi.jpg",
      title: "UPI",
      description: "Fast, Secure, Seamless Payment Solution",
      accentColor: "#4F46E5", // Indigo
      link: "/upi",
    },
    {
      cutoutUrl: "/assets/imps.jpg",
      title: "IMPS",
      description: "Instant Transfers Anytime, Anywhere Securely",
      accentColor: "#4F46E5", // Indigo
      link: "/imps",
    },
    {
      cutoutUrl: "/assets/api.png",
      title: "API",
      description: "Connect. Integrate. Build. Scale. Simplify",
      accentColor: "#4F46E5", // Indigo
      link: "/api",
    },
    {
      cutoutUrl: "/assets/wallets.jpg",
      title: "WALLET",
      description: "Empowering your spending, effortlessly securely",
      accentColor: "#4F46E5", // Indigo
      link: "/wallet",
    },
  ];

  return (
    <div
      className="py-4 relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #ffffff, #f5f7fa)",
        minHeight: "auto", // Reduced height
      }}
    >
      {/* Minimized decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Subtle curved lines - smaller and less prominent */}
        <div
          className="absolute top-16 -left-24 w-48 h-48 rounded-full opacity-5"
          style={{ background: "linear-gradient(135deg, #4F46E5, #10B981)" }}
        />
        <div
          className="absolute bottom-16 -right-24 w-48 h-48 rounded-full opacity-5"
          style={{ background: "linear-gradient(135deg, #EC4899, #4F46E5)" }}
        />

        {/* Light dots pattern - reduced opacity */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(#e0e7ff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            opacity: 0.3,
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-6">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-2">
            Our Products
          </div>
          <h2 className="text-lg font-bold text-gray-800 leading-tight px-2">
            Innovative solutions designed to streamline your business operations
            and enhance
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              {" "}
              customer experience.
            </span>
          </h2>
        </div>

        {/* 2-column grid on mobile, 4-column on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-2">
          {cards.map((card, idx) => (
            <div key={idx} className="h-full">
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGroup;