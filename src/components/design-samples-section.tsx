"use client";

import { ArrowUpRight, Check, Sparkles, ArrowRight } from "lucide-react";
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
      title: "Brand Identity Package",
      description:
        "Complete brand identity including logo variations, color palette, typography, and usage guidelines",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      category: "Branding",
      selected: false,
    },
    {
      id: "2",
      title: "Social Media Campaign Kit",
      description:
        "Cohesive social media templates for Instagram, Facebook, Twitter, and LinkedIn with editable elements",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
      category: "Social Media",
      selected: false,
    },
    {
      id: "3",
      title: "Marketing Collateral Set",
      description:
        "Professional business cards, letterheads, brochures, and presentation templates for your brand",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      category: "Print",
      selected: false,
    },
    {
      id: "4",
      title: "Product Launch Package",
      description:
        "Comprehensive design assets for product launches including packaging, ads, and landing page mockups",
      image:
        "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&q=80",
      category: "Marketing",
      selected: false,
    },
    {
      id: "5",
      title: "Digital Ad Campaign Bundle",
      description:
        "Ready-to-use templates for Google, Facebook, and display advertising in multiple formats and sizes",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
      category: "Advertising",
      selected: false,
    },
    {
      id: "6",
      title: "Email Marketing Templates",
      description:
        "Responsive email designs for newsletters, promotions, and announcements with customizable sections",
      image:
        "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800&q=80",
      category: "Email",
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
        className="py-24 bg-gray-50 dark:bg-gray-900"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Thank You!
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We've received your design package selections. Our creative team will review your requirements 
              and begin working on your custom design assets within 48 hours.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6">
              <p className="text-blue-800 dark:text-blue-300 font-medium">
                Selected packages: {selectedCount}
              </p>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              While our designers work on your project, check out our design process or browse our case studies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#"
                className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
              >
                Our Design Process
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center px-6 py-3 text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                Case Studies
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
      className="py-24 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            <span>Design Packages</span>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
            Turn Requirements Into Stunning Designs
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
            Select from our range of professional design packages tailored to your marketing needs. 
            Our expert designers transform your requirements into polished, ready-to-use design assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designSamples.map((sample) => (
            <div
              key={sample.id}
              className={`bg-white dark:bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer hover:-translate-y-1 ${
                sample.selected 
                  ? "ring-2 ring-blue-500 dark:ring-blue-400 shadow-lg" 
                  : "border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md"
              }`}
              onClick={() => toggleSelection(sample.id)}
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={sample.image}
                  alt={sample.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-blue-600 text-white text-xs font-medium">
                    {sample.category}
                  </span>
                </div>
                {sample.selected && (
                  <div className="absolute inset-0 bg-blue-500/10 flex items-center justify-center">
                    <div className="bg-white dark:bg-gray-800 rounded-full p-2 shadow-md">
                      <Check className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {sample.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {sample.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className={`text-sm font-medium ${
                    sample.selected 
                      ? "text-blue-600 dark:text-blue-400" 
                      : "text-gray-500 dark:text-gray-400"
                  }`}>
                    {sample.selected ? "Selected" : "Click to select"}
                  </span>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                    sample.selected 
                      ? "bg-blue-600 dark:bg-blue-500" 
                      : "border border-gray-300 dark:border-gray-600"
                  }`}>
                    {sample.selected && <Check className="w-3 h-3 text-white" />}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">
              {selectedCount} package{selectedCount !== 1 ? "s" : ""} selected
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Select at least one design package to continue
            </p>
          </div>
          
          <button
            onClick={handleSubmit}
            disabled={selectedCount === 0}
            className={`inline-flex items-center px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 ${
              selectedCount > 0 
                ? "bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow-md" 
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Request Selected Packages
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
