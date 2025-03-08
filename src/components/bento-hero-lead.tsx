"use client";

import Link from "next/link";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function BentoHeroLead() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900 py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-70 dark:from-blue-900 dark:via-gray-900 dark:to-purple-900" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main content - spans 7 columns on large screens */}
          <div
            className={`lg:col-span-7 text-center lg:text-left transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              <span>AI-Powered Design Generation</span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
              Transform Your Ideas into
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient-x">
                {" "}
                Beautiful Designs
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Submit your project requirements and our AI will generate custom
              design samples. Choose your favorites and our expert developers
              will bring them to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link
                href="#lead-form"
                className="inline-flex items-center px-8 py-4 text-white bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-105 transition-all duration-300 text-lg font-medium shadow-md hover:shadow-lg hover:shadow-blue-500/20 group"
              >
                Start Your Project
                <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>

              <Link
                href="#how-it-works"
                className="inline-flex items-center px-8 py-4 text-gray-700 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105 transition-all duration-300 text-lg font-medium shadow-sm hover:shadow-md"
              >
                How It Works
              </Link>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
                <Check className="w-5 h-5 text-green-500" />
                <span>AI-Generated Designs</span>
              </div>
              <div className="flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
                <Check className="w-5 h-5 text-green-500" />
                <span>Expert Development</span>
              </div>
              <div className="flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-full backdrop-blur-sm">
                <Check className="w-5 h-5 text-green-500" />
                <span>100% Satisfaction Guarantee</span>
              </div>
            </div>
          </div>

          {/* Hero image - spans 5 columns on large screens */}
          <div
            className={`lg:col-span-5 relative transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl transform lg:translate-x-10 hover:scale-[1.02] transition-all duration-500">
              <Image
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
                alt="AI Design Generation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div className="text-white font-medium">
                        AI Design Generator
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="bg-green-500/20 text-green-300 text-xs px-2 py-1 rounded-full">
                        Multiple Styles
                      </div>
                      <div className="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-full">
                        Custom Designs
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-10 -left-4 lg:-left-10 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg transform rotate-6 hover:rotate-0 transition-all duration-300 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold dark:text-white">
                    100+ Designs
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Generated Daily
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 right-10 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg transform -rotate-3 hover:rotate-0 transition-all duration-300 animate-float-delayed">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold dark:text-white">
                    Expert Developers
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Bring Designs to Life
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
