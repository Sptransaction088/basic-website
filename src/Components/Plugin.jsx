import { useState, useEffect } from "react";
import { CheckCircle, ShoppingBag, ArrowRight, CreditCard, Globe, Shield, ChevronDown, ChevronUp, MagnetIcon } from "lucide-react";
import { FaOpencart, FaShopify, FaWix } from "react-icons/fa";
import { SiPrestashop, SiWoocommerce, SiZoho } from "react-icons/si";
import { BsWordpress } from "react-icons/bs";
import { PiChartScatterThin } from "react-icons/pi";

export default function ProfessionalPaymentGatewayPlugins() {
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [animateIn, setAnimateIn] = useState(false);
  const [showAllPlatforms, setShowAllPlatforms] = useState(false);
  
  // Color palette matching the navbar
  const colors = {
    orange: "#f96f0c",
    yellow: "#fbb735",
    purple: "#7745bf",
    cyan: "#4dcddd",
    blue: "#7284bf",
  };

  useEffect(() => {
    setAnimateIn(true);
  }, []);

  const platforms = [
    { name: "Shopify", color: "bg-green-500", icon: <FaShopify size={20} /> },
    { name: "WooCommerce", color: "bg-purple-500", icon: <SiWoocommerce size={40} /> },
    { name: "WIX", color: "bg-blue-500", icon: <FaWix size={20} /> },
    { name: "Wordpress", color: "bg-blue-400", icon: <BsWordpress size={20} /> },
    { name: "Magento", color: "bg-orange-500", icon: <MagnetIcon size={20} /> },
    { name: "Zoho", color: "bg-red-500", icon: <SiZoho size={20} /> },
    { name: "Prestashop", color: "bg-blue-600", icon: <SiPrestashop size={20} /> },
    { name: "Opencart", color: "bg-blue-300", icon: <FaOpencart size={20} /> },
    { name: "CSCart", color: "bg-green-600", icon: <PiChartScatterThin size={20} /> },
    
  ];

  const handlePlatformSelect = (platform) => {
    setSelectedPlatform(platform);
  };

  const toggleShowAllPlatforms = () => {
    setShowAllPlatforms(!showAllPlatforms);
  };

  // Get the platforms to display based on showAllPlatforms state
  const displayedPlatforms = showAllPlatforms ? platforms : platforms.slice(0, 4);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-lg border-t-4 mb-5 mt-5" style={{ borderColor: colors.yellow }}>
      {/* Logo Section */}
     
      
      {/* Integration Section Header */}
      <div className="text-center mb-16">
        <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-3">
         
            Integrate Your Platform
         
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Connect with your preferred e-commerce platform in minutes. Start accepting payments globally with just a few clicks.
        </p>
      </div>

      {/* Platform Selection */}
      <div className={`transition-all duration-700 ${animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
       

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayedPlatforms.map((platform) => (
            <div
              key={platform.name}
              className={`rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                selectedPlatform === platform.name
                  ? "border-2 shadow-md transform scale-105"
                  : "bg-white border border-gray-200 hover:shadow-md hover:border-blue-300"
              }`}
              style={{ 
                borderColor: selectedPlatform === platform.name ? colors.purple : "",
                backgroundColor: selectedPlatform === platform.name ? `${colors.purple}10` : ""
              }}
              onClick={() => handlePlatformSelect(platform.name)}
            >
              <div className="flex items-center">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mr-3 shadow-md"
                  style={{ 
                    background: 'black'
                  }}
                >
                  <span className="text-white">
                    {platform.icon}
                  </span>
                </div>
                <span className="font-medium text-gray-700">
                  {platform.name}
                </span>
                {selectedPlatform === platform.name && (
                  <CheckCircle className="ml-auto" style={{ color: colors.purple }} size={18} />
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Read More / Show Less Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={toggleShowAllPlatforms}
            className="flex items-center px-5 py-2 rounded-full text-white font-medium transition-all duration-300 shadow-md"
            style={{
              background: `linear-gradient(to right, ${colors.yellow}, ${colors.orange})`,
            }}
          >
            {showAllPlatforms ? (
              <>
                Show Less <ChevronUp className="ml-1" size={16} />
              </>
            ) : (
              <>
                View All Platforms <ChevronDown className="ml-1" size={16} />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Integration Details */}
      {selectedPlatform && (
        <div className="mt-8 bg-white rounded-lg p-6 border mb-6 transform transition-all duration-500 animate-fadeIn shadow-lg"
             style={{ borderColor: colors.cyan }}>
          <h3 className="text-lg font-semibold mb-4 flex items-center" style={{ color: "#4B5563" }}>
            <div
              className="w-6 h-6 rounded-full mr-2 flex items-center justify-center"
              style={{ 
                background: `linear-gradient(135deg, ${colors.purple} 0%, ${colors.blue} 100%)`
              }}
            >
              <span className="text-white font-bold text-xs">
                {selectedPlatform.charAt(0)}
              </span>
            </div>
            {selectedPlatform} Integration Setup
          </h3>

          <div className="space-y-4">
            <div className="flex items-center">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center mr-3 shadow-sm"
                style={{ 
                  background: `black`
                }}
              >
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h4 className="font-medium" style={{ color: colors.purple }}>Install Plugin</h4>
                <p className="text-sm text-gray-500">
                  Download and install our {selectedPlatform} payment plugin
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center mr-3 shadow-sm"
                style={{ 
                  background: `black`
                }}
              >
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h4 className="font-medium" style={{ color: colors.purple }}>Configure API Keys</h4>
                <p className="text-sm text-gray-500">
                  Enter your merchant ID and API keys in the plugin settings
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center mr-3 shadow-sm"
                style={{ 
                  background: `black`
                }}
              >
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h4 className="font-medium" style={{ color: colors.purple }}>Test Integration</h4>
                <p className="text-sm text-gray-500">
                  Run test transactions to verify setup is working correctly
                </p>
              </div>
            </div>
          </div>

          <button 
            className="mt-6 w-full py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-300 shadow-md text-white font-medium"
            style={{
              background: `linear-gradient(to right, ${colors.yellow}, ${colors.orange})`,
            }}
          >
            Get Started with {selectedPlatform} Integration
            <ArrowRight className="ml-2" size={18} />
          </button>

          
        </div>
      )}
    </div>
  );
}