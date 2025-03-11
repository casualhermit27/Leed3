"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type MarketingService = {
  id: string;
  name: string;
  selected: boolean;
};

type MarketingGoal = {
  id: string;
  name: string;
  selected: boolean;
};

export default function LeadFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    budget: "",
    timeline: "",
    description: "",
    services: [] as string[],
    targetAudience: "",
    currentChallenges: "",
  });

  const [marketingServices, setMarketingServices] = useState<MarketingService[]>([
    { id: "socialMedia", name: "Social Media Marketing", selected: false },
    { id: "contentMarketing", name: "Content Marketing", selected: false },
    { id: "emailCampaigns", name: "Email Campaigns", selected: false },
    { id: "seo", name: "SEO & SEM", selected: false },
    { id: "ppc", name: "PPC Advertising", selected: false },
    { id: "analytics", name: "Marketing Analytics", selected: false },
  ]);

  const [marketingGoals, setMarketingGoals] = useState<MarketingGoal[]>([
    { id: "brandAwareness", name: "Increase Brand Awareness", selected: false },
    { id: "leadGeneration", name: "Lead Generation", selected: false },
    { id: "salesConversion", name: "Sales Conversion", selected: false },
    { id: "customerRetention", name: "Customer Retention", selected: false },
    { id: "marketExpansion", name: "Market Expansion", selected: false },
    { id: "productLaunch", name: "Product Launch", selected: false },
    { id: "competitiveEdge", name: "Competitive Edge", selected: false },
    { id: "brandLoyalty", name: "Brand Loyalty", selected: false },
  ]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleMarketingService = (id: string) => {
    setMarketingServices(
      marketingServices.map((service) =>
        service.id === id ? { ...service, selected: !service.selected } : service,
      ),
    );
  };

  const toggleMarketingGoal = (id: string) => {
    setMarketingGoals(
      marketingGoals.map((goal) =>
        goal.id === id ? { ...goal, selected: !goal.selected } : goal,
      ),
    );
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1500);
  };

  if (formSubmitted) {
    return (
      <section
        id="lead-form"
        className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white opacity-20 animate-blob"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-blue-300 opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-indigo-300 opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 shadow-xl">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-yellow-300" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
              <p className="text-xl mb-8 text-blue-100">
                Your marketing campaign request has been submitted successfully. Our
                team will analyze your requirements and develop a tailored marketing strategy.
              </p>
              <p className="mb-8 text-blue-100">
                You'll receive an email within 24 hours with a proposal and next steps for
                your marketing campaign.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#pricing"
                  className="inline-flex items-center px-8 py-4 text-blue-700 bg-white rounded-full hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium group"
                >
                  View Marketing Packages
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center px-8 py-4 text-white bg-transparent border-2 border-white/70 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105 font-medium"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="lead-form"
      className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white opacity-20 animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-blue-300 opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-indigo-300 opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 shadow-xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-1">
          <div className="absolute -top-3 -right-3">
            <div className="bg-white/20 backdrop-blur-md p-2 rounded-full animate-pulse">
              <Sparkles className="w-5 h-5 text-yellow-300" />
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-center">
            Start Your Marketing Campaign
          </h2>
          <p className="text-blue-100 mb-8 text-center">
            Share your marketing goals and requirements, and we'll create a customized
            strategy to help you achieve measurable results
          </p>

          <div className="mb-8">
            <div className="flex justify-between mb-4">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${currentStep === step ? "bg-white text-blue-600" : currentStep > step ? "bg-green-400 text-white" : "bg-white/30 text-white"}`}
                  >
                    {currentStep > step ? "✓" : step}
                  </div>
                  <span className="text-sm text-white/80">
                    {step === 1
                      ? "Basic Info"
                      : step === 2
                        ? "Campaign Details"
                        : "Marketing Goals"}
                  </span>
                </div>
              ))}
            </div>
            <div className="w-full bg-white/30 h-1 rounded-full">
              <div
                className="bg-white h-1 rounded-full transition-all duration-500"
                style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
              ></div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm transition-all duration-300 focus:scale-105"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Work Email"
                      className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm transition-all duration-300 focus:scale-105"
                      required
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm transition-all duration-300 focus:scale-105"
                    required
                  />
                </div>
                <div>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                    required
                  >
                    <option value="" disabled className="text-gray-800">
                      Select Industry
                    </option>
                    <option value="technology" className="text-gray-800">
                      Technology
                    </option>
                    <option value="healthcare" className="text-gray-800">
                      Healthcare
                    </option>
                    <option value="finance" className="text-gray-800">
                      Finance
                    </option>
                    <option value="retail" className="text-gray-800">
                      Retail
                    </option>
                    <option value="education" className="text-gray-800">
                      Education
                    </option>
                    <option value="other" className="text-gray-800">
                      Other
                    </option>
                  </select>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Target Audience</h3>
                  <textarea
                    name="targetAudience"
                    value={formData.targetAudience}
                    onChange={handleChange}
                    placeholder="Describe your target audience, demographics, and customer personas..."
                    className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm h-32"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Current Marketing Challenges</h3>
                  <textarea
                    name="currentChallenges"
                    value={formData.currentChallenges}
                    onChange={handleChange}
                    placeholder="What marketing challenges are you currently facing? What hasn't worked in the past?"
                    className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm h-32"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Campaign Timeline</h3>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                    required
                  >
                    <option value="" disabled className="text-gray-800">
                      Select Timeline
                    </option>
                    <option value="immediate" className="text-gray-800">
                      Immediate (1-2 weeks)
                    </option>
                    <option value="short" className="text-gray-800">
                      Short-term (1-3 months)
                    </option>
                    <option value="medium" className="text-gray-800">
                      Medium-term (3-6 months)
                    </option>
                    <option value="long" className="text-gray-800">
                      Long-term (6+ months)
                    </option>
                  </select>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Monthly Marketing Budget</h3>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                    required
                  >
                    <option value="" disabled className="text-gray-800">
                      Select Budget Range
                    </option>
                    <option value="<2k" className="text-gray-800">
                      Less than $2,000/month
                    </option>
                    <option value="2k-5k" className="text-gray-800">
                      $2,000 - $5,000/month
                    </option>
                    <option value="5k-10k" className="text-gray-800">
                      $5,000 - $10,000/month
                    </option>
                    <option value="10k+" className="text-gray-800">
                      $10,000+/month
                    </option>
                  </select>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Campaign Description</h3>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe your marketing campaign goals, key messages, and any specific requirements..."
                    className="w-full px-4 py-3 rounded-lg border border-white/30 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm h-32"
                    required
                  />
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">
                    Select Marketing Services
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {marketingServices.map((service) => (
                      <div
                        key={service.id}
                        onClick={() => toggleMarketingService(service.id)}
                        className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${service.selected ? "bg-white/30 border-white" : "bg-white/10 border-transparent"} border hover:bg-white/20 flex items-center`}
                      >
                        <div
                          className={`w-5 h-5 rounded-md border-2 mr-3 flex items-center justify-center ${service.selected ? "border-white bg-white" : "border-white/50"}`}
                        >
                          {service.selected && (
                            <div className="w-3 h-3 rounded-sm bg-blue-600"></div>
                          )}
                        </div>
                        <span>{service.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">
                    Select Marketing Goals
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {marketingGoals.map((goal) => (
                      <div
                        key={goal.id}
                        onClick={() => toggleMarketingGoal(goal.id)}
                        className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${goal.selected ? "bg-white/30 border-white" : "bg-white/10 border-transparent"} border hover:bg-white/20 flex items-center`}
                      >
                        <div
                          className={`w-5 h-5 rounded-md border-2 mr-3 flex items-center justify-center ${goal.selected ? "border-white bg-white" : "border-white/50"}`}
                        >
                          {goal.selected && (
                            <div className="w-3 h-3 rounded-sm bg-blue-600"></div>
                          )}
                        </div>
                        <span>{goal.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="mt-8 flex justify-between">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                >
                  Back
                </button>
              )}

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors ml-auto"
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors ml-auto flex items-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      Submit
                      <ArrowUpRight className="ml-2 w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </div>
          </form>

          <p className="text-xs text-white/70 text-center mt-6">
            By submitting this form, you agree to our{" "}
            <Link
              href="#"
              className="underline hover:text-white transition-colors"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="#"
              className="underline hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
