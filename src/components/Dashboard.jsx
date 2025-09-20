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
      {/* First Row: Stats Cards + Projections vs Actuals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Stats Cards in 2x2 Grid - Equal width container */}
        <div className="grid grid-cols-2 gap-4 h-full">
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

        {/* Projections vs Actuals - Equal width container */}
        <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} border`}>
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
      </div>

      {/* Second Row: Revenue Chart + Revenue by Location */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart - 2 columns */}
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
          <ResponsiveContainer width="100%" height={200}>
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
                ticks={[0, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000]}
              />
              <Tooltip content={<CustomTooltip isDark={isDark} />} />
              <Line 
                type="monotone" 
                dataKey="current" 
                stroke="#000000" 
                strokeWidth={3} 
                dot={false}
                activeDot={{ r: 4, fill: '#000000' }}
                name="Current Week"
              />
              <Line 
                type="monotone" 
                dataKey="previous" 
                stroke="#9CA3AF" 
                strokeWidth={2} 
                strokeDasharray="8 4" 
                dot={false}
                name="Previous Week"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue by Location - 1 column */}
        <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} border`}>
          <h3 className={`text-lg font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Revenue by Location
          </h3>
          
          {/* World Map with dots */}
          <div className="relative mb-6 h-20 bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-lg overflow-hidden">
            {/* World map background */}
            <div className="absolute inset-0 opacity-20">
              <svg viewBox="0 0 200 100" className="w-full h-full">
                {/* Simplified world map paths */}
                <path d="M20,40 Q30,35 40,40 L50,45 Q60,40 70,45 L80,40 Q90,45 100,40 L110,45 Q120,40 130,45 L140,40 Q150,45 160,40 L170,45 Q180,40 190,45" 
                      stroke={isDark ? '#4B5563' : '#9CA3AF'} 
                      strokeWidth="1" 
                      fill="none"/>
                <path d="M10,60 Q25,55 40,60 L60,65 Q80,60 100,65 L120,60 Q140,65 160,60 L180,65" 
                      stroke={isDark ? '#4B5563' : '#9CA3AF'} 
                      strokeWidth="1" 
                      fill="none"/>
              </svg>
            </div>
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
              <div key={index} className="flex items-center justify-between group cursor-pointer py-1">
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

        {/* Total Sales - 1 column */}
        <div className={`p-6 rounded-xl ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'} border`}>
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
                    innerRadius={50}
                    outerRadius={75}
                    paddingAngle={3}
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
                </PieChart>
              </ResponsiveContainer>
              {/* Center percentage with background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`px-3 py-2 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-100'} shadow-sm`}>
                  <p className={`text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>38.6%</p>
                </div>
              </div>
            </div>
            
            {/* Legend with proper styling */}
            <div className="w-full space-y-3">
              {[
                { name: 'Direct', value: '$300.56', color: '#000000' },
                { name: 'Affiliate', value: '$135.18', color: '#10B981' },
                { name: 'Sponsored', value: '$154.02', color: '#3B82F6' },
                { name: 'E-mail', value: '$48.96', color: '#06B6D4' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
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