import { useState } from 'react';
import { Search, Plus, ListFilterPlus, ChevronLeft, ChevronRight, MoreHorizontal, ArrowDownUp } from 'lucide-react';
import { orders } from '../data/constants';

const OrderList = ({ isDark }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  const duplicatedOrders = [...orders, ...orders];

  const filteredOrders = duplicatedOrders.filter(order =>
    order.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  return (
    <div className="space-y-6">
      <div className={`${isDark? 'bg-black': 'bg-white'} rounded-xl`}>
        <div className={`p-3 border-b ${isDark ? 'border-slate-700 bg-slate-900' : 'border-gray-200 bg-gray-100' }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className={`flex items-center space-x-2 px-4 py-2 ${isDark ? 'text-gray-300 hover:bg-slate-700' : 'text-gray-700 hover:bg-gray-50' } rounded-lg transition-colors duration-150`}>
                <Plus className="w-5 h-5" />
              </button>
              <button className={`flex items-center space-x-2 px-4 py-2 ${isDark ? 'text-gray-300 hover:bg-slate-700' : 'text-gray-700 hover:bg-gray-50' } rounded-lg transition-colors duration-150`}>
                <ListFilterPlus className="w-5 h-5" />
              </button>
              <button className={`flex items-center space-x-2 px-4 py-2 ${isDark ? 'text-gray-300 hover:bg-slate-700' : 'text-gray-700 hover:bg-gray-50' } rounded-lg transition-colors duration-150`}>
                <ArrowDownUp className="w-5 h-5" />
              </button>
            </div>
            
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-64 pl-10 pr-4 py-2 ${isDark ? 'bg-slate-700/50 placeholder-gray-400 focus:bg-slate-600' : 'bg-gray-50 placeholder-gray-500 focus:bg-white'} border-0 rounded-lg text-sm  focus:ring-2 focus:ring-blue-500 transition-all duration-200`}
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className={`${isDark ? 'bg-black' : 'bg-gray-50'}`}>
              <tr>
                <th className="w-8 px-6 py-4">
                  <input type="checkbox" className={`rounded ${isDark ? 'border-slate-600' : 'border-gray-300'}`} />
                </th>
                <th className="px-6 py-4 text-left">
                  <button
                    onClick={() => handleSort('id')}
                    className={`text-xs font-medium ${isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'} tracking-wider`}
                  >
                    Order ID
                  </button>
                </th>
                <th className="px-6 py-4 text-left">
                  <button
                    onClick={() => handleSort('user')}
                    className={`text-xs font-medium ${isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'} tracking-wider`}
                  >
                    User
                  </button>
                </th>
                <th className="px-6 py-4 text-left">
                  <button
                    onClick={() => handleSort('project')}
                    className={`text-xs font-medium ${isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'} tracking-wider`}
                  >
                    Project
                  </button>
                </th>
                <th className="px-6 py-4 text-left">
                  <button
                    onClick={() => handleSort('address')}
                    className={`text-xs font-medium ${isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'} tracking-wider`}
                  >
                    Address
                  </button>
                </th>
                <th className="px-6 py-4 text-left">
                  <button
                    onClick={() => handleSort('date')}
                    className={`text-xs font-medium ${isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'} tracking-wider`}
                  >
                    Date
                  </button>
                </th>
                <th className="px-6 py-4 text-left">
                  <button
                    onClick={() => handleSort('status')}
                    className={`text-xs font-medium ${isDark ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'} tracking-wider`}
                  >
                    Status
                  </button>
                </th>
                <th className="w-8 px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              {filteredOrders.map((order, index) => (
                <tr 
                  key={`${order.id}-${index}`}
                  className={`${isDark ? 'hover:bg-slate-700/50' : 'hover:bg-gray-100' } transition-colors duration-150`}
                >
                  <td className="px-6 py-4">
                    <input type="checkbox" className={`rounded ${isDark ? 'border-slate-600' : 'border-gray-300'}`} />
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>#{order.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium ${order.user.color}`}>
                        {order.user.name.charAt(0)}
                      </div>
                      <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{order.user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{order.project}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{order.address}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{order.date}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${order.statusColor}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className={`p-2 ${isDark ? 'hover:bg-slate-600' : 'hover:bg-gray-100'} rounded-lg transition-colors duration-150`}>
                      <MoreHorizontal className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={`px-6 py-4 border-t ${isDark ? 'border-slate-700' : 'border-gray-200'}`}>
          <div className="flex items-center justify-between">
            <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Showing 1 to 10 of {filteredOrders.length} results
            </div>
            <div className="flex items-center space-x-1">
              <button className={`p-2 ${isDark ? 'hover:bg-slate-700' : 'hover:bg-gray-100'} rounded-lg transition-colors duration-150`}>
                <ChevronLeft className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
              </button>
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors duration-150 ${
                    currentPage === page
                      ? 'bg-blue-600 text-white'
                      :  isDark
                        ? "text-gray-400 hover:bg-slate-700"
                        : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className={`p-2 ${isDark ? 'hover:bg-slate-700' : 'hover:bg-gray-100' } rounded-lg transition-colors duration-150`}>
                <ChevronRight className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderList;