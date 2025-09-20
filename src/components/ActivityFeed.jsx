import React from 'react';
import { activities } from '../data/constants';

const ActivityFeed = ({ isDark }) => {
  const getActivityIcon = (user) => {
    const iconColors = {
      'You': 'bg-blue-500',
      'Released': 'bg-green-500',
      'Submitted': 'bg-yellow-500',
      'Modified': 'bg-purple-500',
      'Deleted': 'bg-red-500'
    };
    return iconColors[user] || 'bg-gray-500';
  };

  return (
    <div className="card p-6">
      <h3 className={`text-lg font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Activities
      </h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={activity.id} className="flex items-start space-x-3 group cursor-pointer">
            {/* Avatar */}
            <div className={`w-8 h-8 ${getActivityIcon(activity.user)} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm`}>
              <span className="text-white font-medium text-sm">
                {activity.avatar}
              </span>
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'} group-hover:text-blue-600 transition-colors`}>
                <span className="font-medium">{activity.user}</span>{' '}
                <span>{activity.action}</span>
              </p>
              <p className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                {activity.time}
              </p>
            </div>
            
            {/* Timeline connector */}
            {index < activities.length - 1 && (
              <div className={`absolute left-10 mt-8 w-px h-4 ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
            )}
          </div>
        ))}
      </div>
      
      {/* View All Button */}
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <button className="w-full text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors hover:scale-105 active:scale-95">
          View all activities
        </button>
      </div>
    </div>
  );
};

export default ActivityFeed;