import React from 'react';
import { ShieldCheck, Clock3, Send, TrendingUp } from 'lucide-react';

const IMPS = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-blue-700 mb-6">IMPS API Solution</h2>

      {/* Icons Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="flex items-center gap-2">
          <Send className="text-blue-600" />
          <span className="text-sm text-gray-600">Real-Time Transfer</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock3 className="text-blue-600" />
          <span className="text-sm text-gray-600">24/7 Availability</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-blue-600" />
          <span className="text-sm text-gray-600">Secure & Compliant</span>
        </div>
        <div className="flex items-center gap-2">
          <TrendingUp className="text-blue-600" />
          <span className="text-sm text-gray-600">High Volume Ready</span>
        </div>
      </div>

      {/* Main Content Box */}
      <div className="bg-white rounded-xl shadow-md border-l-4 border-blue-600 p-6 text-gray-700 leading-relaxed space-y-4">
        <p>
          At <strong>SP TRANSACTION HUB</strong>, we offer a robust and secure IMPS (Immediate Payment Service) API solution designed to facilitate real-time, seamless fund transfers between banks and financial institutions.
        </p>
        <p>
          Our IMPS API provides businesses with an efficient and cost-effective method to process instant payments 24/7, ensuring fast and reliable transaction capabilities.
        </p>
        <p>
          With a user-friendly interface and high scalability, our API enables easy integration into your existing systems, empowering merchants to offer quick and hassle-free payment experiences to their customers.
        </p>
        <p>
          The service ensures data security through state-of-the-art encryption protocols and compliance with industry standards, providing a trusted environment for financial transactions.
        </p>
        <p>
          Our IMPS API is optimized for high-volume processing, making it ideal for e-commerce platforms, mobile wallets, and other financial service providers.
        </p>
        <p>
          By leveraging our IMPS API, businesses can enhance operational efficiency, reduce transaction times, and improve customer satisfaction with real-time payment solutions.
        </p>
      </div>
    </div>
  );
};

export default IMPS;
