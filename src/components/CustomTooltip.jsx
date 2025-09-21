const CustomTooltip = ({ active, payload, label, isDark }) => {
  if (active && payload && payload.length) {
    return (
      <div className={`${
        isDark ? 'bg-black border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-900'
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

export default CustomTooltip;