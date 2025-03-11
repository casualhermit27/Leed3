"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "How do your marketing services work?",
    answer:
      "We begin with a comprehensive discovery session to understand your business goals, target audience, and current marketing challenges. Our team then develops a customized marketing strategy tailored to your specific needs. Once approved, we implement the strategy across relevant channels, continuously monitor performance, and optimize campaigns to maximize your ROI.",
  },
  {
    question: "How long does it take to see results from marketing campaigns?",
    answer:
      "Results vary based on your industry, competition, and chosen marketing channels. Typically, digital advertising campaigns can show initial results within 2-4 weeks, while SEO and content marketing efforts usually take 3-6 months to demonstrate significant impact. We provide regular performance reports so you can track progress throughout your campaign.",
  },
  {
    question: "What's included in your marketing packages?",
    answer:
      "Our marketing packages include strategy development, content creation, campaign execution, performance monitoring, and regular optimization. Depending on your selected package, services may include social media management, email marketing, SEO, paid advertising, content marketing, and more. Each package is designed to provide a comprehensive marketing solution tailored to your business size and goals.",
  },
  {
    question: "Can I customize my marketing package?",
    answer:
      "Absolutely! While we offer structured packages to meet common business needs, we understand that every business is unique. We can customize any package to focus on the channels and strategies that will best serve your specific goals. Contact us to discuss your requirements, and we'll create a tailored marketing solution for your business.",
  },
  {
    question: "Do you provide reporting and analytics?",
    answer:
      "Yes, transparency is core to our approach. All packages include regular performance reporting with clear metrics and insights. Our Growth Accelerator and Enterprise Suite packages include access to a real-time dashboard where you can monitor campaign performance at any time. We also schedule regular review meetings to discuss results and strategy adjustments.",
  },
  {
    question: "What if I want to change my marketing strategy mid-campaign?",
    answer:
      "We understand that business needs evolve. If you need to pivot your marketing strategy, we'll work with you to make necessary adjustments. Our team continuously analyzes campaign performance and market conditions, often recommending strategic shifts to improve results. We value flexibility and will adapt your campaigns to ensure they align with your current business objectives.",
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
            Common questions about our marketing services
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
            Have more questions about our marketing services?
          </p>
          <a
            href="#lead-form"
            className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
