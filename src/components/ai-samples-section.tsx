import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
};

const projects: Project[] = [
  {
    id: "1",
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time data visualization with predictive insights",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    category: "Analytics",
    link: "#",
  },
  {
    id: "2",
    title: "Smart Content Generator",
    description: "Create SEO-optimized content with a single click",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8f5a70d?w=800&q=80",
    category: "Content",
    link: "#",
  },
  {
    id: "3",
    title: "Intelligent Customer Support",
    description: "24/7 automated support with human-like interactions",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    category: "Support",
    link: "#",
  },
  {
    id: "4",
    title: "Predictive Sales Forecasting",
    description: "Accurate revenue predictions based on historical data",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    category: "Sales",
    link: "#",
  },
];

export default function AISamplesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">
            AI-Generated Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto dark:text-gray-300">
            Explore our portfolio of AI-powered projects that are transforming
            businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                  {project.category}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 dark:text-gray-300">
                  {project.description}
                </p>
                <Link
                  href={project.link}
                  className="inline-flex items-center text-blue-600 text-sm font-medium hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  View Project
                  <ArrowUpRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="#"
            className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors dark:bg-blue-700 dark:hover:bg-blue-600"
          >
            View All Projects
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
