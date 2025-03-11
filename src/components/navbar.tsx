import Link from "next/link";
import { createClient } from "../../supabase/server";
import { Button } from "./ui/button";
import { User, UserCircle, Menu, ChevronDown, Moon, Sun } from "lucide-react";
import ThemeToggle from "./theme-toggle";
import UserProfile from "./user-profile";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default async function Navbar() {
  const supabase = createClient();

  const {
    data: { user },
  } = await (await supabase).auth.getUser();

  return (
    <nav className="relative w-full py-3 z-50">
      {/* Background with blur effect */}
      <div className="absolute inset-0 bg-white/70 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm"></div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="group flex items-center">
              <span className="text-2xl font-light tracking-wider text-gray-900 dark:text-gray-100 font-playfair">
                Stratosphere
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {/* Features Dropdown */}
              <div className="relative group">
                <button className="group inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200">
                  <span>Features</span>
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 mt-1 w-60 origin-top-left scale-95 opacity-0 invisible group-hover:scale-100 group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out z-50">
                  <div className="rounded-lg bg-white dark:bg-gray-900 p-2 shadow-lg ring-1 ring-black/5 dark:ring-white/10 overflow-hidden">
                    <div className="relative grid gap-1 p-1">
                      <Link href="#features" className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-purple-50 dark:hover:bg-gray-800 transition-colors">
                        <div className="mr-2 h-7 w-7 rounded-full bg-purple-100 dark:bg-gray-800 flex items-center justify-center">
                          <span className="text-purple-600 dark:text-purple-400 text-xs">01</span>
                        </div>
                        <span>How It Works</span>
                      </Link>
                      <Link href="#samples" className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-purple-50 dark:hover:bg-gray-800 transition-colors">
                        <div className="mr-2 h-7 w-7 rounded-full bg-pink-100 dark:bg-gray-800 flex items-center justify-center">
                          <span className="text-pink-600 dark:text-pink-400 text-xs">02</span>
                        </div>
                        <span>Sample Work</span>
                      </Link>
                      <Link href="#" className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-purple-50 dark:hover:bg-gray-800 transition-colors">
                        <div className="mr-2 h-7 w-7 rounded-full bg-blue-100 dark:bg-gray-800 flex items-center justify-center">
                          <span className="text-blue-600 dark:text-blue-400 text-xs">03</span>
                        </div>
                        <span>Collaboration</span>
                      </Link>
                      <Link href="#" className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-purple-50 dark:hover:bg-gray-800 transition-colors">
                        <div className="mr-2 h-7 w-7 rounded-full bg-indigo-100 dark:bg-gray-800 flex items-center justify-center">
                          <span className="text-indigo-600 dark:text-indigo-400 text-xs">04</span>
                        </div>
                        <span>Reporting</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Regular Nav Links */}
              {["Pricing", "Resources", "About"].map((item, index) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="group relative px-3 py-2 text-sm font-medium text-gray-800 dark:text-gray-200 transition-colors"
                >
                  <span className="relative z-10">{item}</span>
                  <span className="absolute inset-0 rounded-md bg-transparent group-hover:bg-gray-100 dark:group-hover:bg-gray-800 transition-colors duration-200"></span>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Right Side - Auth & Theme */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            
            {user ? (
              <div className="flex items-center gap-3">
                <Link href="/dashboard">
                  <Button className="relative overflow-hidden rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/20 before:absolute before:-left-3 before:top-0 before:h-full before:w-0 before:bg-white/20 before:skew-x-[30deg] before:transition-all hover:before:w-[150%]">
                    Dashboard
                  </Button>
                </Link>
                <UserProfile />
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link href="/sign-in" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  Sign In
                </Link>
                <Link href="/sign-up">
                  <Button className="relative overflow-hidden rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/20 before:absolute before:-left-3 before:top-0 before:h-full before:w-0 before:bg-white/20 before:skew-x-[30deg] before:transition-all hover:before:w-[150%]">
                    Get Started
                  </Button>
                </Link>
                
                {/* Mobile Menu Button */}
                <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <Menu className="h-6 w-6" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation - Hidden by default */}
      <div className="hidden md:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link href="#features" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            How It Works
          </Link>
          <Link href="#samples" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            Sample Work
          </Link>
          <Link href="#pricing" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            Pricing
          </Link>
          <Link href="#resources" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            Resources
          </Link>
          <Link href="#about" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            About
          </Link>
          {!user && (
            <Link href="/sign-in" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
