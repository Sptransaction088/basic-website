import React from 'react';
import { Wallet2, Lock, Send, CreditCard, Clock3, PhoneCall } from 'lucide-react';

const Wallet = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Heading */}
      <h1 className="text-4xl font-semibold text-center text-indigo-600 mb-12">
        Wallet – Empowering Your Spending, Effortlessly Securely
      </h1>

      {/* Two-Column Intro */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">What is Our Wallet?</h2>
          <p className="text-lg text-gray-600">
            Our digital wallet provides a secure, fast, and convenient way to manage and store your money. With seamless integration to various payment systems, our wallet allows you to make transactions effortlessly, track your spending, and handle everything securely from one place.
          </p>
          <p className="text-lg text-gray-600">
            Whether you're paying bills, sending money to friends, or making purchases, our wallet ensures a smooth and hassle-free experience for all your financial needs.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Key Features</h2>
          <ul className="grid grid-cols-1 gap-3 text-gray-600 text-lg">
            <li className="flex items-center gap-2"><Lock className="text-indigo-600 w-5 h-5" /> Store and manage your funds securely</li>
            <li className="flex items-center gap-2"><Send className="text-indigo-600 w-5 h-5" /> Instant money transfers and payments</li>
            <li className="flex items-center gap-2"><CreditCard className="text-indigo-600 w-5 h-5" /> Access multiple payment methods including UPI, IMPS, and more</li>
            <li className="flex items-center gap-2"><Clock3 className="text-indigo-600 w-5 h-5" /> View transaction history and track spending</li>
            <li className="flex items-center gap-2"><Lock className="text-indigo-600 w-5 h-5" /> High-end encryption and security features</li>
            <li className="flex items-center gap-2"><PhoneCall className="text-indigo-600 w-5 h-5" /> 24/7 customer support</li>
          </ul>
        </div>
      </div>

      {/* How to Use Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-10">How to Use Our Wallet</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-xl shadow border border-indigo-100 space-y-3">
            <h3 className="text-xl font-semibold text-gray-800">Step 1: Create an Account</h3>
            <p className="text-gray-600">Sign up with your basic details to create an account. It's quick and easy!</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow border border-indigo-100 space-y-3">
            <h3 className="text-xl font-semibold text-gray-800">Step 2: Add Money to Your Wallet</h3>
            <p className="text-gray-600">Fund your wallet using bank transfer, credit/debit cards, or other available methods.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow border border-indigo-100 space-y-3">
            <h3 className="text-xl font-semibold text-gray-800">Step 3: Make Payments</h3>
            <p className="text-gray-600">Use your wallet to pay bills, send money to friends, or shop online, all from a single platform.</p>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-indigo-50 p-8 rounded-xl">
        <h2 className="text-2xl font-semibold text-center text-indigo-600 mb-6">Benefits of Using Our Wallet</h2>
        <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
          <li>Fast and hassle-free payments</li>
          <li>Secure transactions with top-level encryption</li>
          <li>Real-time transaction updates and balance tracking</li>
          <li>Access to multiple payment options and services</li>
          <li>24/7 access to your funds and payment history</li>
        </ul>
      </div>
    </div>
  );
};

export default Wallet;
