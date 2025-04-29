import React, { useEffect, useRef, useState } from "react";
import {
  Check,
  CreditCard,
  ChevronRight,
  ChevronLeft,
  Sparkles,
} from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";

// Enhanced CSS with lighter color palette
const bannerStyles = `
  @keyframes gradientShift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
  .gradient-bg { background: linear-gradient(135deg, rgba(119, 69, 191, 0.15), rgba(77, 205, 221, 0.15), rgba(114, 132, 191, 0.15)); background-size: 200% 200%; animation: gradientShift 15s ease infinite; }
  .wave-overlay { background: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"%3E%3Cpath fill="%23ffffff" fill-opacity="0.4" d="M0,160L80,186.7C160,213,320,267,480,261.3C640,256,800,192,960,181.3C1120,171,1280,213,1360,234.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"%3E%3C/path%3E%3C/svg%3E'); background-size: cover; background-position: bottom; }
  .payu-button { transition: all 0.3s ease; border-radius: 12px; }
  .payu-button-primary { background: linear-gradient(to right, #f96f0c, #fbb735); box-shadow: 0 4px 16px rgba(249, 111, 12, 0.2); }
  .payu-button-primary:hover { background: linear-gradient(to right, #fbb735, #f96f0c); box-shadow: 0 8px 24px rgba(249, 111, 12, 0.3); transform: translateY(-2px); }
  .payu-button-secondary { background-color: rgba(255, 255, 255, 0.9); box-shadow: 0 4px 16px rgba(119, 69, 191, 0.15); }
  .payu-button-secondary:hover { background-color: #ffffff; color: #7745bf; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(119, 69, 191, 0.25); }
  .feature-icon { transition: all 0.4s ease; background-color: rgba(251, 183, 53, 0.2) !important; border: 2px solid rgba(251, 183, 53, 0.6); }
  .feature-icon:hover { transform: scale(1.15) rotate(5deg); background-color: rgba(251, 183, 53, 0.3) !important; border-color: rgba(251, 183, 53, 0.8); }
  .particle { border-radius: 50%; animation: float 8s ease-in-out infinite; opacity: 0.6; }
  @keyframes float { 0% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(10deg); } 100% { transform: translateY(0px) rotate(0deg); } }
  .slider-dot { transition: all 0.3s ease; }
  .slider-dot.active { transform: scale(1.5); }
  .feature-check { color: #7745bf !important; }
  .cta-gradient { background: linear-gradient(to right, #f96f0c, #fbb735) !important; }
  .cta-gradient:hover { background: linear-gradient(to right, #fbb735, #f96f0c) !important; }
  .image-glow { background: linear-gradient(to right, rgba(77, 205, 221, 0.2), rgba(119, 69, 191, 0.2)) !important; filter: blur(20px); }
  .image-container { position: relative; z-index: 1; transition: all 0.5s ease; }
  .image-container:hover { transform: translateY(-5px); }
  .image-container img { border: 3px solid rgba(255, 255, 255, 0.2); box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1); }
  .sparkle { position: absolute; border-radius: 50%; background-color: #ffffff; animation: twinkle 4s ease-in-out infinite; }
  @keyframes twinkle { 0%, 100% { opacity: 0; transform: scale(0.5); } 50% { opacity: 1; transform: scale(1.2); } }
  .card-shine { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(45deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 100%); background-size: 200% 200%; animation: shine 3s linear infinite; }
  @keyframes shine { 0% { background-position: -200% -200%; } 100% { background-position: 200% 200%; } }
`;

