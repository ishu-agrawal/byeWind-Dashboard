import React from 'react';
import { 
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell 
} from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { revenueData, projectionData, salesData, topProducts } from '../data/constants';

const StatCard = ({ title, value, change, changeType, isDark }) => (
  <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} border transition-all duration-200 hover:shadow-md group cursor-pointer`}>
    <div className="flex items-center justify-between mb-3">
      <h3 className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
        {title}
      </h3>
      {changeType && (
        <div className={`flex items-center space-x-1 ${
          changeType === 'up' ? 'text-green-500' : 'text-red-500'
        } group-hover:scale-110 transition-transform`}>
          {changeType === 'up' ? (
            <TrendingUp className="w-4 h-4" />
          ) : (
            <TrendingDown className="w-4 h-4" />
          )}
        </div>
      )}
    </div>
    <div className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'} group-hover:text-blue-600 transition-colors`}>
      {value}
    </div>
    <div className={`flex items-center text-sm ${
      changeType === 'up' 
        ? 'text-green-500' 
        : changeType === 'down' 
          ? 'text-red-500' 
          : isDark ? 'text-gray-400' : 'text-gray-500'
    }`}>
      <span className="font-medium">{change}</span>
    </div>
  </div>
);

const CustomTooltip = ({ active, payload, label, isDark }) => {
  if (active && payload && payload.length) {
    return (
      <div className={`${
        isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-900'
      } p-3 border rounded-lg shadow-lg animate-fade-in`}>
        <p className="font-medium text-sm">{`${label}`}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color }} className="text-sm">
            {`${entry.name}: ${typeof entry.value === 'number' ? entry.value.toLocaleString() : entry.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const Dashboard = ({ isDark }) => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Customers" 
          value="3,781" 
          change="+11.01%" 
          changeType="up"
          isDark={isDark}
        />
        <StatCard 
          title="Orders" 
          value="1,219" 
          change="-0.03%" 
          changeType="down"
          isDark={isDark}
        />
        <StatCard 
          title="Revenue" 
          value="$695" 
          change="+15.03%" 
          changeType="up"
          isDark={isDark}
        />
        <StatCard 
          title="Growth" 
          value="30.1%" 
          change="+6.08%" 
          changeType="up"
          isDark={isDark}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Projections vs Actuals */}
        <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} border`}>
          <h3 className={`text-lg font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Projections vs Actuals
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={projectionData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#f0f0f0'} />
              <XAxis 
                dataKey="month" 
                stroke={isDark ? '#9CA3AF' : '#9CA3AF'} 
                fontSize={12}
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                stroke={isDark ? '#9CA3AF' : '#9CA3AF'} 
                fontSize={12}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<CustomTooltip isDark={isDark} />} />
              <Bar 
                dataKey="value" 
                fill="#3B82F6" 
                radius={[2, 2, 0, 0]}
                name="Projections"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Top Selling Products */}
        <div className={`lg:col-span-2 p-6 rounded-xl ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} border`}>
          <h3 className={`text-lg font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Top Selling Products
          </h3>
          
          {/* Header */}
          <div className="grid grid-cols-4 gap-4 pb-3 border-b border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-500 dark:text-gray-400">
            <span>Name</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Amount</span>
          </div>
          
          {/* Products */}
          <div className="space-y-4 mt-4">
            {topProducts.map((product, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors group cursor-pointer">
                <div>
                  <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'} group-hover:text-blue-600 transition-colors text-sm`}>
                    {product.name}
                  </p>
                </div>
                <div>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {product.price}
                  </p>
                </div>
                <div>
                  <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {product.quantity}
                  </p>
                </div>
                <div>
                  <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {product.amount}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <div className={`lg:col-span-2 p-6 rounded-xl ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} border`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Revenue
            </h3>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-black rounded-full"></div>
                <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                  Current Week $58,211
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                  Previous Week $68,768
                </span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={revenueData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#f0f0f0'} />
              <XAxis 
                dataKey="month" 
                stroke={isDark ? '#9CA3AF' : '#9CA3AF'} 
                fontSize={12}
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                stroke={isDark ? '#9CA3AF' : '#9CA3AF'} 
                fontSize={12}
                axisLine={false}
                tickLine={false}
                tickFormatter={(value) => `${(value / 1000)}K`}
              />
              <Tooltip content={<CustomTooltip isDark={isDark} />} />
              <Line 
                type="monotone" 
                dataKey="current" 
                stroke="#000000" 
                strokeWidth={2} 
                dot={false}
                activeDot={{ r: 4, fill: '#000000' }}
                name="Current Week"
              />
              <Line 
                type="monotone" 
                dataKey="previous" 
                stroke="#9CA3AF" 
                strokeWidth={2} 
                strokeDasharray="5 5" 
                dot={false}
                name="Previous Week"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue by Location */}
        <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} border`}>
          <h3 className={`text-lg font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Revenue by Location
          </h3>
          
          {/* World Map Placeholder */}
          <div className="relative mb-6 h-32 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 bg-blue-200 dark:bg-gray-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">🌍</span>
              </div>
              <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>World Map</p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { city: 'New York', amount: '72K', percentage: 40 },
              { city: 'San Francisco', amount: '39K', percentage: 30 },
              { city: 'Sydney', amount: '25K', percentage: 20 },
              { city: 'Singapore', amount: '61K', percentage: 35 }
            ].map((location, index) => (
              <div key={index} className="flex items-center justify-between group cursor-pointer">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    index === 0 ? 'bg-blue-500' : 
                    index === 1 ? 'bg-green-500' : 
                    index === 2 ? 'bg-yellow-500' : 'bg-purple-500'
                  } group-hover:scale-125 transition-transform`}></div>
                  <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'} group-hover:text-blue-600 transition-colors`}>
                    {location.city}
                  </span>
                </div>
                <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {location.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Total Sales */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} border`}>
          <h3 className={`text-lg font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Total Sales
          </h3>
          <div className="flex flex-col items-center">
            <div className="relative">
              <ResponsiveContainer width={200} height={200}>
                <PieChart>
                  <Pie
                    data={salesData}
                    cx={100}
                    cy={100}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {salesData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.color}
                        className="hover:opacity-80 transition-opacity cursor-pointer"
                      />
                    ))}
                  </Pie>
                  <Tooltip 
                    content={<CustomTooltip isDark={isDark} />}
                    formatter={(value, name) => [`${value}%`, name]}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>38.6%</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 w-full mt-6">
              {salesData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {item.name}
                    </span>
                  </div>
                  <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    ${item.value * 10}K
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;