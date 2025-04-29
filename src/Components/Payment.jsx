import React from "react";
import {
  ChartBarIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  BanknotesIcon,
  ShoppingBagIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

// Improved color palette
const colors = {
  primary: "#7745bf", // Purple
  secondary: "#f96f0c", // Orange
  accent: "#fbb735", // Yellow
  tertiary: "#4dcddd", // Cyan
  neutral: "#7284bf", // Blue
};

const features = [
  {
    title: "Real-time Analytics",
    icon: <ChartBarIcon className="h-6 w-6" />,
    description: "Make data-driven decisions with powerful insights dashboard",
    color: colors.primary,
  },
  {
    title: "Instant Refunds",
    icon: <ArrowPathIcon className="h-6 w-6" />,
    description: "Process refunds immediately, boosting customer satisfaction",
    color: colors.secondary,
  },
  {
    title: "Industry-Leading Success Rates",
    icon: <CheckCircleIcon className="h-6 w-6" />,
    description: "Enjoy higher approval rates across all payment methods",
    color: colors.accent,
  },
  {
    title: "Seamless Customer Experience",
    icon: <UserGroupIcon className="h-6 w-6" />,
    description: "Provide frictionless checkout flows that delight users",
    color: colors.tertiary,
  },
  {
    title: "Advanced Fraud Protection",
    icon: <ShieldCheckIcon className="h-6 w-6" />,
    description: "Safeguard your business with intelligent security features",
    color: colors.neutral,
  },
  {
    title: "Same-Day Settlement",
    icon: <BanknotesIcon className="h-6 w-6" />,
    description: "Access your funds faster with rapid settlement process",
    color: colors.primary,
  },
  {
    title: "Reduce Cart Abandonment",
    icon: <ShoppingBagIcon className="h-6 w-6" />,
    description: "Convert more browsers to buyers with optimized checkout",
    color: colors.secondary,
  },
  {
    title: "Lightning-Fast Checkout",
    icon: <RocketLaunchIcon className="h-6 w-6" />,
    description: "Streamline payments with our one-click solution",
    color: colors.accent,
  },
];

export default function HeroSection() {
  return (
    <div className="bg-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <div className="mb-6">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 mb-3">
                Trusted by 10,000+ merchants
              </div>

              <h1 className="text-2xl font-bold text-gray-900 tracking-tight sm:text-3xl">
                Unlock access to
                <span className="block text-orange-500">
                  limitless business growth
                </span>
              </h1>

              <p className="mt-2 text-base text-gray-500 sm:mt-3 max-w-2xl">
                We're more than a payments partner. Get smoother payment
                processes and offer an outstanding experience.
              </p>
            </div>

            {/* Features Grid - More compact version */}
            <div className="grid gap-4 grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start p-3 bg-white rounded-lg border border-gray-100 shadow-sm"
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-md bg-purple-100 text-purple-600 mr-3">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-xs text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Box Design Instead of Image */}
          <div className="lg:col-span-5 mt-6 lg:mt-0">
            <div className="max-w-sm mx-auto">
              <div className="bg-gradient-to-br from-purple-50 to-orange-50 rounded-lg shadow-md border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-white p-2 rounded-md shadow-sm">
                    <svg
                      className="h-6 w-6 text-purple-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>

                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Payment Dashboard
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Access all your payment data in one place with our intuitive
                  dashboard
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white p-3 rounded-md shadow-sm">
                    <p className="text-xs text-gray-500">Success Rate</p>
                    <p className="text-lg font-bold text-gray-900">99.8%</p>
                    <p className="text-xs text-green-600">+0.2%</p>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2 mb-4">
                  {[
                    "Real-time transaction monitoring",
                    "Instant settlement options",
                    "Advanced fraud protection",
                    "Multiple payment methods",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <svg
                        className="h-4 w-4 text-green-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
