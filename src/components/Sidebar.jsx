import React from 'react';
import { 
  Home, FolderOpen, BookOpen, User, Building2, 
  FileText, MessageSquare, ChevronDown 
} from 'lucide-react';

const Sidebar = ({ activeView, setActiveView, isDark }) => {
  const menuItems = [
    { id: 'overview', icon: Home, label: 'Overview', hasSubItems: false },
    { id: 'projects', icon: FolderOpen, label: 'Projects', hasSubItems: true },
    { id: 'online-courses', icon: BookOpen, label: 'Online Courses', hasSubItems: false }
  ];

  const pageItems = [
    { id: 'user-profile', icon: User, label: 'User Profile', hasSubItems: true },
    { id: 'account', icon: User, label: 'Account', hasSubItems: false },
    { id: 'corporate', icon: Building2, label: 'Corporate', hasSubItems: false },
    { id: 'blog', icon: FileText, label: 'Blog', hasSubItems: false },
    { id: 'social', icon: MessageSquare, label: 'Social', hasSubItems: false }
  ];

  const SidebarButton = ({ id, label, isActive, onClick, icon: Icon, hasSubItems, hasDot, dotColor = 'bg-gray-400' }) => (
    <button
      onClick={() => onClick(id)}
      className={`sidebar-item ${isActive ? 'sidebar-item-active' : 'sidebar-item-inactive'} group`}
    >
      {hasDot && <span className={`w-2 h-2 ${dotColor} rounded-full mr-3 group-hover:scale-110 transition-transform`}></span>}
      {Icon && <Icon className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />}
      <span className="flex-1 text-left">{label}</span>
      {hasSubItems && (
        <ChevronDown className={`w-4 h-4 transition-transform ${isActive ? 'rotate-180' : ''}`} />
      )}
    </button>
  );

  return (
    <div className={`w-64 h-screen ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-r transition-colors duration-200 fixed left-0 top-0 z-30 lg:relative`}>
      <div className="p-6 h-full overflow-y-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2 mb-8 group cursor-pointer">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <span className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-900'} group-hover:text-blue-600 transition-colors`}>
            ByeWind
          </span>
        </div>

        {/* Favorites Section */}
        <div className="mb-6">
          <p className={`text-xs font-medium mb-3 ${isDark ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wider`}>
            Favorites
          </p>
          <div className="space-y-1">
            <SidebarButton
              id="overview"
              label="Overview"
              isActive={activeView === 'overview'}
              onClick={setActiveView}
            />
            <SidebarButton
              id="projects"
              label="Projects"
              isActive={activeView === 'projects'}
              onClick={setActiveView}
            />
          </div>
        </div>

        {/* Recently Section */}
        <div className="mb-6">
          <p className={`text-xs font-medium mb-3 ${isDark ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wider`}>
            Recently
          </p>
          <div className="space-y-1">
            <SidebarButton
              id="overview"
              label="Overview"
              isActive={activeView === 'overview'}
              onClick={setActiveView}
            />
            <SidebarButton
              id="projects"
              label="Projects"
              isActive={activeView === 'projects'}
              onClick={setActiveView}
            />
          </div>
        </div>

        {/* Dashboards Section */}
        <div className="mb-6">
          <p className={`text-xs font-medium mb-3 ${isDark ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wider`}>
            Dashboards
          </p>
          <div className="space-y-1">
            <SidebarButton
              id="default"
              label="Default"
              isActive={activeView === 'default'}
              onClick={setActiveView}
              hasDot={true}
              dotColor="bg-blue-600"
            />
            <SidebarButton
              id="ecommerce"
              label="eCommerce"
              isActive={activeView === 'ecommerce'}
              onClick={setActiveView}
              hasDot={true}
              dotColor={activeView === 'ecommerce' ? 'bg-blue-600' : 'bg-gray-400'}
            />
            <SidebarButton
              id="projects"
              label="Projects"
              isActive={activeView === 'projects'}
              onClick={setActiveView}
              hasDot={true}
            />
            <SidebarButton
              id="online-courses"
              label="Online Courses"
              isActive={activeView === 'online-courses'}
              onClick={setActiveView}
              hasDot={true}
            />
          </div>
        </div>

        {/* Pages Section */}
        <div>
          <p className={`text-xs font-medium mb-3 ${isDark ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wider`}>
            Pages
          </p>
          <div className="space-y-1">
            {pageItems.map((item) => (
              <SidebarButton
                key={item.id}
                id={item.id}
                label={item.label}
                isActive={activeView === item.id}
                onClick={setActiveView}
                icon={item.icon}
                hasSubItems={item.hasSubItems}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;