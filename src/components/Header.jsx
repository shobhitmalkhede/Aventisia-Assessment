import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#1e1b4b] text-white h-16 flex items-center justify-between px-6 z-20">
      <div className="flex items-center space-x-6">
        {/* Logo and App Name */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-[#4F46E5] rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight">Worcspace</span>
        </div>
        {/* Workspace Selector */}
        <button className="bg-[#1E1B4B]/50 hover:bg-[#1E1B4B] px-3 py-1.5 rounded-md flex items-center space-x-2 text-sm font-medium border border-[#4F46E5]/50">
          <span>Worcspace 1</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
        </button>
      </div>
      {/* Search Bar */}
      <div className="flex-1 max-w-xl px-12">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-4 w-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </div>
          <input 
            className="block w-full bg-[#1E1B4B]/30 border-[#4F46E5]/50 text-white text-sm rounded-md py-1.5 pl-10 pr-16 focus:ring-[#4F46E5] focus:border-[#4F46E5]" 
            placeholder="Search..." 
            type="text"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-xs text-white/80 bg-[#1E1B4B]/50 px-1.5 py-0.5 rounded border border-[#4F46E5]/50">⌘K</span>
          </div>
        </div>
      </div>
      {/* User Profile & Notifications */}
      <div className="flex items-center space-x-5">
        <button className="text-white/80 hover:text-white relative">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-[#1e1b4b]"></span>
        </button>
        <div className="w-8 h-8 rounded-full bg-[#4F46E5] flex items-center justify-center text-xs font-bold text-white border-2 border-[#1E1B4B] cursor-pointer">
          GK
        </div>
      </div>
    </header>
  );
};

export default Header;