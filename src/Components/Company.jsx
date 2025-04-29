import { useState } from "react";
import { Users, Award, Briefcase, Shield, ChevronRight, CheckCircle, Globe, Zap } from "lucide-react";
import { MdPayment } from "react-icons/md";
import { FcCustomerSupport } from "react-icons/fc";
import { BiHappy } from "react-icons/bi";
import { GrTransaction } from "react-icons/gr";

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("who-we-are");

  const stats = [
    { number: "100+", label: "Payment Modes", icon: <MdPayment className="w-6 h-6" /> },
    { number: "500+", label: "Happy Customers", icon: <BiHappy className="w-6 h-6" /> },
    { number: "100%", label: "Safe And Secure", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "98%", label: "Transaction Success Rates", icon: <GrTransaction className="w-6 h-6" /> },
  ];

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto  max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mb-4">
            
              About Us
          
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800 leading-tight">
            Get to Know <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Our Story</span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We're a team of passionate professionals dedicated to delivering
            exceptional results and creating meaningful experiences for our
            clients.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-16">
          {stats.map((stat, index) => {
            // Different color for each stat box
            const colors = ["#000", "#000", "#000", "#000"];
            
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-orange-200"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-gradient-to-br from-orange-50 to-amber-50">
                    <div className="p-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white">
                      {stat.icon}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-1" style={{ color: colors[index] }}>
                    {stat.number}
                  </h3>
                  <p className="text-gray-500 font-medium">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tabs Section */}
        <div className="flex flex-col lg:flex-row gap-10 mb-16">
          {/* Tabs Navigation */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Discover Our Company
              </h3>
              <div className="flex flex-col space-y-3">
                <TabButton
                  active={activeTab === "who-we-are"}
                  onClick={() => setActiveTab("who-we-are")}
                  icon={<Users size={18} />}
                  label="Who We Are"
                  color="#f96f0C"
                />
                <TabButton
                  active={activeTab === "mission"}
                  onClick={() => setActiveTab("mission")}
                  icon={<Award size={18} />}
                  label="Our Mission"
                  color="#7745bf"
                />
                <TabButton
                  active={activeTab === "services"}
                  onClick={() => setActiveTab("services")}
                  icon={<Briefcase size={18} />}
                  label="Our Services"
                  color="#4dcddd"
                />
              
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="lg:w-2/3 bg-white p-8 rounded-xl shadow-sm">
            <div className="border-l-4 transition-all duration-300"
                style={{ borderColor: 
                  activeTab === "who-we-are" ? "#f96f0C" : 
                  activeTab === "mission" ? "#7745bf" : 
                  activeTab === "services" ? "#4dcddd" : "#fbb735" 
                }}>
              <div className="pl-6">
                {activeTab === "who-we-are" && (
                  <div>
                    <h3 className="text-2xl font-bold mb-4" style={{ color: "#f96f0C" }}>
                      Who We Are
                    </h3>
                    <div className="w-16 h-1 mb-6 rounded-full" style={{ backgroundColor: "#f96f0C" }}></div>
                    
                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                      <div className="md:w-1/2">
                        <p className="text-gray-700 mb-4">
                          At SP Transaction Hub Technology Private Limited, we are
                          committed to revolutionizing digital payments through secure,
                          scalable, and innovative solutions. As a next-generation
                          payment gateway company, we empower businesses of all sizes to
                          accept and manage online payments effortlessly and
                          efficiently.
                        </p>
                        <p className="text-gray-700 mb-4">
                          Founded with a vision to simplify financial transactions, SP
                          Transaction Hub delivers a seamless integration experience,
                          robust security infrastructure, and real-time analytics to
                          ensure transparency and control.
                        </p>
                      </div>
                      <div className="md:w-1/2 bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg">
                        <h4 className="font-bold text-gray-800 mb-3">Why Businesses Choose Us</h4>
                        <ul className="space-y-3">
                          {[
                            "Lightning-fast payment processing",
                            "Industry-leading success rates",
                            "Enterprise-grade security",
                            "24/7 dedicated merchant support",
                            "Transparent pricing, no hidden fees"
                          ].map((item, i) => (
                            <li key={i} className="flex items-center">
                              <CheckCircle size={16} className="text-orange-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="p-5 rounded-lg bg-gray-50 border-l-3 mb-6" style={{ borderLeftColor: "#f96f0C", borderLeftWidth: "3px" }}>
                      <p className="text-gray-700">
                        With a focus on customer success, compliance, and continuous
                        innovation, we aim to be the trusted partner for businesses
                        seeking reliable payment infrastructure. Whether you're a
                        startup or an enterprise, SP Transaction Hub provides the
                        tools you need to grow confidently in today's digital
                        landscape.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === "mission" && (
                  <div>
                    <h3 className="text-2xl font-bold mb-4" style={{ color: "#7745bf" }}>
                      Our Mission
                    </h3>
                    <div className="w-16 h-1 mb-6 rounded-full" style={{ backgroundColor: "#7745bf" }}></div>
                    
                    <div className="mb-8">
                      <div className="mb-8 bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-lg">
                        <h4 className="font-bold text-xl text-gray-800 mb-3" style={{ color: "#7745bf" }}>Our Vision</h4>
                        <p className="text-gray-700">
                          To create a cashless economy where every business, regardless of size, can access secure, reliable and innovative digital payment solutions that drive growth and financial inclusion.
                        </p>
                      </div>
                      
                      <div className="mb-8">
                        <h4 className="font-bold text-xl mb-3" style={{ color: "#7745bf" }}>Our Mission</h4>
                        <p className="text-gray-700 mb-6">
                          At SP Transaction Hub Technology Private Limited, our mission
                          is to revolutionize the payment ecosystem by providing secure,
                          seamless, and innovative payment solutions that empower
                          businesses to grow, expand, and succeed in the digital
                          economy.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg mb-8">
                      <h4 className="font-bold mb-6 text-lg" style={{ color: "#7745bf" }}>
                        Our Core Values
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                          {
                            title: "Innovative Payment Solutions",
                            description:
                              "We are committed to delivering cutting-edge, reliable payment gateway services that cater to the evolving needs of businesses of all sizes. By leveraging advanced technology, we ensure fast and secure transactions.",
                          },
                          {
                            title: "Focus on Security",
                            description:
                              "Security is at the core of everything we do. Our top priority is safeguarding every transaction, ensuring that all payment data is encrypted and protected against fraud and cyber threats.",
                          },
                          {
                            title: "Customer-Centric Approach",
                            description:
                              "We aim to build long-lasting relationships with our clients by providing personalized, user-friendly payment solutions that enhance customer experience.",
                          },
                          {
                            title: "Seamless Integration",
                            description:
                              "Our platform is designed to integrate effortlessly with a wide range of business models, offering easy API integrations for merchants, retailers, and developers.",
                          }
                        ].map((item, index) => (
                          <li key={index} className="transition-all duration-300">
                            <div className="flex items-start">
                              <div className="flex-shrink-0 mt-1 mr-3 rounded-full p-1" style={{ backgroundColor: "#7745bf" }}>
                                <ChevronRight size={12} className="text-white" />
                              </div>
                              <div>
                                <h5 className="text-gray-800 font-semibold">
                                  {item.title}
                                </h5>
                                <p className="text-gray-600 mt-1">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === "services" && (
                  <div>
                    <h3 className="text-2xl font-bold mb-4" style={{ color: "#4dcddd" }}>
                      Our Services
                    </h3>
                    <div className="w-16 h-1 mb-6 rounded-full" style={{ backgroundColor: "#4dcddd" }}></div>
                    <p className="text-gray-700 mb-6">
                      We offer a comprehensive range of services designed to meet
                      the diverse needs of our clients. Our expertise spans multiple
                      disciplines, allowing us to provide integrated solutions that
                      address every aspect of your business.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <ServiceCard 
                        title="UPI Payment Collection" 
                        content="Enhance your payment collection process with our efficient and secure UPI payment solution. Our real-time platform ensures quick and hassle-free transactions, providing a seamless experience for both businesses and customers." 
                        color="#4dcddd"
                        icon={<Globe className="w-5 h-5" />}
                      />
                      <ServiceCard 
                        title="API Integration Service" 
                        content="We offers seamless API integration solutions designed to enhance system functionality and operational efficiency. Our end-to-end services cover every stage of integration, including strategic planning, development, deployment, and ongoing maintenance." 
                        color="#7745bf"
                        icon={<Briefcase className="w-5 h-5" />}
                      />
                      <ServiceCard 
                        title="Payouts" 
                        content="At SP Transaction Hub, we prioritize innovation, security, and efficiency to deliver seamless payout services via UPI and IMPS. Our advanced payment solutions are designed to enhance transaction speed, reliability, and customer satisfaction." 
                        color="#f96f0C"
                        icon={<Zap className="w-5 h-5" />}
                      />
                      <ServiceCard 
                        title="Payment Solution Provider" 
                        content="At SP Transaction Hub, we offer innovative and secure payment solutions designed to streamline your transactions. Our comprehensive services include online and mobile payment processing, catering to businesses of all sizes." 
                        color="#fbb735"
                        icon={<CheckCircle className="w-5 h-5" />}
                      />
                    </div>
                    
                    <div className="p-5 rounded-lg bg-gray-50 border-l-3" style={{ borderLeftColor: "#4dcddd", borderLeftWidth: "3px" }}>
                      <p className="text-gray-700">
                        Each service is tailored to your specific needs and
                        objectives, ensuring that we deliver solutions that are
                        aligned with your goals and drive meaningful results.
                      </p>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>

    
      </div>
    </section>
  );
}

// Enhanced TabButton Component with dynamic colors
function TabButton({ active, onClick, icon, label, color }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-3 px-5 py-3 rounded-lg transition-all duration-300 ${
        active
          ? "text-white shadow-md"
          : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-100"
      }`}
      style={{
        backgroundColor: active ? color : "",
      }}
    >
      <span>{icon}</span>
      <span className="font-medium">{label}</span>
    </button>
  );
}

// Enhanced Service Card Component
function ServiceCard({ title, content, color, icon }) {
  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow hover:border-gray-200"
    >
      <div className="flex items-center mb-4">
        <div className="p-2 rounded-full mr-3" style={{ backgroundColor: `${color}20` }}>
          <div className="rounded-full" style={{ color: color }}>
            {icon}
          </div>
        </div>
        <h4 className="font-bold" style={{ color: color }}>
          {title}
        </h4>
      </div>
      <p className="text-gray-600">
        {content}
      </p>
    </div>
  );
}