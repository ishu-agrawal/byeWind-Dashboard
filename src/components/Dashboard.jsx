import React from 'react';
import { 
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, PieChart, Pie, Cell 
} from 'recharts';
import { revenueData, projectionData, salesData, topProducts } from '../data/constants';
import StatCard from './StatCard';
import CustomTooltip from './CustomTooltip';

const Dashboard = ({ isDark }) => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* First Row: Stats Cards + Projections vs Actuals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Stats Cards in 2x2 Grid */}
        <div className="grid grid-cols-2 gap-4 h-full ">
          <StatCard 
            title="Customers" 
            value="3,781" 
            change="+11.01%" 
            changeType="up"
            cardType="customers"
            isDark={isDark}
          />
          <StatCard 
            title="Orders" 
            value="1,219" 
            change="-0.03%" 
            changeType="down"
            cardType="orders"
            isDark={isDark}
          />
          <StatCard 
            title="Revenue" 
            value="$695" 
            change="+15.03%" 
            changeType="up"
            cardType="revenue"
            isDark={isDark}
          />
          <StatCard 
            title="Growth" 
            value="30.1%" 
            change="+6.08%" 
            changeType="up"
            cardType="growth"
            isDark={isDark}
          />
        </div>

        {/* Projections vs Actuals */}
        <div className={`p-6 rounded-xl ${isDark ? 'bg-[rgba(255,255,255,0.2)] border-gray-700' : 'bg-white border-gray-100'} border hover:shadow-md hover:shadow-gray-100/50 dark:hover:shadow-gray-900/50 transition-all duration-200`}>
          <h3 className={`text-lg font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Projections vs Actuals
          </h3>
          <ResponsiveContainer width="100%" height={280}>
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
              <Tooltip 
                content={<CustomTooltip isDark={isDark} />}
                cursor={{
                  fill: isDark ? 'rgba(55, 65, 81, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                  radius: 4
                }}
              />
              <Bar 
                dataKey="value" 
                fill="#6366F1" 
                radius={[6, 6, 0, 0]}
                name="Projections"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Second Row: Revenue Chart + Revenue by Location */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart - 2 columns */}
        <div className={`lg:col-span-2 p-6 rounded-xl ${isDark ? 'bg-[rgba(255,255,255,0.2)] border-gray-700' : 'bg-white border-gray-100'} border hover:shadow-md hover:shadow-gray-100/50 dark:hover:shadow-gray-900/50 transition-all duration-200`}>
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
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={revenueData} margin={{ top: 5, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#E5E7EB'} />
              <XAxis 
                dataKey="month" 
                stroke={isDark ? '#9CA3AF' : '#9CA3AF'} 
                fontSize={11}
                axisLine={false}
                tickLine={false}
                tick={{ fill: isDark ? '#9CA3AF' : '#6B7280' }}
              />
              <YAxis 
                stroke={isDark ? '#9CA3AF' : '#9CA3AF'} 
                fontSize={11}
                axisLine={false}
                tickLine={false}
                tick={{ fill: isDark ? '#9CA3AF' : '#6B7280' }}
                tickFormatter={(value) => `${(value / 1000)}K`}
                domain={[0, 80000]}
                ticks={[0, 20000, 40000, 60000, 80000]}
              />
              <Tooltip 
                content={<CustomTooltip isDark={isDark} />}
                cursor={{
                  stroke: isDark ? '#4B5563' : '#E5E7EB',
                  strokeDasharray: '3 3'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="current" 
                stroke="#000000" 
                strokeWidth={2} 
                dot={false}
                activeDot={{ r: 6, fill: '#000000', stroke: '#ffffff', strokeWidth: 2 }}
                name="Current Week"
              />
              <Line 
                type="monotone" 
                dataKey="previous" 
                stroke="#9CA3AF" 
                strokeWidth={2} 
                strokeDasharray="6 4" 
                dot={false}
                name="Previous Week"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue by Location - 1 column */}
        <div className={`p-6 rounded-xl ${isDark ? 'bg-[rgba(255,255,255,0.2)] border-gray-700' : 'bg-white border-gray-100'} border hover:shadow-md hover:shadow-gray-100/50 dark:hover:shadow-gray-900/50 transition-all duration-200`}>
          <h3 className={`text-lg font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Revenue by Location
          </h3>
          
          {/* World Map with dots */}
          <div className={`relative mb-6 h-20 bg-gradient-to-br ${isDark ? 'from-gray-700 to-gray-600' : 'from-blue-50 to-gray-100'} rounded-lg overflow-hidden`}>
            {/* Location dots */}
            <div className="absolute top-3 left-8 w-2 h-2 bg-blue-500 rounded-full shadow-sm"></div>
            <div className="absolute top-4 right-12 w-2 h-2 bg-green-500 rounded-full shadow-sm"></div>
            <div className="absolute bottom-4 left-16 w-2 h-2 bg-yellow-500 rounded-full shadow-sm"></div>
            <div className="absolute bottom-3 right-8 w-2 h-2 bg-purple-500 rounded-full shadow-sm"></div>
          </div>

          <div className="space-y-3">
            {[
              { city: 'New York', amount: '72K', color: 'bg-blue-500' },
              { city: 'San Francisco', amount: '39K', color: 'bg-green-500' },
              { city: 'Sydney', amount: '25K', color: 'bg-yellow-500' },
              { city: 'Singapore', amount: '61K', color: 'bg-purple-500' }
            ].map((location, index) => (
              <div key={index} className={`flex items-center justify-between group cursor-pointer py-1 px-2 rounded-md ${isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'} transition-colors duration-200`}>
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${location.color} group-hover:scale-125 transition-transform`}></div>
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

      {/* Third Row: Top Selling Products + Total Sales */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top Selling Products - 2 columns */}
        <div className={`lg:col-span-2 p-6 rounded-xl ${isDark ? 'bg-[rgba(255,255,255,0.2)] border-gray-700' : 'bg-white border-gray-100'} border hover:shadow-md hover:shadow-gray-100/50 dark:hover:shadow-gray-900/50 transition-all duration-200`}>
          <h3 className={`text-lg font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Top Selling Products
          </h3>
          
          {/* Header */}
          <div className={`grid grid-cols-4 gap-4 pb-3 border-b ${isDark ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-500'} text-sm font-medium`}>
            <span>Name</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Amount</span>
          </div>
          
          {/* Products */}
          <div className="space-y-2 mt-4">
            {topProducts.map((product, index) => (
              <div key={index} className={`grid grid-cols-4 gap-4 py-3 px-2 ${isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'} rounded-lg transition-colors group cursor-pointer`}>
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

        {/* Total Sales - 1 column */}
        <div className={`p-6 rounded-xl ${isDark ? 'bg-[rgba(255,255,255,0.2)] border-gray-700' : 'bg-white border-gray-100'} border hover:shadow-md hover:shadow-gray-100/50 dark:hover:shadow-gray-900/50 transition-all duration-200`}>
          <h3 className={`text-lg font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Total Sales
          </h3>
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <ResponsiveContainer width={180} height={180}>
                <PieChart>
                  <Pie
                    data={salesData}
                    cx={90}
                    cy={90}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                    startAngle={90}
                    endAngle={450}
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
                    cursor={false}
                  />
                </PieChart>
              </ResponsiveContainer>
              {/* Center percentage - WHITE background as per Figma */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white px-3 py-2 rounded-lg shadow-sm">
                  <p className="text-sm font-bold text-gray-900">38.6%</p>
                </div>
              </div>
            </div>
            
            {/* Legend */}
            <div className="w-full space-y-3">
              {salesData.map((item, index) => (
                <div key={index} className={`flex items-center justify-between ${isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'} px-2 py-1 rounded-md transition-colors cursor-pointer`}>
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {item.name}
                    </span>
                  </div>
                  <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {item.value}
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