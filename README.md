# DataHive2 SaaS Dashboard

A modern, responsive SaaS dashboard built with React 19, Vite 7, and Tailwind CSS v4. This project recreates the ByeWind dashboard design with pixel-perfect accuracy, complete with interactive features, dark/light theme toggle, and smooth animations.

## 🌟 Features

### **Core Functionality**
- ✅ **Dark/Light Theme Toggle** - Seamless theme switching with localStorage persistence
- ✅ **Real-time Search** - Search across orders by user, project, or order ID
- ✅ **Advanced Filtering** - Filter orders by status with dropdown selection
- ✅ **Table Sorting** - Click column headers to sort data ascending/descending
- ✅ **Smart Pagination** - Navigate through data with intelligent page controls
- ✅ **Responsive Design** - Mobile-first approach, works on all screen sizes

### **Interactive Charts & Analytics**
- 📊 **Revenue Line Chart** - Interactive revenue trends with tooltips
- 📊 **Projection Bar Chart** - Monthly projections vs actuals
- 📊 **Sales Pie Chart** - Revenue breakdown by channel
- 📊 **Location Analytics** - Revenue by geographical location
- 📊 **Top Products** - Best selling products with metrics

### **Modern UI/UX**
- 🎨 **Smooth Animations** - Micro-interactions and hover effects
- 🎨 **Custom Components** - Reusable, accessible components
- 🎨 **Status Badges** - Color-coded order statuses
- 🎨 **Activity Feed** - Real-time user activity timeline
- 🎨 **Contact Management** - Online/offline status indicators
- 🎨 **Notification System** - Dropdown with activity notifications

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/byeWind-Dashboard.git
   cd byeWind-Dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist/` directory, ready for deployment.

## 📁 Project Structure

```
datahive2/
├── src/
│   ├── components/           # React components
│   │   ├── Sidebar.jsx      # Navigation sidebar
│   │   ├── Header.jsx       # Top header with search/theme
│   │   ├── Dashboard.jsx    # Main analytics dashboard
│   │   ├── OrderList.jsx    # Orders table with pagination
│   │   ├── ActivityFeed.jsx # Activity timeline
│   │   └── ContactsList.jsx # Contacts with status
│   ├── context/             # React context
│   │   └── ThemeContext.jsx # Theme management
│   ├── data/                # Sample data
│   │   └── constants.js     # Charts & table data
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles & Tailwind config
├── index.html              # HTML template
├── package.json            # Dependencies & scripts
├── vite.config.js          # Vite configuration with Tailwind
└── README.md              # This file
```

## 🛠 Tech Stack

- **Framework:** React 19.1.1 with JSX
- **Build Tool:** Vite 7.1.6 for lightning-fast development
- **Styling:** Tailwind CSS v4.1.13 with Vite plugin
- **Charts:** Recharts 3.2.1 for interactive data visualization
- **Icons:** Lucide React 0.544.0 for consistent iconography
- **State Management:** React Hooks (useState, useEffect, useMemo)
- **Theme:** Custom dark/light mode with Context API

## 🆕 Latest Dependencies

### **Production Dependencies**
- `@tailwindcss/vite: ^4.1.13` - Tailwind CSS v4 Vite plugin
- `lucide-react: ^0.544.0` - Latest icon library
- `react: ^19.1.1` - Latest React with improved performance
- `react-dom: ^19.1.1` - React DOM for React 19
- `recharts: ^3.2.1` - Latest charts library

### **Development Dependencies**
- `@vitejs/plugin-react: ^5.0.2` - Vite React plugin
- `vite: ^7.1.6` - Latest Vite with improved performance
- `eslint: ^9.35.0` - Latest ESLint
- `@types/react: ^19.1.13` - React 19 type definitions

## 🎨 Design Decisions

### **Component Architecture**
- **Modular Design:** Each component is self-contained and reusable
- **Props-based Theming:** All components accept `isDark` prop for theme consistency
- **Performance Optimized:** useMemo for expensive calculations, preventing unnecessary re-renders
- **React 19 Compatibility:** Updated for latest React features and optimizations

### **Styling Strategy**
- **Tailwind CSS v4:** Using the new Vite plugin with CSS-first configuration
- **Custom Theme Variables:** Defined in CSS using @theme directive
- **Responsive Design:** Mobile-first breakpoints throughout
- **Dark Mode:** Comprehensive dark theme implementation

### **State Management**
- **Local Storage Integration:** Theme preference persisted across sessions
- **Efficient Filtering:** Memoized search and filter operations
- **Pagination Logic:** Smart page calculation and navigation

### **Animations & Interactions**
- **Hover Effects:** Scale transforms and color transitions
- **Micro-interactions:** Button feedback and loading states
- **Smooth Transitions:** CSS transitions for theme changes
- **Chart Interactions:** Enhanced tooltips and active states with Recharts 3.x

## 🔧 Customization

### **Adding New Data**
Modify `src/data/constants.js` to add new:
- Orders data
- Chart data points
- Activity entries
- Contact information

### **Theme Customization**
Update the `@theme` directive in `src/index.css` for:
- Custom color palette
- Animation timings
- Custom utilities
- Design tokens

### **Component Styling**
Modify component-specific styles in `src/index.css`:
- Custom button variants
- Card styles
- Animation keyframes

## 📱 Responsive Breakpoints

- **Mobile:** < 640px - Stacked layout, mobile-optimized navigation
- **Tablet:** 640px - 1024px - Adjusted grid layouts
- **Desktop:** 1024px+ - Full dashboard layout with sidebar

---

**Built with ❤️ using React, Vite, and Tailwind CSS**