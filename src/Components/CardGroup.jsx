import React, { useRef } from "react";
import { useState } from "react";

// Card Component
const Card = ({ cutoutUrl, title, description, accentColor }) => {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovering(false);
  };

  return (
    <div
      ref={cardRef}
      className="relative w-80 h-96 rounded-lg overflow-hidden cursor-pointer group"
      style={{
        perspective: "1000px",
        transition: "all 0.3s ease",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Base card (clean white, no texture) */}
      <div
        className="absolute inset-0 rounded-lg bg-white"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: "transform 0.2s ease-out",
          boxShadow: isHovering
            ? `0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)`
            : "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        }}
      />

      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-2 rounded-t-lg"
        style={{
          background: accentColor,
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateZ(5px)`,
          transition: "transform 0.2s ease-out",
          boxShadow: `0 0 10px ${accentColor}50`,
        }}
      />

      {/* Card content wrapper */}
      <div
        className="absolute inset-0 pt-2 flex flex-col"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: "transform 0.2s ease-out",
        }}
      >
        {/* Product title bar */}
        <div className="px-4 py-2 text-sm font-medium flex justify-between items-center border-b border-gray-200">
          <span className="text-gray-700">{title}</span>
          <div className="flex space-x-1">
            <div className="w-2 h-2 rounded-full bg-red-400"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
          </div>
        </div>

        {/* Product image */}
        <div
          className="flex items-center justify-center py-6"
          style={{
            transform: `translateZ(40px)`,
            transition: "transform 0.2s ease-out",
          }}
        >
          <div
            className="w-36 h-36 rounded-full flex items-center justify-center p-2"
            style={{
              background: `linear-gradient(135deg, ${accentColor}10, ${accentColor}30)`,
              boxShadow: `0 0 30px ${accentColor}20`,
            }}
          >
            <img
              src={cutoutUrl || "/api/placeholder/200/200"}
              alt={title}
              className="w-28 h-28 object-contain rounded-full"
            />
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pt-2 flex-grow flex flex-col">
          <h2 className="text-xl font-bold mb-2" style={{ color: accentColor }}>
            {title}
          </h2>
          <p className="text-gray-600 text-sm mb-4">{description}</p>

          <div className="mt-auto mb-6 flex justify-center">
            <button
              className="px-6 py-2 rounded-md text-sm font-medium text-white shadow-lg"
              style={{
                backgroundColor: accentColor,
                transform: isHovering ? "scale(1.05)" : "scale(1)",
                transition: "transform 0.2s ease",
                boxShadow: `0 4px 6px -1px ${accentColor}40, 0 2px 4px -1px ${accentColor}30`,
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Subtle shadow to lift the card */}
      <div
        className="absolute -bottom-8 left-4 right-4 h-8 rounded-full opacity-20 blur-md"
        style={{
          background: "black",
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateZ(-10px)`,
          transition: "all 0.3s ease",
          opacity: isHovering ? 0.3 : 0.2,
        }}
      />
    </div>
  );
};

// CardGroup Component with improved white background
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
      className="min-h-screen py-8 relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #ffffff, #f5f7fa)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Subtle curved lines */}
        <div
          className="absolute top-16 -left-24 w-96 h-96 rounded-full opacity-10 animate-float-slow"
          style={{ background: "linear-gradient(135deg, #4F46E5, #10B981)" }}
        />
        <div
          className="absolute bottom-16 -right-24 w-96 h-96 rounded-full opacity-10 animate-float-slower"
          style={{ background: "linear-gradient(135deg, #EC4899, #4F46E5)" }}
        />

        {/* Light dots pattern */}
        <div
          className="absolute inset-0 animate-background-move"
          style={{
            backgroundImage: `radial-gradient(#e0e7ff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Animation styles */}
        <style>
          {`
      @keyframes floatSlow {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }

      @keyframes floatSlower {
        0%, 100% { transform: translateY(0px) translateX(0px); }
        50% { transform: translateY(15px) translateX(-10px); }
      }

      @keyframes backgroundMove {
        0% { background-position: 0 0; }
        100% { background-position: 40px 40px; }
      }

      .animate-float-slow {
        animation: floatSlow 8s ease-in-out infinite;
      }

      .animate-float-slower {
        animation: floatSlower 10s ease-in-out infinite;
      }

      .animate-background-move {
        animation: backgroundMove 60s linear infinite;
      }
    `}
        </style>
      </div>
      <div className="container mx-auto relative z-10">
        <div className="text-center">
          <div className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mb-4">
            Our Products
          </div>
          <h2 className="text-2xl md:text-2xl font-bold mb-3 text-gray-800 leading-tight">
            Innovative solutions designed to streamline your business operations
            and enhance
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              {" "}
              customer experience.
            </span>
          </h2>
        </div>

        {/* Update grid to show 4 cards in a row with borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 py-10">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGroup;
