import { X } from 'lucide-react';
import { notifications, activities, contacts } from '../data/constants';

const NotificationPanel = ({ isDark, show }) => {

  if (!show) return null;

  return (
    <div className={`fixed right-0 top-0 h-full w-96 ${
              isDark ? 'bg-black border-gray-700' : 'bg-white border-gray-200'
            } border rounded-xl shadow-xl z-50 transform transition-all duration-300 ease-out animate-slide-in overflow-hidden`}>

      <div className="p-6 overflow-y-auto h-full pb-20">
        <h3 className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>Notifications</h3>
        <div className="space-y-4 mb-8 mt-3">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <div className={`p-2 rounded-full bg-gray-100 dark:bg-slate-700`}>
                  <notification.icon className={`w-4 h-4 rounded-full flex items-center justify-center text-white text-xs font-medium ${notification.color}`} />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex-1 min-w-0">
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'} transition-colors`}>{notification.title}</p>
                  <p className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{notification.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <h3 className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>Activities</h3>
          <div className="space-y-4 mt-3">
            {activities.map((activity) => (
              <div key={activity.id} className={`flex items-start space-x-3`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-medium ${activity.color}`}>
                  {activity.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'} transition-colors`}>{activity.user}</p>
                  <p className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>Contacts</h3>
          <div className="space-y-3 mt-3">
            {contacts.map((contact, index) => (
              <div key={index} className={`flex items-center space-x-3`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium ${contact.color}`}>
                  {contact.avatar}
                </div>
                <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'} transition-colors`}>{contact.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPanel;