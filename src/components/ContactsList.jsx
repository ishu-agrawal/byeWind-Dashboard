import React from 'react';
import { contacts } from '../data/constants';

const ContactsList = ({ isDark }) => {
  const getContactInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getContactColor = (name) => {
    const colors = [
      'bg-blue-500', 'bg-green-500', 'bg-purple-500', 
      'bg-pink-500', 'bg-indigo-500', 'bg-red-500',
      'bg-yellow-500', 'bg-teal-500'
    ];
    const index = name.length % colors.length;
    return colors[index];
  };

  return (
    <div className="card p-6">
      <h3 className={`text-lg font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        Contacts
      </h3>
      <div className="space-y-4">
        {contacts.map((contact, index) => (
          <div key={index} className="flex items-center justify-between group cursor-pointer p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <div className="flex items-center space-x-3">
              {/* Avatar */}
              <div className={`relative w-8 h-8 ${getContactColor(contact.name)} rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-sm`}>
                <span className="text-white font-medium text-sm">
                  {getContactInitials(contact.name)}
                </span>
                {/* Online Status Indicator */}
                <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 ${
                  isDark ? 'border-gray-800' : 'border-white'
                } ${
                  contact.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                } ${
                  contact.status === 'online' ? 'animate-pulse' : ''
                }`}></div>
              </div>
              
              {/* Name */}
              <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'} group-hover:text-blue-600 transition-colors`}>
                {contact.name}
              </span>
            </div>
            
            {/* Status Text */}
            <div className="flex items-center space-x-2">
              <span className={`text-xs px-2 py-1 rounded-full ${
                contact.status === 'online'
                  ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                  : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
              } group-hover:scale-105 transition-transform`}>
                {contact.status}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Add Contact Button */}
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <button className="w-full text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors hover:scale-105 active:scale-95">
          + Add new contact
        </button>
      </div>
    </div>
  );
};

export default ContactsList;