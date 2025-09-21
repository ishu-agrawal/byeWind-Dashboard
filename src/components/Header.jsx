import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, Settings, Sun, Moon, X, History, Star, PanelLeft} from 'lucide-react';

const Header = ({ isDark, toggleTheme, searchTerm, setSearchTerm, showNotifications, setShowNotifications }) => {
  const notificationRef = useRef(null);

  // Close notifications when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={`h-16 ${isDark ? 'bg-black border-gray-800' : 'bg-white border-gray-200'} border-b px-6 flex items-center justify-between transition-colors duration-200 sticky top-0 z-40`}>      
      {/* Breadcrumb */}
      <div className="flex items-center space-x-4">
        {/* PanelLeft */}
        <button 
          className={`p-2 rounded-lg ${
            isDark 
              ? 'hover:bg-gray-700 text-gray-300' 
              : 'hover:bg-gray-200 text-gray-600'
          } transition-all duration-200 hover:scale-105 active:scale-95`}
          aria-label="Settings"
        >
          <PanelLeft className="w-5 h-5" />
        </button>
        
      {/* Star */}
        <button 
          className={`p-2 rounded-lg ${
            isDark 
              ? 'hover:bg-gray-700 text-gray-300' 
              : 'hover:bg-gray-200 text-gray-600'
          } transition-all duration-200 hover:scale-105 active:scale-95`}
          aria-label="Settings"
        >
          <Star className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2">
          <span className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Dashboards
          </span>
          <span className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>/</span>
          <span className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Default
          </span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`pl-10 pr-4 py-2 rounded-lg border ${
              isDark 
                ? 'bg-gray-900 border-gray-900 text-white placeholder-gray-400 focus:border-blue-500' 
                : 'bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
            } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 w-64`}
          />
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-lg ${
            isDark 
              ? 'hover:bg-gray-700 text-gray-300' 
              : 'hover:bg-gray-200 text-gray-600'
          } transition-all duration-200 hover:scale-105 active:scale-95`}
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-white" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>

        {/* History */}
        <button 
          className={`p-2 rounded-lg ${
            isDark 
              ? 'hover:bg-gray-700 text-gray-300' 
              : 'hover:bg-gray-200 text-gray-600'
          } transition-all duration-200 hover:scale-105 active:scale-95`}
          aria-label="Settings"
        >
          <History className="w-5 h-5" />
        </button>

        {/* Notifications */}
        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className={`p-2 rounded-lg ${
              isDark 
                ? 'hover:bg-gray-700 text-gray-300' 
                : 'hover:bg-gray-200 text-gray-600'
            } transition-all duration-200 hover:scale-105 active:scale-95 relative`}
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
          </button>
        </div>

        {/* PanelLeft */}
        <button 
          className={`p-2 rounded-lg ${
            isDark 
              ? 'hover:bg-gray-700 text-gray-300' 
              : 'hover:bg-gray-200 text-gray-600'
          } transition-all duration-200 hover:scale-105 active:scale-95`}
          aria-label="Settings"
        >
          <PanelLeft className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;