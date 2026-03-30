import React from 'react';

const CreateButton = ({ onClick, children = "Create New" }) => {
  return (
    <button 
      className="bg-[#4F46E5] hover:bg-[#1E1B4B] text-white px-4 py-2 rounded-md text-sm font-medium flex items-center shadow-sm"
      onClick={onClick}
    >
      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
      </svg>
      {children}
    </button>
  );
};

export default CreateButton;
