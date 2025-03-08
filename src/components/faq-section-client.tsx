"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "How does the 14-day free trial work?",
    answer:
      "You can sign up for our 14-day free trial without providing any payment information. You'll get full access to all features during the trial period. At the end of the trial, you can choose to subscribe to one of our plans or your account will automatically switch to the free plan with limited features.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new features will be available immediately. If you downgrade, the changes will take effect at the start of your next billing cycle.",
  },
  {
    question: "Is there a limit to how many team members I can add?",
    answer:
      "The number of team members you can add depends on your plan. The Starter plan allows up to 5 team members, the Professional plan allows up to 20, and the Enterprise plan has no limit on team members.",
  },
  {
    question:
      "Do you offer discounts for non-profits or educational institutions?",
    answer:
      "Yes, we offer special pricing for non-profit organizations, educational institutions, and open-source projects. Please contact our sales team for more information about our discount programs.",
  },
  {
    question: "How secure is your platform?",
    answer:
      "Security is our top priority. We use industry-standard encryption, regular security audits, and follow best practices for data protection. Our platform is SOC 2 compliant and we offer advanced security features like two-factor authentication, single sign-on, and role-based access controls.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "All plans include email support with varying response times based on your plan. The Professional plan includes priority email support, while the Enterprise plan offers 24/7 phone and email support along with a dedicated account manager.",
  },
];

export default function FAQSectionClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our platform
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left p-5 flex justify-between items-center rounded-lg ${openIndex === index ? "bg-blue-50 dark:bg-blue-900/30" : "bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"} transition-colors`}
              >
                <span className="font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-blue-600" />
                ) : (
                  <Plus className="h-5 w-5 text-gray-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-5 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-b-lg mt-1">
                  <p className="text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Still have questions?
          </p>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
