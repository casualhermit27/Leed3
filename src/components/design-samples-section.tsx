"use client";

import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type DesignSample = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  selected: boolean;
};

export default function DesignSamplesSection() {
  const [designSamples, setDesignSamples] = useState<DesignSample[]>([
    {
      id: "1",
      title: "Modern E-commerce Dashboard",
      description:
        "Clean, intuitive interface with sales analytics and inventory management",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      category: "Dashboard",
      selected: false,
    },
    {
      id: "2",
      title: "Mobile App Landing Page",
      description:
        "Conversion-focused design with app screenshots and feature highlights",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
      category: "Landing Page",
      selected: false,
    },
    {
      id: "3",
      title: "SaaS Product Website",
      description:
        "Modern, feature-rich website with pricing tables and testimonials",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      category: "Website",
      selected: false,
    },
    {
      id: "4",
      title: "Portfolio for Creatives",
      description:
        "Showcase-focused design with project galleries and contact forms",
      image:
        "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&q=80",
      category: "Portfolio",
      selected: false,
    },
    {
      id: "5",
      title: "Blog Platform Interface",
      description:
        "Content-first design with excellent readability and engagement features",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
      category: "Blog",
      selected: false,
    },
    {
      id: "6",
      title: "Admin Dashboard System",
      description:
        "Comprehensive admin interface with data visualization and user management",
      image:
        "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800&q=80",
      category: "Dashboard",
      selected: false,
    },
  ]);

  const [selectedCount, setSelectedCount] = useState(0);
  const [showThankYou, setShowThankYou] = useState(false);

  const toggleSelection = (id: string) => {
    const updatedSamples = designSamples.map((sample) => {
      if (sample.id === id) {
        const newSelectedState = !sample.selected;
        if (newSelectedState) {
          setSelectedCount((prev) => prev + 1);
        } else {
          setSelectedCount((prev) => prev - 1);
        }
        return { ...sample, selected: newSelectedState };
      }
      return sample;
    });
    setDesignSamples(updatedSamples);
  };

  const handleSubmit = () => {
    // In a real app, you would send the selected designs to your backend
    console.log(
      "Selected designs:",
      designSamples.filter((sample) => sample.selected),
    );
    setShowThankYou(true);
  };

  if (showThankYou) {
    return (
      <section
        id="design-samples"
        className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Thank You!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We've received your design selections. Our team will review your
              choices and contact you within 24 hours to discuss the next steps
              for your project.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl mb-6">
              <p className="text-blue-800 dark:text-blue-300 font-medium">
                Selected designs: {selectedCount}
              </p>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              While you wait, feel free to explore our portfolio or check out
              our blog for design inspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#"
                className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300 group"
              >
                View Our Portfolio
                <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center px-6 py-3 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                Read Our Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="design-samples"
      className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            <span>AI-Generated Designs</span>
          </div>
          <h2 className="text-3xl font-bold mb-4 dark:text-white">
            Select Your Preferred Design Samples
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
            Browse through our AI-generated design samples and select the ones
            that match your vision. Our development team will use these as
            inspiration to create your custom solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designSamples.map((sample) => (
            <div
              key={sample.id}
              className={`group rounded-3xl overflow-hidden relative hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border ${sample.selected ? "border-blue-500 dark:border-blue-400 ring-2 ring-blue-500 dark:ring-blue-400" : "border-gray-200 dark:border-gray-700"} cursor-pointer`}
              onClick={() => toggleSelection(sample.id)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={sample.image}
                  alt={sample.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                  {sample.category}
                </div>
                {sample.selected && (
                  <div className="absolute inset-0 bg-blue-600/20 flex items-center justify-center">
                    <div className="bg-white dark:bg-gray-800 rounded-full p-2">
                      <Check className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-5 bg-white dark:bg-gray-800">
                <h3 className="text-lg font-semibold mb-2 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {sample.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 dark:text-gray-300">
                  {sample.description}
                </p>
                <div className="flex justify-between items-center">
                  <span
                    className={`text-sm font-medium ${sample.selected ? "text-blue-600 dark:text-blue-400" : "text-gray-500 dark:text-gray-400"}`}
                  >
                    {sample.selected ? "Selected" : "Click to select"}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${sample.selected ? "border-blue-600 dark:border-blue-400 bg-blue-600 dark:bg-blue-400" : "border-gray-300 dark:border-gray-600"}`}
                  >
                    {sample.selected && (
                      <Check className="w-4 h-4 text-white" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              {selectedCount} design{selectedCount !== 1 ? "s" : ""} selected
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Select at least one design to continue
            </p>
          </div>
          <button
            onClick={handleSubmit}
            disabled={selectedCount === 0}
            className={`inline-flex items-center px-8 py-4 text-white rounded-full shadow-md text-lg font-medium transition-all duration-300 ${selectedCount > 0 ? "bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105" : "bg-gray-400 cursor-not-allowed"}`}
          >
            Submit Selections
            <ArrowUpRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
