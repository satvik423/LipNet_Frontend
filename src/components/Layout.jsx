// components/Layout.jsx
import { Brain, FileVideo, Mic, Zap } from "lucide-react";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", icon: Brain, exact: true },
  { to: "/about", label: "About", icon: Zap },
  { to: "/predict", label: "Predict", icon: FileVideo },
];

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Mic className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                LipNet
              </span>
            </div>

            <div className="flex space-x-1 bg-gray-900/50 rounded-full p-1">
              {navItems.map(({ to, label, icon: Icon, exact }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={exact}
                  className={({ isActive }) =>
                    `px-6 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                        : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                    }`
                  }
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{label}</span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Add padding-top so that page content isn't hidden under the fixed nav */}
      <main>
        {/* Outlet will render the matched child route's component */}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
