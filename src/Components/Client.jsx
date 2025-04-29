import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ClientLogoSection = () => {
  const clientLogos = [
    { name: "RBL", logo: "/assets/rbl.jpeg" },
    { name: "IDFC", logo: "/assets/idfc.jpeg" },
    { name: "Fino", logo: "/assets/au.jpeg" },
    { name: "COSMOS", logo: "/assets/cosmos.jpeg" },
    { name: "AU", logo: "/assets/an-1.png" },
  ];

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const brandColors = {
    primary: "#f96f0c",
    secondary: "#fbb735",
    accent1: "#7745bf",
    accent2: "#4dcddd",
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const getItemsPerView = () => {
    if (window.innerWidth < 640) return 1; // Mobile: 1 logo
    if (window.innerWidth < 1024) return 3; // Tablet: 3 logos
    return 5; // Desktop: 5 logos
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  useEffect(() => {
    const handleResize = () => setItemsPerView(getItemsPerView());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrentSlide((prev) =>
      prev === Math.floor(clientLogos.length / itemsPerView) ? 0 : prev + 1
    );
    setTimeout(() => setIsSliding(false), 600);
  };

  const prevSlide = () => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrentSlide((prev) =>
      prev === 0 ? Math.floor(clientLogos.length / itemsPerView) : prev - 1
    );
    setTimeout(() => setIsSliding(false), 600);
  };

  const goToSlide = (index) => {
    if (isSliding || index === currentSlide) return;
    setIsSliding(true);
    setCurrentSlide(index);
    setTimeout(() => setIsSliding(false), 600);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval);
  }, [currentSlide, isSliding]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const slideVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeInOut" } },
    exit: { opacity: 0, x: "-100%", transition: { duration: 0.6, ease: "easeInOut" } },
  };

  const logoVariants = {
    normal: { scale: 1, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" },
    hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)" },
  };

  const logoSectionStyles = `
    .client-logo-container { overflow: hidden; }
    .client-logo { transition: transform 0.3s ease, box-shadow 0.3s ease; }
    .client-logo:hover { transform: scale(1.05); }
    .carousel-button { backdrop-filter: blur(8px); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); border: 1px solid rgba(255, 255, 255, 0.2); }
    .mosaic-background { background-image: radial-gradient(#fff1e1 1px, transparent 1px); background-size: 20px 20px; }
    .carousel-dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(249, 111, 12, 0.3); transition: all 0.3s ease; }
    .carousel-dot.active { background: #f96f0c; transform: scale(1.5); }
  `;

  const visibleLogos = [];
  for (let i = 0; i < itemsPerView; i++) {
    const index = (currentSlide * itemsPerView + i) % clientLogos.length;
    visibleLogos.push({
      ...clientLogos[index],
      index: i,
    });
  }

  return (
    <section
      className="py-8 sm:py-8 md:py-8 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white mosaic-background"
      ref={ref}
      onMouseEnter={() => setIsSliding(true)} // Pause on hover
      onMouseLeave={() => setIsSliding(false)} // Resume on leave
      tabIndex={0}
      role="region"
      aria-label="Client logo slider"
    >
      <style>{logoSectionStyles}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-6 sm:mb-8 md:mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mb-4">
           
              Our Partners
          
          </div>
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-gray-800 leading-tight"
            variants={itemVariants}
          >
            Trusted by{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              Banking Partners
            </span>
          </motion.h2>
          <motion.p
            className="mt-1 text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mx-auto"
            variants={itemVariants}
          >
            Join thousands of businesses that trust our payment solutions every day
          </motion.p>
        </motion.div>

        <motion.div
          className="relative client-logo-container"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div
            className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8"
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            custom={currentSlide}
            key={currentSlide} // Key to force re-render on slide change
          >
            {visibleLogos.map((item, idx) => {
              const colors = [
                brandColors.primary,
                brandColors.secondary,
                brandColors.accent1,
                brandColors.accent2,
                brandColors.primary,
              ];

              return (
                <motion.div
                  key={`${item.name}-${idx}`}
                  className="client-logo flex items-center justify-center bg-white rounded-lg p-2 sm:p-3 md:p-4 shadow-md"
                  style={{
                    width: window.innerWidth < 640 ? "80%" : "180px",
                    height: window.innerWidth < 640 ? "80px" : "120px",
                    borderLeft: `4px solid ${colors[idx % colors.length]}`,
                    flex: "0 0 auto",
                  }}
                  variants={logoVariants}
                  initial="normal"
                  whileHover="hover"
                >
                  <div className="flex flex-col items-center">
                    <img
                      src={item.logo}
                      alt={`${item.name} logo`}
                      className="h-8 sm:h-12 md:h-16 w-auto object-contain"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://via.placeholder.com/150";
                        e.target.alt = `${item.name} placeholder`;
                      }}
                    />
                    <p className="mt-1 text-xs sm:text-sm md:text-base font-medium text-gray-700">
                      {item.name}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          

        

          <div className="flex justify-center gap-2 mt-4">
            {[...Array(Math.ceil(clientLogos.length / itemsPerView))].map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${currentSlide === index ? "active" : ""}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={currentSlide === index ? "true" : "false"}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Ensure itemVariants is defined (was missing in the last snippet)
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export default ClientLogoSection;