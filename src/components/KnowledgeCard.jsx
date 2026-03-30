import React from 'react';

const KnowledgeCard = ({ title = "Test", description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.", createdDate = "14/07/2025" }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
      <div>
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <button className="text-gray-400 hover:text-gray-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
            </svg>
          </button>
        </div>
        <p className="text-sm text-gray-500 line-clamp-3 mb-6">
          {description}
        </p>
      </div>
      <div className="pt-4 border-t border-gray-100">
        <span className="text-xs font-medium text-gray-400">Created On: {createdDate}</span>
      </div>
    </div>
  );
};

export default KnowledgeCard;
