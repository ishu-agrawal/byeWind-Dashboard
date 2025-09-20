import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import OrderList from './components/OrderList';
import NotificationPanel from './components/NotificationPanel';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved === null) return false;
      // Handle both boolean and string values
      if (saved === 'true') return true;
      if (saved === 'false') return false;
      return JSON.parse(saved);
    } catch (error) {
      console.warn('Error parsing theme from localStorage:', error);
      return false;
    }
  });
  
  const [activeView, setActiveView] = useState('ecommerce');
  const [searchTerm, setSearchTerm] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    try {
      localStorage.setItem('theme', JSON.stringify(newTheme));
    } catch (error) {
      console.warn('Error saving theme to localStorage:', error);
    }
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <ThemeProvider value={{ isDark, toggleTheme }}>
      <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-200`}>
        <div className="flex">
          <Sidebar 
            activeView={activeView} 
            setActiveView={setActiveView} 
            isDark={isDark} 
          />
          
          <div className="flex-1">
            <Header 
              isDark={isDark} 
              toggleTheme={toggleTheme}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              showNotifications={showNotifications}
              setShowNotifications={setShowNotifications}
            />
            
            <main className="p-6">
              {activeView === 'default' ? (
                <div>
                  <div className="mb-6">
                    <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      eCommerce
                    </h1>
                  </div>
                  <Dashboard isDark={isDark} />
                </div>
              ) : activeView === 'projects' ? (
                <div>
                  <div className="mb-6">
                    <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Order List
                    </h1>
                  </div>
                  <OrderList 
                    isDark={isDark} 
                    searchTerm={searchTerm}
                  />
                </div>
              ) : (
                <div className="text-center py-12">
                  <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
                    {activeView.charAt(0).toUpperCase() + activeView.slice(1).replace('-', ' ')}
                  </h1>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    This view is under construction.
                  </p>
                </div>
              )}
            </main>
          </div>
        </div>

        {/* Notification Panel */}
        <NotificationPanel
          isDark={isDark}
          show={showNotifications}
          onClose={() => setShowNotifications(false)}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;