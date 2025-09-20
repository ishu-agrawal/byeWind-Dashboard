import React from 'react';
import { 
  BookOpen, IdCardLanyard, Building2, IdCard,
  NotebookTabs, MessagesSquare, ChevronDown, ChevronRight, PieChart, CreditCard, FolderClosed,
} from 'lucide-react';

const Sidebar = ({ activeView, setActiveView, isDark }) => {

  const pageItems = [
    { id: 'user-profile', icon: IdCardLanyard, label: 'User Profile', hasSubItems: true },
    { id: 'account', icon: IdCard, label: 'Account', hasSubItems: false },
    { id: 'corporate', icon: Building2, label: 'Corporate', hasSubItems: false },
    { id: 'blog', icon: NotebookTabs, label: 'Blog', hasSubItems: false },
    { id: 'social', icon: MessagesSquare, label: 'Social', hasSubItems: false }
  ];

  const SidebarButton = ({ id, label, isActive, onClick, icon: Icon, hasSubItems, hasChevron }) => (
    <button
      onClick={() => onClick(id)}
      className={`sidebar-item ${isActive ? 'sidebar-item-active' : 'sidebar-item-inactive'} group`}
    >
      {hasChevron &&<ChevronRight className={`w-4 h-4 transition-transform`} />}
      {Icon && <Icon className={`w-4 h-4 mr-3 group-hover:scale-110 ${isDark ? 'text-gray-400' : 'text-gray-600'} transition-transform`} />}
      <span className={`flex-1 text-left ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{label}</span>
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
          <p className={`text-xs font-medium mb-3 ${isDark ? 'text-gray-400' : 'text-gray-500'} tracking-wider`}>
            Favorites Recently
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
        {/* <div className="mb-6">
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
        </div> */}

        {/* Dashboards Section */}
        <div className="mb-6">
          <p className={`text-xs font-medium mb-3 ${isDark ? 'text-gray-400' : 'text-gray-500'} tracking-wider`}>
            Dashboards
          </p>
          <div className="space-y-1">
            <SidebarButton
              id="default"
              label="Default"
              isActive={activeView === 'default'}
              onClick={setActiveView}
              icon={PieChart}
            />
            <SidebarButton
              id="ecommerce"
              label="eCommerce"
              isActive={activeView === 'ecommerce'}
              onClick={setActiveView}
              hasChevron={true}
              icon={CreditCard}
            />
            <SidebarButton
              id="projects"
              label="Projects"
              isActive={activeView === 'projects'}
              onClick={setActiveView}
              hasChevron={true}
              icon={FolderClosed}
            />
            <SidebarButton
              id="online-courses"
              label="Online Courses"
              isActive={activeView === 'online-courses'}
              onClick={setActiveView}
              hasChevron={true}
              icon={BookOpen}
            />
          </div>
        </div>

        {/* Pages Section */}
        <div>
          <p className={`text-xs font-medium mb-3 ${isDark ? 'text-gray-400' : 'text-gray-500'} tracking-wider`}>
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