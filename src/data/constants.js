import { X, Bug, UserPlus, FileText } from 'lucide-react';

export const revenueData = [
  { month: 'Jan', current: 45000, previous: 38000 },
  { month: 'Feb', current: 38000, previous: 42000 },
  { month: 'Mar', current: 52000, previous: 45000 },
  { month: 'Apr', current: 58000, previous: 48000 },
  { month: 'May', current: 55000, previous: 52000 },
  { month: 'Jun', current: 68000, previous: 58000 }
];

export const projectionData = [
  { month: 'Jan', value: 15 },
  { month: 'Feb', value: 25 },
  { month: 'Mar', value: 18 },
  { month: 'Apr', value: 32 },
  { month: 'May', value: 28 },
  { month: 'Jun', value: 35 }
];

export const salesData = [
  { name: 'Direct', value: 38.6, color: '#3B82F6' },
  { name: 'Affiliate', value: 35.1, color: '#10B981' },
  { name: 'Sponsored', value: 15.6, color: '#F59E0B' },
  { name: 'E-mail', value: 4.8, color: '#EF4444' }
];

export const topProducts = [
  { name: 'ASOS Ridley High Waist', price: '$79.49', quantity: 82, amount: '$6,518.18' },
  { name: 'Marco Lightweight Shirt', price: '$128.50', quantity: 37, amount: '$4,754.50' },
  { name: 'Half Sleeve Shirt', price: '$39.99', quantity: 64, amount: '$2,559.36' },
  { name: 'Lightweight Jacket', price: '$20.00', quantity: 184, amount: '$3,680.00' },
  { name: 'Marco Shoes', price: '$79.49', quantity: 64, amount: '$1,965.81' }
];

export const ordersData = [
  { id: '#CM9801', user: 'Natali Craig', project: 'Landing Page', address: 'Meadow Lane Oakland', date: 'Just now', status: 'In Progress' },
  { id: '#CM9802', user: 'Kate Morrison', project: 'CRM Admin pages', address: 'Larry San Francisco', date: 'A minute ago', status: 'Complete' },
  { id: '#CM9803', user: 'Drew Cano', project: 'Client Project', address: 'Bagwell Avenue Ocala', date: '1 hour ago', status: 'Pending' },
  { id: '#CM9804', user: 'Orlando Diggs', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved' },
  { id: '#CM9805', user: 'Andi Lane', project: 'App Landing Page', address: 'Nest Lane Olivette', date: 'Feb 2, 2023', status: 'Rejected' },
  { id: '#CM9806', user: 'Natali Craig', project: 'Landing Page', address: 'Meadow Lane Oakland', date: 'Just now', status: 'In Progress' },
  { id: '#CM9807', user: 'Kate Morrison', project: 'CRM Admin pages', address: 'Larry San Francisco', date: 'A minute ago', status: 'Complete' },
  { id: '#CM9808', user: 'Drew Cano', project: 'Client Project', address: 'Bagwell Avenue Ocala', date: '1 hour ago', status: 'Pending' },
  { id: '#CM9809', user: 'Orlando Diggs', project: 'Admin Dashboard', address: 'Washburn Baton Rouge', date: 'Yesterday', status: 'Approved' },
  { id: '#CM9810', user: 'Andi Lane', project: 'App Landing Page', address: 'Nest Lane Olivette', date: 'Feb 2, 2023', status: 'Rejected' }
];

export const activities = [
    {
      id: 1,
      user: 'You have a bug that needs...',
      time: 'Just now',
      avatar: '🐛',
      color: 'bg-red-500'
    },
    {
      id: 2,
      user: 'Released a new version',
      time: '59 minutes ago',
      avatar: '📦',
      color: 'bg-blue-500'
    },
    {
      id: 3,
      user: 'Submitted a bug',
      time: '12 hours ago',
      avatar: '🐛',
      color: 'bg-yellow-500'
    },
    {
      id: 4,
      user: 'Modified A data in Page X',
      time: 'Today, 11:59 AM',
      avatar: '📝',
      color: 'bg-green-500'
    },
    {
      id: 5,
      user: 'Deleted a page in Project X',
      time: 'Feb 2, 2023',
      avatar: '🗑️',
      color: 'bg-red-500'
    },
];

export const contacts = [
    { name: 'Natali Craig', avatar: 'N', color: 'bg-blue-500' },
    { name: 'Drew Cano', avatar: 'D', color: 'bg-red-500' },
    { name: 'Orlando Diggs', avatar: 'O', color: 'bg-purple-500' },
    { name: 'Andi Lane', avatar: 'A', color: 'bg-indigo-500' },
    { name: 'Kate Morrison', avatar: 'K', color: 'bg-green-500' },
    { name: 'Koray Okumus', avatar: 'K', color: 'bg-yellow-500' },
  ];

export const notifications = [
    {
      id: 1,
      type: 'bug',
      icon: Bug,
      title: 'You have a bug that needs...',
      time: 'Just now',
      color: 'text-red-500'
    },
    {
      id: 2,
      type: 'user',
      icon: UserPlus,
      title: 'New user registered',
      time: '59 minutes ago',
      color: 'text-blue-500'
    },
    {
      id: 3,
      type: 'bug',
      icon: Bug,
      title: 'You have a bug that needs...',
      time: '12 hours ago',
      color: 'text-red-500'
    },
    {
      id: 4,
      type: 'subscription',
      icon: FileText,
      title: 'Andi Lane subscribed to you',
      time: 'Today, 11:59 AM',
      color: 'text-green-500'
    },
  ];