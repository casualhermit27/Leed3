import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Submit Your Requirements",
      description:
        "Fill out our detailed project form with your specific needs, goals, and preferences.",
      color: "blue",
    },
    {
      number: "02",
      title: "AI Generates Design Samples",
      description:
        "Our AI system creates multiple custom design concepts based on your requirements.",
      color: "purple",
    },
    {
      number: "03",
      title: "Select Your Favorites",
      description:
        "Browse through the generated designs and choose the ones that best match your vision.",
      color: "indigo",
    },
    {
      number: "04",
      title: "Development Begins",
      description:
        "Our expert development team brings your selected designs to life with clean, efficient code.",
      color: "green",
    },
    {
      number: "05",
      title: "Review & Refine",
      description:
        "Provide feedback on the implementation and we'll make adjustments until it's perfect.",
      color: "yellow",
    },
    {
      number: "06",
      title: "Launch Your Project",
      description:
        "Once approved, we deploy your project and provide ongoing support to ensure success.",
      color: "red",
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">
            How It Works
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our streamlined process takes you from concept to completed project
            with AI-powered efficiency
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
