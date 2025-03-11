import { Check, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">
            Marketing Service Packages
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Strategic marketing solutions tailored to your business goals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Basic Package */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md hover:scale-105 transition-all duration-300 group">
            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-2 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Starter Campaign
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Ideal for small businesses and startups
              </p>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-bold dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  $1,499
                </span>
                <span className="text-gray-500 dark:text-gray-400 mb-1">/month</span>
              </div>
              <Link
                href="#lead-form"
                className="block w-full py-2 px-4 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded-lg text-center hover:bg-gray-50 dark:hover:bg-gray-600 hover:shadow-md transition-all duration-300 transform group-hover:translate-y-[-2px]"
              >
                Start Your Campaign
              </Link>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {[
                  "Social media strategy",
                  "Content creation (5 posts/week)",
                  "Basic SEO optimization",
                  "Monthly performance report",
                  "Email marketing setup",
                  "Single channel focus",
                  "3-month minimum commitment",
                ].map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 group-hover:translate-x-1 transition-transform duration-300"
                    style={{ "--index": index } as React.CSSProperties}
                  >
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Professional Package */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border-2 border-blue-500 dark:border-blue-400 overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 group relative">
            <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-center py-1 text-sm font-medium">
              Most Popular
            </div>
            <div className="p-6 border-b border-gray-100 dark:border-gray-700 pt-10">
              <h3 className="text-xl font-bold mb-2 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Growth Accelerator
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Comprehensive multi-channel marketing
              </p>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-bold dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  $2,999
                </span>
                <span className="text-gray-500 dark:text-gray-400 mb-1">/month</span>
              </div>
              <Link
                href="#lead-form"
                className="block w-full py-2 px-4 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform group-hover:translate-y-[-2px]"
              >
                Start Your Campaign
              </Link>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {[
                  "Comprehensive marketing strategy",
                  "Content creation (10 posts/week)",
                  "Advanced SEO optimization",
                  "Social media management (3 platforms)",
                  "Email marketing campaigns",
                  "Google Ads management",
                  "Bi-weekly strategy calls",
                  "Detailed analytics dashboard",
                  "6-month minimum commitment",
                ].map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 group-hover:translate-x-1 transition-transform duration-300"
                    style={{ "--index": index } as React.CSSProperties}
                  >
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Enterprise Package */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md hover:scale-105 transition-all duration-300 group">
            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-2 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Enterprise Suite
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Full-scale marketing department
              </p>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-bold dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  $5,999
                </span>
                <span className="text-gray-500 dark:text-gray-400 mb-1">/month</span>
              </div>
              <Link
                href="#lead-form"
                className="block w-full py-2 px-4 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded-lg text-center hover:bg-gray-50 dark:hover:bg-gray-600 hover:shadow-md transition-all duration-300 transform group-hover:translate-y-[-2px]"
              >
                Start Your Campaign
              </Link>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {[
                  "Custom marketing strategy",
                  "Premium content creation (unlimited)",
                  "Full SEO management",
                  "Social media management (all platforms)",
                  "Paid advertising management",
                  "Marketing automation setup",
                  "Conversion rate optimization",
                  "Dedicated marketing manager",
                  "Weekly strategy calls",
                  "Competitor analysis",
                  "12-month minimum commitment",
                ].map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 group-hover:translate-x-1 transition-transform duration-300"
                    style={{ "--index": index } as React.CSSProperties}
                  >
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Need a custom marketing solution? Let's create a tailored strategy for your business
          </p>
          <Link
            href="#lead-form"
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors inline-flex items-center group"
          >
            Contact us for custom marketing plans
            <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
