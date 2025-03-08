import { Check, X } from "lucide-react";
import Link from "next/link";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the plan that's right for your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Starter Plan */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md hover:scale-105 transition-all duration-300 group">
            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-2 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Starter
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Perfect for small teams just getting started
              </p>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-bold dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  $29
                </span>
                <span className="text-gray-500 dark:text-gray-400 mb-1">
                  /month
                </span>
              </div>
              <Link
                href="/sign-up"
                className="block w-full py-2 px-4 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded-lg text-center hover:bg-gray-50 dark:hover:bg-gray-600 hover:shadow-md transition-all duration-300 transform group-hover:translate-y-[-2px]"
              >
                Start Free Trial
              </Link>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {[
                  "Up to 5 team members",
                  "5GB storage",
                  "Basic analytics",
                  "Email support",
                  "3 projects",
                ].map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 group-hover:translate-x-1 transition-transform duration-300 delay-[calc(50ms*var(--index))]"
                    style={{ "--index": index } as React.CSSProperties}
                  >
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
                {["Advanced security", "Custom integrations"].map(
                  (feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 opacity-60 group-hover:translate-x-1 transition-transform duration-300 delay-[calc(50ms*var(--index))]"
                      style={{ "--index": index + 5 } as React.CSSProperties}
                    >
                      <X className="h-5 w-5 text-gray-300 shrink-0 mt-0.5" />
                      <span className="text-gray-400 dark:text-gray-500">
                        {feature}
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          {/* Pro Plan - Highlighted */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-blue-100 dark:border-blue-900 overflow-hidden relative transform scale-105 hover:scale-110 transition-all duration-300 group">
            <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-center py-1 text-sm font-medium">
              Most Popular
            </div>
            <div className="p-6 border-b border-gray-100 dark:border-gray-700 pt-10">
              <h3 className="text-xl font-bold mb-2 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Professional
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                For growing teams that need more
              </p>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-bold dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  $79
                </span>
                <span className="text-gray-500 dark:text-gray-400 mb-1">
                  /month
                </span>
              </div>
              <Link
                href="/sign-up"
                className="block w-full py-2 px-4 bg-blue-600 text-white rounded-lg text-center hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform group-hover:translate-y-[-2px]"
              >
                Start Free Trial
              </Link>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {[
                  "Up to 20 team members",
                  "50GB storage",
                  "Advanced analytics",
                  "Priority email support",
                  "Unlimited projects",
                  "Advanced security",
                ].map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 group-hover:translate-x-1 transition-transform duration-300 delay-[calc(50ms*var(--index))]"
                    style={{ "--index": index } as React.CSSProperties}
                  >
                    <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
                {["Custom integrations"].map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 opacity-60 group-hover:translate-x-1 transition-transform duration-300 delay-[calc(50ms*var(--index))]"
                    style={{ "--index": index + 6 } as React.CSSProperties}
                  >
                    <X className="h-5 w-5 text-gray-300 shrink-0 mt-0.5" />
                    <span className="text-gray-400 dark:text-gray-500">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md hover:scale-105 transition-all duration-300 group">
            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-2 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Enterprise
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                For large organizations with specific needs
              </p>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-4xl font-bold dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  $199
                </span>
                <span className="text-gray-500 dark:text-gray-400 mb-1">
                  /month
                </span>
              </div>
              <Link
                href="/sign-up"
                className="block w-full py-2 px-4 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white rounded-lg text-center hover:bg-gray-50 dark:hover:bg-gray-600 hover:shadow-md transition-all duration-300 transform group-hover:translate-y-[-2px]"
              >
                Contact Sales
              </Link>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {[
                  "Unlimited team members",
                  "500GB storage",
                  "Custom analytics",
                  "24/7 phone & email support",
                  "Unlimited projects",
                  "Advanced security",
                  "Custom integrations",
                  "Dedicated account manager",
                ].map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 group-hover:translate-x-1 transition-transform duration-300 delay-[calc(50ms*var(--index))]"
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

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Need a custom plan for your enterprise?
          </p>
          <Link
            href="#"
            className="text-blue-600 dark:text-blue-400 font-medium hover:underline hover:text-blue-700 dark:hover:text-blue-300 transition-colors inline-flex items-center group"
          >
            Contact our sales team
            <svg
              className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
