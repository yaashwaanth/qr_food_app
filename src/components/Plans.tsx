import React from 'react';

interface PricingCardProps {
  plan: string; // Plan name (e.g., Regular)
  price: number; // Price (e.g., Rs. 599)
  duration: string; // Duration (e.g., / Month)
  features: { name: string; isAvailable: boolean }[]; // List of features

}

const Plans: React.FC<PricingCardProps> = ({
  plan,
  price,
  duration,
  features,

}) => {
  return (
    <div className="bg-white rounded-lg shadow-2xl border-black p-6 flex flex-col items-center max-w-sm hover:scale-105">
      {/* Plan Name */}
      <h3 className="text-lg font-semibold mb-4">{plan.toUpperCase()}</h3>
      {/* Price */}
      <p className="text-4xl font-bold mb-1">₹{price}</p>
      <span className="text-sm text-violet-700 font-bold mb-6">{duration}</span>
      {/* Features */}
      <ul className="w-full mb-6">
        {features.map((feature, index) => (
          <li
            key={index}
            className={`flex items-center mb-2 ${
              feature.isAvailable ? 'text-black' : 'text-gray-300'
            }`}
          >
            <span
              className={`h-5 w-5 flex items-center justify-center rounded-full mr-3 ${
                feature.isAvailable ? 'bg-violet-700' : 'bg-gray-600'
              }`}
            >
              {feature.isAvailable ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  className="h-4 w-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  className="h-4 w-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </span>
            {feature.name}
          </li>
        ))}
      </ul>
    
    </div>
  );
};

export default Plans;
