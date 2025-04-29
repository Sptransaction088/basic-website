import React from 'react';
import { CreditCard, ShieldCheck, BarChart2, TrendingUp, Wallet } from 'lucide-react';

const PaymentGatewayAPI = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-indigo-700 mb-6">Payment Gateway API</h2>

      {/* Feature Icons */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        <div className="flex items-center gap-2">
          <CreditCard className="text-indigo-600" />
          <span className="text-sm text-gray-600">Multiple Payment Modes</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-indigo-600" />
          <span className="text-sm text-gray-600">Secure & Compliant</span>
        </div>
        <div className="flex items-center gap-2">
          <BarChart2 className="text-indigo-600" />
          <span className="text-sm text-gray-600">Real-Time Analytics</span>
        </div>
        <div className="flex items-center gap-2">
          <TrendingUp className="text-indigo-600" />
          <span className="text-sm text-gray-600">High Scalability</span>
        </div>
        <div className="flex items-center gap-2">
          <Wallet className="text-indigo-600" />
          <span className="text-sm text-gray-600">Wallet & UPI Support</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-xl shadow-md border-l-4 border-indigo-600 p-6 text-gray-700 leading-relaxed space-y-4">
        <p>
          We specialize in providing a comprehensive suite of API services tailored to meet the diverse payment needs of online businesses. Our robust and secure payment gateway APIs enable seamless integration for businesses looking to process payments efficiently, without the complexity of handling payments. We focus on delivering a simple, secure, and scalable solution for merchants, developers, and enterprises to manage payments.
        </p>
        <p>
          Our product includes APIs for accepting payments via bank transfers, UPI, wallets, and other alternative payment methods. We empower businesses by providing an easy-to-integrate API that supports multiple payment methods, offering flexibility and convenience for both merchants and customers. The APIs are designed to facilitate smooth transactions while ensuring security standards compliant with industry regulations.
        </p>
        <p>
          The process begins with merchants integrating our payment gateway API into their online platforms. The API supports a range of payment scenarios, from one-time payments to recurring transactions, allowing businesses to customize the user experience to their specific needs. After integration, our powerful backend systems handle the transaction process, including payment authorization, verification, and reporting.
        </p>
        <p>
          Our services also include advanced fraud detection tools, real-time transaction monitoring, and detailed analytics for merchants to track performance. The API is designed for scalability, supporting high volumes of transactions and adapting to growing business demands. With our secure and reliable solutions, businesses can confidently offer a variety of payment methods, enhancing customer satisfaction while optimizing operational efficiency.
        </p>
      </div>
    </div>
  );
};

export default PaymentGatewayAPI;