const HeroBanner = () => {
  const sliderData = [
    {
      title: "Accept Payments Anytime, Anywhere",
      subtitle:
        "Empower your business with a next-gen payment gateway that offers instant settlements, multi-currency support, and advanced fraud protection. Our easy-to-integrate API ensures hassle-free transactions.",
      image: "/assets/background.gif",
      ctaText: "Get Started",
      ctaLink: "#",
      secondaryText: "Explore Solutions",
      secondaryLink: "#",
      color: "cta-gradient",
      features: [
        "Instant UPI Payments",
        "Popular Wallets",
        "Net Banking & EMI",
      ],
      icon: <CreditCard className="w-6 h-6" />,
    },
    {
      title: "Seamless Integration & Quick Setup",
      subtitle:
        "Go live in under 48 hours with our easy-to-integrate APIs and developer-friendly tools.",
      image: "/assets/samless.gif",
      ctaText: "Start Integration",
      ctaLink: "#integration",
      secondaryText: "View Documentation",
      secondaryLink: "#docs",
      color: "cta-gradient",
      features: [
        "Instant Payments",
        "Payouts",
        "Wallets",
        "Easy Integration",
        "Real Time Analytics",
      ],
      icon: <CreditCard className="w-6 h-6" />,
    },
    // {
    //   title: "Secure & Reliable Payment Solutions",
    //   subtitle:
    //     "Our state-of-the-art security protocols ensure your transactions are always protected. Experience 99.99% uptime and real-time fraud detection.",
    //   image: "/assets/banner-2.gif",
    //   ctaText: "Get Protected",
    //   ctaLink: "#security",
    //   secondaryText: "Learn More",
    //   secondaryLink: "#details",
    //   color: "cta-gradient",
    //   features: [
    //     "End-to-End Encryption",
    //     "PCI-DSS Compliant",
    //     "Fraud Detection",
    //     "24/7 Monitoring",
    //   ],
    //   icon: <CreditCard className="w-6 h-6" />,
    // },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const nextSlide = () => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrentSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsSliding(false), 600);
  };

  const prevSlide = () => {
    if (isSliding) return;
    setIsSliding(true);
    setCurrentSlide((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));
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
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide, isSliding]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.2 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  };

  const currentBanner = sliderData[currentSlide];

  const generateSparkles = (count) => {
    const sparkles = [];
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 4 + 2;
      sparkles.push({
        id: i,
        size,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2,
      });
    }
    return sparkles;
  };

  const sparkles = generateSparkles(window.innerWidth > 768 ? 15 : 5); // Fewer particles on mobile

  const generateParticles = (count) => {
    const particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        id: i,
        size: Math.random() * 15 + 5,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: i * 0.7,
        duration: Math.random() * 5 + 5,
        color: [
          "rgba(77, 205, 221, 0.2)",
          "rgba(251, 183, 53, 0.2)",
          "rgba(119, 69, 191, 0.2)",
          "rgba(249, 111, 12, 0.2)",
        ][i % 4],
      });
    }
    return particles;
  };

  const particles = generateParticles(window.innerWidth > 768 ? 8 : 4);

  return (
    <div className="relative w-full overflow-hidden bg-white">
      <style>{bannerStyles}</style>
      <div className="absolute inset-0 gradient-bg z-0"></div>
      <div className="absolute inset-0 wave-overlay z-0"></div>

      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="sparkle absolute"
          style={{
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            top: sparkle.top,
            left: sparkle.left,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`,
          }}
        ></div>
      ))}

      {/* Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle absolute"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              top: particle.top,
              left: particle.left,
              backgroundColor: particle.color,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          ></div>
        ))}
      </div>

      <motion.div
        ref={ref}
        className="relative min-h-[550px] md:min-h-[650px] w-full flex items-center"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center">
          <motion.div
            className="w-full md:w-1/2 py-10 md:py-12 lg:py-16 flex flex-col justify-center z-10"
            key={`content-${currentSlide}`}
            initial="hidden"
            animate="visible"
            variants={childVariants}
            custom={currentSlide}
          >
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4 leading-tight tracking-tight"
              variants={childVariants}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7745bf] to-[#4dcddd]">
                {currentBanner.title}
              </span>
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg text-gray-600 mb-8 max-w-md"
              variants={childVariants}
            >
              {currentBanner.subtitle}
            </motion.p>
            <motion.ul className="mb-8" variants={childVariants}>
              {currentBanner.features.map((feature, i) => (
                <motion.li
                  key={i}
                  className="flex items-center mb-4 text-gray-700"
                  variants={featureVariants}
                  custom={i}
                >
                  <motion.span
                    className="inline-flex items-center justify-center w-6 h-6 mr-3 rounded-full feature-icon"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                  >
                    <Check className="w-4 h-4 feature-check" />
                  </motion.span>
                  {feature}
                </motion.li>
              ))}
            </motion.ul>
            <motion.div className="flex flex-wrap gap-4" variants={childVariants}>
              <motion.a
                href={currentBanner.ctaLink}
                className={`inline-flex items-center px-6 py-3 text-white font-medium payu-button ${currentBanner.color}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                aria-label={currentBanner.ctaText}
              >
                {currentBanner.ctaText}
                <ChevronRight className="w-4 h-4 ml-2" />
              </motion.a>
              <motion.a
                href={currentBanner.secondaryLink}
                className="inline-flex items-center px-6 py-3 text-[#7745bf] bg-white font-medium payu-button payu-button-secondary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                aria-label={currentBanner.secondaryText}
              >
                {currentBanner.secondaryText}
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 flex items-center justify-center py-10 md:py-12 lg:py-16 z-10"
            key={`image-${currentSlide}`}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative max-w-lg w-full image-container">
              <motion.div
                className="absolute -inset-4 rounded-2xl blur-xl image-glow"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              ></motion.div>
              <div className="card-shine rounded-lg"></div>
              <motion.div
                className="absolute -top-5 -right-5 z-10 text-amber-400"
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="w-8 h-8" />
              </motion.div>
              <img
                src={currentBanner.image}
                alt={currentBanner.title}
                className="relative w-full h-auto object-contain rounded-lg bg-white/30 backdrop-blur-sm p-4"
                loading="lazy"
                onError={(e) => (e.target.src = "https://via.placeholder.com/500")}
              />
            </div>
          </motion.div>
        </div>

        <div
          className="absolute bottom-8 left-0 right-0 flex justify-center gap-8 z-20"
          role="region"
          aria-live="polite"
        >
          <motion.button
            className="p-2 rounded-full backdrop-blur-sm bg-white/40 text-[#7745bf] border border-[#7745bf]/30"
            onClick={prevSlide}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.8)" }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          <div className="flex items-center gap-3">
            {sliderData.map((_, index) => (
              <motion.button
                key={index}
                className="slider-dot w-3 h-3 rounded-full"
                style={{
                  backgroundColor:
                    currentSlide === index ? "#f96f0c" : "rgba(119, 69, 191, 0.3)",
                }}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={currentSlide === index ? "true" : "false"}
              />
            ))}
          </div>
          <motion.button
            className="p-2 rounded-full backdrop-blur-sm bg-white/40 text-[#7745bf] border border-[#7745bf]/30"
            onClick={nextSlide}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.8)" }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroBanner;