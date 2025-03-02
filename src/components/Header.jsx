import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Phone,
  User,
  Cog,
  KeySquare
} from "lucide-react";
import { cn } from "../lib/utils";


const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/", icon: User },
  { name: "Features", href: "/", icon: Cog },
  { name: "Contact", href: "/", icon: Phone },
  { name: "Login", href: "/login", icon: KeySquare },
];


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex justify-between items-center gap-8 translate-x-12">
              <Link to="/" className="flex items-center">
                <img
                  src="/task.png"
                  alt="TaskSphere"
                  className="h-8 w-auto "
                  />
              </Link>
              <Link to="/" className="flex justify-between items-center">
                <h1 className="text-3xl hover:scale-[1.15] transition-all duration-300 ease-in-out">
                  TaskSphere
                </h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              {/* Main Nav */}
              <div className="flex items-center space-x-8 mr-8 gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "text-sm font-medium tracking-wide transition-colors flex items-center gap-2",
                      location.pathname === item.href
                        ? "text-white"
                        : "text-white/50 hover:text-white"
                    )}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.name}
                  </Link>
                ))}
              </div>

            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 rounded-md text-white/50 hover:text-white focus:outline-none"
            >
              <Menu className="size-6 -translate-x-2" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/90 backdrop-blur-md md:hidden transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      >
        {/* Drawer Panel */}
        <div
          className={cn(
            "fixed inset-x-0 top-0 h-auto max-h-[85vh] bg-black shadow-xl transition-transform duration-300 ease-in-out border-b border-white/10",
            isOpen ? "translate-y-0" : "-translate-y-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <img
                src="/task.png"
                alt="TaskSphere"
                className="h-12 w-auto"
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-white/50 hover:text-white focus:outline-none"
            >
              <X className="size-6 -translate-x-2" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="px-4 py-6">
            {/* Main Navigation */}
            <div className="grid gap-4">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center px-4 py-3 rounded-lg text-lg font-medium tracking-wide transition-colors border border-white/10",
                      isActive
                        ? "bg-white text-black"
                        : "text-white hover:bg-white hover:text-black"
                    )}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.name}
                  </Link>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}