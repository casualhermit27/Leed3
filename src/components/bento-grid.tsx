import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Layers,
  Rocket,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BentoGrid() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">
            Our Marketing Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive marketing solutions to elevate your brand and drive business growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
          {/* Large Feature Card */}
          <div className="md:col-span-2 md:row-span-2 group rounded-3xl overflow-hidden relative bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-8 flex flex-col justify-between hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/90 to-indigo-600/90 opacity-90 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="bg-white/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2">
                Integrated Marketing Campaigns
              </h3>
              <p className="text-blue-100 mb-6">
                Cohesive multi-channel marketing strategies that amplify your brand message and drive measurable results across all platforms.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium hover:underline group"
              >
                Learn more
                <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
            <div className="absolute bottom-0 right-0 w-40 h-40 opacity-20 group-hover:opacity-30 transition-opacity">
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  fill="#FFFFFF"
                  d="M47.5,-57.2C59.3,-46.1,65.2,-29.7,68.4,-12.8C71.5,4.1,71.9,21.5,64.2,35.1C56.5,48.7,40.8,58.5,24.2,64.1C7.6,69.7,-9.9,71.1,-25.7,65.9C-41.5,60.7,-55.5,48.9,-64.4,33.8C-73.3,18.7,-77,0.4,-72.1,-15.2C-67.2,-30.8,-53.6,-43.6,-39.1,-54.3C-24.6,-65,-12.3,-73.5,2.4,-76.5C17.1,-79.5,34.2,-76.9,47.5,-67.8Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </div>

          {/* Analytics Card */}
          <div className="group rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
            <div className="bg-blue-100 dark:bg-blue-900/30 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
              <BarChart3 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2 dark:text-white">
              Marketing Analytics
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Data-driven insights to optimize your campaigns and maximize ROI.
            </p>
          </div>

          {/* Brand Strategy Card */}
          <div className="group rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
            <div className="bg-green-100 dark:bg-green-900/30 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2 dark:text-white">
              Brand Strategy
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Develop a distinctive brand identity that resonates with your target audience.
            </p>
          </div>

          {/* Testimonial Card */}
          <div className="md:col-span-2 group rounded-3xl overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/10 p-6 flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-purple-100 dark:border-purple-900/20">
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-6 italic text-sm">
              "Their marketing team completely transformed our brand presence. Our social media engagement increased by 215% and we saw a 40% boost in qualified leads within just three months."
            </p>
            <div className="flex items-center mt-auto">
              <div className="w-10 h-10 rounded-full bg-purple-200 dark:bg-purple-800 overflow-hidden mr-3 flex items-center justify-center">
                <span className="text-purple-600 dark:text-purple-300 font-semibold">
                  S
                </span>
              </div>
              <div>
                <h4 className="font-semibold dark:text-white">Sarah Johnson</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  CMO, GrowthBrand
                </p>
              </div>
            </div>
          </div>

          {/* Image Card */}
          <div className="md:row-span-2 group rounded-3xl overflow-hidden relative hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
              alt="Marketing strategy session"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-white text-lg font-semibold mb-2">
                Strategic Planning
              </h3>
              <p className="text-white/80 text-sm">
                Custom marketing strategies aligned with your business objectives.
              </p>
            </div>
          </div>

          {/* Digital Marketing Card */}
          <div className="group rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
            <div className="bg-yellow-100 dark:bg-yellow-900/30 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
              <Zap className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2 dark:text-white">
              Digital Marketing
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              SEO, PPC, and social media campaigns that drive traffic and conversions.
            </p>
          </div>

          {/* Content Marketing Card */}
          <div className="group rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
            <div className="bg-red-100 dark:bg-red-900/30 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
              <Layers className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2 dark:text-white">
              Content Marketing
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Engaging content that tells your brand story and builds customer loyalty.
            </p>
          </div>

          {/* Performance Marketing Card */}
          <div className="group rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
            <div className="bg-teal-100 dark:bg-teal-900/30 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
              <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2 dark:text-white">
              Performance Marketing
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Results-focused campaigns with clear KPIs and conversion tracking.
            </p>
          </div>

          {/* Marketing Automation Card */}
          <div className="group rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
            <div className="bg-indigo-100 dark:bg-indigo-900/30 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="text-lg font-semibold mb-2 dark:text-white">
              Marketing Automation
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Streamline your marketing workflows and nurture leads efficiently.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="#"
            className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300"
          >
            View All Services
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
