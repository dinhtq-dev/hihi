import { User, Bell, CreditCard, Package, Award, LogOut, ChevronDown, UserCircle, Lock, Home, Mail, Phone, MapPin, MessageSquare, Edit2, Check, X, TrendingUp, Wallet, Star, Calendar } from 'lucide-react';
import { useState } from 'react';

export default function MyAccountPage() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Nguyễn Thị Trúc Mai Vy',
    email: 'maivy@mobcec.com',
    phone: '+84387025367',
    shippingAddress: 'vsd',
    communicationChannel: 'WhatsApp Number',
    whatsappNumber: '+84387025367'
  });

  // Mock user data
  const userData = {
    name: 'Nguyễn Thị Trúc Mai Vy',
    email: 'maivy@mobcec.com',
    userId: '#11562896',
    phone: '+84387025367',
    shippingAddress: 'vsd',
    communicationChannel: 'WhatsApp Number',
    whatsappNumber: '+84387025367',
    memberSince: 'January 2024',
    status: 'Premium'
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save logic here
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData({
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      shippingAddress: userData.shippingAddress,
      communicationChannel: userData.communicationChannel,
      whatsappNumber: userData.whatsappNumber
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Left Sidebar */}
        <aside className="w-80 bg-white border-r border-gray-200 min-h-[calc(100vh-110px)] flex-shrink-0">
          {/* User Profile Card */}
          <div className="p-6 border-b border-gray-200 bg-gradient-to-br from-[#C91F26]/5 to-white">
            <div className="flex items-center justify-center mb-4">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-[#C91F26] via-[#a51920] to-[#8B2A2F] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-3xl font-bold">
                    {userData.name.charAt(0)}
                  </span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
            </div>
            <h3 className="text-center font-bold text-[#2C2C2C] mb-1 text-lg">
              {userData.name}
            </h3>
            <p className="text-center text-sm text-gray-600 mb-2">
              {userData.email}
            </p>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="px-3 py-1 bg-gradient-to-r from-[#C91F26] to-[#a51920] text-white text-xs rounded-full font-semibold">
                {userData.status}
              </span>
            </div>
            <p className="text-center text-xs text-gray-500">
              Member since {userData.memberSince}
            </p>
          </div>

          {/* Navigation Menu */}
          <nav className="py-4">
            {/* Dashboard */}
            <button
              onClick={() => setActiveSection('dashboard')}
              className={`w-full px-6 py-3.5 flex items-center gap-3 transition-all duration-200 ${
                activeSection === 'dashboard'
                  ? 'bg-gradient-to-r from-[#C91F26] to-[#a51920] text-white font-semibold shadow-md'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Home size={20} />
              <span className="flex-1 text-left">Dashboard</span>
            </button>

            {/* My Profile Section */}
            <div className="mt-2">
              <button
                onClick={() => setActiveSection(activeSection === 'personal-info' || activeSection === 'change-password' ? 'dashboard' : 'personal-info')}
                className={`w-full px-6 py-3.5 flex items-center gap-3 transition-all duration-200 ${
                  activeSection === 'personal-info' || activeSection === 'change-password'
                    ? 'bg-gray-100 text-[#C91F26] font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <UserCircle size={20} />
                <span className="flex-1 text-left">My Profile</span>
                <ChevronDown 
                  size={16} 
                  className={`transition-transform ${activeSection === 'personal-info' || activeSection === 'change-password' ? 'rotate-180' : ''}`}
                />
              </button>
              
              {/* Submenu */}
              {(activeSection === 'personal-info' || activeSection === 'change-password') && (
                <div className="bg-gray-50">
                  <button
                    onClick={() => setActiveSection('personal-info')}
                    className={`w-full px-6 py-3 pl-14 text-left text-sm transition-colors ${
                      activeSection === 'personal-info'
                        ? 'text-[#C91F26] font-semibold bg-white border-l-4 border-[#C91F26]'
                        : 'text-gray-600 hover:text-[#C91F26]'
                    }`}
                  >
                    Personal Information
                  </button>
                  <button
                    onClick={() => setActiveSection('change-password')}
                    className={`w-full px-6 py-3 pl-14 text-left text-sm transition-colors ${
                      activeSection === 'change-password'
                        ? 'text-[#C91F26] font-semibold bg-white border-l-4 border-[#C91F26]'
                        : 'text-gray-600 hover:text-[#C91F26]'
                    }`}
                  >
                    Change Password
                  </button>
                </div>
              )}
            </div>

            {/* My Orders */}
            <button
              onClick={() => setActiveSection('my-orders')}
              className={`w-full px-6 py-3.5 flex items-center gap-3 transition-all duration-200 ${
                activeSection === 'my-orders'
                  ? 'bg-gradient-to-r from-[#C91F26] to-[#a51920] text-white font-semibold shadow-md'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Package size={20} />
              <span className="flex-1 text-left">My Orders</span>
              <span className="px-2 py-0.5 bg-[#C91F26]/20 text-[#C91F26] text-xs rounded-full font-semibold">3</span>
            </button>

            {/* My Payments */}
            <button
              onClick={() => setActiveSection('my-payments')}
              className={`w-full px-6 py-3.5 flex items-center gap-3 transition-all duration-200 ${
                activeSection === 'my-payments'
                  ? 'bg-gradient-to-r from-[#C91F26] to-[#a51920] text-white font-semibold shadow-md'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <CreditCard size={20} />
              <span className="flex-1 text-left">My Payments</span>
            </button>

            {/* Notifications */}
            <button
              onClick={() => setActiveSection('notifications')}
              className={`w-full px-6 py-3.5 flex items-center gap-3 transition-all duration-200 ${
                activeSection === 'notifications'
                  ? 'bg-gradient-to-r from-[#C91F26] to-[#a51920] text-white font-semibold shadow-md'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Bell size={20} />
              <span className="flex-1 text-left">Notifications</span>
              <span className="px-2 py-0.5 bg-[#C91F26] text-white text-xs rounded-full font-semibold">5</span>
            </button>

            {/* OffShore Club */}
            <button
              onClick={() => setActiveSection('offshore-club')}
              className={`w-full px-6 py-3.5 flex items-center gap-3 transition-all duration-200 ${
                activeSection === 'offshore-club'
                  ? 'bg-gradient-to-r from-[#C91F26] to-[#a51920] text-white font-semibold shadow-md'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Award size={20} />
              <span className="flex-1 text-left">OffShore Club</span>
            </button>

            {/* Sign Out */}
            <button
              className="w-full px-6 py-3.5 flex items-center gap-3 text-gray-700 hover:bg-red-50 hover:text-[#C91F26] transition-all duration-200 mt-4 border-t border-gray-200"
            >
              <LogOut size={20} />
              <span className="flex-1 text-left">Sign out</span>
            </button>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-8 lg:p-12">
          {/* Dashboard Overview */}
          {activeSection === 'dashboard' && (
            <div className="max-w-7xl mx-auto">
              {/* Welcome Banner */}
              <div className="bg-gradient-to-br from-[#C91F26] via-[#a51920] to-[#8B2A2F] rounded-2xl p-8 lg:p-10 mb-8 text-white relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <h1 className="text-3xl lg:text-4xl font-bold mb-3">Welcome back, {userData.name.split(' ')[0]}! 👋</h1>
                  <p className="text-white/90 text-lg">Here's what's happening with your account today.</p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {/* Active Orders */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Package className="text-blue-600" size={24} />
                    </div>
                    <span className="text-green-600 text-sm font-semibold">+2 this week</span>
                  </div>
                  <h3 className="text-3xl font-bold text-[#2C2C2C] mb-1">3</h3>
                  <p className="text-gray-600 text-sm">Active Orders</p>
                </div>

                {/* Total Services */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="text-purple-600" size={24} />
                    </div>
                    <span className="text-purple-600 text-sm font-semibold">12 countries</span>
                  </div>
                  <h3 className="text-3xl font-bold text-[#2C2C2C] mb-1">18</h3>
                  <p className="text-gray-600 text-sm">Total Services</p>
                </div>

                {/* Wallet Balance */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Wallet className="text-green-600" size={24} />
                    </div>
                    <span className="text-gray-600 text-sm font-semibold">USD</span>
                  </div>
                  <h3 className="text-3xl font-bold text-[#2C2C2C] mb-1">$2,450</h3>
                  <p className="text-gray-600 text-sm">Wallet Balance</p>
                </div>

                {/* Reward Points */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Star className="text-orange-600" size={24} />
                    </div>
                    <span className="text-orange-600 text-sm font-semibold">Premium</span>
                  </div>
                  <h3 className="text-3xl font-bold text-[#2C2C2C] mb-1">1,250</h3>
                  <p className="text-gray-600 text-sm">Reward Points</p>
                </div>
              </div>

              {/* Recent Activity & Quick Actions */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Activity */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-[#2C2C2C] mb-6">Recent Activity</h3>
                  <div className="space-y-4">
                    {[
                      { icon: Package, color: 'blue', title: 'Hong Kong Company Formation', date: 'Jan 10, 2024', status: 'In Progress' },
                      { icon: CreditCard, color: 'green', title: 'Payment Received', date: 'Jan 8, 2024', status: 'Completed' },
                      { icon: Bell, color: 'orange', title: 'Document Review Required', date: 'Jan 5, 2024', status: 'Pending' }
                    ].map((activity, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className={`w-10 h-10 bg-${activity.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <activity.icon className={`text-${activity.color}-600`} size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-[#2C2C2C] mb-1">{activity.title}</h4>
                          <p className="text-sm text-gray-600">{activity.date}</p>
                        </div>
                        <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                          activity.status === 'Completed' ? 'bg-green-100 text-green-700' :
                          activity.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                          'bg-orange-100 text-orange-700'
                        }`}>
                          {activity.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-[#2C2C2C] mb-6">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full bg-gradient-to-r from-[#C91F26] to-[#a51920] text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3">
                      <Package size={20} />
                      Start New Order
                    </button>
                    <button className="w-full border-2 border-[#C91F26] text-[#C91F26] py-4 rounded-xl font-semibold hover:bg-[#C91F26] hover:text-white transition-all duration-300 flex items-center justify-center gap-3">
                      <Calendar size={20} />
                      Book Consultation
                    </button>
                    <button className="w-full border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-semibold hover:border-[#C91F26] hover:text-[#C91F26] transition-all duration-300 flex items-center justify-center gap-3">
                      <CreditCard size={20} />
                      Add Payment Method
                    </button>
                  </div>

                  {/* Membership Info */}
                  <div className="mt-6 p-4 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl border border-orange-200">
                    <div className="flex items-center gap-3 mb-2">
                      <Award className="text-orange-600" size={24} />
                      <h4 className="font-bold text-[#2C2C2C]">Premium Member</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">You're earning 2x points on all services!</p>
                    <button className="text-sm text-[#C91F26] font-semibold hover:underline">
                      View Benefits →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Personal Information */}
          {activeSection === 'personal-info' && (
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-3xl font-bold text-[#2C2C2C] mb-2">Personal Information</h1>
                  <div className="h-1 w-20 bg-[#C91F26]"></div>
                </div>
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="bg-[#C91F26] text-white px-6 py-3 rounded-xl hover:bg-[#a51920] transition-all duration-300 font-semibold flex items-center gap-2 shadow-md"
                  >
                    <Edit2 size={18} />
                    Edit Profile
                  </button>
                ) : (
                  <div className="flex gap-3">
                    <button
                      onClick={handleCancel}
                      className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl hover:border-gray-400 transition-all duration-300 font-semibold flex items-center gap-2"
                    >
                      <X size={18} />
                      Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      className="bg-[#C91F26] text-white px-6 py-3 rounded-xl hover:bg-[#a51920] transition-all duration-300 font-semibold flex items-center gap-2 shadow-md"
                    >
                      <Check size={18} />
                      Save Changes
                    </button>
                  </div>
                )}
              </div>

              {/* Profile Form */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Full Name */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-[#2C2C2C] mb-3">
                      <User size={18} className="text-[#C91F26]" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      disabled={!isEditing}
                      className={`w-full px-4 py-3.5 border rounded-xl transition-all ${
                        isEditing 
                          ? 'border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C91F26] focus:border-transparent bg-white' 
                          : 'bg-gray-50 border-gray-200 text-gray-700'
                      }`}
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-[#2C2C2C] mb-3">
                      <Mail size={18} className="text-[#C91F26]" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      disabled={!isEditing}
                      className={`w-full px-4 py-3.5 border rounded-xl transition-all ${
                        isEditing 
                          ? 'border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C91F26] focus:border-transparent bg-white' 
                          : 'bg-gray-50 border-gray-200 text-gray-700'
                      }`}
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-[#2C2C2C] mb-3">
                      <Phone size={18} className="text-[#C91F26]" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      disabled={!isEditing}
                      className={`w-full px-4 py-3.5 border rounded-xl transition-all ${
                        isEditing 
                          ? 'border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C91F26] focus:border-transparent bg-white' 
                          : 'bg-gray-50 border-gray-200 text-gray-700'
                      }`}
                    />
                  </div>

                  {/* WhatsApp Number */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-[#2C2C2C] mb-3">
                      <MessageSquare size={18} className="text-[#C91F26]" />
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      value={formData.whatsappNumber}
                      onChange={(e) => handleInputChange('whatsappNumber', e.target.value)}
                      disabled={!isEditing}
                      className={`w-full px-4 py-3.5 border rounded-xl transition-all ${
                        isEditing 
                          ? 'border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C91F26] focus:border-transparent bg-white' 
                          : 'bg-gray-50 border-gray-200 text-gray-700'
                      }`}
                    />
                  </div>

                  {/* Shipping Address - Full Width */}
                  <div className="lg:col-span-2">
                    <label className="flex items-center gap-2 text-sm font-semibold text-[#2C2C2C] mb-3">
                      <MapPin size={18} className="text-[#C91F26]" />
                      Shipping Address
                    </label>
                    <textarea
                      value={formData.shippingAddress}
                      onChange={(e) => handleInputChange('shippingAddress', e.target.value)}
                      disabled={!isEditing}
                      rows={3}
                      className={`w-full px-4 py-3.5 border rounded-xl transition-all resize-none ${
                        isEditing 
                          ? 'border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C91F26] focus:border-transparent bg-white' 
                          : 'bg-gray-50 border-gray-200 text-gray-700'
                      }`}
                    />
                  </div>

                  {/* Communication Channel */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-[#2C2C2C] mb-3">
                      <MessageSquare size={18} className="text-[#C91F26]" />
                      Communication Channel
                    </label>
                    <select
                      value={formData.communicationChannel}
                      onChange={(e) => handleInputChange('communicationChannel', e.target.value)}
                      disabled={!isEditing}
                      className={`w-full px-4 py-3.5 border rounded-xl transition-all ${
                        isEditing 
                          ? 'border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#C91F26] focus:border-transparent bg-white' 
                          : 'bg-gray-50 border-gray-200 text-gray-700'
                      }`}
                    >
                      <option>WhatsApp Number</option>
                      <option>Email</option>
                      <option>Phone Call</option>
                      <option>Telegram</option>
                    </select>
                  </div>

                  {/* User ID - Read Only */}
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-[#2C2C2C] mb-3">
                      <UserCircle size={18} className="text-[#C91F26]" />
                      User ID
                    </label>
                    <input
                      type="text"
                      value={userData.userId}
                      disabled
                      className="w-full px-4 py-3.5 border bg-gray-50 border-gray-200 text-gray-700 rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Change Password */}
          {activeSection === 'change-password' && (
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-[#2C2C2C] mb-2">Change Password</h1>
                <div className="h-1 w-20 bg-[#C91F26]"></div>
              </div>

              <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 lg:p-10">
                <form className="space-y-6 max-w-2xl">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-[#2C2C2C] mb-3">
                      <Lock size={18} className="text-[#C91F26]" />
                      Current Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C91F26] focus:border-transparent"
                      placeholder="Enter current password"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-[#2C2C2C] mb-3">
                      <Lock size={18} className="text-[#C91F26]" />
                      New Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C91F26] focus:border-transparent"
                      placeholder="Enter new password"
                    />
                    <p className="text-sm text-gray-500 mt-2">Password must be at least 8 characters long</p>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-[#2C2C2C] mb-3">
                      <Lock size={18} className="text-[#C91F26]" />
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      className="w-full px-4 py-3.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C91F26] focus:border-transparent"
                      placeholder="Confirm new password"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="bg-[#C91F26] text-white px-8 py-3.5 rounded-xl hover:bg-[#a51920] transition-all duration-300 font-semibold shadow-md"
                    >
                      Update Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Other Sections - Placeholder */}
          {activeSection === 'notifications' && (
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-[#2C2C2C] mb-2">Notifications</h1>
                <div className="h-1 w-20 bg-[#C91F26]"></div>
              </div>
              <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-8">
                <p className="text-gray-600">No new notifications</p>
              </div>
            </div>
          )}

          {activeSection === 'my-orders' && (
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-[#2C2C2C] mb-2">My Orders</h1>
                <div className="h-1 w-20 bg-[#C91F26]"></div>
              </div>
              <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-8">
                <p className="text-gray-600">No orders yet</p>
              </div>
            </div>
          )}

          {activeSection === 'my-payments' && (
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-[#2C2C2C] mb-2">My Payments</h1>
                <div className="h-1 w-20 bg-[#C91F26]"></div>
              </div>
              <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-8">
                <p className="text-gray-600">No payment history</p>
              </div>
            </div>
          )}

          {activeSection === 'offshore-club' && (
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-[#2C2C2C] mb-2">OffShore Club</h1>
                <div className="h-1 w-20 bg-[#C91F26]"></div>
              </div>
              <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-8">
                <p className="text-gray-600">Welcome to OffShore Club - Exclusive benefits coming soon!</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}