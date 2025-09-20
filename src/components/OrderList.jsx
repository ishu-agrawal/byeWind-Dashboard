import React, { useState, useMemo } from 'react';
import { Plus, Filter, MoreHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';
import { ordersData } from '../data/constants';

const OrderList = ({ isDark, searchTerm }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const itemsPerPage = 5;

  const filteredOrders = useMemo(() => {
    return ordersData.filter(order => {
      const matchesSearch = order.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          order.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          order.id.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSearch;
    });
  }, [searchTerm]);

  const sortedOrders = useMemo(() => {
    if (!sortConfig.key) return filteredOrders;
    
    return [...filteredOrders].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [filteredOrders, sortConfig]);

  const paginatedOrders = sortedOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(sortedOrders.length / itemsPerPage);

  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
    }));
  };

  const getStatusColor = (status) => {
    const colors = {
      'Complete': 'text-green-700 bg-green-100 border-green-200',
      'In Progress': 'text-blue-700 bg-blue-100 border-blue-200',
      'Pending': 'text-yellow-700 bg-yellow-100 border-yellow-200',
      'Approved': 'text-purple-700 bg-purple-100 border-purple-200',
      'Rejected': 'text-red-700 bg-red-100 border-red-200'
    };
    return colors[status] || 'text-gray-700 bg-gray-100 border-gray-200';
  };

  const getUserInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const getUserColor = (name) => {
    const colors = [
      'bg-blue-500', 'bg-green-500', 'bg-purple-500', 
      'bg-pink-500', 'bg-indigo-500', 'bg-red-500'
    ];
    const index = name.length % colors.length;
    return colors[index];
  };

  return (
    <div className="card p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Order List
        </h2>
        <div className="flex items-center space-x-3">
          <button className={`btn btn-secondary p-2 hover:scale-105 active:scale-95 transition-transform`}>
            <Plus className="w-4 h-4" />
          </button>
          <button className={`btn btn-secondary p-2 hover:scale-105 active:scale-95 transition-transform`}>
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className={`border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              {[
                { key: 'id', label: 'Order ID' },
                { key: 'user', label: 'User' },
                { key: 'project', label: 'Project' },
                { key: 'address', label: 'Address' },
                { key: 'date', label: 'Date' },
                { key: 'status', label: 'Status' },
                { key: 'actions', label: 'Actions' }
              ].map((header) => (
                <th
                  key={header.key}
                  className={`text-left py-3 px-4 font-medium ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  } ${
                    header.key !== 'actions' ? 'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors' : ''
                  }`}
                  onClick={() => header.key !== 'actions' && handleSort(header.key)}
                >
                  <div className="flex items-center space-x-2">
                    <span>{header.label}</span>
                    {sortConfig.key === header.key && (
                      <span className="text-blue-500">
                        {sortConfig.direction === 'asc' ? '↑' : '↓'}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedOrders.map((order, index) => (
              <tr
                key={order.id}
                className={`border-b ${
                  isDark ? 'border-gray-700' : 'border-gray-200'
                } hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group`}
              >
                <td className="py-4 px-4">
                  <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'} group-hover:text-blue-600 transition-colors`}>
                    {order.id}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 ${getUserColor(order.user)} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <span className="text-white font-medium text-sm">
                        {getUserInitials(order.user)}
                      </span>
                    </div>
                    <span className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'} group-hover:text-blue-600 transition-colors`}>
                      {order.user}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'} group-hover:text-blue-600 transition-colors`}>
                    {order.project}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {order.address}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {order.date}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(order.status)} group-hover:scale-105 transition-transform`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <button className={`p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors hover:scale-110 active:scale-95 ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, sortedOrders.length)} of {sortedOrders.length} results
        </div>
        
        <div className="flex items-center space-x-2">
          {/* Previous Button */}
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`flex items-center px-3 py-2 rounded-lg border transition-all ${
              currentPage === 1
                ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                : isDark 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-700 hover:scale-105' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:scale-105'
            }`}
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </button>

          {/* Page Numbers */}
          <div className="flex items-center space-x-1">
            {[...Array(Math.min(totalPages, 5))].map((_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }
              
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`px-3 py-2 rounded-lg border transition-all hover:scale-105 active:scale-95 ${
                    currentPage === pageNum
                      ? 'bg-blue-600 border-blue-600 text-white shadow-lg'
                      : isDark 
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`flex items-center px-3 py-2 rounded-lg border transition-all ${
              currentPage === totalPages
                ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                : isDark 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-700 hover:scale-105' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:scale-105'
            }`}
          >
            Next
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderList;