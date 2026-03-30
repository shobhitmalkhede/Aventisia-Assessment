import React from 'react';

const SearchInput = ({ placeholder = "Search...", value, onChange, className = "" }) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
      </div>
      <input 
        className={`block w-64 bg-white border border-gray-300 text-sm rounded-md py-2 pl-10 focus:outline-none focus:ring-1 focus:ring-[#4F46E5] focus:border-[#4F46E5] ${className}`}
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
