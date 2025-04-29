import React from 'react';
import { Shield, Clock, CheckCircle, ArrowDownCircle, ArrowUpCircle } from 'lucide-react';

const UPI = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-4 text-blue-600">UPI Payment Solutions</h1>
      
      {/* Introduction */}
      <p className="text-gray-700 mb-8">
        We specialize in providing seamless UPI (Unified Payments Interface) pay-in and pay-out services to enhance 
        digital transactions for businesses and consumers alike. Our UPI solution allows businesses to accept 
        payments and disburse payouts effortlessly, enabling real-time transactions with enhanced security.
      </p>
      
      {/* Key Features Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Key Features:</h2>
        
        {/* UPI Pay-in */}
        <div className="mb-6 bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <div className="flex items-start mb-2">
            <ArrowDownCircle className="text-blue-500 mr-2 flex-shrink-0" size={24} />
            <h3 className="text-xl font-semibold text-blue-600">1. UPI Pay-in:</h3>
          </div>
          <ul className="ml-8 space-y-2">
            <li className="flex items-start">
              <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
              <span>Businesses can integrate UPI into their payment systems to accept payments from customers instantly.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
              <span>UPI allows customers to pay directly from their bank accounts using a UPI ID, ensuring ease of use.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
              <span>Supports multiple payment methods such as UPI apps, mobile wallets, and QR codes.</span>
            </li>
          </ul>
        </div>
        
        {/* UPI Pay-out */}
        <div className="mb-6 bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-500">
          <div className="flex items-start mb-2">
            <ArrowUpCircle className="text-indigo-500 mr-2 flex-shrink-0" size={24} />
            <h3 className="text-xl font-semibold text-indigo-600">2. UPI Pay-out:</h3>
          </div>
          <ul className="ml-8 space-y-2">
            <li className="flex items-start">
              <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
              <span>Enables businesses to make instant payouts to customers, vendors, or suppliers through UPI.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
              <span>Supports disbursements to multiple UPI accounts simultaneously, streamlining bulk payments.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
              <span>Allows businesses to track transaction statuses and ensure the smooth transfer of funds.</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Process Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Step-by-Step Process:</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ol className="space-y-4">
            <li className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">1</div>
              <div>
                <span className="font-semibold">Integration:</span> Our team assists in the seamless integration of UPI services into your platform through easy-to-follow APIs and SDKs.
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">2</div>
              <div>
                <span className="font-semibold">Transaction Initiation:</span> For pay-ins, customers initiate payments using their UPI-enabled apps. For pay-outs, businesses initiate the transaction through our platform.
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">3</div>
              <div>
                <span className="font-semibold">Authentication:</span> Both pay-ins and pay-outs are secured through UPI's two-factor authentication, including the UPI PIN, ensuring safe transactions.
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">4</div>
              <div>
                <span className="font-semibold">Processing:</span> Transactions are processed in real-time, with the UPI network facilitating instant money transfer.
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-1">5</div>
              <div>
                <span className="font-semibold">Confirmation:</span> Upon successful transaction completion, a confirmation message is sent to both the payer and the payee, along with transaction details.
              </div>
            </li>
          </ol>
        </div>
      </div>
      
      {/* Conclusion */}
      <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
        <p className="text-gray-700">
          Our UPI services are designed to provide businesses with an easy, fast, and secure way to manage 
          payments and payouts, empowering them to cater to a growing digital economy.
        </p>
      </div>
    </div>
  );
};

export default UPI;