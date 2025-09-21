import { TrendingUp, TrendingDown } from 'lucide-react';
import { orders } from '../data/constants';

const StatCard = ({ title, value, change, changeType, isDark, cardType }) => {
  const getCardStyle = (cardType) => {
    const styles = {
      customers: 'bg-blue-100 border-blue-100',
      orders: 'bg-sky-50 border-sky-100', 
      revenue: 'bg-sky-50 border-sky-100',
      growth: 'bg-purple-100 border-purple-100'
    };
    return styles[cardType] || 'bg-gray-50 border-gray-100';
  };

  return (
    <div className={`p-6 rounded-xl ${
      isDark && (cardType === 'orders' || cardType === 'revenue') ? 'bg-[rgba(255,255,255,0.2)] border-gray-700 hover:shadow-gray-900/50' : getCardStyle(cardType)
    } border transition-all duration-200 hover:shadow-md hover:shadow-gray-100/50 group cursor-pointer relative`}>
      {/* Title */}
      <h3 className={`text-md font-medium mb-4 ${isDark && (cardType === 'orders' || cardType === 'revenue') ? 'text-gray-400' : 'text-gray-600'}`}>
        {title}
      </h3>
      
      {/* Value */}
      <div className={`text-4xl font-bold ${isDark && (cardType === 'orders' || cardType === 'revenue') ? 'text-white' : 'text-gray-900'} transition-colors`}>
        {value}
      </div>
      
      {/* Change percentage and arrow - positioned bottom right */}
      {changeType && (
        <div className={`absolute right-6 flex items-center space-x-1 ${
          changeType === 'up' ? 'text-green-500' : 'text-red-500'
        } group-hover:scale-110 transition-transform`}>
          <span className="font-medium text-sm">{change}</span>
          {changeType === 'up' ? (
            <TrendingUp className="w-4 h-4" />
          ) : (
            <TrendingDown className="w-4 h-4" />
          )}
        </div>
      )}
    </div>
  );
};

export default StatCard;