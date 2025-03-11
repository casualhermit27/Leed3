import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description:
        "We analyze your business goals, target audience, and competitive landscape to develop a tailored marketing strategy.",
      color: "blue",
    },
    {
      number: "02",
      title: "Creative Concept Development",
      description:
        "Our creative team crafts compelling campaign concepts that align with your brand identity and marketing objectives.",
      color: "purple",
    },
    {
      number: "03",
      title: "Design & Content Creation",
      description:
        "We produce high-quality designs and engaging content tailored to each marketing channel and audience segment.",
      color: "indigo",
    },
    {
      number: "04",
      title: "Campaign Execution",
      description:
        "Our marketing specialists deploy your campaigns across appropriate channels, optimizing for maximum impact.",
      color: "green",
    },
    {
      number: "05",
      title: "Performance Monitoring",
      description:
        "We track key metrics in real-time, making data-driven adjustments to improve campaign performance.",
      color: "yellow",
    },
    {
      number: "06",
      title: "Analysis & Optimization",
      description:
        "Detailed reporting and insights help refine your marketing strategy for continuous improvement and ROI.",
      color: "red",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">
            Our Marketing Process
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our strategic approach transforms your business objectives into 
            successful marketing campaigns that deliver measurable results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 dark:border-gray-700 relative overflow-hidden"
            >
              <div
                className={`absolute -top-6 -right-6 w-24 h-24 rounded-full bg-${step.color}-100 dark:bg-${step.color}-900/20 opacity-50 group-hover:scale-110 transition-transform duration-500`}
              ></div>

              <div className="relative z-10">
                <div
                  className={`text-4xl font-bold text-${step.color}-600 dark:text-${step.color}-400 mb-4 opacity-40 group-hover:opacity-100 transition-opacity`}
                >
                  {step.number}
                </div>

                <h3 className="text-xl font-bold mb-3 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-300 dark:text-gray-600" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
